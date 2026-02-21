const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const TOTAL_POSTS = 97;

// Unsplash Image IDs (Design/Creative/Business related)
const UNSPLASH_IMAGES = [
    '1558655146-d09347e92766', '1561070791-2526d30994b5', '1497215842964-222b4bef97ed',
    '1542744173-8e7e53415bb0', '1626785774573-4b79931bb95b', '1523726492986-ef0f001477aa',
    '1507238691940-5554f318eff3', '1557804506-669a67965ba0', '1572044162444-ad6021194360',
    '1542435503-956c469947f6', '1558655146-9f40138ed437', '1526738549149-8e07eca6c148',
    '1505373876426-413fe4616817', '1531403009284-440f080d1e12', '1519389950473-47ba0277781c',
    '1600880292203-757bb62b4baf', '1516321318423-f06f85e504b3', '1524758631624-e2822e304c36',
    '1535957996-55c880288d37', '1517245386807-bb43f82c33c4', '1586717791821-3f44a5638d07',
    '1513542789411-b6a5d4f31634', '1550745165-9bc0b252726f', '1556761175-5973dc0f32e7',
    '1501504905252-473c47e087f8', '1522542550221-31fd19575a2d', '1611162617474-5b21e879e113',
    '1664575602276-acd072f15453', '1498075702571-ecb018f3752c', '1454165804606-c3d57bc86b40'
];

const CATEGORIES = [
    { name: 'Graphic Design Tips', count: 15 },
    { name: 'Branding & Identity', count: 12 },
    { name: 'Web & UI/UX Design', count: 10 },
    { name: 'Print Design', count: 10 },
    { name: 'Social Media Design', count: 8 },
    { name: 'Pretoria Business Spotlight', count: 10 },
    { name: 'Marketing & Advertising', count: 8 },
    { name: 'Photography & Drone', count: 6 },
    { name: 'Exhibition & Signage', count: 6 },
    { name: 'Industry Insights', count: 12 }
];

// Content Generator Components
const INTRO_TEMPLATES = [
    "In the bustling creative landscape of Pretoria, businesses are constantly vying for attention. Effective design is more than just aesthetics; it's a strategic tool that can elevate your brand above the noise.",
    "As a leading creative agency in Pretoria, 012 Agency has witnessed firsthand how powerful visual communication can transform local businesses. In this post, we explore key strategies to enhance your brand presence.",
    "From the Jacaranda-lined streets of Brooklyn to the corporate hubs of Menlyn, design plays a crucial role in how Pretoria businesses connect with their audience.",
    "Navigating the competitive market in South Africa requires a strong visual identity. Whether you're a startup in Hatfield or an established firm in Centurion, these insights are tailored for you."
];

const BODY_PARAGRAPHS = [
    "One of the fundamental principles we emphasize at 012 Agency is consistency. A fragmented brand image can confuse potential customers and dilute your message. By maintaining a cohesive visual language across all touchpoints—from your logo to your social media posts—you build trust and recognition.",
    "Understanding your target audience in the Pretoria context is vital. The local market has unique nuances, and a design that resonates in Cape Town might not have the same impact here. Tailoring your visuals to reflect local culture and values can significantly boost engagement.",
    "We often see businesses underestimating the power of typography. The right font choice can convey professionalism, playfulness, or authority before a single word is read. It's a subtle but powerful psychological trigger that shapes consumer perception.",
    "Color psychology is another potent tool in our arsenal. For instance, blue often evokes trust and stability, making it popular among financial institutions in Pretoria, while vibrant oranges and yellows can capture the energy of the youth market.",
    "In today's digital-first world, your website is often the first interaction a customer has with your brand. Ensuring your web design is not only visually appealing but also user-friendly and mobile-responsive is non-negotiable for success in the 012 area.",
    "Don't overlook the tangible impact of print. Business cards, brochures, and flyers still hold significant weight in face-to-face networking, which remains a cornerstone of doing business in South Africa. High-quality print finishes can leave a lasting impression.",
    "Social media platforms are crowded marketplaces. To stop the scroll, your graphics need to be striking and relevant. We recommend using bold imagery and clear, concise messaging to capture attention within the first few seconds.",
    "Investing in professional photography can elevate your brand's perceived value. Authentic images of your team, products, or local Pretoria operations resonate far more with audiences than generic stock photos.",
    "Ultimately, good design is an investment, not an expense. It solves problems, communicates values, and drives growth. At 012 Agency, we are committed to helping Pretoria businesses harness this power to achieve their goals."
];

const CONCLUSION_TEMPLATES = [
    "In conclusion, elevating your brand requires a blend of creativity and strategy. If you're looking to make a mark in Pretoria, 012 Agency is here to partner with you on that journey.",
    "We hope these insights help you navigate your design challenges. Remember, your brand's visual identity is a living entity that needs care and professional attention to thrive in the South African market.",
    "Ready to take your brand to the next level? Contact 012 Agency today to discuss how we can bring these concepts to life for your business in Pretoria."
];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateSlug(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function generateDate() {
    const start = new Date(2023, 0, 1);
    const end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
}

function generateContent(title, category) {
    const intro = getRandomItem(INTRO_TEMPLATES);
    const conclusion = getRandomItem(CONCLUSION_TEMPLATES);

    // Shuffle body paragraphs to create variety
    const shuffledBody = [...BODY_PARAGRAPHS].sort(() => 0.5 - Math.random());

    // Force 10 paragraphs minimum
    const bodyText = shuffledBody.map((para, i) => {
        if (i === 0) return `## Understanding the Core Issue\n\n${para}`;
        if (i === 3) return `## The Pretoria Advantage\n\n${para}`;
        if (i === 6) return `## Strategic Implementation\n\n${para}`;
        return para;
    }).join('\n\n');

    return `---
title: '${title}'
excerpt: 'Discover expert insights on ${category} specifically tailored for the Pretoria market. Learn how ${title} can transform your business with 012 Agency.'
date: '${generateDate()}'
author: '012 Agency Team'
coverImage: 'https://images.unsplash.com/photo-${getRandomItem(UNSPLASH_IMAGES)}?w=800'
tags: ['${category}', 'Pretoria', '012 Agency', 'South Africa', 'Business Tips']
category: '${category}'
---

${intro}

${bodyText}

## Frequently Asked Questions

### Why is ${category} important for my business?
It serves as the bridge between your value proposition and your customer's needs. Without it, your message is lost.

### How does 012 Agency approach this?
We combine data-driven insights with creative excellence to deliver results that matter to Pretoria businesses.

### What is the first step?
Audit your current standing. Look at where you are versus where you want to be.

## Conclusion

${conclusion}
`;
}

// Pre-defined topics per category to ensure relevance
const TOPICS = {
    'Graphic Design Tips': [
        'The 5 Pillars of Effective Graphic Design',
        'Choosing the Right Color Palette for Your Brand',
        'Typography Trends in South Africa 2025',
        'How Minimalism Can Boost Your Message',
        'The Role of White Space in Layout Design',
        'Graphic Design Mistakes Small Businesses Make',
        'Vector vs Raster Images Explained',
        'Creating Visual Hierarchy in Your Designs',
        'The Psychology of Shapes in Logo Design',
        'How to Brief a Graphic Designer Effectively',
        'Rebranding: When Is It Time for a Change?',
        'Design Tools for Non-Designers',
        'The Future of Graphic Design in Pretoria',
        'Sustainable Graphic Design Practices',
        'Designing for Accessibility'
    ],
    'Branding & Identity': [
        'Building a Strong Brand Identity in Pretoria',
        'Logo Design: More Than Just a Symbol',
        'Developing Your Brand Voice and Tone',
        'The Importance of Brand Guidelines',
        'Personal Branding for Entrepreneurs',
        'Brand Consistency Across All Channels',
        'Visual Storytelling for Brands',
        'Rebranding Success Stories in South Africa',
        'Brand Archetypes and Your Business',
        'Emotional Branding Strategies',
        'Creating a memorable Brand Experience',
        'Corporate Identity Implementation'
    ],
    'Web & UI/UX Design': [
        'Web Design Trends Dominating 2025',
        'Mobile-First Design for South African Users',
        'The Importance of UX in E-commerce',
        'Speed Optimization for WordPress Sites',
        'Choosing the Right CMS for Your Business',
        'Landing Page Best Practices for Conversions',
        'Accessibility in Web Design',
        'UI Design Principles for Better Engagement',
        'The Role of Micro-Interactions',
        'Website Maintenance Essentials'
    ],
    'Print Design': [
        'Why Print Marketing Still Matters in 2025',
        'Designing Effective Business Cards',
        'Paper Stock and Finishes Guide',
        'Brochure Design Tips for Sales',
        'Large Format Printing for Events',
        'Packaging Design That Sells',
        'Direct Mail Marketing Strategies',
        'Preparing Files for Professional Print',
        'The Tactile Advantage of Print Media',
        'Eco-Friendly Printing Options'
    ],
    'Social Media Design': [
        'Designing for Instagram vs LinkedIn',
        'Creating Scroll-Stopping Social Graphics',
        'Video Content Design Strategies',
        'Using Templates for Social Media Consistency',
        'The Ideal Image Sizes for 2025',
        'Info-graphic Design for Viral Reach',
        'Designing Highlights and Stories',
        'Branding Your Social Media Profiles'
    ],
    'Pretoria Business Spotlight': [
        'Top Design Trends in Pretoria East',
        'Local Business Marketing Strategies',
        'Networking Events for Creatives in 012',
        'Success Stories: Pretoria Startups',
        'The Creative Economy of Tshwane',
        'Collaborating with Local Pretoria Agencies',
        'Digital Transformation in Pretoria',
        'Office Space Design in Menlyn',
        'Supporting Local: Pretoria Business Directory',
        'The Future of Business in the Capital'
    ],
    'Marketing & Advertising': [
        'Integrating Design into Your Marketing Strategy',
        'Digital Marketing vs Traditional Advertising',
        'Content Marketing Visuals',
        'Email Newsletter Design Tips',
        'Influence of Design on ROI',
        'Google Ads Display Banner Best Practices',
        'Psychology in Advertising Design',
        'Measuring Design Effectiveness'
    ],
    'Photography & Drone': [
        'The Impact of Professional Photography',
        'Drone Photography for Real Estate in Pretoria',
        'Corporate Headshots: Do They Matter?',
        'Product Photography for E-commerce',
        'Event Photography Coverage Tips',
        'Aerial Videography Services in 012'
    ],
    'Exhibition & Signage': [
        'Stand Out at Your Next Trade Show',
        'effective Signage Design for Retail',
        'Vehicle Branding Strategies',
        'Wayfinding Design Principles',
        'Digital Signage Solutions',
        'Outdoor Advertising in Pretoria'
    ],
    'Industry Insights': [
        'The State of the Creative Industry in SA',
        'How AI is Changing Design',
        'Remote Work for Creative Teams',
        'Client Management for Agencies',
        'Pricing Your Creative Services',
        'Copyright Law for Designers in South Africa',
        'Mental Health for Creatives',
        'Continuous Learning in Design',
        'The Freelance vs Agency Debate',
        'Design Leadership Skills',
        'Global Design Trends vs Local Context',
        'The Value of Creative Thinking'
    ]
};

// Main Execution
let createdCount = 0;

CATEGORIES.forEach(cat => {
    const categoryName = cat.name;
    const targetCount = cat.count;
    const topicList = TOPICS[categoryName] || [];

    for (let i = 0; i < targetCount; i++) {
        // Use topic if available, otherwise generate generic
        let title = topicList[i] || `${categoryName} Strategy ${i + 1}`;

        // Ensure unique slug
        let slug = generateSlug(title);
        let filePath = path.join(BLOG_DIR, `${slug}.mdx`);

        // If file exists (e.g. from generic conflict), append index
        if (fs.existsSync(filePath)) {
            title = `${title} - Part ${i + 1}`;
            slug = generateSlug(title);
            filePath = path.join(BLOG_DIR, `${slug}.mdx`);
        }

        const content = generateContent(title, categoryName);
        fs.writeFileSync(filePath, content);
        console.log(`Created: ${slug}.mdx`);
        createdCount++;
    }
});

console.log(`Successfully created ${createdCount} blog posts.`);
