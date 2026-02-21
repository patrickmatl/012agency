import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Logo Design Pretoria | Professional Logo Designer | 012 Agency',
    description: 'Professional logo design in Pretoria by 012 Agency. We create unique, memorable logos that capture your brand\'s identity. Packages from R6,683. Get your free consultation today.',
    keywords: [
        'logo design pretoria',
        'logo designer pretoria',
        'professional logo design pretoria',
        'custom logo design pretoria',
        'logo design company pretoria',
        'affordable logo design pretoria',
    ],
    alternates: {
        canonical: 'https://012agency.co.za/logo-design-pretoria',
    },
    openGraph: {
        title: 'Logo Design Pretoria | Professional Logo Designer | 012 Agency',
        description: 'Professional logo design in Pretoria by 012 Agency. We create unique, memorable logos that capture your brand\'s identity.',
        url: 'https://012agency.co.za/logo-design-pretoria',
        type: 'website',
    },
};

const logoTypes = [
    { title: 'Wordmark Logos', desc: 'Typography-based logos where your business name becomes the visual identity — think Google, Coca-Cola.' },
    { title: 'Lettermark Logos', desc: 'Monogram-style logos using initials — perfect for businesses with longer names that need a compact mark.' },
    { title: 'Pictorial Logos', desc: 'Icon-based logos that use a graphic symbol to represent your brand — think Apple, Twitter.' },
    { title: 'Abstract Logos', desc: 'Geometric or abstract shapes that convey your brand\'s essence without a literal image.' },
    { title: 'Combination Marks', desc: 'A logo that combines a symbol with your business name — the most versatile and popular choice.' },
    { title: 'Emblem Logos', desc: 'Badge or seal-style logos that convey heritage, authority, and trust — ideal for schools, government, and premium brands.' },
];

export default function LogoDesignPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Logo Design Pretoria',
                        description:
                            'Logo design services in Pretoria by 012 Agency. Unique, memorable logos that capture your brand identity, with clear packages and transparent pricing.',
                        url: 'https://012agency.co.za/logo-design-pretoria',
                        serviceType: 'Logo design',
                        category: 'Branding services',
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
                    style={{ backgroundImage: 'radial-gradient(circle at 20% 60%, #FFD700 0%, transparent 50%), radial-gradient(circle at 80% 40%, #FFA500 0%, transparent 50%)' }}
                />
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">Make a Lasting First Impression</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        Logo Design <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Your logo is the face of your business. We design logos that are distinctive, versatile, and built to represent your brand for years to come.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">
                            Get a Logo Quote
                        </Link>
                        <Link href="/branding-solutions-pretoria" className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300">
                            View Packages
                        </Link>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">
                        Logo Design That Works as Hard as You Do
                    </h2>
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>
                            Your logo is often the very first thing a potential customer sees. It appears on your business card, your website, your signage, your social media profiles, and every piece of marketing material you produce. In a fraction of a second, it communicates who you are, what you stand for, and whether you are a business worth trusting. That is an enormous amount of pressure for a single graphic — and it is exactly why professional logo design matters so much.
                        </p>
                        <p>
                            At 012 Agency, we have been designing logos for Pretoria businesses since 2013. In that time, we have developed a deep understanding of what makes a logo truly effective. It is not just about making something that looks attractive — it is about creating a mark that is distinctive enough to stand out in a crowded market, simple enough to be instantly recognisable, and versatile enough to work across every medium from a tiny social media profile picture to a large building sign.
                        </p>
                        <p>
                            Our logo design process begins with discovery. We take the time to understand your business, your industry, your target audience, and your competitors. We look at what is already out there in your market and identify opportunities to create something that positions you differently. This research phase is what separates a logo that is merely pretty from one that is strategically powerful.
                        </p>
                        <p>
                            From there, our designers develop multiple creative concepts — each exploring a different direction, style, or approach. We present these concepts with clear rationale, explaining the thinking behind each one. This gives you genuine choice and ensures that the final direction is one you feel confident about, not just one that was handed to you.
                        </p>
                        <p>
                            Once you have chosen a direction, we refine it through a structured revision process. Your feedback is incorporated at every stage, and we continue to develop the design until it is exactly right. We do not rush this process — a logo is a long-term investment, and we want to make sure it is one you will be proud of for years to come.
                        </p>
                        <p>
                            Every logo we design is delivered as a complete package. You receive your logo in all the file formats you will ever need — vector files for print and large-format use, PNG files with transparent backgrounds for digital use, and optimised versions for social media. We also provide clear guidelines on how to use your logo correctly, including approved colour variations, minimum size requirements, and spacing rules.
                        </p>
                        <p>
                            Many of our clients choose to extend their logo design into a full brand identity — adding a colour palette, typography system, and supporting graphic elements that create a cohesive visual language across all their communications. This is where a logo truly comes to life, and we offer comprehensive brand identity packages to help you get there.
                        </p>
                        <p>
                            Whether you are launching a new business, rebranding an existing one, or simply updating a logo that has served its time, 012 Agency is the logo design partner Pretoria businesses trust. Let us create a logo that you will be proud to put your name on.
                        </p>
                    </div>
                </div>
            </section>

            {/* Logo Types */}
            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">Types of Logos We Design</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">
                        We design all styles of logos — and we help you choose the right one for your brand.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {logoTypes.map((type) => (
                            <div key={type.title} className="bg-black rounded-xl p-6 border border-[#FFD700]/20 hover:border-[#FFD700]/60 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-10 h-1 bg-[#FFD700] mb-4 rounded" />
                                <h3 className="text-xl font-syne font-bold text-white mb-3">{type.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Teaser */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-6">Transparent Logo Design Pricing</h2>
                    <p className="text-neutral-300 text-lg mb-10 leading-relaxed">
                        Our logo design is included in our brand identity packages, starting from <span className="text-[#FFD700] font-bold">R6,683</span>. Every package includes multiple concepts, revision rounds, and all final file formats. No hidden costs, no surprises.
                    </p>
                    <Link href="/branding-solutions-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105 inline-block">
                        View All Packages
                    </Link>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border-t border-[#FFD700]/20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">Ready for a Logo You Love?</h2>
                    <p className="text-neutral-400 text-lg mb-8">
                        Contact us today for a free consultation and let&apos;s design a logo that represents your business perfectly.
                    </p>
                    <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105 inline-block">
                        Start Your Logo Project
                    </Link>
                    <div className="mt-10 pt-10 border-t border-white/10 text-neutral-500 text-sm">
                        <p>012 Agency — Park Lane West Building, 194 Bancor Ave, Waterkloof Glen, Pretoria, 0181</p>
                        <p className="mt-1">📞 +27 (0)62 369 3789 &nbsp;|&nbsp; ✉ info@012agency.co.za</p>
                    </div>
                </div>
            </section>

        </main>
    );
}
