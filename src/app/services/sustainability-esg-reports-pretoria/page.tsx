"use client";

import GetInTouchButton from "@/components/GetInTouchButton";

export default function SustainabilityESGPretoria() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Sustainability and ESG Report Design Pretoria',
            description:
              'Sustainability and ESG report design services in Pretoria by 012 Agency. Professional ESG and impact reports for organisations committed to corporate responsibility.',
            url: 'https://012agency.co.za/services/sustainability-esg-reports-pretoria',
            serviceType: 'Sustainability and ESG report design',
            category: 'Corporate reporting services',
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
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Sustainability & ESG Reports</h1>
        <p className="text-lg text-gray-300 mb-6">Design and production of sustainability and ESG reports for companies committed to corporate responsibility.</p>
        <GetInTouchButton className="mx-auto" />
      </section>
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-syne font-bold mb-6 text-[#FFD700]">
              Give your ESG performance the clarity and weight it deserves
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              We design sustainability and ESG reports that organise complex information into a narrative stakeholders can follow – from strategy and risks to performance and future commitments.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              For Pretoria organisations, that means aligning with global frameworks while still speaking in a tone and visual language that feels true to your brand and context.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              Our designs work in print and digital formats, making it easy to share your impact story with investors, employees, regulators and communities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Structured around material topics
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Sections that reflect what is most material to your business and stakeholders, not just a list of activities.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Strong visual summaries
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                At-a-glance pages and infographics that highlight key metrics, SDG alignment and progress over time.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Designed for assurance and review
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Layouts built with review, assurance and sign-off processes in mind to keep projects on track.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Flexible formats
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Options for full reports, highlights documents and summary one-pagers tailored to different audiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-yellow-400 mb-8 text-center">Our Expertise</h2>
        <ul className="text-gray-300 space-y-3 text-lg">
          <li>Sustainability and ESG report design</li>
          <li>Integrated and impact reports</li>
          <li>Infographics and data visualization</li>
        </ul>
      </section>
    </div>
  );
}

