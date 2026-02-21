import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Social Media Templates Pretoria | 012 Agency — Ready-to-Use Social Templates',
    description: 'Professional social media templates in Pretoria by 012 Agency. Branded, editable templates for Instagram, Facebook, LinkedIn, and more. Consistent, on-brand content every time.',
    keywords: ['social media templates pretoria', 'instagram templates pretoria', 'facebook templates pretoria', 'branded templates pretoria', 'social templates design pretoria'],
    alternates: { canonical: 'https://012agency.co.za/social-media-templates-pretoria' },
    openGraph: {
        title: 'Social Media Templates Pretoria | 012 Agency',
        description: 'Branded, editable social media templates for Pretoria businesses. Consistent, on-brand content every time.',
        url: 'https://012agency.co.za/social-media-templates-pretoria',
        type: 'website',
    },
};

const templateTypes = [
    { title: 'Instagram Post Templates', desc: 'Square and portrait templates for feed posts, carousels, and reels covers — designed to stop the scroll.' },
    { title: 'Instagram Story Templates', desc: 'Full-screen story templates for promotions, announcements, polls, and behind-the-scenes content.' },
    { title: 'Facebook Post Templates', desc: 'Landscape and square templates optimised for Facebook feed engagement and event promotion.' },
    { title: 'LinkedIn Templates', desc: 'Professional templates for thought leadership posts, company announcements, and job listings.' },
    { title: 'Twitter/X Templates', desc: 'Clean, readable templates for announcements, quotes, and promotional content on Twitter/X.' },
    { title: 'TikTok & YouTube Thumbnails', desc: 'Eye-catching thumbnail and cover templates that drive clicks and views on video platforms.' },
];

export default function SocialMediaTemplatesPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Social Media Templates Pretoria',
                        description:
                            'Social media template design services in Pretoria by 012 Agency. Branded, editable templates for Instagram, Facebook, LinkedIn and more.',
                        url: 'https://012agency.co.za/social-media-templates-pretoria',
                        serviceType: 'Social media template design',
                        category: 'Social media design services',
                        provider: {
                            '@type': 'LocalBusiness',
                            '@id': 'https://012agency.co.za',
                            name: '012 Agency',
                            url: 'https://012agency.co.za',
                            telephone: '+27 (0)62 369 3789',
                            address: {
                                '@type': 'PostalAddress',
                                streetAddress: 'Park Lane West Building, 194 Bancor Ave',
                                addressLocality: 'Waterkloof Glen',
                                addressRegion: 'Pretoria',
                                postalCode: '0181',
                                addressCountry: 'ZA',
                            },
                        },
                        areaServed: {
                            '@type': 'City',
                            name: 'Pretoria',
                        },
                        availableChannel: {
                            '@type': 'ServiceChannel',
                            serviceUrl: 'https://012agency.co.za/get-in-touch-pretoria',
                        },
                    }),
                }}
            />
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #FFD700 0%, transparent 50%), radial-gradient(circle at 70% 50%, #FFA500 0%, transparent 50%)' }} />
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">Post Consistently. Look Professional.</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        Social Media Templates <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Custom-designed, editable social media templates that keep your brand consistent across every platform — without the cost of custom design for every post.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">Get Your Template Pack</Link>
                        <Link href="/project-showcase-pretoria" className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300">View Examples</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">Why Your Business Needs a Template Pack</h2>
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>Consistency is the cornerstone of a strong social media presence. When your posts look cohesive and professional across every platform, your audience recognises your brand instantly — and that recognition builds trust. Yet for most businesses, achieving that level of visual consistency is a challenge. Designing every post from scratch is time-consuming, and without a design background, it is easy for your social media to look disjointed and unprofessional. That is exactly the problem that a custom social media template pack solves.</p>
                        <p>At 012 Agency, we design bespoke social media template packs for Pretoria businesses that want to look professional without spending hours on design every week. Each template is built around your brand — your colours, your fonts, your logo, your visual style — so every post you publish feels like it belongs to a cohesive, well-considered brand identity. Whether you are posting a product promotion, a team update, a motivational quote, or a service announcement, you have a template ready to go.</p>
                        <p>Our template packs are designed to be fully editable in Canva or Adobe Express, so your team can update text, images, and colours without any design skills. We set up the templates with your brand colours pre-loaded, your fonts installed, and your logo placed — so all you need to do is swap out the content. This dramatically reduces the time it takes to create and publish content, and ensures that every post meets your brand standards.</p>
                        <p>We design templates for all major social media platforms, including Instagram (feed posts, stories, reels covers, carousels), Facebook (feed posts, cover images, event banners), LinkedIn (posts, company updates, job listings), Twitter/X, TikTok, and YouTube (thumbnails, channel art). Each template is sized correctly for the platform and optimised for the way content is displayed on each network.</p>
                        <p>Beyond the visual design, we also think about the content strategy behind your templates. We design templates for different content types — promotional posts, educational content, testimonials, behind-the-scenes, product showcases, and seasonal campaigns — so you have a template for every occasion. This makes it easy to maintain a varied, engaging content calendar without having to think about design every time.</p>
                        <p>Our template packs are particularly popular with small and medium-sized businesses in Pretoria that want to maintain a professional social media presence without the cost of hiring a full-time designer or paying for custom design on every post. With a template pack, you make a one-time investment in professional design and then use those templates indefinitely.</p>
                        <p>We also offer template pack updates and expansions as your brand evolves or as you need templates for new content types or campaigns. Many of our clients start with a core pack and then add seasonal templates, campaign-specific templates, or templates for new platforms as their social media strategy grows.</p>
                        <p>Contact 012 Agency today to discuss your social media template needs. We will design a pack that makes your brand look exceptional on every platform, every time you post.</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">Template Types We Design</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">Templates for every platform and every content type your business needs.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {templateTypes.map((s) => (
                            <div key={s.title} className="bg-black rounded-xl p-6 border border-[#FFD700]/20 hover:border-[#FFD700]/60 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-10 h-1 bg-[#FFD700] mb-4 rounded" />
                                <h3 className="text-xl font-syne font-bold text-white mb-3">{s.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border-t border-[#FFD700]/20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">Ready to Post Like a Pro?</h2>
                    <p className="text-neutral-400 text-lg mb-8">Get a custom template pack designed for your brand and start posting consistently today.</p>
                    <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105 inline-block">Get Your Template Pack</Link>
                    <div className="mt-10 pt-10 border-t border-white/10 text-neutral-500 text-sm">
                        <p>012 Agency — Park Lane West Building, 194 Bancor Ave, Waterkloof Glen, Pretoria, 0181</p>
                        <p className="mt-1">📞 +27 (0)62 369 3769 &nbsp;|&nbsp; ✉ info@012agency.co.za</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
