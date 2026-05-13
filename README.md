# Taxagon Website

A production-ready Next.js, React, TypeScript, Tailwind CSS, and Framer Motion rebuild for Taxagon.

## Pages

- `/`
- `/about`
- `/services`
- `/contact`
- `/services/tax-advisory`
- `/services/tax-preparation`
- `/services/outsourced-cfo`
- `/services/company-formation`

## Development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run check
npm run lint
npm run build
```

## Vercel Deployment

This project includes `vercel.json` to force the Vercel deployment preset back to Next.js and clear any stale `public` output-directory override from Project Settings. Vercel should run `npm run build` and use the Next.js build output automatically.

If Vercel still reports `No Output Directory named "public" found`, confirm the project root is this repository root and redeploy so `vercel.json` is applied.

## Placeholder Links

Update the placeholders in `lib/links.ts` before launch:

- Client Portal
- Get Started
- Calendly / Book a Call
- WhatsApp
