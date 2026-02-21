import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Branding Agency Pretoria | Brand Identity Design | 012 Agency',
    description: '012 Agency is Pretoria\'s leading branding agency. We build powerful brand identities that connect with your audience and drive business growth. Get a free brand consultation.',
    keywords: [
        'branding agency pretoria',
        'brand identity pretoria',
        'branding company pretoria',
        'brand design pretoria',
        'corporate branding pretoria',
        'brand strategy pretoria',
    ],
    alternates: {
        canonical: 'https://012agency.co.za/branding-agency-pretoria',
    },
    openGraph: {
        title: 'Branding Agency Pretoria | Brand Identity Design | 012 Agency',
        description: '012 Agency is Pretoria\'s leading branding agency. We build powerful brand identities that connect with your audience and drive business growth.',
        url: 'https://012agency.co.za/branding-agency-pretoria',
        type: 'website',
    },
};

const brandingServices = [
    { title: 'Brand Strategy', desc: 'Defining your brand positioning, purpose, values, and personality to guide every creative decision.' },
    { title: 'Logo & Visual Identity', desc: 'A complete visual identity system — logo, colours, typography, and supporting graphic elements.' },
    { title: 'Brand Guidelines', desc: 'Comprehensive documentation that ensures your brand is applied consistently across every touchpoint.' },
    { title: 'Corporate Stationery', desc: 'Business cards, letterheads, email signatures, and presentation templates that project professionalism.' },
    { title: 'Brand Messaging', desc: 'Taglines, brand voice guidelines, and key messaging that communicate your value clearly and compellingly.' },
    { title: 'Brand Refresh & Rebrand', desc: 'Evolving an existing brand to stay relevant, modern, and aligned with your current business direction.' },
];

export default function BrandingAgencyPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Branding Agency Pretoria',
                        description:
                            "Branding and brand identity services in Pretoria by 012 Agency. Strategy, logo design, guidelines and full visual systems that grow your business.",
                        url: 'https://012agency.co.za/branding-agency-pretoria',
                        serviceType: 'Branding and brand identity',
                        category: 'Branding agency services',
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
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle at 35% 55%, #FFD700 0%, transparent 50%), radial-gradient(circle at 65% 45%, #FFA500 0%, transparent 50%)' }}
                />
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">Build a Brand That Means Something</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        Branding Agency <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        We build brands that go beyond logos — creating complete visual identities and brand systems that connect emotionally with your audience and drive real business results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">
                            Start Your Brand Journey
                        </Link>
                        <Link href="/branding-solutions-pretoria" className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300">
                            View Brand Packages
                        </Link>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">
                        Branding That Goes Beyond the Logo
                    </h2>
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>
                            A brand is not a logo. A brand is the total experience that a person has with your business — every interaction, every impression, every feeling. It is the promise you make to your customers and the story you tell about who you are and why you exist. At 012 Agency, we are a branding agency that understands this distinction deeply, and it shapes everything we do for our clients in Pretoria and across South Africa.
                        </p>
                        <p>
                            Since 2013, we have helped businesses of all sizes build brands that are not just visually impressive but strategically sound. We start every branding project with a discovery phase that goes far deeper than most agencies. We want to understand your business model, your competitive landscape, your target customers, and the unique value you bring to the market. This foundation is what makes the difference between a brand that looks good and a brand that actually works.
                        </p>
                        <p>
                            Strong branding is one of the most powerful investments a business can make. When your brand is clear, consistent, and compelling, it builds trust with potential customers before they have even spoken to you. It makes your marketing more effective because every piece of communication reinforces the same message. It attracts better clients, commands higher prices, and creates loyalty that keeps customers coming back. In Pretoria&apos;s competitive market, a strong brand is not a luxury — it is a necessity.
                        </p>
                        <p>
                            Our branding process is thorough and collaborative. We begin with a brand strategy workshop where we define your brand&apos;s purpose, positioning, personality, and values. From this strategic foundation, we develop your visual identity — the logo, colour palette, typography, and graphic elements that will represent your brand across every touchpoint. We then create comprehensive brand guidelines that ensure your team and any future designers can apply your brand consistently and correctly.
                        </p>
                        <p>
                            We work across all industries — from professional services and healthcare to retail, hospitality, construction, and technology. This breadth of experience means we understand how branding works differently in different contexts, and we bring that knowledge to every project we take on. A law firm needs a brand that communicates authority and trust. A restaurant needs one that evokes appetite and atmosphere. A tech startup needs one that signals innovation and reliability. We know how to create each of these.
                        </p>
                        <p>
                            Rebranding is another area where we have extensive experience. Many businesses come to us with an existing brand that no longer reflects who they are or where they are going. Perhaps the business has grown and evolved. Perhaps the market has changed. Perhaps the original brand was created without strategic thinking and has never quite felt right. Whatever the reason, we approach rebrands with the same rigour and care as new brand builds — ensuring that the new identity honours what has worked while creating something that is fit for the future.
                        </p>
                        <p>
                            Our clients often tell us that working with 012 Agency changed the way they think about their business. When you go through a proper branding process, you gain clarity about who you are, who you serve, and what makes you different. That clarity is valuable far beyond the design deliverables — it informs your sales conversations, your hiring decisions, your product development, and your marketing strategy.
                        </p>
                        <p>
                            If you are ready to invest in a brand that truly represents the quality and ambition of your business, 012 Agency is the branding agency in Pretoria you have been looking for. Let us help you build something you are genuinely proud of.
                        </p>
                        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Why Local Branding Matters</h3>
                        <p>
                            Branding in Pretoria requires a nuanced understanding of the local market. What works in Cape Town or Johannesburg might not resonate here. We understand the specific cultural and business landscape of South Africa's capital city. Whether you're targeting government sectors, corporate entities in Menlyn, or the vibrant consumer markets of the townships, we tailor your brand's voice and visual identity to speak directly to the people who matter most to your business.
                        </p>
                        <p>
                            We don't just create pretty pictures; we create business assets. A strong brand identity equates to financial value. It allows you to shorten sales cycles, increase customer retention, and attract better talent. In an era where consumers are bombarded with thousands of marketing messages daily, a clear, authentic brand is the only way to cut through the noise and build lasting market share.
                        </p>
                        <p>
                            Our team of senior designers and strategists works collaboratively with you. We don't believe in the "big reveal" where we disappear for weeks and come back with something you've never seen. We involve you at key stages, ensuring the final output is not only strategically sound but also something you personally connect with. After all, you are the one who will be living with this brand every day.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">Our Branding Services</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">
                        A complete suite of branding services to build, refresh, or evolve your brand.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {brandingServices.map((service) => (
                            <div key={service.title} className="bg-black rounded-xl p-6 border border-[#FFD700]/20 hover:border-[#FFD700]/60 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-10 h-1 bg-[#FFD700] mb-4 rounded" />
                                <h3 className="text-xl font-syne font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Pillars */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-14">The Pillars of a Strong Brand</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {[
                            { icon: '🎯', title: 'Clarity', desc: 'Your brand communicates exactly who you are and what you offer — no confusion, no ambiguity.' },
                            { icon: '🔄', title: 'Consistency', desc: 'Every touchpoint reinforces the same message, building recognition and trust over time.' },
                            { icon: '💡', title: 'Authenticity', desc: 'Your brand reflects the genuine values and personality of your business — people can feel the difference.' },
                        ].map((pillar) => (
                            <div key={pillar.title} className="p-8 bg-zinc-900 rounded-xl border border-[#FFD700]/10">
                                <p className="text-4xl mb-4">{pillar.icon}</p>
                                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border-t border-[#FFD700]/20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">Your Brand Deserves Better</h2>
                    <p className="text-neutral-400 text-lg mb-8">
                        Work with Pretoria&apos;s most strategic branding agency and build a brand that drives real business growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">
                            Book a Brand Consultation
                        </Link>
                        <Link href="/branding-solutions-pretoria" className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:border-[#FFD700] hover:text-[#FFD700] transition-all duration-300">
                            See Pricing
                        </Link>
                    </div>
                    <div className="mt-10 pt-10 border-t border-white/10 text-neutral-500 text-sm">
                        <p>012 Agency — Park Lane West Building, 194 Bancor Ave, Waterkloof Glen, Pretoria, 0181</p>
                        <p className="mt-1">📞 +27 (0)62 369 3789 &nbsp;|&nbsp; ✉ info@012agency.co.za</p>
                    </div>
                </div>
            </section>

        </main>
    );
}
