"use client";

import GetInTouchButton from "@/components/GetInTouchButton";

export default function InfographicDesignPretoria() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Infographic Design Pretoria',
            description:
              'Infographic and data visualization design services in Pretoria by 012 Agency. Clear, compelling visuals for reports, marketing and digital content.',
            url: 'https://012agency.co.za/services/infographic-design-pretoria',
            serviceType: 'Infographic design',
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
            areaServed: { '@type': 'City', name: 'Pretoria' },
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: 'https://012agency.co.za/get-in-touch-pretoria',
            },
          }),
        }}
      />
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Infographic & Data Visualization</h1>
        <p className="text-lg text-gray-300 mb-6">Custom infographics and visual data storytelling for reports, marketing, and digital content.</p>
        <GetInTouchButton className="mx-auto" />
      </section>
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-yellow-400 mb-8 text-center">What We Create</h2>
        <ul className="text-gray-300 space-y-3 text-lg">
          <li>Infographics and data charts</li>
          <li>Visual storytelling for reports</li>
          <li>Social media and web graphics</li>
        </ul>
      </section>
    </div>
  );
}

