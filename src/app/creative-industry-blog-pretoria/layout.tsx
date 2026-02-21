import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | 012 Agency',
  description: 'Insights and updates from 012 Agency on web design, development, and digital marketing.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      {children}
    </div>
  );
}
