import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Podcast Production & Editing Pretoria | Launch Your Show | 012 Agency',
    description: 'Full-service podcast production in Pretoria. Audio editing, show notes, cover art, and launch strategy to help you grow your audience and authority.',
    alternates: {
        canonical: 'https://012agency.co.za/podcast-production-pretoria',
    },
    openGraph: {
        url: 'https://012agency.co.za/podcast-production-pretoria',
        title: 'Podcast Production & Editing Pretoria | Launch Your Show | 012 Agency',
        description: 'Be the voice of your industry. Professional podcast editing and production services.',
        images: [
            {
                url: 'https://012agency.co.za/images/podcast-production-pretoria.jpg',
                width: 1200,
                height: 630,
                alt: 'Microphone in a podcast studio',
            },
        ],
    },
};

export default function PodcastProductionPretoria() {
    return (
        <div className="bg-zinc-950 min-h-screen text-white pt-24 pb-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Podcast Production Pretoria',
                        description:
                            'Podcast production and editing services in Pretoria by 012 Agency. Audio editing, show notes, cover art and launch strategy for your show.',
                        url: 'https://012agency.co.za/podcast-production-pretoria',
                        serviceType: 'Podcast production',
                        category: 'Podcast production services',
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
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Header Section */}
                <header className="mb-16 text-center">
                    <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                        Podcast <span className="text-[#FFD700]">Production Pretoria</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Record your content, and leave the rest to us. We turn raw audio into polished, professional episodes that build your authority and audience.
                    </p>
                </header>

                {/* Main Content */}
                <article className="prose prose-invert prose-lg max-w-none space-y-12">

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Why Start a Podcast?</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            Podcasting is the fastest-growing medium for building deep connection with an audience. Unlike a 30-second ad, a podcast allows you to be in your customer's ear for 30 minutes or more. It builds trust, establishes you as a thought leader, and creates a platform for networking with industry experts.
                        </p>
                        <p className="text-zinc-300 leading-relaxed">
                            But poor audio quality can kill your show before it starts. Listeners have zero tolerance for bad sound. Our <strong>Podcast Production Services in Pretoria</strong> ensure you sound like a pro from Episode 1.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Our Production Services</h2>
                        <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">Professional Audio Editing</h3>
                        <p className="text-zinc-300 leading-relaxed">
                            We clean up your tracks, removing background noise, long pauses, "ums," and stumbles. We balance levels so your guests sound just as loud as you do, and we add your intro/outro music seamlessly. The result is a smooth, broadcast-quality listening experience.
                        </p>

                        <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">Show Notes & Transcription</h3>
                        <p className="text-zinc-300 leading-relaxed">
                            Don't leave SEO value on the table. We create engaging show notes and full transcripts for every episode. This not only helps with accessibility but also drives search traffic to your website.
                        </p>

                        <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">Launch Strategy</h3>
                        <p className="text-zinc-300 leading-relaxed">
                            Starting from scratch? We help you plan your show format, design your cover art (crucial for Apple Podcasts!), and set up your hosting feed. We guide you through submitting to Spotify, Apple, Google, and all major directories.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Video Podcasting (Vodcast)</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            Want to dominate YouTube as well? We can edit your video recording, switching camera angles and adding lower-thirds for names and titles. Repurposing your podcast as video content doubles your reach with minimal extra effort.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Be the Voice of Your Industry</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            Whether you're a finance expert in Centurion or a lifestyle coach in Faerie Glen, your voice deserves to be heard. 012 Agency provides the technical backbone so you can focus on the conversation.
                        </p>
                        <p className="text-zinc-300 leading-relaxed">
                            Ready to hit record? Contact us today to discuss your podcast ideas.
                        </p>
                    </section>

                </article>
            </div>
        </div>
    );
}
