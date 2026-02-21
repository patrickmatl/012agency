const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const TOTAL_TARGET = 3000;

// Industry-Specific Contexts & Keywords (Same as Phase 6)
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

// 30 NEW Suburbs
const LOCATION_EXPANSION = [
    { name: 'Moreleta Park', context: 'in the residential heart of Moreleta Park' },
    { name: 'Elardus Park', context: 'servicing the family-oriented community of Elardus Park' },
    { name: 'Equestria', context: 'near the growing commercial hubs of Equestria' },
    { name: 'Wapadrand', context: 'nestled in the peaceful surroundings of Wapadrand' },
    { name: 'Constantia Park', context: 'in the established avenues of Constantia Park' },
    { name: 'Lynnwood Manor', context: 'close to the tech hubs in Lynnwood Manor' },
    { name: 'Lynnwood Ridge', context: 'serving businesses along the Lynnwood Ridge corridor' },
    { name: 'Murrayfield', context: 'in the accessible suburb of Murrayfield' },
    { name: 'Meyerspark', context: 'supporting local trade in Meyerspark' },
    { name: 'Silverton', context: 'in the industrial and automotive hub of Silverton' },
    { name: 'Queenswood', context: 'centrally located in Queenswood' },
    { name: 'Kilner Park', context: 'near the N1 highway in Kilner Park' },
    { name: 'Riviera', context: 'serving the historic and medical precincts of Riviera' },
    { name: 'Rietondale', context: 'in the tight-knit community of Rietondale' },
    { name: 'Groenkloof', context: 'amidst the embassies and estates of Groenkloof' },
    { name: 'Lukasrand', context: 'overlooking the city from Lukasrand' },
    { name: 'Muckleneuk', context: 'serving the diplomatically dense area of Muckleneuk' },
    { name: 'Baileys Muckleneuk', context: 'in the prestigious Bailey\'s Muckleneuk' },
    { name: 'Nieuw Muckleneuk', context: 'near Brooklyn Mall in Nieuw Muckleneuk' },
    { name: 'Erasmuskloof', context: 'near Castle Walk and Erasmuskloof businesses' },
    { name: 'Erasmusrand', context: 'conveniently located in Erasmusrand' },
    { name: 'Monument Park', context: 'serving the classic Pretoria suburb of Monument Park' },
    { name: 'Sterrewag', context: 'in the secure and scenic Sterrewag' },
    { name: 'Pierre van Ryneveld', context: 'bridging Pretoria and Centurion in Pierre van Ryneveld' },
    { name: 'Lyttelton', context: 'in the heart of Centurion\'s Lyttelton district' },
    { name: 'Irene', context: 'near the farm village and corporate parks of Irene' },
    { name: 'Rooihuiskraal', context: 'serving the dense residential market of Rooihuiskraal' },
    { name: 'Wierda Park', context: 'in the bustling suburb of Wierda Park' },
    { name: 'Eldoraigne', context: 'serving the gated communities of Eldoraigne' },
    { name: 'Clubview', context: 'near the Hennops River in Clubview' }
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
    // Intro & Landscape (3-4 paragraphs)
    const introSection = `
For **${industry.name}** operating ${suburb.context}, the digital landscape is shifting. As one of Pretoria's evolving districts, **${suburb.name}** presents both lucrative opportunities and unique challenges. Local clients are no longer just looking for a service provider; they are searching for established authority and professional credibility close to home.

The competition in ${suburb.name} is heating up. Whether you are situated near the main arterials or tucked away in a quiet office park, your visibility to the local market is paramount. For ${industry.name}, this is doubly important. Your clients are looking for ${industry.context}, and they expect your digital presence to reflect these values instantly.

However, many businesses in ${suburb.name} still rely on outdated marketing methods or generic templates that fail to capture the local nuance. This disconnect creates a massive opportunity for forward-thinking ${industry.name} to capture market share. By tailoring your message to the specific needs and expectations of the ${suburb.name} demographic, you can position yourself as the go-to expert in your field.
`;

    // Deep Dive (3-4 paragraphs)
    const deepDiveSection = `
## Why ${service.name} is Critical for ${industry.name}

${service.name} acts as the bridge between your expertise and your future clients. In the context of ${industry.name}, it is not merely about aesthetics or vanity metrics; it is a fundamental business asset that drives growth and builds sustainability.

Consider the typical client journey in ${suburb.name}. Before they make a phone call or book a consultation, they are vetting you online. They are comparing your ${service.name.toLowerCase()} against your competitors. If your presence is weak, slow, or unclear, you are losing leads to the firm down the street that took their digital strategy seriously.

Effective ${service.name} for ${industry.name} must prioritize clarity and conversion. It should highlight your specific capabilities, showcase your track record, and answer client questions before they are even asked. It must be mobile-responsive for the commuter on the N1 and optimized for local search terms like "${industry.keywords} in ${suburb.name}".

Furthermore, a strategic approach to ${service.name} allows you to control your narrative. You can highlight your specific strengths—whether that's ${industry.context}—and differentiate yourself from the generic options flooding the market.
`;

    // 012 Pitch & Advantage (1-2 paragraphs)
    const pitchSection = `
## The 012 Agency Advantage in ${suburb.name}

At **012 Agency**, we don't believe in cookie-cutter solutions. We understand that a ${industry.name.slice(0, -1)} in ${suburb.name} has different needs than a retailer in Menlyn. Our approach is deeply rooted in local understanding combined with world-class design and technical expertise.

We partner with you to build a ${service.name} strategy that ${service.action}. By focusing on the specific dynamics of the ${suburb.name} market, we help you connect with high-intent local clients who are ready to engage with your services.
`;

    // FAQ Section (3 Unique Q&As)
    const faqSection = `
## Frequently Asked Questions

### Why does a ${industry.name.slice(0, -1)} in ${suburb.name} need professional ${service.name}?
Local clients equate the quality of your digital presence with the quality of your service. A professional presentation builds immediate trust, which is essential for client acquisition in your sector.

### How can 012 Agency help us target clients in ${suburb.name}?
We use hyper-local SEO strategies and geo-targeted content to ensure you appear when potential clients in ${suburb.name} search for your services, driving relevant foot traffic and inquiries.

### What is the ROI of ${service.name} for our industry?
The ROI is multifaceted: it includes higher conversion rates, better client retention, and a reduced cost of acquisition over time as your organic authority in ${suburb.name} grows.
`;

    // Conclusion
    const conclusion = `
## Conclusion

 The opportunity for ${industry.name} in ${suburb.name} is significant, but only for those who adapt. Investing in professional ${service.name} is the definitive step towards securing your position as a market leader.

**[Contact 012 Agency today](${service.link})** to discuss a tailored strategy for your business. Let's build something remarkable together in ${suburb.name}.
`;

    return `---
title: '${service.name} for ${industry.name} in ${suburb.name}'
excerpt: 'Expert ${service.name} solutions for ${industry.name} in ${suburb.name}. 012 Agency helps you capture the local market with specialized strategies.'
date: '${generateDate()}'
author: '012 Agency Team'
coverImage: 'https://images.unsplash.com/photo-${getRandomItem(IMAGE_POOL)}?w=800'
tags: ['${industry.name}', '${service.name}', '${suburb.name}', 'Pretoria', 'Local SEO']
category: '${industry.name}'
---

${introSection}

${deepDiveSection}

${pitchSection}

${faqSection}

${conclusion}
`;
}

let createdCount = 0;

// The Matrix: 30 Suburbs * 20 Industries * 5 Services = 3000 Posts
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
            if (createdCount % 500 === 0) {
                console.log(`Generated ${createdCount} posts...`);
            }
        });
    });
});

console.log(`Phase 7 Complete: Generated ${createdCount} new posts targeting 30 additional suburbs.`);
