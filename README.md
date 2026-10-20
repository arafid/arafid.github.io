# Afnan Rafid — Career Portfolio

Professional portfolio for Afnan Rafid: analytics, application development, cyber risk, and business strategy.

Intended public address: **https://arafid.github.io/**

## Publishing

This repository contains a complete static website. No installation or build is needed to publish it.

In GitHub, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/ (root)**, and save. The `.nojekyll` file tells GitHub Pages to serve these files directly.

## Editing

- `index.html`: homepage, selected work, background, experience, and contact.
- `project-data.mjs`: shared case-study content used by the homepage dialogs and page generator.
- `projects/*/index.html`: five standalone case studies, with directory URLs supported by GitHub Pages.
- `resume/index.html`: readable résumé and PDF download link.
- `styles.css`, `app.js`, `resume.css`, and `resume.js`: presentation and browser interactions.
- `assets/`: PDF résumé, social sharing image, fonts, and favicon.
- `robots.txt` and `sitemap.xml`: crawler rules and discovery of the seven public pages.

After changing project content or search metadata, run `node scripts/generate-pages.mjs` and commit the generated pages. Edit résumé text in `resume/index.html`; the page generator preserves its content.

The optional `scripts/build-assets.py` helper regenerates the PDF and social image. It requires Python, Pillow, ReportLab, DejaVu fonts, and URW Base35 fonts. Inspect regenerated assets before publishing.

The site uses browser-local interactions and has no backend, API credentials, or build dependencies. Contact links open the visitor's mail client.

## Content and search

Profile facts were checked against Afnan's résumé. Project facts were checked against the public repositories under [github.com/arafid](https://github.com/arafid) on 2026-10-17. Academic and team context, actual sample sizes, attribution, and project limitations are retained in the case studies.

Search metadata includes unique titles and descriptions, canonical URLs, social sharing previews, ProfilePage/Person structured data, project descriptions, and breadcrumbs. See `SEARCH_SETUP.md` for the Google account step. These features do not guarantee indexing or ranking.

Font license and copyright information are retained in `assets/FONT-LICENSE.txt`.

## Independent mathematics research

The sixth portfolio project, [The Lies of Aggregate Indicators](https://arafid.github.io/projects/aggregate-indicators/), includes source notes, a transcribed chart dataset, and retrospective limitations in [research/aggregate-indicators](research/aggregate-indicators/).
