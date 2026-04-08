# Roos Garage Doors Cape Town — Website

Production-ready multi-page website for Roos Garage Doors Cape Town, built with **Next.js 15 App Router** and **Tailwind CSS v4**. Designed for Vercel deployment.

## Tech Stack
- Next.js 15.0.3 (App Router, React 19)
- Tailwind CSS v4 (CSS-first config via `@theme`)
- No client-state libraries beyond React
- Zero 3rd-party JS on the critical path

## Local Development

```bash
npm install
npm run dev
```

Opens at http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Structure

```
app/
├── layout.js              # Root layout, fonts, LocalBusiness JSON-LD
├── page.js                # Homepage
├── about/page.js
├── contact/page.js
├── gallery/page.js
├── service-areas/page.js
├── services/[slug]/page.js  # Dynamic service pages from lib/business.js
├── not-found.js           # 404
├── sitemap.js             # Generates /sitemap.xml
├── robots.js              # Generates /robots.txt
└── globals.css            # Tailwind v4 + design tokens

components/
├── Header.js              # Sticky nav + mobile menu
├── Footer.js
├── Breadcrumbs.js         # With BreadcrumbList JSON-LD
└── CTASection.js

lib/
└── business.js            # Single source of truth: NAP, services, areas, testimonials
```

## SEO Implemented
- Per-page unique `<title>` and meta description via `generateMetadata()`
- Self-referencing canonicals
- Open Graph + Twitter Card tags
- LocalBusiness JSON-LD (sitewide)
- Service JSON-LD (per service page)
- BreadcrumbList JSON-LD (every non-home page)
- Dynamic `sitemap.xml` and `robots.txt`
- Semantic HTML5 landmarks, single H1 per page
- Skip-to-content link, `:focus-visible` styles, WCAG AA contrast

## Design System
Industrial Refined / Workshop Editorial.
- **Display:** Big Shoulders Display (600/800)
- **Body:** Manrope (400/500/700)
- **Palette:** Bone `#F5F1EA`, Graphite `#111315`, Meranti `#B4591F`, Aluminium `#B8BCC0`, Ember `#E2691C`
- Square CTAs, warm-cool tension, no gradients.

See `design-system.md` for the full spec.

## Deployment to Vercel

1. Push this repo to GitHub.
2. Import into Vercel — auto-detects Next.js.
3. Build command: `npm run build`. Output: `.next`.
4. Add custom domain in Vercel → Settings → Domains.

## Content / Asset TODOs before launch
- Replace gallery placeholder tiles with real photographs.
- Add a hero photograph of the Brackenfell workshop (currently uses CSS grain).
- Connect the contact form to Resend / Formspree / Vercel Forms (currently uses `mailto:`).
- Verify GBP link and add `sameAs` URLs to LocalBusiness schema.
- Add Google Analytics 4 or Plausible on deploy.

## Pages
- `/` Homepage
- `/about`
- `/services/meranti-timber-garage-doors`
- `/services/aluminium-garage-doors`
- `/services/aluzinc-steel-garage-doors`
- `/services/garage-door-automation`
- `/services/repairs`
- `/gallery`
- `/service-areas`
- `/contact`
- 404 page

---
Built April 2026.
