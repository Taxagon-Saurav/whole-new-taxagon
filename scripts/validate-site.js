const { existsSync, readFileSync } = require('node:fs');
const { join } = require('node:path');

const requiredFiles = [
  'app/page.tsx',
  'app/about/page.tsx',
  'app/services/page.tsx',
  'app/contact/page.tsx',
  'app/services/tax-advisory/page.tsx',
  'app/services/tax-preparation/page.tsx',
  'app/services/outsourced-cfo/page.tsx',
  'app/services/company-formation/page.tsx',
  'components/Header.tsx',
  'components/Footer.tsx',
  'components/Hero.tsx',
  'vercel.json',
];

const missing = requiredFiles.filter((file) => !existsSync(join(process.cwd(), file)));
if (missing.length) throw new Error(`Missing required files: ${missing.join(', ')}`);

const vercelConfig = JSON.parse(readFileSync('vercel.json', 'utf8'));
if (vercelConfig.framework !== 'nextjs') throw new Error('Vercel framework must be nextjs.');
if (vercelConfig.outputDirectory !== '.next') throw new Error('Vercel outputDirectory must be .next for Next.js builds.');
if (vercelConfig.buildCommand !== 'npm run build') throw new Error('Vercel buildCommand must use npm run build.');
if (vercelConfig.installCommand !== 'npm install') throw new Error('Vercel installCommand must install dependencies before build.');

const packageJson = readFileSync('package.json', 'utf8');
for (const dependency of ['next', 'react', 'react-dom', 'framer-motion', 'tailwindcss']) {
  if (!packageJson.includes(`"${dependency}"`)) throw new Error(`Missing dependency: ${dependency}`);
}

const globals = readFileSync('app/globals.css', 'utf8');
if (!globals.includes('@import "tailwindcss"')) throw new Error('Tailwind CSS import missing.');
if (!globals.toLowerCase().includes('#1c41f7')) throw new Error('Primary Taxagon color missing.');

const buttonLink = readFileSync('components/ButtonLink.tsx', 'utf8');
if (!buttonLink.includes('function isInternalHref')) throw new Error('ButtonLink must distinguish internal links from external/placeholders.');
if (!buttonLink.includes('<a href={href}')) throw new Error('ButtonLink must keep external and placeholder CTAs as anchors.');

const header = readFileSync('components/Header.tsx', 'utf8');
for (const text of ['Client Portal', 'Get Started', 'Services', 'Toggle mobile menu']) {
  if (!header.includes(text)) throw new Error(`Header missing ${text}`);
}

const homeContent = readFileSync('app/page.tsx', 'utf8') + readFileSync('lib/content.ts', 'utf8');
for (const text of ['One team for all your accounting needs', 'Reduce Taxes', 'Join our WhatsApp community', 'What our customers are saying']) {
  if (!homeContent.includes(text)) throw new Error(`Home page missing ${text}`);
}

console.log('Static Next.js site validation passed.');
