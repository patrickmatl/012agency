const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const TOTAL_TARGET = 1000;

// Industry-Specific Contexts & Keywords
const INDUSTRIES = [
    { name: 'Law Firms', context: 'trust, confidentiality, and professional authority', keywords: 'legal marketing, attorney branding', image: 'legal' },
    { name: 'Medical Practices', context: 'patient care, booking ease, and medical ethics', keywords: 'healthcare seo, doctor websites', image: 'medical' },
    { name: 'Construction Companies', context: 'project portfolios, safety compliance, and tender readiness', keywords: 'construction marketing, contractor branding', image: 'construction' },
    { name: 'Real Estate Agencies', context: 'property listings, agent profiles, and lead generation', keywords: 'real estate seo, property marketing', image: 'real-estate' },
    { name: 'Restaurants', context: 'menu visibility, reservations, and ambiance', keywords: 'restaurant branding, food photography', image: 'restaurant' },
    { name: 'Private Schools', context: 'enrollment figures, academic excellence, and parent communication', keywords: 'school marketing, education branding', image: 'school' },
    { name: 'Logistics Companies', context: 'fleet visibility, supply chain reliability, and B2B contracts', keywords: 'logistics branding, transport seo', image: 'logistics' },
    { name: 'Car Dealerships', context: 'inventory showcasing, test drive bookings, and showroom traffic', keywords: 'automotive marketing, dealership seo', image: 'car' },
    { name: 'Financial Advisors', context: 'wealth management trust, regulatory compliance, and client acquisition', keywords: 'financial branding, accountant seo', image: 'finance' },
    { name: 'Retail Stores', context: 'foot traffic, e-commerce integration, and seasonal promotions', keywords: 'retail marketing, shop branding', image: 'retail' },
    { name: 'Salons & Spas', context: 'booking systems, visual portfolios, and relaxation vibes', keywords: 'salon marketing, spa branding', image: 'beauty' },
    { name: 'Security Companies', context: 'trust, rapid response, and community safety', keywords: 'security branding, alarm company seo', image: 'security' },
    { name: 'Solar Installers', context: 'ROI calculations, green energy benefits, and installation galleries', keywords: 'solar marketing, renewable energy seo', image: 'solar' },
    { name: 'Event Planners', context: 'visual storytelling, event coordination, and client testimonials', keywords: 'event branding, wedding planner seo', image: 'event' },
    { name: 'Gyms', context: 'membership sign-ups, class schedules, and fitness community', keywords: 'gym marketing, fitness branding', image: 'fitness' },
    { name: 'IT Services', context: 'technical expertise, uptime guarantees, and B2B solutions', keywords: 'msp marketing, it company seo', image: 'tech' },
    { name: 'Non-Profits', context: 'donor engagement, mission awareness, and volunteer recruitment', keywords: 'ngo branding, charity marketing', image: 'charity' },
    { name: 'Manufacturers', context: 'product catalogs, distribution networks, and industrial capabilities', keywords: 'industrial branding, manufacturing seo', image: 'factory' },
    { name: 'Consultants', context: 'thought leadership, personal branding, and expertise', keywords: 'consultant personal branding, coaching seo', image: 'consulting' },
    { name: 'Architects', context: 'visual portfolios, design philosophy, and project showcases', keywords: 'architect marketing, firm branding', image: 'architecture' }
];

// Services to Cross-Reference
const SERVICES = [
    { name: 'Web Design', link: '/web-design-pretoria', action: 'build a high-converting website' },
    { name: 'SEO', link: '/digital-marketing-services-pretoria', action: 'rank higher on Google' },
    { name: 'Branding', link: '/branding-agency-pretoria', action: 'create a memorable identity' },
    { name: 'Social Media', link: '/social-media-design-pretoria', action: 'engage your local audience' },
    { name: 'Print Marketing', link: '/print-design-pretoria', action: 'create tangible brand assets' }
];

// Locations (Same high-value list)
const LOCATIONS = [
    'Menlyn', 'Centurion', 'Silver Lakes', 'Faerie Glen', 'Brooklyn',
    'Hatfield', 'Waterkloof', 'Lynnwood', 'Garsfontein', 'Montana'
];

// Unsplash Image Map (using specific IDs ensures quality)
const IMAGE_POOL = [
    '1497366216548-37526070297c', '1486406146926-c627a92ad1ab', '1556761175-5973dc0f32e7',
    '1554200876-56c2f25224fa', '1521737711867-e3b97375f902', '1497215728101-856f4ea42174',
    '1556761175-b413da4baf72', '1454165804606-c3d57bc86b40', '1520607162513-7770d8f7558d',
    '1507679799938-d73b36d19f65', '1552664730-d307ca884978', '1542744173-8e7e53415bb0',
    '1450101499125-98888497c427', '1460925895917-afdab827c52f', '1522071820081-009f0129c71c',
    '1486312338219-ce68d2c6f44d', '1519389950473-47ba0277781c', '1531547220748-84e7fb7f65cf',
    '1504384764586-bb4cdc1707b0', '1517245386807-bb43f82c33c4'
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

function generateContent(industry, service, location) {
    // Intro - 2 Paragraphs
    const intro = `
For **${industry.name}** operating in the competitive landscape of **${location}**, the market is evolving rapidly. Standing out requires more than just excellent service; it demands a professional, strategic digital presence that communicates your value proposition instantly.

As a business owner in the ${location} area, you understand that trust and reputation are the cornerstones of success. This is especially true for ${industry.name}, where potential clients are looking for specific assurances of ${industry.context}. In today's digital-first world, your online identity is often the first interaction these clients have with your brand.
`;

    // Section 1 - 2 Paragraphs
    const h2_one = `## Why ${service.name} Matters for ${industry.name}`;

    const content_one = `
${service.name} isn't just a generic business expense; it's a critical investment in your company's future. For ${industry.name}, effective ${service.name} can mean the difference between being "just another option" in the directory and being the recognized market leader in ${location}.

Potential clients in ${location} are searching online before they ever pick up the phone. If your ${service.name.toLowerCase()} strategy isn't optimized for local search terms like "${industry.keywords} in ${location}" or "best ${industry.name} near me", you are actively losing high-value leads to competitors who have prioritized their digital footprint.
`;

    // Section 2 - 2 Paragraphs
    const h2_two = `## Tailoring Your Strategy for the ${location} Market`;

    const content_two = `
The ${location} demographic has specific expectations and behaviors. Whether your clients are corporate professionals in office parks or families in residential estates, they value professionalism, accessibility, and local reputation. Your ${service.name} needs to reflect these specific local values to resonate effectively.

At **012 Agency**, we specialize in helping ${industry.name} ${service.action}. We understand the nuance of your industry—from the importance of highlighting ${industry.context} to navigating the specific regulatory or ethical standards you operate under. A generic "one-size-fits-all" approach simply doesn't work for specialized sectors like yours.
`;

    // Section 3 - 2 Paragraphs
    const h3_one = `### Key Features of Effective ${service.name}`;

    const content_three = `
When implementing ${service.name} for your practice, consider the following essential elements:

1.  **Local Authority:** Your content must claim your territory. Ranking for broad terms is good, but ranking for "best ${industry.name.slice(0, -1)} in ${location}" converts traffic into paying clients.
2.  **Trust Signals:** Your digital assets should prominently display testimonials, accreditations, and case studies relevant to your industry to build immediate credibility.
3.  **User Experience (UX):** For ${industry.name}, friction kills conversion. Ensure it is effortless for clients to book inquiries, request quotes, or find your physical location in ${location}.

Investing in these areas creates a compound effect, where your digital presence becomes an asset that appreciates over time, consistently delivering new business opportunities.
`;

    // FAQ Section - 3 Q&A pairs (adds significant length and SEO value)
    const faq_section = `
## Frequently Asked Questions

### Why is ${service.name} important for ${industry.name}?
${service.name} helps build the necessary trust (E-E-A-T) required for clients to choose your services over competitors. In the ${industry.name} sector, credibility is currency, and your digital presence is how you spend it.

### How long does it take to see results in ${location}?
Market response varies, but customized strategies for ${location} typically show faster engagement because they target a specific, high-intent audience rather than a broad, national demographic.

### Can 012 Agency help with compliance?
Yes. We understand that ${industry.name} often face strict advertising regulations. Our team is experienced in creating compliant, professional, and effective marketing materials that adhere to industry standards.
`;

    // Conclusion - 1 Paragraph
    const conclusion = `
## Conclusion

Don't let your competition in ${location} outpace you. Investing in professional ${service.name} is one of the smartest decisions you can make for the longevity and growth of your business.

**[Contact 012 Agency today](${service.link})** to discuss a custom strategy for your ${industry.name.replace(/s$/, '')} business. We are ready to help you grow your footprint in Pretoria.
`;

    return `---
title: '${service.name} for ${industry.name} in ${location}'
excerpt: 'Specialized ${service.name} services for ${industry.name} in ${location}. Learn how to specifically target clients in the ${location} area with 012 Agency.'
date: '${generateDate()}'
author: '012 Agency Team'
coverImage: 'https://images.unsplash.com/photo-${getRandomItem(IMAGE_POOL)}?w=800'
tags: ['${industry.name}', '${service.name}', '${location}', 'Pretoria', 'Business Growth']
category: '${industry.name}'
---

${intro}

${h2_one}

${content_one}

${h2_two}

${content_two}

${h3_one}

${content_three}

${faq_section}

${conclusion}
`;
}

let createdCount = 0;

// The Matrix: 20 Industries * 5 Services * 10 Locations = 1000 Posts
INDUSTRIES.forEach(industry => {
    SERVICES.forEach(service => {
        LOCATIONS.forEach(location => {

            const title = `${service.name} for ${industry.name} in ${location}`;
            let slug = generateSlug(title);
            let filePath = path.join(BLOG_DIR, `${slug}.mdx`);

            // Duplicate prevention (though title combo should be unique)
            if (fs.existsSync(filePath)) {
                slug = `${slug}-${Math.floor(Math.random() * 1000)}`;
                filePath = path.join(BLOG_DIR, `${slug}.mdx`);
            }

            const content = generateContent(industry, service, location);
            fs.writeFileSync(filePath, content);
            createdCount++;

            // Progress logging for long-running script
            if (createdCount % 100 === 0) {
                console.log(`Updated ${createdCount} posts...`);
            }
        });
    });
});

console.log(`Phase 6 Update Complete: Refreshed ${createdCount} industry-niche posts with expanded content.`);
