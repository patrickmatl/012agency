import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Web Design Pretoria | Professional Website Design | 012 Agency',
    description: 'Professional web design in Pretoria by 012 Agency. We build fast, beautiful, mobile-friendly websites that convert visitors into customers. Get a free website consultation today.',
    keywords: [
        'web design pretoria',
        'website design pretoria',
        'web designer pretoria',
        'professional web design pretoria',
        'website development pretoria',
        'affordable web design pretoria',
    ],
    alternates: {
        canonical: 'https://012agency.co.za/web-design-pretoria',
    },
    openGraph: {
        title: 'Web Design Pretoria | Professional Website Design | 012 Agency',
        description: 'Professional web design in Pretoria by 012 Agency. We build fast, beautiful, mobile-friendly websites that convert visitors into customers.',
        url: 'https://012agency.co.za/web-design-pretoria',
        type: 'website',
    },
};

const webServices = [
    { title: 'Business Websites', desc: 'Professional multi-page websites that showcase your services, build credibility, and generate leads.' },
    { title: 'E-Commerce Stores', desc: 'Online stores that make it easy for customers to browse, choose, and buy — on any device.' },
    { title: 'Landing Pages', desc: 'High-converting single pages designed to capture leads or drive a specific action.' },
    { title: 'UI/UX Design', desc: 'Intuitive user interfaces and experiences that keep visitors engaged and guide them to conversion.' },
    { title: 'Website Redesign', desc: 'Transforming outdated websites into modern, fast, and effective digital presences.' },
    { title: 'SEO-Ready Development', desc: 'Every website we build is structured for search engine visibility from day one.' },
];

export default function WebDesignPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Web Design Pretoria',
                        description:
                            'Professional web design services in Pretoria by 012 Agency. Fast, mobile-friendly, conversion-focused business and e-commerce websites.',
                        url: 'https://012agency.co.za/web-design-pretoria',
                        serviceType: 'Web design',
                        category: 'Web design',
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
                    style={{ backgroundImage: 'radial-gradient(circle at 40% 50%, #FFD700 0%, transparent 50%), radial-gradient(circle at 60% 50%, #FFA500 0%, transparent 50%)' }}
                />
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">Your Digital Presence, Perfected</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        Web Design <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        We design and build websites that look stunning, load fast, and turn visitors into paying customers — built specifically for Pretoria businesses.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">
                            Get a Website Quote
                        </Link>
                        <Link href="/project-showcase-pretoria" className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300">
                            See Our Work
                        </Link>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">
                        Websites That Work While You Sleep
                    </h2>
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>
                            In today&apos;s business environment, your website is your most important marketing asset. It is the first place potential customers go when they want to learn more about your business, and it is often the deciding factor in whether they choose you or a competitor. A poorly designed website — one that is slow, hard to navigate, or visually outdated — sends the wrong message about your business before you have had a chance to say a word. At 012 Agency, we build websites that make the right impression every time.
                        </p>
                        <p>
                            Our web design team in Pretoria combines creative design talent with technical expertise to deliver websites that are both beautiful and functional. We do not just make things look good — we design with purpose, ensuring that every element of your website serves a specific goal. Whether that goal is to generate enquiries, showcase your portfolio, sell products online, or establish your credibility in your industry, we build the digital experience that achieves it.
                        </p>
                        <p>
                            Every website we build starts with a thorough understanding of your business and your customers. We want to know who visits your site, what they are looking for, and what action you want them to take. This user-centred approach shapes everything from the navigation structure to the layout of individual pages, ensuring that visitors can find what they need quickly and are guided naturally towards conversion.
                        </p>
                        <p>
                            Mobile responsiveness is not optional — it is essential. More than 60% of web traffic in South Africa comes from mobile devices, and Google prioritises mobile-friendly websites in its search rankings. Every website we design is built to look and perform perfectly on smartphones, tablets, and desktop computers. We test across multiple devices and screen sizes to ensure a consistently excellent experience for every visitor.
                        </p>
                        <p>
                            Speed is another non-negotiable. A website that takes more than three seconds to load loses more than half its visitors before they have even seen your content. We optimise every website we build for performance — compressing images, minimising code, and leveraging modern web technologies to ensure your site loads as fast as possible. This not only improves user experience but also boosts your search engine rankings.
                        </p>
                        <p>
                            Search engine optimisation is built into our web design process from the very beginning. We structure your website&apos;s content, URLs, headings, and metadata to give you the best possible foundation for ranking on Google. We also ensure that your site is technically sound — with proper canonical tags, structured data, and a clean sitemap — so that search engines can crawl and index your content efficiently.
                        </p>
                        <p>
                            We work with a range of technologies depending on your needs. For most business websites, we use modern frameworks that deliver exceptional performance and flexibility. For e-commerce, we build on platforms that make it easy to manage your product catalogue, process payments securely, and fulfil orders efficiently. And for clients who need to update their own content, we build easy-to-use content management systems that put you in control.
                        </p>
                        <p>
                            After launch, we do not disappear. We offer ongoing support, maintenance, and optimisation services to ensure your website continues to perform at its best as your business grows and evolves. Your website is a living asset, and we are here to help you get the most out of it for the long term.
                        </p>
                        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">E-Commerce Development in Pretoria</h3>
                        <p>
                            The retail landscape in Pretoria is shifting online. From local artisan products to large-scale industrial equipment, businesses are discovering the power of selling directly to customers through their own digital storefronts. We build secure, scalable e-commerce platforms that make managing your inventory, payments, and shipping effortless. We integrate with popular South African payment gateways like PayFast and Yoco, ensuring your customers have a seamless checkout experience.
                        </p>
                        <p>
                            Security is paramount. In an age of increasing cyber threats, your customers need to know their data is safe. We implement robust security measures, including SSL encryption and secure hosting environments, to protect your business and your clients. A secure website is not just a technical requirement; it is a trust signal that encourages visitors to do business with you.
                        </p>
                        <p>
                            We also focus on the administrative side of your website. A beautiful front-end is useless if the back-end is a nightmare to manage. We provide intuitive dashboards and training, empowering you and your team to update content, add new products, and track orders without needing to write a single line of code. We believe in empowering our clients, not making them dependent on us for every minor change.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">Our Web Design Services</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">
                        From simple business sites to complex e-commerce platforms — we build it all.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {webServices.map((service) => (
                            <div key={service.title} className="bg-black rounded-xl p-6 border border-[#FFD700]/20 hover:border-[#FFD700]/60 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-10 h-1 bg-[#FFD700] mb-4 rounded" />
                                <h3 className="text-xl font-syne font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-14">What Every Website We Build Includes</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            'Mobile-responsive design for all screen sizes',
                            'Fast loading speeds optimised for South African networks',
                            'SEO-ready structure and metadata from day one',
                            'SSL security certificate setup',
                            'Google Analytics integration',
                            'Contact forms and lead capture functionality',
                            'Social media integration',
                            'Post-launch support and training',
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-3 p-4 bg-zinc-900 rounded-lg border border-[#FFD700]/10">
                                <span className="text-[#FFD700] text-xl">✓</span>
                                <span className="text-neutral-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border-t border-[#FFD700]/20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">Ready for a Website That Delivers?</h2>
                    <p className="text-neutral-400 text-lg mb-8">
                        Contact Pretoria&apos;s web design experts today and let&apos;s build a digital presence that grows your business.
                    </p>
                    <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105 inline-block">
                        Start Your Website Project
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
