import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Professional Transcription Services Pretoria | Audio to Text | 012 Agency',
    description: 'Accurate audio and video transcription services in Pretoria. We transcribe interviews, meetings, legal proceedings, and medical dictations with 99% accuracy.',
    alternates: {
        canonical: 'https://012agency.co.za/transcription-services-pretoria',
    },
    openGraph: {
        url: 'https://012agency.co.za/transcription-services-pretoria',
        title: 'Professional Transcription Services Pretoria | Audio to Text | 012 Agency',
        description: 'Convert your speech to text with precision. Confidential, fast, and accurate transcription.',
        images: [
            {
                url: 'https://012agency.co.za/images/transcription-services-pretoria.jpg',
                width: 1200,
                height: 630,
                alt: 'Professional Transcriber working',
            },
        ],
    },
};

export default function TranscriptionServicesPretoria() {
    return (
        <div className="bg-zinc-950 min-h-screen text-white pt-24 pb-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Transcription Services Pretoria',
                        description:
                            'Transcription services in Pretoria by 012 Agency. Accurate audio and video transcription for interviews, meetings, legal and academic work.',
                        url: 'https://012agency.co.za/transcription-services-pretoria',
                        serviceType: 'Transcription',
                        category: 'Transcription services',
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
                        Accurate <span className="text-[#FFD700]">Transcription Services Pretoria</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Turn your audio and video content into accurate, searchable text. We provide fast, confidential, and human-verified transcription for businesses and professionals.
                    </p>
                </header>

                {/* Main Content */}
                <article className="prose prose-invert prose-lg max-w-none space-y-12">

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Why Accuracy Matters</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            In the world of transcription, a single misheard word can change the entire meaning of a sentence. Whether it's a legal deposition, a medical report, or a boardroom strategy meeting, you need a record you can trust. Automated AI tools are getting better, but they still struggle with South African accents, technical jargon, and overlapping speakers.
                        </p>
                        <p className="text-zinc-300 leading-relaxed">
                            At 012 Agency, we use a hybrid approach. We leverage advanced technology for speed, but every transcript is reviewed and edited by a human language expert. This ensures 99% accuracy, proper formatting, and speaker identification. We don't just type what we hear; we understand the context.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Our Transcription Services</h2>
                        <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">1. General Transcription</h3>
                        <p className="text-zinc-300 leading-relaxed">
                            Perfect for interviews, podcasts, webinars, and conference calls. We deliver clean, readable text that captures the essence of the conversation without the "ums" and "ahs" (unless you request Verbatim).
                        </p>

                        <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">2. Legal transcription</h3>
                        <p className="text-zinc-300 leading-relaxed">
                            Lawyers and legal professionals in Pretoria trust us with their sensitive audio. We handle court hearings, witness statements, and client meetings with strict confidentiality and secure file transfer protocols.
                        </p>

                        <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">3. Academic & Research</h3>
                        <p className="text-zinc-300 leading-relaxed">
                            For students and researchers at UP, UNISA, and TUT, we promote fast turnaround times for thesis interviews and focus groups. We format transcripts to qualitative research standards.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Confidentiality Guaranteed</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            We understand that your audio files often contain sensitive or proprietary information. Our team signs strict Non-Disclosure Agreements (NDAs), and all files are stored on encrypted servers. We delete your audio files permanently 30 days after project completion, ensuring your data never falls into the wrong hands.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Simple, Transparent Pricing</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            No hidden fees. Our pricing is based on the length of your audio, not the time it takes us to type it. You'll know exactly what your project will cost before we start.
                        </p>
                        <ul className="list-disc pl-6 text-zinc-300 space-y-2">
                            <li><strong>Clear Audio:</strong> Standard rates apply.</li>
                            <li><strong>Difficult Audio:</strong> Background noise or heavy accents may incur a small surcharge.</li>
                            <li><strong>Verbatim vs. Clean Read:</strong> Choose the level of detail you need.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Get Started Today</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            Stop wasting hours trying to type out recordings yourself. Let the experts handle it. Contact 012 Agency for professional <strong>Transcription Services Pretoria</strong> and get your text fast.
                        </p>
                    </section>

                </article>
            </div>
        </div>
    );
}
