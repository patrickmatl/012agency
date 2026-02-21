"use client";

import GetInTouchButton from "@/components/GetInTouchButton";
import Link from 'next/link';

export default function PresentationDesignPretoria() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Presentation Design Pretoria',
            description:
              'Presentation design services in Pretoria by 012 Agency. Custom PowerPoint, Google Slides and Keynote decks for pitches, training and everyday meetings.',
            url: 'https://012agency.co.za/services/presentation-design-pretoria',
            serviceType: 'Presentation design',
            category: 'Corporate communications and design services',
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
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Presentation Design Services</h1>
        <p className="text-lg text-gray-300 mb-6">Custom PowerPoint, Google Slides, and Keynote presentations to impress your audience and elevate your brand.</p>
        <GetInTouchButton className="mx-auto" />
      </section>
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-syne font-bold mb-6 text-[#FFD700]">
              Professional decks for pitches, training and everyday meetings
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              We redesign tired slides into clean, confident presentations that match the standard of your work. Every deck is structured around your core message, not just a list of topics.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              Visual hierarchies, clear section breaks and well-paced content help your Pretoria audience stay with you from the opening slide to the final call-to-action.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              You receive an editable file you can keep updating internally, plus the option for reusable templates your team can use for future meetings.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Refreshed existing decks
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                We keep your content but rebuild the slides with better layouts, icons and visuals for clarity.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Training and internal presentations
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Designed to help staff actually absorb the material, with fewer words and more structure.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Visual support for complex ideas
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Diagrams, flows and infographics that make processes, timelines and data easier to explain.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Brand-consistent templates
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                A library of master slides that keeps every deck on-brand, even when different people present.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-yellow-400 mb-8 text-center">What We Offer</h2>
        <ul className="text-gray-300 space-y-3 text-lg">
          <li>Business, investor, and conference presentations</li>
          <li>Custom branded slides and infographics</li>
          <li>Professional storytelling and visual flow</li>
          <li>Editable, reusable templates</li>
        </ul>
      </section>
      <div className="mt-4 text-center">
        <p className="text-neutral-400 text-sm">
          Learn more on our
          {" "}
          <Link href="/" className="text-[#FFD700] hover:underline">Pretoria presentation design experts</Link>
          {" "}
          homepage.
        </p>
      </div>
    </div>
  );
}
