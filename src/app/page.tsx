import { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';
import { homeFaqs } from '@/data/homeFaqs';
import { generateFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '012 Agency | Design Agency Pretoria & #1 Graphic Design Agency',
  description: 'Design agency Pretoria — 012 Agency. Expert branding, logo design, web design, and digital marketing for Pretoria businesses. 15+ Years Experience. Free Consultation.',
  keywords: [
    '012 agency pretoria',
    'graphic design company pretoria',
    'graphic design agency pretoria',
    'branding agency pretoria',
    'web design pretoria',
    'creative agency pretoria',
    'logo design pretoria',
    'graphic design services pretoria',
    'design agency pretoria',
    'best design agency pretoria',
    'professional graphic designers pretoria',
    'design agency 012',
    'pretoria design company',
    'top creative agency pretoria',
    'digital marketing pretoria'
  ],
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  alternates: {
    canonical: 'https://012agency.co.za',
    languages: {
      'en-ZA': 'https://012agency.co.za',
      'x-default': 'https://012agency.co.za'
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: '012 Agency | Design Agency Pretoria',
    description: 'Design agency Pretoria — expert branding, logo design, web design, and digital marketing for Pretoria businesses.',
    url: 'https://012agency.co.za',
    siteName: '012 Agency — Pretoria Design Agency',
    locale: 'en_ZA',
    type: 'website',
    images: [
      {
        url: 'https://012agency.co.za/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '012 Agency — Pretoria\'s Leading Graphic Design Agency'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '012 Agency | Design Agency Pretoria',
    description: 'Design agency Pretoria — branding, logo design, web design, and digital marketing for Pretoria businesses.',
    images: ['https://012agency.co.za/images/og-image.jpg'],
    creator: '@012agency'
  },
  category: 'Graphic Design & Creative Services',
  authors: [
    {
      name: '012 Agency',
      url: 'https://012agency.co.za',
    }
  ],
  publisher: '012 Agency — Pretoria Design Agency',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://012agency.co.za'),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden perspective-1000">
      {/* FAQPage JSON-LD aligned with visible compact FAQ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateFAQSchema(homeFaqs) }} />
      {/* Structured Data for LocalBusiness SEO - Enhanced for Local Intent */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: `{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "012 Agency",
        "alternateName": ["012 Agency Pretoria", "The 012 Agency", "012 Creative Agency"],
        "image": "https://012agency.co.za/images/og-image.jpg",
        "@id": "https://012agency.co.za",
        "url": "https://012agency.co.za",
        "telephone": "+27 (0)62 369 3789",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Park Lane West Building, 194 Bancor Ave",
          "addressLocality": "Waterkloof Glen",
          "addressRegion": "Pretoria",
          "postalCode": "0181",
          "addressCountry": "ZA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -25.7479,
          "longitude": 28.2293
        },
        "areaServed": [
          "Pretoria", "Pretoria East", "Pretoria North", "Pretoria West",
          "Centurion", "Hatfield", "Brooklyn", "Menlyn", "Arcadia",
          "Silver Lakes", "Lynnwood", "Waterkloof Glen", "Faerie Glen",
          "Garsfontein", "Moreleta Park", "Midrand", "Gauteng"
        ],
        "serviceArea": {
          "@type": "Place",
          "name": "Pretoria, Gauteng, South Africa"
        },
        "hasMap": "https://maps.google.com/?q=Park+Lane+West+Building,+194+Bancor+Ave,+Waterkloof+Glen,+Pretoria",
        "sameAs": [
          "https://www.facebook.com/012agency",
          "https://www.instagram.com/012agency",
          "https://www.linkedin.com/company/012agency"
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "08:00",
            "closes": "15:00"
          }
        ],
        "description": "012 Agency is Pretoria's leading graphic design and creative agency, offering branding, logo design, web design, digital marketing, and creative services for all Pretoria suburbs and Gauteng. We are the true 012 Agency — born and built in Pretoria.",
        "knowsAbout": [
          "Graphic Design", "Branding", "Logo Design", "Web Design",
          "Digital Marketing", "Print Design", "Packaging Design",
          "Social Media Design", "UI/UX Design", "Corporate Identity"
        ],
        "slogan": "Pretoria's Creative Authority — The True 012 Agency"
      }`}} />
      <HomeContent />
    </main>
  );
}
