import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '3D Design & Product Rendering Pretoria | Visualization | 012 Agency',
    description: 'Photorealistic 3D design and product rendering services in Pretoria. Architectural visualization, product mockups, and 3D motion graphics to showcase your vision.',
    alternates: {
        canonical: 'https://012agency.co.za/3d-design-pretoria',
    },
    openGraph: {
        url: 'https://012agency.co.za/3d-design-pretoria',
        title: '3D Design & Product Rendering Pretoria | Visualization | 012 Agency',
        description: 'Visualize the impossible. High-end 3D rendering and animation services.',
        images: [
            {
                url: 'https://012agency.co.za/images/3d-design-pretoria.jpg',
                width: 1200,
                height: 630,
                alt: '3D wireframe of a product design',
            },
        ],
    },
};

export default function ThreeDDesignPretoria() {
    return (
        <div className="bg-zinc-950 min-h-screen text-white pt-24 pb-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: '3D Design & Product Rendering Pretoria',
                        description:
                            '3D design and product rendering services in Pretoria by 012 Agency. Architectural visualisation, product mockups and 3D motion graphics.',
                        url: 'https://012agency.co.za/3d-design-pretoria',
                        serviceType: '3D design and rendering',
                        category: '3D visualisation services',
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
                        3D Design & <span className="text-[#FFD700]">Rendering</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Showcase your products before they exist. We create photorealistic 3D renders and animations that sell your vision to investors and customers.
                    </p>
                </header>

                {/* Main Content */}
                <article className="prose prose-invert prose-lg max-w-none space-y-12">

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">The Power of Visualization</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            In a crowded market, a simple photo isn't always enough. 3D design allows you to control every aspect of your product's presentation—lighting, texture, angle, and environment. No expensive studio shoots, no limitations.
                        </p>
                        <p className="text-zinc-300 leading-relaxed">
                            At 012 Agency, our <strong>3D Design Services in Pretoria</strong> bring your sketches and CAD files to life. Whether you are launching a new beverage, designing a machine part, or developing a property, we help you close the deal with stunning visuals.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Our 3D Services</h2>
                        <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">Product Rendering</h3>
                        <p className="text-zinc-300 leading-relaxed">
                            Perfect for e-commerce and catalogs. We create hyper-realistic images of your product in any color or finish. Show the internal workings of a complex device or the sleek finish of a new cosmetic bottle.
                        </p>

                        <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">Architectural Visualization</h3>
                        <p className="text-zinc-300 leading-relaxed">
                            Selling off-plan? We work with architects and developers to create interior and exterior renders that make potential buyers feel like they've already moved in. Walkthrough animations provide an immersive tour of the future space.
                        </p>

                        <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">3D Motion Graphics</h3>
                        <p className="text-zinc-300 leading-relaxed">
                            Static images are great, but movement captures attention. We animate your logo, create exploded views of your product assemblage, or design abstract 3D loops for your website background.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Why Choose 3D Over Photography?</h2>
                        <ul className="list-disc pl-6 text-zinc-300 space-y-2">
                            <li><strong>Flexibility:</strong> Change the color or label of your product in seconds without a reshoot.</li>
                            <li><strong>Impossible Shots:</strong> visualize cross-sections, microscopic details, or floating components.</li>
                            <li><strong>Consistency:</strong> Maintain perfect lighting and angles across your entire product range.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Bring Your Vision to Life</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            From engineering firms in Silverton to startups in Menlyn Maine, innovative businesses choose 012 Agency for their 3D needs. Let us help you visualize success.
                        </p>
                        <p className="text-zinc-300 leading-relaxed">
                            Contact us today for a quote on your 3D modeling or rendering project.
                        </p>
                    </section>

                </article>
            </div>
        </div>
    );
}
