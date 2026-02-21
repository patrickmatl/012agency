const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../src/content/blog');

// Industry-Specific Contexts & Keywords (Same as Previous Phases)
const INDUSTRIES = [
    { name: 'Law Firms', context: 'community trust, legal accessibility, and formal representation', keywords: 'legal services, township attorney', image: 'legal' },
    { name: 'Medical Practices', context: 'affordable care, community health, and accessible clinics', keywords: 'healthcare, local doctor', image: 'medical' },
    { name: 'Construction Companies', context: 'infrastructure development, housing projects, and contract reliability', keywords: 'construction services, building contractor', image: 'construction' },
    { name: 'Real Estate Agencies', context: 'affordable housing, property registration, and rental management', keywords: 'township property, real estate agent', image: 'real-estate' },
    { name: 'Restaurants', context: 'local flavors, community gathering, and food delivery', keywords: 'local food, township restaurant', image: 'restaurant' },
    { name: 'Private Schools', context: 'quality education, safe environments, and future opportunities', keywords: 'private school, education', image: 'school' },
    { name: 'Logistics Companies', context: 'last-mile delivery, transport reliability, and supply chains', keywords: 'logistics, delivery services', image: 'logistics' },
    { name: 'Car Dealerships', context: 'affordable vehicles, financing options, and reliable service', keywords: 'car sales, dealership', image: 'car' },
    { name: 'Financial Advisors', context: 'savings groups, funeral policies, and business formalization', keywords: 'financial advice, accountant', image: 'finance' },
    { name: 'Retail Stores', context: 'convenience, competitive pricing, and local stock', keywords: 'retail shop, spaza shop upgrade', image: 'retail' },
    { name: 'Salons & Spas', context: 'beauty trends, hair care, and personal grooming', keywords: 'beauty salon, hair stylist', image: 'beauty' },
    { name: 'Security Companies', context: 'asset protection, community patrols, and peace of mind', keywords: 'security services, alarm installation', image: 'security' },
    { name: 'Solar Installers', context: 'power reliability, load shedding solutions, and cost savings', keywords: 'solar power, backup energy', image: 'solar' },
    { name: 'Event Planners', context: 'weddings, community celebrations, and corporate functions', keywords: 'event planning, wedding coordination', image: 'event' },
    { name: 'Gyms', context: 'fitness culture, bodybuilding, and healthy lifestyle', keywords: 'local gym, fitness centre', image: 'fitness' },
    { name: 'IT Services', context: 'connectivity, internet cafes, and technical support', keywords: 'it support, internet services', image: 'tech' },
    { name: 'Non-Profits', context: 'community development, youth programs, and social impact', keywords: 'ngo, community organization', image: 'charity' },
    { name: 'Manufacturers', context: 'local production, job creation, and industrial zones', keywords: 'local manufacturing, workshop', image: 'factory' },
    { name: 'Consultants', context: 'business growth, compliance, and funding applications', keywords: 'business consulting, sme support', image: 'consulting' },
    { name: 'Architects', context: 'modernizing homes, safe structures, and building plans', keywords: 'architect, building plans', image: 'architecture' }
];

// Services (Same as Previous Phases)
const SERVICES = [
    { name: 'Web Design', link: '/web-design-pretoria', action: 'build a professional online presence' },
    { name: 'SEO', link: '/digital-marketing-services-pretoria', action: 'be found on Google' },
    { name: 'Branding', link: '/branding-agency-pretoria', action: 'look like a major corporate player' },
    { name: 'Social Media', link: '/social-media-design-pretoria', action: 'connect with the community' },
    { name: 'Print Marketing', link: '/print-design-pretoria', action: 'market with flyers and banners' }
];

// 3 NEW Township Locations
const LOCATION_EXPANSION = [
    { name: 'Soshanguve', context: 'in the bustling, youthful energy of Soshanguve' },
    { name: 'Mamelodi', context: 'in the vibrant and entrepreneurial heart of Mamelodi' },
    { name: 'Mabopane', context: 'in the industrial and commuter hub of Mabopane' }
];

// Unsplash Image Map
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

function generateContent(industry, service, suburb) {
    // 1. Intro (2 Paras) - Local Nuance & Township Context
    const introSection = `
The economy of **${suburb.name}** is transforming. What was once a dormitory town is rapidly becoming a self-sustaining economic hub. For a **${industry.name.slice(0, -1)}** operating ${suburb.context}, this growth brings immense opportunity. The "Township Economy" is worth billions, and local residents are increasingly choosing to spend their money within their own community rather than travelling to the city.

However, as the market matures, so do customer expectations. The people of ${suburb.name} want to support local businesses, but they also demand quality and reliability. They are looking for businesses that look professional, established, and trustworthy. If your digital presence looks outdated or informal, you risk losing these customers to competitors who have invested in their brand image.
`;

    // 2. The Landscape (2 Paras) - Formalization & Trust
    const landscapeSection = `
## The Challenge of Formalization in ${suburb.name}

One of the biggest hurdles for ${industry.name} in ${suburb.name} is the perception of formality. Many excellent local businesses are overlooked because they "look" small. In the digital age, your website and brand identity are your storefront. If a potential client searches for "${industry.keywords} in ${suburb.name}" and finds a professional, polished website, their perception of your value immediately skyrockets.

Trust is the currency of the township economy. Word of mouth is powerful, but digital validation is the new standard. A professional digital footprint acts as a verification badge. It tells your community that you are serious, that you are here to stay, and that you deliver a standard of ${industry.context} that rivals any big-city competitor.
`;

    // 3. The Solution (2 Paras) - Professional Design
    const solutionSection = `
## Why ${service.name} is Critical for ${industry.name}

Investing in professional **${service.name}** is the fastest way to formalize your business in the eyes of the consumer. It bridges the gap between your actual skill level and how the market perceives you. For a ${industry.name.slice(0, -1)}, this doesn't just mean looking pretty; it means looking "corporate-ready" and capable of handling significant contracts or high-value clients.

In ${suburb.name}, where mobile usage is effectively 100%, your digital presence must be optimized for smartphones. Your clients are finding you on WhatsApp, Facebook, and Google Search via their phones. A professional ${service.name} strategy ensures that you look just as good on a small screen as you do on a billboard, making it easy for the community to connect with you.
`;

    // 4. Key Features (List + 2 Paras) - Mobile-First & Local
    const featuresSection = `
## Key Features of Success in ${suburb.name}

To capture the market in ${suburb.name}, your ${service.name} must prioritize:

*   **Mobile-First Design:** Fast, data-light, and perfect on mobile devices.
*   **Local SEO:** Appearing for searches like "best ${industry.keywords} near me".
*   **WhatsApp Integration:** Direct lines of communication, which is the preferred local method.
*   **Visual Storytelling:** Showing real images of your work and presence in ${suburb.name}.

By focusing on these elements, you lower the barrier to entry for your customers. You make it easy for them to choose you. In the hustle of ${suburb.name}, convenience and speed are key.

Moreover, a strong brand creates pride. When the community sees a local ${industry.name.slice(0, -1)} with world-class branding, they are proud to support it. It signals that ${suburb.name} produces businesses of excellence.
`;

    // 5. 012 Advantage (1 Para) - Agency Pitch
    const advantageSection = `
## The 012 Agency Approach

At **012 Agency**, we respect the unique dynamics of the township economy. We don't bring cut-and-paste solutions from the suburbs; we build strategies that work for ${suburb.name}. We help ${industry.name} formalize their brand, dominate local search results, and turn community goodwill into sustainable profit.
`;

    // 6. FAQ Section (3 Q&As)
    const faqSection = `
## Frequently Asked Questions

### Is professional ${service.name} expensive for a township business?
We believe in value. A professional image allows you to charge market-related rates and attract better clients, meaning the investment pays for itself by elevating your business out of the "cheap" category.

### How can you help us reach more people in ${suburb.name}?
We focus on Local SEO. When someone in ${suburb.name} asks Google for a ${industry.keywords}, we ensure your business pops up on the map and with a credible website, driving foot traffic and calls.

### Do we really need a website if we have a Facebook page?
Yes. A Facebook page is rented land. A website is an asset you own. It builds credibility that social media alone cannot provide, especially when applying for contracts or funding often available to formal businesses in ${suburb.name}.
`;

    // 7. Conclusion (1 Para) - CTA
    const conclusion = `
## Conclusion

The "Township Economy" is the future of growth in Pretoria. Don't let your business get left behind because of a poor image. investing in **${service.name}** is investing in the legacy of your business in ${suburb.name}. **[Contact 012 Agency today](${service.link})** to modernize your brand and capture your community's market.
`;

    return `---
title: '${service.name} for ${industry.name} in ${suburb.name}'
excerpt: 'Elevate your business in ${suburb.name} with professional ${service.name}. 012 Agency specializes in formalizing and branding township businesses.'
date: '${generateDate()}'
author: '012 Agency Team'
coverImage: 'https://images.unsplash.com/photo-${getRandomItem(IMAGE_POOL)}?w=800'
tags: ['${industry.name}', '${service.name}', '${suburb.name}', 'Township Economy', 'Pretoria']
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

// The Matrix: 3 Suburbs * 20 Industries * 5 Services = 300 Posts
LOCATION_EXPANSION.forEach(suburb => {
    INDUSTRIES.forEach(industry => {
        SERVICES.forEach(service => {

            const title = `${service.name} for ${industry.name} in ${suburb.name}`;
            let slug = generateSlug(title);
            let filePath = path.join(BLOG_DIR, `${slug}.mdx`);

            // Duplicate prevention
            if (fs.existsSync(filePath)) {
                slug = `${slug}-${Math.floor(Math.random() * 1000)}`;
                filePath = path.join(BLOG_DIR, `${slug}.mdx`);
            }

            const content = generateContent(industry, service, suburb);
            fs.writeFileSync(filePath, content);
            createdCount++;

            // Progress logging
            if (createdCount % 100 === 0) {
                console.log(`Phase 9 Generated ${createdCount} posts...`);
            }
        });
    });
});

console.log(`Phase 9 Complete: Generated ${createdCount} new posts targeting Soshanguve, Mamelodi, and Mabopane.`);
