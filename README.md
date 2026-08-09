# [FORM] renewal

Peptide skincare brand frontend for **[FORM] renewal**.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Framer Motion available for future motion work

Frontend shell only — no backend/checkout yet. Product purchase CTAs link to the matching listings on [Purgo Labs](https://www.purgolabs.com).

## Brand

| Token | Value |
| --- | --- |
| Brand color | Pantone 6207 U ≈ `#8A8664` |
| `[FORM]` | Lexend Deca Regular |
| `renewal` | News 701 BT Italic (web fallback: Newsreader Italic until licensed font files are added under `public/fonts`) |
| Logo | `public/logo.pdf`, `public/logo-white.png`, `public/logo-dark.png` |

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
