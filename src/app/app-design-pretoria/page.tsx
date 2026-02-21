import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'App Design Pretoria | 012 Agency — Mobile & Web App UI/UX Design',
    description: 'Professional app design in Pretoria by 012 Agency. Mobile app UI/UX design, web app interfaces, prototyping, and user experience design for iOS, Android, and web platforms.',
    keywords: ['app design pretoria', 'mobile app design pretoria', 'ui ux app design pretoria', 'app ui design pretoria', 'app development design pretoria', 'ios android app design pretoria'],
    alternates: { canonical: 'https://012agency.co.za/app-design-pretoria' },
    openGraph: {
        title: 'App Design Pretoria | 012 Agency',
        description: 'Professional mobile and web app UI/UX design in Pretoria. From wireframes to pixel-perfect interfaces.',
        url: 'https://012agency.co.za/app-design-pretoria',
        type: 'website',
    },
};

const appServices = [
    { title: 'Mobile App UI Design', desc: 'Pixel-perfect iOS and Android app interfaces designed for intuitive navigation, visual clarity, and delightful user experience.' },
    { title: 'Web App Interface Design', desc: 'Complex web application interfaces designed for efficiency, clarity, and ease of use across desktop and tablet devices.' },
    { title: 'UX Research & Wireframing', desc: 'User research, journey mapping, and low-fidelity wireframes that establish the structure and flow before visual design begins.' },
    { title: 'Interactive Prototyping', desc: 'Clickable prototypes in Figma that allow you to test and validate your app concept before committing to development.' },
    { title: 'Design Systems', desc: 'Comprehensive component libraries and design systems that ensure visual consistency across your entire app and speed up development.' },
    { title: 'App Redesign', desc: 'Modernising and improving existing apps — improving usability, updating the visual design, and aligning with current platform conventions.' },
];

export default function AppDesignPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'App Design Pretoria',
                        description:
                            'App design services in Pretoria by 012 Agency. Mobile and web app UI/UX design, prototyping and design systems for iOS, Android and web.',
                        url: 'https://012agency.co.za/app-design-pretoria',
                        serviceType: 'App UI/UX design',
                        category: 'App design services',
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
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">Interfaces People Love to Use</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        App Design <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Professional mobile and web app UI/UX design for Pretoria businesses. From concept and wireframes to pixel-perfect, developer-ready interfaces.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">Start Your App Project</Link>
                        <Link href="/project-showcase-pretoria" className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300">View Portfolio</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">App Design That Puts Users First</h2>
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>A great app is not just one that works — it is one that people enjoy using. The difference between an app that users love and one they abandon after a few sessions often comes down to design. Good app design makes complex functionality feel simple, guides users intuitively through tasks, and creates moments of delight that keep people coming back. At 012 Agency, we design mobile and web app interfaces that put the user experience at the centre of every decision.</p>
                        <p>Our app design process begins with understanding your users and your business goals. Who will be using this app? What tasks do they need to accomplish? What are their pain points with existing solutions? What does success look like for your business? These questions shape every aspect of the design — from the information architecture and navigation structure to the visual design and micro-interactions.</p>
                        <p>We design for both iOS and Android platforms, understanding the specific design conventions, interaction patterns, and guidelines for each. iOS and Android users have different expectations about how apps should behave, and a design that feels native and intuitive on one platform may feel foreign on the other. We design platform-appropriate interfaces that feel at home on each operating system while maintaining a consistent brand identity across both.</p>
                        <p>Our design process typically begins with UX research and wireframing. Before any visual design work begins, we map out the user journeys, define the information architecture, and create low-fidelity wireframes that establish the structure and flow of the app. This phase is critical — it is much easier and cheaper to identify and fix usability issues in wireframes than in finished designs or, worse, in developed code.</p>
                        <p>Once the wireframes are approved, we move into visual design — applying your brand identity to the interface, designing the component library, and creating the pixel-perfect screens that your development team will implement. We work in Figma, which allows for efficient collaboration, easy handoff to developers, and the creation of interactive prototypes that you can test with real users before development begins.</p>
                        <p>We also design comprehensive design systems — documented component libraries that define every button, input, card, modal, and other UI element in your app. A well-designed design system ensures visual consistency across your entire app, speeds up the design process for future features, and makes it easier for developers to implement the design accurately and consistently.</p>
                        <p>For businesses with existing apps that need improvement, we offer app redesign services. Whether your app looks dated, has usability issues, or simply does not reflect your current brand identity, we can modernise and improve it — improving the user experience, updating the visual design, and aligning it with current platform conventions and best practices.</p>
                        <p>Contact 012 Agency today to discuss your app design project. Whether you are building a new app from scratch or improving an existing one, we deliver designs that users love and developers can build efficiently.</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">App Design Services</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">End-to-end app design from research and wireframes to developer-ready interfaces.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {appServices.map((s) => (
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
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">Ready to Design Your App?</h2>
                    <p className="text-neutral-400 text-lg mb-8">Let&apos;s create an app interface that your users will love and your developers can build efficiently.</p>
                    <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105 inline-block">Start Your App Project</Link>
                    <div className="mt-10 pt-10 border-t border-white/10 text-neutral-500 text-sm">
                        <p>012 Agency — Park Lane West Building, 194 Bancor Ave, Waterkloof Glen, Pretoria, 0181</p>
                        <p className="mt-1">📞 +27 (0)62 369 3769 &nbsp;|&nbsp; ✉ info@012agency.co.za</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
