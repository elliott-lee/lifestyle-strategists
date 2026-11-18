import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { createServer } from "node:net";
import { after, before, test } from "node:test";

let baseUrl;
let server;
let serverOutput = "";

before(async () => {
  // Use an available port and strictPort so another app cannot satisfy the tests.
  const portPicker = createServer();
  portPicker.listen(0, "127.0.0.1");
  await once(portPicker, "listening");
  const { port } = portPicker.address();
  await new Promise((resolve, reject) =>
    portPicker.close((error) => (error ? reject(error) : resolve())),
  );
  baseUrl = `http://127.0.0.1:${port}`;
  server = spawn(
    process.execPath,
    [
      "node_modules/vite/bin/vite.js",
      "dev",
      "--host",
      "127.0.0.1",
      "--port",
      String(port),
      "--strictPort",
    ],
    { cwd: new URL("../", import.meta.url), stdio: ["ignore", "pipe", "pipe"] },
  );
  for (const stream of [server.stdout, server.stderr]) {
    stream.on("data", (chunk) => {
      serverOutput = (serverOutput + chunk.toString()).slice(-12000);
    });
  }
  const deadline = Date.now() + 30000;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`Dev server exited: ${serverOutput}`);
    }
    try {
      const response = await fetch(baseUrl, { signal: AbortSignal.timeout(2000) });
      await response.text();
      if (response.ok) return;
    } catch {
      // Retry while Vite starts. The tests still validate actual responses below.
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error(`Dev server did not become ready: ${serverOutput}`);
});

after(async () => {
  if (!server || server.exitCode !== null) return;
  const exited = once(server, "exit");
  server.kill("SIGTERM");
  const timer = setTimeout(() => server.kill("SIGKILL"), 5000);
  try {
    await exited;
  } finally {
    clearTimeout(timer);
  }
});

for (const [path, title, content] of [
  [
    "/",
    "Lifestyle Strategists — Lifestyle medicine, built into daily habits",
    "small, repeated habits",
  ],
  ["/about", "About Us — Lifestyle Strategists", "one shared mission"],
  ["/services", "Services — Lifestyle Strategists", "already gather"],
]) {
  test(`${path} returns its server-rendered page and navigation`, async () => {
    const response = await fetch(new URL(path, baseUrl));
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type"), /text\/html/);
    const html = await response.text();
    assert.ok(html.includes(`<title>${title}</title>`), "page-specific title");
    assert.ok(html.includes(content), "page-specific rendered content");
    assert.match(html, /<h1\b/);
    for (const link of ["/", "/about", "/services"]) {
      assert.ok(html.includes(`href="${link}"`), `navigation link ${link}`);
    }
    assert.ok(!html.includes("This page didn't load"), "no SSR error fallback");
  });
}

test("unknown routes return a 404 page with a way home", async () => {
  const response = await fetch(new URL("/__smoke_test_missing_page__", baseUrl));
  assert.equal(response.status, 404);
  const html = await response.text();
  assert.ok(html.includes("Page not found"));
  assert.ok(html.includes('href="/"'));
});

test("sitemap returns XML listing the public routes", async () => {
  const response = await fetch(new URL("/sitemap.xml", baseUrl));
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /application\/xml/);
  assert.equal(response.headers.get("cache-control"), "public, max-age=3600");
  const xml = await response.text();
  assert.match(xml, /^<\?xml version="1\.0"/);
  assert.match(xml, /<urlset xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9">/);
  const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.equal(locations.length, 3);
  assert.deepEqual(locations.map((location) => new URL(location, baseUrl).pathname).sort(), [
    "/",
    "/about",
    "/services",
  ]);
});

for (const path of ["/", "/about", "/services"]) {
  test(`${path} image asset can be served`, async () => {
    const response = await fetch(new URL(path, baseUrl));
    const html = await response.text();
    const image = html.match(/<img\b[^>]*\bsrc="([^"]+)"/);
    assert.ok(image, `${path} includes an image`);
    const asset = await fetch(new URL(image[1].replaceAll("&amp;", "&"), baseUrl));
    assert.equal(asset.status, 200);
    assert.match(asset.headers.get("content-type"), /^image\//);
    assert.ok((await asset.arrayBuffer()).byteLength > 0, "image is nonempty");
  });
}
