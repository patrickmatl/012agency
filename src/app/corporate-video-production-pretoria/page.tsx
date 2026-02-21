import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Corporate Video Production Pretoria | Filming, Editing & Drone | 012 Agency',
    description: 'High-end corporate video production services in Pretoria. We specialize in promotional videos, training content, drone cinematography, and event coverage to elevate your brand.',
    alternates: {
        canonical: 'https://012agency.co.za/corporate-video-production-pretoria',
    },
    openGraph: {
        url: 'https://012agency.co.za/corporate-video-production-pretoria',
        title: 'Corporate Video Production Pretoria | Filming, Editing & Drone | 012 Agency',
        description: 'Tell your brand story with cinematic quality. Pretoria\'s premier video production team.',
        images: [
            {
                url: 'https://012agency.co.za/images/video-production-pretoria.jpg',
                width: 1200,
                height: 630,
                alt: 'Professional Video Production Setup',
            },
        ],
    },
};

export default function VideoProductionPretoria() {
    return (
        <div className="bg-zinc-950 min-h-screen text-white pt-24 pb-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Corporate Video Production Pretoria',
                        description:
                            'Corporate video production services in Pretoria by 012 Agency. Filming, editing and drone cinematography for promotional, training and event videos.',
                        url: 'https://012agency.co.za/corporate-video-production-pretoria',
                        serviceType: 'Corporate video production',
                        category: 'Video production services',
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
                        Cinematic <span className="text-[#FFD700]">Video Production Pretoria</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Engage your audience with visual storytelling that resonates. From script to screen, we produce high-impact video content that drives results.
                    </p>
                </header>

                {/* Main Content */}
                <article className="prose prose-invert prose-lg max-w-none space-y-12">

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">The Power of Video Marketing in Pretoria</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            Video is no longer an optional extra; it is the most powerful medium of communication in the digital age. Cisco reports that video accounts for over 82% of all internet traffic. For businesses in Pretoria, this presents a massive opportunity. A professionally produced corporate video communicates your value proposition faster and more emotionally than text ever could.
                        </p>
                        <p className="text-zinc-300 leading-relaxed">
                            At 012 Agency, we understand that every frame matters. Our <strong>corporate video production services</strong> are designed to capture the essence of your brand. whether you are a law firm in Brooklyn needing a trust-building profile or a manufacturing plant in Silverton showcasing your capabilities, we have the technical expertise and creative vision to bring your story to life.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Our Production Process: From Concept to Final Cut</h2>
                        <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">1. Pre-Production & Strategy</h3>
                        <p className="text-zinc-300 leading-relaxed">
                            Great videos start with a solid plan. We work closely with you to define the goal of your video—is it to educate, inspire, or sell? Our creative team develops scripts, storyboards, and shot lists that align with your marketing objectives. We handle all logistics, including location scouting, casting, and scheduling, ensuring the shoot day runs flawlessly.
                        </p>

                        <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">2. Production: Lights, Camera, Action</h3>
                        <p className="text-zinc-300 leading-relaxed">
                            We deploy state-of-the-art equipment, including 4K cinema cameras, professional lighting rigs, and crystal-clear audio recording gear. Our crew is experienced in finding the best angles and eliciting natural performances from your team. We create an environment where you feel comfortable on camera, resulting in authentic content that builds trust with your viewers.
                        </p>

                        <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">3. Post-Production & Editing</h3>
                        <p className="text-zinc-300 leading-relaxed">
                            This is where the magic happens. Our editors piece together the footage, adding dynamic motion graphics, color grading, and sound design to create a polished final product. We ensure your video is optimized for its intended platform, whether that's a wide-screen website banner or a vertical Instagram Reel.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Drone Services: Aerial Cinematography</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            Take your production to new heights—literally. As fully licensed drone operators, we offer breathtaking aerial cinematography that adds high production value to any project. Perfect for real estate developments, construction progress reports, or large-scale corporate campuses in Pretoria East.
                        </p>
                        <p className="text-zinc-300 leading-relaxed">
                            Our drone pilots are skilled in capturing smooth, cinematic shots that provide a unique perspective of your business. Aerial footage is particularly effective for establishing shots that show the scale and location of your operations, instantly impressing potential clients.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Types of Videos We Produce</h2>
                        <ul className="list-disc pl-6 text-zinc-300 space-y-2">
                            <li><strong>Corporate Overviews:</strong> Introduce your team, mission, and facilities.</li>
                            <li><strong>Product Demos:</strong> Show, don't just tell, how your product works.</li>
                            <li><strong>Testimonials:</strong> Let your happy customers do the selling for you.</li>
                            <li><strong>Training & Safety Videos:</strong> Standardize your internal communications.</li>
                            <li><strong>Event Coverage:</strong> Capture your conferences and launches for future marketing.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Elevate Your Brand with Video</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            Video is the most versatile asset in your marketing toolkit. It increases time-on-site for SEO, boosts engagement on social media, and improves email open rates. By investing in high-quality <strong>Video Production Pretoria</strong>, you are investing in a deeper connection with your audience.
                        </p>
                        <p className="text-zinc-300 leading-relaxed">
                            Ready to press record? Contact 012 Agency to discuss your video project. We combine technical excellence with storytelling passion to deliver videos that don't just look good—they perform.
                        </p>
                    </section>

                </article>
            </div>
        </div>
    );
}
