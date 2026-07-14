## Why it 404s on Vercel

Your build log has the smoking gun:

```
[@lovable.dev/vite-tanstack-config] No Lovable context detected —
skipping nitro deploy plugin. Pass `nitro: true` to force-enable.
```

TanStack Start is a **full-stack SSR framework**, not a static site. It needs a server runtime (Nitro) to render routes on request. On Lovable's hosting, Nitro is auto-configured. On Vercel/Netlify, the plugin sees no Lovable context and skips Nitro entirely, so only static client assets get deployed — no server handler exists to render `/`, hence the 404 on every route.

Netlify failed the same way for the same reason.

## Fix — enable Nitro with the Vercel preset

Update `vite.config.ts` to force-enable Nitro and target Vercel:

```ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
  },
});
```

This makes the build emit a Vercel-compatible serverless function under `.vercel/output/functions/` alongside the static client assets, which Vercel's Build Output API picks up automatically.

## Vercel project settings

- **Framework Preset:** Other (leave it — the Build Output API produced by Nitro is framework-agnostic)
- **Build Command:** `vite build` (default from `package.json`)
- **Output Directory:** leave blank — Nitro writes to `.vercel/output` which Vercel auto-detects
- **Install Command:** default (`bun install`)
- No env vars needed unless you later add Lovable Cloud

## For Netlify (if you want it there instead)

Same idea, different preset:

```ts
nitro: { preset: "netlify" }
```

And in Netlify settings: Build command `vite build`, Publish directory `dist` (Netlify auto-detects the functions from `.netlify/`).

## About "which template"

You picked correctly — TanStack is the right template. Vercel just needs Nitro turned on so the SSR handler actually ships.

## Steps

1. Edit `vite.config.ts` to add `nitro: { preset: "vercel" }`.
2. Commit and push to `main` — Vercel auto-redeploys.
3. Verify `/` loads and no `NOT_FOUND` on refresh of deep links.

Want me to switch to build mode and make the change?
