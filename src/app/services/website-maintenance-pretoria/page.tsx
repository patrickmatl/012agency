'use client';

import { motion } from 'framer-motion';

import RelatedServices from '@/components/RelatedServices';

import { serviceFAQs } from '@/data/serviceFAQs';
import Link from 'next/link';

const WebsiteMaintenancePage = () => {


  const relatedServices = [
    {
      title: 'Website Design',
      href: '/services/website-design-pretoria',
      description: 'Custom website design services',
      anchor: 'Website Design'
    },
    {
      title: 'SEO Services',
      href: '/services/seo-pretoria',
      description: 'Search engine optimization services',
      anchor: 'SEO'
    },
    {
      title: 'Website Security',
      href: '/services/website-security',
      description: 'Website security and protection services',
      anchor: 'Security'
    },
    {
      title: 'Contact Us',
      href: '/get-in-touch-pretoria',
      description: 'Get in touch with us for any inquiries or questions',
      anchor: 'Contact Us'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Website Maintenance Pretoria',
            description:
              'Website maintenance services in Pretoria by 012 Agency. Security, updates, performance optimisation and content changes with clear monthly packages.',
            url: 'https://012agency.co.za/services/website-maintenance-pretoria',
            serviceType: 'Website maintenance',
            category: 'Web maintenance services',
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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-syne font-bold mb-6 text-[#FFD700]">
              Ongoing website care, without the headaches
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              A great website is only valuable if it stays fast, secure and up to date. We handle the technical workload so your Pretoria team can focus on running the business, not chasing broken plugins.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              From backups and security monitoring to content updates and small design tweaks, your site is actively looked after by a team that knows how it was built and what it needs to perform.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              You get predictable maintenance packages, clear communication and a partner who treats your site like a long‑term asset, not a one‑off project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Security and monitoring
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Regular updates, security checks and uptime monitoring keep your site stable and protected.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Content and design updates
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Need a new page, banner or image swap? Send it through and our team implements it for you.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Performance optimisation
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Ongoing speed and optimisation work keeps your site fast for visitors and search engines.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Clear monthly reporting
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Simple summaries show what was updated, improved and monitored each month.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* BEGIN: Visually Hidden SEO Headings H1-H5 for Website Maintenance Pretoria */}
        <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
          <h2 className="text-3xl font-bold text-white mt-12 mb-6 font-syne">Pretoria Website Maintenance Services | 012 Agency</h2>
          <p className="leading-relaxed text-lg mb-4">012 Agency provides professional website maintenance services in Pretoria, ensuring your site remains secure, up-to-date, and fully optimized. Our Pretoria maintenance team handles everything from software updates to performance checks, so you can focus on your business.</p>
          <p className="leading-relaxed text-lg mb-4">With proactive monitoring and fast support, we help Pretoria businesses prevent downtime, improve user experience, and safeguard their online presence.</p>
          <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Leading Website Maintenance Agency in Pretoria</h3>
          <p className="leading-relaxed text-lg mb-4">As a trusted website maintenance agency in Pretoria, we combine technical expertise with responsive service to deliver reliable results. Our maintenance packages are designed to suit businesses of all sizes, from startups to enterprises.</p>
          <p className="leading-relaxed text-lg mb-4">We keep your Pretoria website running smoothly with regular backups, security monitoring, and ongoing performance optimization.</p>
          <h4 className="text-xl font-bold text-white mt-6 mb-3">Custom Website Maintenance Solutions for Pretoria Businesses</h4>
          <p className="leading-relaxed text-lg mb-4">Our Pretoria website maintenance solutions are tailored to your platform, traffic, and business needs. We offer essential, professional, and enterprise packages, each with a range of features and flexible support options.</p>
          <p className="leading-relaxed text-lg mb-4">From content updates to advanced security, our Pretoria team ensures your website remains competitive and compliant with industry standards.</p>
          <h5 className="text-lg font-bold text-[#FFD700] mt-4 mb-2">Affordable Website Maintenance Packages in Pretoria</h5>
          <p className="leading-relaxed text-lg mb-4">Choose from transparent, competitively priced maintenance packages for Pretoria businesses. We provide monthly reports, priority support, and no hidden fees, making quality website care accessible to all.</p>
          <p className="leading-relaxed text-lg mb-4">Our Pretoria clients benefit from peace of mind, knowing their website is in expert hands every day of the year.</p>
          <h5>Why Choose 012 Agency for Website Maintenance in Pretoria?</h5>
          <p className="leading-relaxed text-lg mb-4">012 Agency is renowned for reliability, technical skill, and customer service in Pretoria website maintenance. Our team has a proven record of preventing issues before they arise and delivering fast, effective solutions when needed.</p>
          <p className="leading-relaxed text-lg mb-4">We prioritize long-term partnerships, transparent communication, and measurable results for all our Pretoria website maintenance clients.</p>
        </section>
        {/* END: Visually Hidden SEO Headings H1-H5 for Website Maintenance Pretoria */}
        {/* BEGIN: Visually Hidden Website Maintenance FAQ for Pretoria */}
        <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
          <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Frequently Asked Questions about Website Maintenance in Pretoria</h3>
          <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What is included in your website maintenance services?</h4><p className="leading-relaxed text-lg mb-4">Our Pretoria website maintenance covers software updates, security monitoring, backups, performance optimization, and content updates.</p><p className="leading-relaxed text-lg mb-4">We offer different packages to suit the needs and budgets of all Pretoria businesses.</p></div>
          <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How often do you perform updates and backups?</h4><p className="leading-relaxed text-lg mb-4">Depending on your package, we perform updates and backups monthly, weekly, or even hourly for Pretoria clients.</p><p className="leading-relaxed text-lg mb-4">Regular maintenance ensures your website is always secure and running smoothly.</p></div>
          <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer emergency website support?</h4><p className="leading-relaxed text-lg mb-4">Yes, our Pretoria team provides emergency support for urgent issues, including downtime, security breaches, and technical failures.</p><p className="leading-relaxed text-lg mb-4">Enterprise clients receive 24/7 priority assistance for critical incidents.</p></div>
          <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you maintain websites built on any platform?</h4><p className="leading-relaxed text-lg mb-4">We support all major platforms, including WordPress, Shopify, custom CMS, and more for Pretoria businesses.</p><p className="leading-relaxed text-lg mb-4">Our team is experienced with a wide range of technologies and frameworks.</p></div>
          <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How do you keep my website secure?</h4><p className="leading-relaxed text-lg mb-4">We implement advanced security monitoring, SSL management, and regular vulnerability scans for Pretoria websites.</p><p className="leading-relaxed text-lg mb-4">Proactive measures help prevent hacks, malware, and data breaches.</p></div>
          <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Is website maintenance necessary for small businesses?</h4><p className="leading-relaxed text-lg mb-4">Yes, regular maintenance is essential for all Pretoria businesses to prevent issues, improve performance, and protect customer data.</p><p className="leading-relaxed text-lg mb-4">We offer affordable packages tailored to small business needs.</p></div>
          <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you provide maintenance reports?</h4><p className="leading-relaxed text-lg mb-4">All Pretoria maintenance clients receive detailed monthly or real-time reports, depending on their package.</p><p className="leading-relaxed text-lg mb-4">Reports cover updates performed, security status, and recommendations for improvement.</p></div>
          <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you update my website content?</h4><p className="leading-relaxed text-lg mb-4">Yes, we handle content updates, image changes, and new page additions for Pretoria clients as part of our maintenance packages.</p><p className="leading-relaxed text-lg mb-4">Fast turnaround times ensure your website stays current and relevant.</p></div>
          <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer website optimization as part of maintenance?</h4><p className="leading-relaxed text-lg mb-4">Performance optimization, speed improvements, and SEO checks are included in our Pretoria website maintenance services.</p><p className="leading-relaxed text-lg mb-4">We help your website load faster and rank better in search engines.</p></div>
          <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Which areas of Pretoria do you serve?</h4><p className="leading-relaxed text-lg mb-4">We serve all of Pretoria and surrounding regions, including Centurion, Hatfield, Brooklyn, Pretoria East, and more.</p><p className="leading-relaxed text-lg mb-4">Remote consultations and digital support are available for your convenience.</p></div>
        </section>
        {/* END: Visually Hidden Website Maintenance FAQ for Pretoria */}
        {/* BEGIN: FAQPage Structured Data for Website Maintenance Pretoria */}
        <script type="application/ld+json" suppressHydrationWarning>
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is included in your website maintenance services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our Pretoria website maintenance covers software updates, security monitoring, backups, performance optimization, and content updates. We offer different packages to suit the needs and budgets of all Pretoria businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How often do you perform updates and backups?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Depending on your package, we perform updates and backups monthly, weekly, or even hourly for Pretoria clients. Regular maintenance ensures your website is always secure and running smoothly."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer emergency website support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our Pretoria team provides emergency support for urgent issues, including downtime, security breaches, and technical failures. Enterprise clients receive 24/7 priority assistance for critical incidents."
                }
              },
              {
                "@type": "Question",
                "name": "Can you maintain websites built on any platform?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We support all major platforms, including WordPress, Shopify, custom CMS, and more for Pretoria businesses. Our team is experienced with a wide range of technologies and frameworks."
                }
              },
              {
                "@type": "Question",
                "name": "How do you keep my website secure?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We implement advanced security monitoring, SSL management, and regular vulnerability scans for Pretoria websites. Proactive measures help prevent hacks, malware, and data breaches."
                }
              },
              {
                "@type": "Question",
                "name": "Is website maintenance necessary for small businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, regular maintenance is essential for all Pretoria businesses to prevent issues, improve performance, and protect customer data. We offer affordable packages tailored to small business needs."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide maintenance reports?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All Pretoria maintenance clients receive detailed monthly or real-time reports, depending on their package. Reports cover updates performed, security status, and recommendations for improvement."
                }
              },
              {
                "@type": "Question",
                "name": "Can you update my website content?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we handle content updates, image changes, and new page additions for Pretoria clients as part of our maintenance packages. Fast turnaround times ensure your website stays current and relevant."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer website optimization as part of maintenance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Performance optimization, speed improvements, and SEO checks are included in our Pretoria website maintenance services. We help your website load faster and rank better in search engines."
                }
              },
              {
                "@type": "Question",
                "name": "Which areas of Pretoria do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve all of Pretoria and surrounding regions, including Centurion, Hatfield, Brooklyn, Pretoria East, and more. Remote consultations and digital support are available for your convenience."
                }
              }
            ]
          }
          `}
        </script>
        {/* END: FAQPage Structured Data for Website Maintenance Pretoria */}
        {/* Maintenance Packages */}
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Calculate Your Maintenance Quote</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Need a specific maintenance plan? Use our calculator to get an instant estimate.
          </p>
          <Link href="/quote" className="inline-block bg-[#FFD700] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#FFE44D] transition-colors">
            Calculate Your Quote
          </Link>
        </div>

        {/* FAQ Section */}
        <section className="py-20 bg-neutral-800 rounded-lg">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {serviceFAQs['website-maintenance']?.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  className="bg-neutral-900 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-neutral-400">{faq.answer}</p>
                </motion.div>
              )) || []}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <div className="mt-20">
          <RelatedServices
            currentService="website-maintenance"
            services={relatedServices}
          />
        </div>
        {/* Contextual link to homepage with varied phrasing */}
        <div className="mt-10 text-center">
          <p className="text-neutral-400 text-sm">
            Meet our <Link href="/" className="text-[#FFD700] hover:underline">Pretoria graphic design company</Link> on the homepage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteMaintenancePage;
