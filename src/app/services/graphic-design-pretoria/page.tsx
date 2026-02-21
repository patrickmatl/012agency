'use client';

import { motion } from 'framer-motion';

import RelatedServices from '@/components/RelatedServices';
import { serviceFAQs } from '@/data/serviceFAQs';
import Link from 'next/link';

const GraphicDesignPage = () => {


  const relatedServices = [
    {
      title: 'Brand Identity',
      href: '/services/brand-identity',
      description: 'Complete brand identity solutions',
      anchor: 'Brand Identity'
    },
    {
      title: 'Marketing Materials',
      href: '/services/marketing-materials-pretoria',
      description: 'Professional marketing collateral design',
      anchor: 'Marketing'
    },
    {
      title: 'Website Design',
      href: '/services/website-design-pretoria',
      description: 'Custom website design services',
      anchor: 'Web Design'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch for graphic design quotes and advice.',
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
            name: 'Graphic Design Pretoria',
            description:
              'Graphic design services in Pretoria by 012 Agency. Logos, branding, marketing materials and digital graphics that elevate your brand.',
            url: 'https://012agency.co.za/services/graphic-design-pretoria',
            serviceType: 'Graphic design',
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
      {/* BEGIN: Visually Hidden SEO Headings H1-H5 for Graphic Design Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h2 className="text-3xl font-bold text-white mt-12 mb-6 font-syne">Graphic Design Services in Pretoria | 012 Agency</h2>
        <p className="leading-relaxed text-lg mb-4">012 Agency provides professional graphic design for Pretoria businesses—logos, branding, packaging, social media, and more. Our creative team combines artistic vision with technical expertise to deliver designs that elevate your visual identity and set you apart in the Pretoria market.</p>
        <p className="leading-relaxed text-lg mb-4">We understand the unique needs of Pretoria businesses and tailor every project to your brand, audience, and marketing goals. From concept to final delivery, our designers ensure your graphics are impactful, memorable, and aligned with your business objectives.</p>
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Pretoria’s Leading Graphic Design Agency</h3>
        <p className="leading-relaxed text-lg mb-4">Our Pretoria-based designers craft unique, impactful visuals for brands of all sizes. From startups to corporates, we deliver design that gets noticed and drives engagement both online and offline.</p>
        <p className="leading-relaxed text-lg mb-4">As Pretoria’s leading graphic design agency, we stay ahead of trends and use the latest tools to provide innovative solutions. We pride ourselves on fast turnaround, open communication, and a collaborative approach that puts your vision first.</p>
        <h4 className="text-xl font-bold text-white mt-6 mb-3">Branding & Visual Communication for Pretoria Businesses</h4>
        <p className="leading-relaxed text-lg mb-4">We specialize in logos, stationery, marketing materials, and digital graphics tailored to Pretoria audiences for maximum engagement. Our branding services help businesses build recognition, trust, and loyalty in a competitive landscape.</p>
        <p className="leading-relaxed text-lg mb-4">Whether you need a full brand identity or a one-off campaign, our Pretoria team ensures every design element works together to tell your story and connect with your customers.</p>
        <h5 className="text-lg font-bold text-[#FFD700] mt-4 mb-2">Affordable Graphic Design Packages in Pretoria</h5>
        <p className="leading-relaxed text-lg mb-4">Choose from essential to enterprise packages, with transparent pricing and expert support for Pretoria SMEs and established brands. Our packages are designed to provide value at every level, making professional design accessible to all.</p>
        <p className="leading-relaxed text-lg mb-4">Each package includes consultation, multiple design concepts, revisions, and source files, so Pretoria businesses receive a comprehensive solution that meets their needs and budget.</p>
        <h5>Why Choose 012 Agency for Graphic Design in Pretoria?</h5>
        <p className="leading-relaxed text-lg mb-4">Local expertise, creative excellence, and a proven portfolio. 012 Agency is Pretoria’s trusted partner for all things design. Our team’s dedication to quality and client satisfaction ensures your business stands out from the crowd.</p>
        <p className="leading-relaxed text-lg mb-4">We offer ongoing support, fast delivery, and a collaborative process that makes working with us easy and enjoyable for Pretoria businesses of all sizes.</p>
      </section>
      {/* END: Visually Hidden SEO Headings H1-H5 for Graphic Design Pretoria */}
      {/* BEGIN: Visually Hidden Graphic Design FAQ for Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Frequently Asked Questions about Graphic Design in Pretoria</h3>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What graphic design services do you offer?</h4><p className="leading-relaxed text-lg mb-4">We offer logo design, branding, packaging, marketing materials, social media graphics, and more for Pretoria businesses. Our services are tailored to your specific goals and industry, ensuring your brand stands out in a crowded marketplace.</p><p className="leading-relaxed text-lg mb-4">From initial brainstorming to final files, we work closely with Pretoria clients to deliver creative solutions that drive results and support your business growth.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How much does graphic design cost in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">012 Agency offers packages starting from R3,850. Pricing depends on project scope, complexity, and deliverables. We provide transparent quotes and flexible options for Pretoria businesses of all sizes.</p><p className="leading-relaxed text-lg mb-4">Our goal is to deliver exceptional value and quality, helping Pretoria companies invest confidently in their brand’s visual presence.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you design a logo for my Pretoria business?</h4><p className="leading-relaxed text-lg mb-4">Absolutely! We create memorable, professional logos tailored to your Pretoria brand identity and audience. Our logo design process includes research, concept development, and multiple revisions to ensure the perfect result.</p><p className="leading-relaxed text-lg mb-4">Your logo will be delivered in all necessary formats for print and digital use, giving your Pretoria business a strong and versatile visual foundation.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you provide brand guidelines?</h4><p className="leading-relaxed text-lg mb-4">Yes, all comprehensive packages include detailed brand guidelines for Pretoria clients to ensure consistent visual identity. These guidelines cover logo usage, color palettes, typography, and more.</p><p className="leading-relaxed text-lg mb-4">Brand guidelines empower Pretoria businesses to maintain a cohesive look and feel across all marketing channels, both now and in the future.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you design for print and digital?</h4><p className="leading-relaxed text-lg mb-4">Yes, we design for both print (business cards, flyers, packaging) and digital (social media, web graphics) for Pretoria businesses. Our team understands the unique requirements of each medium and ensures your designs look great everywhere.</p><p className="leading-relaxed text-lg mb-4">We provide print-ready files and digital assets, so Pretoria clients can launch campaigns with confidence and consistency.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How long does a design project take?</h4><p className="leading-relaxed text-lg mb-4">Most Pretoria design projects are completed within 3–10 days, depending on complexity and revisions. We provide clear timelines and regular updates, so you always know what to expect.</p><p className="leading-relaxed text-lg mb-4">For urgent needs, we offer expedited services to help Pretoria businesses meet tight deadlines without sacrificing quality.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How many revisions are included?</h4><p className="leading-relaxed text-lg mb-4">Revision rounds vary by package, but all Pretoria clients receive at least 2–3 rounds to ensure satisfaction. We believe in a collaborative process and work with you until the design meets your expectations.</p><p className="leading-relaxed text-lg mb-4">Additional revisions can be arranged if needed, providing flexibility and peace of mind for Pretoria businesses.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you provide source files?</h4><p className="leading-relaxed text-lg mb-4">Yes, all final designs include editable source files for Pretoria clients. We use industry-standard formats, making it easy for you to update or repurpose designs in the future.</p><p className="leading-relaxed text-lg mb-4">Having access to source files gives Pretoria businesses full control over their brand assets and ensures long-term value from every project.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you work with my existing brand?</h4><p className="leading-relaxed text-lg mb-4">Yes, we can refresh or extend your current Pretoria brand identity to keep it modern and consistent. Our team respects your existing brand equity while introducing creative updates that align with your goals.</p><p className="leading-relaxed text-lg mb-4">Updating your brand is a cost-effective way for Pretoria businesses to stay relevant and competitive in a dynamic market.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Which areas of Pretoria do you serve?</h4><p className="leading-relaxed text-lg mb-4">We serve all of Pretoria and surrounding regions, including Centurion, Hatfield, Brooklyn, Pretoria East, and more. Our digital-first approach allows us to work with clients remotely or in person, providing the same high level of service wherever you are.</p><p className="leading-relaxed text-lg mb-4">No matter your location in Pretoria, 012 Agency is ready to help you achieve your graphic design goals and elevate your brand presence.</p></div>
      </section>
      {/* END: Visually Hidden Graphic Design FAQ for Pretoria */}
      {/* BEGIN: FAQPage Structured Data for Graphic Design Pretoria */}
      <script type="application/ld+json" suppressHydrationWarning>
        {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What graphic design services do you offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer logo design, branding, packaging, marketing materials, social media graphics, and more for Pretoria businesses."
              }
            },
            {
              "@type": "Question",
              "name": "How much does graphic design cost in Pretoria?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "012 Agency offers packages starting from R3,850. Pricing depends on project scope, complexity, and deliverables."
              }
            },
            {
              "@type": "Question",
              "name": "Can you design a logo for my Pretoria business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! We create memorable, professional logos tailored to your Pretoria brand identity and audience."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide brand guidelines?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all comprehensive packages include detailed brand guidelines for Pretoria clients to ensure consistent visual identity."
              }
            },
            {
              "@type": "Question",
              "name": "Can you design for print and digital?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we design for both print (business cards, flyers, packaging) and digital (social media, web graphics) for Pretoria businesses."
              }
            },
            {
              "@type": "Question",
              "name": "How long does a design project take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most Pretoria design projects are completed within 3–10 days, depending on complexity and revisions."
              }
            },
            {
              "@type": "Question",
              "name": "How many revisions are included?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Revision rounds vary by package, but all Pretoria clients receive at least 2–3 rounds to ensure satisfaction."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide source files?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all final designs include editable source files for Pretoria clients."
              }
            },
            {
              "@type": "Question",
              "name": "Can you work with my existing brand?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we can refresh or extend your current Pretoria brand identity to keep it modern and consistent."
              }
            },
            {
              "@type": "Question",
              "name": "Which areas of Pretoria do you serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve all of Pretoria and surrounding regions, including Centurion, Hatfield, Brooklyn, Pretoria East, and more."
              }
            }
          ]
        }
        `}
      </script>
      {/* END: FAQPage Structured Data for Graphic Design Pretoria */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Design Packages */}
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Get a Custom Graphic Design Quote</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Need a specific design asset or branding package? Use our calculator to get an instant estimate.
          </p>
          <Link href="/quote" className="inline-block bg-[#FFD700] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#FFE44D] transition-colors">
            Calculate Your Quote
          </Link>
        </div>

        {/* Additional Services */}


        {/* FAQ Section */}
        <section className="py-20 bg-neutral-800 rounded-lg mt-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {serviceFAQs['graphic-design']?.map((faq, index) => (
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
            currentService="graphic-design"
            services={relatedServices}
          />
        </div>
        {/* Contextual link to homepage with varied phrasing */}
        <div className="mt-10 text-center">
          <p className="text-neutral-400 text-sm">
            Discover more from our <Link href="/" className="text-[#FFD700] hover:underline">graphic designers in Pretoria</Link> on the homepage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignPage;
