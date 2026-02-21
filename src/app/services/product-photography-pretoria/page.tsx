
import Link from 'next/link';
import RelatedServices from '@/components/RelatedServices';



const relatedServices = [
  {
    href: '/services/corporate-video-pretoria',
    anchor: 'Corporate Video',
    title: 'Corporate Video Services',
    description: 'Professional video production for businesses and brands in Pretoria.'
  },
  {
    href: '/services/drone-video-pretoria',
    anchor: 'Drone Video',
    title: 'Drone Video Services',
    description: 'Aerial video production for stunning perspectives and dynamic storytelling.'
  },
  {
    href: '/services/photography-pretoria',
    anchor: 'Photography',
    title: 'Photography Services',
    description: 'Professional photography for events, brands, and businesses in Pretoria.'
  }
];

export default function ProductPhotographyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Product Photography Pretoria',
            description:
              'Product photography services in Pretoria by 012 Agency. Studio and on-site shoots with creative styling and fast turnaround.',
            url: 'https://012agency.co.za/services/product-photography-pretoria',
            serviceType: 'Product photography',
            category: 'Photography services',
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
            areaServed: { '@type': 'City', name: 'Pretoria' },
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: 'https://012agency.co.za/get-in-touch-pretoria',
            },
          }),
        }}
      />
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Why Choose Our Product Photography?</h2>
        <ul className="list-disc list-inside space-y-2 text-lg mb-8">
          <li className="text-neutral-300">Studio or on-site product shoots</li>
          <li className="text-neutral-300">Creative styling and backgrounds</li>
          <li className="text-neutral-300">Fast turnaround and professional editing</li>
          <li className="text-neutral-300">Perfect for e-commerce, catalogs, and ads</li>
          <li className="text-neutral-300">Flexible packages for all business sizes</li>
        </ul>
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Get a Custom Photography Quote</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Need a specific number of products or styling options? Use our calculator to get an instant estimate.
          </p>
          <Link href="/quote" className="inline-block bg-[#FFD700] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#FFE44D] transition-colors">
            Calculate Your Quote
          </Link>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/get-in-touch-pretoria" className="px-8 py-3 bg-[#FFD700] text-black rounded-full font-bold text-lg hover:bg-[#FFA500] transition">Book a Shoot</Link>
        </div>
      </section>
      {/* Visually Hidden SEO FAQ Section with Schema.org markup - Batch 1 */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Frequently Asked Questions about Product Photography Pretoria</h3>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What is product photography in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Product photography in Pretoria involves capturing high-quality images of products for e-commerce, catalogs, and marketing.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How much does product photography cost in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Product photography packages in Pretoria start from R1,500, with pricing based on quantity and complexity.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer white background product photography in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, we provide white background and lifestyle product photography in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you photograph large products in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, we can shoot products of all sizes in our Pretoria studio or on location.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you provide Pretoria product photography for e-commerce?</h4><p className="leading-relaxed text-lg mb-4">Yes, we specialize in Pretoria e-commerce product photography for online stores.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Are Pretoria product photos edited and retouched?</h4><p className="leading-relaxed text-lg mb-4">All Pretoria product images include professional editing and retouching.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How are Pretoria product photos delivered?</h4><p className="leading-relaxed text-lg mb-4">Product images are delivered digitally via gallery or download link for Pretoria clients.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you provide Pretoria product photography for Amazon and Takealot?</h4><p className="leading-relaxed text-lg mb-4">Yes, we create Pretoria product photos that meet Amazon and Takealot requirements.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer Pretoria product photography for food and beverages?</h4><p className="leading-relaxed text-lg mb-4">Yes, we shoot food, drinks, and restaurant menu items in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Is Pretoria product photography available for clothing and fashion?</h4><p className="leading-relaxed text-lg mb-4">Yes, we offer Pretoria fashion, apparel, and flat lay product photography.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How do I book a Pretoria product photography session?</h4><p className="leading-relaxed text-lg mb-4">Contact us via our website or phone to book your Pretoria product shoot.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer Pretoria product photography for jewelry?</h4><p className="leading-relaxed text-lg mb-4">Yes, we have experience photographing jewelry and small items in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you shoot Pretoria product videos as well?</h4><p className="leading-relaxed text-lg mb-4">Yes, we offer product video production alongside product photography in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you provide Pretoria product photography props and styling?</h4><p className="leading-relaxed text-lg mb-4">Props and styling can be arranged for Pretoria product shoots.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How long does a Pretoria product shoot take?</h4><p className="leading-relaxed text-lg mb-4">Sessions range from 1–4 hours, depending on the number of products in Pretoria.</p></div>
      </section>
      {/* FAQPage Schema.org structured data for SEO - Batch 1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            { '@type': 'Question', 'name': 'What is product photography in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Product photography in Pretoria involves capturing high-quality images of products for e-commerce, catalogs, and marketing.' } },
            { '@type': 'Question', 'name': 'How much does product photography cost in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Product photography packages in Pretoria start from R1,500, with pricing based on quantity and complexity.' } },
            { '@type': 'Question', 'name': 'Do you offer white background product photography in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we provide white background and lifestyle product photography in Pretoria.' } },
            { '@type': 'Question', 'name': 'Can you photograph large products in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we can shoot products of all sizes in our Pretoria studio or on location.' } },
            { '@type': 'Question', 'name': 'Do you provide Pretoria product photography for e-commerce?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we specialize in Pretoria e-commerce product photography for online stores.' } },
            { '@type': 'Question', 'name': 'Are Pretoria product photos edited and retouched?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'All Pretoria product images include professional editing and retouching.' } },
            { '@type': 'Question', 'name': 'How are Pretoria product photos delivered?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Product images are delivered digitally via gallery or download link for Pretoria clients.' } },
            { '@type': 'Question', 'name': 'Can you provide Pretoria product photography for Amazon and Takealot?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we create Pretoria product photos that meet Amazon and Takealot requirements.' } },
            { '@type': 'Question', 'name': 'Do you offer Pretoria product photography for food and beverages?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we shoot food, drinks, and restaurant menu items in Pretoria.' } },
            { '@type': 'Question', 'name': 'Is Pretoria product photography available for clothing and fashion?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we offer Pretoria fashion, apparel, and flat lay product photography.' } },
            { '@type': 'Question', 'name': 'How do I book a Pretoria product photography session?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Contact us via our website or phone to book your Pretoria product shoot.' } },
            { '@type': 'Question', 'name': 'Do you offer Pretoria product photography for jewelry?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we have experience photographing jewelry and small items in Pretoria.' } },
            { '@type': 'Question', 'name': 'Can you shoot Pretoria product videos as well?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we offer product video production alongside product photography in Pretoria.' } },
            { '@type': 'Question', 'name': 'Do you provide Pretoria product photography props and styling?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Props and styling can be arranged for Pretoria product shoots.' } },
            { '@type': 'Question', 'name': 'How long does a Pretoria product shoot take?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sessions range from 1–4 hours, depending on the number of products in Pretoria.' } },
          ]
        })
      }} />
      {/* Visually Hidden SEO FAQ Section with Schema.org markup - Batch 2 */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer Pretoria product photography for cosmetics?</h4><p className="leading-relaxed text-lg mb-4">Yes, we have experience shooting cosmetics and beauty products in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you photograph Pretoria products for social media?</h4><p className="leading-relaxed text-lg mb-4">We create product images optimized for Pretoria social media campaigns.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer Pretoria product photography for electronics?</h4><p className="leading-relaxed text-lg mb-4">Yes, electronics and tech product photography is available in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Are Pretoria product photographers available on weekends?</h4><p className="leading-relaxed text-lg mb-4">Yes, weekend and after-hours product shoots are available in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you shoot Pretoria product images for catalogs and brochures?</h4><p className="leading-relaxed text-lg mb-4">Yes, we create catalog and brochure images for Pretoria products.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer Pretoria product photography for furniture?</h4><p className="leading-relaxed text-lg mb-4">Yes, we photograph large items and furniture in Pretoria studios or on-site.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you help with Pretoria product photo styling and concepts?</h4><p className="leading-relaxed text-lg mb-4">We assist with creative styling and concept planning for Pretoria product shoots.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you provide Pretoria product photography for marketing campaigns?</h4><p className="leading-relaxed text-lg mb-4">We create product images for Pretoria marketing, advertising, and branding.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Is fast turnaround available for Pretoria product photos?</h4><p className="leading-relaxed text-lg mb-4">Yes, we offer priority editing and fast delivery for Pretoria product shoots.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer monthly product photography packages in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, ongoing product photography packages are available for Pretoria businesses.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you shoot Pretoria product images for small businesses?</h4><p className="leading-relaxed text-lg mb-4">Yes, we work with Pretoria startups and SMEs for affordable product photography.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Are commercial rights included for Pretoria product images?</h4><p className="leading-relaxed text-lg mb-4">Yes, commercial use rights are included in Pretoria business packages.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What makes your Pretoria product photography unique?</h4><p className="leading-relaxed text-lg mb-4">Our Pretoria team blends creativity, skill, and local knowledge for standout product images.</p></div>
      </section>
      {/* FAQPage Schema.org structured data for SEO - Batch 2 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            { '@type': 'Question', 'name': 'Do you offer Pretoria product photography for cosmetics?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we have experience shooting cosmetics and beauty products in Pretoria.' } },
            { '@type': 'Question', 'name': 'Can you photograph Pretoria products for social media?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We create product images optimized for Pretoria social media campaigns.' } },
            { '@type': 'Question', 'name': 'Do you offer Pretoria product photography for electronics?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, electronics and tech product photography is available in Pretoria.' } },
            { '@type': 'Question', 'name': 'Are Pretoria product photographers available on weekends?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, weekend and after-hours product shoots are available in Pretoria.' } },
            { '@type': 'Question', 'name': 'Can you shoot Pretoria product images for catalogs and brochures?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we create catalog and brochure images for Pretoria products.' } },
            { '@type': 'Question', 'name': 'Do you offer Pretoria product photography for furniture?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we photograph large items and furniture in Pretoria studios or on-site.' } },
            { '@type': 'Question', 'name': 'Can you help with Pretoria product photo styling and concepts?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We assist with creative styling and concept planning for Pretoria product shoots.' } },
            { '@type': 'Question', 'name': 'Do you provide Pretoria product photography for marketing campaigns?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We create product images for Pretoria marketing, advertising, and branding.' } },
            { '@type': 'Question', 'name': 'Is fast turnaround available for Pretoria product photos?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we offer priority editing and fast delivery for Pretoria product shoots.' } },
            { '@type': 'Question', 'name': 'Do you offer monthly product photography packages in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, ongoing product photography packages are available for Pretoria businesses.' } },
            { '@type': 'Question', 'name': 'Can you shoot Pretoria product images for small businesses?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we work with Pretoria startups and SMEs for affordable product photography.' } },
            { '@type': 'Question', 'name': 'Are commercial rights included for Pretoria product images?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, commercial use rights are included in Pretoria business packages.' } },
            { '@type': 'Question', 'name': 'What makes your Pretoria product photography unique?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Our Pretoria team blends creativity, skill, and local knowledge for standout product images.' } },
          ]
        })
      }} />
      {/* Visually Hidden SEO Content Section with H1-H5 and Keyword-Rich Paragraphs */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h2 className="text-3xl font-bold text-white mt-12 mb-6 font-syne">Product Photography Services in Pretoria</h2>
        <p className="leading-relaxed text-lg mb-4">Our Pretoria product photography services help businesses showcase their products with clarity, style, and professionalism. We understand the importance of high-quality images in driving sales and building brand credibility for Pretoria companies of all sizes.</p>
        <p className="leading-relaxed text-lg mb-4">From e-commerce listings to marketing campaigns, our Pretoria product photographers deliver crisp, detailed images that highlight your products’ best features. We use advanced lighting, backgrounds, and editing techniques to ensure every product stands out.</p>
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Why Invest in Professional Product Photography in Pretoria?</h3>
        <p className="leading-relaxed text-lg mb-4">Professional product photography in Pretoria gives your business a competitive edge by creating a strong first impression and increasing conversion rates. Our Pretoria team works closely with you to understand your brand and target audience, producing images that align with your marketing goals.</p>
        <p className="leading-relaxed text-lg mb-4">We offer flexible product photography packages for Pretoria clients, including studio shoots, on-location sessions, and bulk discounts for large inventories. Our streamlined process ensures fast turnaround and consistent quality for every project.</p>
        <h4 className="text-xl font-bold text-white mt-6 mb-3">Types of Product Photography Offered in Pretoria</h4>
        <p className="leading-relaxed text-lg mb-4">We provide a range of product photography services in Pretoria, including white background shots, lifestyle images, group product arrangements, and macro photography for small items. Our Pretoria photographers are skilled in working with various product types, from electronics to fashion and food.</p>
        <p className="leading-relaxed text-lg mb-4">Our portfolio features successful projects for Pretoria e-commerce stores, catalogs, and promotional materials, demonstrating our versatility and attention to detail. We tailor each shoot to your specific needs and brand identity.</p>
        <h5 className="text-lg font-bold text-[#FFD700] mt-4 mb-2">Quality Assurance and Editing in Pretoria Product Photography</h5>
        <p className="leading-relaxed text-lg mb-4">Quality control is central to our Pretoria product photography services. We meticulously edit each image for color accuracy, sharpness, and consistency, ensuring your products look their best across all platforms.</p>
        <p className="leading-relaxed text-lg mb-4">Our Pretoria team uses the latest software and techniques to remove imperfections and enhance visual appeal, helping your products stand out in crowded marketplaces. We also provide image resizing and formatting for web and print use.</p>
        <h5>Book Your Pretoria Product Photography Session</h5>
        <p className="leading-relaxed text-lg mb-4">Ready to elevate your product images in Pretoria? Contact us today to discuss your requirements, get a tailored quote, and schedule your Pretoria product photography session. We are committed to delivering results that drive growth for your business.</p>
        <p className="leading-relaxed text-lg mb-4">Our Pretoria product photography experts are here to answer your questions and guide you through the process from start to finish. Let us help you create compelling visuals that convert browsers into buyers.</p>
      </section>
      <RelatedServices currentService="Product Photography" services={relatedServices} />
      <div className="mt-10 text-center">
        <p className="text-neutral-400 text-sm">
          Discover more from our
          {" "}
          <Link href="/" className="text-[#FFD700] hover:underline">Pretoria product photography studio</Link>
          {" "}
          on the homepage.
        </p>
      </div>
    </main>
  );
}
