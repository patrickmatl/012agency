'use client';

import Breadcrumb from '@/components/Breadcrumb';

import RelatedServices from '@/components/RelatedServices';
import GetInTouchButton from '@/components/GetInTouchButton';
import Link from 'next/link';

export default function MarketingMaterialsPage() {




  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Marketing Materials Design Pretoria',
            description:
              'Marketing materials design services in Pretoria by 012 Agency. Cohesive collateral for print and digital that ties your brand together.',
            url: 'https://012agency.co.za/services/marketing-materials-pretoria',
            serviceType: 'Marketing materials design',
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
      <section className="w-full px-4 md:px-8 pt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-syne font-bold mb-6 text-[#FFD700]">
              Marketing materials that tie your whole brand together
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              Instead of random one-off designs, we build a connected family of marketing pieces – from business cards and brochures to pull-up banners and sales sheets – that all feel like they belong to the same Pretoria brand.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              Each piece is designed with a job to do: start a conversation at an event, support your sales pitch, or follow up after a meeting. We keep layouts clean, messaging clear and calls-to-action obvious.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              Over time, your audience sees the same colours, fonts and tone across print and digital, which builds trust and makes your business instantly recognisable across Pretoria.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Cohesive brand kits
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Business cards, letterheads, folders and email signatures designed as one system so every touchpoint matches.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Campaign-ready assets
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Flyers, brochures and inserts created with offers, QR codes and URLs that fit into your wider campaigns.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Event and expo support
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Banners, table talkers and handouts designed specifically for Pretoria events, expos and activations.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Print and digital versions
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                We supply both print-ready files and optimised digital versions so you can use your materials everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* BEGIN: Visually Hidden SEO Headings H1-H5 for Marketing Materials Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h2 className="text-3xl font-bold text-white mt-12 mb-6 font-syne">Marketing Materials Design in Pretoria | 012 Agency</h2>
        <p className="leading-relaxed text-lg mb-4">012 Agency specializes in designing high-quality marketing materials for businesses in Pretoria, ranging from business cards and brochures to banners, stationery, and digital assets. Our expert design team ensures that every piece of marketing collateral is aligned with your brand identity, helping you make a memorable impression in a competitive marketplace.</p>
        <p className="leading-relaxed text-lg mb-4">By leveraging the latest design trends and print technologies, we provide Pretoria companies with marketing materials that not only look stunning but also drive engagement and conversions. Our solutions are tailored to suit the unique needs of startups, SMEs, and large enterprises across Pretoria and surrounding areas.</p>
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Pretoria’s Leading Marketing Materials Agency</h3>
        <p className="leading-relaxed text-lg mb-4">As Pretoria’s top marketing materials agency, 012 Agency delivers creative excellence and reliable service on every project. Our team works closely with clients to understand their goals, ensuring that each design not only captures attention but also communicates your brand’s message effectively.</p>
        <p className="leading-relaxed text-lg mb-4">We offer end-to-end solutions, from concept development to print management, making us the preferred partner for Pretoria businesses seeking impactful marketing materials. Our commitment to quality and client satisfaction sets us apart in the Pretoria design industry.</p>
        <h4 className="text-xl font-bold text-white mt-6 mb-3">Business Collateral & Print Design for Pretoria Companies</h4>
        <p className="leading-relaxed text-lg mb-4">Our comprehensive business collateral services include the design of business cards, letterheads, flyers, presentations, signage, and more—each crafted to enhance your brand’s visibility and credibility in Pretoria. We understand the importance of cohesive branding across all touchpoints and ensure your materials reflect professionalism and consistency.</p>
        <p className="leading-relaxed text-lg mb-4">Whether you need a single item or a full suite of print and digital collateral, our Pretoria-based team delivers results that help your business stand out. We also offer guidance on material selection, finishes, and print specifications to maximize the impact of your marketing investment.</p>
        <h5 className="text-lg font-bold text-[#FFD700] mt-4 mb-2">Affordable Marketing Materials Packages in Pretoria</h5>
        <p className="leading-relaxed text-lg mb-4">Our marketing materials packages are designed to be both affordable and comprehensive, catering to Pretoria SMEs, corporates, and entrepreneurs. Clients can choose from essential to enterprise packages, each offering transparent pricing, fast turnaround, and a wide range of design options.</p>
        <p className="leading-relaxed text-lg mb-4">We believe that every Pretoria business deserves access to professional marketing materials, regardless of size or budget. With 012 Agency, you get value-driven solutions that boost your brand without breaking the bank.</p>
        <h5>Why Choose 012 Agency for Marketing Materials in Pretoria?</h5>
        <p className="leading-relaxed text-lg mb-4">012 Agency is recognized for local expertise, creative innovation, and dependable service. Our Pretoria team combines years of experience with a passion for design, ensuring every project exceeds expectations and delivers measurable results.</p>
        <p className="leading-relaxed text-lg mb-4">From initial consultation to final delivery, we prioritize clear communication, timely execution, and ongoing support. Join the many Pretoria businesses that trust 012 Agency as their go-to partner for marketing materials and brand growth.</p>
      </section>
      {/* END: Visually Hidden SEO Headings H1-H5 for Marketing Materials Pretoria */}
      {/* BEGIN: Visually Hidden Marketing Materials FAQ for Pretoria */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Frequently Asked Questions about Marketing Materials in Pretoria</h3>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What marketing materials do you design?</h4><p className="leading-relaxed text-lg mb-4">We design a comprehensive range of marketing materials for Pretoria businesses, including business cards, letterheads, brochures, banners, signage, presentations, and digital assets. Our team ensures each item is custom-crafted to match your brand and marketing objectives.</p><p className="leading-relaxed text-lg mb-4">Whether you need a single piece or a full suite of collateral, we have the expertise to deliver high-impact designs that resonate with your target audience and enhance your brand’s visibility in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How much do marketing materials cost in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">012 Agency offers marketing material packages starting from R3,850, with pricing tailored to the specific items, complexity, and quantity required. We provide transparent quotes and detailed breakdowns so you know exactly what you’re getting.</p><p className="leading-relaxed text-lg mb-4">Our packages are designed to deliver exceptional value for Pretoria businesses of all sizes, ensuring you receive professional-quality materials without hidden fees or unexpected costs.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you help with print management?</h4><p className="leading-relaxed text-lg mb-4">Yes, we provide end-to-end print management and quality control for Pretoria clients, coordinating with trusted printers to ensure your materials are produced to the highest standards. Our team oversees every step, from file preparation to final delivery.</p><p className="leading-relaxed text-lg mb-4">This comprehensive service saves you time, reduces errors, and guarantees professional results, allowing you to focus on your business while we handle the logistics.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you provide source files?</h4><p className="leading-relaxed text-lg mb-4">Absolutely. All final designs include editable source files for Pretoria clients, giving you full control and flexibility for future updates or reprints. We use industry-standard formats compatible with major print shops and digital platforms.</p><p className="leading-relaxed text-lg mb-4">Having access to source files ensures your brand assets remain consistent and easily adaptable as your Pretoria business evolves.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you design for both print and digital?</h4><p className="leading-relaxed text-lg mb-4">Yes, we create marketing materials optimized for both print and digital use, including social media graphics, presentations, and email templates. Our Pretoria designers understand the nuances of each medium, ensuring your brand looks great everywhere.</p><p className="leading-relaxed text-lg mb-4">We also provide guidance on file formats, color profiles, and resolution to guarantee the best results across all channels.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How long does a marketing materials project take?</h4><p className="leading-relaxed text-lg mb-4">Most Pretoria marketing materials projects are completed within 3–10 days, depending on the number of items, complexity, and revision rounds. We prioritize efficiency without compromising quality, keeping you informed at every stage.</p><p className="leading-relaxed text-lg mb-4">For urgent needs, we offer rush services to ensure your materials are delivered on time for important events or campaigns.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How many revisions are included?</h4><p className="leading-relaxed text-lg mb-4">Revision rounds vary by package, but all Pretoria clients receive at least 2–3 rounds of revisions to ensure complete satisfaction. We believe in a collaborative process, working closely with you to refine each design until it meets your expectations.</p><p className="leading-relaxed text-lg mb-4">Additional revisions can be arranged if needed, providing flexibility and peace of mind for your Pretoria business.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you design custom items?</h4><p className="leading-relaxed text-lg mb-4">Yes, we offer fully custom design services for unique marketing materials tailored to your Pretoria business needs. From specialty packaging to event signage, our team can bring any vision to life.</p><p className="leading-relaxed text-lg mb-4">We welcome creative challenges and enjoy collaborating with Pretoria clients on one-of-a-kind projects that make a statement.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you update my existing materials?</h4><p className="leading-relaxed text-lg mb-4">We can refresh or update your current marketing materials to reflect new branding, messaging, or design trends. Our Pretoria team works efficiently to ensure a seamless transition and consistent brand presence across all touchpoints.</p><p className="leading-relaxed text-lg mb-4">Updating your materials is a cost-effective way to keep your brand relevant and competitive in the Pretoria market.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Which areas of Pretoria do you serve?</h4><p className="leading-relaxed text-lg mb-4">We serve all of Pretoria and surrounding regions, including Centurion, Hatfield, Brooklyn, Pretoria East, and more. Our digital-first approach allows us to work with clients remotely, providing the same high level of service and support regardless of location.</p><p className="leading-relaxed text-lg mb-4">No matter where your business is based in Pretoria, 012 Agency is ready to help you elevate your marketing materials and brand presence.</p></div>
      </section>
      {/* END: Visually Hidden Marketing Materials FAQ for Pretoria */}
      {/* BEGIN: FAQPage Structured Data for Marketing Materials Pretoria */}
      <script type="application/ld+json" suppressHydrationWarning>
        {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What marketing materials do you design?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We design business cards, letterheads, brochures, banners, signage, presentations, and more for Pretoria businesses."
              }
            },
            {
              "@type": "Question",
              "name": "How much do marketing materials cost in Pretoria?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "012 Agency offers packages starting from R3,850. Pricing depends on the items, complexity, and quantity needed."
              }
            },
            {
              "@type": "Question",
              "name": "Can you help with print management?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer print management and quality control for Pretoria clients to ensure professional results."
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
              "name": "Can you design for both print and digital?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! We create marketing materials for print and digital use, including social media and presentations."
              }
            },
            {
              "@type": "Question",
              "name": "How long does a marketing materials project take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most Pretoria projects are completed within 3–10 days, depending on the number of items and revisions."
              }
            },
            {
              "@type": "Question",
              "name": "How many revisions are included?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Revision rounds vary by package, but all Pretoria clients receive at least 2–3 rounds."
              }
            },
            {
              "@type": "Question",
              "name": "Do you design custom items?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer custom design for unique marketing materials to suit your Pretoria business needs."
              }
            },
            {
              "@type": "Question",
              "name": "Can you update my existing materials?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we can refresh or update your current marketing materials for Pretoria businesses."
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
      {/* END: FAQPage Structured Data for Marketing Materials Pretoria */}
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm px-4 md:px-8 pb-16 mt-12">
        <Breadcrumb items={[
          { label: 'Services & Pricing', href: '/services' },
          { label: 'Marketing Materials', href: '/services/marketing-materials-pretoria' }
        ]} />

        <div className="max-w-7xl mx-auto mb-16 text-center mt-12">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Calculate Your Custom Marketing Quote</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Need specific items or a full branding suite? Use our calculator to get an instant estimate.
          </p>
          <Link href="/quote" className="inline-block bg-[#FFD700] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#FFE44D] transition-colors">
            Calculate Your Quote
          </Link>
        </div>



        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#FFD700]">Our Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Discovery & Design</h3>
              <ul className="space-y-2 text-white/80">
                <li className="text-neutral-300">• Brand Analysis</li>
                <li className="text-neutral-300">• Concept Development</li>
                <li className="text-neutral-300">• Design Creation</li>
                <li className="text-neutral-300">• Client Review</li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Refinement & Delivery</h3>
              <ul className="space-y-2 text-white/80">
                <li className="text-neutral-300">• Revisions</li>
                <li className="text-neutral-300">• Final Approval</li>
                <li className="text-neutral-300">• File Preparation</li>
                <li className="text-neutral-300">• Quality Control</li>
              </ul>
            </div>
          </div>
        </section>

        <RelatedServices
          currentService="Marketing Materials"
          services={[
            {
              title: 'Content Marketing',
              description: 'Engage your audience with high-quality, SEO-optimized content.',
              href: '/services/content-marketing',
              anchor: 'View Content Marketing'
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
            Learn more about our <Link href="/" className="text-[#FFD700] hover:underline">Pretoria marketing design studio</Link> on the homepage.
          </p>
        </div>
      </div>
    </main>
  );
}
