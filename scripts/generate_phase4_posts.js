const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const TOTAL_POSTS = 300;

// High-quality Unsplash Image IDs (Corporate/Minimal/Pretoria Vibe)
const UNSPLASH_IMAGES = [
    '1497366216548-37526070297c', '1497215728101-856f4ea42174', '1542744099299-28ef65316199',
    '1556761175-5973dc0f32e7', '1504384308090-c54beed04a58', '1557804506-669a67965ba0',
    '1486406146926-c627a92ad1ab', '1552664730-d307ca884978', '1542744173-8e7e53415bb0',
    '1497215842964-222b4bef97ed', '1561070791-2526d30994b5', '1504384764586-bb4cdc1707b0',
    '1556761175-b413da4baf72', '1498050108023-c5249f4df085', '1527689368864-dd1b26c0a3e7',
    '1497215248552-3086eb0209ae', '1522071820081-009f0129c71c', '1519389950473-47ba0277781c',
    '1460925895917-afdab827c52f', '1491336477066-31156b5d4f35', '1467232004561-158584546ac5',
    '1531547220748-84e7fb7f65cf', '1479813131908-2c351f49673a', '1448696349941-8e0ce9be512d'
];

// Map Categories to Service Pages for Internal Linking
const INTERNAL_LINKS = {
    'Graphic Design Tips': '/graphic-design-company-pretoria',
    'Branding & Identity': '/branding-agency-pretoria',
    'Web & UI/UX Design': '/web-design-pretoria',
    'Print Design': '/print-design-pretoria',
    'Social Media Design': '/social-media-design-pretoria',
    'Marketing & Advertising': '/digital-marketing-services-pretoria',
    'Pretoria Business Spotlight': '/about-graphic-design-company-pretoria',
    'Industry Niche Designs': '/service-bundles-pretoria',
    'Corporate Communication': '/annual-report-design-company-pretoria'
};

const CATEGORIES = [
    { name: 'Graphic Design Tips', count: 40 },
    { name: 'Branding & Identity', count: 40 },
    { name: 'Web & UI/UX Design', count: 35 },
    { name: 'Print Design', count: 35 },
    { name: 'Social Media Design', count: 30 },
    { name: 'Marketing & Advertising', count: 30 },
    { name: 'Pretoria Business Spotlight', count: 30 },
    { name: 'Industry Niche Designs', count: 40 }, // Real Estate, Medical, Legal, etc.
    { name: 'Corporate Communication', count: 20 }
];

// Content Generator Components
const INTROS = [
    "In the highly competitive market of Pretoria, standing out is no longer a luxury—it's a necessity. Businesses that invest in professional design consistently outperform those that rely on generic templates.",
    "From the boardroom tables of Menlyn Maine to the startups in Hatfield, the visual language of business in 012 is evolving. Are you keeping up with the trends?",
    "Your brand is more than just a logo; it's the silent ambassador of your business. In this deep dive, we explore strategies to elevate your corporate identity in the South African context.",
    "Navigating the visual landscape of modern marketing can be daunting. As Pretoria's leading creative agency, 012 Agency is here to demystify the process."
];

const PROBLEMS = [
    "Many local businesses struggle with inconsistency. One day their social media looks professional, the next it looks amateurish. This cognitive dissonance erodes trust.",
    "We often see companies in Pretoria using outdated visual metaphors. What worked in 2015 doesn't resonate with today's sophisticated consumer.",
    "A common pitfall is ignoring the mobile experience. With the majority of South Africans accessing the web via smartphones, a desktop-first mentality is a recipe for failure.",
    "The 'DIY trap' is real. Tools like Canva are great for quick fixes, but they lack the strategic depth required for long-term brand building."
];

const PRETORIA_CONTEXT = [
    "Pretoria is unique. It's a city of government, diplomacy, and academia, yet it pulses with a vibrant youth culture. Design here needs to bridge these worlds.",
    "The 012 area has seen a surge in entrepreneurship. This means more noise and more competition. To cut through, your visual identity needs to be razor-sharp.",
    "Local consumers in Tshwane value authenticity. They can spot a generic, international stock template a mile away. Localizing your imagery and tone is key."
];

const SOLUTIONS = [
    "Start by auditing your current assets. Does your business card match your website? Does your LinkedIn banner align with your brochure? Consistency builds recognition.",
    "Invest in a style guide. It doesn't have to be a 50-page document, but a clear set of rules for colors, fonts, and logo usage will save you headaches down the line.",
    "Focus on user experience (UX). Whether it's a printed flyer or a website, the journey from 'seeing' to 'acting' should be frictionless.",
    "Embrace storytelling. Use your design to tell the story of your brand's heritage, your team's expertise, or your commitment to the Pretoria community."
];

const WHY_PRO = [
    "Professional design isn't an expense; it's an investment with a measurable ROI. It allows you to charge premium prices and attract better clients.",
    "An agency partner brings objective expertise. We see the blind spots you might miss because you're too close to the daily operations.",
    "Speed and scalability. As your business grows, you need a design system that grows with you, not one that needs to be torn down and rebuilt every year."
];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateSlug(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function generateDate() {
    const start = new Date(2023, 5, 1);
    const end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
}

function generateContent(title, category) {
    const intro = getRandomItem(INTROS);
    const problem = getRandomItem(PROBLEMS);
    const context = getRandomItem(PRETORIA_CONTEXT);
    const solution = getRandomItem(SOLUTIONS);
    const whyPro = getRandomItem(WHY_PRO);

    const targetLink = INTERNAL_LINKS[category] || '/get-in-touch-pretoria';

    return `---
title: '${title}'
excerpt: 'Expert insights on ${category} for Pretoria businesses. Discover how ${title} impacts your brand success in the 012 area.'
date: '${generateDate()}'
author: '012 Agency Team'
coverImage: 'https://images.unsplash.com/photo-${getRandomItem(UNSPLASH_IMAGES)}?w=800'
tags: ['${category}', 'Pretoria', 'Business Growth', '012 Agency', 'South Africa']
category: '${category}'
---

${intro}

In this comprehensive guide, we will explore why specific attention to ${category} is the missing link in many Pretoria-based business strategies.

## The Challenge for Local Businesses

${problem} This is where strategic thinking becomes critical. Without a clear plan, your marketing efforts are just shots in the dark.

In the fast-paced environment of Gauteng, you have seconds to make an impression. If your visual communication is weak, you lose the opportunity before you even get to pitch. This is why mastering the nuances of ${title} is non-negotiable.

## Why Context Matters in Pretoria

${context} Understanding the local demographic—from government officials in Arcadia to students in Hatfield—allows for more targeted and effective communication.

As a [specialized agency in Pretoria](${targetLink}), 012 Agency understands these nuances. We don't just design; we strategize for the local ecosystem.

## Practical Solutions for Growth

${solution} This practical approach ensures that every pixel serves a purpose. It's not about making things "pretty"; it's about making them effective.

For example, when we approach ${category.toLowerCase()}, we look at the entire customer journey. From the first touchpoint to the final sale, the design language must remain cohesive.

## The Value of Professional Design

${whyPro} When you work with experts, you're buying their years of experience, their software proficiency, and their strategic insight.

## Frequently Asked Questions

### Can I do ${category} myself?
While tools exist, professional execution requires an understanding of theory, psychology, and technical specifications that DIY platforms cannot provide.

### How does ${category} affect my bottom line?
Good design builds trust, and trust drives conversions. It shortens the sales cycle by answering customer questions visually before they even ask them.

### Why choose a local Pretoria agency?
We know the market. We know the competitors. We know what resonates in the 012.

## Conclusion

${title} is a critical component of your business strategy. In a city as dynamic as Pretoria, resting on your laurels is not an option. Continuous improvement in your visual identity will yield long-term dividends.

Ready to elevate your brand? **[Contact 012 Agency today](/get-in-touch-pretoria)** and let's discuss how we can help you achieve your goals.
`;
}

// Generate Titles
const TITLES = {
    'Graphic Design Tips': Array.from({ length: 40 }, (_, i) => `Advanced Graphic Design Principles Part ${i + 1}: Mastering Visual Hierarchy`),
    'Branding & Identity': Array.from({ length: 40 }, (_, i) => `Corporate Identity Secrets ${i + 1}: Building Trust in the 012`),
    'Web & UI/UX Design': Array.from({ length: 35 }, (_, i) => `Web Design Trends 2025 Part ${i + 1}: Optimizing for Speed`),
    'Print Design': Array.from({ length: 35 }, (_, i) => `The Power of Print in a Digital Age ${i + 1}: Tactile Marketing`),
    'Social Media Design': Array.from({ length: 30 }, (_, i) => `Instagram Growth Hacks ${i + 1}: Designing for Engagement`),
    'Marketing & Advertising': Array.from({ length: 30 }, (_, i) => `Digital Marketing ROI ${i + 1}: Measuring Design Impact`),
    'Pretoria Business Spotlight': Array.from({ length: 30 }, (_, i) => `Pretoria Business Success Series ${i + 1}: Local Case Studies`),
    'Industry Niche Designs': [
        ...Array.from({ length: 10 }, (_, i) => `Design for Real Estate Agents in Pretoria ${i + 1}`),
        ...Array.from({ length: 10 }, (_, i) => `Medical Practice Branding in Centurion ${i + 1}`),
        ...Array.from({ length: 10 }, (_, i) => `Legal Firm Corporate Identity Tips ${i + 1}`),
        ...Array.from({ length: 10 }, (_, i) => `Engineering Company Profiles in South Africa ${i + 1}`)
    ],
    'Corporate Communication': Array.from({ length: 20 }, (_, i) => `Annual Report Design Strategy ${i + 1}: Beyond the Numbers`)
};

let createdCount = 0;

CATEGORIES.forEach(cat => {
    const categoryName = cat.name;
    const targetCount = cat.count;
    const titles = TITLES[categoryName] || [];

    for (let i = 0; i < targetCount; i++) {
        let title = titles[i] || `${categoryName} Insight ${i + 1}`;
        let slug = generateSlug(title);
        let filePath = path.join(BLOG_DIR, `${slug}.mdx`);

        // Prevent duplicates
        if (fs.existsSync(filePath)) {
            slug = `${slug}-${Math.floor(Math.random() * 1000)}`;
            filePath = path.join(BLOG_DIR, `${slug}.mdx`);
        }

        const content = generateContent(title, categoryName);
        fs.writeFileSync(filePath, content);
        createdCount++;
    }
});

console.log(`Phase 4 Update Complete: Refreshed ${createdCount} blog posts.`);
