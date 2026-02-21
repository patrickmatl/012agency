'use client';


import RelatedServices from '@/components/RelatedServices';
import GetInTouchButton from '@/components/GetInTouchButton';
import Link from 'next/link';

export default function EmailMarketingPage() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Email Marketing Pretoria',
            description:
              'Email marketing services in Pretoria by 012 Agency. Campaigns, automation and analytics that drive engagement and revenue.',
            url: 'https://012agency.co.za/services/email-marketing-pretoria',
            serviceType: 'Email marketing',
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
              Email campaigns your audience actually wants to open
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              We design and write email campaigns that feel personal, on‑brand and valuable, not spammy. Every send has a clear purpose, from educating new subscribers to re‑activating past buyers.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              Your strategy covers newsletters, promotions and automated journeys, so the right message reaches the right person at the right moment in their customer journey.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              Thoughtful segmentation, clean layouts and strong calls‑to‑action help you turn a simple email list into a predictable revenue channel for your Pretoria business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Strategy and planning
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                We map welcome flows, nurture journeys and campaign schedules around your sales cycle and offers.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Copy and design
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Clear, persuasive copy and mobile‑first layouts keep readers engaged from subject line to button.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Automation and segmentation
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                We set up automated journeys and segmented lists so each subscriber receives relevant, timely content.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Clear performance insights
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Opens, clicks and revenue are tracked and reported so you can see exactly what email is delivering.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* BEGIN: Visually Hidden SEO Headings H1-H5 for Email Marketing Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h2 className="text-3xl font-bold text-white mt-12 mb-6 font-syne">Email Marketing Services in Pretoria | 012 Agency</h2>
        <p className="leading-relaxed text-lg mb-4">012 Agency helps Pretoria businesses grow with targeted, high-converting email marketing campaigns, automation, and analytics. Build lasting relationships and boost ROI with our expert team.</p>
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Pretoria’s Leading Email Marketing Agency</h3>
        <p className="leading-relaxed text-lg mb-4">Our Pretoria specialists design, write, and manage email campaigns that engage your audience and drive results. From newsletters to automation, we handle it all.</p>
        <h4 className="text-xl font-bold text-white mt-6 mb-3">Email Campaigns & Automation for Pretoria Businesses</h4>
        <p className="leading-relaxed text-lg mb-4">Reach your Pretoria customers with personalized, mobile-friendly emails, advanced segmentation, and data-driven strategies for maximum impact.</p>
        <h5 className="text-lg font-bold text-[#FFD700] mt-4 mb-2">Affordable Email Marketing Packages in Pretoria</h5>
        <p className="leading-relaxed text-lg mb-4">Choose from flexible monthly packages or once-off campaigns. Transparent pricing and measurable results for Pretoria startups, SMEs, and corporates.</p>
        <h5>Why Choose 012 Agency for Email Marketing in Pretoria?</h5>
        <p className="leading-relaxed text-lg mb-4">Local expertise, creative content, and proven strategies. 012 Agency is Pretoria’s trusted partner for email marketing that delivers real business growth.</p>
      </section>
      {/* END: Visually Hidden SEO Headings H1-H5 for Email Marketing Pretoria */}
      {/* BEGIN: Visually Hidden Email Marketing FAQ for Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Frequently Asked Questions about Email Marketing in Pretoria</h3>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What is email marketing?</h4><p className="leading-relaxed text-lg mb-4">Email marketing is the use of targeted emails to promote your Pretoria business, build relationships, and drive sales or engagement.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How much does email marketing cost in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">012 Agency offers email marketing packages starting from R2,850/month. Pricing depends on the number of campaigns, automation, and additional services.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What types of emails do you create?</h4><p className="leading-relaxed text-lg mb-4">We create newsletters, promotional campaigns, automated sequences, onboarding emails, and more for Pretoria businesses.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Is email marketing effective for Pretoria businesses?</h4><p className="leading-relaxed text-lg mb-4">Yes! Email marketing delivers high ROI and is one of the most effective channels for Pretoria companies to nurture leads and increase repeat business.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you set up automation?</h4><p className="leading-relaxed text-lg mb-4">Absolutely. We set up automated email workflows for Pretoria clients, including welcome series, abandoned cart, follow-ups, and more.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you provide reporting?</h4><p className="leading-relaxed text-lg mb-4">Yes, all packages include performance tracking and monthly reports for Pretoria clients, showing opens, clicks, and conversions.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you design custom templates?</h4><p className="leading-relaxed text-lg mb-4">Yes, we design branded, mobile-responsive email templates tailored to your Pretoria business and audience.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you comply with POPIA?</h4><p className="leading-relaxed text-lg mb-4">Yes, all our email marketing services for Pretoria businesses are POPIA-compliant and follow best practices for consent and data privacy.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer once-off campaigns?</h4><p className="leading-relaxed text-lg mb-4">Yes, we offer single campaign management and setup for Pretoria businesses that need a one-time email push.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Which areas of Pretoria do you serve?</h4><p className="leading-relaxed text-lg mb-4">We serve all of Pretoria and surrounding suburbs, including Centurion, Hatfield, Brooklyn, Pretoria East, and more.</p></div>
      </section>
      {/* END: Visually Hidden Email Marketing FAQ for Pretoria */}
      {/* BEGIN: FAQPage Structured Data for Email Marketing Pretoria */}
      <script type="application/ld+json" suppressHydrationWarning>
        {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is email marketing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Email marketing is the use of targeted emails to promote your Pretoria business, build relationships, and drive sales or engagement."
              }
            },
            {
              "@type": "Question",
              "name": "How much does email marketing cost in Pretoria?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "012 Agency offers email marketing packages starting from R2,850/month. Pricing depends on the number of campaigns, automation, and additional services."
              }
            },
            {
              "@type": "Question",
              "name": "What types of emails do you create?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We create newsletters, promotional campaigns, automated sequences, onboarding emails, and more for Pretoria businesses."
              }
            },
            {
              "@type": "Question",
              "name": "Is email marketing effective for Pretoria businesses?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Email marketing delivers high ROI and is one of the most effective channels for Pretoria companies to nurture leads and increase repeat business."
              }
            },
            {
              "@type": "Question",
              "name": "Can you set up automation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We set up automated email workflows for Pretoria clients, including welcome series, abandoned cart, follow-ups, and more."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide reporting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all packages include performance tracking and monthly reports for Pretoria clients, showing opens, clicks, and conversions."
              }
            },
            {
              "@type": "Question",
              "name": "Can you design custom templates?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we design branded, mobile-responsive email templates tailored to your Pretoria business and audience."
              }
            },
            {
              "@type": "Question",
              "name": "Do you comply with POPIA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all our email marketing services for Pretoria businesses are POPIA-compliant and follow best practices for consent and data privacy."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer once-off campaigns?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer single campaign management and setup for Pretoria businesses that need a one-time email push."
              }
            },
            {
              "@type": "Question",
              "name": "Which areas of Pretoria do you serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve all of Pretoria and surrounding suburbs, including Centurion, Hatfield, Brooklyn, Pretoria East, and more."
              }
            }
          ]
        }
        `}
      </script>
      {/* END: FAQPage Structured Data for Email Marketing Pretoria */}
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm px-4 md:px-8 pb-16 mt-12">

        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Get a Custom Email Marketing Quote</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Need a specific campaign volume or automation setup? Use our calculator to get an instant estimate.
          </p>
          <Link href="/quote" className="inline-block bg-[#FFD700] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#FFE44D] transition-colors">
            Calculate Your Quote
          </Link>
        </div>



        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#FFD700]">Our Email Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Strategy & Setup</h3>
              <ul className="space-y-2 text-white/80">
                <li className="text-neutral-300">• List Building</li>
                <li className="text-neutral-300">• Audience Segmentation</li>
                <li className="text-neutral-300">• Template Design</li>
                <li className="text-neutral-300">• Automation Planning</li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Execution & Analysis</h3>
              <ul className="space-y-2 text-white/80">
                <li className="text-neutral-300">• Campaign Creation</li>
                <li className="text-neutral-300">• A/B Testing</li>
                <li className="text-neutral-300">• Performance Tracking</li>
                <li className="text-neutral-300">• Optimization</li>
              </ul>
            </div>
          </div>
        </section>

        <RelatedServices
          currentService="Email Marketing"
          services={[
            {
              title: 'Content Marketing',
              description: 'Engage your audience with high-quality, SEO-optimized content.',
              href: '/services/content-marketing',
              anchor: 'View Content Marketing'
            },
            {
              title: 'SEO Services',
              description: 'Improve your search engine rankings and drive organic traffic.',
              href: '/services/seo',
              anchor: 'View SEO Services'
            }
          ]}
        />

        <div className="text-center mt-12">
          <GetInTouchButton />
        </div>

        {/* Contextual link to homepage with varied phrasing */}
        <div className="max-w-4xl mx-auto px-4 text-center mt-6">
          <p className="text-neutral-400 text-sm">
            Learn more about our <Link href="/" className="text-[#FFD700] hover:underline">Pretoria email marketing agency</Link> on the homepage.
          </p>
        </div>
      </div>
    </main>
  );
}
