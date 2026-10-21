# Afnan Rafid — Career Portfolio

Professional portfolio for Afnan Rafid: analytics, application development, cyber risk, project planning, and business strategy.

Intended public address: **https://arafid.github.io/**

## Publishing

This repository contains a complete static website. No installation or build is needed to publish it.

In GitHub, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/ (root)**, and save. The `.nojekyll` file tells GitHub Pages to serve these files directly.

## Editing

- `index.html`: homepage, selected work, background, experience, and contact.
- `project-data.mjs`: shared content for primary case studies used by the homepage dialogs and page generator.
- `projects/*/index.html`: standalone primary and supporting case studies, with directory URLs supported by GitHub Pages.
- `projects/taco-truck-project-management/`: supporting project-management case study and cleaned artifact digest; intentionally kept outside the homepage modal system.
- `resume/index.html`: readable résumé and PDF download link.
- `styles.css`, `app.js`, `resume.css`, and `resume.js`: presentation and browser interactions.
- `assets/`: PDF résumé, social sharing image, fonts, and favicon.
- `robots.txt` and `sitemap.xml`: crawler rules and discovery of public portfolio pages.

After changing primary project content or search metadata, run `node scripts/generate-pages.mjs` and commit the generated pages. Supporting case-study URLs are preserved in the generated sitemap. Edit résumé text in `resume/index.html`; the page generator preserves its content.

The optional `scripts/build-assets.py` helper regenerates the PDF and social image. It requires Python, Pillow, ReportLab, DejaVu fonts, and URW Base35 fonts. Inspect regenerated assets before publishing.

The site uses browser-local interactions and has no backend, API credentials, or build dependencies. Contact links open the visitor's mail client.

## Content and search

Profile facts were checked against Afnan's résumé. Project facts were checked against the public repositories and source project material. Academic and team context, actual sample sizes where relevant, attribution, and project limitations are retained in the case studies.

Search metadata includes unique titles and descriptions, canonical URLs, social sharing previews, ProfilePage/Person structured data, project descriptions, and breadcrumbs. See `SEARCH_SETUP.md` for the Google account step. These features do not guarantee indexing or ranking.

Font license and copyright information are retained in `assets/FONT-LICENSE.txt`.

## Supporting project management case study

[La Cocina de la Abuela Mobile App Planning](https://arafid.github.io/projects/taco-truck-project-management/) is intentionally presented as supporting portfolio evidence rather than a flagship development project. The cleaned public version focuses on requirements, schedule and critical path, cost/procurement, risk, quality, stakeholder communication, change control, and closeout. The original class submissions and individual reflection are not published.

## Independent mathematics research

[The Lies of Aggregate Indicators](https://arafid.github.io/projects/aggregate-indicators/) includes source notes, a transcribed chart dataset, and retrospective limitations in `research/aggregate-indicators/`.
