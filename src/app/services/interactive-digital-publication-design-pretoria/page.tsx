"use client";

import GetInTouchButton from "@/components/GetInTouchButton";

export default function InteractiveDigitalPublicationDesignPretoria() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Interactive Digital Publication Design Pretoria',
            description:
              'Interactive digital publication design services in Pretoria by 012 Agency. Clickable interactive PDFs, catalogs and reports that turn static documents into experiences.',
            url: 'https://012agency.co.za/services/interactive-digital-publication-design-pretoria',
            serviceType: 'Interactive digital publication design',
            category: 'Digital publication design services',
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
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Interactive Digital Publication Design Pretoria</h1>
        <p className="text-lg text-gray-300 mb-6">Creation of interactive PDFs and digital magazines for engaging online experiences.</p>
        <GetInTouchButton className="mx-auto" />
      </section>
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-syne font-bold mb-6 text-[#FFD700]">
              Turn static documents into interactive brand experiences
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              We upgrade traditional brochures, catalogs and reports into clickable digital publications that guide your Pretoria audience through content with ease.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              Instead of downloading and scrolling endlessly, readers can jump between sections, follow clear journeys and engage with embedded media that brings your message to life.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              Your brand feels modern and considered, while your team gets a flexible asset that can be updated and reused across campaigns and seasons.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Clickable layouts
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Structured navigation, contents pages and links that make it easy to move around longer documents.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Embedded media
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Video, audio and animations integrated directly into the publication for richer storytelling.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Cross-device design
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Content planned to work on desktop, tablet and mobile without awkward zooming or tiny text.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Easy updates
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Source files supplied so your Pretoria team can refresh sections as products, pricing or messaging change.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-yellow-400 mb-8 text-center">Our Digital Services</h2>
        <ul className="text-gray-300 space-y-3 text-lg">
          <li>Interactive PDFs and brochures</li>
          <li>Digital magazines and catalogs</li>
          <li>Clickable, engaging publications</li>
        </ul>
      </section>
    </div>
  );
}

