"use client";

import GetInTouchButton from "@/components/GetInTouchButton";

export default function InvestorRelationsPretoria() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Investor Relations Materials Pretoria',
            description:
              'Investor relations material design services in Pretoria by 012 Agency. Professional investor decks, shareholder updates and financial communication design.',
            url: 'https://012agency.co.za/services/investor-relations-pretoria',
            serviceType: 'Investor relations material design',
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
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Investor Relations Materials</h1>
        <p className="text-lg text-gray-300 mb-6">Professional design and copy for investor decks, shareholder updates, and financial communications.</p>
        <GetInTouchButton className="mx-auto" />
      </section>
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-syne font-bold mb-6 text-[#FFD700]">
              Clear, credible communication for your investor story
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              We help Pretoria companies present performance, strategy and risk in a way that is easy for investors to follow and trust. Every deck, report and factsheet is built around the key messages you need the market to understand.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              Visual structure, typography and chart choices are all chosen to support accuracy and readability, so stakeholders can focus on the story and numbers, not fight the layout.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              From first-time fundraising to ongoing listed-company communication, we create IR materials that look professional and stay aligned with your broader brand.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Fundraising and roadshow decks
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Compelling decks built around your investment case, designed for meetings, webinars and roadshows.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Shareholder updates
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Regular update templates and layouts that keep communication consistent throughout the year.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Data-focused visuals
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Charts and infographics that highlight performance and trends without oversimplifying or distorting.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Editable working files
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Files your IR and finance teams can update each quarter as new results become available.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-yellow-400 mb-8 text-center">Our Solutions</h2>
        <ul className="text-gray-300 space-y-3 text-lg">
          <li>Investor and fundraising decks</li>
          <li>Shareholder reports and updates</li>
          <li>Financial presentation design</li>
        </ul>
      </section>
    </div>
  );
}

