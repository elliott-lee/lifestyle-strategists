# Smoke tests

Run `npm run test:smoke` (or `bun run test:smoke`) after installing dependencies.
Node.js 22 or later is required. No extra test dependencies or credentials are needed.

The suite starts Vite on an available loopback port, waits for a successful HTTP
response, and stops the server afterward. It checks:

- Server-rendered content, titles, and navigation links for `/`, `/about`, and `/services`.
- A missing route returns HTTP 404 and a link home.
- The sitemap returns XML, the expected routes, and its cache header.
- The main image on `/`, `/about`, and `/services` returns nonempty image content.

These are development-server HTTP checks. They do not exercise browser hydration,
interactive controls, deployed hosting, or prove the absence of XSS vulnerabilities.
The sitemap test checks route coverage; it does not certify sitemap SEO validity.
Run `npm run build` and `npx tsc --noEmit` separately for production build and type checks.
