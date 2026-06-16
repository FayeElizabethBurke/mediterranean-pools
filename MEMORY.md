# Mediterranean Pools Qld — Project Memory

## Project Overview
- **Client:** Mediterranean Pools Qld PTY Ltd
- **Owner:** Brad (0403 866 061)
- **Location:** South Brisbane, QLD
- **Website:** mediterraneanpoolsqld.com.au

## New Site Location
`/Users/fayeburke/Desktop/development/mediterranean-pools/new-site/`

## Tech Stack
- Framework: Astro 4 (static output)
- Styling: Tailwind CSS 3
- Forms: Formspree (ID placeholder: `xyzabcde` — needs real ID in QuoteForm.astro)
- Deployment: GitHub Pages via GitHub Actions

## Key Files
- `astro.config.mjs` — Static output, site URL set to mediterraneanpoolsqld.com.au
- `tailwind.config.mjs` — Custom colors: navy, aqua, sand palettes + DM Serif Display + Inter fonts
- `src/layouts/BaseLayout.astro` — JSON-LD LocalBusiness schema, OpenGraph, meta tags
- `src/components/Header.astro` — Sticky nav with scroll effect, mobile menu
- `src/components/QuoteForm.astro` — 3 variants: hero/section/page (Formspree)
- `src/pages/index.astro` — Full homepage with all sections
- `src/pages/about.astro`, services.astro, gallery.astro, contact.astro

## Color Palette
- Primary: navy-900 (#0A1628), navy-950 (#070F1C)
- Accent: aqua-500 (#06B6D4)
- CTA bg: bg-cta-pattern (navy gradient)

## Images
Real pool images in `public/images/` (copied from current-implementation):
- hero-pool.jpg, pool-1.jpg through pool-7.jpg
- pool-gallery-1.png through pool-gallery-5.png
- about-pool.png, pool-feature.png, pool-luxury.png, logo.png

## Build
- `npm install` then `npm run build` — verified working ✓
- Output: `dist/` folder (static HTML, CSS, JS, images)

## Deployment Notes
- For GitHub Pages on custom domain: set `site` in astro.config.mjs
- For GitHub Pages on repo sub-path: uncomment `base: '/repo-name'` in astro.config.mjs
- GitHub Actions workflow: `.github/workflows/deploy.yml`
- Formspree: sign up at formspree.io, replace `xyzabcde` in QuoteForm.astro

## SEO
- JSON-LD LocalBusiness schema in BaseLayout
- sitemap.xml generated at /sitemap.xml
- robots.txt in public/
- OpenGraph + Twitter cards on all pages
- Keywords: "concrete pools Brisbane", "custom pools QLD"
