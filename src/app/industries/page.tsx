import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Industries We Serve | 012 Agency',
    description: 'Specialized marketing strategies for over 20 industries including Law, Medical, Construction, and more.',
};

const INDUSTRIES = [
    'Law Firms', 'Medical Practices', 'Construction Companies', 'Real Estate Agencies', 'Restaurants',
    'Private Schools', 'Logistics Companies', 'Car Dealerships', 'Financial Advisors', 'Retail Stores',
    'Salons & Spas', 'Security Companies', 'Solar Installers', 'Event Planners', 'Gyms',
    'IT Services', 'Non-Profits', 'Manufacturers', 'Consultants', 'Architects'
];

export default function IndustriesHub() {
    return (
        <div className="min-h-screen bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-syne font-bold text-gold-500 mb-8">
                    Industries We Serve
                </h1>
                <p className="text-xl text-neutral-400 mb-16 max-w-3xl">
                    We understand the nuace of your sector. From HIPAA-compliant medical marketing to high-conversion legal SEO.
                    Choose your industry to see our expertise.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {INDUSTRIES.sort().map((industry) => (
                        <Link
                            key={industry}
                            href={`/creative-industry-blog-pretoria?search=${encodeURIComponent(industry)}`}
                            className="p-6 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-gold-500 transition-colors group"
                        >
                            <h2 className="text-xl font-bold group-hover:text-gold-500 transition-colors">
                                {industry}
                            </h2>
                            <span className="text-sm text-neutral-500 mt-2 block">
                                View Industry Insights &rarr;
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
