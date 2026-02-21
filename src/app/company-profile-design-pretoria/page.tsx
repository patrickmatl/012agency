import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Company Profile Design Pretoria | Professional Company Profile | 012 Agency',
    description: 'Professional company profile design in Pretoria by 012 Agency. We create compelling company profiles that win clients and open doors. Print-ready and digital formats. Get a quote today.',
    keywords: [
        'company profile design pretoria',
        'company profile pretoria',
        'business profile design pretoria',
        'corporate profile design pretoria',
        'company brochure design pretoria',
        'professional company profile pretoria',
    ],
    alternates: {
        canonical: 'https://012agency.co.za/company-profile-design-pretoria',
    },
    openGraph: {
        title: 'Company Profile Design Pretoria | 012 Agency',
        description: 'Professional company profile design in Pretoria by 012 Agency. Compelling profiles that win clients and open doors.',
        url: 'https://012agency.co.za/company-profile-design-pretoria',
        type: 'website',
    },
};

const profileSections = [
    { title: 'Company Overview', desc: 'A compelling introduction that captures who you are, what you do, and why you are the best choice.' },
    { title: 'Services & Offerings', desc: 'Clear, well-structured presentation of your services with descriptions that speak to client needs.' },
    { title: 'Our Story & History', desc: 'A narrative that builds trust by showing your journey, milestones, and growth over time.' },
    { title: 'Team & Leadership', desc: 'Professional presentation of your key people — the faces behind the business that clients want to know.' },
    { title: 'Portfolio & Case Studies', desc: 'Visual showcase of your best work with brief case studies that demonstrate real results.' },
    { title: 'Credentials & Certifications', desc: 'Clear display of your accreditations, memberships, and certifications that validate your expertise.' },
];

export default function CompanyProfileDesignPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Company Profile Design Pretoria',
                        description:
                            'Company profile design services in Pretoria by 012 Agency. Professional, print-ready and digital profiles that win clients and open doors.',
                        url: 'https://012agency.co.za/company-profile-design-pretoria',
                        serviceType: 'Company profile design',
                        category: 'Corporate design services',
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
                    style={{ backgroundImage: 'radial-gradient(circle at 25% 55%, #FFD700 0%, transparent 50%), radial-gradient(circle at 75% 45%, #FFA500 0%, transparent 50%)' }}
                />
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">Your Business, Beautifully Presented</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        Company Profile Design <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        A professionally designed company profile is your most powerful sales tool. We create profiles that open doors, win tenders, and make your business impossible to overlook.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">
                            Get a Profile Quote
                        </Link>
                        <Link href="/project-showcase-pretoria" className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300">
                            See Examples
                        </Link>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">
                        A Company Profile That Opens Doors
                    </h2>
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>
                            In the South African business environment, a professional company profile is not optional — it is essential. Whether you are submitting a tender, pitching to a new client, attending a networking event, or responding to an RFQ, your company profile is often the first detailed impression a potential client or partner gets of your business. It needs to be professional, compelling, and reflective of the quality of work you deliver. At 012 Agency, we design company profiles that do exactly that.
                        </p>
                        <p>
                            We have designed company profiles for businesses across virtually every industry in Pretoria and Gauteng — from construction and engineering firms to professional services, technology companies, healthcare providers, and creative agencies. This experience gives us a deep understanding of what different audiences look for in a company profile, and how to structure and present information to maximum effect.
                        </p>
                        <p>
                            A great company profile is more than a collection of facts about your business. It is a carefully crafted narrative that builds trust, demonstrates expertise, and makes a compelling case for why a client should choose you over your competitors. We work with you to identify the key messages that need to come through in your profile, and then we structure the content and design to deliver those messages with clarity and impact.
                        </p>
                        <p>
                            The design of your company profile is just as important as the content. A poorly designed profile — one with inconsistent fonts, misaligned elements, low-quality images, and a generic layout — undermines the credibility of even the strongest content. Our designers create profiles that are visually impressive, brand-consistent, and easy to navigate. Every page is designed with intention, guiding the reader through your story in a way that builds confidence and desire.
                        </p>
                        <p>
                            We design company profiles in a range of formats to suit different needs. A standard A4 profile is the most common format — typically 8 to 20 pages, designed for both print and digital distribution. We also design shorter two-page capability statements for quick introductions, and longer, more detailed profiles for complex organisations with multiple divisions or service lines. Whatever your needs, we have the experience and skills to deliver.
                        </p>
                        <p>
                            Photography plays a crucial role in a great company profile. Images of your team, your facilities, your equipment, and your completed projects bring your profile to life and give potential clients a real sense of who you are and what you do. If you have professional photography, we will make the most of it. If you do not, we can advise on what shots you need and work with photographers to get them.
                        </p>
                        <p>
                            Every company profile we design is delivered in both print-ready PDF format and a screen-optimised digital version. The print version is set up to professional specifications — correct colour mode, resolution, bleed, and crop marks — so it can be printed anywhere in South Africa and look exactly as intended. The digital version is optimised for email distribution and online sharing, with a smaller file size and screen-friendly formatting.
                        </p>
                        <p>
                            If your current company profile is letting your business down — or if you do not have one at all — now is the time to change that. Contact 012 Agency today and let us design a company profile that truly represents the quality and professionalism of your business.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sections */}
            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">What Your Profile Will Include</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">
                        Every section designed to build trust and make a compelling case for your business.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {profileSections.map((s) => (
                            <div key={s.title} className="bg-black rounded-xl p-6 border border-[#FFD700]/20 hover:border-[#FFD700]/60 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-10 h-1 bg-[#FFD700] mb-4 rounded" />
                                <h3 className="text-xl font-syne font-bold text-white mb-3">{s.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Formats */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-14">Profile Formats We Design</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {[
                            { title: 'Standard A4 Profile', pages: '8–20 pages', desc: 'The most versatile format — suitable for print and digital distribution across all industries.' },
                            { title: 'Capability Statement', pages: '1–2 pages', desc: 'A concise overview for quick introductions, networking, and tender pre-qualification.' },
                            { title: 'Extended Corporate Profile', pages: '20–50 pages', desc: 'Comprehensive profiles for large organisations with multiple divisions or service lines.' },
                        ].map((f) => (
                            <div key={f.title} className="p-8 bg-zinc-900 rounded-xl border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-all">
                                <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                                <p className="text-[#FFD700] text-sm font-semibold mb-4">{f.pages}</p>
                                <p className="text-neutral-400 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border-t border-[#FFD700]/20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">Ready to Win More Business?</h2>
                    <p className="text-neutral-400 text-lg mb-8">
                        A professionally designed company profile is one of the best investments you can make. Let&apos;s create yours today.
                    </p>
                    <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105 inline-block">
                        Start Your Profile Project
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
