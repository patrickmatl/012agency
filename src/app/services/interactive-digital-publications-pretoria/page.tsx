"use client";

import GetInTouchButton from "@/components/GetInTouchButton";

export default function InteractiveDigitalPublicationsPretoria() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Interactive Digital Publications Pretoria',
            description:
              'Interactive digital publication design services in Pretoria by 012 Agency. Interactive PDFs, digital magazines and catalogs for engaging online experiences.',
            url: 'https://012agency.co.za/services/interactive-digital-publications-pretoria',
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
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Interactive Digital Publications</h1>
        <p className="text-lg text-gray-300 mb-6">Creation of interactive PDFs and digital magazines for engaging online experiences.</p>
        <GetInTouchButton className="mx-auto" />
      </section>
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-syne font-bold mb-6 text-[#FFD700]">
              Digital catalogs, magazines and reports that invite exploration
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              We design interactive publications that feel closer to mini websites than flat documents. Readers can jump between sections, explore content in any order and always find their way back.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              For Pretoria brands, this is ideal for product catalogs, prospectuses, newsletters and long-form content where engagement matters as much as information.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              You get a flexible format that works for campaigns, launches and ongoing communication – all while staying consistent with your existing visual identity.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Magazine-style layouts
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Editorial design with strong typography and imagery that makes long reads feel light and engaging.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Smart navigation systems
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Linked contents, section markers and page jumps so users never feel lost inside your publication.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Media-rich experiences
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Space for video, audio and interactive elements that deepen understanding and hold attention.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Reusable templates
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Template systems your Pretoria team can use to create new editions and issues with ease.
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

