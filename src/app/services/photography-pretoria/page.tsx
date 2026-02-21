
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
    href: '/services/product-photography-pretoria',
    anchor: 'Product Photography',
    title: 'Product Photography',
    description: 'High-quality product images to boost your e-commerce and marketing.'
  }
];

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Photography Pretoria',
            description:
              'Professional photography services in Pretoria by 012 Agency. Events, portraits, commercial and branding with expert editing.',
            url: 'https://012agency.co.za/services/photography-pretoria',
            serviceType: 'Photography services',
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
        <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Why Choose Our Photography?</h2>
        <ul className="list-disc list-inside space-y-2 text-lg mb-8">
          <li className="text-neutral-300">Experienced photographers & creative team</li>
          <li className="text-neutral-300">Flexible packages for every need</li>
          <li className="text-neutral-300">High-end editing and retouching</li>
          <li className="text-neutral-300">Quick turnaround, online delivery</li>
          <li className="text-neutral-300">Personal, commercial, and event photography</li>
        </ul>
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Get a Custom Photography Quote</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Need a specific type of shoot or location? Use our calculator to get an instant estimate.
          </p>
          <Link href="/quote" className="inline-block bg-[#FFD700] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#FFE44D] transition-colors">
            Calculate Your Quote
          </Link>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/get-in-touch-pretoria" className="px-8 py-3 bg-[#FFD700] text-black rounded-full font-bold text-lg hover:bg-[#FFA500] transition">Book a Session</Link>
        </div>
      </section>
      <RelatedServices currentService="Photography Services" services={relatedServices} />
      {/* Contextual link to homepage with varied phrasing */}
      <div className="max-w-4xl mx-auto px-4 text-center mt-6">
        <p className="text-neutral-400 text-sm">
          Learn more about our <Link href="/" className="text-[#FFD700] hover:underline">Pretoria photography studio</Link> on the homepage.
        </p>
      </div>
      {/* Visually Hidden SEO FAQ Section with Schema.org markup - Batch 1 */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Frequently Asked Questions about Photography Pretoria</h3>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What types of photography do you offer in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">We offer portrait, event, commercial, product, and lifestyle photography in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How much does a photography session cost in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Photography packages in Pretoria start from R2,500, with options for all needs.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Are your Pretoria photographers experienced?</h4><p className="leading-relaxed text-lg mb-4">Yes, our Pretoria photographers are highly experienced and creative professionals.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer on-location shoots in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, we shoot at your chosen Pretoria location or in our professional studio.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How many photos will I receive from a Pretoria shoot?</h4><p className="leading-relaxed text-lg mb-4">Depending on your package, you’ll receive 20–80+ professionally edited images.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you provide commercial photography in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, we offer commercial, branding, and product photography for Pretoria businesses.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you provide prints for Pretoria photography sessions?</h4><p className="leading-relaxed text-lg mb-4">Yes, prints and albums are available for all Pretoria photography packages.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How long does a Pretoria photo shoot take?</h4><p className="leading-relaxed text-lg mb-4">Sessions range from 1 hour to half-day, depending on your Pretoria package.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Is retouching included in Pretoria photography?</h4><p className="leading-relaxed text-lg mb-4">All Pretoria packages include professional editing and retouching.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you shoot events in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, we cover corporate, private, and public events across Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer headshot photography in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, business and personal headshots are available in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you help with posing during Pretoria shoots?</h4><p className="leading-relaxed text-lg mb-4">Our Pretoria photographers guide you for the best poses and results.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you provide online galleries for Pretoria clients?</h4><p className="leading-relaxed text-lg mb-4">Yes, all Pretoria clients receive a secure online gallery for easy viewing and downloads.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Are outfit changes allowed during Pretoria shoots?</h4><p className="leading-relaxed text-lg mb-4">Yes, outfit changes are included in most Pretoria photography packages.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer product photography in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, we shoot product images for Pretoria e-commerce and marketing.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you travel outside Pretoria for shoots?</h4><p className="leading-relaxed text-lg mb-4">Yes, our team can travel throughout Gauteng for your photography needs.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer urgent or rush photography in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Rush and urgent bookings are available for Pretoria clients, subject to availability.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Are Pretoria photography services available for businesses?</h4><p className="leading-relaxed text-lg mb-4">Yes, we serve Pretoria businesses of all sizes with custom packages.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How do I book a Pretoria photography session?</h4><p className="leading-relaxed text-lg mb-4">Contact us via our website or phone to book your Pretoria shoot.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you provide makeup and styling for Pretoria shoots?</h4><p className="leading-relaxed text-lg mb-4">Makeup and styling can be arranged for Pretoria photography sessions.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Is studio photography available in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, we have a fully equipped studio in Pretoria for portraits and products.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer family photography in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, family and children’s photography is available in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you shoot at Pretoria landmarks?</h4><p className="leading-relaxed text-lg mb-4">We can arrange shoots at popular Pretoria landmarks, parks, and venues.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you provide digital and print images in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Both digital and print images are available for all Pretoria clients.</p></div>
      </section>
      {/* FAQPage Schema.org structured data for SEO - Batch 1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            { '@type': 'Question', 'name': 'What types of photography do you offer in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We offer portrait, event, commercial, product, and lifestyle photography in Pretoria.' } },
            { '@type': 'Question', 'name': 'How much does a photography session cost in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Photography packages in Pretoria start from R2,500, with options for all needs.' } },
            { '@type': 'Question', 'name': 'Are your Pretoria photographers experienced?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, our Pretoria photographers are highly experienced and creative professionals.' } },
            { '@type': 'Question', 'name': 'Do you offer on-location shoots in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we shoot at your chosen Pretoria location or in our professional studio.' } },
            { '@type': 'Question', 'name': 'How many photos will I receive from a Pretoria shoot?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Depending on your package, you’ll receive 20–80+ professionally edited images.' } },
            { '@type': 'Question', 'name': 'Do you provide commercial photography in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we offer commercial, branding, and product photography for Pretoria businesses.' } },
            { '@type': 'Question', 'name': 'Can you provide prints for Pretoria photography sessions?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, prints and albums are available for all Pretoria photography packages.' } },
            { '@type': 'Question', 'name': 'How long does a Pretoria photo shoot take?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sessions range from 1 hour to half-day, depending on your Pretoria package.' } },
            { '@type': 'Question', 'name': 'Is retouching included in Pretoria photography?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'All Pretoria packages include professional editing and retouching.' } },
            { '@type': 'Question', 'name': 'Can you shoot events in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we cover corporate, private, and public events across Pretoria.' } },
            { '@type': 'Question', 'name': 'Do you offer headshot photography in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, business and personal headshots are available in Pretoria.' } },
            { '@type': 'Question', 'name': 'Can you help with posing during Pretoria shoots?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Our Pretoria photographers guide you for the best poses and results.' } },
            { '@type': 'Question', 'name': 'Do you provide online galleries for Pretoria clients?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, all Pretoria clients receive a secure online gallery for easy viewing and downloads.' } },
            { '@type': 'Question', 'name': 'Are outfit changes allowed during Pretoria shoots?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, outfit changes are included in most Pretoria photography packages.' } },
            { '@type': 'Question', 'name': 'Do you offer product photography in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we shoot product images for Pretoria e-commerce and marketing.' } },
            { '@type': 'Question', 'name': 'Can you travel outside Pretoria for shoots?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, our team can travel throughout Gauteng for your photography needs.' } },
            { '@type': 'Question', 'name': 'Do you offer urgent or rush photography in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Rush and urgent bookings are available for Pretoria clients, subject to availability.' } },
            { '@type': 'Question', 'name': 'Are Pretoria photography services available for businesses?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we serve Pretoria businesses of all sizes with custom packages.' } },
            { '@type': 'Question', 'name': 'How do I book a Pretoria photography session?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Contact us via our website or phone to book your Pretoria shoot.' } },
            { '@type': 'Question', 'name': 'Can you provide makeup and styling for Pretoria shoots?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Makeup and styling can be arranged for Pretoria photography sessions.' } },
            { '@type': 'Question', 'name': 'Is studio photography available in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we have a fully equipped studio in Pretoria for portraits and products.' } },
            { '@type': 'Question', 'name': 'Do you offer family photography in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, family and children’s photography is available in Pretoria.' } },
            { '@type': 'Question', 'name': 'Can you shoot at Pretoria landmarks?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We can arrange shoots at popular Pretoria landmarks, parks, and venues.' } },
            { '@type': 'Question', 'name': 'Do you provide digital and print images in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Both digital and print images are available for all Pretoria clients.' } },
          ]
        })
      }} />
      {/* Visually Hidden SEO FAQ Section with Schema.org markup - Batch 2 */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer wedding photography in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, our Pretoria team specializes in wedding and engagement photography.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you shoot at multiple Pretoria locations?</h4><p className="leading-relaxed text-lg mb-4">Yes, we can photograph you at several Pretoria locations in one session.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer photography for Pretoria schools and sports?</h4><p className="leading-relaxed text-lg mb-4">Yes, we cover school events, sports, and graduations in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Are Pretoria photo sessions suitable for children?</h4><p className="leading-relaxed text-lg mb-4">Yes, we have experience photographing children and families in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you provide Pretoria photography for marketing?</h4><p className="leading-relaxed text-lg mb-4">We create marketing images for Pretoria brands, products, and services.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer drone photography in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, aerial and drone photography is available in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How are Pretoria photos delivered?</h4><p className="leading-relaxed text-lg mb-4">All Pretoria clients receive digital downloads and optional prints.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer group or team photography in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, group and team photos are available for Pretoria organizations.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you photograph Pretoria real estate?</h4><p className="leading-relaxed text-lg mb-4">We offer real estate and property photography throughout Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer Pretoria photography gift vouchers?</h4><p className="leading-relaxed text-lg mb-4">Yes, gift vouchers are available for all Pretoria photography services.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Is same-day delivery available for Pretoria photos?</h4><p className="leading-relaxed text-lg mb-4">Same-day delivery can be arranged for urgent Pretoria shoots.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you help with Pretoria photography permits?</h4><p className="leading-relaxed text-lg mb-4">We assist with permits for Pretoria public and private locations.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer Pretoria graduation photography?</h4><p className="leading-relaxed text-lg mb-4">Yes, graduation and matric dance photography is available in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you shoot Pretoria corporate events?</h4><p className="leading-relaxed text-lg mb-4">Yes, we cover Pretoria conferences, launches, and business events.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer Pretoria maternity and newborn photography?</h4><p className="leading-relaxed text-lg mb-4">Yes, we offer maternity and newborn sessions in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you provide Pretoria photography for social media?</h4><p className="leading-relaxed text-lg mb-4">Yes, we create content for Pretoria influencers and brands.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer Pretoria pet photography?</h4><p className="leading-relaxed text-lg mb-4">Yes, pet and animal photography is available in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Are Pretoria photographers available on weekends?</h4><p className="leading-relaxed text-lg mb-4">Yes, weekend and after-hours shoots are available in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you help with Pretoria photo styling and props?</h4><p className="leading-relaxed text-lg mb-4">We can arrange props and styling for Pretoria photo shoots.</p></div>
      </section>
      {/* FAQPage Schema.org structured data for SEO - Batch 2 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            { '@type': 'Question', 'name': 'Do you offer wedding photography in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, our Pretoria team specializes in wedding and engagement photography.' } },
            { '@type': 'Question', 'name': 'Can you shoot at multiple Pretoria locations?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we can photograph you at several Pretoria locations in one session.' } },
            { '@type': 'Question', 'name': 'Do you offer photography for Pretoria schools and sports?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we cover school events, sports, and graduations in Pretoria.' } },
            { '@type': 'Question', 'name': 'Are Pretoria photo sessions suitable for children?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we have experience photographing children and families in Pretoria.' } },
            { '@type': 'Question', 'name': 'Can you provide Pretoria photography for marketing?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We create marketing images for Pretoria brands, products, and services.' } },
            { '@type': 'Question', 'name': 'Do you offer drone photography in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, aerial and drone photography is available in Pretoria.' } },
            { '@type': 'Question', 'name': 'How are Pretoria photos delivered?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'All Pretoria clients receive digital downloads and optional prints.' } },
            { '@type': 'Question', 'name': 'Do you offer group or team photography in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, group and team photos are available for Pretoria organizations.' } },
            { '@type': 'Question', 'name': 'Can you photograph Pretoria real estate?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We offer real estate and property photography throughout Pretoria.' } },
            { '@type': 'Question', 'name': 'Do you offer Pretoria photography gift vouchers?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, gift vouchers are available for all Pretoria photography services.' } },
            { '@type': 'Question', 'name': 'Is same-day delivery available for Pretoria photos?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Same-day delivery can be arranged for urgent Pretoria shoots.' } },
            { '@type': 'Question', 'name': 'Can you help with Pretoria photography permits?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We assist with permits for Pretoria public and private locations.' } },
            { '@type': 'Question', 'name': 'Do you offer Pretoria graduation photography?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, graduation and matric dance photography is available in Pretoria.' } },
            { '@type': 'Question', 'name': 'Can you shoot Pretoria corporate events?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we cover Pretoria conferences, launches, and business events.' } },
            { '@type': 'Question', 'name': 'Do you offer Pretoria maternity and newborn photography?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we offer maternity and newborn sessions in Pretoria.' } },
            { '@type': 'Question', 'name': 'Can you provide Pretoria photography for social media?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we create content for Pretoria influencers and brands.' } },
            { '@type': 'Question', 'name': 'Do you offer Pretoria pet photography?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, pet and animal photography is available in Pretoria.' } },
            { '@type': 'Question', 'name': 'Are Pretoria photographers available on weekends?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, weekend and after-hours shoots are available in Pretoria.' } },
            { '@type': 'Question', 'name': 'Can you help with Pretoria photo styling and props?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We can arrange props and styling for Pretoria photo shoots.' } },
          ]
        })
      }} />
      {/* Visually Hidden SEO Content Section with H1-H5 and Keyword-Rich Paragraphs */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h2 className="text-3xl font-bold text-white mt-12 mb-6 font-syne">Photography Services in Pretoria</h2>
        <p className="leading-relaxed text-lg mb-4">Our Pretoria photography services cater to individuals, families, and businesses seeking professional images for every occasion. From portraits and events to commercial and product shoots, we deliver high-quality photography tailored to your needs in Pretoria and the surrounding areas.</p>
        <p className="leading-relaxed text-lg mb-4">With a focus on creativity and technical excellence, our Pretoria photographers capture moments and stories that resonate. We use advanced equipment and editing techniques to ensure every image meets the highest standards for clarity, color, and impact.</p>
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Why Choose a Pretoria Photographer?</h3>
        <p className="leading-relaxed text-lg mb-4">Choosing a local Pretoria photographer means working with someone who understands the best locations, lighting, and trends in the area. Our team brings years of experience and a passion for photography, ensuring your Pretoria session is comfortable, enjoyable, and results in stunning images.</p>
        <p className="leading-relaxed text-lg mb-4">We offer flexible packages for Pretoria clients, including on-location, studio, and event photography. Our personalized approach means we listen to your vision and deliver photos that exceed expectations, whether for personal use or business marketing.</p>
        <h4 className="text-xl font-bold text-white mt-6 mb-3">Photography Solutions for Every Pretoria Need</h4>
        <p className="leading-relaxed text-lg mb-4">We provide a wide range of photography services in Pretoria, including family portraits, headshots, product photography, event coverage, and branding imagery. Our Pretoria clients benefit from fast turnaround times, professional editing, and a commitment to customer satisfaction.</p>
        <p className="leading-relaxed text-lg mb-4">Our portfolio includes work for Pretoria businesses, schools, and private clients, showcasing our versatility and attention to detail. Whatever your photography needs, we have a Pretoria solution for you.</p>
        <h5 className="text-lg font-bold text-[#FFD700] mt-4 mb-2">Quality, Creativity, and Service in Pretoria Photography</h5>
        <p className="leading-relaxed text-lg mb-4">Quality is at the heart of our Pretoria photography services. We invest in top-tier cameras, lenses, and lighting to capture every detail. Our creative team collaborates with Pretoria clients to design shoots that reflect their unique style and goals.</p>
        <p className="leading-relaxed text-lg mb-4">From concept to delivery, we provide guidance and support throughout the photography process. Our Pretoria photographers are dedicated to making your experience seamless and enjoyable, with results you'll love.</p>
        <h5>Book Your Pretoria Photography Session</h5>
        <p className="leading-relaxed text-lg mb-4">Ready to capture beautiful images in Pretoria? Contact us today to discuss your photography needs, explore our packages, and schedule your session. We look forward to helping you create lasting memories and effective marketing visuals in Pretoria.</p>
        <p className="leading-relaxed text-lg mb-4">Our Pretoria photography experts are here to answer your questions and provide a customized quote. Let us help you showcase your best self, products, or events with professional photography services in Pretoria.</p>
      </section>
    </main>
  );
}
