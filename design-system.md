# Design System — Roos Garage Doors Cape Town

## Aesthetic Direction: **Industrial Refined / Workshop Editorial**
A garage door workshop is part craftsmanship, part machinery. This site should feel like a well-run Brackenfell industrial workshop crossed with an architecture monograph: confident, mechanical, warm where timber enters, cool where metal does. Big condensed display type, wide generous whitespace, photography-forward with warm oak and cool aluminium accents. No SaaS gradients. No hero-with-illustration clichés. No neon.

## Typography
- **Display:** [Big Shoulders Display](https://fonts.google.com/specimen/Big+Shoulders+Display) — condensed industrial slab sans. Evokes workshop signage, freight lettering, and is rare enough to avoid sameness.
- **Body:** [Manrope](https://fonts.google.com/specimen/Manrope) — geometric, warm, legible at small sizes.
- **Import:** `https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;800&family=Manrope:wght@400;500;700&display=swap`

## Color Palette (CSS Custom Properties)
```css
:root {
  --bone: #F5F1EA;        /* background, warm off-white */
  --graphite: #111315;    /* primary text, near-black */
  --steel: #3A3F44;       /* secondary, cool gray */
  --aluminium: #B8BCC0;   /* dividers, subtle */
  --meranti: #B4591F;     /* primary accent, warm timber */
  --ember: #E2691C;       /* hover/CTA flash */
  --sage: #6A7A5C;        /* secondary accent */
  --success: #2F7D4F;
  --error: #B8342C;
}
```
Dominant palette: bone + graphite. Meranti used sparingly for CTAs, active states, H1 underlines.

## Spacing Scale (rem)
`0.25 0.5 0.75 1 1.5 2 3 4 6 8 12 16 24`

## Radii
- `--r-sm: 2px` (inputs, chips)
- `--r-md: 4px` (cards)
- `--r-lg: 0` (buttons — intentionally square, industrial)

## Shadows
- `--shadow-1: 0 1px 2px rgba(17,19,21,.06)`
- `--shadow-2: 0 8px 24px -8px rgba(17,19,21,.18)`

## Buttons
- **Primary:** square, graphite bg, bone text, meranti bottom border 2px, uppercase tracked label. Hover: slides 2px up, border becomes ember.
- **Secondary:** ghost, graphite border 1px, transparent bg.

## Components
- **Cards:** bone bg, 1px aluminium border, no radius except inner image 2px. Label in Big Shoulders uppercase + Manrope body.
- **Section headers:** oversized Big Shoulders (clamp(3rem, 8vw, 7rem)), meranti accent rule 60px long left-aligned above.
- **Testimonials:** pull-quote style, oversized opening quotation mark in meranti outline.
- **Nav:** thin top bar, letter-spaced uppercase Manrope, active underline in meranti.

## Motion
- Fade-in + 8px translate on scroll reveal (200ms, ease-out)
- Button hover translate -2px (150ms)
- No parallax, no autoplay video, no scroll-jacking.

## Anti-Slop Checklist
- ❌ Inter / Roboto / Arial / system-ui
- ❌ Purple gradients
- ❌ Rounded-xl hero cards with emoji
- ❌ Centered "Trusted by" logo rows
- ✅ Distinct display font
- ✅ Warm-cool tension (meranti vs aluminium)
- ✅ Square CTAs
- ✅ Industry-appropriate tone
