export const projects = {
  loves: {
    path: "/projects/loves-customer-segmentation/",
    title: 'Love’s Customer Segmentation',
    category: 'CUSTOMER ANALYTICS / ACADEMIC CASE COMPETITION',
    intro: 'How can a business target campaigns more effectively? This project connected customer, campaign, product-sales, store, and historical data to compare engagement and promotional outcomes.',
    tags: ['Python', 'pandas', 'NumPy', 'Matplotlib', 'KPI engineering'],
    stats: [['5', 'CONNECTED DATASETS'], ['20,000', 'DRIVERS'], ['29.99%', 'MEDIUMDISCOUNT ACHIEVE RATE']],
    sections: [
      ['THE WORK', '<p>Integrated five source tables using driver and store keys, checked key coverage and unmatched records, and engineered metrics for campaign participation, achievement, fuel activity, merchandise sales, and store visits.</p>'],
      ['WHAT THE ANALYSIS SHOWED', '<ul><li><strong>MediumDiscount led engagement:</strong> a 20.95% join rate and 29.99% achieve rate.</li><li><strong>Campaign goals matter:</strong> DEF Extra showed the strongest incremental fuel-gallon and visit impact in the original comparison, while Merch Extra was strongest for merchandise-focused impact.</li><li><strong>Behavior beat a demographic assumption:</strong> age had essentially no meaningful relationship with gallons per visit (Pearson r = −0.05).</li></ul>'],
      ['BUSINESS IMPLICATION', '<p>Prioritize behavior-based targeting, test incentive levels, and select campaign objectives deliberately. Strong historical engagement is a reason to test a targeting strategy, rather than proof of future lift.</p>']
    ],
    note: 'Portfolio scope: the repository reconstructs the analysis from the original case data and final write-up. Reconstruction limits are documented. Raw competition datasets are not distributed.',
    repo: 'https://github.com/arafid/Loves-Customer-Segmentation-Analytics',
    supporting: ['Method & limitations', 'https://github.com/arafid/Loves-Customer-Segmentation-Analytics/blob/main/docs/reconstruction_notes.md']
  },
  amazon: {
    path: "/projects/amazon-review-analytics/",
    title: 'Amazon Review Analytics',
    category: 'PYTHON / NLP / ACADEMIC TEAM PROJECT',
    intro: 'What can review text tell a seller that a star rating cannot? Our team built a reproducible text-analytics workflow to compare sentiment, identify complaint themes, and summarize product-level signals.',
    tags: ['Python', 'pandas', 'NLTK VADER', 'Tokenization', 'Error analysis'],
    stats: [['300', 'REVIEWS ANALYZED'], ['10', 'PRODUCTS IN THE SAMPLE'], ['48.67%', 'TEXT / STAR-LABEL AGREEMENT']],
    sections: [
      ['THE WORKFLOW', '<p>Drew a balanced, stratified 300-review sample from the 568,454-review Amazon Fine Food Reviews dataset. Applied rating-derived comparison labels, VADER sentiment scoring, tokenization, stop-word removal, keyword-based complaint classification, and product-level aggregation.</p>'],
      ['THE USEFUL FINDINGS', '<ul><li><strong>Complaint themes:</strong> taste appeared in 39 of the 100 negative sample reviews, followed by packaging in 18 and quality in 10.</li><li><strong>Evaluation mattered:</strong> overall agreement with star-derived labels was 48.67%, including 93% for positive reviews and just 5% for neutral reviews.</li><li><strong>The practical lesson:</strong> mixed language and numeric ratings do not always tell the same story. Reviewing failures makes the output more useful than presenting a score alone.</li></ul>'],
      ['PROJECT CONTEXT', '<p>Academic team project by Afnan Rafid, Christy Johnson, Tiffany Nguyen, Grecia Lopez Gonzalez, and Muataz Mahdi for Analytics Programming at the University of Oklahoma. The portfolio includes Python scripts, notebooks, sample data, charts, and documented results.</p>']
    ],
    note: 'The deliberately balanced sample does not represent the natural sentiment distribution of all Amazon reviews. Star ratings are imperfect comparison labels; the agreement rate is not independently validated model accuracy.',
    repo: 'https://github.com/arafid/Amazon-Review-Analytics-NLP',
    supporting: ['Technical case study', 'https://github.com/arafid/Amazon-Review-Analytics-NLP/blob/main/docs/technical_case_study.md']
  },
  equifax: {
    path: "/projects/equifax-cyber-risk-assessment/",
    title: 'Equifax Risk & Resilience',
    category: 'CYBER STRATEGY / ACADEMIC TEAM PROJECT',
    intro: 'A business-focused cybersecurity assessment connecting technical exposure, uncertainty, and control priorities to consumer trust, service availability, and executive decision-making.',
    tags: ['Cyber risk', 'Risk forecasting', 'Zero Trust', 'PAM', 'AI governance'],
    stats: [['4', 'CYBER RISK SCENARIOS'], ['12 mo.', 'PLANNING FORECAST HORIZON'], ['36 mo.', 'TEAM RESILIENCE ROADMAP']],
    sections: [
      ['MY PRIMARY CONTRIBUTION', '<p>My main presentation responsibility was the <strong>Cyber Risk Landscape</strong> section. I explained the four 12-month planning ranges and the reasoning behind them, connecting outside-in evidence with Equifax-specific exposure, controls, business impact, assumptions, and uncertainty.</p>'],
      ['THE FOUR SCENARIOS', '<ul><li>Sensitive data compromise or manipulation.</li><li>Critical decision-service disruption.</li><li>Trusted third-party or partner compromise.</li><li>AI-agent or machine-identity misuse.</li></ul>'],
      ['FROM FORECASTS TO PRIORITIES', '<p>The team’s 36-month roadmap prioritized Zero Trust and privileged access management, operational resilience, third-party oversight, and AI / machine-identity governance. The emphasis was on measurable control outcomes and clear executive accountability.</p>']
    ],
    note: 'Academic, outside-in assessment using public information and course frameworks. Forecasts are team-developed planning estimates, not published Equifax incident rates. Potential control gaps are hypotheses, not findings from an internal audit.',
    repo: 'https://github.com/arafid/Equifax-Cybersecurity-Risk-Assessment',
    supporting: ['Strategy report', 'https://github.com/arafid/Equifax-Cybersecurity-Risk-Assessment/blob/main/docs/Cybersecurity_Strategy_Report.md']
  },
  weather: {
    path: "/projects/csharp-weather-api/",
    title: 'C# Weather API',
    category: 'C# / .NET / INDIVIDUAL COURSE PROJECT',
    intro: 'A console application that takes location input, requests current conditions from Open-Meteo, and turns a JSON response into a readable weather report.',
    tags: ['C#', '.NET', 'REST APIs', 'HttpClient', 'JSON', 'Async / await'],
    stats: [['REST', 'API INTEGRATION'], ['JSON', 'STRUCTURED RESPONSE'], ['C#', 'APPLICATION LOGIC']],
    sections: [
      ['THE APPLICATION', '<p>The user enters a city name, latitude, and longitude. The program requests weather data and displays conditions, temperature, apparent temperature, humidity, and wind speed, including Celsius/Fahrenheit and km/h/mph conversions.</p>'],
      ['TECHNICAL BUILDING BLOCKS', '<ul><li><strong>Asynchronous requests:</strong> HttpClient with async / await.</li><li><strong>Typed data:</strong> JSON deserialization with System.Text.Json and custom response classes.</li><li><strong>Application logic:</strong> input handling, unit conversion, and weather-code interpretation.</li></ul>'],
      ['WHY IT BELONGS HERE', '<p>It demonstrates a complete path from external data to useful output: collect input, construct a request, work with the response, and explain the result to a user.</p>']
    ],
    note: 'This is a .NET console application originally developed for a programming course. The portfolio’s workbench shows a conceptual code excerpt; it does not run the weather application in the browser.',
    repo: 'https://github.com/arafid/CSharp-Weather-API'
  },
  paypal: {
    path: "/projects/paypal-strategic-analysis/",
    title: 'PayPal Strategic Analysis',
    category: 'FINTECH / BUSINESS STRATEGY / TEAM CAPSTONE',
    intro: 'A team capstone examining how PayPal could strengthen its competitive position as digital checkout becomes more crowded and consumer payment behavior changes.',
    tags: ['SWOT', 'Porter’s Five Forces', 'VRIN', 'Strategic risk', 'Executive communication'],
    stats: [['SWOT', 'MARKET CONTEXT'], ['5 Forces', 'COMPETITIVE PRESSURES'], ['VRIN', 'CAPABILITY ASSESSMENT']],
    sections: [
      ['THE QUESTION', '<p>How can a payments platform turn its scale, data, customer relationships, and merchant network into a more defensible advantage? The analysis connected external competitive pressure with internal resources and execution challenges.</p>'],
      ['THE TEAM’S RECOMMENDATIONS', '<ul><li><strong>Strengthen internal innovation:</strong> direct more attention toward R&D and integration of existing capabilities.</li><li><strong>Expand in-person transactions:</strong> evaluate a broader merchant-platform role connecting online and physical commerce.</li><li><strong>Test the risks:</strong> account for entrenched POS competitors, technological disruption, and BNPL regulatory complexity.</li></ul>'],
      ['THE TAKEAWAY', '<p>Transaction history and the data behind fraud detection can be more defensible than an AI model alone. Sustainable advantage also depends on integration, execution, and the ability to adapt.</p>'],
      ['PROJECT CONTEXT', '<p>Academic team capstone for BAD 4013: Business Strategy and Policy at the University of Oklahoma, Spring 2026. The team included Alera Netzel, Dominique Cootes, Tenley Hyde, Areebah Khan, Caden Reed, Jackson Craig, and Afnan Rafid.</p>']
    ],
    note: 'Historical academic analysis based on publicly available information and course strategy frameworks. This project is not affiliated with or endorsed by PayPal.',
    repo: 'https://github.com/arafid/PayPal-Strategic-Analysis',
    supporting: ['Executive case study', 'https://github.com/arafid/PayPal-Strategic-Analysis/blob/main/docs/PayPal_Strategic_Case_Study.md']
  }
};

