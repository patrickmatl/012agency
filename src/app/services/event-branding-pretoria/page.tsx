"use client";

import GetInTouchButton from "@/components/GetInTouchButton";

export default function EventBrandingPretoria() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Event Branding Pretoria',
            description:
              'Event branding services in Pretoria by 012 Agency. Branding, signage and digital assets for corporate events, expos and conferences.',
            url: 'https://012agency.co.za/services/event-branding-pretoria',
            serviceType: 'Event branding',
            category: 'Event branding services',
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
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Event Branding</h1>
        <p className="text-lg text-gray-300 mb-6">Branding, signage, and digital assets for corporate events, expos, and conferences.</p>
        <GetInTouchButton className="mx-auto" />
      </section>
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-syne font-bold mb-6 text-[#FFD700]">
              Give every touchpoint of your event the same visual story
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              We design event branding systems that work from save-the-date to post-event follow up. Your Pretoria event looks cohesive across invitations, programs, stages, signage and social media.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              Guests feel guided and taken care of, because typography, colour and iconography are used consistently at every point where they see your brand.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              Whether it is a 50-person breakfast or a multi-day conference, we tailor the visual system to the scale and goals of your event.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Launch and conference identities
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Event names, logos and themes designed to sit comfortably next to your main corporate brand.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Signage and wayfinding
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Practical signage systems that keep people moving smoothly through venues, halls and breakouts.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Digital promo packages
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Social media, mailer and web assets created to help you drive registrations and share highlights.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Reusable frameworks
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Systems you can bring back for annual events with fresh content but familiar structure.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-yellow-400 mb-8 text-center">Event Solutions</h2>
        <ul className="text-gray-300 space-y-3 text-lg">
          <li>Event branding and signage</li>
          <li>Event programs and digital assets</li>
          <li>Conference and expo materials</li>
        </ul>
      </section>
    </div>
  );
}

