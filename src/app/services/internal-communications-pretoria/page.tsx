"use client";

import GetInTouchButton from "@/components/GetInTouchButton";

export default function InternalCommunicationsPretoria() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Internal Communications Design Pretoria',
            description:
              'Internal communications design services in Pretoria by 012 Agency. Branded internal documents, onboarding kits and employee communication materials.',
            url: 'https://012agency.co.za/services/internal-communications-pretoria',
            serviceType: 'Internal communications design',
            category: 'Corporate communication design services',
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
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Internal Communications</h1>
        <p className="text-lg text-gray-300 mb-6">Branded internal documents, onboarding kits, and employee handbooks for effective communication.</p>
        <GetInTouchButton className="mx-auto" />
      </section>
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-syne font-bold mb-6 text-[#FFD700]">
              Give your internal messages the same care as your marketing
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              We design internal documents that feel clear, respectful and on-brand, from onboarding guides and policy summaries to leadership updates and staff campaigns.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              Visual hierarchy and layout make it easy for busy employees to scan for what matters, then dive deeper when they have time.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              Over time, this consistency in look and tone helps build trust and alignment across your Pretoria teams, especially during change or growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Onboarding and HR packs
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Welcome books, checklists and guides that give new hires a confident, consistent start in your business.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Policy and process summaries
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Visual explanations of key policies and processes so staff understand expectations quickly.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Campaign assets
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Posters, mailers and screen graphics for wellness, safety, values and culture initiatives.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Editable templates
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Template sets your Pretoria HR and comms teams can use for future announcements and series.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-yellow-400 mb-8 text-center">How We Help</h2>
        <ul className="text-gray-300 space-y-3 text-lg">
          <li>Employee handbooks and onboarding kits</li>
          <li>Internal newsletters and communications</li>
          <li>Branded templates and guides</li>
        </ul>
      </section>
    </div>
  );
}

