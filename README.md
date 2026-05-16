# Taxagon Website

A production-ready Next.js 14, React 18, TypeScript, Tailwind CSS 3, and Framer Motion rebuild for Taxagon.

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

This project includes `vercel.json` to force the Vercel deployment preset back to Next.js and override any stale `public` output-directory setting from Project Settings. Vercel should run `npm install --legacy-peer-deps`, then `npm run build`, and use the `.next` Next.js build output. The app intentionally uses stable Next.js 14, React 18, and Tailwind CSS 3 versions to avoid deployment failures from newer peer-dependency combinations.

If Vercel still reports `No Output Directory named "public" found`, confirm the project root is this repository root, make sure the latest commit is deployed, and redeploy so `vercel.json` is applied.

If `npm run build` exits with code 1 again, open the failed Vercel deployment, expand the build log above the final line, and copy the first real compiler error. The final `exited with 1` line only says the build failed; the actionable error is earlier in the log.

## Placeholder Links

Update the placeholders in `lib/links.ts` before launch:

- Client Portal
- Get Started (currently set to the AI Studio app link)
- Calendly / Book a Call
- WhatsApp
