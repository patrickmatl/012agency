const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const TOTAL_TARGET = 600;

// High-quality Unsplash Image IDs (Corporate/Architectural/Office)
const UNSPLASH_IMAGES = [
    '1486312338219-ce68d2c6f44d', '1556761175-5973dc0f32e7', '1497215728101-856f4ea42174',
    '1504384308090-c54beed04a58', '1557804506-669a67965ba0', '1497366216548-37526070297c',
    '1524758631624-e2822e304c36', '1517245386807-bb43f82c33c4', '1542744173-8e7e53415bb0',
    '1497215248552-3086eb0209ae', '1556761175-b413da4baf72', '1505373876426-413fe4616817',
    '1522071820081-009f0129c71c', '1491336477066-31156b5d4f35', '1531547220748-84e7fb7f65cf',
    '1504384764586-bb4cdc1707b0', '1552664730-d307ca884978', '1519389950473-47ba0277781c',
    '1460925895917-afdab827c52f', '1486406146926-c627a92ad1ab'
];

// Target Suburbs with specific context
const SUBURBS = [
    { name: 'Menlyn', context: 'near Menlyn Maine and the corporate hub', anchor: 'Menlyn' },
    { name: 'Centurion', context: 'in the bustling Centurion business district', anchor: 'Centurion' },
    { name: 'Silver Lakes', context: 'serving the exclusive Silver Lakes Golf Estate area', anchor: 'Silver Lakes' },
    { name: 'Faerie Glen', context: 'for established businesses in Faerie Glen', anchor: 'Faerie Glen' },
    { name: 'Brooklyn', context: 'in the creative heart of Brooklyn, Pretoria', anchor: 'Brooklyn' },
    { name: 'Hatfield', context: 'near the University and Hatfield Plaza', anchor: 'Hatfield' },
    { name: 'Waterkloof', context: 'serving premium clients in Waterkloof', anchor: 'Waterkloof' },
    { name: 'Lynnwood', context: 'conveniently located for Lynnwood Bridge businesses', anchor: 'Lynnwood' },
    { name: 'Garsfontein', context: 'supporting local SMEs in Garsfontein', anchor: 'Garsfontein' },
    { name: 'Montana', context: 'serving the growing commercial sector in Montana', anchor: 'Montana' }
];

// Services to promote
const SERVICES = [
    { name: 'Graphic Design', link: '/graphic-design-company-pretoria' },
    { name: 'Web Design', link: '/web-design-pretoria' },
    { name: 'SEO Services', link: '/digital-marketing-services-pretoria' },
    { name: 'Branding', link: '/branding-agency-pretoria' },
    { name: 'Social Media Marketing', link: '/social-media-design-pretoria' },
    { name: 'Logo Design', link: '/logo-design-pretoria' },
    { name: 'Annual Report Design', link: '/annual-report-design-company-pretoria' },
    { name: 'Company Profiles', link: '/company-profile-design-pretoria' },
    { name: 'Flyer Design', link: '/flyer-design-pretoria' },
    { name: 'Signage Design', link: '/signage-design-pretoria' },
    { name: 'UI/UX Design', link: '/ui-ux-design-pretoria' },
    { name: 'Print Services', link: '/print-design-pretoria' }
];

// Content Templates
const ANGLES = [
    "Strategic Advantage",
    "Local Success Stories",
    "Mistakes to Avoid",
    "Future Trends",
    "Choosing the Right Partner"
];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateSlug(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function generateDate() {
    const start = new Date(2023, 8, 1);
    const end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
}

function generateContent(title, service, suburb, angle) {
    const introOps = [
        `Running a business in **${suburb.name}** comes with unique challenges and opportunities. One of the most effective ways to stand out in this crowded marketplace is through professional **${service.name}**.`,
        `As **${suburb.name}** continues to grow as a key economic node in Pretoria, the demand for high-quality **${service.name}** has never been higher among local enterprises.`,
        `Whether you're located ${suburb.context} or in the surrounding areas, your brand's visual identity says a lot about your business. **${service.name}** is the key to unlocking that potential.`
    ];

    const problemOps = [
        `Many companies in ${suburb.name} underestimate the power of strategic design. They often rely on generic templates that don't resonate with the nuanced local clientele found in Pretoria East.`,
        `Competition in ${suburb.name} is fierce. Without a solid strategy for ${service.name}, it's incredibly easy to get lost in the noise of competitors.`,
        `We often see businesses ${suburb.context} struggling to connect with their audience because their digital presence is outdated, failing to reflect the modern vibrancy of the area.`
    ];

    const solutionOps = [
        `This is where **012 Agency** steps in. We offer specialized [${service.name} services for ${suburb.anchor} businesses](${service.link}) that are tailored to your specific needs and goals.`,
        `By partnering with a local agency that truly understands the ${suburb.name} market dynamics, you ensure that your ${service.name} strategy is effective, relevant, and impactful.`,
        `Our approach to ${service.name} is data-driven yet creatively inspired, ensuring that you get the best possible ROI for your business investment in ${suburb.name}.`
    ];

    return `---
title: '${title}'
excerpt: 'Expert ${service.name} services specifically for businesses in ${suburb.name}. Discover how 012 Agency can help you dominate the local market.'
date: '${generateDate()}'
author: '012 Agency Team'
coverImage: 'https://images.unsplash.com/photo-${getRandomItem(UNSPLASH_IMAGES)}?w=800'
tags: ['${service.name}', '${suburb.name}', 'Pretoria', 'Local Business', '012 Agency']
category: '${service.name}'
---

${getRandomItem(introOps)}

## The State of Business in ${suburb.name}

${suburb.name} is a vibrant commercial hub that demands excellence. ${getRandomItem(problemOps)} To succeed here, you need more than just a good product or service; you need a brand that speaks directly to the community's values and aspirations.

In a rapidly developing area like ${suburb.name}, consumer attention is the scarcest resource. Your visual communication is the first—and often only—chance you get to capture that attention. A professional approach to ${service.name} ensures you make that moment count.

## Why ${service.name} Matters Here

In contexts like ${suburb.context}, perception is reality. If your brand looks professional, polished, and premium, customers inherently trust you more. ${service.name} plays a crucial role in shaping that consumer perception before a single word is read.

### Local Relevance

Effective ${service.name} isn't just about aesthetics; it's about communication. It's about telling your story in a way that resonates with people living and working in ${suburb.name}. Using local visual cues, tone, and context creates a subconscious bond with your audience.

## The Cost of Poor Design

ignoring the quality of your ${service.name} can have tangible negative effects:
*   **Lower Conversion Rates:** Users bounce from ugly websites.
*   **Brand Confusion:** Inconsistent messaging dilutes your identity.
*   **Lost Revenue:** Premium clients will choose competitors who look the part.

## How 012 Agency Can Help

${getRandomItem(solutionOps)} We don't just deliver a file and walk away; we partner with you to ensure long-term success, adapting our strategies as the ${suburb.name} market evolves.

### Key Benefits for ${suburb.name} Clients:

1.  **Proximity:** We understand the local market dynamics better than remote agencies.
2.  **Speed:** Fast turnaround times for local businesses that need to move quickly.
3.  **Quality:** World-class design standards delivered right here in Pretoria.

## Frequently Asked Questions

### Do you work with small businesses in ${suburb.name}?
Yes! We work with businesses of all sizes in ${suburb.name}, from startups in co-working spaces to established enterprises in office parks.

### How quickly can we get started?
We prioritize local clients. Contact us today, and we can usually set up a consultation within 24-48 hours.

### Is ${service.name} expensive?
We offer scalable packages designed to provide maximum value for different budgets. We view it as an investment that should pay for itself through growth.

## Conclusion

Don't let your business get left behind in one of Pretoria's most competitive districts. Invest in professional ${service.name} and watch your brand grow. 

**[Contact 012 Agency today](/get-in-touch-pretoria)** to discuss your project. We are proud to serve the ${suburb.name} community.
`;
}

let createdCount = 0;

// Iterate: 10 Suburbs * 12 Services * 5 Angles = 600 Posts
SUBURBS.forEach(suburb => {
    SERVICES.forEach(service => {
        ANGLES.forEach((angle, index) => {
            let title = "";

            switch (index) {
                case 0: title = `Strategic ${service.name} for ${suburb.name} Businesses`; break;
                case 1: title = `${service.name} Success Stories in ${suburb.name}`; break;
                case 2: title = `Common ${service.name} Mistakes ${suburb.name} Companies Make`; break;
                case 3: title = `The Future of ${service.name} in ${suburb.name}`; break;
                case 4: title = `Choosing the Right ${service.name} Agency in ${suburb.name}`; break;
            }

            // Add variety if needed
            if (Math.random() > 0.8) {
                title = `Why ${suburb.name} Startups Need ${service.name}`;
            }

            let slug = generateSlug(title);
            let filePath = path.join(BLOG_DIR, `${slug}.mdx`);

            if (fs.existsSync(filePath)) {
                slug = `${slug}-${Math.floor(Math.random() * 10000)}`;
                filePath = path.join(BLOG_DIR, `${slug}.mdx`);
            }

            const content = generateContent(title, service, suburb, angle);
            fs.writeFileSync(filePath, content);
            createdCount++;
        });
    });
});

console.log(`Phase 5 Update Complete: Refreshed ${createdCount} suburb-targeted posts.`);
