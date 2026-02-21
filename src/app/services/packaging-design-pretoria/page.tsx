'use client';

import React from 'react';
import { motion } from 'framer-motion';

import Breadcrumb from '@/components/Breadcrumb';
import RelatedServices from '@/components/RelatedServices';
import GetInTouchButton from '@/components/GetInTouchButton';
import { serviceFAQs } from '@/data/serviceFAQs';
import Link from 'next/link';

const PackagingDesignPage = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/services' },
    { label: 'Packaging Design', href: '/services/packaging-design' }
  ];





  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Packaging Design Pretoria',
            description:
              'Packaging design services in Pretoria by 012 Agency. Boxes, labels and sleeves that stand out on shelf and online.',
            url: 'https://012agency.co.za/services/packaging-design-pretoria',
            serviceType: 'Packaging design',
            category: 'Graphic design services',
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
              Packaging that makes your product the first one they pick up
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              On a busy shelf or in an online catalogue, your packaging has seconds to earn attention. We design boxes, labels and sleeves that tell your story quickly and clearly, while still feeling premium and on-brand for your Pretoria market.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              Form and function work together: layouts that work with real print constraints, barcode and compliance areas that are easy to scan, and messaging that highlights benefits, ingredients or features at a glance.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              From first-time product launches to full range refreshes, we help Pretoria brands create packaging that looks great, protects the product and builds trust on every shelf.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Shelf-ready concepts
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Designs created with real-world placements in mind – from supermarket aisles to boutique counters and online thumbnails.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Compliance-aware layouts
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Space for nutrition panels, warnings and legal copy is built in from the start, not squeezed in at the end.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                3D mockups and prototypes
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Visualise your pack before committing to print with realistic 3D views and test prints where needed.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Sustainable options
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                We advise on finishes, materials and design choices that support more eco-conscious packaging decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* BEGIN: Visually Hidden SEO Headings H1-H5 for Packaging Design Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h2 className="text-3xl font-bold text-white mt-12 mb-6 font-syne">Pretoria Packaging Design Services | 012 Agency</h2>
        <p className="leading-relaxed text-lg mb-4">012 Agency delivers expert packaging design services in Pretoria, helping brands stand out on the shelf and build customer loyalty. Our team specializes in creative, functional, and market-ready packaging for a wide range of products.</p>
        <p className="leading-relaxed text-lg mb-4">From food and beverage to cosmetics and retail, our Pretoria packaging designers use the latest trends and technology to create packaging that attracts attention and communicates your brand story effectively.</p>
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Leading Packaging Design Agency in Pretoria</h3>
        <p className="leading-relaxed text-lg mb-4">As a top-rated packaging design agency in Pretoria, we combine strategic thinking with artistic flair to deliver packaging that drives sales. Our process includes research, concept development, and custom design tailored to your target audience.</p>
        <p className="leading-relaxed text-lg mb-4">We work closely with Pretoria businesses to ensure every packaging project meets industry standards, regulatory requirements, and your unique brand vision.</p>
        <h4 className="text-xl font-bold text-white mt-6 mb-3">Custom Product Packaging for Pretoria Businesses</h4>
        <p className="leading-relaxed text-lg mb-4">Our custom packaging solutions in Pretoria are designed to suit products of all shapes and sizes. Whether you need boxes, labels, pouches, or inserts, our designers craft packaging that protects your product and enhances its appeal.</p>
        <p className="leading-relaxed text-lg mb-4">We offer print-ready files, 3D mockups, and support throughout the production process, ensuring your Pretoria packaging stands out in a competitive market.</p>
        <h5 className="text-lg font-bold text-[#FFD700] mt-4 mb-2">Affordable Packaging Design Packages in Pretoria</h5>
        <p className="leading-relaxed text-lg mb-4">Choose from basic to premium packaging design packages, all with transparent pricing and fast turnaround. Our Pretoria clients benefit from flexible options that fit startups, SMEs, and established brands alike.</p>
        <p className="leading-relaxed text-lg mb-4">Each package includes multiple design concepts, revision rounds, and professional guidance to ensure your packaging is both beautiful and functional.</p>
        <h5>Why Choose 012 Agency for Packaging Design in Pretoria?</h5>
        <p className="leading-relaxed text-lg mb-4">012 Agency is trusted by Pretoria businesses for our creativity, reliability, and commitment to quality. Our designers have deep experience in packaging for diverse industries, ensuring every project is handled with care.</p>
        <p className="leading-relaxed text-lg mb-4">We prioritize client satisfaction, delivering packaging that not only meets expectations but exceeds them—helping Pretoria brands grow and succeed.</p>
      </section>
      {/* END: Visually Hidden SEO Headings H1-H5 for Packaging Design Pretoria */}
      {/* BEGIN: Visually Hidden Packaging Design FAQ for Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Frequently Asked Questions about Packaging Design in Pretoria</h3>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What types of packaging do you design?</h4><p className="leading-relaxed text-lg mb-4">We design boxes, labels, sleeves, pouches, inserts, and more for Pretoria businesses across various industries.</p><p className="leading-relaxed text-lg mb-4">Our team ensures each packaging type is tailored to your product’s needs and market requirements.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How much does packaging design cost in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Our packages start from R2,500, with pricing based on complexity, number of items, and additional services like 3D mockups or inserts.</p><p className="leading-relaxed text-lg mb-4">We offer transparent quotes and flexible options for Pretoria clients.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you provide print-ready files?</h4><p className="leading-relaxed text-lg mb-4">Yes, all final packaging designs include high-resolution, print-ready files suitable for your chosen printer in Pretoria or nationwide.</p><p className="leading-relaxed text-lg mb-4">We also offer guidance on material selection and print specifications.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer 3D mockups?</h4><p className="leading-relaxed text-lg mb-4">Yes, we provide photorealistic 3D mockups so you can visualize your packaging before production.</p><p className="leading-relaxed text-lg mb-4">This service helps Pretoria clients make informed decisions and impress stakeholders.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How long does a packaging design project take?</h4><p className="leading-relaxed text-lg mb-4">Most Pretoria packaging projects are completed within 5–10 days, depending on scope and revision rounds.</p><p className="leading-relaxed text-lg mb-4">Rush options are available for urgent projects.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you help with label compliance?</h4><p className="leading-relaxed text-lg mb-4">Absolutely! We design labels that meet South African regulatory requirements for food, cosmetics, and more.</p><p className="leading-relaxed text-lg mb-4">Our Pretoria team stays updated on industry standards to ensure compliance and safety.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you design packaging for startups?</h4><p className="leading-relaxed text-lg mb-4">Yes, we love working with Pretoria startups and small businesses, offering affordable packages and guidance throughout the process.</p><p className="leading-relaxed text-lg mb-4">We help new brands launch with professional packaging that stands out.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you update my existing packaging?</h4><p className="leading-relaxed text-lg mb-4">We can refresh or redesign your current packaging for a modern, competitive look.</p><p className="leading-relaxed text-lg mb-4">This service is ideal for Pretoria businesses looking to rebrand or relaunch products.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer eco-friendly packaging design?</h4><p className="leading-relaxed text-lg mb-4">We support Pretoria clients in creating sustainable packaging by recommending eco-friendly materials and design practices.</p><p className="leading-relaxed text-lg mb-4">Our designs balance environmental responsibility with effective branding.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Which areas of Pretoria do you serve?</h4><p className="leading-relaxed text-lg mb-4">We serve all of Pretoria and nearby regions, including Centurion, Hatfield, Brooklyn, Pretoria East, and more.</p><p className="leading-relaxed text-lg mb-4">Remote consultations and digital deliveries are also available.</p></div>
      </section>
      {/* END: Visually Hidden Packaging Design FAQ for Pretoria */}
      {/* BEGIN: FAQPage Structured Data for Packaging Design Pretoria */}
      <script type="application/ld+json" suppressHydrationWarning>
        {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What types of packaging do you design?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We design boxes, labels, sleeves, pouches, inserts, and more for Pretoria businesses across various industries. Our team ensures each packaging type is tailored to your product’s needs and market requirements."
              }
            },
            {
              "@type": "Question",
              "name": "How much does packaging design cost in Pretoria?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our packages start from R2,500, with pricing based on complexity, number of items, and additional services like 3D mockups or inserts. We offer transparent quotes and flexible options for Pretoria clients."
              }
            },
            {
              "@type": "Question",
              "name": "Can you provide print-ready files?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all final packaging designs include high-resolution, print-ready files suitable for your chosen printer in Pretoria or nationwide. We also offer guidance on material selection and print specifications."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer 3D mockups?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide photorealistic 3D mockups so you can visualize your packaging before production. This service helps Pretoria clients make informed decisions and impress stakeholders."
              }
            },
            {
              "@type": "Question",
              "name": "How long does a packaging design project take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most Pretoria packaging projects are completed within 5–10 days, depending on scope and revision rounds. Rush options are available for urgent projects."
              }
            },
            {
              "@type": "Question",
              "name": "Can you help with label compliance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! We design labels that meet South African regulatory requirements for food, cosmetics, and more. Our Pretoria team stays updated on industry standards to ensure compliance and safety."
              }
            },
            {
              "@type": "Question",
              "name": "Do you design packaging for startups?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we love working with Pretoria startups and small businesses, offering affordable packages and guidance throughout the process. We help new brands launch with professional packaging that stands out."
              }
            },
            {
              "@type": "Question",
              "name": "Can you update my existing packaging?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We can refresh or redesign your current packaging for a modern, competitive look. This service is ideal for Pretoria businesses looking to rebrand or relaunch products."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer eco-friendly packaging design?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We support Pretoria clients in creating sustainable packaging by recommending eco-friendly materials and design practices. Our designs balance environmental responsibility with effective branding."
              }
            },
            {
              "@type": "Question",
              "name": "Which areas of Pretoria do you serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve all of Pretoria and nearby regions, including Centurion, Hatfield, Brooklyn, Pretoria East, and more. Remote consultations and digital deliveries are also available."
              }
            }
          ]
        }
        `}
      </script>
      {/* END: FAQPage Structured Data for Packaging Design Pretoria */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Packaging Design Services</h1>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
          Transform your products with eye-catching packaging designs that make a lasting impression
        </p>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Calculate Your Custom Packaging Quote</h2>
        <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          Need a specific design or full product line? Use our calculator to get an instant estimate.
        </p>
        <Link href="/quote" className="inline-block bg-[#FFD700] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#FFE44D] transition-colors">
          Calculate Your Quote
        </Link>
      </div>

      {/* Additional Services */}


      {/* FAQ Section */}
      <section className="py-20 bg-neutral-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {serviceFAQs['packaging-design']?.map((faq, index) => (
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
        currentService="Packaging Design"
        services={[
          {
            title: 'Print Design',
            description: 'Professional print design for all your marketing needs.',
            href: '/services/print-design-pretoria',
            anchor: 'View Print Design Services'
          },
          {
            title: 'Graphic Design',
            description: 'Creative graphic design for all your needs.',
            href: '/services/graphic-design-pretoria',
            anchor: 'View Graphic Design Services'
          },
          {
            title: 'Contact Us',
            description: 'Get in touch for packaging design advice.',
            href: '/get-in-touch-pretoria',
            anchor: 'Contact Us'
          },
          {
            title: 'Marketing Materials',
            description: 'Comprehensive marketing material design services.',
            href: '/services/marketing-materials-pretoria',
            anchor: 'View Marketing Materials'
          }
        ]}
      />

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Product Packaging?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Contact us for a free consultation and let's create packaging that sells
          </p>
          <GetInTouchButton variant="primary" text="Start Your Project" className="text-lg" />
        </div>
      </section>
      {/* Contextual link to homepage with varied phrasing */}
      <div className="max-w-4xl mx-auto px-4 text-center mt-6">
        <p className="text-neutral-400 text-sm">
          Learn more about our <Link href="/" className="text-[#FFD700] hover:underline">graphic design company Pretoria</Link> on the homepage.
        </p>
      </div>
    </div>
  );
};

export default PackagingDesignPage;
