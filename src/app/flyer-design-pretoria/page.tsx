import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Flyer Design Pretoria | Professional Flyer & Pamphlet Design | 012 Agency',
    description: 'Professional flyer and pamphlet design in Pretoria by 012 Agency. Eye-catching print designs that get noticed and drive results. Fast turnaround, print-ready files. Get a quote today.',
    keywords: [
        'flyer design pretoria',
        'pamphlet design pretoria',
        'leaflet design pretoria',
        'print design pretoria',
        'brochure design pretoria',
        'flyer printing pretoria',
    ],
    alternates: {
        canonical: 'https://012agency.co.za/flyer-design-pretoria',
    },
    openGraph: {
        title: 'Flyer Design Pretoria | Professional Flyer & Pamphlet Design | 012 Agency',
        description: 'Professional flyer and pamphlet design in Pretoria by 012 Agency. Eye-catching print designs that get noticed and drive results.',
        url: 'https://012agency.co.za/flyer-design-pretoria',
        type: 'website',
    },
};

const printServices = [
    { title: 'A5 & A4 Flyers', desc: 'The most popular format for promotions, events, and special offers — designed to grab attention instantly.' },
    { title: 'Pamphlets & Leaflets', desc: 'Folded formats that allow for more information while remaining easy to distribute and read.' },
    { title: 'Brochures', desc: 'Multi-page marketing collateral that tells your full brand story with depth and visual impact.' },
    { title: 'Posters & Banners', desc: 'Large-format designs for events, in-store promotions, and outdoor advertising.' },
    { title: 'Event Programmes', desc: 'Professionally designed programmes for conferences, galas, sporting events, and ceremonies.' },
    { title: 'Menu Design', desc: 'Restaurant and café menus that showcase your offerings with appetite-inducing design.' },
];

export default function FlyerDesignPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Flyer Design Pretoria',
                        description:
                            'Flyer and pamphlet design services in Pretoria by 012 Agency. Eye-catching print designs that get noticed and drive results.',
                        url: 'https://012agency.co.za/flyer-design-pretoria',
                        serviceType: 'Flyer and pamphlet design',
                        category: 'Print design services',
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
                    style={{ backgroundImage: 'radial-gradient(circle at 25% 45%, #FFD700 0%, transparent 50%), radial-gradient(circle at 75% 55%, #FFA500 0%, transparent 50%)' }}
                />
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">Print Design That Gets Noticed</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        Flyer Design <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Eye-catching flyers, pamphlets, and print materials that stop people in their tracks and get your message across — fast, clear, and unforgettable.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">
                            Get a Flyer Quote
                        </Link>
                        <Link href="/project-showcase-pretoria" className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300">
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">
                        Flyer Design That Drives Real Results
                    </h2>
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>
                            In an age of digital overload, a well-designed flyer still cuts through the noise. Physical marketing materials have a tangibility and permanence that digital ads simply cannot replicate. When someone holds your flyer in their hands, they are giving you their undivided attention — even if only for a few seconds. Those seconds matter enormously, and the quality of your design determines whether they lead to action or the bin.
                        </p>
                        <p>
                            At 012 Agency, we have been designing flyers, pamphlets, and print materials for Pretoria businesses since 2013. In that time, we have developed a deep understanding of what makes print design work. It is not just about making something that looks attractive — it is about creating a piece that communicates your message clearly, reflects your brand professionally, and motivates the reader to take the next step.
                        </p>
                        <p>
                            Every flyer we design starts with a clear brief. We want to understand what you are promoting, who your target audience is, what action you want them to take, and where the flyer will be distributed. This information shapes every design decision — from the hierarchy of information to the choice of colours, imagery, and typography. A flyer for a nightclub event requires a completely different approach to one for a school fundraiser or a property development, and we have the experience to get it right every time.
                        </p>
                        <p>
                            Our designers are skilled at creating visual hierarchy — the art of organising information so that the most important elements are seen first and the reader is guided naturally through the content. In flyer design, this is critical. You have a very short window to capture attention and communicate your key message. We ensure that your headline, offer, and call to action are impossible to miss, while supporting information is presented clearly and accessibly.
                        </p>
                        <p>
                            Brand consistency is something we take very seriously in all our print work. Your flyer should look like it belongs to the same family as your website, your business cards, and your social media profiles. When your marketing materials are visually consistent, they reinforce your brand identity and build recognition over time. We always work within your existing brand guidelines, or we can help you establish them if you do not yet have a defined visual identity.
                        </p>
                        <p>
                            Technical quality is another area where we set ourselves apart. Every print file we produce is set up to professional print specifications — correct colour mode (CMYK), appropriate resolution (300dpi minimum), proper bleed and crop marks, and embedded fonts. This means that when you take our files to any printer in Pretoria or anywhere in South Africa, you get exactly what you see on screen. No colour surprises, no blurry images, no text cutting off at the edges.
                        </p>
                        <p>
                            We also offer digital versions of all our print designs, optimised for sharing on WhatsApp, email, and social media. In today&apos;s market, a flyer often needs to work in both the physical and digital worlds, and we ensure that yours performs beautifully in both. We deliver all files in the formats you need, clearly labelled and ready to use.
                        </p>
                        <p>
                            Whether you need a single flyer for a one-off promotion or a suite of print materials for an ongoing campaign, 012 Agency delivers professional flyer design in Pretoria with fast turnaround times and competitive pricing. Get in touch today and let us create something that gets your business noticed.
                        </p>
                    </div>
                </div>
            </section>

            {/* Print Services */}
            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">Print Design Services</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">
                        From A5 flyers to full brochures — we design all your print marketing materials.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {printServices.map((service) => (
                            <div key={service.title} className="bg-black rounded-xl p-6 border border-[#FFD700]/20 hover:border-[#FFD700]/60 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-10 h-1 bg-[#FFD700] mb-4 rounded" />
                                <h3 className="text-xl font-syne font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What You Get */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-14">Every Flyer Design Includes</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            'Professional design by an experienced graphic designer',
                            'Multiple design concepts to choose from',
                            'Revision rounds until you are 100% satisfied',
                            'Print-ready files (CMYK, 300dpi, with bleed)',
                            'Digital versions optimised for WhatsApp and social media',
                            'All source files included in premium packages',
                            'Fast turnaround — most projects completed in 2–3 business days',
                            'Consistent with your existing brand identity',
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-3 p-4 bg-zinc-900 rounded-lg border border-[#FFD700]/10">
                                <span className="text-[#FFD700] text-xl">✓</span>
                                <span className="text-neutral-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border-t border-[#FFD700]/20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">Let&apos;s Design Your Next Flyer</h2>
                    <p className="text-neutral-400 text-lg mb-8">
                        Contact us today for a free quote on professional flyer and print design in Pretoria.
                    </p>
                    <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105 inline-block">
                        Get Your Free Quote
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
