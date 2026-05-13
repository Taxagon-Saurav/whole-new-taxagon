const { readFileSync } = require('node:fs');

const html = readFileSync('index.html', 'utf8');
const css = readFileSync('styles.css', 'utf8');

const requiredSections = ['services', 'process', 'pricing', 'contact'];
const missingSections = requiredSections.filter((id) => !html.includes(`id="${id}"`));

if (missingSections.length > 0) {
  throw new Error(`Missing sections: ${missingSections.join(', ')}`);
}

if (!html.includes('styles.css')) {
  throw new Error('The HTML entry point must load styles.css.');
}

if (!css.includes('@media (max-width: 900px)')) {
  throw new Error('Responsive tablet styles are missing.');
}

if (!css.includes('@media (max-width: 560px)')) {
  throw new Error('Responsive mobile styles are missing.');
}

console.log('Static site validation passed.');
