import { Space_Grotesk, Syne } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import { sharedViewport } from './shared-metadata';
import ClientRootWrapper from '@/components/ClientRootWrapper';
import Breadcrumb from '@/components/Navigation/Breadcrumb';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { Suspense } from 'react';
import DeferredUI from '@/components/DeferredUI';

// Configure fonts
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://012agency.co.za#organization',
  name: '012 Agency',
  url: 'https://012agency.co.za',
  logo: 'https://012agency.co.za/images/og-image.jpg',
  sameAs: [
    'https://www.facebook.com/012agency',
    'https://www.instagram.com/012agency',
    'https://www.linkedin.com/company/012agency',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+27 (0)62 369 3789',
      contactType: 'customer service',
      areaServed: 'ZA',
      availableLanguage: ['en', 'af'],
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Park Lane West Building, 194 Bancor Ave',
    addressLocality: 'Waterkloof Glen',
    addressRegion: 'Pretoria',
    postalCode: '0181',
    addressCountry: 'ZA',
  },
};

export const metadata: Metadata = {
  title: '012 Agency — Graphic Design & Digital Marketing Agency Pretoria',
  description: 'Professional graphic design, digital marketing, and web design services in Pretoria, South Africa. 012 Agency helps Pretoria businesses grow their brand and online presence.',
  metadataBase: new URL('https://012agency.co.za'),
  openGraph: {
    title: '012 Agency — Graphic Design & Digital Marketing Agency Pretoria',
    description: 'Professional graphic design, digital marketing, and web design services in Pretoria, South Africa. 012 Agency helps Pretoria businesses grow their brand and online presence.',
    url: 'https://012agency.co.za',
    siteName: '012 Agency',
    images: [
      {
        url: 'https://012agency.co.za/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '012 Agency — Graphic Design & Digital Marketing Agency Pretoria',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
};

export const viewport = sharedViewport;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-ZA" className={`${spaceGrotesk.variable} ${syne.variable}`} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="jc8_wF_WjX96VJLj227cbJCEpeseZ-k9U7XSupr4QMw" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        {/** Font preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-black text-white font-space-grotesk" suppressHydrationWarning>
        <ClientRootWrapper>
          <BreadcrumbJsonLd />
          <Breadcrumb />
          <main className="flex min-h-[100svh] flex-col bg-[#0A0A0A] text-white">
            <Suspense fallback={null}>
              {children}
            </Suspense>
          </main>
          {/** Render breadcrumb after main to keep hero first in DOM - Moved to top per user request */}
          <DeferredUI />
        </ClientRootWrapper>
      </body>
    </html>
  );
}
