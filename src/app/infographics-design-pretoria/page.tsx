import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Infographics Design Pretoria | 012 Agency — Data Visualisation & Infographic Design',
    description: 'Professional infographic design in Pretoria by 012 Agency. Data visualisation, process infographics, statistical infographics, and custom infographic design that communicates complex information clearly.',
    keywords: ['infographics design pretoria', 'infographic design pretoria', 'data visualisation pretoria', 'infographic designer pretoria', 'custom infographics pretoria', 'business infographics pretoria'],
    alternates: { canonical: 'https://012agency.co.za/infographics-design-pretoria' },
    openGraph: {
        title: 'Infographics Design Pretoria | 012 Agency',
        description: 'Custom infographic design and data visualisation for Pretoria businesses. Complex information made clear and compelling.',
        url: 'https://012agency.co.za/infographics-design-pretoria',
        type: 'website',
    },
};

const infographicTypes = [
    { title: 'Statistical Infographics', desc: 'Data-driven infographics that present statistics, survey results, and research findings in a visually compelling and easy-to-understand format.' },
    { title: 'Process Infographics', desc: 'Step-by-step process diagrams that explain complex workflows, procedures, or how-to guides in a clear, visual sequence.' },
    { title: 'Timeline Infographics', desc: 'Chronological infographics that visualise company history, project timelines, industry evolution, or historical events.' },
    { title: 'Comparison Infographics', desc: 'Side-by-side comparison infographics that help audiences understand the differences between products, services, or options.' },
    { title: 'Geographic Infographics', desc: 'Map-based infographics that visualise geographic data, regional statistics, or location-based information.' },
    { title: 'Branded Report Design', desc: 'Annual reports, white papers, and research documents designed with infographic elements to make data-heavy content engaging and readable.' },
];

export default function InfographicsDesignPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Infographics Design Pretoria',
                        description:
                            'Infographic design and data visualisation services in Pretoria by 012 Agency. Custom infographics that communicate complex information clearly.',
                        url: 'https://012agency.co.za/infographics-design-pretoria',
                        serviceType: 'Infographic design and data visualisation',
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
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">Complex Data. Clear Communication.</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        Infographics Design <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Custom infographic design and data visualisation for Pretoria businesses. We transform complex data, processes, and ideas into clear, compelling visuals that inform and engage.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">Get an Infographic Quote</Link>
                        <Link href="/project-showcase-pretoria" className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300">View Portfolio</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">Why Infographics Work</h2>
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>The human brain processes visual information 60,000 times faster than text. Infographics leverage this fundamental aspect of human cognition to communicate complex information quickly, clearly, and memorably. Whether you are presenting research findings, explaining a business process, visualising market data, or telling a story with statistics, a well-designed infographic can communicate in seconds what would take paragraphs of text to explain — and it is far more likely to be shared, remembered, and acted upon.</p>
                        <p>At 012 Agency, we design custom infographics for Pretoria businesses across all industries. Our infographic design process begins with understanding your data, your message, and your audience. What is the key insight you want your audience to take away? What is the most important data point? What action do you want them to take after viewing the infographic? These questions shape the design approach — the visual hierarchy, the chart types, the colour coding, and the narrative structure.</p>
                        <p>We design all types of infographics, including statistical infographics (presenting data and research findings), process infographics (explaining step-by-step workflows and procedures), timeline infographics (visualising chronological information), comparison infographics (side-by-side comparisons of products, services, or options), geographic infographics (map-based data visualisation), and hierarchical infographics (organisational charts and decision trees).</p>
                        <p>One of the most common mistakes in infographic design is trying to include too much information. An effective infographic has a clear focus — it communicates one main idea or tells one coherent story. Our designers are skilled at distilling complex information to its essential elements, identifying the most important data points, and presenting them in a way that is immediately understandable without requiring the viewer to work hard to extract the meaning.</p>
                        <p>We design infographics for all use cases — social media sharing, website content, presentations, reports, white papers, press releases, and print. Each use case has different requirements in terms of dimensions, resolution, and file format. A social media infographic needs to be designed for vertical scrolling on mobile, while a presentation infographic needs to work at slide dimensions. We design for your specific use case and deliver files in the appropriate formats.</p>
                        <p>Branded infographics are particularly powerful for content marketing. An infographic that presents original research or provides genuinely useful information in a visually compelling format is highly shareable — it can generate backlinks, social shares, and media coverage that would be difficult to achieve with text-based content alone. We design infographics that are not only informative but also visually striking enough to be worth sharing.</p>
                        <p>We also design infographic elements for annual reports, white papers, and research documents — charts, diagrams, data callouts, and visual summaries that make data-heavy documents more engaging and readable. These branded report design services help you present your research and data in a way that reflects the quality and professionalism of your organisation.</p>
                        <p>Contact 012 Agency today to discuss your infographic design needs. Whether you have a single data set to visualise or an ongoing need for infographic content, we deliver designs that communicate clearly and look exceptional.</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">Infographic Types We Design</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">Custom infographics for every type of data, process, and story you need to tell.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {infographicTypes.map((s) => (
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
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">Ready to Visualise Your Data?</h2>
                    <p className="text-neutral-400 text-lg mb-8">Get a custom infographic designed to communicate your data clearly and compellingly.</p>
                    <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105 inline-block">Get Your Infographic Quote</Link>
                    <div className="mt-10 pt-10 border-t border-white/10 text-neutral-500 text-sm">
                        <p>012 Agency — Park Lane West Building, 194 Bancor Ave, Waterkloof Glen, Pretoria, 0181</p>
                        <p className="mt-1">📞 +27 (0)62 369 3769 &nbsp;|&nbsp; ✉ info@012agency.co.za</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
