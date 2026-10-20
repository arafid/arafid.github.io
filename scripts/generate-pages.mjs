import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { projects } from '../project-data.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = root;
const origin = 'https://arafid.github.io';
const personId = `${origin}/#afnan-rafid`;
const websiteId = `${origin}/#website`;
const modified = '2026-10-20';
// Use timezone-qualified DateTime values for Google's ProfilePage properties.
// Keep creation fixed; update modification only when the profile content changes.
const profileCreatedAt = '2026-10-17T12:07:02Z';
const profileModifiedAt = '2026-10-20T20:11:45Z';
const projectDescriptions = {
  math: 'Afnan Rafid’s independent IB Mathematics AI HL research: household income distributions, regression, model evaluation, and the limits of aggregate indicators.',
  loves: 'Afnan Rafid’s Python customer analytics case study: five datasets, campaign KPIs, customer segmentation, and evidence for behavior-based targeting.',
  amazon: 'Afnan Rafid’s Python NLP project: NLTK VADER, a balanced 300-review sample, complaint themes, and evaluation of sentiment-model limitations.',
  equifax: 'Afnan Rafid’s contribution to a team Equifax cyber risk assessment: four forecast scenarios, business impact, and a 36-month resilience roadmap.',
  weather: 'Explore Afnan Rafid’s C#/.NET Weather API project using async HTTP requests, Open-Meteo, JSON deserialization, and unit conversion.',
  paypal: 'Afnan Rafid’s PayPal team capstone: competitive strategy, SWOT, Five Forces, VRIN, and recommendations for innovation and digital payments.'
};
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const json = value => JSON.stringify(value).replaceAll('<', '\\u003c');
const person = {
  '@type': 'Person', '@id': personId,
  image: `${origin}/assets/afnan-rafid-headshot.png`,
  name: 'Afnan Rafid', givenName: 'Afnan', familyName: 'Rafid',
  url: `${origin}/`,
  description: 'Management Information Technology graduate student and Graduate Teaching Assistant at the University of Oklahoma, with project work in analytics, C# applications, cyber risk, and business strategy.',
  jobTitle: 'Graduate Teaching Assistant',
  worksFor: {'@type': 'CollegeOrUniversity', name: 'University of Oklahoma'},
  alumniOf: {'@type': 'CollegeOrUniversity', name: 'University of Oklahoma'},
  sameAs: ['https://www.linkedin.com/in/arafid/', 'https://github.com/arafid'],
  knowsAbout: ['Python', 'SQL', 'C#', 'Data analytics', 'Natural language processing', 'Cyber risk assessment', 'Business strategy']
};

function metadata({ title, description, url, schema }) {
  return `<title>${escape(title)}</title>
  <meta name="description" content="${escape(description)}">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <meta name="author" content="Afnan Rafid">
  <link rel="canonical" href="${url}">
  <meta property="og:site_name" content="Afnan Rafid">
  <meta property="og:title" content="${escape(title)}">
  <meta property="og:description" content="${escape(description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:locale" content="en_US">
  <meta property="og:image" content="${origin}/assets/social-card.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Afnan Rafid — Data, technology, and business perspective">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escape(title)}">
  <meta name="twitter:description" content="${escape(description)}">
  <meta name="twitter:image" content="${origin}/assets/social-card.png">
  <script type="application/ld+json">${json(schema)}</script>
  `;
}

const title = 'Afnan Rafid | Data Analytics, Technology & Digital Risk';
const description = 'Explore Afnan Rafid’s Python, SQL, C#, analytics, and cyber risk portfolio. OU graduate student and teaching assistant seeking technology and analytics internships.';
const homeSchema = {'@context':'https://schema.org', '@graph': [
  person,
  {'@type':'WebSite', '@id':websiteId, name:'Afnan Rafid', url:`${origin}/`, inLanguage:'en-US', publisher:{'@id':personId}},
  {'@type':'ProfilePage', '@id':`${origin}/#webpage`, url:`${origin}/`, name:title, description,
    dateCreated:profileCreatedAt, dateModified:profileModifiedAt, mainEntity:{'@id':personId}, isPartOf:{'@id':websiteId}, inLanguage:'en-US'}
]};
let home = readFileSync(path.join(dist, 'index.html'), 'utf8');
home = home.replace(/<title>[\s\S]*?(?=<link rel="icon")/, metadata({title, description, url:`${origin}/`, schema:homeSchema}));
writeFileSync(path.join(dist, 'index.html'), home);

let resume = readFileSync(path.join(dist, 'resume', 'index.html'), 'utf8');
resume = resume.replace(/<title>[\s\S]*?(?=<link rel="icon")/, metadata({
  title:'Afnan Rafid — Résumé | Analytics & Business Technology',
  description:'Read or download Afnan Rafid’s résumé: OU education, Python and SQL analytics, C# applications, cyber risk projects, and Graduate Teaching Assistant experience.',
  url:`${origin}/resume/`,
  schema:{'@context':'https://schema.org', '@type':'WebPage', '@id':`${origin}/resume/#webpage`, url:`${origin}/resume/`, name:'Afnan Rafid — Résumé', about:person, isPartOf:{'@id':websiteId}, inLanguage:'en-US'}
}));
writeFileSync(path.join(dist, 'resume', 'index.html'), resume);

mkdirSync(path.join(dist, 'projects'), {recursive:true});
const list = Object.values(projects);
list.forEach((project, index) => {
  const projectKey = Object.keys(projects)[index];
  const url = origin + project.path;
  const next = list[(index + 1) % list.length];
  const schema = {'@context':'https://schema.org', '@graph':[
    person,
    {'@type':'WebPage', '@id':`${url}#webpage`, url, name:`${project.title} — Afnan Rafid`, description:project.intro,
      isPartOf:{'@id':websiteId}, mainEntity:{'@id':`${url}#project`}, breadcrumb:{'@id':`${url}#breadcrumb`}, inLanguage:'en-US'},
    {'@type':'CreativeWork', '@id':`${url}#project`, name:project.title, description:project.intro,
      url, contributor:{'@id':personId}, genre:'Academic portfolio project', keywords:project.tags.join(', '), sameAs:project.repo},
    {'@type':'BreadcrumbList', '@id':`${url}#breadcrumb`, itemListElement:[
      {'@type':'ListItem', position:1, name:'Afnan Rafid', item:`${origin}/`},
      {'@type':'ListItem', position:2, name:'Selected work', item:`${origin}/#work`},
      {'@type':'ListItem', position:3, name:project.title, item:url}
    ]}
  ]};
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#f4f1e9">
${metadata({title:`${project.title} | Afnan Rafid`,description:projectDescriptions[projectKey],url,schema})}
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/styles.css"></head>
<body class="case-body"><a class="skip-link" href="#case-main">Skip to case study</a>
<header class="case-header section-wrap"><a class="wordmark" href="/">afnan rafid<span class="brand-dot">.</span></a><a class="case-back" href="/#work">← All projects</a><a class="case-resume" href="/assets/Afnan_Rafid_Resume.pdf" download>Résumé ↓</a></header>
<main id="case-main" class="case-page section-wrap"><nav class="case-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/#work">Work</a><span>/</span><span aria-current="page">${escape(project.title)}</span></nav>
<article><p class="eyebrow">${escape(project.category)}</p><h1>${escape(project.title)}</h1><p class="case-intro">${escape(project.intro)}</p>
<div class="case-stats">${project.stats.map(([value,label])=>`<div><strong>${escape(value)}</strong><span>${escape(label)}</span></div>`).join('')}</div>
<div class="case-layout"><div class="case-content">${project.sections.map(([heading,content])=>`<section><h2>${escape(heading)}</h2>${content}</section>`).join('')}
<section class="case-scope"><h2>Scope & limitations</h2><p>${escape(project.note)}</p></section></div>
<aside class="case-sidebar" aria-label="Project resources"><h2>Tools & methods</h2><div class="tags">${project.tags.map(tag=>`<span>${escape(tag)}</span>`).join('')}</div><h2>Explore the work</h2><a class="button button-dark" href="${project.repo}" target="_blank" rel="noopener noreferrer">GitHub repository ↗</a>${project.supporting?`<a class="text-link" href="${project.supporting[1]}" target="_blank" rel="noopener noreferrer">${escape(project.supporting[0])} ↗</a>`:''}<div class="case-contact-note"><h2>Let’s connect</h2><p>Interested in my approach to analytics, applications, or technology risk?</p><a href="mailto:arafid@ou.edu">arafid@ou.edu ↗</a></div></aside></div></article>
<nav class="case-next" aria-label="More project work"><a href="/#work">← Back to selected work</a><a href="${next.path}"><span>NEXT PROJECT</span>${escape(next.title)} ↗</a></nav></main>
<footer class="site-footer section-wrap"><a class="wordmark" href="/">afnan rafid<span class="brand-dot">.</span></a><p>Thoughtful work. A little personality.</p><a class="back-top" href="/#contact">GET IN TOUCH ↗</a><span>© 2026 Afnan Rafid</span></footer></body></html>`;
  const projectDirectory = path.join(dist, project.path.slice(1));
  mkdirSync(projectDirectory, {recursive:true});
  writeFileSync(path.join(projectDirectory, 'index.html'), html);
});

const urls = [`${origin}/`, `${origin}/resume/`, `${origin}/skills/`, `${origin}/projects/`, `${origin}/contact/`, ...list.map(project=>origin+project.path)];
writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url=>`  <url><loc>${url}</loc><lastmod>${modified}</lastmod></url>`).join('\n')}\n</urlset>\n`);
writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
console.log(`Generated ${list.length} case-study pages, metadata, structured data, sitemap, and crawler rules.`);

// Keep dedicated navigation pages in sync with homepage content and metadata.
await import('./generate-section-pages.mjs');
