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

This project includes `vercel.json` to force the Vercel deployment preset back to Next.js and override any stale `public` output-directory setting from Project Settings. Vercel should run `npm run build` and use the `.next` Next.js build output. The config also forces Vercel to run `npm install` before building so the `next` binary is available during `npm run build`.

If Vercel still reports `No Output Directory named "public" found`, confirm the project root is this repository root, make sure the latest commit is deployed, and redeploy so `vercel.json` is applied.

## Placeholder Links

Update the placeholders in `lib/links.ts` before launch:

- Client Portal
- Get Started
- Calendly / Book a Call
- WhatsApp
