'use client';

import Script from 'next/script';

export default function SchemaOrg() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "012 Agency",
    "description": "Design Agency in Pretoria, South Africa",
    "url": "https://012agency.co.za",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pretoria",
      "addressCountry": "ZA"
    }
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you serve Pretoria and nearby areas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We are based in Pretoria and serve clients across Gauteng and South Africa."
        }
      },
      {
        "@type": "Question",
        "name": "What services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide branding, graphic design, web design, marketing, and content production services."
        }
      },
      {
        "@type": "Question",
        "name": "Can you handle strategy and execution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We plan, design, and execute full campaigns from concept to delivery."
        }
      },
      {
        "@type": "Question",
        "name": "How do we start a project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Share your goals and timeline, and we will propose the best approach and next steps."
        }
      }
    ]
  };
  const schemaData = [organizationSchema, faqSchema];

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(schemaData)}
    </Script>
  );
}
