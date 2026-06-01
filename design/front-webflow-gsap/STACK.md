# Stack Investigation

The live Function.ai page was inspected with Playwright MCP on 2026-05-21.

Detected stack signals:

- Webflow export/runtime:
  - `html` class includes `w-mod-js`.
  - DOM contains Webflow-style attributes/classes such as `data-wf-page`, `data-wf-site`, `w-inline-block`, `w-richtext`, and `w-dyn`.
  - Webflow runtime script loaded from `cdn.prod.website-files.com`.
  - jQuery loaded from Webflow CDN.
- Vercel-hosted animation/application layer:
  - `https://function-ai-function-health.vercel.app/app.js`
  - `https://function-ai-function-health.vercel.app/main-style.css`
- Animation modules preloaded by the live site:
  - `GSAP-d1daff28.js`
  - `ScrollTrigger-852a7d6d.js`
  - `SplitText-efafa2dd.js`
  - `Scroll-22d9e3f8.js`
  - `Loader-314b4f73.js`
  - `Circles-75aef3cd.js`
  - `AllOfUs-9b766580.js`
  - `MouseMove-bd6f9414.js`
  - `Nav-638c50b2.js`
  - `Healthcare-5ab48574.js`
  - `Footer-8f935c72.js`
- No Next.js marker was found:
  - No `#__NEXT_DATA__`.
  - No `_next` assets in the sampled document.
- No React/Vue globals were detected in the live page.

This second clone therefore uses a Webflow-like static markup structure plus GSAP and ScrollTrigger module imports for scroll animation.
