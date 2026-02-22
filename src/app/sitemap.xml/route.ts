import { NextResponse } from 'next/server';
import { locations } from '@/data/locations';
import { regions } from '@/data/regions';
import { services } from '@/data/services';
import { getAllPostsMeta } from '@/lib/blog';

const BASE_URL = 'https://012agency.co.za';

const staticRoutes = [
  '',
  'about-graphic-design-company-pretoria',
  'project-showcase-pretoria',
  'get-in-touch-pretoria',
  'service-areas-pretoria',
  'branding-solutions-pretoria',
  'visual-communication-services-pretoria',
  'service-bundles-pretoria',
  'creative-industry-blog-pretoria',
  'website-cookie-guidelines-pretoria',
  'data-protection-policy-pretoria',
  'services',
  'industries',
  'quote',
];

const serviceDetailSlugs = [
  'website-design-pretoria',
  'graphic-design-pretoria',
  'ecommerce-pretoria',
  'mobile-solutions-pretoria',
  'custom-development-pretoria',
  'packaging-design-pretoria',
  'print-design-pretoria',
  'email-marketing-pretoria',
  'google-ads-pretoria',
  'seo-pretoria',
  'social-media-pretoria',
  'photography-pretoria',
  'product-photography-pretoria',
  'corporate-video-pretoria',
  'drone-video-pretoria',
  'marketing-materials-pretoria',
  'content-marketing-pretoria',
  'copy-editing-services-pretoria-johannesburg',
  'copywriting-services-pretoria-johannesburg',
  'transcription-services-pretoria-johannesburg',
  'annual-report-design-and-print-pretoria',
  'website-maintenance-pretoria',
];

function getLocationPaths(): string[] {
  return locations.map((location) => `${BASE_URL}/service-areas-pretoria/${location.slug}`);
}

function getCityServicePaths(): string[] {
  const citySlugs: string[] = [];

  regions.forEach((region) => {
    region.locations.forEach((location) => {
      citySlugs.push(location.slug);
      if (location.subLocations) {
        location.subLocations.forEach((sub) => {
          citySlugs.push(sub.slug);
        });
      }
    });
  });

  const uniqueCities = Array.from(new Set(citySlugs));

  return uniqueCities.flatMap((city) =>
    services.map((service) => `${BASE_URL}/${city}/${service.slug}`)
  );
}

async function getBlogPostPaths(): Promise<string[]> {
  const posts = await getAllPostsMeta();
  return posts.map((post) => `${BASE_URL}/creative-industry-blog-pretoria/${post.slug}`);
}

export async function GET() {
  const blogUrls = await getBlogPostPaths();

  const urls = [
    ...staticRoutes.map((route) => `${BASE_URL}/${route}`),
    ...serviceDetailSlugs.map((slug) => `${BASE_URL}/${slug}`),
    ...serviceDetailSlugs.map((slug) => `${BASE_URL}/services/${slug}`),
    ...getLocationPaths(),
    ...getCityServicePaths(),
    ...blogUrls,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `<url><loc>${url.replace(/\/$/, '')}</loc></url>`
    )
    .join('\n  ')}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
