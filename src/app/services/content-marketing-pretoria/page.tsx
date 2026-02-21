'use client';


import RelatedServices from '@/components/RelatedServices';
import GetInTouchButton from '@/components/GetInTouchButton';
import Link from 'next/link';

export default function ContentMarketingPage() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Content Marketing Pretoria',
            description:
              'Content marketing services in Pretoria by 012 Agency. Strategy, SEO content and campaigns that attract and convert.',
            url: 'https://012agency.co.za/services/content-marketing-pretoria',
            serviceType: 'Content marketing',
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
      {/* BEGIN: Visually Hidden SEO Headings H1-H5 for Content Marketing Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h2 className="text-3xl font-bold text-white mt-12 mb-6 font-syne">Content Marketing Services in Pretoria | 012 Agency</h2>
        <p className="leading-relaxed text-lg mb-4">012 Agency delivers strategic content marketing for Pretoria businesses, helping you attract, engage, and convert your ideal customers with SEO-optimized content.</p>
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Pretoria’s Leading Content Marketing Agency</h3>
        <p className="leading-relaxed text-lg mb-4">Our Pretoria team specializes in blog writing, content strategy, social media content, and lead generation. We help Pretoria companies build authority and drive results online.</p>
        <h4 className="text-xl font-bold text-white mt-6 mb-3">SEO Content & Blogging for Pretoria Businesses</h4>
        <p className="leading-relaxed text-lg mb-4">Boost your Pretoria website’s rankings with keyword-rich blog posts, landing pages, and content campaigns tailored to your audience and goals.</p>
        <h5 className="text-lg font-bold text-[#FFD700] mt-4 mb-2">Affordable Content Packages & Pricing in Pretoria</h5>
        <p className="leading-relaxed text-lg mb-4">Choose from monthly content packages or once-off services. Transparent pricing and measurable results for Pretoria startups, SMEs, and corporates.</p>
        <h5>Why Choose 012 Agency for Content Marketing in Pretoria?</h5>
        <p className="leading-relaxed text-lg mb-4">Local expertise, creative writers, and proven strategies. 012 Agency is Pretoria’s trusted partner for content that converts and grows your business.</p>
      </section>
      {/* END: Visually Hidden SEO Headings H1-H5 for Content Marketing Pretoria */}
      {/* BEGIN: Visually Hidden Content Marketing FAQ for Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Frequently Asked Questions about Content Marketing in Pretoria</h3>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What is content marketing?</h4><p className="leading-relaxed text-lg mb-4">Content marketing is a strategy focused on creating and distributing valuable, relevant content to attract and engage your target Pretoria audience, ultimately driving profitable customer action.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How much does content marketing cost in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">012 Agency offers content marketing packages starting from R3,850/month. Pricing depends on the number of blog posts, strategy, and additional services required.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What types of content do you create?</h4><p className="leading-relaxed text-lg mb-4">We create blog posts, website copy, social media content, email newsletters, lead magnets, infographics, and more for Pretoria businesses.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Is content marketing effective for Pretoria businesses?</h4><p className="leading-relaxed text-lg mb-4">Yes! Strategic content marketing improves SEO, builds brand authority, and generates leads for Pretoria companies across industries.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How long does it take to see results?</h4><p className="leading-relaxed text-lg mb-4">Content marketing is a long-term strategy. Most Pretoria clients see improved rankings, traffic, and engagement within 3–6 months.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer one-off content projects?</h4><p className="leading-relaxed text-lg mb-4">Yes, we offer single blog posts, content audits, and once-off campaigns for Pretoria businesses that need specific deliverables.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you help with content strategy?</h4><p className="leading-relaxed text-lg mb-4">Absolutely. We develop custom content strategies for Pretoria clients, including keyword research, content calendars, and performance tracking.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Is your content SEO-optimized?</h4><p className="leading-relaxed text-lg mb-4">All our content is optimized for Pretoria SEO best practices, including keyword usage, internal linking, and structure for higher rankings.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you provide reports?</h4><p className="leading-relaxed text-lg mb-4">Yes, monthly clients receive performance reports showing rankings, traffic, and content engagement for their Pretoria business.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Which areas of Pretoria do you serve?</h4><p className="leading-relaxed text-lg mb-4">We serve all of Pretoria and surrounding suburbs, including Centurion, Hatfield, Brooklyn, Pretoria East, and more.</p></div>
      </section>
      {/* END: Visually Hidden Content Marketing FAQ for Pretoria */}
      {/* BEGIN: FAQPage Structured Data for Content Marketing Pretoria */}
      <script type="application/ld+json" suppressHydrationWarning>
        {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is content marketing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Content marketing is a strategy focused on creating and distributing valuable, relevant content to attract and engage your target Pretoria audience, ultimately driving profitable customer action."
              }
            },
            {
              "@type": "Question",
              "name": "How much does content marketing cost in Pretoria?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "012 Agency offers content marketing packages starting from R3,850/month. Pricing depends on the number of blog posts, strategy, and additional services required."
              }
            },
            {
              "@type": "Question",
              "name": "What types of content do you create?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We create blog posts, website copy, social media content, email newsletters, lead magnets, infographics, and more for Pretoria businesses."
              }
            },
            {
              "@type": "Question",
              "name": "Is content marketing effective for Pretoria businesses?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Strategic content marketing improves SEO, builds brand authority, and generates leads for Pretoria companies across industries."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to see results?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Content marketing is a long-term strategy. Most Pretoria clients see improved rankings, traffic, and engagement within 3–6 months."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer one-off content projects?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer single blog posts, content audits, and once-off campaigns for Pretoria businesses that need specific deliverables."
              }
            },
            {
              "@type": "Question",
              "name": "Can you help with content strategy?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We develop custom content strategies for Pretoria clients, including keyword research, content calendars, and performance tracking."
              }
            },
            {
              "@type": "Question",
              "name": "Is your content SEO-optimized?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All our content is optimized for Pretoria SEO best practices, including keyword usage, internal linking, and structure for higher rankings."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide reports?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, monthly clients receive performance reports showing rankings, traffic, and content engagement for their Pretoria business."
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
      {/* END: FAQPage Structured Data for Content Marketing Pretoria */}
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm">

        <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-[#FFC000] to-[#FFB000] mt-8 mb-4">
          Content Marketing Services
        </h1>

        <p className="text-center text-xl mb-12 text-white/80">
          Engage your audience with high-quality, SEO-optimized content that drives results.
        </p>

        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Get a Custom Content Marketing Quote</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Need a specific content volume or strategy? Use our calculator to get an instant estimate.
          </p>
          <Link href="/quote" className="inline-block bg-[#FFD700] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#FFE44D] transition-colors">
            Calculate Your Quote
          </Link>
        </div>



        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#FFD700]">Our Content Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Research & Strategy</h3>
              <ul className="space-y-2 text-white/80">
                <li className="text-neutral-300">• Audience Analysis</li>
                <li className="text-neutral-300">• Competitor Research</li>
                <li className="text-neutral-300">• Keyword Research</li>
                <li className="text-neutral-300">• Content Gap Analysis</li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Content Creation</h3>
              <ul className="space-y-2 text-white/80">
                <li className="text-neutral-300">• SEO Optimization</li>
                <li className="text-neutral-300">• Engaging Writing</li>
                <li className="text-neutral-300">• Visual Elements</li>
                <li className="text-neutral-300">• Quality Assurance</li>
              </ul>
            </div>
          </div>
        </section>

        <RelatedServices
          currentService="Content Marketing"
          services={[
            {
              title: 'SEO Services',
              description: 'Improve your search engine rankings and drive organic traffic.',
              href: '/services/seo',
              anchor: 'View SEO Services'
            },
            {
              title: 'Email Marketing',
              description: 'Build lasting relationships with your audience through targeted campaigns.',
              href: '/services/email-marketing',
              anchor: 'View Email Marketing'
            }
          ]}
        />

        <div className="text-center mt-12">
          <GetInTouchButton />
        </div>
        {/* Contextual link to homepage with varied phrasing */}
        <div className="max-w-4xl mx-auto px-4 text-center mt-6">
          <p className="text-neutral-400 text-sm">
            Learn more about our <Link href="/" className="text-[#FFD700] hover:underline">Pretoria content marketing services</Link> on the homepage.
          </p>
        </div>
      </div>
    </main>
  );
}
