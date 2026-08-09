# [FORM] renewal

Peptide skincare brand frontend for **[FORM] renewal**.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Framer Motion (`whileInView`, `useScroll`, `useTransform`, stagger, AnimatePresence)
- Lenis smooth scrolling

Frontend shell only — no backend/checkout yet. Product purchase CTAs link to the matching listings on [Purgo Labs](https://www.purgolabs.com).

## Homepage sections (Seed-aligned)

Mirrored from seed.com’s live section architecture:

1. Hero (parallax + entrance)
2. Product lineup (staggered cards)
3. Highlight / bundle pair
4. Peptide tech sticky story + scroll-scrubbed counter (ViaCap-style)
5. Science / education
6. Stories carousel
7. Horizontal UGC scroller (scroll-linked)
8. Labs / Purgo fulfillment
9. Bookend CTA

## Brand

| Token | Value |
| --- | --- |
| Brand color | Pantone 6207 U ≈ `#8A8664` |
| `[FORM]` | Lexend Deca Regular |
| `renewal` | News 701 BT Italic (web fallback: Newsreader Italic until licensed font files are added under `public/fonts`) |
| Logo | Real logo asset used sitewide via `BrandLogo` → `public/logo-white.png` / `public/logo-dark.png` (from provided logo photo) |
| Product photos | Pulled from Purgo Labs into `public/products/` |

## Products

1. Copper Growth Shampoo → Purgo `ghk-cu-copper-peptide-shampoo`
2. Capsule Cream → Purgo `ghk-cu-copper-peptide-capsule-cream`
3. Lift Cream → Purgo `ghk-cu-lift-cream`

Product imagery uses text placeholders until photography is ready.

## Develop

```bash
npm install
npm run dev
```

## Deploy (Vercel)

1. Push this repo to GitHub
2. Import the project in Vercel
3. Use default Next.js settings (`npm run build`)
