const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const TOTAL_TARGET = 500;

// Industry-Specific Contexts & Keywords (Same as Phase 6 & 7)
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

// 5 NEW Suburbs (North & Moot Focus)
const LOCATION_EXPANSION = [
    { name: 'Waverley', context: 'nestled at the foot of the Magaliesberg in Waverley' },
    { name: 'Colbyn', context: 'amongst the historic ambassadors residences in Colbyn' },
    { name: 'Annlin', context: 'in the rapidly growing residential hub of Annlin' },
    { name: 'Sinoville', context: 'along the busy commercial strips of Sinoville' },
    { name: 'Karenpark', context: 'near the industrial and retail giant of Wonderpark in Karenpark' }
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
    // 1. Intro (2 Paras) - Local Nuance
    const introSection = `
Running a **${industry.name.slice(0, -1)}** has always been challenging, but doing so in **${suburb.name}** presents a unique set of opportunities today. ${suburb.context}, the local economy is shifting. Residents and businesses alike are looking for reliability, proximity, and professionalism.

In the past, word-of-mouth might have been enough to keep your calendar full. But as ${suburb.name} continues to develop and attract new demographics, the old ways of doing business are becoming less effective. Your potential clients—whether they are long-time residents or newcomers to the area—Turn to Google first. If your digital presence doesn't match the quality of your real-world service, you are leaving money on the table.
`;

    // 2. The Landscape (2 Paras) - Industry/Suburb Context
    const landscapeSection = `
## The Business Landscape in ${suburb.name}

For ${industry.name}, the competition in ${suburb.name} is specific. You aren't just competing with the business across the street; you're competing with major players from across Pretoria who are targeting your local clientele digitally. The ${industry.context} that defines your sector is now being scrutinized online before a client ever meets you.

Residents of ${suburb.name} value community and trust. They want to know that the ${industry.name.toLowerCase()} they choose understands their specific needs. A generic website or a dormant social media page signals a lack of care, whereas a tailored, active digital presence signals authority and stability.
`;

    // 3. The Solution (2 Paras) - Why Pro Design Matters
    const solutionSection = `
## Why ${service.name} is the Solution

Professional **${service.name}** is the most effective way to bridge the gap between your expertise and your market's perception. It transforms your business from "just another option" into the obvious choice. For ${industry.name}, this means creating a platform that highlights your qualifications, your portfolio, and your commitment to ${industry.context}.

When we talk about ${service.name} for ${suburb.name} businesses, we aren't talking about vanity. We are talking about conversion. A strategic design ensures that when a local client lands on your page, they immediately understand who you are, what you do, and why they should trust you. It removes friction and encourages action.
`;

    // 4. Key Features (List + 2 Paras) - Value Props
    const featuresSection = `
## Key Features of Effective ${service.name}

To truly succeed in ${suburb.name}, your ${service.name} strategy must include:

*   **Local SEO Integration:** Ranking for key terms like "${industry.keywords} in ${suburb.name}".
*   **Trust-Building Elements:** Prominent display of reviews, accreditations, and local case studies.
*   **Mobile Responsiveness:** Flawless experience for users on smartphones.
*   **Clear Calls to Action:** Easy ways for clients to book or contact you.

IMPLEMENTING these features creates a compound effect. Local SEO drives traffic, trust elements keep them on the page, and clear calls to action turn them into leads. It is a cohesive ecosystem designed for growth.

Furthermore, consistency is key. Your digital identity should mirror your physical reality. If your office in ${suburb.name} is welcoming and professional, your website needs to feel the same way.
`;

    // 5. 012 Advantage (1 Para) - Agency Pitch
    const advantageSection = `
## The 012 Agency Advantage

At **012 Agency**, we specialize in helping ${industry.name} dominate their local markets. We understand that a business in ${suburb.name} has a different pulse than one in the CBD. We partner with you to create a ${service.name} strategy that reflects your unique value proposition, ensuring you stand out to the right people at the right time.
`;

    // 6. FAQ Section (3 Q&As)
    const faqSection = `
## Frequently Asked Questions

### Why is local SEO important for ${industry.name} in ${suburb.name}?
Local SEO ensures you appear when people nearby search for your services. For ${suburb.name}, this attracts high-intent clients who are ready to engage, rather than browsing traffic from other cities.

### How does ${service.name} build trust with clients?
Good design communicates professionalism and attention to detail. In the ${industry.name} industry, where trust is paramount, a polished digital presence acts as a 24/7 ambassador for your brand's credibility.

### Can 012 Agency update our existing branding?
Absolutely. We can refresh your existing identity to make it more modern and digital-friendly while retaining the core elements that your loyal clients in ${suburb.name} recognize.
`;

    // 7. Conclusion (1 Para) - CTA
    const conclusion = `
## Conclusion

The opportunity to lead your market in ${suburb.name} is open, but it requires action. Investing in professional ${service.name} is an investment in the future of your ${industry.name.slice(0, -1)}. **[Contact 012 Agency today](${service.link})** and let's build a digital presence that drives real world results.
`;

    return `---
title: '${service.name} for ${industry.name} in ${suburb.name}'
excerpt: 'Specialized ${service.name} strategies for ${industry.name} in ${suburb.name}. Elevate your local presence with 012 Agency.'
date: '${generateDate()}'
author: '012 Agency Team'
coverImage: 'https://images.unsplash.com/photo-${getRandomItem(IMAGE_POOL)}?w=800'
tags: ['${industry.name}', '${service.name}', '${suburb.name}', 'Pretoria', 'Local SEO']
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

// The Matrix: 5 Suburbs * 20 Industries * 5 Services = 500 Posts
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
                console.log(`Phase 8 Generated ${createdCount} posts...`);
            }
        });
    });
});

console.log(`Phase 8 Complete: Generated ${createdCount} new posts targeting North & Moot suburbs.`);
