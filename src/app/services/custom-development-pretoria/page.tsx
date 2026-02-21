'use client';

import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import RelatedServices from '@/components/RelatedServices';
import GetInTouchButton from '@/components/GetInTouchButton';
import { serviceFAQs } from '@/data/serviceFAQs';
import Link from 'next/link';

const CustomDevelopmentPage = () => {


  const technologies = [
    {
      name: "React",
      icon: <FaCheck className="w-8 h-8 text-[#FFD700]" />
    },
    {
      name: "Node.js",
      icon: <FaCheck className="w-8 h-8 text-[#FFD700]" />
    },
    {
      name: "MongoDB",
      icon: <FaCheck className="w-8 h-8 text-[#FFD700]" />
    },
    {
      name: "AWS",
      icon: <FaCheck className="w-8 h-8 text-[#FFD700]" />
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
            name: 'Custom Development Pretoria',
            description:
              'Custom software and web app development in Pretoria by 012 Agency. Secure, scalable, high-performance applications tailored to your business.',
            url: 'https://012agency.co.za/services/custom-development-pretoria',
            serviceType: 'Custom software development',
            category: 'Software development services',
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
      {/* BEGIN: Visually Hidden SEO Headings H1-H5 for Custom Development Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h2 className="text-3xl font-bold text-white mt-12 mb-6 font-syne">Custom Software Development in Pretoria | 012 Agency</h2>
        <p className="leading-relaxed text-lg mb-4">012 Agency offers bespoke software and web application development for Pretoria businesses. We turn your ideas into secure, scalable, and high-performance digital solutions.</p>
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Pretoria’s Leading Custom Development Agency</h3>
        <p className="leading-relaxed text-lg mb-4">Our Pretoria-based team specializes in web apps, enterprise systems, APIs, and integrations. We help Pretoria companies innovate and grow with tailored technology.</p>
        <h4 className="text-xl font-bold text-white mt-6 mb-3">Web & Mobile App Development for Pretoria Businesses</h4>
        <p className="leading-relaxed text-lg mb-4">From MVPs to complex platforms, we deliver custom solutions using React, Node.js, AWS, and more. Pretoria clients trust us for quality, speed, and support.</p>
        <h5 className="text-lg font-bold text-[#FFD700] mt-4 mb-2">Affordable Custom Development Packages in Pretoria</h5>
        <p className="leading-relaxed text-lg mb-4">Choose from flexible packages for startups, SMEs, and enterprises. Transparent pricing and expert guidance for Pretoria businesses of all sizes.</p>
        <h5>Why Choose 012 Agency for Custom Development in Pretoria?</h5>
        <p className="leading-relaxed text-lg mb-4">Local expertise, agile process, and proven results. 012 Agency is Pretoria’s trusted partner for custom software and app development.</p>
      </section>
      {/* END: Visually Hidden SEO Headings H1-H5 for Custom Development Pretoria */}
      {/* BEGIN: Visually Hidden Custom Development FAQ for Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Frequently Asked Questions about Custom Development in Pretoria</h3>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What is custom software development?</h4><p className="leading-relaxed text-lg mb-4">Custom software development is the process of designing, building, and deploying solutions tailored to your Pretoria business’s unique needs, workflows, and goals.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How much does custom development cost in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">012 Agency offers custom development packages starting from R18,780. Pricing depends on complexity, features, and integrations required for your Pretoria project.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What technologies do you use?</h4><p className="leading-relaxed text-lg mb-4">We use React, Node.js, MongoDB, AWS, and other modern technologies to build scalable, secure solutions for Pretoria businesses.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you integrate with my existing systems?</h4><p className="leading-relaxed text-lg mb-4">Yes. We specialize in API development and integration, connecting your Pretoria business with CRMs, ERPs, payment gateways, and more.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How long does a custom project take?</h4><p className="leading-relaxed text-lg mb-4">Project timelines vary, but most Pretoria custom development projects take 2–12 weeks depending on requirements and scope.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you provide support and maintenance?</h4><p className="leading-relaxed text-lg mb-4">All packages include 6–12 months of support for Pretoria clients. Ongoing maintenance plans are also available.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you build mobile apps?</h4><p className="leading-relaxed text-lg mb-4">Yes, we develop cross-platform mobile apps and integrate them with your web systems for Pretoria businesses.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Is my data secure?</h4><p className="leading-relaxed text-lg mb-4">Security is a top priority. We follow best practices for authentication, encryption, and data protection for Pretoria clients.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you sign NDAs?</h4><p className="leading-relaxed text-lg mb-4">Yes, we sign NDAs to protect your ideas and business information throughout the custom development process in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Which areas of Pretoria do you serve?</h4><p className="leading-relaxed text-lg mb-4">We serve all of Pretoria and surrounding areas, including Centurion, Hatfield, Brooklyn, Pretoria East, and more.</p></div>
      </section>
      {/* END: Visually Hidden Custom Development FAQ for Pretoria */}
      {/* BEGIN: FAQPage Structured Data for Custom Development Pretoria */}
      <script type="application/ld+json" suppressHydrationWarning>
        {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is custom software development?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Custom software development is the process of designing, building, and deploying solutions tailored to your Pretoria business’s unique needs, workflows, and goals."
              }
            },
            {
              "@type": "Question",
              "name": "How much does custom development cost in Pretoria?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "012 Agency offers custom development packages starting from R18,780. Pricing depends on complexity, features, and integrations required for your Pretoria project."
              }
            },
            {
              "@type": "Question",
              "name": "What technologies do you use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We use React, Node.js, MongoDB, AWS, and other modern technologies to build scalable, secure solutions for Pretoria businesses."
              }
            },
            {
              "@type": "Question",
              "name": "Can you integrate with my existing systems?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We specialize in API development and integration, connecting your Pretoria business with CRMs, ERPs, payment gateways, and more."
              }
            },
            {
              "@type": "Question",
              "name": "How long does a custom project take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Project timelines vary, but most Pretoria custom development projects take 2–12 weeks depending on requirements and scope."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide support and maintenance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All packages include 6–12 months of support for Pretoria clients. Ongoing maintenance plans are also available."
              }
            },
            {
              "@type": "Question",
              "name": "Can you build mobile apps?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we develop cross-platform mobile apps and integrate them with your web systems for Pretoria businesses."
              }
            },
            {
              "@type": "Question",
              "name": "Is my data secure?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Security is a top priority. We follow best practices for authentication, encryption, and data protection for Pretoria clients."
              }
            },
            {
              "@type": "Question",
              "name": "Do you sign NDAs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we sign NDAs to protect your ideas and business information throughout the custom development process in Pretoria."
              }
            },
            {
              "@type": "Question",
              "name": "Which areas of Pretoria do you serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve all of Pretoria and surrounding areas, including Centurion, Hatfield, Brooklyn, Pretoria East, and more."
              }
            }
          ]
        }
        `}
      </script>
      {/* END: FAQPage Structured Data for Custom Development Pretoria */}
      {/* Service Packages */}
      <div className="max-w-7xl mx-auto mb-16 text-center mt-24">
        <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Calculate Your Custom Dev Quote</h2>
        <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          Need a specific system or integration? Use our calculator to get an instant estimate.
        </p>
        <Link href="/quote" className="inline-block bg-[#FFD700] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#FFE44D] transition-colors">
          Calculate Your Quote
        </Link>
      </div>

      {/* Technologies */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-[#FFD700] text-center mb-8">Technologies We Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 rounded-lg p-6 text-center border border-[#FFD700]/20"
            >
              <div className="flex items-center justify-center mb-4">
                {tech.icon}
              </div>
              <h3 className="text-lg font-bold text-[#FFD700]">{tech.name}</h3>
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
            {serviceFAQs['custom-development']?.map((faq, index) => (
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
        currentService="Custom Development"
        services={[
          {
            href: '/services/website-maintenance',
            anchor: 'Website Maintenance',
            title: 'Website Maintenance Services',
            description: 'Keep your custom-built solutions running smoothly with our maintenance services'
          },
          {
            href: '/services/mobile-solutions',
            anchor: 'Mobile Solutions',
            title: 'Mobile Development Services',
            description: 'Extend your web applications with custom mobile solutions'
          },
          {
            href: '/services/ecommerce',
            anchor: 'E-commerce Solutions',
            title: 'E-commerce Development',
            description: 'Build custom e-commerce solutions tailored to your business needs'
          }
        ]}
      />

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Custom Solution?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Contact us for a free consultation and let's bring your vision to life
          </p>
          <GetInTouchButton variant="primary" text="Start Your Project" className="text-lg" />
        </div>
      </section>
      <div className="mt-4 text-center">
        <p className="text-neutral-400 text-sm">
          Learn more on our
          {" "}
          <Link href="/" className="text-[#FFD700] hover:underline">Pretoria web development agency</Link>
          {" "}
          homepage.
        </p>
      </div>
    </div>
  );
};

export default CustomDevelopmentPage;
