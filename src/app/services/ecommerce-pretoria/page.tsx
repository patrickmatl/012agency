'use client';

import { motion } from 'framer-motion';

import RelatedServices from '@/components/RelatedServices';
import GetInTouchButton from '@/components/GetInTouchButton';
import { serviceFAQs } from '@/data/serviceFAQs';
import Link from 'next/link';

const EcommercePage = () => {


  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Ecommerce Website Design Pretoria',
            description:
              'Ecommerce website design services in Pretoria by 012 Agency. High-converting online stores with secure payments, fast performance and scalable architecture.',
            url: 'https://012agency.co.za/services/ecommerce-pretoria',
            serviceType: 'Ecommerce website design',
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
      <section className="max-w-6xl mx-auto pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-syne font-bold mb-6 text-[#FFD700]">
              Online stores built to sell, not just look good
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              We design ecommerce experiences that feel premium, load quickly and guide customers all the way from product discovery to checkout. Every detail is aligned with how your Pretoria customers actually shop.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              From clean product pages and intuitive filters to trust‑building content and clear shipping information, we structure your store so buying feels simple and safe.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              Behind the scenes, your store is set up for growth: robust tracking, scalable architecture and integrations that save your team hours every week.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Conversion‑focused product pages
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Strong visuals, clear information and persuasive copy help visitors understand value and move to cart with confidence.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Checkout that feels effortless
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Streamlined checkout flows, local payment methods and mobile‑first design reduce friction and cart abandonment.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Ready for campaigns
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Campaign landing pages, promo banners and tracking are baked in so you can run sales and launches with ease.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Built for Pretoria and beyond
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                We design for local buyers first while keeping your store ready to scale nationally and internationally.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* BEGIN: Visually Hidden SEO Headings H1-H5 for Ecommerce Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h2 className="text-3xl font-bold text-white mt-12 mb-6 font-syne">Professional E-Commerce Website Design in Pretoria | 012 Agency</h2>
        <p className="leading-relaxed text-lg mb-4">012 Agency builds high-converting ecommerce websites for Pretoria businesses, using modern platforms and best practices for SEO, security, and sales. Our team specializes in designing custom online stores that are tailored to your brand and target audience in Pretoria, ensuring your business stands out in a competitive digital marketplace.</p>
        <p className="leading-relaxed text-lg mb-4">With a deep understanding of the Pretoria business landscape, we create ecommerce solutions that drive sales, streamline operations, and provide a seamless user experience across all devices. From initial strategy to launch and beyond, we support Pretoria businesses every step of the way.</p>
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Pretoria’s Leading E-Commerce Development Agency</h3>
        <p className="leading-relaxed text-lg mb-4">Our Pretoria team specializes in ecommerce solutions, including WooCommerce, Shopify, and custom platforms. We help Pretoria retailers, wholesalers, and entrepreneurs launch and grow successful online stores by leveraging the latest technologies and proven digital marketing strategies.</p>
        <p className="leading-relaxed text-lg mb-4">As a leading ecommerce agency in Pretoria, we offer comprehensive services—from UX/UI design and payment integration to inventory management and analytics—ensuring your ecommerce business is equipped for long-term success and scalability.</p>
        <h4 className="text-xl font-bold text-white mt-6 mb-3">Custom Online Store Features for Pretoria Businesses</h4>
        <p className="leading-relaxed text-lg mb-4">Enjoy advanced features such as secure payment gateways, real-time inventory tracking, detailed analytics, mobile optimization, and local delivery options tailored for Pretoria customers. Our Pretoria ecommerce experts deliver scalable, future-proof solutions that adapt as your business grows.</p>
        <p className="leading-relaxed text-lg mb-4">We also provide custom functionality, including loyalty programs, automated marketing, and integration with third-party tools, giving Pretoria businesses the flexibility to innovate and expand their online presence.</p>
        <h5 className="text-lg font-bold text-[#FFD700] mt-4 mb-2">Affordable E-Commerce Packages & Pricing in Pretoria</h5>
        <p className="leading-relaxed text-lg mb-4">Choose from affordable ecommerce packages for Pretoria startups, SMEs, and established brands. Our transparent pricing structure and flexible options make it easy for businesses of any size to launch or upgrade their online store without breaking the bank.</p>
        <p className="leading-relaxed text-lg mb-4">Every package includes consultation, design, development, testing, and support, so Pretoria businesses receive a comprehensive solution that fits their goals and budget. We are committed to delivering exceptional value and measurable results.</p>
        <h5>Why Choose 012 Agency for E-Commerce in Pretoria?</h5>
        <p className="leading-relaxed text-lg mb-4">Local expertise, fast support, and proven results. 012 Agency is Pretoria’s trusted ecommerce partner for businesses that want to sell more online. Our track record of successful projects and satisfied clients speaks for itself.</p>
        <p className="leading-relaxed text-lg mb-4">We prioritize open communication, ongoing support, and continuous improvement, helping Pretoria businesses achieve lasting growth and a strong digital presence in the ecommerce space.</p>
      </section>
      {/* END: Visually Hidden SEO Headings H1-H5 for Ecommerce Pretoria */}
      {/* BEGIN: Visually Hidden Ecommerce FAQ for Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Frequently Asked Questions about E-Commerce Website Design in Pretoria</h3>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How much does an ecommerce website cost in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Ecommerce website packages at 012 Agency start from R19,780 for a basic store and go up to R27,980+ for advanced features. Pricing depends on the number of products, integrations, and customizations. All packages include mobile optimization and SEO best practices.</p><p className="leading-relaxed text-lg mb-4">We provide detailed, transparent quotes for Pretoria businesses, ensuring you understand exactly what’s included. Our team works with you to select the right package for your needs and budget, with no hidden fees or surprises.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Which ecommerce platforms do you use?</h4><p className="leading-relaxed text-lg mb-4">We build ecommerce sites using WooCommerce, Shopify, and custom solutions based on your Pretoria business needs. Our team evaluates your goals and recommends the best platform for long-term growth and scalability.</p><p className="leading-relaxed text-lg mb-4">By leveraging industry-leading platforms, we ensure your Pretoria store is secure, easy to manage, and ready to support your business as it evolves.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you integrate local payment gateways for South Africa?</h4><p className="leading-relaxed text-lg mb-4">Yes, we integrate all major South African payment gateways (PayFast, Yoco, PayGate, Ozow, etc.), as well as international options. Your Pretoria customers can pay securely online using their preferred method, increasing trust and convenience.</p><p className="leading-relaxed text-lg mb-4">Our team also assists with compliance and security best practices, so your ecommerce store meets all regulatory requirements and provides a safe shopping experience.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer training and support?</h4><p className="leading-relaxed text-lg mb-4">All ecommerce packages include training for your Pretoria team and ongoing support (3–12 months, depending on package). We ensure you can manage your store with confidence, from adding products to processing orders and analyzing sales.</p><p className="leading-relaxed text-lg mb-4">Our Pretoria-based support team is available to answer questions, resolve issues, and provide guidance as your business grows, ensuring you always have expert help when you need it.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can I update products and prices myself?</h4><p className="leading-relaxed text-lg mb-4">Yes, you get a user-friendly admin dashboard to manage products, pricing, orders, and more. We provide training and documentation for Pretoria business owners, so you can make updates quickly and easily.</p><p className="leading-relaxed text-lg mb-4">This flexibility empowers Pretoria businesses to stay agile, respond to market changes, and keep their online store up to date without relying on outside help.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer SEO and marketing for ecommerce?</h4><p className="leading-relaxed text-lg mb-4">We optimize every ecommerce site for Pretoria search results and offer add-on digital marketing services (SEO, Google Ads, social media) to help you attract more customers. Our SEO strategies are designed to boost your visibility and drive targeted traffic to your store.</p><p className="leading-relaxed text-lg mb-4">By combining technical SEO, compelling content, and effective marketing campaigns, we help Pretoria ecommerce businesses achieve higher rankings, increased sales, and sustainable growth.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What makes your ecommerce websites different?</h4><p className="leading-relaxed text-lg mb-4">We combine Pretoria market insights, conversion-focused design, and technical expertise to deliver ecommerce sites that sell. Our local team provides fast support and tailored solutions for Pretoria businesses, ensuring your store stands out from the competition.</p><p className="leading-relaxed text-lg mb-4">With a focus on user experience, advanced features, and ongoing optimization, we help Pretoria businesses maximize their online potential and achieve lasting success.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How long does it take to launch an ecommerce site?</h4><p className="leading-relaxed text-lg mb-4">Most Pretoria ecommerce projects take 2–6 weeks, depending on requirements. We offer fast turnaround for urgent projects—contact us for a timeline estimate and we’ll work to meet your deadlines.</p><p className="leading-relaxed text-lg mb-4">Our efficient process ensures your Pretoria business can start selling online quickly, with minimal disruption and maximum impact.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you migrate my existing store to a new platform?</h4><p className="leading-relaxed text-lg mb-4">Yes, we handle migrations from Wix, Shopify, WooCommerce, Magento, and more. Our Pretoria team ensures a smooth transition with minimal downtime, preserving your data and customer information.</p><p className="leading-relaxed text-lg mb-4">We also provide post-migration support and training, so you can make the most of your new ecommerce platform from day one.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Which areas of Pretoria do you serve?</h4><p className="leading-relaxed text-lg mb-4">We serve all of Pretoria and surrounding suburbs, including Pretoria East, Centurion, Hatfield, Brooklyn, and more. Our digital-first approach allows us to work with clients remotely or on-site, providing the same high level of service wherever your business is based.</p><p className="leading-relaxed text-lg mb-4">No matter your location in Pretoria, 012 Agency is ready to help you build, launch, and grow a successful ecommerce store.</p></div>
      </section>
      {/* END: Visually Hidden Ecommerce FAQ for Pretoria */}
      {/* BEGIN: FAQPage Structured Data for Ecommerce Pretoria */}
      <script type="application/ld+json" suppressHydrationWarning>
        {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does an ecommerce website cost in Pretoria?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ecommerce website packages at 012 Agency start from R19,780 for a basic store and go up to R27,980+ for advanced features. Pricing depends on the number of products, integrations, and customizations. All packages include mobile optimization and SEO best practices."
              }
            },
            {
              "@type": "Question",
              "name": "Which ecommerce platforms do you use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We build ecommerce sites using WooCommerce, Shopify, and custom solutions based on your Pretoria business needs. We recommend the best platform for your goals and budget."
              }
            },
            {
              "@type": "Question",
              "name": "Can you integrate local payment gateways for South Africa?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we integrate all major South African payment gateways (PayFast, Yoco, PayGate, Ozow, etc.), as well as international options. Your Pretoria customers can pay securely online."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer training and support?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All ecommerce packages include training for your Pretoria team and ongoing support (3–12 months, depending on package). We ensure you can manage your store with confidence."
              }
            },
            {
              "@type": "Question",
              "name": "Can I update products and prices myself?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you get a user-friendly admin dashboard to manage products, pricing, orders, and more. We provide training and documentation for Pretoria business owners."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer SEO and marketing for ecommerce?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We optimize every ecommerce site for Pretoria search results and offer add-on digital marketing services (SEO, Google Ads, social media) to help you attract more customers."
              }
            },
            {
              "@type": "Question",
              "name": "What makes your ecommerce websites different?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We combine Pretoria market insights, conversion-focused design, and technical expertise to deliver ecommerce sites that sell. Our local team provides fast support and tailored solutions for Pretoria businesses."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to launch an ecommerce site?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most Pretoria ecommerce projects take 2–6 weeks, depending on requirements. We offer fast turnaround for urgent projects—contact us for a timeline estimate."
              }
            },
            {
              "@type": "Question",
              "name": "Can you migrate my existing store to a new platform?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we handle migrations from Wix, Shopify, WooCommerce, Magento, and more. We ensure a smooth transition for Pretoria businesses upgrading their online store."
              }
            },
            {
              "@type": "Question",
              "name": "Which areas of Pretoria do you serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve all of Pretoria and surrounding suburbs, including Pretoria East, Centurion, Hatfield, Brooklyn, and more. Remote and on-site consultations available."
              }
            }
          ]
        }
        `}
      </script>
      {/* END: FAQPage Structured Data for Ecommerce Pretoria */}
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">E-Commerce Solutions</h1>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
          Build a powerful online store with our professional e-commerce solutions
        </p>
      </div>

      {/* Packages Grid */}
      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Calculate Your E-Commerce Quote</h2>
        <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          Need specific integrations or product counts? Use our calculator to get an instant estimate.
        </p>
        <Link href="/quote" className="inline-block bg-[#FFD700] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#FFE44D] transition-colors">
          Calculate Your Quote
        </Link>
      </div>

      {/* Additional Features */}


      {/* FAQ Section */}
      <section className="py-20 bg-neutral-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {serviceFAQs['ecommerce']?.map((faq, index) => (
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
        currentService="E-commerce"
        services={[
          {
            href: '/services/website-maintenance',
            anchor: 'Website Maintenance',
            title: 'Website Maintenance Services',
            description: 'Keep your e-commerce site running smoothly with our maintenance services'
          },
          {
            href: '/services/custom-development',
            anchor: 'Custom Development',
            title: 'Custom Development Services',
            description: 'Get custom features and integrations for your e-commerce platform'
          },
          {
            href: '/services/google-ads',
            anchor: 'Google Ads',
            title: 'Google Ads Management',
            description: 'Drive sales with targeted Google Ads campaigns for your e-commerce store'
          }
        ]}
      />

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Launch Your Online Store?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Contact us for a free consultation and let's create your perfect e-commerce solution
          </p>
          <GetInTouchButton variant="primary" text="Start Your Project" className="text-lg" />
        </div>
      </section>

      {/* Contextual link to homepage with varied phrasing */}
      <div className="max-w-4xl mx-auto px-4 text-center mt-6">
        <p className="text-neutral-400 text-sm">
          Learn more about our <Link href="/" className="text-[#FFD700] hover:underline">Pretoria eCommerce web design</Link> on the homepage.
        </p>
      </div>
    </div>
  );
};

export default EcommercePage;
