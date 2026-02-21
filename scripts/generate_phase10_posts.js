const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../src/content/blog');

// Industry-Specific Contexts & Keywords (Same as Previous Phases) - but context will be filtered by Sandton tone
const INDUSTRIES = [
    { name: 'Law Firms', context: 'corporate litigation, mergers and acquisitions, and international law', keywords: 'corporate law firm, attorney sandton', image: 'legal' },
    { name: 'Medical Practices', context: 'specialist care, aesthetic medicine, and world-class facilities', keywords: 'specialist doctor, aesthetic clinic sandton', image: 'medical' },
    { name: 'Construction Companies', context: 'commercial developments, high-rise architecture, and green building certifications', keywords: 'commercial construction, luxury developer', image: 'construction' },
    { name: 'Real Estate Agencies', context: 'luxury penthouses, commercial leasing, and investment portfolios', keywords: 'luxury real estate, commercial property sandton', image: 'real-estate' },
    { name: 'Restaurants', context: 'fine dining, executive business lunches, and michelin-star experiences', keywords: 'fine dining sandton, luxury restaurant', image: 'restaurant' },
    { name: 'Private Schools', context: 'global curriculum, future leaders, and elite extracurriculars', keywords: 'private school sandton, international school', image: 'school' },
    { name: 'Logistics Companies', context: 'international freight, supply chain optimization, and enterprise solutions', keywords: 'global logistics, supply chain management', image: 'logistics' },
    { name: 'Car Dealerships', context: 'luxury vehicles, executive fleets, and supercar showrooms', keywords: 'luxury car dealership, executive fleet', image: 'car' },
    { name: 'Financial Advisors', context: 'wealth management, offshore investments, and corporate tax strategy', keywords: 'wealth manager sandton, investment banker', image: 'finance' },
    { name: 'Retail Stores', context: 'luxury brands, flagship stores, and exclusive boutiques', keywords: 'luxury retail, flagship store sandton', image: 'retail' },
    { name: 'Salons & Spas', context: 'executive grooming, luxury wellness, and aesthetic treatments', keywords: 'luxury spa sandton, executive grooming', image: 'beauty' },
    { name: 'Security Companies', context: 'corporate security, executive protection, and cyber-security', keywords: 'corporate security services, executive protection', image: 'security' },
    { name: 'Solar Installers', context: 'commercial grid-tie systems, sustainability reporting, and green energy audits', keywords: 'commercial solar, green building energy', image: 'solar' },
    { name: 'Event Planners', context: 'corporate galas, product launches, and international conferences', keywords: 'corporate event planner, conference organizer', image: 'event' },
    { name: 'Gyms', context: 'executive wellness, personal training, and premium facilities', keywords: 'luxury gym, wellness centre sandton', image: 'fitness' },
    { name: 'IT Services', context: 'enterprise cloud, cybersecurity infrastructure, and digital transformation', keywords: 'enterprise it services, cyber security sandton', image: 'tech' },
    { name: 'Non-Profits', context: 'corporate social responsibility (CSR), global impact, and donor relations', keywords: 'csr foundation, non-profit organization', image: 'charity' },
    { name: 'Manufacturers', context: 'export quality, industrial innovation, and automated production', keywords: 'industrial manufacturing, export ready', image: 'factory' },
    { name: 'Consultants', context: 'management consulting, organizational strategy, and change management', keywords: 'management consultant, strategy consulting', image: 'consulting' },
    { name: 'Architects', context: 'iconic skylines, sustainable design, and award-winning architecture', keywords: 'commercial architect, luxury home architect', image: 'architecture' }
];

// Services (Same as Previous Phases)
const SERVICES = [
    { name: 'Web Design', link: '/web-design-pretoria', action: 'showcase your global excellence' },
    { name: 'SEO', link: '/digital-marketing-services-pretoria', action: 'dominate executive search results' },
    { name: 'Branding', link: '/branding-agency-pretoria', action: 'define your corporate identity' },
    { name: 'Social Media', link: '/social-media-design-pretoria', action: 'engage with high-net-worth stakeholders' },
    { name: 'Print Marketing', link: '/print-design-pretoria', action: 'present premium corporate collateral' }
];

// 5 Sandton Locations
const LOCATION_EXPANSION = [
    { name: 'Sandton', context: 'in the heart of Africa\'s richest square mile' },
    { name: 'Bryanston', context: 'within the executive hubs of Bryanston' },
    { name: 'Morningside', context: 'serving the elite residential and medical circles of Morningside' },
    { name: 'Rivonia', context: 'along the bustling commercial corridor of Rivonia' },
    { name: 'Rosebank', context: 'in the cosmopolitan business district of Rosebank' }
];

// Unsplash Image Map (Corporate & Luxury Focus)
const IMAGE_POOL = [
    '1486406146926-c627a92ad1ab', '1497215728101-856f4ea42174', '1556761175-5973dc0f32e7',
    '1542744173-8e7e53415bb0', '1497366216548-37526070297c', '1507679799938-d73b36d19f65',
    '1454165804606-c3d57bc86b40', '1552664730-d307ca884978', '1520607162513-7770d8f7558d',
    '1504384764586-bb4cdc1707b0'
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
    // 1. Intro (2 Paras) - Corporate Context
    const introSection = `
**${suburb.name}** is not just a location; it is a statement. As the epicentre of commerce and luxury in South Africa, it demands a standard of excellence that is non-negotiable. For **${industry.name}** operating ${suburb.context}, the stakes are incredibly high. Your clientele expects nothing less than perfection, and your digital presence is often the first place they look to find it.

In this hyper-competitive environment, mediocrity is invisible. Whether you are targeting multinational corporations, high-net-worth individuals, or global investors, your brand needs to project authority and sophistication instantly. A standard website or a generic marketing strategy simply will not cut it in the boardrooms of ${suburb.name}.
`;

    // 2. The Landscape (2 Paras) - Fierce Competition
    const landscapeSection = `
## The Corporate Landscape in ${suburb.name}

The business ecosystem in ${suburb.name} is characterized by rapid innovation and fierce competition. Every ${industry.name.slice(0, -1)} is vying for the attention of a sophisticated audience. In sectors defined by **${industry.context}**, trust is not given; it is earned through demonstration of capability and class.

Your competitors are already investing heavily in their digital infrastructure. They understand that in ${suburb.name}, perception is reality. If your digital footprint looks outdated compared to the sleek, modern aesthetic that defines the district, you are effectively signaling that your business is behind the curve. To lead in ${suburb.name}, you must look like a leader.
`;

    // 3. The Solution (2 Paras) - World-Class Design
    const solutionSection = `
## Why Premium ${service.name} is Non-Negotiable

Strategic **${service.name}** is the tool that positions you at the top of the food chain. It is about translating your real-world prestige into a digital asset. For ${industry.name}, this means creating a platform that mirrors the quality of your service—refined, efficient, and impactful.

When we approach ${service.name} for ${suburb.name} clients, we focus on "Investor Readiness" and "Brand Equity." We aren't just building a page; we are crafting a digital headquarters. It must be able to stand up to scrutiny from discerning clients who inhabit the most expensive square mile on the continent.
`;

    // 4. Key Features (List + 2 Paras) - Global Standards
    const featuresSection = `
## Features of a ${suburb.name}-Grade Digital Strategy

To resonate with the ${suburb.name} market, your ${service.name} must deliver:

*   **Minimalist, High-End Aesthetics:** Design that breathes luxury and professionalism.
*   **Executive-Level Content:** Copy that speaks directly to decision-makers, devoid of fluff.
*   **Performance Optimization:** Lightning-fast load times for busy executives on the go.
*   **Seamless User Experience (UX):** Frictionless journeys from landing page to conversion.

In ${suburb.name}, time is the most valuable commodity. Your digital interface must respect that. A clunky or confusing experience is a disrespect to your client's time.

By aligning your digital identity with global design standards, you separate yourself from the noise. You signal that your business operates on a different level—the level that ${suburb.name} expects.
`;

    // 5. 012 Advantage (1 Para) - Agency Pitch
    const advantageSection = `
## The 012 Agency Advantage

**012 Agency** brings a unique value proposition to ${suburb.name}. We offer world-class, agency-grade design and strategy without the bloated overheads often associated with traditional Sandton agencies. We understand the nuance of **${industry.name}** and we know how to package your expertise for the most discerning market in Africa.
`;

    // 6. FAQ Section (3 Q&As)
    const faqSection = `
## Frequently Asked Questions

### What constitutes "Premium" ${service.name} for the ${suburb.name} market?
It means avoiding templates. It means bespoke strategy, custom coding where necessary, and a design language that aligns with international corporate trends rather than local defaults.

### Can you help us target international clients looking at ${suburb.name}?
Absolutely. Our SEO strategies are built to capture global search traffic. If an investor in London is looking for "${industry.keywords}", we ensure your brand appears with authority.

### How does ${service.name} impact our brand valuation?
A strong digital asset is part of your company's IP. In M&A scenarios or partnership discussions, a flawless digital presence adds tangible value to your brand equity.
`;

    // 7. Conclusion (1 Para) - CTA
    const conclusion = `
## Conclusion

To operate in ${suburb.name} is to play in the big leagues. Ensure your team is equipped with a digital presence that belongs there. **[Partner with 012 Agency](${service.link})** to elevate your brand to the global standard that your ${industry.name.slice(0, -1)} deserves.
`;

    return `---
title: '${service.name} for ${industry.name} in ${suburb.name}'
excerpt: 'World-class ${service.name} for ${industry.name} in ${suburb.name}. 012 Agency delivers corporate excellence and premium digital strategies.'
date: '${generateDate()}'
author: '012 Agency Team'
coverImage: 'https://images.unsplash.com/photo-${getRandomItem(IMAGE_POOL)}?w=800'
tags: ['${industry.name}', '${service.name}', '${suburb.name}', 'Sandton Corporate', 'Luxury Marketing']
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

// The Matrix: 5 Locations * 20 Industries * 5 Services = 500 Posts
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
                console.log(`Phase 10 Generated ${createdCount} posts...`);
            }
        });
    });
});

console.log(`Phase 10 Complete: Generated ${createdCount} new posts targeting Sandton & Surrounds.`);
