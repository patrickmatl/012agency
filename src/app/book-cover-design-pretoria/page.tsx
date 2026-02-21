import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Book Cover Design Pretoria | eBook & Print Covers | 012 Agency',
    description: 'Award-winning book cover design in Pretoria. We create best-selling covers for Kindle, paperback, and hardcovers. Stand out on the shelf and get more readers.',
    alternates: {
        canonical: 'https://012agency.co.za/book-cover-design-pretoria',
    },
    openGraph: {
        url: 'https://012agency.co.za/book-cover-design-pretoria',
        title: 'Book Cover Design Pretoria | eBook & Print Covers | 012 Agency',
        description: 'People DO judge a book by its cover. Make sure yours sells. Professional design for authors in Pretoria.',
        images: [
            {
                url: 'https://012agency.co.za/images/book-cover-design-pretoria.jpg',
                width: 1200,
                height: 630,
                alt: 'Collection of designed book covers',
            },
        ],
    },
};

export default function BookCoverDesignPretoria() {
    return (
        <div className="bg-zinc-950 min-h-screen text-white pt-24 pb-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Book Cover Design Pretoria',
                        description:
                            'Book cover design services in Pretoria by 012 Agency. Professional covers for Kindle, paperback and hardcovers that sell more books.',
                        url: 'https://012agency.co.za/book-cover-design-pretoria',
                        serviceType: 'Book cover design',
                        category: 'Book design services',
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
                        Bestselling <span className="text-[#FFD700]">Book Cover Design</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Your cover is your number one marketing tool. We design covers that intrigue readers, communicate genre instantly, and drive sales.
                    </p>
                </header>

                {/* Main Content */}
                <article className="prose prose-invert prose-lg max-w-none space-y-12">

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">The First Five Seconds</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            That's all the time you have to catch a potential reader's eye as they scroll through Amazon or browse a bookstore in Menlyn Park. If your cover looks amateur, they assume the writing is too. Professional <strong>book cover design</strong> is the difference between a hobby project and a commercial success.
                        </p>
                        <p className="text-zinc-300 leading-relaxed">
                            At 012 Agency, we don't just make "pretty" pictures. We study the current market trends in your specific genre—whether it's Thriller, Romance, Business, or Memoir—to ensure your book meets reader expectations while standing out from the competition.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Print vs. eBook Design</h2>
                        <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">The Thumbnail Test</h3>
                        <p className="text-zinc-300 leading-relaxed">
                            Most books are sold online, meaning your cover will often be seen as a tiny image on a phone screen. We design with strong typography and high contrast to ensure your title and image remain legible and striking even at thumbnail size.
                        </p>

                        <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">Full Wrap Print Design</h3>
                        <p className="text-zinc-300 leading-relaxed">
                            For paperback and hardcover editions, the spine and back cover are just as important. The spine needs to pop on a crowded shelf, and the back cover text (blurb) needs to hook the reader instantly. We handle the technical layout of the barcode, ISBN, and author bio, ensuring your file is ready for upload to Amazon KDP or IngramSpark.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Our Creative Process</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            We start by reading your synopsis and discussing your vision. What mood should the cover convey? Dark and mysterious? Bright and optimistic? Minimalist and corporate? We then present multiple unique concepts for you to choose from.
                        </p>
                        <p className="text-zinc-300 leading-relaxed">
                            Using professional stock photography, custom illustration, and expert typography, we craft a cover that looks like it belongs on the New York Times bestseller list.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFD700] pl-4">Don't Judge a Book By Its Cover? Everyone Does.</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            It's an old saying, but in publishing, it's dead wrong. Your cover signals to the reader that this book is for them. Don't let a DIY cover sabotage years of writing effort.
                        </p>
                        <p className="text-zinc-300 leading-relaxed">
                            Join the ranks of successful Pretoria authors. Contact 012 Agency today to start your cover design journey.
                        </p>
                    </section>

                </article>
            </div>
        </div>
    );
}
