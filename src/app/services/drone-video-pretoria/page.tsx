
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
    href: '/services/photography-pretoria',
    anchor: 'Photography',
    title: 'Photography Services',
    description: 'Professional photography for events, brands, and businesses in Pretoria.'
  },
  {
    href: '/services/product-photography-pretoria',
    anchor: 'Product Photography',
    title: 'Product Photography',
    description: 'High-quality product images to boost your e-commerce and marketing.'
  }
];

export default function DroneVideoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Drone Video Pretoria',
            description:
              'Drone video production services in Pretoria by 012 Agency. Licensed pilots, cinematic aerial footage and full post-production.',
            url: 'https://012agency.co.za/services/drone-video-pretoria',
            serviceType: 'Drone video production',
            category: 'Video production services',
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
        <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Why Choose Our Drone Video Services?</h2>
        <ul className="list-disc list-inside space-y-2 text-lg mb-8">
          <li className="text-neutral-300">Licensed and insured drone pilots</li>
          <li className="text-neutral-300">Cinematic aerial footage for any industry</li>
          <li className="text-neutral-300">Flexible packages for all budgets</li>
          <li className="text-neutral-300">Fast turnaround and expert editing</li>
          <li className="text-neutral-300">Legal compliance and all airspace clearances</li>
        </ul>
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Get a Custom Drone Video Quote</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Need specific flight times or locations? Use our calculator to get an instant estimate.
          </p>
          <Link href="/quote" className="inline-block bg-[#FFD700] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#FFE44D] transition-colors">
            Calculate Your Quote
          </Link>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/get-in-touch-pretoria" className="px-8 py-3 bg-[#FFD700] text-black rounded-full font-bold text-lg hover:bg-[#FFA500] transition">Get a Quote</Link>
        </div>
      </section>
      {/* Visually Hidden SEO FAQ Section with Schema.org markup - Batch 1 */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Frequently Asked Questions about Drone Video Pretoria</h3>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What is drone video production in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Drone video production in Pretoria involves capturing aerial footage for marketing, real estate, events, and more.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Are your Pretoria drone pilots licensed?</h4><p className="leading-relaxed text-lg mb-4">Yes, all our Pretoria drone pilots are fully licensed and insured for commercial operations.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How much does drone video cost in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Drone video packages in Pretoria start from R4,500, with pricing based on duration, locations, and editing needs.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you film at multiple locations in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, we offer multi-location drone shoots across Pretoria and Gauteng.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Is drone video legal in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, we comply with all Pretoria and South African drone regulations to ensure safe and legal flights.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What industries use drone video in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Real estate, construction, tourism, events, agriculture, and more in Pretoria benefit from drone video.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer drone video for real estate in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, we specialize in real estate drone videos for Pretoria agents and developers.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you provide raw footage from drone shoots in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, we can deliver both raw and edited drone footage for Pretoria clients.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer 4K drone video in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, all Pretoria drone video packages include HD or 4K options.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Is drone video suitable for events in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Absolutely, drone video adds a unique perspective to Pretoria events and launches.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How long does a drone video shoot take in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Most Pretoria drone shoots take 1–3 hours, depending on the scope and locations.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you add music and graphics to Pretoria drone videos?</h4><p className="leading-relaxed text-lg mb-4">Yes, we offer licensed music and custom graphics for all Pretoria drone video projects.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer live drone streaming in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Live drone streaming is available for Pretoria events and inspections upon request.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you film construction progress in Pretoria with drones?</h4><p className="leading-relaxed text-lg mb-4">Yes, we provide regular drone progress videos for Pretoria construction sites.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What weather is best for drone video in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Clear, calm weather is ideal for Pretoria drone shoots, but we monitor all conditions for safety.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer drone photography in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, we also provide high-resolution drone photography in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Are permits required for Pretoria drone shoots?</h4><p className="leading-relaxed text-lg mb-4">We handle all necessary permits and permissions for Pretoria drone operations.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you film indoors with drones in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Indoor drone filming is possible in Pretoria locations with sufficient space and safety measures.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you edit Pretoria drone videos?</h4><p className="leading-relaxed text-lg mb-4">Yes, all Pretoria drone video packages include professional editing and color grading.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Is drone video safe for Pretoria crowds?</h4><p className="leading-relaxed text-lg mb-4">We follow strict safety protocols for all Pretoria drone flights, especially around people.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you provide drone video for Pretoria tourism?</h4><p className="leading-relaxed text-lg mb-4">Yes, we create promotional drone videos for Pretoria tourism and hospitality businesses.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer monthly drone video packages in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, ongoing drone content packages are available for Pretoria businesses.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you shoot time-lapse drone videos in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">We offer time-lapse and hyperlapse drone video production in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What equipment do you use for Pretoria drone video?</h4><p className="leading-relaxed text-lg mb-4">We use professional drones with HD/4K/RAW capabilities for Pretoria shoots.</p></div>
      </section>
      {/* FAQPage Schema.org structured data for SEO - Batch 1 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            { '@type': 'Question', 'name': 'What is drone video production in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Drone video production in Pretoria involves capturing aerial footage for marketing, real estate, events, and more.' } },
            { '@type': 'Question', 'name': 'Are your Pretoria drone pilots licensed?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, all our Pretoria drone pilots are fully licensed and insured for commercial operations.' } },
            { '@type': 'Question', 'name': 'How much does drone video cost in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Drone video packages in Pretoria start from R4,500, with pricing based on duration, locations, and editing needs.' } },
            { '@type': 'Question', 'name': 'Can you film at multiple locations in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we offer multi-location drone shoots across Pretoria and Gauteng.' } },
            { '@type': 'Question', 'name': 'Is drone video legal in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we comply with all Pretoria and South African drone regulations to ensure safe and legal flights.' } },
            { '@type': 'Question', 'name': 'What industries use drone video in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Real estate, construction, tourism, events, agriculture, and more in Pretoria benefit from drone video.' } },
            { '@type': 'Question', 'name': 'Do you offer drone video for real estate in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we specialize in real estate drone videos for Pretoria agents and developers.' } },
            { '@type': 'Question', 'name': 'Can you provide raw footage from drone shoots in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we can deliver both raw and edited drone footage for Pretoria clients.' } },
            { '@type': 'Question', 'name': 'Do you offer 4K drone video in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, all Pretoria drone video packages include HD or 4K options.' } },
            { '@type': 'Question', 'name': 'Is drone video suitable for events in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Absolutely, drone video adds a unique perspective to Pretoria events and launches.' } },
            { '@type': 'Question', 'name': 'How long does a drone video shoot take in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Most Pretoria drone shoots take 1–3 hours, depending on the scope and locations.' } },
            { '@type': 'Question', 'name': 'Can you add music and graphics to Pretoria drone videos?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we offer licensed music and custom graphics for all Pretoria drone video projects.' } },
            { '@type': 'Question', 'name': 'Do you offer live drone streaming in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Live drone streaming is available for Pretoria events and inspections upon request.' } },
            { '@type': 'Question', 'name': 'Can you film construction progress in Pretoria with drones?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we provide regular drone progress videos for Pretoria construction sites.' } },
            { '@type': 'Question', 'name': 'What weather is best for drone video in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Clear, calm weather is ideal for Pretoria drone shoots, but we monitor all conditions for safety.' } },
            { '@type': 'Question', 'name': 'Do you offer drone photography in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we also provide high-resolution drone photography in Pretoria.' } },
            { '@type': 'Question', 'name': 'Are permits required for Pretoria drone shoots?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We handle all necessary permits and permissions for Pretoria drone operations.' } },
            { '@type': 'Question', 'name': 'Can you film indoors with drones in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Indoor drone filming is possible in Pretoria locations with sufficient space and safety measures.' } },
            { '@type': 'Question', 'name': 'Do you edit Pretoria drone videos?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, all Pretoria drone video packages include professional editing and color grading.' } },
            { '@type': 'Question', 'name': 'Is drone video safe for Pretoria crowds?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We follow strict safety protocols for all Pretoria drone flights, especially around people.' } },
            { '@type': 'Question', 'name': 'Can you provide drone video for Pretoria tourism?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we create promotional drone videos for Pretoria tourism and hospitality businesses.' } },
            { '@type': 'Question', 'name': 'Do you offer monthly drone video packages in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, ongoing drone content packages are available for Pretoria businesses.' } },
            { '@type': 'Question', 'name': 'Can you shoot time-lapse drone videos in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We offer time-lapse and hyperlapse drone video production in Pretoria.' } },
            { '@type': 'Question', 'name': 'What equipment do you use for Pretoria drone video?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We use professional drones with HD/4K/RAW capabilities for Pretoria shoots.' } },
          ]
        })
      }} />
      {/* Visually Hidden SEO FAQ Section with Schema.org markup - Batch 2 */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer drone video for Pretoria schools and sports?</h4><p className="leading-relaxed text-lg mb-4">Yes, we film school events, sports, and more with drones in Pretoria.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How do I book a Pretoria drone video shoot?</h4><p className="leading-relaxed text-lg mb-4">Contact us via our website or phone to book your Pretoria drone shoot.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you film live property tours with drones in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, live or pre-recorded property tours are available for Pretoria real estate.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer drone mapping in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">We provide aerial mapping and surveys for Pretoria construction and agriculture.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Is drone video suitable for Pretoria marketing campaigns?</h4><p className="leading-relaxed text-lg mb-4">Drone video makes Pretoria marketing more engaging and memorable.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you add voiceover to Pretoria drone videos?</h4><p className="leading-relaxed text-lg mb-4">Yes, voiceover and narration can be included for Pretoria drone video projects.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer drone inspections in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">We provide drone inspections for Pretoria infrastructure, roofs, and more.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you film at sunrise or sunset in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, golden hour drone shoots are available in Pretoria for dramatic visuals.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Are Pretoria drone videos delivered online?</h4><p className="leading-relaxed text-lg mb-4">All Pretoria drone videos are delivered via online gallery or download link.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer drone video for Pretoria hotels and lodges?</h4><p className="leading-relaxed text-lg mb-4">Yes, we create promotional drone videos for Pretoria hospitality venues.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you film drone videos in Pretoria nature reserves?</h4><p className="leading-relaxed text-lg mb-4">We can film in Pretoria reserves with the necessary permissions and safety measures.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer bilingual drone video services in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, we can produce Pretoria drone videos in multiple languages.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How do you ensure safety during Pretoria drone shoots?</h4><p className="leading-relaxed text-lg mb-4">We follow all CAA regulations and safety protocols for Pretoria drone operations.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you help with drone video marketing in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">We assist Pretoria businesses with drone video marketing strategy and distribution.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you provide drone video analytics for Pretoria clients?</h4><p className="leading-relaxed text-lg mb-4">Yes, we offer video analytics and performance tracking for Pretoria drone campaigns.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Are your Pretoria drone video services available for small businesses?</h4><p className="leading-relaxed text-lg mb-4">Yes, we work with Pretoria businesses of all sizes for drone video production.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you help with YouTube drone videos for Pretoria?</h4><p className="leading-relaxed text-lg mb-4">We produce and optimize YouTube drone videos for Pretoria companies.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What makes your Pretoria drone video services unique?</h4><p className="leading-relaxed text-lg mb-4">Our Pretoria team combines creativity, technology, and local expertise for standout aerial videos.</p></div>
      </section>
      {/* FAQPage Schema.org structured data for SEO - Batch 2 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            { '@type': 'Question', 'name': 'Do you offer drone video for Pretoria schools and sports?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we film school events, sports, and more with drones in Pretoria.' } },
            { '@type': 'Question', 'name': 'How do I book a Pretoria drone video shoot?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Contact us via our website or phone to book your Pretoria drone shoot.' } },
            { '@type': 'Question', 'name': 'Can you film live property tours with drones in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, live or pre-recorded property tours are available for Pretoria real estate.' } },
            { '@type': 'Question', 'name': 'Do you offer drone mapping in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We provide aerial mapping and surveys for Pretoria construction and agriculture.' } },
            { '@type': 'Question', 'name': 'Is drone video suitable for Pretoria marketing campaigns?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Drone video makes Pretoria marketing more engaging and memorable.' } },
            { '@type': 'Question', 'name': 'Can you add voiceover to Pretoria drone videos?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, voiceover and narration can be included for Pretoria drone video projects.' } },
            { '@type': 'Question', 'name': 'Do you offer drone inspections in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We provide drone inspections for Pretoria infrastructure, roofs, and more.' } },
            { '@type': 'Question', 'name': 'Can you film at sunrise or sunset in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, golden hour drone shoots are available in Pretoria for dramatic visuals.' } },
            { '@type': 'Question', 'name': 'Are Pretoria drone videos delivered online?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'All Pretoria drone videos are delivered via online gallery or download link.' } },
            { '@type': 'Question', 'name': 'Do you offer drone video for Pretoria hotels and lodges?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we create promotional drone videos for Pretoria hospitality venues.' } },
            { '@type': 'Question', 'name': 'Can you film drone videos in Pretoria nature reserves?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We can film in Pretoria reserves with the necessary permissions and safety measures.' } },
            { '@type': 'Question', 'name': 'Do you offer bilingual drone video services in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we can produce Pretoria drone videos in multiple languages.' } },
            { '@type': 'Question', 'name': 'How do you ensure safety during Pretoria drone shoots?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We follow all CAA regulations and safety protocols for Pretoria drone operations.' } },
            { '@type': 'Question', 'name': 'Can you help with drone video marketing in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We assist Pretoria businesses with drone video marketing strategy and distribution.' } },
            { '@type': 'Question', 'name': 'Do you provide drone video analytics for Pretoria clients?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we offer video analytics and performance tracking for Pretoria drone campaigns.' } },
            { '@type': 'Question', 'name': 'Are your Pretoria drone video services available for small businesses?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we work with Pretoria businesses of all sizes for drone video production.' } },
            { '@type': 'Question', 'name': 'Can you help with YouTube drone videos for Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We produce and optimize YouTube drone videos for Pretoria companies.' } },
            { '@type': 'Question', 'name': 'What makes your Pretoria drone video services unique?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Our Pretoria team combines creativity, technology, and local expertise for standout aerial videos.' } },
          ]
        })
      }} />
      {/* Visually Hidden SEO Content Section with H1-H5 and Keyword-Rich Paragraphs */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h2 className="text-3xl font-bold text-white mt-12 mb-6 font-syne">Drone Video Services in Pretoria</h2>
        <p className="leading-relaxed text-lg mb-4">Our Pretoria drone video services provide stunning aerial footage for a variety of industries, including real estate, construction, tourism, and events. Using the latest drone technology, we capture breathtaking perspectives that showcase properties, projects, and experiences in Pretoria like never before.</p>
        <p className="leading-relaxed text-lg mb-4">Whether you need promotional videos, progress documentation, or creative content for social media, our Pretoria drone video team delivers professional results tailored to your needs. We understand the local landscape and regulatory requirements, ensuring safe and legal operations throughout Pretoria and Gauteng.</p>
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Why Choose Professional Drone Videography in Pretoria?</h3>
        <p className="leading-relaxed text-lg mb-4">Professional drone videography in Pretoria elevates your marketing and storytelling by offering unique aerial views that traditional cameras cannot achieve. Our licensed drone pilots combine technical skill with creative vision to produce cinematic footage for Pretoria businesses and individuals.</p>
        <p className="leading-relaxed text-lg mb-4">With years of experience in the Pretoria market, we know how to highlight the best features of your property or event. Our team manages all aspects of the shoot, from planning and permits to editing and delivery, ensuring a seamless experience from start to finish.</p>
        <h4 className="text-xl font-bold text-white mt-6 mb-3">Applications of Drone Video in Pretoria</h4>
        <p className="leading-relaxed text-lg mb-4">Drone video is widely used in Pretoria for real estate listings, construction site monitoring, tourism promotion, event coverage, and agricultural surveys. Aerial footage helps Pretoria clients stand out in competitive markets by providing dynamic visuals that capture attention and drive engagement.</p>
        <p className="leading-relaxed text-lg mb-4">Our services are customized for each Pretoria client, whether you need regular progress updates for a building project or a one-time promotional video for your business. We also offer live drone streaming for events and inspections across Pretoria.</p>
        <h5 className="text-lg font-bold text-[#FFD700] mt-4 mb-2">Compliance and Safety for Pretoria Drone Operations</h5>
        <p className="leading-relaxed text-lg mb-4">Safety and legal compliance are top priorities for our Pretoria drone video services. We adhere to all South African Civil Aviation Authority (SACAA) regulations and secure the necessary permits for each Pretoria drone shoot. Our pilots are fully licensed and insured, giving you peace of mind for every project.</p>
        <p className="leading-relaxed text-lg mb-4">We conduct thorough risk assessments and follow strict safety protocols to protect people, property, and airspace in Pretoria. This commitment to safety ensures that your drone video project is completed efficiently and without incident.</p>
        <h5>Get Started with Drone Video in Pretoria</h5>
        <p className="leading-relaxed text-lg mb-4">Ready to elevate your visual content with expert drone video production in Pretoria? Contact our team today to discuss your project requirements, receive a custom quote, and schedule your Pretoria drone shoot. Experience the difference that professional aerial videography can make for your business or event.</p>
        <p className="leading-relaxed text-lg mb-4">Our Pretoria drone video experts are here to guide you through every step, from concept development to final delivery. Let us help you capture Pretoria from a whole new perspective.</p>
      </section>
      <RelatedServices currentService="Drone Video Services" services={relatedServices} />
      <div className="mt-10 text-center">
        <p className="text-neutral-400 text-sm">
          Discover more from our
          {" "}
          <Link href="/" className="text-[#FFD700] hover:underline">Pretoria aerial video company</Link>
          {" "}
          on the homepage.
        </p>
      </div>
    </main>
  );
}
