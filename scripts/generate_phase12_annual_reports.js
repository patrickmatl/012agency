const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../src/content/blog');

// --- LOCATIONS (53 Total) ---
const LOCATIONS = [
    // Phase 10: Sandton Corporate (High-End / JSE / Integrated)
    { name: 'Sandton', type: 'corporate', context: 'in the financial capital of Africa' },
    { name: 'Bryanston', type: 'corporate', context: 'in the executive hub of Bryanston' },
    { name: 'Morningside', type: 'corporate', context: 'serving the elite business community of Morningside' },
    { name: 'Rivonia', type: 'corporate', context: 'in the commercial corridor of Rivonia' },
    { name: 'Rosebank', type: 'corporate', context: 'in the cosmopolitan district of Rosebank' },

    // Phase 9: Townships (NFT / NGO / Community Impact)
    { name: 'Soshanguve', type: 'township', context: 'in the vibrant community of Soshanguve' },
    { name: 'Mamelodi', type: 'township', context: 'in the entrepreneurial heart of Mamelodi' },
    { name: 'Mabopane', type: 'township', context: 'in the industrial hub of Mabopane' },

    // Phase 8: North & Moot (Established / Industrial)
    { name: 'Waverley', type: 'suburb', context: 'in the established suburb of Waverley' },
    { name: 'Colbyn', type: 'suburb', context: 'near the embassy belt of Colbyn' },
    { name: 'Annlin', type: 'suburb', context: 'in the growing residential area of Annlin' },
    { name: 'Sinoville', type: 'suburb', context: 'serving the Sinoville community' },
    { name: 'Karenpark', type: 'suburb', context: 'in the busy node of Karenpark' },

    // Phase 5 & 7: Pretoria East & Centurion (SME / Commercial)
    { name: 'Menlyn', type: 'commercial', context: 'in the bustling Menlyn node' },
    { name: 'Arcadia', type: 'commercial', context: 'in the historic heart of Arcadia' },
    { name: 'Hatfield', type: 'commercial', context: 'near the university district of Hatfield' },
    { name: 'Brooklyn', type: 'commercial', context: 'in the design hub of Brooklyn' },
    { name: 'Waterkloof', type: 'commercial', context: 'in the prestigious Waterkloof area' },
    { name: 'Centurion', type: 'commercial', context: 'in the fast-growing city of Centurion' },
    { name: 'Faerie Glen', type: 'suburb', context: 'in the leafy Faerie Glen' },
    { name: 'Garsfontein', type: 'suburb', context: 'in Garsfontein' },
    { name: 'Lynnwood', type: 'commercial', context: 'in the Lynnwood business corridor' },
    { name: 'Silver Lakes', type: 'suburb', context: 'in the exclusive Silver Lakes estate' },
    { name: 'Moreleta Park', type: 'suburb', context: 'in Moreleta Park' },
    { name: 'Elardus Park', type: 'suburb', context: 'in Elardus Park' },
    { name: 'Equestria', type: 'suburb', context: 'in Equestria' },
    { name: 'Wapadrand', type: 'suburb', context: 'in Wapadrand' },
    { name: 'Constantia Park', type: 'suburb', context: 'in Constantia Park' },
    { name: 'Lynnwood Manor', type: 'suburb', context: 'in Lynnwood Manor' },
    { name: 'Lynnwood Ridge', type: 'suburb', context: 'in Lynnwood Ridge' },
    { name: 'Murrayfield', type: 'suburb', context: 'in Murrayfield' },
    { name: 'Meyerspark', type: 'suburb', context: 'in Meyerspark' },
    { name: 'Silverton', type: 'industrial', context: 'in the industrial hub of Silverton' },
    { name: 'Queenswood', type: 'suburb', context: 'in Queenswood' },
    { name: 'Kilner Park', type: 'suburb', context: 'in Kilner Park' },
    { name: 'Riviera', type: 'suburb', context: 'in Riviera' },
    { name: 'Rietondale', type: 'suburb', context: 'in Rietondale' },
    { name: 'Groenkloof', type: 'suburb', context: 'in Groenkloof' },
    { name: 'Lukasrand', type: 'suburb', context: 'in Lukasrand' },
    { name: 'Muckleneuk', type: 'suburb', context: 'in Muckleneuk' },
    { name: 'Baileys Muckleneuk', type: 'suburb', context: 'in Baileys Muckleneuk' },
    { name: 'Nieuw Muckleneuk', type: 'suburb', context: 'in Nieuw Muckleneuk' },
    { name: 'Erasmuskloof', type: 'suburb', context: 'in Erasmuskloof' },
    { name: 'Erasmusrand', type: 'suburb', context: 'in Erasmusrand' },
    { name: 'Monument Park', type: 'suburb', context: 'in Monument Park' },
    { name: 'Sterrewag', type: 'suburb', context: 'in Sterrewag' },
    { name: 'Pierre van Ryneveld', type: 'suburb', context: 'in Pierre van Ryneveld' },
    { name: 'Lyttelton', type: 'suburb', context: 'in Lyttelton' },
    { name: 'Irene', type: 'suburb', context: 'in the historic village of Irene' },
    { name: 'Rooihuiskraal', type: 'suburb', context: 'in Rooihuiskraal' },
    { name: 'Wierda Park', type: 'suburb', context: 'in Wierda Park' },
    { name: 'Eldoraigne', type: 'suburb', context: 'in Eldoraigne' },
    { name: 'Clubview', type: 'suburb', context: 'in Clubview' }
];

// --- INDUSTRIES (20 Total) ---
const INDUSTRIES = [
    { name: 'Law Firms', reportType: 'Annual Review', focus: 'transparency, partner achievements, and case highlights' },
    { name: 'Medical Practices', reportType: 'Patient Impact Report', focus: 'clinical excellence, community outreach, and health outcomes' },
    { name: 'Construction Companies', reportType: 'ESG Report', focus: 'safety statistics, sustainability milestones, and project completions' },
    { name: 'Real Estate Agencies', reportType: 'Market Performance Review', focus: 'sales volume, agent success, and property trends' },
    { name: 'Restaurants', reportType: 'Brand Review', focus: 'culinary innovation, customer loyalty, and expansion plans' },
    { name: 'Private Schools', reportType: 'Academic Yearbook', focus: 'student achievements, facility upgrades, and alumni success' },
    { name: 'Logistics Companies', reportType: 'Sustainability Report', focus: 'carbon footprint reduction, fleet efficiency, and global reach' },
    { name: 'Car Dealerships', reportType: 'Sales Performance Report', focus: 'unit sales, customer satisfaction indices, and model launches' },
    { name: 'Financial Advisors', reportType: 'Investment Outlook', focus: 'market analysis, fund performance, and wealth preservation strategies' },
    { name: 'Retail Stores', reportType: 'Integrated Report', focus: 'supply chain ethics, sales growth, and consumer trends' },
    { name: 'Salons & Spas', reportType: 'Trend Report', focus: 'service innovation, client retention, and brand aesthetics' },
    { name: 'Security Companies', reportType: 'Safety Audit Report', focus: 'incident reduction, technology deployment, and officer training' },
    { name: 'Solar Installers', reportType: 'Green Energy Impact Report', focus: 'megawatts generated, carbon offset, and grid independence' },
    { name: 'Event Planners', reportType: 'Event Showcase', focus: 'attendance metrics, creative concepts, and client testimonials' },
    { name: 'Gyms', reportType: 'Wellness Impact Report', focus: 'member transformation, facility health, and fitness trends' },
    { name: 'IT Services', reportType: 'Technology Review', focus: 'uptime stats, cybersecurity resilience, and digital transformation' },
    { name: 'Non-Profits', reportType: 'Donor Impact Report', focus: 'funds utilization, beneficiary stories, and social return on investment' },
    { name: 'Manufacturers', reportType: 'Productivity Report', focus: 'output efficiency, safety standards, and innovation pipeline' },
    { name: 'Consultants', reportType: 'Value Delivery Report', focus: 'client ROI, methodology improvements, and intellectual capital' },
    { name: 'Architects', reportType: 'Design Portfolio', focus: 'award-winning structures, sustainable design, and urban rejuvenation' }
];

// Unsplash Image Map (Corporate & Document Focus)
const IMAGE_POOL = [
    '1450101499125-98888497c427', '1554200876-56c2f25224fa', '1454165804606-c3d57bc86b40',
    '1460925895917-afdab827c52f', '1504384764586-bb4cdc1707b0', '1486406146926-c627a92ad1ab',
    '1556761175-5973dc0f32e7', '1542744173-8e7e53415bb0', '1497215728101-856f4ea42174'
];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateSlug(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function generateDate() {
    const start = new Date(2022, 0, 1);
    const end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
}

function generateContent(industry, suburb) {
    // TONE ADJUSTMENT BASED ON LOCATION TYPE
    let toneContext = '';
    if (suburb.type === 'corporate') {
        toneContext = 'In the high-stakes corporate environment of **' + suburb.name + '**, where investors and stakeholders demand absolute clarity, an Annual Report is your most critical communication tool.';
    } else if (suburb.type === 'township') {
        toneContext = 'Building trust in **' + suburb.name + '** requires transparency. Whether you are seeking funding, grants, or community support, a professional Annual Report proves you are a serious, accountable entity.';
    } else {
        toneContext = 'For businesses in **' + suburb.name + '**, standing out means showing your results. A professionally designed Annual Report elevates you above competitors who rely on basic spreadsheets.';
    }

    // 1. Intro (2 Paras)
    const introSection = `
The end of the financial year brings a unique challenge: How do you summarize 12 months of hard work, financial data, and strategic wins into a document that people actually want to read? For **${industry.name}** ${suburb.context}, this is not just a regulatory hurdle; it's a branding opportunity.

${toneContext} It transforms dry data into a compelling narrative of growth, resilience, and vision. It is the tangible proof of your company's health and direction.
`;

    // 2. The Landscape (2 Paras)
    const landscapeSection = `
## The Reporting Landscape for ${industry.name}

Gone are the days when an Annual Report was just a text-heavy black-and-white booklet. Today, stakeholders—whether they are JSE investors, local board members, or community donors—expect **Integrated Reporting**. They want to see the "Story behind the Numbers."

In the **${industry.name}** sector specifically, there is increasing pressure to demonstrate **${industry.focus}**. Readers are skimming for these key insights. If your report is cluttered, poorly laid out, or visually uninspiring, these critical messages get lost, and your perceived value diminishes.
`;

    // 3. The Solution (2 Paras)
    const solutionSection = `
## Strategic Annual Report Design

At 012 Agency, we specialize in high-impact **${industry.reportType}** design. We don't just format text; we visualize value. We take your raw financials, your Chairman's statement, and your operational data and weave them into a cohesive, professional document that reflects the stature of your organization in ${suburb.name}.

Our approach combines high-end typography, custom infographics, and on-brand photography to ensure consistency. Use this document not just for compliance, but as a flagship marketing asset to send to prospective clients, showing them: "This is who we are, and this is what we have achieved."
`;

    // 4. Features (List + 2 Paras)
    const featuresSection = `
## Key Features of Our Annual Reports

We deliver reports that are "Boardroom Ready" for ${suburb.name}:

*   **Data Visualization:** Turning complex Excel sheets into clear, beautiful charts and graphs.
*   **Strategic Layout:** Guiding the reader's eye to your most important wins (Profit, Growth, Impact).
*   **Interactive Digital Versions:** PDFs with clickable navigation for easy online reading.
*   **Print-Ready Files:** High-resolution assets for luxury printing (foiling, embossing, binding).

For **${industry.name}**, legibility is key. We ensure that your **${industry.focus}** is highlighted instantly. We balance the density of information with white space, ensuring the reader never feels overwhelmed.

A great Annual Report builds confidence. It tells your market in ${suburb.name} that you are transparent, organized, and proud of your performance.
`;

    // 5. Advantage (1 Para)
    const advantageSection = `
## The 012 Agency Precision

Deadlines for Annual Reports are non-negotiable. We understand the pressure of AGM dates and print deadlines. Our team in Pretoria works with military precision to ensure your design is polished, proofed, and ready for distribution exactly when you need it.
`;

    // 6. FAQ Section (3 Q&As)
    const faqSection = `
## Frequently Asked Questions

### Can you work with our auditors or accountants directly?
Yes. We often collaborate with financial teams to ensure that graphs and figures in your **${industry.reportType}** are 100% accurate before print.

### Do we need a digital version or just print?
We recommend both. We design a "Spread" version for high-quality printing and a "Single Page" interactive version optimized for emailing to stakeholders and hosting on your website.

### How do you handle confidential data during the design process?
We sign strict NDAs. Your financial data is secure with us until the moment you release the report to the public.
`;

    // 7. Conclusion (1 Para)
    const conclusion = `
## Conclusion

Don't let a generic template underscore your year's success. Elevate your **${industry.reportType}** to a standard that commands respect in **${suburb.name}**. **[Contact 012 Agency today](/annual-report-design-and-print-pretoria)** for a confidential consultation on your upcoming report.
`;

    return `---
title: '${industry.reportType} Design for ${industry.name} in ${suburb.name}'
excerpt: 'Professional Annual Report and ${industry.reportType} design for ${industry.name} in ${suburb.name}. Compliance, clarity, and world-class presentation.'
date: '${generateDate()}'
author: '012 Agency Team'
coverImage: 'https://images.unsplash.com/photo-${getRandomItem(IMAGE_POOL)}?w=800'
tags: ['Annual Report', '${industry.name}', '${suburb.name}', 'Corporate Reporting', 'Design']
category: '${industry.name}'
---

${introSection}

${landscapeSection}

${solutionSection}

${featuresSection}

${advantageSection}

${faqSection}

${conclusion}
`;
}

let createdCount = 0;

// The Loops: 53 Locations * 20 Industries = 1060 Posts
LOCATIONS.forEach(suburb => {
    INDUSTRIES.forEach(industry => {

        // Title Variation to avoid pure duplicates if re-run
        const title = `${industry.reportType} Design for ${industry.name} in ${suburb.name}`;
        let slug = generateSlug(title);
        let filePath = path.join(BLOG_DIR, `${slug}.mdx`);

        if (fs.existsSync(filePath)) {
            slug = `${slug}-${Math.floor(Math.random() * 1000)}`;
            filePath = path.join(BLOG_DIR, `${slug}.mdx`);
        }

        const content = generateContent(industry, suburb);
        fs.writeFileSync(filePath, content);
        createdCount++;

        if (createdCount % 100 === 0) {
            console.log(`Phase 12 Generated ${createdCount} Annnual Report posts...`);
        }
    });
});

console.log(`Phase 12 Complete: Generated ${createdCount} specialist Annual Report posts.`);
