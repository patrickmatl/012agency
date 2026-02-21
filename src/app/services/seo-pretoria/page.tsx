'use client';


import RelatedServices from '@/components/RelatedServices';
import GetInTouchButton from '@/components/GetInTouchButton';
import Link from 'next/link';

export default function SEOPage() {




  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'SEO Pretoria',
            description:
              'SEO services in Pretoria by 012 Agency. Local SEO, technical optimisation and content strategies that turn searches into enquiries.',
            url: 'https://012agency.co.za/services/seo-pretoria',
            serviceType: 'Search engine optimisation',
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
      <section className="w-full px-4 md:px-8 pt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-syne font-bold mb-6 text-[#FFD700]">
              SEO that turns Pretoria searches into real enquiries
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              Ranking is only half the story. We design SEO strategies that connect your business with the right local searches and lead visitors straight into clear calls‑to‑action.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              Technical foundations, content and local optimisation work together so your website loads quickly, reads clearly and answers the questions your market is actually asking.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              You get a balanced approach: long‑term organic growth with tangible short‑term wins, backed by transparent reporting and strategy sessions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Local Pretoria visibility
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                We focus on local keywords, map visibility and location pages so nearby customers find you first.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Technical clean‑up
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Site speed, crawlability and structure are audited and improved so search engines can understand your site easily.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Content that builds trust
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Helpful, well‑structured content answers real questions and positions you as the expert in your niche.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Clear reporting
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Simple dashboards show rankings, traffic and leads so you always know what SEO is delivering.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* BEGIN: Visually Hidden SEO Headings H1-H5 for SEO Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h2 className="text-3xl font-bold text-white mt-12 mb-6 font-syne">Pretoria SEO Services | 012 Agency</h2>
        <p className="leading-relaxed text-lg mb-4">012 Agency provides expert SEO services in Pretoria, helping businesses achieve higher search engine rankings and increased organic traffic. Our Pretoria SEO specialists use proven strategies tailored to your industry and target audience.</p>
        <p className="leading-relaxed text-lg mb-4">From keyword research to technical optimization, we deliver comprehensive SEO solutions that drive real results for Pretoria companies of all sizes.</p>
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Leading SEO Agency in Pretoria</h3>
        <p className="leading-relaxed text-lg mb-4">As a top-rated SEO agency in Pretoria, we combine data-driven insights with creative content strategies to boost your online visibility. Our team stays updated with the latest search engine algorithms and best practices to keep your website ahead of the competition.</p>
        <p className="leading-relaxed text-lg mb-4">We work closely with Pretoria businesses to develop custom SEO campaigns that align with your goals and deliver measurable ROI.</p>
        <h4 className="text-xl font-bold text-white mt-6 mb-3">Custom SEO Solutions for Pretoria Businesses</h4>
        <p className="leading-relaxed text-lg mb-4">Our SEO packages in Pretoria are designed to meet the unique needs of local businesses, e-commerce stores, and enterprises. We offer on-page, off-page, and technical SEO to ensure your website performs at its best.</p>
        <p className="leading-relaxed text-lg mb-4">Whether you need local SEO, content optimization, or advanced analytics, our Pretoria SEO experts have you covered from start to finish.</p>
        <h5 className="text-lg font-bold text-[#FFD700] mt-4 mb-2">Affordable SEO Packages in Pretoria</h5>
        <p className="leading-relaxed text-lg mb-4">Choose from essential, professional, or enterprise SEO packages, all with transparent pricing and no hidden fees. Our Pretoria clients benefit from flexible options, monthly reporting, and ongoing support.</p>
        <p className="leading-relaxed text-lg mb-4">We believe in making high-quality SEO accessible to businesses of all sizes throughout Pretoria and beyond.</p>
        <h5>Why Choose 012 Agency for SEO in Pretoria?</h5>
        <p className="leading-relaxed text-lg mb-4">012 Agency is trusted by Pretoria businesses for our results-driven approach, technical expertise, and commitment to client success. Our SEO team has a proven track record of delivering top rankings and increased leads.</p>
        <p className="leading-relaxed text-lg mb-4">We prioritize long-term growth, ethical SEO practices, and transparent communication with all our Pretoria clients.</p>
      </section>
      {/* END: Visually Hidden SEO Headings H1-H5 for SEO Pretoria */}
      {/* BEGIN: Visually Hidden SEO FAQ for Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Frequently Asked Questions about SEO in Pretoria</h3>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What is SEO and why is it important for Pretoria businesses?</h4><p className="leading-relaxed text-lg mb-4">SEO (Search Engine Optimization) improves your website’s visibility on search engines like Google, helping Pretoria businesses attract more organic traffic.</p><p className="leading-relaxed text-lg mb-4">Higher rankings mean more potential customers find your products or services online, leading to increased leads and sales.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How long does it take to see SEO results?</h4><p className="leading-relaxed text-lg mb-4">SEO is a long-term investment; most Pretoria clients see noticeable improvements within 3–6 months, depending on competition and website history.</p><p className="leading-relaxed text-lg mb-4">Ongoing optimization is essential for maintaining and growing your rankings over time.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What SEO services do you offer in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">We offer keyword research, on-page SEO, technical optimization, content creation, link building, local SEO, and more for Pretoria businesses.</p><p className="leading-relaxed text-lg mb-4">Our packages are tailored to your goals, industry, and target audience.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you guarantee first-page rankings?</h4><p className="leading-relaxed text-lg mb-4">No ethical SEO agency can guarantee specific rankings, as search algorithms are constantly changing.</p><p className="leading-relaxed text-lg mb-4">However, we use proven strategies to maximize your chances of achieving top positions in Pretoria search results.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you help with local SEO in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, we specialize in local SEO strategies to help Pretoria businesses appear in local search results and Google Maps.</p><p className="leading-relaxed text-lg mb-4">This includes optimizing your Google Business Profile, local citations, and location-specific content.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How do you measure SEO success?</h4><p className="leading-relaxed text-lg mb-4">We track rankings, organic traffic, leads, and conversions for Pretoria clients using advanced analytics tools.</p><p className="leading-relaxed text-lg mb-4">Monthly reports keep you informed about progress and ROI.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Is SEO a one-time service?</h4><p className="leading-relaxed text-lg mb-4">SEO is an ongoing process. Search engines and competitors are always evolving, so continuous optimization is required for Pretoria businesses to maintain top rankings.</p><p className="leading-relaxed text-lg mb-4">We offer monthly packages for sustained growth and success.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you optimize my existing website?</h4><p className="leading-relaxed text-lg mb-4">Absolutely! We audit and optimize existing websites for Pretoria clients, improving site structure, speed, content, and technical elements.</p><p className="leading-relaxed text-lg mb-4">This helps boost your rankings and user experience.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you work with all business sizes?</h4><p className="leading-relaxed text-lg mb-4">Yes, we provide SEO solutions for Pretoria startups, SMEs, and large enterprises across all industries.</p><p className="leading-relaxed text-lg mb-4">Our flexible packages ensure every business can benefit from effective SEO.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Which areas of Pretoria do you serve?</h4><p className="leading-relaxed text-lg mb-4">We serve all of Pretoria and surrounding regions, including Centurion, Hatfield, Brooklyn, Pretoria East, and more.</p><p className="leading-relaxed text-lg mb-4">Remote consultations and digital reporting are available for your convenience.</p></div>
      </section>
      {/* END: Visually Hidden SEO FAQ for Pretoria */}
      {/* BEGIN: FAQPage Structured Data for SEO Pretoria */}
      <script type="application/ld+json" suppressHydrationWarning>
        {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is SEO and why is it important for Pretoria businesses?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SEO (Search Engine Optimization) improves your website’s visibility on search engines like Google, helping Pretoria businesses attract more organic traffic. Higher rankings mean more potential customers find your products or services online, leading to increased leads and sales."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to see SEO results?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SEO is a long-term investment; most Pretoria clients see noticeable improvements within 3–6 months, depending on competition and website history. Ongoing optimization is essential for maintaining and growing your rankings over time."
              }
            },
            {
              "@type": "Question",
              "name": "What SEO services do you offer in Pretoria?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer keyword research, on-page SEO, technical optimization, content creation, link building, local SEO, and more for Pretoria businesses. Our packages are tailored to your goals, industry, and target audience."
              }
            },
            {
              "@type": "Question",
              "name": "Do you guarantee first-page rankings?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No ethical SEO agency can guarantee specific rankings, as search algorithms are constantly changing. However, we use proven strategies to maximize your chances of achieving top positions in Pretoria search results."
              }
            },
            {
              "@type": "Question",
              "name": "Can you help with local SEO in Pretoria?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we specialize in local SEO strategies to help Pretoria businesses appear in local search results and Google Maps. This includes optimizing your Google Business Profile, local citations, and location-specific content."
              }
            },
            {
              "@type": "Question",
              "name": "How do you measure SEO success?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We track rankings, organic traffic, leads, and conversions for Pretoria clients using advanced analytics tools. Monthly reports keep you informed about progress and ROI."
              }
            },
            {
              "@type": "Question",
              "name": "Is SEO a one-time service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SEO is an ongoing process. Search engines and competitors are always evolving, so continuous optimization is required for Pretoria businesses to maintain top rankings. We offer monthly packages for sustained growth and success."
              }
            },
            {
              "@type": "Question",
              "name": "Can you optimize my existing website?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! We audit and optimize existing websites for Pretoria clients, improving site structure, speed, content, and technical elements. This helps boost your rankings and user experience."
              }
            },
            {
              "@type": "Question",
              "name": "Do you work with all business sizes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide SEO solutions for Pretoria startups, SMEs, and large enterprises across all industries. Our flexible packages ensure every business can benefit from effective SEO."
              }
            },
            {
              "@type": "Question",
              "name": "Which areas of Pretoria do you serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve all of Pretoria and surrounding regions, including Centurion, Hatfield, Brooklyn, Pretoria East, and more. Remote consultations and digital reporting are available for your convenience."
              }
            }
          ]
        }
        `}
      </script>
      {/* END: FAQPage Structured Data for SEO Pretoria */}
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm px-4 md:px-8 pb-16 mt-12">

        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Looking for a Custom SEO Strategy?</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Every website is different. Get a tailored quote for your specific SEO needs.
          </p>
          <Link href="/quote" className="inline-block bg-[#FFD700] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#FFE44D] transition-colors">
            Calculate Your Quote
          </Link>
        </div>



        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#FFD700]">Our SEO Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Research & Analysis</h3>
              <ul className="space-y-2 text-white/60">
                <li className="text-neutral-300">• Keyword research</li>
                <li className="text-neutral-300">• Competitor analysis</li>
                <li className="text-neutral-300">• Technical site audit</li>
                <li className="text-neutral-300">• Content gap analysis</li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">On-Page Optimization</h3>
              <ul className="space-y-2 text-white/60">
                <li className="text-neutral-300">• Meta optimization</li>
                <li className="text-neutral-300">• Content optimization</li>
                <li className="text-neutral-300">• Internal linking</li>
                <li className="text-neutral-300">• Schema markup</li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Technical SEO</h3>
              <ul className="space-y-2 text-white/60">
                <li className="text-neutral-300">• Site speed optimization</li>
                <li className="text-neutral-300">• Mobile optimization</li>
                <li className="text-neutral-300">• Indexing optimization</li>
                <li className="text-neutral-300">• Security implementation</li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Ongoing Optimization</h3>
              <ul className="space-y-2 text-white/60">
                <li className="text-neutral-300">• Performance monitoring</li>
                <li className="text-neutral-300">• Content updates</li>
                <li className="text-neutral-300">• Link building</li>
                <li className="text-neutral-300">• Strategy refinement</li>
              </ul>
            </div>
          </div>
        </section>

        <GetInTouchButton />

        <RelatedServices
          currentService="SEO Services"
          services={[
            {
              title: 'Content Marketing',
              description: 'Engage your audience with high-quality, SEO-optimized content.',
              href: '/services/content-marketing',
              anchor: 'View Content Marketing'
            },
            {
              title: 'Google Ads',
              description: 'Drive targeted traffic and leads with Google Ads campaigns.',
              href: '/services/google-ads',
              anchor: 'View Google Ads'
            },
            {
              title: 'Website Design',
              description: 'Create a modern, SEO-friendly website that converts.',
              href: '/services/website-design-pretoria',
              anchor: 'View Website Design'
            },
            {
              title: 'Contact Us',
              description: 'Get in touch for a custom SEO strategy.',
              href: '/get-in-touch-pretoria',
              anchor: 'Contact Us'
            }
          ]}
        />
        {/* Contextual link to homepage with varied phrasing */}
        <div className="max-w-4xl mx-auto px-4 text-center mt-6">
          <p className="text-neutral-400 text-sm">
            Learn more about our <Link href="/" className="text-[#FFD700] hover:underline">Pretoria SEO agency</Link> on the homepage.
          </p>
        </div>
      </div>
    </main>
  );
}
