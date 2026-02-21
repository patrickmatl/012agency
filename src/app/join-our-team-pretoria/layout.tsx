import React from 'react';
import type { Metadata } from 'next';
import { sharedViewport } from '../shared-metadata';

export const viewport = sharedViewport;

export const metadata: Metadata = {
  title: 'Careers | Join 012 Agency - Creative Design Agency',
  description:
    "Join our dynamic team at 012 Agency. We're looking for talented designers, developers, and creative professionals to help shape the future of digital design.",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

