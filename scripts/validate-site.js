const { readFileSync } = require('node:fs');

const html = readFileSync('index.html', 'utf8');
const css = readFileSync('styles.css', 'utf8');

const requiredSections = ['services', 'platform', 'industries', 'pricing', 'faq', 'contact'];
const missingSections = requiredSections.filter((id) => !html.includes(`id="${id}"`));

if (missingSections.length > 0) {
  throw new Error(`Missing sections: ${missingSections.join(', ')}`);
}

const requiredContent = ['Monthly accounting', 'Tax strategy', 'Payroll & contractors', 'Fractional CFO'];
const missingContent = requiredContent.filter((copy) => !html.includes(copy));

if (missingContent.length > 0) {
  throw new Error(`Missing service content: ${missingContent.join(', ')}`);
}

if (!html.includes('styles.css')) {
  throw new Error('The HTML entry point must load styles.css.');
}

if (!css.includes('@media (max-width: 1000px)')) {
  throw new Error('Responsive tablet styles are missing.');
}

if (!css.includes('@media (max-width: 640px)')) {
  throw new Error('Responsive mobile styles are missing.');
}

console.log('Static site validation passed.');
