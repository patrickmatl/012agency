import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Design Services | 012 Agency',
  description: 'Professional website design services tailored to your needs.',
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
};

export default function WebsiteDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

