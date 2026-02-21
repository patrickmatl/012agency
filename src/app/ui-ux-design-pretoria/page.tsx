import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'UI/UX Design Pretoria | User Interface & Experience Design | 012 Agency',
    description: 'Professional UI/UX design in Pretoria by 012 Agency. We design intuitive, beautiful digital interfaces for websites, apps, and software that delight users and drive business results. Get a quote.',
    keywords: [
        'ui ux design pretoria',
        'user interface design pretoria',
        'user experience design pretoria',
        'app design pretoria',
        'website ui design pretoria',
        'ux designer pretoria',
    ],
    alternates: { canonical: 'https://012agency.co.za/ui-ux-design-pretoria' },
    openGraph: {
        title: 'UI/UX Design Pretoria | 012 Agency',
        description: 'Professional UI/UX design in Pretoria. Intuitive, beautiful digital interfaces for websites, apps, and software.',
        url: 'https://012agency.co.za/ui-ux-design-pretoria',
        type: 'website',
    },
};

const uiuxServices = [
    { title: 'Website UI Design', desc: 'Beautiful, conversion-focused website interfaces that guide users naturally towards your business goals.' },
    { title: 'Mobile App Design', desc: 'Intuitive mobile app interfaces for iOS and Android that users love to interact with.' },
    { title: 'Dashboard & Admin Design', desc: 'Clear, functional dashboard designs that make complex data and workflows easy to manage.' },
    { title: 'UX Research & Audit', desc: 'In-depth analysis of your existing digital products to identify usability issues and opportunities for improvement.' },
    { title: 'Wireframing & Prototyping', desc: 'Interactive prototypes that allow you to test and validate your product before development begins.' },
    { title: 'Design Systems', desc: 'Comprehensive component libraries and design systems that ensure consistency across your entire digital product.' },
];

export default function UiUxDesignPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'UI/UX Design Pretoria',
                        description:
                            'UI/UX design services in Pretoria by 012 Agency. Intuitive, beautiful interfaces for websites, apps and software that delight users and drive business results.',
                        url: 'https://012agency.co.za/ui-ux-design-pretoria',
                        serviceType: 'UI and UX design',
                        category: 'Digital product design services',
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
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 35% 45%, #FFD700 0%, transparent 50%), radial-gradient(circle at 65% 55%, #FFA500 0%, transparent 50%)' }} />
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">Design That Users Love</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        UI/UX Design <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        We design digital interfaces that are intuitive, beautiful, and built to achieve your business goals — from websites and mobile apps to dashboards and enterprise software.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">Start a UI/UX Project</Link>
                        <Link href="/web-design-pretoria" className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300">Web Design Services</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">Digital Experiences That Delight and Convert</h2>
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>In the digital age, the quality of your user interface and user experience is one of the most powerful competitive advantages your business can have. A digital product that is intuitive, fast, and enjoyable to use builds loyalty, reduces support costs, and drives the kind of word-of-mouth recommendations that no amount of advertising can buy. Conversely, a digital product that is confusing, slow, or frustrating drives users away — often permanently. At 012 Agency, we design digital experiences that keep users coming back.</p>
                        <p>Our UI/UX design team in Pretoria combines deep expertise in visual design with a thorough understanding of human psychology and user behaviour. We do not just make things look beautiful — we design interfaces that work. Every layout decision, every interaction pattern, every piece of copy is considered in terms of how it serves the user and guides them towards the actions that matter most to your business.</p>
                        <p>We begin every UI/UX project with a discovery phase that includes user research, competitive analysis, and stakeholder interviews. Understanding who your users are, what they are trying to achieve, and what frustrations they currently experience is the foundation of great UX design. This research phase ensures that every design decision we make is grounded in real user needs rather than assumptions or aesthetic preferences.</p>
                        <p>Wireframing and prototyping are central to our design process. Before we invest time in detailed visual design, we create low-fidelity wireframes that map out the structure and flow of your digital product. These wireframes are then developed into interactive prototypes that can be tested with real users. This iterative approach catches usability issues early — when they are cheap and easy to fix — rather than after development has begun.</p>
                        <p>Visual design is where the wireframes come to life. Our designers apply your brand identity to the interface, creating a visual language that is consistent, attractive, and appropriate for your audience. We pay close attention to typography, colour, spacing, and iconography — the details that separate a good interface from a great one. Every screen is designed to the pixel, with careful attention to how it will look and behave across different devices and screen sizes.</p>
                        <p>Accessibility is a principle we take seriously in all our UI/UX work. Digital products should be usable by everyone, including people with visual, motor, or cognitive impairments. We design with accessibility in mind from the very beginning — ensuring sufficient colour contrast, appropriate font sizes, keyboard navigability, and screen reader compatibility. This not only makes your product more inclusive but also improves SEO and reduces legal risk.</p>
                        <p>We deliver our UI/UX designs as comprehensive design files in Figma or Adobe XD, complete with all the assets, specifications, and documentation that your development team needs to build the product accurately. We can also work closely with your developers during the build phase to answer questions, review implementations, and ensure that the final product matches the design intent.</p>
                        <p>Whether you are building a new digital product from scratch, redesigning an existing one, or looking to improve specific aspects of your user experience, 012 Agency delivers UI/UX design in Pretoria that combines strategic thinking with exceptional visual craft. Contact us today to discuss your project.</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">Our UI/UX Design Services</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">From research to final design files — a complete UI/UX design service for digital products.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {uiuxServices.map((s) => (
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
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">Ready to Build Something Users Love?</h2>
                    <p className="text-neutral-400 text-lg mb-8">Contact Pretoria&apos;s UI/UX design experts and let&apos;s create a digital experience that delights your users and drives your business forward.</p>
                    <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105 inline-block">Start Your UI/UX Project</Link>
                    <div className="mt-10 pt-10 border-t border-white/10 text-neutral-500 text-sm">
                        <p>012 Agency — Park Lane West Building, 194 Bancor Ave, Waterkloof Glen, Pretoria, 0181</p>
                        <p className="mt-1">📞 +27 (0)62 369 3789 &nbsp;|&nbsp; ✉ info@012agency.co.za</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
