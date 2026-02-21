import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Print Design Pretoria | Professional Print Design Services | 012 Agency',
    description: 'Professional print design in Pretoria by 012 Agency. Brochures, catalogues, posters, menus, and all print materials designed for maximum impact. Print-ready files guaranteed. Get a quote today.',
    keywords: [
        'print design pretoria',
        'brochure design pretoria',
        'catalogue design pretoria',
        'poster design pretoria',
        'print company pretoria',
        'graphic design print pretoria',
    ],
    alternates: { canonical: 'https://012agency.co.za/print-design-pretoria' },
    openGraph: {
        title: 'Print Design Pretoria | 012 Agency',
        description: 'Professional print design in Pretoria. Brochures, catalogues, posters, and all print materials designed for maximum impact.',
        url: 'https://012agency.co.za/print-design-pretoria',
        type: 'website',
    },
};

const printItems = [
    { title: 'Brochure Design', desc: 'Tri-fold, bi-fold, and multi-page brochures that communicate your services and products with clarity and style.' },
    { title: 'Catalogue Design', desc: 'Product catalogues and price lists designed for easy navigation and maximum visual appeal.' },
    { title: 'Poster & Large Format', desc: 'Event posters, promotional posters, and large-format prints designed for impact at any size.' },
    { title: 'Menu Design', desc: 'Restaurant and café menus that reflect your brand, present your offerings attractively, and drive sales.' },
    { title: 'Newsletter Design', desc: 'Printed and digital newsletters that keep your audience informed and engaged with your brand.' },
    { title: 'Invitation & Event Design', desc: 'Corporate invitations, event programmes, and conference materials that set the right tone.' },
];

export default function PrintDesignPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Print Design Pretoria',
                        description:
                            'Professional print design services in Pretoria by 012 Agency. Brochures, catalogues, posters, menus and print materials designed for maximum impact.',
                        url: 'https://012agency.co.za/print-design-pretoria',
                        serviceType: 'Print design',
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
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #FFD700 0%, transparent 50%), radial-gradient(circle at 70% 50%, #FFA500 0%, transparent 50%)' }} />
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">Print That Makes an Impression</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        Print Design <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        From brochures and catalogues to posters and menus — we design print materials that look exceptional in print and deliver your message with clarity and impact.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">Get a Print Design Quote</Link>
                        <Link href="/annual-report-design-and-print-pretoria" className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300">View Print Packages</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">Print Design That Works in the Real World</h2>
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>In an increasingly digital world, print materials have not lost their power — if anything, they have become more valuable. A beautifully designed brochure, a well-crafted catalogue, or a striking poster stands out precisely because it is tangible, considered, and permanent in a way that digital content is not. When a potential client holds a well-designed brochure in their hands, it communicates something about your business that no website or social media post can replicate. At 012 Agency, we design print materials that make that impression count.</p>
                        <p>We have been designing print materials for Pretoria businesses since 2013, and our experience spans virtually every type of print project imaginable. From simple one-page flyers to complex multi-section catalogues, from intimate wedding invitations to large-format exhibition banners, we bring the same level of care, craft, and strategic thinking to every project. Our designers understand print — not just how to make things look good on screen, but how to design for the specific characteristics and constraints of the print medium.</p>
                        <p>Print design requires technical knowledge that goes beyond visual design skills. Understanding colour modes (CMYK vs RGB), resolution requirements, bleed and crop marks, paper stocks and finishes, and the way colours shift between screen and print — these are all critical considerations that separate professional print designers from those who simply create files that look good on screen but disappoint in print. Every file we produce is set up to professional print specifications, ensuring that what you see in the proof is what you get in the finished product.</p>
                        <p>Brochure design is one of our most popular print services. A well-designed brochure is one of the most versatile marketing tools available — it can be handed out at events, included in direct mail campaigns, left in reception areas, or sent as a PDF to prospects. We design brochures in all formats — tri-fold, bi-fold, Z-fold, and multi-page — and in all sizes from A5 to A3 and beyond. Every brochure we design is structured to guide the reader through your story in a way that builds interest and drives action.</p>
                        <p>Catalogue design is a specialised discipline that requires careful attention to information architecture, navigation, and visual consistency across many pages. Whether you are producing a product catalogue for a retail business, a services catalogue for a professional firm, or a price list for a trade supplier, we design catalogues that are easy to navigate, visually consistent, and effective at communicating the value of what you offer.</p>
                        <p>Poster design is another area where our skills shine. A great poster needs to communicate its message instantly — in the few seconds that a passer-by will give it. We design posters that command attention, communicate clearly, and motivate action. Whether you need event posters, promotional posters, or informational posters for your office or retail environment, we deliver designs that work at the sizes and in the contexts where they will be displayed.</p>
                        <p>Menu design is a specialised area of print design that we have extensive experience in. A well-designed menu does more than list your offerings — it guides customers towards your most profitable items, communicates your brand personality, and contributes to the overall dining experience. We design menus for restaurants, cafés, bars, and catering businesses across Pretoria, creating designs that are both beautiful and practical.</p>
                        <p>Whatever your print design needs, 012 Agency delivers professional results that look exceptional in print and represent your brand at its best. Contact us today for a free consultation and quote on your next print design project in Pretoria.</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">Print Materials We Design</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">Every type of print material your business needs — designed to look exceptional in print.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {printItems.map((s) => (
                            <div key={s.title} className="bg-black rounded-xl p-6 border border-[#FFD700]/20 hover:border-[#FFD700]/60 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-10 h-1 bg-[#FFD700] mb-4 rounded" />
                                <h3 className="text-xl font-syne font-bold text-white mb-3">{s.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Print specs assurance */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-14">Our Print Design Guarantee</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {[
                            { title: 'Print-Ready Files', desc: 'Every file delivered with correct CMYK colour mode, 300dpi resolution, bleed, and crop marks.' },
                            { title: 'Unlimited Revisions', desc: 'We refine until you are completely satisfied — your approval is the only deadline that matters.' },
                            { title: 'Fast Turnaround', desc: 'Standard 5–7 business day turnaround, with rush options available for urgent projects.' },
                        ].map((g) => (
                            <div key={g.title} className="p-8 bg-zinc-900 rounded-xl border border-[#FFD700]/20">
                                <h3 className="text-xl font-bold text-white mb-3">{g.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">{g.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border-t border-[#FFD700]/20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">Ready to Make an Impression in Print?</h2>
                    <p className="text-neutral-400 text-lg mb-8">Contact Pretoria&apos;s print design experts and let&apos;s create materials that represent your business at its very best.</p>
                    <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105 inline-block">Start Your Print Project</Link>
                    <div className="mt-10 pt-10 border-t border-white/10 text-neutral-500 text-sm">
                        <p>012 Agency — Park Lane West Building, 194 Bancor Ave, Waterkloof Glen, Pretoria, 0181</p>
                        <p className="mt-1">📞 +27 (0)62 369 3789 &nbsp;|&nbsp; ✉ info@012agency.co.za</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
