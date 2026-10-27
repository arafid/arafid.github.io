import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
for (const slug of ['projects', 'skills', 'contact']) {
  const file = path.join(root, slug, 'index.html');
  let html = readFileSync(file, 'utf8');
  html = html
    .replaceAll('<meta name="theme-color" content="#f4f1e9">', '<meta name="theme-color" content="#090a0c">')
    .replaceAll('<meta name="theme-color" content="#f4f1e9" />', '<meta name="theme-color" content="#090a0c">')
    .replaceAll('Contact <span>05</span>', 'Contact <span>04</span>')
    .replaceAll('>afnan rafid<span class="brand-dot">.</span></a>', '>Afnan Rafid<span class="brand-dot">.</span></a>');
  if (!html.includes('/secondary-dark.css')) {
    html = html.replace('<link rel="stylesheet" href="/styles.css">', '<link rel="stylesheet" href="/styles.css">\n  <link rel="stylesheet" href="/secondary-dark.css">');
  }
  writeFileSync(file, html);
}
console.log('Normalized dedicated Projects, Skills, and Contact pages for the unified dark portfolio theme.');
