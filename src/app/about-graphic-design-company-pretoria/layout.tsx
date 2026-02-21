import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | 012 Agency',
  description: 'Learn more about 012 Agency and our digital solutions expertise.',
};

export default function AboutLayout({
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
