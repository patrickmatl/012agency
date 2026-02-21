import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Drone Services Pretoria | Aerial Photography & Videography | 012 Agency',
    description: 'Professional drone services in Pretoria by 012 Agency. Aerial photography, videography, and mapping for real estate, construction, events, and marketing. CAA-compliant. Get a quote today.',
    keywords: [
        'drone services pretoria',
        'aerial photography pretoria',
        'drone photography pretoria',
        'aerial videography pretoria',
        'drone videography pretoria',
        'drone company pretoria',
    ],
    alternates: {
        canonical: 'https://012agency.co.za/drone-services-pretoria',
    },
    openGraph: {
        title: 'Drone Services Pretoria | Aerial Photography & Videography | 012 Agency',
        description: 'Professional drone services in Pretoria by 012 Agency. Aerial photography, videography, and mapping for real estate, construction, events, and marketing.',
        url: 'https://012agency.co.za/drone-services-pretoria',
        type: 'website',
    },
};

const droneServices = [
    { title: 'Real Estate Aerial Photography', desc: 'Stunning aerial images that showcase properties from perspectives that ground-level photography simply cannot achieve.' },
    { title: 'Construction Progress Monitoring', desc: 'Regular aerial documentation of construction sites to track progress, manage stakeholders, and maintain records.' },
    { title: 'Event Aerial Coverage', desc: 'Breathtaking aerial footage of corporate events, festivals, sports events, and ceremonies.' },
    { title: 'Marketing & Commercial Video', desc: 'Cinematic aerial footage for brand videos, advertisements, and social media content that stops the scroll.' },
    { title: 'Land & Property Surveys', desc: 'Accurate aerial mapping and surveying for land development, agriculture, and infrastructure projects.' },
    { title: 'Inspection Services', desc: 'Safe, efficient aerial inspection of roofs, towers, solar panels, and other structures that are difficult to access.' },
];

export default function DroneServicesPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Drone Services Pretoria',
                        description:
                            'Professional drone services in Pretoria by 012 Agency. Aerial photography, videography, mapping and inspections for business and marketing.',
                        url: 'https://012agency.co.za/drone-services-pretoria',
                        serviceType: 'Drone services',
                        category: 'Aerial photography and videography',
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

            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle at 40% 40%, #FFD700 0%, transparent 55%), radial-gradient(circle at 60% 60%, #FFA500 0%, transparent 55%)' }}
                />
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">See Pretoria From a New Perspective</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        Drone Services <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Professional aerial photography, videography, and mapping services for businesses across Pretoria and Gauteng. CAA-compliant, fully insured, and delivering cinematic results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">
                            Book a Drone Shoot
                        </Link>
                        <Link href="/project-showcase-pretoria" className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300">
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">
                        Aerial Perspectives That Elevate Your Brand
                    </h2>
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>
                            There is something uniquely powerful about aerial imagery. A perspective that was once available only to those with access to helicopters or aircraft is now accessible to businesses of all sizes, thanks to advances in drone technology. At 012 Agency, we operate professional drone services in Pretoria that give your business access to stunning aerial photography and videography that transforms the way you present your properties, projects, events, and brand.
                        </p>
                        <p>
                            Our drone operators are fully licensed by the South African Civil Aviation Authority (CAA) and carry comprehensive public liability insurance. This means that every drone shoot we conduct is fully compliant with South African aviation regulations, and you can have complete confidence that your project is in safe, professional hands. We handle all the necessary permissions and notifications, so you do not have to worry about the regulatory side of things.
                        </p>
                        <p>
                            The applications for drone photography and videography in Pretoria are vast. Real estate developers and estate agents use aerial imagery to showcase properties and developments from perspectives that dramatically increase buyer interest. Construction companies use regular drone surveys to document progress, manage stakeholders, and maintain accurate records of site conditions. Event organisers use aerial footage to capture the scale and atmosphere of their events in ways that ground-level cameras simply cannot achieve.
                        </p>
                        <p>
                            For marketing and brand content, drone footage is one of the most powerful tools available. A cinematic aerial shot of your facility, your construction project, or your event immediately communicates scale, professionalism, and ambition. It is the kind of content that stops people scrolling on social media, that makes corporate videos genuinely compelling, and that sets your marketing materials apart from those of your competitors.
                        </p>
                        <p>
                            We operate professional-grade drones equipped with high-resolution cameras capable of capturing 4K video and high-megapixel still images. Our equipment is regularly maintained and calibrated to ensure consistent, high-quality results. We also carry backup equipment to every shoot, so technical issues never result in a cancelled or incomplete project.
                        </p>
                        <p>
                            Post-production is where raw drone footage becomes truly impressive content. Our video editing and photo retouching team works on every piece of aerial content we capture, colour-grading footage, removing distractions, and assembling final videos that are ready to use across all your platforms. We deliver content in the formats and resolutions you need — whether that is a 60-second social media reel, a full-length corporate video, or a set of high-resolution still images for print use.
                        </p>
                        <p>
                            We also offer drone mapping and surveying services for clients in the construction, agriculture, and property development sectors. Using specialised mapping software, we can produce accurate orthomosaic maps, 3D models, and volumetric measurements from drone data — providing valuable information for project planning, progress tracking, and stakeholder reporting.
                        </p>
                        <p>
                            Whether you need a single aerial shoot for a property listing or an ongoing drone monitoring programme for a large construction project, 012 Agency delivers professional drone services in Pretoria that meet the highest standards of quality, safety, and reliability. Contact us today to discuss your aerial photography or videography needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">Our Drone Services</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">
                        Professional aerial solutions for every industry and application.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {droneServices.map((s) => (
                            <div key={s.title} className="bg-black rounded-xl p-6 border border-[#FFD700]/20 hover:border-[#FFD700]/60 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-10 h-1 bg-[#FFD700] mb-4 rounded" />
                                <h3 className="text-xl font-syne font-bold text-white mb-3">{s.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-14">Why Choose Our Drone Services</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: 'CAA Licensed & Compliant', desc: 'All our drone operators are fully licensed by the South African Civil Aviation Authority.' },
                            { title: 'Fully Insured', desc: 'Comprehensive public liability insurance on every shoot for your complete peace of mind.' },
                            { title: 'Professional Equipment', desc: '4K-capable professional drones with backup equipment on every shoot.' },
                            { title: 'Full Post-Production', desc: 'Professional editing, colour grading, and delivery in all formats you need.' },
                        ].map((item) => (
                            <div key={item.title} className="flex gap-4 p-6 bg-zinc-900 rounded-xl border border-[#FFD700]/10">
                                <div className="w-2 h-2 rounded-full bg-[#FFD700] mt-2 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-neutral-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border-t border-[#FFD700]/20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">Ready to Take Your Content to New Heights?</h2>
                    <p className="text-neutral-400 text-lg mb-8">
                        Book a professional drone shoot in Pretoria today and see your world from a whole new perspective.
                    </p>
                    <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105 inline-block">
                        Book Your Drone Shoot
                    </Link>
                    <div className="mt-10 pt-10 border-t border-white/10 text-neutral-500 text-sm">
                        <p>012 Agency — Park Lane West Building, 194 Bancor Ave, Waterkloof Glen, Pretoria, 0181</p>
                        <p className="mt-1">📞 +27 (0)62 369 3789 &nbsp;|&nbsp; ✉ info@012agency.co.za</p>
                    </div>
                </div>
            </section>

        </main>
    );
}
