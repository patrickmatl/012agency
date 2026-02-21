'use client';

import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import RelatedServices from '@/components/RelatedServices';
import GetInTouchButton from '@/components/GetInTouchButton';
import { serviceFAQs } from '@/data/serviceFAQs';
import Link from 'next/link';

const SocialMediaPage = () => {




  const platforms = [
    {
      name: "Instagram",
      icon: <FaCheck className="w-6 h-6" />,
      description: "Visual content and stories"
    },
    {
      name: "Facebook",
      icon: <FaCheck className="w-6 h-6" />,
      description: "Community engagement"
    },
    {
      name: "Twitter",
      icon: <FaCheck className="w-6 h-6" />,
      description: "Real-time updates"
    },
    {
      name: "LinkedIn",
      icon: <FaCheck className="w-6 h-6" />,
      description: "Professional networking"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Social Media Services Pretoria',
            description:
              'Social media services in Pretoria by 012 Agency. Strategy, content and management for consistent, on-brand growth.',
            url: 'https://012agency.co.za/services/social-media-pretoria',
            serviceType: 'Social media marketing',
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
      <section className="max-w-6xl mx-auto pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-syne font-bold mb-6 text-[#FFD700]">
              Social media that looks sharp and serves a clear purpose
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              We help Pretoria brands move beyond random posting and into a consistent, on‑brand presence that supports real business objectives: awareness, leads and loyalty.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              Your content calendar, visuals and copy are all aligned with a clear strategy, so every post knows exactly who it is talking to and what it should achieve.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              Whether you need once‑off templates or full monthly management, our team crafts feeds and stories that feel premium, professional and uniquely Pretoria.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Platform‑specific design
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Content is tailored for Instagram, Facebook, LinkedIn and more so each channel feels native, not copy‑pasted.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Strategy and content calendar
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                We map themes, pillars and posting rhythms so your audience always knows what to expect from you.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Campaign support
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Launches, promotions and events get dedicated creative that ties in with your wider marketing campaigns.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Reporting that makes sense
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Clear metrics highlight what content performs best, helping us refine the strategy every month.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* BEGIN: Visually Hidden SEO Headings H1-H5 for Social Media Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h2 className="text-3xl font-bold text-white mt-12 mb-6 font-syne">Pretoria Social Media Services | 012 Agency</h2>
        <p className="leading-relaxed text-lg mb-4">012 Agency delivers expert social media services in Pretoria, empowering businesses to build strong online communities and drive engagement across all major platforms. Our Pretoria social media team crafts tailored strategies that amplify your brand voice and increase your digital reach.</p>
        <p className="leading-relaxed text-lg mb-4">From profile setup to ongoing content creation, we help Pretoria businesses stand out with creative, consistent, and impactful social media campaigns.</p>
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Leading Social Media Agency in Pretoria</h3>
        <p className="leading-relaxed text-lg mb-4">As a top social media agency in Pretoria, we combine data-driven insights with creative storytelling to grow your audience and foster brand loyalty. Our Pretoria specialists stay ahead of trends, ensuring your social presence is fresh, relevant, and effective.</p>
        <p className="leading-relaxed text-lg mb-4">We provide end-to-end social media management, from strategy and design to analytics and optimization, for businesses of all sizes in Pretoria.</p>
        <h4 className="text-xl font-bold text-white mt-6 mb-3">Custom Social Media Solutions for Pretoria Businesses</h4>
        <p className="leading-relaxed text-lg mb-4">Our Pretoria social media packages are designed for startups, SMEs, and large enterprises, offering everything from post and story templates to full monthly management. We tailor every campaign to your goals and target audience.</p>
        <p className="leading-relaxed text-lg mb-4">Whether you need brand awareness, lead generation, or community engagement, our Pretoria team delivers measurable results on platforms like Facebook, Instagram, LinkedIn, and more.</p>
        <h5 className="text-lg font-bold text-[#FFD700] mt-4 mb-2">Affordable Social Media Packages in Pretoria</h5>
        <p className="leading-relaxed text-lg mb-4">Choose from a range of social media packages with transparent pricing and no hidden costs. Our Pretoria clients benefit from flexible options, monthly reports, and ongoing support for continuous growth.</p>
        <p className="leading-relaxed text-lg mb-4">We make professional social media management accessible to all Pretoria businesses, regardless of size or industry.</p>
        <h5>Why Choose 012 Agency for Social Media in Pretoria?</h5>
        <p className="leading-relaxed text-lg mb-4">012 Agency is trusted by Pretoria businesses for our creative approach, technical expertise, and dedication to client success. Our social media team has a proven record of increasing engagement, followers, and brand awareness.</p>
        <p className="leading-relaxed text-lg mb-4">We focus on authentic storytelling, ethical growth, and transparent communication with all our Pretoria clients.</p>
      </section>
      {/* END: Visually Hidden SEO Headings H1-H5 for Social Media Pretoria */}
      {/* BEGIN: Visually Hidden Social Media FAQ for Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Frequently Asked Questions about Social Media in Pretoria</h3>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Which social media platforms do you manage?</h4><p className="leading-relaxed text-lg mb-4">We manage Facebook, Instagram, LinkedIn, Twitter, and more for Pretoria businesses, ensuring consistent branding and engagement across all channels.</p><p className="leading-relaxed text-lg mb-4">Our team stays updated on the latest platform features and trends to maximize your results.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How do your social media packages work?</h4><p className="leading-relaxed text-lg mb-4">Our Pretoria social media packages include profile setup, content creation, post scheduling, engagement monitoring, and monthly reporting.</p><p className="leading-relaxed text-lg mb-4">Choose from one-time setup or ongoing monthly management, depending on your needs.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you create custom content for my brand?</h4><p className="leading-relaxed text-lg mb-4">Yes, we design custom posts, stories, and templates that reflect your Pretoria brand’s identity and messaging.</p><p className="leading-relaxed text-lg mb-4">Our creative team ensures every piece of content is on-brand and optimized for engagement.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How do you measure social media success?</h4><p className="leading-relaxed text-lg mb-4">We track engagement, follower growth, reach, and conversions for Pretoria clients using advanced analytics tools.</p><p className="leading-relaxed text-lg mb-4">Monthly reports provide insights into performance and recommendations for improvement.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer social media advertising?</h4><p className="leading-relaxed text-lg mb-4">Yes, we provide social media advertising services for Pretoria businesses, including campaign setup, targeting, and optimization.</p><p className="leading-relaxed text-lg mb-4">Our team helps you reach new audiences and achieve your marketing goals.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you train my team on social media best practices?</h4><p className="leading-relaxed text-lg mb-4">Absolutely! We offer training and consultation for Pretoria businesses, empowering your team to manage social media effectively.</p><p className="leading-relaxed text-lg mb-4">Workshops and ongoing support are available on request.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Is social media management suitable for small businesses?</h4><p className="leading-relaxed text-lg mb-4">Yes, our Pretoria social media services are ideal for small businesses looking to grow their presence and connect with local customers.</p><p className="leading-relaxed text-lg mb-4">We offer affordable packages and personalized support for every stage of growth.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How soon can I expect to see results?</h4><p className="leading-relaxed text-lg mb-4">Most Pretoria clients notice increased engagement and follower growth within the first few months, depending on your goals and activity level.</p><p className="leading-relaxed text-lg mb-4">Consistent posting and ongoing optimization are key to long-term success.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer content calendars and planning?</h4><p className="leading-relaxed text-lg mb-4">Yes, we provide detailed content calendars for Pretoria clients, ensuring your social media is organized, strategic, and effective.</p><p className="leading-relaxed text-lg mb-4">Our planning process keeps your content consistent and aligned with your business goals.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Which areas of Pretoria do you serve?</h4><p className="leading-relaxed text-lg mb-4">We serve all of Pretoria and surrounding areas, including Centurion, Hatfield, Brooklyn, Pretoria East, and more.</p><p className="leading-relaxed text-lg mb-4">Remote consultations and digital delivery are available for your convenience.</p></div>
      </section>
      {/* END: Visually Hidden Social Media FAQ for Pretoria */}
      {/* BEGIN: FAQPage Structured Data for Social Media Pretoria */}
      <script type="application/ld+json" suppressHydrationWarning>
        {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Which social media platforms do you manage?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We manage Facebook, Instagram, LinkedIn, Twitter, and more for Pretoria businesses, ensuring consistent branding and engagement across all channels. Our team stays updated on the latest platform features and trends to maximize your results."
              }
            },
            {
              "@type": "Question",
              "name": "How do your social media packages work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our Pretoria social media packages include profile setup, content creation, post scheduling, engagement monitoring, and monthly reporting. Choose from one-time setup or ongoing monthly management, depending on your needs."
              }
            },
            {
              "@type": "Question",
              "name": "Can you create custom content for my brand?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we design custom posts, stories, and templates that reflect your Pretoria brand’s identity and messaging. Our creative team ensures every piece of content is on-brand and optimized for engagement."
              }
            },
            {
              "@type": "Question",
              "name": "How do you measure social media success?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We track engagement, follower growth, reach, and conversions for Pretoria clients using advanced analytics tools. Monthly reports provide insights into performance and recommendations for improvement."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer social media advertising?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide social media advertising services for Pretoria businesses, including campaign setup, targeting, and optimization. Our team helps you reach new audiences and achieve your marketing goals."
              }
            },
            {
              "@type": "Question",
              "name": "Can you train my team on social media best practices?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! We offer training and consultation for Pretoria businesses, empowering your team to manage social media effectively. Workshops and ongoing support are available on request."
              }
            },
            {
              "@type": "Question",
              "name": "Is social media management suitable for small businesses?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our Pretoria social media services are ideal for small businesses looking to grow their presence and connect with local customers. We offer affordable packages and personalized support for every stage of growth."
              }
            },
            {
              "@type": "Question",
              "name": "How soon can I expect to see results?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most Pretoria clients notice increased engagement and follower growth within the first few months, depending on your goals and activity level. Consistent posting and ongoing optimization are key to long-term success."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer content calendars and planning?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide detailed content calendars for Pretoria clients, ensuring your social media is organized, strategic, and effective. Our planning process keeps your content consistent and aligned with your business goals."
              }
            },
            {
              "@type": "Question",
              "name": "Which areas of Pretoria do you serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve all of Pretoria and surrounding areas, including Centurion, Hatfield, Brooklyn, Pretoria East, and more. Remote consultations and digital delivery are available for your convenience."
              }
            }
          ]
        }
        `}
      </script>
      {/* END: FAQPage Structured Data for Social Media Pretoria */}
      {/* Service Packages */}
      {/* Service Packages Replaced by Quote Calculator CTA */}
      <div className="max-w-7xl mx-auto mb-16 text-center mt-24">
        <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Looking for a Social Media Package?</h2>
        <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          We understand that every business is unique. Build your own package with our interactive quote calculator.
        </p>
        <Link href="/quote" className="inline-block bg-[#FFD700] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#FFE44D] transition-colors">
          Calculate Your Quote
        </Link>
      </div>

      {/* Monthly Packages */}


      {/* Platforms */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-[#FFD700] text-center mb-8">Platforms We Support</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 rounded-lg p-6 text-center border border-[#FFD700]/20"
            >
              <div className="flex items-center justify-center mb-4">
                {platform.icon}
              </div>
              <h3 className="text-lg font-bold text-[#FFD700]">{platform.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {serviceFAQs['social-media'].map((faq: { question: string; answer: string }, index: number) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices
        currentService="Social Media Marketing"
        services={[
          {
            title: 'Content Marketing',
            description: 'Strategic content creation and distribution.',
            href: '/services/content-marketing',
            anchor: 'View Content Marketing Services'
          },
          {
            title: 'Email Marketing',
            description: 'Targeted email campaigns and automation.',
            href: '/services/email-marketing',
            anchor: 'View Email Marketing Services'
          },
          {
            title: 'SEO Services',
            description: 'Improve your search engine visibility.',
            href: '/services/seo',
            anchor: 'View SEO Services'
          },
          {
            title: 'Contact Us',
            description: 'Get in touch with us for a free consultation.',
            href: '/get-in-touch-pretoria',
            anchor: 'Contact Us'
          }
        ]}
      />

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Social Media Presence?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Contact us for a free consultation and let's create your social media strategy
          </p>
          <GetInTouchButton variant="primary" text="Start Your Project" className="text-lg" />
        </div>
      </section>
      {/* Contextual link to homepage with varied phrasing */}
      <div className="max-w-4xl mx-auto px-4 text-center mt-6">
        <p className="text-neutral-400 text-sm">
          Learn more about our <Link href="/" className="text-[#FFD700] hover:underline">Pretoria creative agency</Link> on the homepage.
        </p>
      </div>
    </div>
  );
};

export default SocialMediaPage;
