import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Graphic Design Company Pretoria | 012 Agency',
    description: 'Looking for a trusted graphic design company in Pretoria? 012 Agency delivers world-class graphic design, branding, and visual communication for businesses across Gauteng. Get a quote today.',
    keywords: [
        'graphic design company pretoria',
        'graphic design pretoria',
        'graphic designers pretoria',
        'professional graphic design pretoria',
        'graphic design services pretoria',
        'design company pretoria',
    ],
    alternates: {
        canonical: 'https://012agency.co.za/graphic-design-company-pretoria',
    },
    openGraph: {
        title: 'Graphic Design Company Pretoria | 012 Agency',
        description: 'Looking for a trusted graphic design company in Pretoria? 012 Agency delivers world-class graphic design, branding, and visual communication for businesses across Gauteng.',
        url: 'https://012agency.co.za/graphic-design-company-pretoria',
        type: 'website',
    },
};

const services = [
    { title: 'Brand Identity Design', desc: 'Logos, colour palettes, and brand guidelines that make your business unforgettable.' },
    { title: 'Print & Packaging Design', desc: 'Brochures, flyers, business cards, and packaging that command attention on the shelf.' },
    { title: 'Digital & Social Media Design', desc: 'Scroll-stopping visuals for Instagram, Facebook, LinkedIn, and beyond.' },
    { title: 'Corporate Stationery', desc: 'Letterheads, email signatures, and presentation templates that project professionalism.' },
    { title: 'Signage & Large Format', desc: 'Banners, billboards, vehicle wraps, and office signage that turn heads.' },
    { title: 'Annual Reports & Publications', desc: 'Beautifully designed reports and publications that communicate your story with authority.' },
];

const stats = [
    { value: '10+', label: 'Years of Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '200+', label: 'Happy Clients' },
    { value: '100%', label: 'Passion for Design' },
];

export default function GraphicDesignCompanyPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Graphic Design Company Pretoria',
                        description:
                            'Professional graphic design services in Pretoria by 012 Agency. Branding, print, digital and visual communication for Gauteng businesses.',
                        url: 'https://012agency.co.za/graphic-design-company-pretoria',
                        serviceType: 'Graphic design',
                        category: 'Graphic design services',
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
                    style={{ backgroundImage: 'radial-gradient(circle at 25% 50%, #FFD700 0%, transparent 50%), radial-gradient(circle at 75% 50%, #FFA500 0%, transparent 50%)' }}
                />
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">Pretoria&apos;s Premier Creative Studio</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        Graphic Design Company <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        We craft visual identities, marketing materials, and brand experiences that help Pretoria businesses stand out, grow, and be remembered.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/get-in-touch-pretoria"
                            className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105"
                        >
                            Get a Free Quote
                        </Link>
                        <Link
                            href="/project-showcase-pretoria"
                            className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300"
                        >
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-zinc-900 border-y border-[#FFD700]/20 py-10">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-4xl font-syne font-bold text-[#FFD700]">{stat.value}</p>
                            <p className="text-neutral-400 text-sm mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">
                        Why Pretoria Businesses Choose 012 Agency
                    </h2>

                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>
                            When Pretoria businesses need a graphic design company they can trust, they turn to 012 Agency. Since 2013, we have been building brands, designing marketing materials, and creating visual experiences that help companies across Gauteng compete at the highest level. We are not just designers — we are strategic creative partners who understand that great design is one of the most powerful business tools available.
                        </p>
                        <p>
                            What sets us apart from other graphic design companies in Pretoria is our commitment to understanding your business before we ever open a design file. Every project begins with a deep conversation about your goals, your audience, and the message you want to send. This strategic foundation ensures that everything we create — from a simple business card to a full brand identity — is purposeful, consistent, and effective.
                        </p>
                        <p>
                            Our team brings together expertise in brand identity, print design, digital graphics, packaging, signage, and corporate communications. Whether you are a startup launching your first brand or an established company looking to refresh your visual identity, we have the skills, experience, and creative vision to deliver results that exceed your expectations.
                        </p>
                        <p>
                            We believe that professional graphic design should be accessible to businesses of all sizes. That is why we offer flexible packages and transparent pricing, so you always know exactly what you are getting and what it will cost. No hidden fees, no vague deliverables — just exceptional design work delivered on time and within budget.
                        </p>
                        <p>
                            Pretoria is a city of ambition, innovation, and growth. The businesses here deserve design that reflects that energy. At 012 Agency, we pour that same ambition into every project we take on. Our portfolio spans industries from construction and hospitality to technology, healthcare, and retail — giving us a broad perspective that we bring to every new brief.
                        </p>
                        <p>
                            Our process is collaborative and transparent. Once we understand your brief, we develop multiple creative concepts for you to review. Your feedback shapes the direction, and we refine until the design is exactly right. We do not believe in a one-size-fits-all approach — every brand is unique, and your design should be too.
                        </p>
                        <p>
                            Beyond the visual output, we also ensure that every design we create is technically correct and ready for use across all platforms. Print files are set up to professional print specifications. Digital assets are optimised for web and social media. Brand guidelines are documented so your team can maintain consistency long after the project is complete.
                        </p>
                        <p>
                            If you are looking for a graphic design company in Pretoria that combines creative excellence with strategic thinking and reliable delivery, 012 Agency is the partner you have been searching for. Let us show you what great design can do for your business.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">Our Graphic Design Services</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">
                        From concept to final file, we handle every aspect of your visual communication needs.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => (
                            <div
                                key={service.title}
                                className="bg-black rounded-xl p-6 border border-[#FFD700]/20 hover:border-[#FFD700]/60 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-10 h-1 bg-[#FFD700] mb-4 rounded" />
                                <h3 className="text-xl font-syne font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-14">Our Design Process</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Discovery', desc: 'We learn about your business, goals, and target audience.' },
                            { step: '02', title: 'Concept', desc: 'We develop multiple creative directions for your review.' },
                            { step: '03', title: 'Refinement', desc: 'Your feedback shapes the design until it is perfect.' },
                            { step: '04', title: 'Delivery', desc: 'Final files delivered in all formats you need, ready to use.' },
                        ].map((item) => (
                            <div key={item.step} className="text-center">
                                <p className="text-5xl font-syne font-bold text-[#FFD700]/30 mb-3">{item.step}</p>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border-t border-[#FFD700]/20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">
                        Ready to Elevate Your Brand?
                    </h2>
                    <p className="text-neutral-400 text-lg mb-8">
                        Contact Pretoria&apos;s most trusted graphic design company today and let&apos;s create something extraordinary together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/get-in-touch-pretoria"
                            className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105"
                        >
                            Start Your Project
                        </Link>
                        <Link
                            href="/branding-solutions-pretoria"
                            className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:border-[#FFD700] hover:text-[#FFD700] transition-all duration-300"
                        >
                            View Packages
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
