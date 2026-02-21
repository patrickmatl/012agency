import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Service Areas | 012 Agency',
    description: 'Browse our services by location. We serve the greater Pretoria area, Johannesburg North, and key townships.',
};

const LOCATIONS = [
    // Phase 5 (Originals)
    'Menlyn', 'Arcadia', 'Hatfield', 'Brooklyn', 'Waterkloof', 'Centurion', 'Faerie Glen', 'Garsfontein', 'Lynnwood', 'Silver Lakes',
    // Phase 7 (Expansion)
    'Moreleta Park', 'Elardus Park', 'Equestria', 'Wapadrand', 'Constantia Park', 'Lynnwood Manor', 'Lynnwood Ridge',
    'Murrayfield', 'Meyerspark', 'Silverton', 'Queenswood', 'Kilner Park', 'Riviera', 'Rietondale', 'Groenkloof',
    'Lukasrand', 'Muckleneuk', 'Baileys Muckleneuk', 'Nieuw Muckleneuk', 'Erasmuskloof', 'Erasmusrand', 'Monument Park',
    'Sterrewag', 'Pierre van Ryneveld', 'Lyttelton', 'Irene', 'Rooihuiskraal', 'Wierda Park', 'Eldoraigne', 'Clubview',
    // Phase 8 (North/Moot)
    'Waverley', 'Colbyn', 'Annlin', 'Sinoville', 'Karenpark',
    // Phase 9 (Township)
    'Soshanguve', 'Mamelodi', 'Mabopane',
    // Phase 10 (Sandton)
    'Sandton', 'Bryanston', 'Morningside', 'Rivonia', 'Rosebank'
];

export default function LocationsHub() {
    return (
        <div className="min-h-screen bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-syne font-bold text-gold-500 mb-8">
                    Areas We Serve
                </h1>
                <p className="text-xl text-neutral-400 mb-16 max-w-3xl">
                    012 Agency provides world-class design and marketing services across the entire Gauteng region.
                    Select your location to find tailored strategies for your community.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {LOCATIONS.sort().map((location) => {
                        const slug = location.toLowerCase().replace(/\s+/g, '-');
                        return (
                            <Link
                                key={location}
                                href={`/service-areas-pretoria/${slug}`}
                                className="p-6 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-gold-500 transition-colors group"
                            >
                                <h2 className="text-xl font-bold group-hover:text-gold-500 transition-colors">
                                    {location}
                                </h2>
                                <span className="text-sm text-neutral-500 mt-2 block">
                                    View Local Services &rarr;
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
