from pathlib import Path
import math
from PIL import Image, ImageDraw, ImageFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / 'assets'
ASSETS.mkdir(parents=True, exist_ok=True)
INK = '#252721'
MUTED = '#56604e'
pdfmetrics.registerFont(TTFont('Resume', '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('Resume-Bold', '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'))
pdfmetrics.registerFontFamily('Resume', normal='Resume', bold='Resume-Bold')

body = ParagraphStyle('body', fontName='Resume', fontSize=9.2, leading=11.5, textColor=colors.HexColor(INK), spaceAfter=2)
bullet = ParagraphStyle('bullet', parent=body, leftIndent=9, firstLineIndent=0, bulletIndent=0, spaceAfter=3)
small = ParagraphStyle('small', parent=body, fontSize=8.5, leading=11.3)
label = ParagraphStyle('label', parent=body, fontName='Resume-Bold', fontSize=8.8, leading=12, spaceBefore=8, spaceAfter=5)
name = ParagraphStyle('name', parent=body, fontSize=25, leading=28, spaceAfter=5)
sub = ParagraphStyle('sub', parent=body, fontSize=10, leading=13, textColor=colors.HexColor(MUTED), spaceAfter=4)
heading = ParagraphStyle('heading', parent=body, fontName='Resume-Bold', fontSize=9.3, leading=12, spaceAfter=3)
story = []

def para(text, style=body):
    return Paragraph(text, style)

def section(title):
    story.append(para(title.upper(), label))

def item(title, context, bullets):
    scope = context.rsplit(' | ', 1)[-1] if context else ''
    line = title + (f' <font name="Resume" size="8.2" color="{MUTED}"> | {scope}</font>' if scope else '')
    group = [para(line, heading)]
    group += [Paragraph(text, bullet, bulletText='-') for text in bullets]
    group.append(Spacer(1, 2))
    story.append(KeepTogether(group))

story.append(para('AFNAN RAFID', name))
story.append(para('Analytics | Business Technology | Technology Risk', sub))
story.append(para('Norman, OK | <a href="mailto:arafid@ou.edu">arafid@ou.edu</a> | <a href="https://www.linkedin.com/in/arafid/">linkedin.com/in/arafid</a> | <a href="https://github.com/arafid">github.com/arafid</a>', small))

section('Education')
story.append(para('<b>University of Oklahoma, Michael F. Price College of Business</b>'))
story.append(para('<b>M.S. in Management Information Technology</b> | Expected May 2028 | GPA 4.00'))
story.append(para('<b>Bachelor\'s in Management Information Systems and Economics</b> | Double major | May 2026'))
story.append(para('Davis UWC Scholar | GPA 3.89 | Major GPA 4.00 | Magna Cum Laude'))

section('Technical skills')
story.append(para('<b>Analytics:</b> Python (pandas, NumPy, NLTK, Matplotlib), SQL, Power BI, Excel/VBA, Stata'))
story.append(para('<b>Applications &amp; data:</b> C#, object-oriented programming, REST APIs, JSON, Git/GitHub, SQL Server, Azure SQL, MongoDB'))
story.append(para('<b>Cloud &amp; risk:</b> AWS Cloud Foundations (IAM, S3, EC2, VPC), cyber risk assessment, NIST CSF, Zero Trust, PAM, third-party risk, AI governance'))

section('Selected projects')
item('Love\'s Customer Campaign &amp; Segmentation Analytics', 'Python, pandas, NumPy, Matplotlib | Academic case competition', [
    'Integrated five datasets covering 20,000 drivers, 409K campaign records, 2.45M product-sales records, and 700 stores; validated keys and engineered campaign, engagement, and sales KPIs.',
    'Identified MediumDiscount as the strongest engagement segment (20.95% join rate; 29.99% achieve rate) and recommended behavior-based targeting and A/B tests.'
])
item('Amazon Review Analytics', 'Python, NLTK VADER, pandas | Academic team project', [
    'Built a reproducible Python/NLTK workflow on a balanced 300-review sample from 568,454 reviews, using VADER, text preprocessing, complaint-theme classification, and product aggregation.',
    'Evaluated failure cases: 48.67% agreement with star-derived labels and 5% neutral agreement; documented limitations and the need for human judgment.'
])
item('Equifax Cybersecurity Risk &amp; Resilience Assessment', 'Cyber risk, Zero Trust, PAM, AI governance | Academic team project', [
    'Presented four 12-month planning ranges and their reasoning, connecting cyber exposure, business impact, control maturity, assumptions, and uncertainty.',
    'Contributed to a team 36-month roadmap for Zero Trust, PAM, resilience, third-party risk, and AI governance.'
])
item('C# Weather API Console Application', 'C#, .NET, REST APIs, JSON | Individual course project', [
    'Built a .NET console app using asynchronous HTTP requests, JSON response classes, weather-code interpretation, and unit conversion to report Open-Meteo conditions.'
])

section('Experience')
item('Graduate Teaching Assistant | University of Oklahoma, Price College', 'Fall 2026 - Present', [
    'Support C# OOP through labs, code review, debugging, office hours, and grading; evaluate application behavior against rubric and acceptance-test requirements.'
])
item('Student Assistant | OU Office of Student Conduct', 'Fall 2023 - Spring 2026', [
    'Maintained sensitive case records in Maxient and supported documentation, accuracy, and confidentiality procedures.'
])
item('Global Operations Intern | Youth Opportunities, Dhaka', 'Fall 2019', [
    'Assessed applications, interviewed candidates, and supported recruitment of approximately 30 Global Ambassadors across six continents.'
])

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor('#c5cbbb'))
    canvas.line(36, 29, 576, 29)
    canvas.setFont('Resume', 7.5)
    canvas.setFillColor(colors.HexColor(MUTED))
    canvas.drawString(36, 17, 'Project code, results, methods, and team context: github.com/arafid')
    canvas.drawRightString(576, 17, 'Afnan Rafid')
    canvas.restoreState()

pdf = ASSETS / 'Afnan_Rafid_Resume.pdf'
doc = SimpleDocTemplate(str(pdf), pagesize=(612, 792), rightMargin=36, leftMargin=36, topMargin=30, bottomMargin=40, title='Afnan Rafid - Resume', author='Afnan Rafid', subject='Analytics, business technology, and technology risk portfolio resume')
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print('Created downloadable portfolio resume.')

def font(name, size):
    return ImageFont.truetype('/usr/share/fonts/opentype/urw-base35/' + name, size)

image = Image.new('RGB', (1200, 630), '#f4f1e9')
draw = ImageDraw.Draw(image)
draw.line((72, 164, 1128, 164), fill='#c7cdbd', width=2)
draw.text((72, 55), 'afnan rafid.', font=font('NimbusSans-Bold.otf', 53), fill=INK)
draw.text((74, 128), 'DATA  /  TECHNOLOGY  /  STRATEGY', font=font('NimbusMonoPS-Regular.otf', 18), fill=MUTED)
draw.text((72, 226), 'Technical depth.', font=font('NimbusSans-Regular.otf', 80), fill=INK)
draw.text((72, 322), 'Business perspective.', font=font('NimbusRoman-Italic.otf', 80), fill=INK)
tile = Image.new('RGBA', (190, 230), '#ee7047')
td = ImageDraw.Draw(tile)
td.text((31, 36), 'AR', font=font('NimbusSans-Bold.otf', 84), fill=INK)
td.line((24, 151, 166, 151), fill='#973f22', width=1)
td.text((25, 174), 'BUILD MODE.', font=font('NimbusMonoPS-Regular.otf', 17), fill=INK)
tile = tile.rotate(-7, resample=Image.Resampling.BICUBIC, expand=True)
image.paste(tile, (944, 212), tile)
draw.line((72, 510, 1128, 510), fill='#c7cdbd', width=2)
draw.text((74, 539), 'UNIVERSITY OF OKLAHOMA', font=font('NimbusMonoPS-Regular.otf', 18), fill=MUTED)
draw.text((74, 572), 'Projects, resume, and the thinking behind the work.', font=font('NimbusSans-Regular.otf', 22), fill=INK)
image.save(ASSETS / 'social-card.png', optimize=True)
print('Created social sharing preview.')
