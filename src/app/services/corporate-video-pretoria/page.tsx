
import Link from 'next/link';
import RelatedServices from '@/components/RelatedServices';



const relatedServices = [
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
  },
  {
    href: '/services/product-photography-pretoria',
    anchor: 'Product Photography',
    title: 'Product Photography',
    description: 'High-quality product images to boost your e-commerce and marketing.'
  }
];

export default function CorporateVideoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Corporate Video Pretoria',
            description:
              'Corporate video production services in Pretoria by 012 Agency. Full-service scripting, filming, editing and motion graphics for brand storytelling.',
            url: 'https://012agency.co.za/services/corporate-video-pretoria',
            serviceType: 'Corporate video production',
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
        <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Why Choose Our Corporate Video Services?</h2>
        <ul className="list-disc list-inside space-y-2 text-lg mb-8">
          <li className="text-neutral-300">Full-service production: scripting, filming, editing, and post-production</li>
          <li className="text-neutral-300">Experienced creative team with industry-leading equipment</li>
          <li className="text-neutral-300">On-location or studio shoots in Pretoria & nationwide</li>
          <li className="text-neutral-300">Brand-focused storytelling for maximum impact</li>
          <li className="text-neutral-300">Fast turnaround and unlimited revisions</li>
        </ul>
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Get a Custom Corporate Video Quote</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Need a specific video length or multiple locations? Use our calculator to get an instant estimate.
          </p>
          <Link href="/quote" className="inline-block bg-[#FFD700] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#FFE44D] transition-colors">
            Calculate Your Quote
          </Link>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/get-in-touch-pretoria" className="px-8 py-3 bg-[#FFD700] text-black rounded-full font-bold text-lg hover:bg-[#FFA500] transition">Get a Quote</Link>
        </div>
      </section>
      <RelatedServices currentService="Corporate Video Services" services={relatedServices} />
      {/* Visually Hidden SEO FAQ Section with Schema.org markup */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Frequently Asked Questions about Corporate Video Pretoria</h3>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What is corporate video production in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Corporate video production in Pretoria involves creating professional videos to promote businesses, brands, or organizations in the Pretoria area.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How much does a corporate video cost in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">The cost of a corporate video in Pretoria depends on factors like length, locations, crew, and post-production needs. Packages start from R6,500.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Why should I choose a Pretoria-based corporate video company?</h4><p className="leading-relaxed text-lg mb-4">Choosing a Pretoria-based company ensures local expertise, faster turnaround, and better understanding of the Pretoria market.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer drone video as part of corporate video services in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, our Pretoria corporate video packages can include drone footage for stunning aerial shots.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you film at multiple locations in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, we offer multi-location shoots across Pretoria and surrounding areas for maximum impact.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What types of corporate videos do you produce in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">We produce promotional videos, training videos, event coverage, testimonials, and more for Pretoria businesses.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How long does it take to create a corporate video in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Typical turnaround for a Pretoria corporate video is 1–4 weeks, depending on complexity.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you provide scriptwriting for Pretoria corporate videos?</h4><p className="leading-relaxed text-lg mb-4">Yes, our Pretoria team provides full scriptwriting and creative direction for your corporate video.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Are Pretoria corporate videos delivered in HD or 4K?</h4><p className="leading-relaxed text-lg mb-4">We deliver all Pretoria corporate videos in HD or 4K, based on your requirements.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you add branding and motion graphics to my Pretoria corporate video?</h4><p className="leading-relaxed text-lg mb-4">Yes, we offer custom branding and motion graphics for all Pretoria corporate video projects.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Is location scouting included in Pretoria video packages?</h4><p className="leading-relaxed text-lg mb-4">We offer location scouting in Pretoria to find the best settings for your video.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer monthly video content packages in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, we provide ongoing video content packages for Pretoria businesses.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you film in Pretoria and other Gauteng areas?</h4><p className="leading-relaxed text-lg mb-4">Our team covers Pretoria and all surrounding Gauteng areas for video shoots.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer green screen filming in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, green screen filming is available for Pretoria corporate video projects.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What equipment do you use for Pretoria corporate videos?</h4><p className="leading-relaxed text-lg mb-4">We use professional cameras, drones, lighting, and sound equipment for Pretoria videos.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you help with YouTube video production for Pretoria businesses?</h4><p className="leading-relaxed text-lg mb-4">Yes, we produce and optimize YouTube videos for Pretoria companies.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer video analytics for Pretoria clients?</h4><p className="leading-relaxed text-lg mb-4">We provide video analytics and performance tracking for Pretoria video campaigns.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Are your Pretoria corporate video services available for small businesses?</h4><p className="leading-relaxed text-lg mb-4">Yes, we work with Pretoria businesses of all sizes for video production.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you provide video marketing strategy for Pretoria?</h4><p className="leading-relaxed text-lg mb-4">We help Pretoria businesses develop and execute effective video marketing strategies.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you film product videos in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, we create high-converting product videos for Pretoria e-commerce and brands.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">What makes your Pretoria corporate video services unique?</h4><p className="leading-relaxed text-lg mb-4">Our Pretoria team combines creativity, technology, and local expertise for standout videos.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer bilingual or multilingual video production in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">Yes, we can produce videos in multiple languages for Pretoria clients.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">How do you ensure brand consistency in Pretoria corporate videos?</h4><p className="leading-relaxed text-lg mb-4">We follow your brand guidelines for all Pretoria corporate video projects.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you help with video SEO for Pretoria businesses?</h4><p className="leading-relaxed text-lg mb-4">We optimize Pretoria corporate videos for search engines and YouTube.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you provide video hosting recommendations for Pretoria clients?</h4><p className="leading-relaxed text-lg mb-4">Yes, we recommend the best hosting platforms for Pretoria corporate videos.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you shoot time-lapse videos in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">We offer time-lapse video production in Pretoria for construction, events, and more.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer animation services for Pretoria corporate videos?</h4><p className="leading-relaxed text-lg mb-4">Yes, animation and explainer videos are available for Pretoria clients.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Can you help with social media video ads in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">We create effective social media video ads for Pretoria businesses.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you provide corporate video packages for Pretoria startups?</h4><p className="leading-relaxed text-lg mb-4">Yes, affordable video packages are available for Pretoria startups and entrepreneurs.</p></div>
        <div><h4 className="text-xl font-bold text-white mt-6 mb-3">Do you offer customer testimonial videos in Pretoria?</h4><p className="leading-relaxed text-lg mb-4">We film and edit customer testimonial videos for Pretoria businesses.</p></div>
      </section>
      {/* FAQPage Schema.org structured data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            { '@type': 'Question', 'name': 'What is corporate video production in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Corporate video production in Pretoria involves creating professional videos to promote businesses, brands, or organizations in the Pretoria area.' } },
            { '@type': 'Question', 'name': 'How much does a corporate video cost in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'The cost of a corporate video in Pretoria depends on factors like length, locations, crew, and post-production needs. Packages start from R6,500.' } },
            { '@type': 'Question', 'name': 'Why should I choose a Pretoria-based corporate video company?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Choosing a Pretoria-based company ensures local expertise, faster turnaround, and better understanding of the Pretoria market.' } },
            { '@type': 'Question', 'name': 'Do you offer drone video as part of corporate video services in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, our Pretoria corporate video packages can include drone footage for stunning aerial shots.' } },
            { '@type': 'Question', 'name': 'Can you film at multiple locations in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we offer multi-location shoots across Pretoria and surrounding areas for maximum impact.' } },
            { '@type': 'Question', 'name': 'What types of corporate videos do you produce in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We produce promotional videos, training videos, event coverage, testimonials, and more for Pretoria businesses.' } },
            { '@type': 'Question', 'name': 'How long does it take to create a corporate video in Pretoria?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Typical turnaround for a Pretoria corporate video is 1–4 weeks, depending on complexity.' } },
            { '@type': 'Question', 'name': 'Do you provide scriptwriting for Pretoria corporate videos?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, our Pretoria team provides full scriptwriting and creative direction for your corporate video.' } },
            { '@type': 'Question', 'name': 'Are Pretoria corporate videos delivered in HD or 4K?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'We deliver all Pretoria corporate videos in HD or 4K, based on your requirements.' } },
            { '@type': 'Question', 'name': 'Can you add branding and motion graphics to my Pretoria corporate video?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we offer custom branding and motion graphics for all Pretoria corporate video projects.' } },
            // ... (repeat for all 50+ questions above)
          ]
        })
      }} />
      {/* Visually Hidden SEO Content Section with H1-H5 and Keyword-Rich Paragraphs */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6">
        <h2 className="text-3xl font-bold text-white mt-12 mb-6 font-syne">Corporate Video Production in Pretoria</h2>
        <p className="leading-relaxed text-lg mb-4">Our Pretoria corporate video production services empower businesses to communicate their brand stories, values, and offerings through compelling visual content. We work with Pretoria companies of all sizes to create professional videos for marketing, training, events, and internal communications.</p>
        <p className="leading-relaxed text-lg mb-4">With a team of experienced videographers and editors, we ensure every Pretoria corporate video is tailored to your objectives, audience, and brand identity. Our end-to-end service covers concept development, scripting, filming, and post-production, delivering polished results every time.</p>
        <h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">Why Invest in Corporate Video for Your Pretoria Business?</h3>
        <p className="leading-relaxed text-lg mb-4">Corporate videos are a powerful tool for Pretoria businesses looking to boost engagement, build trust, and drive conversions. Our Pretoria video experts help you leverage video content for websites, social media, presentations, and recruitment, making your message memorable and impactful.</p>
        <p className="leading-relaxed text-lg mb-4">We understand the Pretoria business landscape and create videos that resonate with local audiences. Our approach combines creativity, technical skill, and strategic planning to deliver videos that achieve your goals and reflect your company’s professionalism.</p>
        <h4 className="text-xl font-bold text-white mt-6 mb-3">Types of Corporate Videos Offered in Pretoria</h4>
        <p className="leading-relaxed text-lg mb-4">We produce a wide range of corporate videos in Pretoria, including company profiles, product demos, client testimonials, training videos, event coverage, and explainer animations. Our Pretoria video production services are customized to suit your specific needs and budget.</p>
        <p className="leading-relaxed text-lg mb-4">Our portfolio includes successful projects for Pretoria corporates, SMEs, and NGOs, demonstrating our versatility and commitment to quality. We use the latest equipment and techniques to ensure every video stands out in a crowded market.</p>
        <h5 className="text-lg font-bold text-[#FFD700] mt-4 mb-2">Quality, Compliance, and Editing in Pretoria Corporate Video</h5>
        <p className="leading-relaxed text-lg mb-4">Quality assurance is at the core of our Pretoria corporate video services. We follow best practices for filming, sound, and lighting, and our editors meticulously refine each video for clarity, pacing, and visual appeal. We also ensure compliance with relevant regulations and company guidelines in Pretoria.</p>
        <p className="leading-relaxed text-lg mb-4">Our Pretoria team offers fast turnaround times and responsive communication, making the production process smooth and efficient. We provide multiple rounds of feedback to ensure your Pretoria corporate video meets your expectations.</p>
        <h5>Get Started with Corporate Video Production in Pretoria</h5>
        <p className="leading-relaxed text-lg mb-4">Ready to enhance your business communications with expert corporate video production in Pretoria? Contact us today to discuss your project, receive a personalized quote, and schedule your Pretoria video shoot. We are dedicated to helping Pretoria businesses succeed through the power of video.</p>
        <p className="leading-relaxed text-lg mb-4">Our Pretoria corporate video specialists are here to guide you from concept to completion. Let us help you tell your story and achieve your business objectives with professional video content.</p>
      </section>
      {/* Contextual link to homepage with varied phrasing */}
      <div className="max-w-4xl mx-auto px-4 text-center mt-6">
        <p className="text-neutral-400 text-sm">
          Learn more about our <Link href="/" className="text-[#FFD700] hover:underline">Pretoria video production company</Link> on the homepage.
        </p>
      </div>
    </main>
  );
}
