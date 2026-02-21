import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Packaging Design Pretoria | Product Packaging Design | 012 Agency',
    description: 'Professional product packaging design in Pretoria by 012 Agency. We design packaging that stands out on the shelf, communicates your brand, and drives purchase decisions. Get a quote today.',
    keywords: [
        'packaging design pretoria',
        'product packaging design pretoria',
        'label design pretoria',
        'box design pretoria',
        'packaging company pretoria',
        'custom packaging design pretoria',
    ],
    alternates: { canonical: 'https://012agency.co.za/packaging-design-pretoria' },
    openGraph: {
        title: 'Packaging Design Pretoria | 012 Agency',
        description: 'Professional product packaging design in Pretoria. Packaging that stands out on the shelf and drives purchase decisions.',
        url: 'https://012agency.co.za/packaging-design-pretoria',
        type: 'website',
    },
};

const packagingTypes = [
    { title: 'Product Labels', desc: 'Eye-catching labels for bottles, jars, cans, and containers that communicate your brand and product information clearly.' },
    { title: 'Box & Carton Design', desc: 'Retail packaging boxes and cartons designed to stand out on the shelf and protect your product.' },
    { title: 'Bag & Pouch Design', desc: 'Flexible packaging for food, cosmetics, and consumer goods that balances visual appeal with practical functionality.' },
    { title: 'Gift & Luxury Packaging', desc: 'Premium packaging solutions for gift sets, luxury products, and special editions that justify a premium price.' },
    { title: 'Food & Beverage Packaging', desc: 'Compliant, appetising packaging for food and beverage products that meets regulatory requirements and drives sales.' },
    { title: 'E-Commerce Packaging', desc: 'Branded packaging solutions for online retailers that create a memorable unboxing experience.' },
];

export default function PackagingDesignPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Packaging Design Pretoria',
                        description:
                            'Product packaging design services in Pretoria by 012 Agency. Labels, boxes and retail packaging that stand out on the shelf and drive purchases.',
                        url: 'https://012agency.co.za/packaging-design-pretoria',
                        serviceType: 'Product packaging design',
                        category: 'Packaging design services',
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
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 55%, #FFD700 0%, transparent 50%), radial-gradient(circle at 70% 45%, #FFA500 0%, transparent 50%)' }} />
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">Design That Sells From the Shelf</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        Packaging Design <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Your packaging is your silent salesperson. We design product packaging that communicates your brand values, stands out on the shelf, and makes customers choose you over the competition.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">Get a Packaging Quote</Link>
                        <Link href="/branding-solutions-pretoria" className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300">View Brand Packages</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">Packaging That Makes Products Irresistible</h2>
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>Studies consistently show that packaging design is one of the most powerful influences on purchase decisions. Consumers make buying choices in seconds, often based entirely on how a product looks on the shelf. In a retail environment where your product sits alongside dozens of competitors, your packaging is your most important marketing tool — and it needs to work hard to earn its place in a shopper&apos;s basket.</p>
                        <p>At 012 Agency, we design packaging for Pretoria businesses that is both beautiful and strategic. We understand that great packaging design is not just about aesthetics — it is about communicating the right messages to the right audience at the right moment. Before we design anything, we research your target consumer, your competitive landscape, and the retail environment where your product will be sold. This insight drives every design decision we make.</p>
                        <p>Our packaging design process begins with a thorough brief that covers your product, your brand, your target consumer, your price point, and your distribution channels. A premium product sold in a high-end retailer requires a completely different packaging approach to an everyday product sold in a supermarket. We design for the specific context in which your product will be encountered, ensuring that the packaging communicates the right values and creates the right impression.</p>
                        <p>Structural design is an important consideration in packaging. The shape, size, and construction of your packaging affects not just how it looks but how it functions — how it protects the product, how it is displayed on the shelf, how it is opened by the consumer, and how it is disposed of afterwards. We work with structural packaging specialists when needed to ensure that our designs are not just visually compelling but practically sound.</p>
                        <p>Label design is one of the most common packaging projects we work on. Whether you are producing a new product range or refreshing an existing one, a professionally designed label can transform the perceived value of your product. We design labels for bottles, jars, cans, tubes, and all other container types, ensuring that the design works within the technical constraints of the label format while maximising visual impact.</p>
                        <p>Regulatory compliance is a critical consideration in food, beverage, cosmetic, and pharmaceutical packaging. These categories have specific requirements for nutritional information, ingredient lists, warnings, and other mandatory content. We are familiar with South African packaging regulations and ensure that all mandatory information is included and presented correctly in our designs, without compromising the overall visual appeal of the packaging.</p>
                        <p>We deliver all packaging designs as print-ready files set up to the specifications of your chosen packaging manufacturer or printer. We include dielines, colour profiles, and all technical specifications needed for accurate production. We can also manage the print production process on your behalf, liaising with manufacturers to ensure that the finished packaging matches the design exactly.</p>
                        <p>Whether you are launching a new product, refreshing an existing range, or creating premium gift packaging for a special occasion, 012 Agency delivers packaging design in Pretoria that makes your products impossible to ignore. Contact us today to discuss your packaging project.</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">Packaging We Design</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">From labels to luxury boxes — every type of packaging your product needs.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {packagingTypes.map((s) => (
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
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">Let&apos;s Design Packaging That Sells</h2>
                    <p className="text-neutral-400 text-lg mb-8">Contact Pretoria&apos;s packaging design experts and give your product the shelf presence it deserves.</p>
                    <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105 inline-block">Start Your Packaging Project</Link>
                    <div className="mt-10 pt-10 border-t border-white/10 text-neutral-500 text-sm">
                        <p>012 Agency — Park Lane West Building, 194 Bancor Ave, Waterkloof Glen, Pretoria, 0181</p>
                        <p className="mt-1">📞 +27 (0)62 369 3789 &nbsp;|&nbsp; ✉ info@012agency.co.za</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
