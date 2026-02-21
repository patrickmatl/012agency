import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Book Layout & Typesetting Pretoria | 012 Agency — Book Design Pretoria',
    description: 'Professional book layout and typesetting in Pretoria by 012 Agency. Interior book design, typesetting, cover design, and print-ready file preparation for self-publishers and publishers.',
    keywords: ['book layout pretoria', 'book typesetting pretoria', 'book design pretoria', 'interior book design pretoria', 'self publishing design pretoria', 'book formatting pretoria'],
    alternates: { canonical: 'https://012agency.co.za/book-layout-pretoria' },
    openGraph: {
        title: 'Book Layout & Typesetting Pretoria | 012 Agency',
        description: 'Professional book layout, typesetting, and cover design for self-publishers and publishers in Pretoria.',
        url: 'https://012agency.co.za/book-layout-pretoria',
        type: 'website',
    },
};

const bookServices = [
    { title: 'Interior Book Layout', desc: 'Professional interior design and typesetting for novels, non-fiction, textbooks, and all book types — formatted for print and digital distribution.' },
    { title: 'Book Cover Design', desc: 'Eye-catching front cover, spine, and back cover design that stands out on shelves and in online stores — designed to attract your target reader.' },
    { title: 'Typesetting & Typography', desc: 'Expert typesetting with careful attention to readability, line spacing, margins, chapter headings, and all the typographic details that make a book a pleasure to read.' },
    { title: 'eBook Formatting', desc: 'ePub and MOBI formatting for Kindle, Apple Books, Kobo, and other digital platforms — reflowable layouts that look great on any device.' },
    { title: 'Print-Ready File Preparation', desc: 'PDF files prepared to exact printer specifications — correct bleed, trim marks, colour profiles, and resolution for offset and digital printing.' },
    { title: 'Self-Publishing Packages', desc: 'Complete self-publishing design packages including interior layout, cover design, and file preparation for Amazon KDP, IngramSpark, and local printers.' },
];

export default function BookLayoutPretoria() {
    return (
        <main className="min-h-screen bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Book Layout & Typesetting Pretoria',
                        description:
                            'Book layout, typesetting and book design services in Pretoria by 012 Agency. Interior layout, cover design and print-ready files for self-publishers and publishers.',
                        url: 'https://012agency.co.za/book-layout-pretoria',
                        serviceType: 'Book layout and typesetting',
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
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #FFD700 0%, transparent 50%), radial-gradient(circle at 70% 50%, #FFA500 0%, transparent 50%)' }} />
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <p className="text-[#FFD700] text-sm font-semibold tracking-widest uppercase mb-4">Your Words Deserve Beautiful Design</p>
                    <h1 className="text-5xl md:text-7xl font-syne font-bold mb-6 leading-tight">
                        Book Layout & Typesetting <span className="text-[#FFD700]">Pretoria</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Professional book layout, typesetting, and cover design for self-publishers and publishers in Pretoria. Print-ready files for local printers, Amazon KDP, and IngramSpark.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105">Get a Book Design Quote</Link>
                        <Link href="/project-showcase-pretoria" className="border border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/10 transition-all duration-300">View Portfolio</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-[#FFD700] mb-10 text-center">Professional Book Design for Pretoria Authors</h2>
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>Writing a book is an extraordinary achievement. Getting it professionally designed is what transforms your manuscript into a publication that readers take seriously. The interior layout and typesetting of a book affects the reading experience in ways that readers may not consciously notice — but they absolutely feel. A poorly typeset book is tiring to read, while a well-typeset book draws the reader in and makes the words feel authoritative and professional. At 012 Agency, we bring the same level of craft to book design that we bring to all our design work.</p>
                        <p>Our book layout and typesetting service covers all types of books — novels, memoirs, non-fiction, business books, academic texts, children&apos;s books, poetry collections, cookbooks, and more. Each book type has its own typographic conventions and layout requirements, and our designers understand these nuances. A novel requires different typographic treatment from a business book, and a cookbook requires a completely different layout approach from a memoir.</p>
                        <p>Interior book design involves far more than simply formatting text. It includes choosing the right typeface for the body text and headings, setting appropriate line spacing and margins for comfortable reading, designing chapter opening pages, handling widows and orphans (single lines stranded at the top or bottom of pages), managing page numbers and running headers, and ensuring consistent spacing throughout the book. These details, invisible to most readers when done well, make the difference between a book that feels professionally published and one that feels self-produced.</p>
                        <p>We design book covers that work both in print and online. In a bookshop, your cover needs to attract attention from a distance and communicate the genre and tone of your book at a glance. Online, your cover needs to be legible as a small thumbnail while still being compelling enough to make a browser click through. We design covers that achieve both — striking, genre-appropriate designs that look professional in any context.</p>
                        <p>For self-publishers, we offer complete self-publishing packages that include interior layout, cover design, and file preparation for your chosen distribution platform. Whether you are publishing through Amazon KDP, IngramSpark, or a local South African printer, we prepare your files to the exact specifications required — correct trim size, bleed, resolution, colour profile, and PDF settings. This eliminates the technical headaches of self-publishing and ensures your book is accepted by the printer first time.</p>
                        <p>We also offer eBook formatting services — converting your manuscript to ePub and MOBI formats for distribution on Kindle, Apple Books, Kobo, and other digital platforms. eBook formatting requires a different approach from print layout — the text must be reflowable, meaning it adapts to different screen sizes and font size settings. We format eBooks that look great on every device and pass the validation requirements of all major platforms.</p>
                        <p>Our typesetting process uses professional desktop publishing software — Adobe InDesign — which is the industry standard for book layout. This ensures the highest quality output and gives us precise control over every typographic detail. We deliver print-ready PDF files and eBook files in all required formats, along with the source files if you need to make future revisions.</p>
                        <p>Contact 012 Agency today to discuss your book design project. Whether you are a first-time self-publisher or an established author, we deliver book design that makes your work look as good as it reads.</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-zinc-900 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-syne font-bold text-center text-[#FFD700] mb-4">Book Design Services</h2>
                    <p className="text-center text-neutral-400 mb-14 max-w-2xl mx-auto">Everything you need to publish a professionally designed book — print or digital.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bookServices.map((s) => (
                            <div key={s.title} className="bg-black rounded-xl p-6 border border-[#FFD700]/20 hover:border-[#FFD700]/60 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-10 h-1 bg-[#FFD700] mb-4 rounded" />
                                <h3 className="text-xl font-syne font-bold text-white mb-3">{s.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border-t border-[#FFD700]/20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-syne font-bold text-white mb-4">Ready to Publish Your Book?</h2>
                    <p className="text-neutral-400 text-lg mb-8">Get professional book layout and typesetting that makes your manuscript look as good as it reads.</p>
                    <Link href="/get-in-touch-pretoria" className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFE55C] transition-all duration-300 hover:scale-105 inline-block">Get Your Book Design Quote</Link>
                    <div className="mt-10 pt-10 border-t border-white/10 text-neutral-500 text-sm">
                        <p>012 Agency — Park Lane West Building, 194 Bancor Ave, Waterkloof Glen, Pretoria, 0181</p>
                        <p className="mt-1">📞 +27 (0)62 369 3769 &nbsp;|&nbsp; ✉ info@012agency.co.za</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
