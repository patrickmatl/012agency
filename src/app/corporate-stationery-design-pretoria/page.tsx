import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Corporate Stationery Design Pretoria | Business Stationery | 012 Agency',
    description: 'Professional corporate stationery design in Pretoria by 012 Agency. Business cards, letterheads, email signatures, and presentation templates that project professionalism. Get a quote today.',
    keywords: [
        'corporate stationery design pretoria',
        'business card design pretoria',
        'letterhead design pretoria',
        'stationery design pretoria',
        'business stationery pretoria',
        'corporate identity pretoria',
    ],
    alternates: { canonical: 'https://012agency.co.za/corporate-stationery-design-pretoria' },
    openGraph: {
        title: 'Corporate Stationery Design Pretoria | 012 Agency',
        description: 'Professional corporate stationery design in Pretoria. Business cards, letterheads, and templates that project professionalism.',
        url: 'https://012agency.co.za/corporate-stationery-design-pretoria',
        type: 'website',
    },
};

const stationeryItems = [
    { title: 'Business Cards', desc: 'Premium business card designs that make a lasting impression — standard, folded, and luxury finishes available.' },
    { title: 'Letterheads', desc: 'Professional letterhead designs for print and digital use that reinforce your brand on every piece of correspondence.' },
    { title: 'Email Signatures', desc: 'Consistent, branded email signatures for your entire team that make every email a brand touchpoint.' },
    { title: 'Presentation Templates', desc: 'PowerPoint and Google Slides templates that make every presentation look polished and professional.' },
    { title: 'Compliment Slips', desc: 'Branded compliment slips for a personal touch in your client communications and deliveries.' },
    { title: 'Envelope & Folder Design', desc: 'Branded envelopes, document folders, and proposal covers that complete your professional stationery suite.' },
];

export default function CorporateStationeryDesignPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Corporate Stationery Design Pretoria',
                        description:
                            'Corporate stationery design services in Pretoria by 012 Agency. Business cards, letterheads, email signatures and presentation templates that project professionalism.',
                        url: 'https://012agency.co.za/corporate-stationery-design-pretoria',
                        serviceType: 'Corporate stationery design',
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
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #FFD700 0%, transparent 50%), radial-gradient(circle at 70% 50%, #FFA500 0%, transparent 50%)' }} />
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">Every Touchpoint, Perfectly Branded</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        Corporate Stationery Design <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        From business cards to presentation templates, we design corporate stationery that projects professionalism, reinforces your brand, and makes every interaction count.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">Get a Stationery Quote</Link>
                        <Link href="/branding-solutions-pretoria" className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300">View Brand Packages</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">Stationery That Speaks for Your Brand</h2>
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>Every piece of communication your business sends out is an opportunity to reinforce your brand. Your business card, your letterhead, your email signature, your presentation template — each of these touchpoints shapes the impression that clients, partners, and prospects have of your business. When these materials are professionally designed and visually consistent, they communicate that your business is serious, credible, and attentive to detail. When they are inconsistent or poorly designed, they undermine the trust you are trying to build.</p>
                        <p>At 012 Agency, we design corporate stationery for Pretoria businesses that is both beautiful and functional. We understand that stationery design is not just about making things look attractive — it is about creating a cohesive visual system that works across all your communication materials, reinforcing your brand identity at every touchpoint. Our designers bring the same level of care and strategic thinking to a business card as they do to a full brand identity project.</p>
                        <p>Business cards remain one of the most powerful networking tools available, despite the rise of digital communication. A well-designed business card is a physical representation of your brand that people keep, share, and refer back to. We design business cards that make a genuine impression — cards that people comment on, that get kept rather than discarded, and that communicate the quality of your business before you have said a word. We offer a range of finishes including standard, matte, gloss, soft-touch lamination, spot UV, and foiling for premium results.</p>
                        <p>Letterhead design is another area where attention to detail pays dividends. A professionally designed letterhead on every piece of correspondence — whether printed or sent as a PDF — communicates that your business takes its communications seriously. It also ensures that your brand is consistently represented across all your written communications, from formal proposals and contracts to everyday correspondence with clients and suppliers.</p>
                        <p>Email signatures are often overlooked, but they are one of the most frequently seen pieces of brand communication your business produces. Every email your team sends is an opportunity to reinforce your brand, share your contact details, and promote your services. We design professional email signature templates that are consistent across your entire team, easy to implement, and compatible with all major email clients.</p>
                        <p>Presentation templates are essential for any business that regularly pitches to clients, presents to stakeholders, or conducts training. A well-designed PowerPoint or Google Slides template makes every presentation look polished and professional, while ensuring that your brand is consistently represented regardless of who is presenting. We design templates that are easy for non-designers to use, with clear guidance on how to add content while maintaining the design integrity.</p>
                        <p>We design complete stationery suites — all the items your business needs, designed as a cohesive set that works together visually. This approach ensures consistency across all your materials and is more cost-effective than designing each item separately. We also offer individual items for businesses that only need specific pieces of stationery.</p>
                        <p>Whether you are setting up a new business and need a complete stationery suite from scratch, or refreshing your existing materials to align with a new brand identity, 012 Agency delivers corporate stationery design in Pretoria that makes your business look as professional as it truly is. Contact us today for a free consultation and quote.</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">Stationery Items We Design</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">A complete suite of corporate stationery — all designed to work together beautifully.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {stationeryItems.map((s) => (
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
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">Project Professionalism at Every Touchpoint</h2>
                    <p className="text-neutral-400 text-lg mb-8">Contact us today for professional corporate stationery design in Pretoria that makes your business look its best.</p>
                    <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105 inline-block">Get Your Stationery Designed</Link>
                    <div className="mt-10 pt-10 border-t border-white/10 text-neutral-500 text-sm">
                        <p>012 Agency — Park Lane West Building, 194 Bancor Ave, Waterkloof Glen, Pretoria, 0181</p>
                        <p className="mt-1">📞 +27 (0)62 369 3789 &nbsp;|&nbsp; ✉ info@012agency.co.za</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
