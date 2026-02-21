'use client';

import { motion } from 'framer-motion';

import RelatedServices from '@/components/RelatedServices';
import GetInTouchButton from '@/components/GetInTouchButton';
import { serviceFAQs } from '@/data/serviceFAQs';
import Link from 'next/link';

const MobileSolutionsPage = () => {




  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Mobile Solutions Pretoria',
            description:
              'Mobile solutions in Pretoria by 012 Agency. Mobile-first websites, PWAs and custom mobile apps built for performance and scale.',
            url: 'https://012agency.co.za/services/mobile-solutions-pretoria',
            serviceType: 'Mobile solutions development',
            category: 'Web and mobile development services',
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
      {/* BEGIN: Visually Hidden SEO Headings H1-H5 for Mobile Solutions Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h2 className="text-3xl font-bold text-white mt-12 mb-6 font-syne">Mobile Solutions Development in Pretoria | 012 Agency</h2>
        <p className="leading-relaxed text-lg mb-4">012 Agency delivers innovative mobile solutions in Pretoria, including mobile-first websites, progressive web apps, and custom mobile applications for businesses and startups. Our team is dedicated to creating digital experiences that drive engagement, increase conversions, and provide seamless user journeys on any device.</p>
        <p className="leading-relaxed text-lg mb-4">We understand the Pretoria market and tailor our mobile solutions to meet the specific needs of local companies, ensuring your business stays competitive in a rapidly evolving digital landscape. Our expertise covers strategy, design, development, and ongoing support for all types of mobile projects.</p>
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Pretoria’s Leading Mobile App & Web Development Agency</h3>
        <p className="leading-relaxed text-lg mb-4">As Pretoria’s top mobile app and web development agency, 012 Agency combines technical excellence with creative problem-solving. We help businesses transform their ideas into high-performing mobile applications that delight users and deliver measurable results.</p>
        <p className="leading-relaxed text-lg mb-4">Our Pretoria-based team stays ahead of industry trends, utilizing the latest frameworks and tools to build scalable, secure, and user-friendly mobile solutions. We offer end-to-end service, from initial consultation to post-launch optimization.</p>
        <h4 className="text-xl font-bold text-white mt-6 mb-3">Mobile-First Websites & PWAs for Pretoria Businesses</h4>
        <p className="leading-relaxed text-lg mb-4">We specialize in designing and developing mobile-first websites and progressive web apps (PWAs) that are fast, reliable, and engaging. Our Pretoria clients benefit from solutions that perform flawlessly across all devices, boosting brand visibility and customer satisfaction.</p>
        <p className="leading-relaxed text-lg mb-4">By focusing on responsive design, intuitive navigation, and advanced features, we ensure your Pretoria business stands out online and provides users with a superior experience, whether they access your site on a smartphone, tablet, or desktop.</p>
        <h5 className="text-lg font-bold text-[#FFD700] mt-4 mb-2">Affordable Mobile Solutions Packages in Pretoria</h5>
        <p className="leading-relaxed text-lg mb-4">Our mobile solutions packages are competitively priced and designed to suit Pretoria businesses of all sizes. From startups seeking a simple mobile site to enterprises requiring complex custom apps, we provide transparent pricing, flexible options, and exceptional value.</p>
        <p className="leading-relaxed text-lg mb-4">Each package includes consultation, design, development, testing, and support, ensuring your Pretoria business receives a comprehensive solution tailored to its goals and budget.</p>
        <h5>Why Choose 012 Agency for Mobile Solutions in Pretoria?</h5>
        <p className="leading-relaxed text-lg mb-4">012 Agency is trusted by Pretoria businesses for our expertise in mobile UX, local support, and a proven track record of successful projects. We are committed to delivering solutions that not only meet but exceed client expectations.</p>
        <p className="leading-relaxed text-lg mb-4">Our collaborative approach, attention to detail, and dedication to ongoing support make us the preferred partner for mobile solutions in Pretoria. We help you navigate the digital landscape with confidence and achieve sustainable growth.</p>
      </section>
      {/* END: Visually Hidden SEO Headings H1-H5 for Mobile Solutions Pretoria */}
      {/* BEGIN: Visually Hidden Mobile Solutions FAQ for Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Frequently Asked Questions about Mobile Solutions in Pretoria</h3>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What types of mobile solutions do you offer?</h4><p className="leading-relaxed text-lg mb-4">We offer a wide range of mobile solutions for Pretoria businesses, including mobile-first websites, progressive web apps (PWAs), and fully custom mobile app development. Each solution is tailored to your specific business goals and technical requirements.</p><p className="leading-relaxed text-lg mb-4">Our Pretoria team works closely with you from concept to launch, ensuring your mobile solution is innovative, scalable, and aligned with your brand identity. We also provide ongoing support and optimization as your needs evolve.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How much does mobile development cost in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Our mobile development packages start from R16,780 for mobile-first websites, with pricing for PWAs and custom solutions varying based on features, complexity, and integration needs. We provide transparent quotes and detailed project scopes for Pretoria clients.</p><p className="leading-relaxed text-lg mb-4">012 Agency is committed to delivering value-driven solutions, ensuring Pretoria businesses receive high-quality mobile products without unexpected costs or hidden fees.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you build both Android and iOS solutions?</h4><p className="leading-relaxed text-lg mb-4">Yes, we use cross-platform frameworks to develop mobile solutions compatible with both Android and iOS devices, maximizing your reach in Pretoria and beyond. Our approach ensures consistent performance and user experience across all platforms.</p><p className="leading-relaxed text-lg mb-4">We also offer platform-specific customization when required, allowing Pretoria clients to leverage unique features of each operating system for optimal results.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you convert my website into a mobile app?</h4><p className="leading-relaxed text-lg mb-4">Absolutely! We can transform your existing Pretoria website into a mobile-friendly app or progressive web app (PWA), enhancing accessibility and user engagement. Our team evaluates your current site and recommends the best approach for a seamless transition.</p><p className="leading-relaxed text-lg mb-4">This service is ideal for Pretoria businesses looking to expand their digital presence and offer customers a more convenient, app-like experience.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How long does a mobile project take?</h4><p className="leading-relaxed text-lg mb-4">Most Pretoria mobile projects are delivered within 2–8 weeks, depending on the scope, complexity, and number of features required. We provide clear timelines and regular updates throughout the project lifecycle.</p><p className="leading-relaxed text-lg mb-4">For urgent requirements, we offer expedited development options to ensure your mobile solution is ready when you need it most.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you provide support and maintenance?</h4><p className="leading-relaxed text-lg mb-4">Yes, all our mobile solutions packages include support and maintenance for Pretoria clients. We handle updates, bug fixes, and performance monitoring to keep your app running smoothly.</p><p className="leading-relaxed text-lg mb-4">Ongoing maintenance contracts are available for businesses that require continuous improvements, security updates, and technical assistance.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you integrate third-party APIs?</h4><p className="leading-relaxed text-lg mb-4">We regularly integrate third-party APIs for payments, analytics, social media, and more in Pretoria mobile solutions. Our team ensures seamless connectivity and robust functionality to enhance your app’s capabilities.</p><p className="leading-relaxed text-lg mb-4">API integration allows Pretoria businesses to automate processes, gather insights, and provide users with advanced features tailored to their needs.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What is a Progressive Web App (PWA)?</h4><p className="leading-relaxed text-lg mb-4">A Progressive Web App (PWA) is a web application that combines the best features of web and native apps, including offline access, push notifications, and installability. PWAs are ideal for Pretoria businesses seeking cost-effective, high-performance mobile solutions.</p><p className="leading-relaxed text-lg mb-4">We help Pretoria companies leverage PWAs to improve user engagement, increase conversions, and reduce development costs compared to traditional native apps.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer custom features?</h4><p className="leading-relaxed text-lg mb-4">Yes, we build custom mobile solutions tailored to your Pretoria business needs and goals. Our team collaborates with you to identify unique requirements and develop features that set your app apart from the competition.</p><p className="leading-relaxed text-lg mb-4">From advanced analytics to unique user flows, we ensure your Pretoria mobile solution is truly one-of-a-kind and aligned with your business objectives.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Which areas of Pretoria do you serve?</h4><p className="leading-relaxed text-lg mb-4">We serve all of Pretoria and nearby regions, including Centurion, Hatfield, Brooklyn, Pretoria East, and more. Our digital-first approach allows us to work with clients remotely, providing top-tier service regardless of location.</p><p className="leading-relaxed text-lg mb-4">No matter where your business is based in Pretoria, 012 Agency is ready to deliver mobile solutions that drive growth and innovation.</p></div>
      </section>
      {/* END: Visually Hidden Mobile Solutions FAQ for Pretoria */}
      {/* BEGIN: FAQPage Structured Data for Mobile Solutions Pretoria */}
      <script type="application/ld+json" suppressHydrationWarning>
        {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What types of mobile solutions do you offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer mobile-first websites, progressive web apps (PWAs), and custom mobile app development for Pretoria businesses."
              }
            },
            {
              "@type": "Question",
              "name": "How much does mobile development cost in Pretoria?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our packages start from R16,780 for mobile-first websites. Pricing for PWAs and custom solutions varies by features and complexity."
              }
            },
            {
              "@type": "Question",
              "name": "Do you build both Android and iOS solutions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we use cross-platform frameworks to deliver solutions compatible with both Android and iOS devices for Pretoria clients."
              }
            },
            {
              "@type": "Question",
              "name": "Can you convert my website into a mobile app?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! We can transform your existing Pretoria website into a mobile-friendly app or PWA."
              }
            },
            {
              "@type": "Question",
              "name": "How long does a mobile project take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most Pretoria mobile projects are delivered within 2–8 weeks, depending on scope and requirements."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide support and maintenance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all packages include support. Ongoing maintenance is available for Pretoria clients."
              }
            },
            {
              "@type": "Question",
              "name": "Can you integrate third-party APIs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we regularly integrate APIs for payments, analytics, and more in Pretoria mobile solutions."
              }
            },
            {
              "@type": "Question",
              "name": "What is a Progressive Web App (PWA)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A PWA is a web application with app-like features—offline access, push notifications, and installability—ideal for Pretoria businesses."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer custom features?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we build custom mobile solutions tailored to your Pretoria business needs and goals."
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
      {/* END: FAQPage Structured Data for Mobile Solutions Pretoria */}
      {/* Service Packages */}
      <div className="max-w-7xl mx-auto mb-16 text-center mt-24">
        <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Calculate Your Mobile App Quote</h2>
        <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          Need a PWA or custom mobile features? Use our calculator to get an instant estimate.
        </p>
        <Link href="/quote" className="inline-block bg-[#FFD700] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#FFE44D] transition-colors">
          Calculate Your Quote
        </Link>
      </div>

      {/* FAQs */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-[#FFD700] text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {serviceFAQs['mobile-solutions']?.map((faq, index) => (
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

      {/* Related Services */}
      <RelatedServices
        currentService="Mobile Solutions"
        services={[
          {
            href: '/services/custom-development',
            anchor: 'Custom Development',
            title: 'Custom Development Services',
            description: 'Build custom web applications that integrate with your mobile solutions'
          },
          {
            href: '/services/website-maintenance',
            anchor: 'Website Maintenance',
            title: 'Website Maintenance Services',
            description: 'Keep your mobile and web applications running smoothly'
          },
          {
            href: '/services/ecommerce',
            anchor: 'E-commerce Solutions',
            title: 'E-commerce Development',
            description: 'Create mobile-friendly e-commerce solutions for your business'
          }
        ]}
      />

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Mobile Solution?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Contact us for a free consultation and let's bring your mobile vision to life
          </p>
          <GetInTouchButton variant="primary" text="Start Your Project" className="text-lg" />
        </div>
      </section>
    </div>
  );
};

export default MobileSolutionsPage;
