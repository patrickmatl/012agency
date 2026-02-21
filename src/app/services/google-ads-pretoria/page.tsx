'use client';

import { motion } from 'framer-motion';

import RelatedServices from '@/components/RelatedServices';

import { serviceFAQs } from '@/data/serviceFAQs';
import Link from 'next/link';

const GoogleAdsPage = () => {


  const relatedServices = [
    {
      title: 'SEO Services',
      href: '/services/seo',
      description: 'Search engine optimization services',
      anchor: 'SEO'
    },
    {
      title: 'Social Media Marketing',
      href: '/services/social-media',
      description: 'Social media marketing and management',
      anchor: 'Social Media'
    },
    {
      title: 'Website Design',
      href: '/services/website-design-pretoria',
      description: 'Custom website design services',
      anchor: 'Web Design'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch for Google Ads management.',
      href: '/get-in-touch-pretoria',
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
            name: 'Google Ads Management Pretoria',
            description:
              'Google Ads management services in Pretoria by 012 Agency. Structured PPC campaigns, landing pages and tracking to drive qualified leads.',
            url: 'https://012agency.co.za/services/google-ads-pretoria',
            serviceType: 'Google Ads management',
            category: 'Digital marketing services',
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
              Google Ads campaigns that actually move the needle
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              Instead of guessing with boosted posts or scattered ads, we build tightly structured Google Ads campaigns that focus on high‑intent Pretoria searches ready to convert today.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              From keyword research and ad copy to landing pages and tracking, every part of your funnel is aligned so you pay for the right clicks, not just more traffic.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              You get transparent reporting, clear recommendations and a performance partner who actively looks for ways to reduce wasted spend and increase qualified leads.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Full‑funnel strategy
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Search, display and remarketing work together to capture demand at every stage of the buyer journey.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                High‑intent local keywords
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                We prioritise Pretoria and South African searches that are more likely to become real enquiries and sales.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Landing pages that convert
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Strong offers, clear forms and trust elements give visitors a reason to enquire the moment they land.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Ongoing optimisation
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                We review search terms, bids and creatives regularly so your account keeps improving month after month.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* BEGIN: Visually Hidden SEO Headings H1-H5 for Google Ads Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h2 className="text-3xl font-bold text-white mt-12 mb-6 font-syne">Google Ads Management in Pretoria | 012 Agency</h2>
        <p className="leading-relaxed text-lg mb-4">012 Agency is Pretoria’s trusted Google Ads agency, driving targeted traffic and conversions with expertly managed PPC campaigns for local businesses.</p>
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Pretoria’s Leading Google Ads Agency</h3>
        <p className="leading-relaxed text-lg mb-4">Our Pretoria-based team creates, manages, and optimizes Google Ads campaigns for maximum ROI. We help Pretoria companies grow with data-driven SEM strategies.</p>
        <h4 className="text-xl font-bold text-white mt-6 mb-3">PPC & SEM Services for Pretoria Businesses</h4>
        <p className="leading-relaxed text-lg mb-4">From search to display and shopping ads, we deliver measurable results for Pretoria clients using advanced targeting, creative ad copy, and conversion tracking.</p>
        <h5 className="text-lg font-bold text-[#FFD700] mt-4 mb-2">Affordable Google Ads Packages in Pretoria</h5>
        <p className="leading-relaxed text-lg mb-4">Choose from starter to enterprise packages with transparent pricing and expert support for Pretoria SMEs and corporates.</p>
        <h5>Why Choose 012 Agency for Google Ads in Pretoria?</h5>
        <p className="leading-relaxed text-lg mb-4">Local expertise, certified professionals, and a proven track record. 012 Agency is Pretoria’s go-to partner for Google Ads success.</p>
      </section>
      {/* END: Visually Hidden SEO Headings H1-H5 for Google Ads Pretoria */}
      {/* BEGIN: Visually Hidden Google Ads FAQ for Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Frequently Asked Questions about Google Ads in Pretoria</h3>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What is Google Ads management?</h4><p className="leading-relaxed text-lg mb-4">Google Ads management is the process of creating, optimizing, and monitoring paid search campaigns to drive targeted traffic and leads for Pretoria businesses.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How much does Google Ads management cost in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">012 Agency offers Google Ads packages starting from R4,850/month, plus recommended ad spend. Pricing depends on package and campaign complexity.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What types of Google Ads do you manage?</h4><p className="leading-relaxed text-lg mb-4">We manage search, display, shopping, and remarketing campaigns for Pretoria businesses across all industries.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Is Google Ads effective for Pretoria businesses?</h4><p className="leading-relaxed text-lg mb-4">Yes! Google Ads delivers instant visibility and qualified leads for Pretoria companies looking to grow online.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you provide landing page design?</h4><p className="leading-relaxed text-lg mb-4">Yes, we design high-converting landing pages tailored to your Pretoria campaigns for better results.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you track conversions?</h4><p className="leading-relaxed text-lg mb-4">Absolutely. We set up conversion tracking and provide detailed monthly reports for Pretoria clients.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you manage shopping campaigns?</h4><p className="leading-relaxed text-lg mb-4">Yes, we set up and optimize Google Shopping campaigns for Pretoria e-commerce businesses.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How soon will I see results?</h4><p className="leading-relaxed text-lg mb-4">Most Pretoria clients see initial results within the first month, with ongoing optimization improving performance over time.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer support?</h4><p className="leading-relaxed text-lg mb-4">All packages include email or priority support for Pretoria clients, plus regular strategy calls or meetings.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Which areas of Pretoria do you serve?</h4><p className="leading-relaxed text-lg mb-4">We serve all of Pretoria and nearby regions, including Centurion, Hatfield, Brooklyn, Pretoria East, and more.</p></div>
      </section>
      {/* END: Visually Hidden Google Ads FAQ for Pretoria */}
      {/* BEGIN: FAQPage Structured Data for Google Ads Pretoria */}
      <script type="application/ld+json" suppressHydrationWarning>
        {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Google Ads management?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Google Ads management is the process of creating, optimizing, and monitoring paid search campaigns to drive targeted traffic and leads for Pretoria businesses."
              }
            },
            {
              "@type": "Question",
              "name": "How much does Google Ads management cost in Pretoria?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "012 Agency offers Google Ads packages starting from R4,850/month, plus recommended ad spend. Pricing depends on package and campaign complexity."
              }
            },
            {
              "@type": "Question",
              "name": "What types of Google Ads do you manage?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We manage search, display, shopping, and remarketing campaigns for Pretoria businesses across all industries."
              }
            },
            {
              "@type": "Question",
              "name": "Is Google Ads effective for Pretoria businesses?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Google Ads delivers instant visibility and qualified leads for Pretoria companies looking to grow online."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide landing page design?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we design high-converting landing pages tailored to your Pretoria campaigns for better results."
              }
            },
            {
              "@type": "Question",
              "name": "Can you track conversions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We set up conversion tracking and provide detailed monthly reports for Pretoria clients."
              }
            },
            {
              "@type": "Question",
              "name": "Do you manage shopping campaigns?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we set up and optimize Google Shopping campaigns for Pretoria e-commerce businesses."
              }
            },
            {
              "@type": "Question",
              "name": "How soon will I see results?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most Pretoria clients see initial results within the first month, with ongoing optimization improving performance over time."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer support?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All packages include email or priority support for Pretoria clients, plus regular strategy calls or meetings."
              }
            },
            {
              "@type": "Question",
              "name": "Which areas of Pretoria do you serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve all of Pretoria and nearby regions, including Centurion, Hatfield, Brooklyn, Pretoria East, and more."
              }
            }
          ]
        }
        `}
      </script>
      {/* END: FAQPage Structured Data for Google Ads Pretoria */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Ad Packages */}
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Get a Custom Google Ads Quote</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Need a specific ad spend managed or a custom strategy? Use our calculator to get an instant estimate.
          </p>
          <Link href="/quote" className="inline-block bg-[#FFD700] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#FFE44D] transition-colors">
            Calculate Your Quote
          </Link>
        </div>



        {/* FAQ Section */}
        <section className="py-20 bg-neutral-800 rounded-lg mt-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {serviceFAQs['google-ads']?.map((faq, index) => (
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
            currentService="google-ads"
            services={relatedServices}
          />
        </div>
        {/* Contextual link to homepage with varied phrasing */}
        <div className="mt-10 text-center">
          <p className="text-neutral-400 text-sm">
            Learn about our <Link href="/" className="text-[#FFD700] hover:underline">graphic design agency Pretoria</Link> on the homepage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoogleAdsPage;
