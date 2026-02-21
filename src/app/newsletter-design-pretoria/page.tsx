import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Newsletter Design Pretoria | 012 Agency — Email Newsletter Design',
    description: 'Professional email newsletter design in Pretoria by 012 Agency. Branded HTML email templates, eDM design, and newsletter campaigns that engage your subscribers and drive results.',
    keywords: ['newsletter design pretoria', 'email newsletter design pretoria', 'html email template pretoria', 'edm design pretoria', 'email marketing design pretoria', 'newsletter template pretoria'],
    alternates: { canonical: 'https://012agency.co.za/newsletter-design-pretoria' },
    openGraph: {
        title: 'Newsletter Design Pretoria | 012 Agency',
        description: 'Branded email newsletter design and HTML templates for Pretoria businesses. Engage your subscribers and drive results.',
        url: 'https://012agency.co.za/newsletter-design-pretoria',
        type: 'website',
    },
};

const newsletterServices = [
    { title: 'HTML Email Templates', desc: 'Custom-coded HTML email templates that render correctly across all major email clients — Outlook, Gmail, Apple Mail, and mobile.' },
    { title: 'Monthly Newsletter Design', desc: 'Ongoing newsletter design service — we design each issue to your brief, keeping your subscribers engaged month after month.' },
    { title: 'Welcome Email Series', desc: 'Branded welcome email sequences that make a great first impression and onboard new subscribers effectively.' },
    { title: 'Promotional eDMs', desc: 'High-impact promotional email designs for product launches, sales events, and special offers that drive clicks and conversions.' },
    { title: 'Transactional Email Design', desc: 'Branded transactional emails — order confirmations, shipping notifications, receipts — that reinforce your brand at every touchpoint.' },
    { title: 'Email Template Systems', desc: 'Modular email template systems with reusable blocks that your team can use to build any email quickly and consistently.' },
];

export default function NewsletterDesignPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Newsletter Design Pretoria',
                        description:
                            'Email newsletter design services in Pretoria by 012 Agency. Branded HTML email templates, eDMs and newsletter campaigns that engage subscribers and drive results.',
                        url: 'https://012agency.co.za/newsletter-design-pretoria',
                        serviceType: 'Email newsletter design',
                        category: 'Email marketing design services',
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
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">Emails Your Subscribers Actually Read</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        Newsletter Design <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Professional email newsletter design for Pretoria businesses. Branded HTML templates, eDMs, and ongoing newsletter campaigns that engage your subscribers and drive results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">Get a Newsletter Template</Link>
                        <Link href="/project-showcase-pretoria" className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300">View Portfolio</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">Email Marketing That Looks as Good as It Performs</h2>
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>Email marketing consistently delivers one of the highest returns on investment of any digital marketing channel. But with inboxes more crowded than ever, the design of your email newsletter has never been more important. A well-designed newsletter not only looks professional — it builds trust, reinforces your brand identity, and makes it easy for subscribers to find and engage with the content that matters to them. At 012 Agency, we design email newsletters that your subscribers actually look forward to receiving.</p>
                        <p>Our newsletter design service covers everything from one-off HTML email templates to ongoing monthly newsletter design. We design for all major email clients, including Outlook (which has notoriously inconsistent rendering), Gmail, Apple Mail, and mobile email clients. Email design is technically different from web design — CSS support is limited, and what looks perfect in a browser can break completely in Outlook. Our designers understand these constraints and design emails that render correctly everywhere.</p>
                        <p>We design custom HTML email templates that are built to your brand specifications — your colours, your fonts, your logo, your visual style. These templates are modular, meaning they are built from reusable content blocks (header, hero image, text block, product grid, CTA button, footer) that can be rearranged to create any email layout you need. This gives you the flexibility to create varied, engaging newsletters without starting from scratch each time.</p>
                        <p>For businesses that want ongoing newsletter design support, we offer a monthly newsletter design service. Each month, you brief us on the content and focus of your newsletter, and we design the issue to your specifications. This ensures your newsletter always looks polished and professional, even if you do not have in-house design resources. We can also write the copy for your newsletter if needed, or work from copy you provide.</p>
                        <p>We design promotional eDMs (electronic direct mail) for product launches, sales events, seasonal promotions, and special offers. These are high-impact, conversion-focused emails designed to drive a specific action — clicking through to a product page, redeeming a discount code, registering for an event. We design these with a clear visual hierarchy that guides the reader&apos;s eye to the call to action.</p>
                        <p>We also design welcome email sequences for new subscribers — the first impression your brand makes in the inbox. A well-designed welcome series sets the tone for the subscriber relationship, communicates your brand values, and guides new subscribers to the content and products most relevant to them. This is one of the highest-engagement email sequences you can send, and it deserves careful design attention.</p>
                        <p>All our email templates are delivered as production-ready HTML files that can be imported directly into your email marketing platform — Mailchimp, Klaviyo, Campaign Monitor, HubSpot, or any other major platform. We test all templates across email clients before delivery to ensure they render correctly.</p>
                        <p>Contact 012 Agency today to discuss your email newsletter design needs. Whether you need a single template or ongoing design support, we deliver emails that your subscribers will open, read, and act on.</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">Newsletter Design Services</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">From one-off templates to ongoing monthly newsletter design — we have you covered.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {newsletterServices.map((s) => (
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
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">Ready to Upgrade Your Email Marketing?</h2>
                    <p className="text-neutral-400 text-lg mb-8">Get a professionally designed newsletter template that makes your brand shine in every inbox.</p>
                    <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105 inline-block">Get Your Newsletter Template</Link>
                    <div className="mt-10 pt-10 border-t border-white/10 text-neutral-500 text-sm">
                        <p>012 Agency — Park Lane West Building, 194 Bancor Ave, Waterkloof Glen, Pretoria, 0181</p>
                        <p className="mt-1">📞 +27 (0)62 369 3769 &nbsp;|&nbsp; ✉ info@012agency.co.za</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
