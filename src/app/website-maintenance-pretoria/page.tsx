import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Website Maintenance & Support Pretoria | Updates & Security | 012 Agency',
    description: 'Reliable website maintenance packages in Pretoria. We keep your site secure, updated, and fast with regular backups, plugin updates, and content additions.',
    alternates: {
        canonical: 'https://012agency.co.za/website-maintenance-pretoria',
    },
    openGraph: {
        url: 'https://012agency.co.za/website-maintenance-pretoria',
        title: 'Website Maintenance & Support Pretoria | Updates & Security | 012 Agency',
        description: 'Don\'t let a hacked site destroy your business. Professional maintenance services to keep you online.',
        images: [
            {
                url: 'https://012agency.co.za/images/website-maintenance-pretoria.jpg',
                width: 1200,
                height: 630,
                alt: 'Engineer monitoring server uptime',
            },
        ],
    },
};

export default function WebsiteMaintenancePretoria() {
    return (
        <div className="bg-zinc-950 min-h-screen text-white pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-4xl">

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Service',
                            name: 'Website Maintenance Pretoria',
                            description:
                                'Website maintenance and support services in Pretoria by 012 Agency. Security, updates, backups and performance optimisation for business sites.',
                            url: 'https://012agency.co.za/website-maintenance-pretoria',
                            serviceType: 'Website maintenance',
                            category: 'Website maintenance services',
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

                <header className="mb-16 text-center">
                    <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                        Stress-Free <span className="text-[#FFD700]">Website Maintenance Pretoria</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Your website is a living asset, not a static brochure. We handle the technical headaches so you can focus on running your business. Secure, fast, and always online.
                    </p>
                </header>

                {/* Main Content */}
                <article className="prose prose-invert prose-lg max-w-none space-y-12">

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">The Hidden Risks of Neglecting Your Website</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            Launching a website is just the beginning. Without regular care, software becomes outdated, security vulnerabilities open up, and performance degrades. A single missed plugin update can crash your entire site or leave customer data exposed to hackers. In fact, 60% of small businesses close within six months of a cyberattack.
                        </p>
                        <p className="text-zinc-300 leading-relaxed">
                            At 012 Agency, we serve as your digital insurance policy. Our <strong>website maintenance packages</strong> provide peace of mind by proactively managing your site's health. We monitor uptime, scan for malware, and fix issues before you even know they exist. Your reputation is too valuable to leave to chance.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">What Our Maintenance Plans Include</h2>
                        <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">1. Core, Theme & Plugin Updates</h3>
                        <p className="text-zinc-300 leading-relaxed">
                            Software developers constantly release updates to fix bugs and patch security holes. We test these updates in a staging environment before applying them to your live site, ensuring compatibility. No more "white screen of death" after hitting the update button yourself.
                        </p>

                        <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">2. Daily Cloud Backups</h3>
                        <p className="text-zinc-300 leading-relaxed">
                            Imagine waking up to find your website deleted. It happens more often than you think due to server errors or malicious attacks. We perform daily, encrypted backups of your entire site and store them off-site. If disaster strikes, we can restore your business to full functionality in minutes, minimizing downtime and revenue loss.
                        </p>

                        <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">3. Security Monitoring & Malware Removal</h3>
                        <p className="text-zinc-300 leading-relaxed">
                            Our security systems scan your site 24/7 for suspicious activity. If a threat is detected, our team intervenes immediately to neutralize it. We implement firewalls, limit login attempts, and block bad bots from wasting your server resources. We keep the bad guys out so your customers feel safe coming in.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Beyond Maintenance: Continuous Improvement</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            Maintenance isn't just about preventing problems; it's about optimizing performance. We regularly audit your site speed, optimizing images and databases to ensure lightning-fast load times. Google favors fast sites, so our maintenance services directly contribute to better SEO rankings.
                        </p>
                        <p className="text-zinc-300 leading-relaxed">
                            Need to add a new testimonial, change a phone number, or upload a blog post? Our maintenance clients enjoy priority support for content updates. Think of us as your in-house web team, available at a fraction of the cost of hiring a full-time developer.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Why DIY Maintenance Is a Bad Idea</h2>
                        <ul className="list-disc pl-6 text-zinc-300 space-y-2">
                            <li><strong>Time Drain:</strong> Troubleshooting technical issues takes focus away from your core business.</li>
                            <li><strong>Technical Expertise:</strong> Do you know how to fix a PHP conflict? We do.</li>
                            <li><strong>Costly Mistakes:</strong> Developing a fix for a broken site is far more expensive than a monthly maintenance fee.</li>
                            <li><strong>False Security:</strong> Installing a security plugin isn't enough; you need expert configuration.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Protect Your Investment</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            You've invested time and money into building a professional website. Don't let it rot on the vine. Partner with the experts in <strong>Website Maintenance Pretoria</strong> to ensure your digital storefront is always open, secure, and ready for business.
                        </p>
                        <p className="text-zinc-300 leading-relaxed">
                            From small blogs to large e-commerce stores, we have a plan that fits your needs. Contact 012 Agency today to secure your website's future.
                        </p>
                    </section>

                </article>
            </div>
        </div>
    );
}
