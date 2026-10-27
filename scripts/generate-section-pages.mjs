import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
for (const slug of ['projects']) {
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
  const desktopNav = `<nav aria-label="Main navigation">\n      <a href="/#about">About <span>01</span></a>\n      <a href="/#work">Projects <span>02</span></a>\n      <a href="/#skills">Skills <span>03</span></a>\n      <a href="/#contact">Contact <span>04</span></a>\n    </nav>`;
  const mobileNav = `<nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation" hidden>\n      <a href="/#work">Projects</a><a href="/#about">About</a><a href="/#experience">Experience</a><a href="/#skills">Skills</a><a href="/#contact">Contact</a><a href="/assets/Afnan_Rafid_Resume.pdf" download>Download résumé ↓</a>\n    </nav>`;
  html = html.replace(/<nav aria-label="Main navigation">[\s\S]*?<\/nav>/, desktopNav);
  html = html.replace(/<nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation" hidden>[\s\S]*?<\/nav>/, mobileNav);
  html = html.replace(/<a class="header-contact" href="\/contact\/"(?: aria-current="page")?>/, '<a class="header-contact" href="/#contact">');
  writeFileSync(file, html);
}
console.log('Normalized the dedicated Projects page; Skills and Contact live on the main portfolio.');
