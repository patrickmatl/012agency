import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Ad Creatives Pretoria | 012 Agency — Digital Ad Design Pretoria',
    description: 'High-converting ad creatives in Pretoria by 012 Agency. Google Display ads, Facebook ads, Instagram ads, and LinkedIn ads designed to drive clicks and conversions. Get a quote today.',
    keywords: ['ad creatives pretoria', 'facebook ad design pretoria', 'google display ads pretoria', 'digital advertising design pretoria', 'social media ads pretoria', 'ad creative agency pretoria'],
    alternates: { canonical: 'https://012agency.co.za/ad-creatives-pretoria' },
    openGraph: {
        title: 'Ad Creatives Pretoria | 012 Agency',
        description: 'High-converting ad creatives for Google, Facebook, Instagram, and LinkedIn. Designed to drive clicks and conversions for Pretoria businesses.',
        url: 'https://012agency.co.za/ad-creatives-pretoria',
        type: 'website',
    },
};

const adTypes = [
    { title: 'Facebook & Instagram Ads', desc: 'Static, carousel, and video ad creatives optimised for Meta platforms — designed to stop the scroll and drive action.' },
    { title: 'Google Display Ads', desc: 'Responsive display ads in all standard sizes for the Google Display Network, designed for brand awareness and retargeting.' },
    { title: 'LinkedIn Ads', desc: 'Professional ad creatives for LinkedIn sponsored content, message ads, and dynamic ads targeting B2B audiences.' },
    { title: 'YouTube Ad Creatives', desc: 'Thumbnail and banner creatives for YouTube pre-roll and display ads that capture attention in the first 5 seconds.' },
    { title: 'Retargeting Ad Sets', desc: 'Multi-variant ad creative sets designed for retargeting campaigns — different messages for different stages of the funnel.' },
    { title: 'Seasonal & Campaign Ads', desc: 'Time-limited campaign creatives for product launches, sales events, and seasonal promotions.' },
];

export default function AdCreativesPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Ad Creatives Pretoria',
                        description:
                            'Ad creative design services in Pretoria by 012 Agency. High-converting creatives for Google, Facebook, Instagram, LinkedIn and YouTube campaigns.',
                        url: 'https://012agency.co.za/ad-creatives-pretoria',
                        serviceType: 'Digital ad creative design',
                        category: 'Advertising design services',
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
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">Ads That Convert, Not Just Impress</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        Ad Creatives <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        High-converting digital ad creatives for Google, Facebook, Instagram, LinkedIn, and YouTube — designed to drive clicks, leads, and sales for your Pretoria business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">Get Ad Creative Quote</Link>
                        <Link href="/project-showcase-pretoria" className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300">View Our Work</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">Ad Creatives That Drive Real Results</h2>
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>In digital advertising, the creative is everything. You can have the most precisely targeted campaign in the world, but if your ad creative does not stop the scroll, communicate your value proposition clearly, and motivate the viewer to take action, your ad spend is wasted. At 012 Agency, we design ad creatives that do exactly that — they capture attention, communicate clearly, and drive the action you want, whether that is a click, a lead, a purchase, or a call.</p>
                        <p>We design ad creatives for all major digital advertising platforms, including Facebook and Instagram (Meta Ads), Google Display Network, LinkedIn, YouTube, and TikTok. Each platform has its own visual conventions, audience expectations, and technical specifications, and our designers understand these nuances. A Facebook ad that works brilliantly may not translate directly to LinkedIn, where the audience is in a professional mindset and expects a different tone and visual style.</p>
                        <p>Our ad creative process starts with understanding your campaign objectives and target audience. Are you trying to build brand awareness, generate leads, drive e-commerce sales, or retarget website visitors? Each objective calls for a different creative approach. Brand awareness ads need to be visually striking and memorable. Lead generation ads need a clear value proposition and a compelling call to action. Retargeting ads need to address the specific stage of the buyer journey the viewer is at.</p>
                        <p>We design static image ads, carousel ads, and video ad thumbnails and end cards. For static ads, we focus on a single, powerful visual with a clear headline and call to action. For carousel ads, we think about the narrative across the cards — each card should work independently but also contribute to a cohesive story. For video ads, we design the thumbnail and any static elements that appear in the ad, and can provide guidance on the video content itself.</p>
                        <p>We always design ad creatives in multiple sizes to cover all placement options on each platform. For Meta ads, this means designing for feed, stories, reels, and right column placements. For Google Display, this means providing all standard IAB ad sizes. This ensures your campaign can run across all available placements, maximising your reach and giving the algorithm more options to optimise towards.</p>
                        <p>We also design ad creative sets for A/B testing. Testing different headlines, images, calls to action, and value propositions is essential for optimising campaign performance, and we design multiple creative variants that allow you to test systematically. This data-driven approach to creative development helps you continuously improve your campaign performance over time.</p>
                        <p>Our ad creatives are designed to be consistent with your brand identity while also being optimised for the specific platform and objective. We do not just apply your logo to a generic template — we design each creative from scratch with your brand, your audience, and your campaign objective in mind.</p>
                        <p>Contact 012 Agency today to discuss your ad creative needs. Whether you need a single campaign creative or an ongoing supply of fresh ad creatives, we deliver designs that perform.</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">Ad Creative Types We Design</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">High-converting creatives for every platform and every campaign objective.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {adTypes.map((s) => (
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
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">Ready to Run Ads That Actually Convert?</h2>
                    <p className="text-neutral-400 text-lg mb-8">Get professional ad creatives designed to drive real results for your Pretoria business.</p>
                    <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105 inline-block">Start Your Ad Campaign</Link>
                    <div className="mt-10 pt-10 border-t border-white/10 text-neutral-500 text-sm">
                        <p>012 Agency — Park Lane West Building, 194 Bancor Ave, Waterkloof Glen, Pretoria, 0181</p>
                        <p className="mt-1">📞 +27 (0)62 369 3769 &nbsp;|&nbsp; ✉ info@012agency.co.za</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
