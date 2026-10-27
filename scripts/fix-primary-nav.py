from pathlib import Path
import re

root = Path('.')

home = root / 'index.html'
html = home.read_text()

desktop_home = '''<nav class="desktop-nav" aria-label="Main navigation">
        <a href="#work">Projects</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a class="resume-pill" href="/assets/Afnan_Rafid_Resume.pdf" download>Résumé ↓</a>
      </nav>'''
mobile_home = '''<nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation" hidden>
        <a href="#work">Projects</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#contact">Contact</a><a href="/assets/Afnan_Rafid_Resume.pdf" download>Download résumé ↓</a>
      </nav>'''

html, n1 = re.subn(r'<nav class="desktop-nav" aria-label="Main navigation">.*?</nav>', desktop_home, html, count=1, flags=re.S)
html, n2 = re.subn(r'<nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation" hidden>.*?</nav>', mobile_home, html, count=1, flags=re.S)
if n1 != 1 or n2 != 1:
    raise SystemExit('Could not normalize homepage navigation')
html = html.replace('<aside class="skills-panel reveal">', '<aside id="skills" class="skills-panel reveal">', 1)
if 'id="skills" class="skills-panel reveal"' not in html:
    raise SystemExit('Could not create homepage Skills anchor')
home.write_text(html)

secondary_desktop = '''<nav aria-label="Main navigation">
      <a href="/#about">About <span>01</span></a>
      <a href="/#work">Projects <span>02</span></a>
      <a href="/#skills">Skills <span>03</span></a>
      <a href="/#contact">Contact <span>04</span></a>
    </nav>'''
secondary_mobile = '''<nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation" hidden>
      <a href="/#work">Projects</a><a href="/#about">About</a><a href="/#experience">Experience</a><a href="/#skills">Skills</a><a href="/#contact">Contact</a><a href="/assets/Afnan_Rafid_Resume.pdf" download>Download résumé ↓</a>
    </nav>'''

for rel in ['projects/index.html', 'skills/index.html', 'contact/index.html']:
    p = root / rel
    text = p.read_text()
    text, d = re.subn(r'<nav aria-label="Main navigation">.*?</nav>', secondary_desktop, text, count=1, flags=re.S)
    text, m = re.subn(r'<nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation" hidden>.*?</nav>', secondary_mobile, text, count=1, flags=re.S)
    if d != 1 or m != 1:
        raise SystemExit(f'Could not normalize navigation in {rel}')
    text = re.sub(r'<a class="header-contact" href="/contact/"(?: aria-current="page")?>', '<a class="header-contact" href="/#contact">', text, count=1)
    p.write_text(text)

# Keep future normalization runs aligned with this homepage-centered navigation model.
gen = root / 'scripts/generate-section-pages.mjs'
g = gen.read_text()
if 'const desktopNav =' not in g:
    marker = '  writeFileSync(file, html);'
    injection = '''  const desktopNav = `<nav aria-label="Main navigation">\\n      <a href="/#about">About <span>01</span></a>\\n      <a href="/#work">Projects <span>02</span></a>\\n      <a href="/#skills">Skills <span>03</span></a>\\n      <a href="/#contact">Contact <span>04</span></a>\\n    </nav>`;\n  const mobileNav = `<nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation" hidden>\\n      <a href="/#work">Projects</a><a href="/#about">About</a><a href="/#experience">Experience</a><a href="/#skills">Skills</a><a href="/#contact">Contact</a><a href="/assets/Afnan_Rafid_Resume.pdf" download>Download résumé ↓</a>\\n    </nav>`;\n  html = html.replace(/<nav aria-label="Main navigation">[\\s\\S]*?<\\/nav>/, desktopNav);\n  html = html.replace(/<nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation" hidden>[\\s\\S]*?<\\/nav>/, mobileNav);\n  html = html.replace(/<a class="header-contact" href="\\/contact\\/"(?: aria-current="page")?>/, '<a class="header-contact" href="/#contact">');\n'''
    if marker not in g:
        raise SystemExit('Generator insertion point missing')
    g = g.replace(marker, injection + marker)
gen.write_text(g)

# Validate the exact primary navigation model.
home = Path('index.html').read_text()
assert 'id="skills" class="skills-panel reveal"' in home
home_mobile = re.search(r'<nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation" hidden>(.*?)</nav>', home, re.S).group(1)
for target in ['#work', '#about', '#experience', '#skills', '#contact']:
    assert f'href="{target}"' in home_mobile
for forbidden in ['/skills/', '/contact/']:
    assert f'href="{forbidden}"' not in home_mobile

for rel in ['projects/index.html', 'skills/index.html', 'contact/index.html']:
    text = Path(rel).read_text()
    mobile = re.search(r'<nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation" hidden>(.*?)</nav>', text, re.S).group(1)
    for target in ['/#work', '/#about', '/#experience', '/#skills', '/#contact']:
        assert f'href="{target}"' in mobile
    for forbidden in ['href="/projects/"', 'href="/skills/"', 'href="/contact/"', 'href="/resume/"']:
        assert forbidden not in mobile

print('Primary navigation normalized successfully.')
