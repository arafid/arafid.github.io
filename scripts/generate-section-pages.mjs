import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
const home=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const root=new URL('../',import.meta.url);
const section=id=>{const start=home.indexOf(`    <section id="${id}"`);if(start<0)throw new Error(`Missing section: ${id}`);const end=home.indexOf('</section>',start);return home.slice(start,end+'</section>'.length);};
const sections={
 projects:section('work'),
 skills:section('skills'),
 contact:section('contact')
};
const details={
 projects:['Projects','Explore the work.','Analytics, application development, quantitative research, and business strategy—with the methods, outcomes, and limitations behind each project.'],
 skills:['Skills','Tools meet judgment.','A practical view of the tools and methods I use to analyze data, build applications, and assess technology risk.'],
 contact:['Contact','Start a conversation.','Interested in analytics, business technology, or digital risk? Reach out about opportunities, projects, or a useful exchange of ideas.']
};
for(const [slug,[label,heading,description]] of Object.entries(details)){
 let html=home.replace(/<main id="main">[\s\S]*?<\/main>/,`<main id="main" class="route-main"><header class="route-intro section-wrap"><p class="eyebrow">AFNAN RAFID / ${label.toUpperCase()}</p><h1>${heading}</h1><p>${description}</p><nav class="route-links" aria-label="Explore portfolio">${[['projects','Projects'],['skills','Skills'],['contact','Contact']].filter(([key])=>key!==slug).map(([key,name])=>`<a href="/${key}/">${name} ↗</a>`).join('')}<a href="/resume/">Résumé ↗</a></nav></header>${sections[slug]}</main>`);
 html=html.replace(/<title>.*?<\/title>/,`<title>${label} | Afnan Rafid</title>`).replace(/<meta name="description" content="[^"]*">/,`<meta name="description" content="${description}">`).replace(/<link rel="canonical" href="[^"]*">/,`<link rel="canonical" href="https://arafid.github.io/${slug}/">`);
 html=html.replace(/(<meta property="og:url" content=")[^"]*/,`$1https://arafid.github.io/${slug}/`).replace(/(<meta (?:property="og:title"|name="twitter:title") content=")[^"]*/g,`$1${label} | Afnan Rafid`).replace(/(<meta (?:property="og:description"|name="twitter:description") content=")[^"]*/g,`$1${description}`);
 const schema={'@context':'https://schema.org','@type':slug==='contact'?'ContactPage':slug==='projects'?'CollectionPage':'WebPage',name:`${label} | Afnan Rafid`,url:`https://arafid.github.io/${slug}/`,description,about:{'@type':'Person','@id':'https://arafid.github.io/#afnan-rafid',name:'Afnan Rafid'},isPartOf:{'@id':'https://arafid.github.io/#website'}};
 html=html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/,`<script type="application/ld+json">${JSON.stringify(schema)}</script>`);
 html=html.replaceAll('href="#"','href="/"').replaceAll('href="#about"','href="/#about"').replaceAll('href="#experience"','href="/#experience"');
 html=html.replaceAll(`href="/${slug}/"`,`href="/${slug}/" aria-current="page"`);
 if(slug==='skills')html=html.replaceAll('href="#work" class="toolbox-link" data-focus-filter="analytics"','href="/projects/?filter=analytics#work" class="toolbox-link"').replaceAll('href="#work" class="toolbox-link" data-focus-filter="development"','href="/projects/?filter=development#work" class="toolbox-link"').replaceAll('href="#work" class="toolbox-link" data-focus-filter="strategy"','href="/projects/?filter=strategy#work" class="toolbox-link"');
 const dir=new URL(`${slug}/`,root);mkdirSync(dir,{recursive:true});writeFileSync(new URL('index.html',dir),html);
}
console.log('Generated dedicated Skills, Projects, and Contact pages.');
