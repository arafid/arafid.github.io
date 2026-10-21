import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
const home=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const root=new URL('../',import.meta.url);
const section=id=>{const start=home.indexOf(`    <section id="${id}"`);if(start<0)throw new Error(`Missing section: ${id}`);const end=home.indexOf('</section>',start);return home.slice(start,end+'</section>'.length);};

const economicsCard=`
        <article class="project-card project-small" data-category="analytics"><a class="project-open" href="/projects/dhaka-rickshaw-economic-impact/" data-project="economics" aria-label="Read the Dhaka Rickshaw Economic Impact Study"><div class="project-art art-math"><div class="art-topline"><span>07 / PRIMARY RESEARCH</span><span>↗</span></div><div class="math-symbol" aria-hidden="true">90</div><div class="small-art-title">90 interviews.<br>One economic shock.</div><span class="small-art-note">FIELD RESEARCH · REGRESSION · DHAKA</span></div><div class="project-info"><div><p class="project-type">PRIMARY RESEARCH / ECONOMICS</p><h3>Dhaka Rickshaw Economic Impact Study</h3><p>Using original interview data to examine how COVID-19 changed income, expenses, and livelihoods.</p><div class="tags"><span>Survey research</span><span>Regression</span><span>Data analysis</span></div></div><span class="project-arrow" aria-hidden="true">↗</span></div></a></article>`;

const projectManagementCard=`
        <article class="project-card project-small" data-category="strategy"><a class="project-open" href="/projects/taco-truck-project-management/" aria-label="Read the mobile app project planning case study"><div class="project-art art-paypal"><div class="art-topline"><span>08 / PROJECT MANAGEMENT</span><span>↗</span></div><div class="paypal-art-icon" aria-hidden="true"><span>→</span><i></i><i></i></div><div class="small-art-title">Plan the work.<br>Manage the change.</div><span class="small-art-note">SCOPE · RISK · QUALITY · STAKEHOLDERS</span></div><div class="project-info"><div><p class="project-type">PROJECT MANAGEMENT / INFORMATION SYSTEMS</p><h3>Mobile App Project Planning</h3><p>Planning a mobile application from requirements and critical path through risk, communication, change control, and closeout.</p><div class="tags"><span>Critical path</span><span>Risk management</span><span>Stakeholders</span></div></div><span class="project-arrow" aria-hidden="true">↗</span></div></a></article>`;

let projectsSection=section('work')
  .replace('All work <span>6</span>','All work <span>8</span>')
  .replace('06 PROJECTS / OPEN TO EXPLORE','08 PROJECTS / OPEN TO EXPLORE')
  .replace('\n      </div>\n      <div class="work-footer">',`${economicsCard}${projectManagementCard}\n      </div>\n      <div class="work-footer">`);

const sections={
 projects:projectsSection,
 skills:section('skills'),
 contact:section('contact')
};
const details={
 projects:['Projects','Explore the work.','Analytics, application development, quantitative research, project planning, and business strategy—with the methods, outcomes, and limitations behind each project.'],
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
console.log('Generated dedicated Skills, Projects, and Contact pages with the full Projects page rendered statically.');
