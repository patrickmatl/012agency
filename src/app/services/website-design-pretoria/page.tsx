'use client';

import { motion } from 'framer-motion';

import Breadcrumb from '@/components/Breadcrumb';
import RelatedServices from '@/components/RelatedServices';
import GetInTouchButton from '@/components/GetInTouchButton';
import { serviceFAQs } from '@/data/serviceFAQs';
import Link from 'next/link';

const WebsiteDesignPage = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/services' },
    { label: 'Website Design', href: '/services/website-design-pretoria' }
  ];


  const relatedServices = [
    {
      title: 'Website Maintenance',
      description: 'Keep your website secure, up-to-date, and performing at its best.',
      href: '/services/website-maintenance-pretoria',
      anchor: 'View Maintenance Plans'
    },
    {
      title: 'Digital Marketing',
      description: 'Boost your online presence with our digital marketing services.',
      href: '/services/google-ads-pretoria',
      anchor: 'Explore Digital Marketing'
    },
    {
      title: 'Custom Development',
      description: 'Tailored web applications and custom functionality.',
      href: '/services/custom-development-pretoria',
      anchor: 'View Development Services'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with us to discuss your project.',
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
            name: 'Website Design Pretoria',
            description:
              'Website design services in Pretoria by 012 Agency. Premium, conversion‑focused websites built for speed, SEO and mobile.',
            url: 'https://012agency.co.za/services/website-design-pretoria',
            serviceType: 'Website design',
            category: 'Web design and development services',
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
      <section className="py-20 px-4 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-syne font-bold mb-6 text-[#FFD700]">
              Website design that feels premium and converts
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              Your website is often the first real interaction a customer has with your brand. We design fast, modern Pretoria websites that look world‑class and make it effortless for visitors to take action.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              Every layout, colour choice and interaction is crafted to support your goals – whether that is booking more consultations, selling products online, or positioning your business as the clear leader in your category.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              We combine strong visual design with performance, SEO and mobile‑first thinking so your site feels beautiful on the surface and powerful under the hood.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Built for Pretoria businesses
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Messaging, structure and calls‑to‑action are tailored for your local audience, helping you stand out against nearby competitors.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Conversion‑focused layouts
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Clear sections, strong hierarchy and persuasive content guide visitors from first impression to enquiry or purchase.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Mobile and speed optimised
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                We design for mobile‑first performance so your site loads quickly and feels smooth on every device.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Ready to scale
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Flexible page structures and clean foundations make it easy to add new services, landing pages and campaigns over time.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* BEGIN: Visually Hidden SEO Headings H1-H5 for Website Design Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h2 className="text-3xl font-bold text-white mt-12 mb-6 font-syne">Professional Website Design in Pretoria | 012 Agency</h2>
        <p className="leading-relaxed text-lg mb-4">012 Agency delivers modern, mobile-friendly website design for Pretoria businesses. Our expert team builds high-performance websites tailored to your brand, industry, and Pretoria audience.</p>
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Pretoria’s Top Web Design Agency</h3>
        <p className="leading-relaxed text-lg mb-4">We specialize in custom web design, WordPress development, and business websites for Pretoria companies of all sizes. From startups to established brands, we create websites that convert visitors into customers.</p>
        <h4 className="text-xl font-bold text-white mt-6 mb-3">Affordable Website Packages for Pretoria Businesses</h4>
        <p className="leading-relaxed text-lg mb-4">Choose from our range of website packages, including 3-page, 6-page, and 9-page sites, as well as catalog and ecommerce options. All packages include SEO, analytics, and ongoing support for Pretoria clients.</p>
        <h5 className="text-lg font-bold text-[#FFD700] mt-4 mb-2">Why Invest in a Pretoria Website?</h5>
        <p className="leading-relaxed text-lg mb-4">Stand out in the Pretoria market with a fast, secure, and visually stunning website. Our Pretoria web design services help you attract local customers and grow your business online.</p>
        <h5>Why Choose 012 Agency for Website Design in Pretoria?</h5>
        <p className="leading-relaxed text-lg mb-4">We combine Pretoria market knowledge, creative design, and technical expertise to deliver websites that drive results. Get personal service and fast support from our local team.</p>
      </section >
      {/* END: Visually Hidden SEO Headings H1-H5 for Website Design Pretoria */}
      {/* BEGIN: Visually Hidden Website Design FAQ for Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Frequently Asked Questions about Website Design in Pretoria</h3>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How much does a website cost in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Website design packages at 012 Agency start from R8,980 for a 3-page site and go up to R23,690+ for ecommerce or advanced features. Pricing depends on the number of pages, custom development, and integrations.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What is included in your website packages?</h4><p className="leading-relaxed text-lg mb-4">All packages include responsive design, SEO setup, analytics, contact forms, social media integration, and training for Pretoria business owners. Support is included for 3–12 months depending on the package.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How long does it take to build a website?</h4><p className="leading-relaxed text-lg mb-4">Most Pretoria website projects take 1–4 weeks, depending on requirements and content readiness. Rush options are available for urgent projects.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer custom web development?</h4><p className="leading-relaxed text-lg mb-4">Yes, we provide custom development for unique features, integrations, or business needs. Our Pretoria team builds solutions tailored to your goals.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Will my website work on mobile devices?</h4><p className="leading-relaxed text-lg mb-4">Absolutely. Every site we build is fully responsive and optimized for mobile, tablet, and desktop users in Pretoria and beyond.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can I update my website myself?</h4><p className="leading-relaxed text-lg mb-4">Yes, our websites are built on user-friendly platforms like WordPress. We provide training so Pretoria business owners can easily update content, images, and more.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer SEO services?</h4><p className="leading-relaxed text-lg mb-4">All sites include basic SEO setup. We also offer advanced SEO and digital marketing services to help Pretoria businesses rank higher and attract more customers.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you provide website hosting?</h4><p className="leading-relaxed text-lg mb-4">We recommend reliable hosting providers for Pretoria businesses and can assist with setup and migration. Hosting is not included by default but can be arranged.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What makes your web design different?</h4><p className="leading-relaxed text-lg mb-4">We combine Pretoria market insights, creative design, and technical skill to deliver websites that look great and perform. Our focus is on results and client satisfaction.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Which areas of Pretoria do you serve?</h4><p className="leading-relaxed text-lg mb-4">We serve all of Pretoria and surrounding areas, including Centurion, Hatfield, Brooklyn, Pretoria East, and more. Remote and on-site consultations are available.</p></div>
      </section>
      {/* END: Visually Hidden Website Design FAQ for Pretoria */}
      {/* BEGIN: FAQPage Structured Data for Website Design Pretoria */}
      <script type="application/ld+json" suppressHydrationWarning>
        {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does a website cost in Pretoria?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Website design packages at 012 Agency start from R8,980 for a 3-page site and go up to R23,690+ for ecommerce or advanced features. Pricing depends on the number of pages, custom development, and integrations."
              }
            },
            {
              "@type": "Question",
              "name": "What is included in your website packages?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All packages include responsive design, SEO setup, analytics, contact forms, social media integration, and training for Pretoria business owners. Support is included for 3–12 months depending on the package."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to build a website?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most Pretoria website projects take 1–4 weeks, depending on requirements and content readiness. Rush options are available for urgent projects."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer custom web development?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide custom development for unique features, integrations, or business needs. Our Pretoria team builds solutions tailored to your goals."
              }
            },
            {
              "@type": "Question",
              "name": "Will my website work on mobile devices?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. Every site we build is fully responsive and optimized for mobile, tablet, and desktop users in Pretoria and beyond."
              }
            },
            {
              "@type": "Question",
              "name": "Can I update my website myself?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our websites are built on user-friendly platforms like WordPress. We provide training so Pretoria business owners can easily update content, images, and more."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer SEO services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All sites include basic SEO setup. We also offer advanced SEO and digital marketing services to help Pretoria businesses rank higher and attract more customers."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide website hosting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We recommend reliable hosting providers for Pretoria businesses and can assist with setup and migration. Hosting is not included by default but can be arranged."
              }
            },
            {
              "@type": "Question",
              "name": "What makes your web design different?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We combine Pretoria market insights, creative design, and technical skill to deliver websites that look great and perform. Our focus is on results and client satisfaction."
              }
            },
            {
              "@type": "Question",
              "name": "Which areas of Pretoria do you serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve all of Pretoria and surrounding areas, including Centurion, Hatfield, Brooklyn, Pretoria East, and more. Remote and on-site consultations are available."
              }
            }
          ]
        }
        `}
      </script>
      {/* END: FAQPage Structured Data for Website Design Pretoria */}
      {/* Breadcrumb */}
      <div className="px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Calculate Your Custom Website Quote</h2>
        <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          Need a specific number of pages or features? Use our calculator to get an instant estimate.
        </p>
        <Link href="/quote" className="inline-block bg-[#FFD700] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#FFE44D] transition-colors">
          Calculate Your Quote
        </Link>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {serviceFAQs['website-design']?.map((faq, index) => (
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
      <RelatedServices
        currentService="Website Design"
        services={relatedServices}
      />

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Contact us for a free consultation and let's create something amazing together
          </p>
          <GetInTouchButton variant="primary" text="Start Your Project" className="text-lg" />
        </div>
      </section>
      {/* Contextual link to homepage with varied phrasing */}
      <div className="max-w-4xl mx-auto px-4 text-center mt-6">
        <p className="text-neutral-400 text-sm">
          Learn more about our <Link href="/" className="text-[#FFD700] hover:underline">Pretoria web design studio</Link> on the homepage.
        </p>
      </div>
    </div >
  );
};

export default WebsiteDesignPage;
