import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Signage Design Pretoria | Shop Signs, Office Signage & Branding | 012 Agency',
    description: 'Professional signage design in Pretoria by 012 Agency. Shop fronts, office signage, vehicle branding, banners, and wayfinding systems. Design and print-ready files. Get a quote today.',
    keywords: [
        'signage design pretoria',
        'shop sign design pretoria',
        'office signage pretoria',
        'vehicle branding pretoria',
        'banner design pretoria',
        'sign company pretoria',
    ],
    alternates: { canonical: 'https://012agency.co.za/signage-design-pretoria' },
    openGraph: {
        title: 'Signage Design Pretoria | 012 Agency',
        description: 'Professional signage design in Pretoria. Shop fronts, office signage, vehicle branding, banners, and wayfinding systems.',
        url: 'https://012agency.co.za/signage-design-pretoria',
        type: 'website',
    },
};

const signageTypes = [
    { title: 'Shop Front Signage', desc: 'Bold, brand-consistent fascia signs and shopfront graphics that attract customers and build recognition.' },
    { title: 'Office Branding', desc: 'Reception walls, boardroom graphics, wayfinding systems, and environmental branding that impress visitors.' },
    { title: 'Vehicle Branding', desc: 'Full wraps, partial wraps, and decals that turn your fleet into moving billboards across Pretoria.' },
    { title: 'Banners & Pull-Ups', desc: 'Event banners, roller banners, and exhibition displays designed for maximum visual impact.' },
    { title: 'Outdoor Advertising', desc: 'Billboards, pylon signs, and outdoor hoardings designed for visibility and brand consistency.' },
    { title: 'Wayfinding Systems', desc: 'Directional signage systems for offices, campuses, hospitals, and retail environments.' },
];

export default function SignageDesignPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Signage Design Pretoria',
                        description:
                            'Professional signage design services in Pretoria by 012 Agency. Shop fronts, office signage, vehicle branding, banners and wayfinding systems.',
                        url: 'https://012agency.co.za/signage-design-pretoria',
                        serviceType: 'Signage design',
                        category: 'Signage design services',
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
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">Make Your Mark on Pretoria</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        Signage Design <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        From shop fronts to vehicle wraps, we design signage that commands attention, builds brand recognition, and turns every surface into a powerful marketing opportunity.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">Get a Signage Quote</Link>
                        <Link href="/project-showcase-pretoria" className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300">View Our Work</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">Signage That Works Around the Clock</h2>
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>Your signage is working for your business 24 hours a day, seven days a week. Long after your staff have gone home and your social media ads have stopped running, your shop front sign, your vehicle wrap, and your office branding are still communicating your brand to everyone who passes by. That makes signage one of the most cost-effective forms of marketing available — and one that deserves the same level of creative attention as any other part of your brand.</p>
                        <p>At 012 Agency, we have been designing signage for Pretoria businesses since 2013. Our work spans shop fronts in Menlyn and Hatfield, office environments in Centurion and Waterkloof, vehicle fleets across Gauteng, and exhibition displays at venues throughout South Africa. This experience gives us a deep understanding of how signage works in the real world — what catches the eye, what communicates clearly at speed, and what holds up under the South African sun.</p>
                        <p>Great signage design starts with understanding the context. A sign that works beautifully on a quiet suburban street might be completely ineffective on a busy highway. A vehicle wrap that looks stunning on a large truck needs to be adapted carefully for a smaller bakkie. We always design with the final application in mind, considering viewing distance, viewing speed, lighting conditions, and the surrounding visual environment.</p>
                        <p>Brand consistency is critical in signage. Your signs should look like they belong to the same family as your logo, your website, and your printed materials. We always work within your existing brand guidelines, ensuring that every piece of signage we design reinforces your brand identity rather than diluting it. If you do not yet have formal brand guidelines, we can help you establish them as part of the signage project.</p>
                        <p>Vehicle branding is one of the most powerful and cost-effective forms of outdoor advertising available to Pretoria businesses. A well-branded vehicle driving through Pretoria&apos;s streets is seen by thousands of potential customers every day. Whether you have a single delivery vehicle or a fleet of fifty, we design vehicle graphics that turn your transport into a mobile billboard that works for your business wherever it goes.</p>
                        <p>Office and environmental branding is another area where we add significant value. The way your office looks communicates your brand values to every client, partner, and employee who walks through the door. A well-branded reception area, boardroom, and workspace creates a professional impression, reinforces your culture, and makes your team proud of where they work. We design everything from reception wall graphics and wayfinding systems to branded meeting rooms and exterior building signage.</p>
                        <p>Every signage design we produce is delivered as a print-ready file set up to the specifications of your chosen signage manufacturer. We include all necessary technical details — correct colour profiles, file formats, dimensions, and bleed — so that the finished sign looks exactly as intended. We can also work directly with signage manufacturers on your behalf if you prefer a fully managed service.</p>
                        <p>If you are looking for a signage design company in Pretoria that combines creative excellence with practical knowledge of how signs work in the real world, 012 Agency is the partner you need. Contact us today for a free consultation and quote.</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">Signage Solutions We Design</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">Every type of signage your business needs, designed to the highest standard.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {signageTypes.map((s) => (
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
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">Let&apos;s Make Your Business Impossible to Miss</h2>
                    <p className="text-neutral-400 text-lg mb-8">Contact us today for professional signage design in Pretoria that gets your brand noticed.</p>
                    <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105 inline-block">Get Your Free Quote</Link>
                    <div className="mt-10 pt-10 border-t border-white/10 text-neutral-500 text-sm">
                        <p>012 Agency — Park Lane West Building, 194 Bancor Ave, Waterkloof Glen, Pretoria, 0181</p>
                        <p className="mt-1">📞 +27 (0)62 369 3789 &nbsp;|&nbsp; ✉ info@012agency.co.za</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
