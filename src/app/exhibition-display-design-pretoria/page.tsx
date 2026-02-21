import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Exhibition Display Design Pretoria | Trade Show & Exhibition Design | 012 Agency',
    description: 'Professional exhibition and trade show display design in Pretoria by 012 Agency. Eye-catching exhibition stands, banners, and display graphics that attract visitors and generate leads. Get a quote.',
    keywords: [
        'exhibition design pretoria',
        'exhibition display pretoria',
        'trade show design pretoria',
        'exhibition stand design pretoria',
        'display design pretoria',
        'exhibition graphics pretoria',
    ],
    alternates: { canonical: 'https://012agency.co.za/exhibition-display-design-pretoria' },
    openGraph: {
        title: 'Exhibition Display Design Pretoria | 012 Agency',
        description: 'Professional exhibition and trade show display design in Pretoria. Eye-catching stands and graphics that attract visitors and generate leads.',
        url: 'https://012agency.co.za/exhibition-display-design-pretoria',
        type: 'website',
    },
};

const exhibitionServices = [
    { title: 'Exhibition Stand Design', desc: 'Complete exhibition stand concepts and graphic design for modular, custom, and shell scheme stands.' },
    { title: 'Roller Banner Design', desc: 'Portable, impactful roller banners and pull-up displays for exhibitions, events, and office use.' },
    { title: 'Backdrop & Wall Graphics', desc: 'Large-format backdrop designs and wall graphics that create a powerful visual presence at any event.' },
    { title: 'Promotional Materials', desc: 'Coordinated brochures, flyers, business cards, and giveaway items designed to match your exhibition stand.' },
    { title: 'Digital Display Content', desc: 'Animated content and presentations for digital screens and video walls at your exhibition stand.' },
    { title: 'Event Signage', desc: 'Directional signage, entrance arches, and event branding that creates a cohesive event experience.' },
];

export default function ExhibitionDisplayDesignPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Exhibition Display Design Pretoria',
                        description:
                            'Exhibition and trade show display design services in Pretoria by 012 Agency. Stands, banners and graphics that attract visitors and generate leads.',
                        url: 'https://012agency.co.za/exhibition-display-design-pretoria',
                        serviceType: 'Exhibition display design',
                        category: 'Exhibition and trade show design services',
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
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 35% 50%, #FFD700 0%, transparent 50%), radial-gradient(circle at 65% 50%, #FFA500 0%, transparent 50%)' }} />
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">Stand Out at Every Exhibition</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        Exhibition Display Design <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        We design exhibition stands and display graphics that stop visitors in their tracks, communicate your brand powerfully, and generate the leads your business needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">Get an Exhibition Quote</Link>
                        <Link href="/project-showcase-pretoria" className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300">View Our Work</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">Exhibition Design That Generates Business</h2>
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>Exhibitions and trade shows represent a significant investment for any business. The cost of floor space, stand construction, travel, accommodation, and staff time adds up quickly — which makes it all the more important that your exhibition display is designed to maximise the return on that investment. A poorly designed stand that fails to attract visitors or communicate your offer clearly is money wasted. A well-designed one can generate leads, build relationships, and create business opportunities that far exceed the cost of participation.</p>
                        <p>At 012 Agency, we design exhibition displays for Pretoria businesses that are visually commanding, strategically conceived, and practically effective. We understand that an exhibition stand needs to work hard in a very specific environment — competing with dozens of other stands for the attention of visitors who are walking past quickly and making split-second decisions about where to stop. Our designs are built to win those decisions.</p>
                        <p>The most important principle in exhibition design is clarity. Visitors approaching your stand need to understand immediately who you are and what you offer. If they have to stop and read a paragraph of text to figure it out, you have already lost most of them. We design exhibition graphics that communicate your core message in seconds — using bold headlines, striking visuals, and clear brand identity to create an instant impression that draws people in.</p>
                        <p>We design for all types of exhibition formats — from small shell scheme stands at local trade shows to large custom-built stands at major national exhibitions. Whatever your budget and space allocation, we create a design that makes the most of what you have. We work within the technical constraints of your chosen stand system, ensuring that all graphics are produced to the correct specifications for seamless installation.</p>
                        <p>Consistency between your exhibition stand and your other marketing materials is something we take very seriously. Your stand should look like it belongs to the same brand as your website, your brochures, and your business cards. We always design exhibition graphics within your existing brand guidelines, ensuring that every touchpoint at the exhibition reinforces the same visual identity and messaging.</p>
                        <p>We also design the supporting materials that make an exhibition successful — brochures, flyers, business cards, promotional items, and digital presentations that give visitors something to take away and remember you by. Having a beautifully designed stand is important, but it is the combination of great design across all your exhibition touchpoints that creates a truly memorable brand experience.</p>
                        <p>For clients with digital screens or video walls at their stands, we create animated content and presentation materials that bring movement and energy to the display. Dynamic content consistently attracts more attention than static graphics, and we design animations that are eye-catching without being distracting — keeping the focus on your key messages and brand.</p>
                        <p>Whether you are exhibiting at a local Pretoria trade show or a major national event, 012 Agency delivers exhibition display design that makes your brand impossible to walk past. Contact us today to discuss your next exhibition project and let us help you make the most of every opportunity.</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">Exhibition Design Services</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">Everything you need for a successful exhibition presence — designed to work together.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {exhibitionServices.map((s) => (
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
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">Make Your Next Exhibition Count</h2>
                    <p className="text-neutral-400 text-lg mb-8">Contact us today for professional exhibition display design in Pretoria that attracts visitors and generates real business.</p>
                    <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105 inline-block">Start Your Exhibition Project</Link>
                    <div className="mt-10 pt-10 border-t border-white/10 text-neutral-500 text-sm">
                        <p>012 Agency — Park Lane West Building, 194 Bancor Ave, Waterkloof Glen, Pretoria, 0181</p>
                        <p className="mt-1">📞 +27 (0)62 369 3789 &nbsp;|&nbsp; ✉ info@012agency.co.za</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
