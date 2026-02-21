import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Social Media Design Pretoria | Social Media Graphics & Content | 012 Agency',
    description: 'Professional social media design in Pretoria by 012 Agency. Scroll-stopping graphics for Instagram, Facebook, LinkedIn, and TikTok. Consistent, on-brand content that grows your following. Get a quote.',
    keywords: [
        'social media design pretoria',
        'social media graphics pretoria',
        'social media content design pretoria',
        'instagram design pretoria',
        'facebook design pretoria',
        'social media management pretoria',
    ],
    alternates: { canonical: 'https://012agency.co.za/social-media-design-pretoria' },
    openGraph: {
        title: 'Social Media Design Pretoria | 012 Agency',
        description: 'Professional social media design in Pretoria. Scroll-stopping graphics for Instagram, Facebook, LinkedIn, and TikTok.',
        url: 'https://012agency.co.za/social-media-design-pretoria',
        type: 'website',
    },
};

const socialServices = [
    { title: 'Post & Feed Design', desc: 'Consistent, on-brand post graphics for Instagram, Facebook, and LinkedIn that build a cohesive feed aesthetic.' },
    { title: 'Story & Reel Templates', desc: 'Animated and static story templates that maintain brand consistency across all your short-form content.' },
    { title: 'Profile & Cover Design', desc: 'Professional profile pictures, cover images, and highlight covers that make your profiles look polished.' },
    { title: 'Promotional Graphics', desc: 'Eye-catching graphics for sales, promotions, product launches, and special offers that drive action.' },
    { title: 'Social Media Ad Design', desc: 'High-converting ad creatives for Facebook Ads, Instagram Ads, and LinkedIn Ads campaigns.' },
    { title: 'Content Calendars', desc: 'Monthly content planning and design packages that keep your social media consistent and active.' },
];

export default function SocialMediaDesignPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Social Media Design Pretoria',
                        description:
                            'Social media design services in Pretoria by 012 Agency. Scroll-stopping graphics and content for Instagram, Facebook, LinkedIn and TikTok.',
                        url: 'https://012agency.co.za/social-media-design-pretoria',
                        serviceType: 'Social media design',
                        category: 'Social media marketing services',
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
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 35% 45%, #FFD700 0%, transparent 50%), radial-gradient(circle at 65% 55%, #FFA500 0%, transparent 50%)' }} />
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">Stop the Scroll. Start the Conversation.</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        Social Media Design <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        We design social media graphics that stop people scrolling, communicate your brand clearly, and build a following that turns into paying customers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">Get a Quote</Link>
                        <Link href="/digital-marketing-services-pretoria" className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300">Our Digital Services</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">Social Media Graphics That Build Your Brand</h2>
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>Social media has become one of the most powerful marketing channels available to Pretoria businesses. Platforms like Instagram, Facebook, LinkedIn, and TikTok give you direct access to your target audience — but only if your content is compelling enough to compete for their attention. In a feed full of competing posts, professionally designed social media graphics are what separate businesses that build real followings from those that post into the void.</p>
                        <p>At 012 Agency, we design social media content for Pretoria businesses that is visually striking, brand-consistent, and strategically crafted to achieve specific goals. Whether you want to grow your following, promote a product or service, establish your expertise, or drive traffic to your website, we design content that works. Our designers understand the nuances of each platform — what performs on Instagram is different from what works on LinkedIn — and we tailor every piece of content accordingly.</p>
                        <p>Brand consistency is one of the most important factors in social media success. When someone visits your profile, they should immediately get a clear sense of who you are and what you stand for. A consistent visual identity — consistent colours, fonts, graphic styles, and tone — builds recognition and trust over time. We create social media design systems that give your profiles a cohesive, professional look that makes your brand instantly recognisable in any feed.</p>
                        <p>We offer both one-off design projects and ongoing monthly content packages. For businesses that need a regular supply of social media graphics, our monthly packages provide a cost-effective solution — a set number of designed posts, stories, and ad creatives delivered each month, ready to schedule and publish. This takes the design burden off your team while ensuring that your social media presence remains active, consistent, and professional.</p>
                        <p>Our social media ad design service is particularly valuable for businesses running paid campaigns on Facebook, Instagram, or LinkedIn. Ad creative is one of the most important factors in campaign performance — a poorly designed ad will underperform regardless of how well it is targeted. We design ad creatives that are attention-grabbing, clear, and optimised for the specific objectives of your campaign, whether that is brand awareness, lead generation, or direct sales.</p>
                        <p>We also design social media templates — editable files that your team can use to create new content quickly while maintaining brand consistency. These templates are built in tools like Canva or Adobe Express, making them accessible to non-designers on your team. This is a great solution for businesses that want to maintain an active social media presence without relying on a designer for every single post.</p>
                        <p>Animation and motion graphics are increasingly important in social media content. Moving images consistently outperform static ones in terms of engagement and reach. We create simple animations, animated story templates, and short motion graphics that bring your social media content to life without the cost and complexity of full video production.</p>
                        <p>If your social media profiles do not reflect the quality of your business, or if you are struggling to maintain a consistent, professional presence, 012 Agency can help. Contact us today to discuss a social media design solution that works for your business and your budget.</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">Our Social Media Design Services</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">Everything you need to look professional and consistent across all your social platforms.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {socialServices.map((s) => (
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
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">Ready to Transform Your Social Media?</h2>
                    <p className="text-neutral-400 text-lg mb-8">Let&apos;s create social media content that makes your Pretoria business impossible to scroll past.</p>
                    <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105 inline-block">Start Your Social Media Project</Link>
                    <div className="mt-10 pt-10 border-t border-white/10 text-neutral-500 text-sm">
                        <p>012 Agency — Park Lane West Building, 194 Bancor Ave, Waterkloof Glen, Pretoria, 0181</p>
                        <p className="mt-1">📞 +27 (0)62 369 3789 &nbsp;|&nbsp; ✉ info@012agency.co.za</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
