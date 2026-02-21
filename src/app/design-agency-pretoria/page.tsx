import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Design Agency Pretoria | Creative Agency | 012 Agency',
    description: '012 Agency is Pretoria\'s leading design agency. We offer branding, graphic design, digital marketing, and creative strategy for businesses across Gauteng. Contact us today.',
    keywords: [
        'design agency pretoria',
        'creative agency pretoria',
        'advertising agency pretoria',
        'branding agency pretoria',
        'creative design agency pretoria',
        'best design agency pretoria',
    ],
    alternates: {
        canonical: 'https://012agency.co.za/design-agency-pretoria',
    },
    openGraph: {
        title: 'Design Agency Pretoria | Creative Agency | 012 Agency',
        description: '012 Agency is Pretoria\'s leading design agency. We offer branding, graphic design, digital marketing, and creative strategy for businesses across Gauteng.',
        url: 'https://012agency.co.za/design-agency-pretoria',
        type: 'website',
    },
};

const capabilities = [
    { title: 'Brand Strategy', desc: 'We define your brand positioning, voice, and visual direction to ensure every touchpoint tells the same powerful story.' },
    { title: 'Graphic Design', desc: 'From logos to large-format print, our designers create visuals that communicate with clarity and impact.' },
    { title: 'Digital Marketing Design', desc: 'Social media graphics, email templates, and digital ads designed to drive engagement and conversions.' },
    { title: 'Web Design', desc: 'Clean, modern websites that look stunning and convert visitors into customers.' },
    { title: 'Motion & Video Graphics', desc: 'Animated content and video graphics that bring your brand to life across digital platforms.' },
    { title: 'Creative Consulting', desc: 'Strategic creative direction for businesses that need expert guidance on their visual communication.' },
];

export default function DesignAgencyPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Design Agency Pretoria',
                        description:
                            '012 Agency is a design agency in Pretoria offering branding, graphic design, digital marketing design and creative strategy for businesses across Gauteng.',
                        url: 'https://012agency.co.za/design-agency-pretoria',
                        serviceType: 'Design agency services',
                        category: 'Creative agency services',
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
                    style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, #FFD700 0%, transparent 55%), radial-gradient(circle at 70% 60%, #FFA500 0%, transparent 55%)' }}
                />
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">Full-Service Creative Studio</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        Design Agency <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        A creative agency built for ambitious Pretoria businesses. We combine strategy, design, and storytelling to build brands that people remember and trust.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/get-in-touch-pretoria"
                            className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105"
                        >
                            Work With Us
                        </Link>
                        <Link
                            href="/project-showcase-pretoria"
                            className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300"
                        >
                            See Our Portfolio
                        </Link>
                    </div>
                </div>
            </section>

            {/* Intro Content */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">
                        A Design Agency That Thinks Like a Business
                    </h2>
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>
                            012 Agency is not your average design agency. We are a full-service creative studio based in Pretoria that combines the strategic thinking of a business consultancy with the creative firepower of a world-class design team. Since 2013, we have helped businesses across Gauteng build brands that are not just beautiful — they are effective, memorable, and built to grow.
                        </p>
                        <p>
                            The Pretoria business landscape is competitive. Whether you are in Centurion, Hatfield, Menlyn, or the Pretoria CBD, you are surrounded by competitors fighting for the same customers. In that environment, your brand is one of your most valuable assets. A strong visual identity, consistent messaging, and professional design can be the difference between a business that thrives and one that struggles to be noticed.
                        </p>
                        <p>
                            As a design agency, we take a holistic approach to every project. We do not just make things look good — we make sure they work. Before we design anything, we ask the right questions: Who is your target audience? What do you want them to feel when they encounter your brand? What action do you want them to take? The answers to these questions drive every creative decision we make.
                        </p>
                        <p>
                            Our team is made up of experienced designers, brand strategists, and creative directors who have worked across a wide range of industries. This diversity of experience means we bring fresh perspectives to every project, while our deep understanding of the South African market ensures that our work resonates with local audiences.
                        </p>
                        <p>
                            We work with businesses at every stage of their journey. Startups come to us to build their brand from scratch — to create the logo, the colour palette, the typography, and the visual language that will define their identity for years to come. Established businesses come to us when they need a rebrand, a refresh, or a new campaign that reignites interest in what they offer. And growing businesses come to us when they need a creative partner who can scale with them.
                        </p>
                        <p>
                            Transparency and communication are at the heart of how we work. You will always know where your project stands, what is coming next, and what decisions need to be made. We believe that the best creative work happens when clients and designers work together as true partners — sharing ideas, giving honest feedback, and building something neither could have created alone.
                        </p>
                        <p>
                            Our studio is equipped with the latest design software and technology, and our team stays current with global design trends, emerging platforms, and evolving consumer behaviour. This means the work we produce for you is not just relevant today — it is built to remain effective as your business and the market evolve.
                        </p>
                        <p>
                            If you are looking for a design agency in Pretoria that will invest in understanding your business and deliver creative work that makes a real difference, we would love to hear from you. Let us start a conversation about what we can build together.
                        </p>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">Our Agency Capabilities</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">
                        Everything your brand needs under one roof — from strategy to execution.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {capabilities.map((cap) => (
                            <div
                                key={cap.title}
                                className="bg-black rounded-xl p-6 border border-[#FFD700]/20 hover:border-[#FFD700]/60 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-10 h-1 bg-[#FFD700] mb-4 rounded" />
                                <h3 className="text-xl font-syne font-bold text-white mb-3">{cap.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">{cap.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-14">Why Choose Our Agency</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: 'Strategy First', desc: 'Every design decision is grounded in business strategy and audience insight.' },
                            { title: 'Proven Track Record', desc: 'Over 500 projects completed for businesses across South Africa since 2013.' },
                            { title: 'End-to-End Service', desc: 'From initial concept to final delivery, we handle everything in-house.' },
                            { title: 'Dedicated Account Management', desc: 'A single point of contact who knows your brand and your goals.' },
                        ].map((item) => (
                            <div key={item.title} className="flex gap-4 p-6 bg-zinc-900 rounded-xl border border-[#FFD700]/10">
                                <div className="w-2 h-2 rounded-full bg-[#FFD700] mt-2 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-neutral-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border-t border-[#FFD700]/20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">Let&apos;s Build Something Great</h2>
                    <p className="text-neutral-400 text-lg mb-8">
                        Partner with Pretoria&apos;s most trusted design agency and give your brand the creative edge it deserves.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">
                            Get in Touch
                        </Link>
                        <Link href="/digital-marketing-services-pretoria" className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:border-[#FFD700] hover:text-[#FFD700] transition-all duration-300">
                            Our Services
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
