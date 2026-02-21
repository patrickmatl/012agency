import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Annual Report Design Pretoria | Professional Annual Report Design Company | 012 Agency',
    description: 'Professional annual report design in Pretoria by 012 Agency. We design compelling, print-ready annual reports that communicate your organisation\'s story with clarity and impact. Get a quote today.',
    keywords: [
        'annual report design pretoria',
        'annual report design company pretoria',
        'annual report designer pretoria',
        'corporate report design pretoria',
        'annual report printing pretoria',
        'professional annual report pretoria',
    ],
    alternates: {
        canonical: 'https://012agency.co.za/annual-report-design-company-pretoria',
    },
    openGraph: {
        title: 'Annual Report Design Pretoria | 012 Agency',
        description: 'Professional annual report design in Pretoria by 012 Agency. Compelling, print-ready annual reports that communicate your story with clarity and impact.',
        url: 'https://012agency.co.za/annual-report-design-company-pretoria',
        type: 'website',
    },
};

const reportFeatures = [
    { title: 'Financial Report Design', desc: 'Clear, visually engaging layouts for financial statements, charts, and data tables that make complex numbers accessible.' },
    { title: 'Corporate Narrative Design', desc: 'Compelling visual storytelling for your CEO message, strategic overview, and operational highlights.' },
    { title: 'Infographics & Data Visualisation', desc: 'Custom infographics that transform raw data into visual stories your stakeholders will actually read.' },
    { title: 'Photography Direction', desc: 'Art direction for corporate photography that brings authenticity and human connection to your report.' },
    { title: 'Print Production Management', desc: 'End-to-end management of the print process — from file preparation to delivery of finished copies.' },
    { title: 'Digital PDF Versions', desc: 'Interactive, screen-optimised PDF versions of your annual report for digital distribution and website publishing.' },
];

export default function AnnualReportDesignPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Annual Report Design Pretoria',
                        description:
                            'Annual report design services in Pretoria by 012 Agency. Professional, print-ready corporate and NGO reports that communicate your story clearly.',
                        url: 'https://012agency.co.za/annual-report-design-company-pretoria',
                        serviceType: 'Annual report design',
                        category: 'Corporate report design services',
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
                    style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #FFD700 0%, transparent 50%), radial-gradient(circle at 70% 50%, #FFA500 0%, transparent 50%)' }}
                />
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">Corporate Communication Excellence</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        Annual Report Design <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        We design annual reports that go beyond compliance — transforming your organisation&apos;s story into a powerful communication tool that builds stakeholder confidence and trust.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">
                            Request a Quote
                        </Link>
                        <Link href="/annual-report-design-and-print-pretoria" className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300">
                            View Packages
                        </Link>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">
                        Annual Reports That Tell Your Organisation&apos;s Story
                    </h2>
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>
                            An annual report is one of the most important documents your organisation produces each year. It is read by investors, board members, regulators, clients, employees, and the public — each of them looking for different things, but all of them forming an impression of your organisation based on what they see and read. A poorly designed annual report signals disorganisation and a lack of attention to detail. A beautifully designed one communicates professionalism, transparency, and confidence. At 012 Agency, we specialise in annual report design that makes the right impression every time.
                        </p>
                        <p>
                            We have been designing annual reports for organisations across Pretoria and Gauteng since 2013. Our clients include listed companies, state-owned enterprises, non-profit organisations, educational institutions, and large private businesses. This breadth of experience means we understand the unique requirements of different types of annual reports — from the strict regulatory requirements of JSE-listed companies to the narrative-driven reports of NGOs and foundations.
                        </p>
                        <p>
                            The best annual reports do more than report — they engage. They use design to guide the reader through a narrative, making complex financial information accessible and highlighting the human stories behind the numbers. We approach every annual report project as a storytelling challenge, working closely with your communications and finance teams to understand the key messages you want to convey and the audience you are speaking to.
                        </p>
                        <p>
                            Our annual report design process begins with a thorough briefing session where we review your previous reports, discuss your brand guidelines, and agree on the creative direction for the new report. We then develop a design concept — a visual framework that will carry the report from cover to cover. This concept is presented for your review and approval before any detailed design work begins, ensuring that we are aligned before we invest significant time in execution.
                        </p>
                        <p>
                            Data visualisation is one of the most powerful tools in annual report design, and it is an area where we excel. Financial data, operational metrics, and impact statistics are all more compelling when presented visually. We design custom charts, graphs, infographics, and data tables that make your numbers not just readable but genuinely interesting. Our designers understand the principles of data visualisation — how to present information accurately while making it visually engaging and easy to interpret.
                        </p>
                        <p>
                            Typography and layout are the backbone of any great annual report. We use typographic hierarchy to guide the reader&apos;s eye, create visual rhythm through consistent spacing and proportion, and ensure that every page feels intentional and considered. Whether your report runs to 50 pages or 200, we maintain the same level of care and attention to detail throughout.
                        </p>
                        <p>
                            We manage the entire production process, from initial design through to print-ready files. We work with reputable printers to ensure that the finished product matches the quality of the design, and we manage the proofing process carefully to catch any errors before they reach the press. We also produce digital versions of your annual report — interactive PDFs optimised for screen reading and web distribution.
                        </p>
                        <p>
                            If your organisation is based in Pretoria and you are looking for an annual report design company that combines creative excellence with deep experience in corporate communications, 012 Agency is the partner you need. Contact us today to discuss your next annual report project.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">What We Deliver</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">
                        A complete annual report design service — from concept to printed copies.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reportFeatures.map((f) => (
                            <div key={f.title} className="bg-black rounded-xl p-6 border border-[#FFD700]/20 hover:border-[#FFD700]/60 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-10 h-1 bg-[#FFD700] mb-4 rounded" />
                                <h3 className="text-xl font-syne font-bold text-white mb-3">{f.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-14">Our Annual Report Design Process</h2>
                    <div className="grid md:grid-cols-5 gap-6 text-center">
                        {[
                            { step: '01', title: 'Brief & Strategy', desc: 'Understanding your audience, key messages, and brand requirements.' },
                            { step: '02', title: 'Concept Design', desc: 'Developing the visual framework and creative direction.' },
                            { step: '03', title: 'Content Layout', desc: 'Designing all pages with your content, data, and imagery.' },
                            { step: '04', title: 'Review & Revise', desc: 'Collaborative refinement until every detail is perfect.' },
                            { step: '05', title: 'Print & Deliver', desc: 'Print-ready files and management of the production process.' },
                        ].map((item) => (
                            <div key={item.step}>
                                <p className="text-4xl font-syne font-bold text-[#FFD700]/30 mb-3">{item.step}</p>
                                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border-t border-[#FFD700]/20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">Start Your Annual Report Project</h2>
                    <p className="text-neutral-400 text-lg mb-8">
                        Contact Pretoria&apos;s leading annual report design company and let&apos;s create a report your stakeholders will actually read.
                    </p>
                    <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105 inline-block">
                        Get a Quote Today
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
