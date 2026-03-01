import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CANONICAL_HOST = '012agency.co.za';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  const hostHeader = request.headers.get('host') || url.host;
  const hostname = hostHeader.split(':')[0] || url.hostname;

  const isCanonicalDomain =
    hostname === CANONICAL_HOST || hostname === `www.${CANONICAL_HOST}`;
  if (!isCanonicalDomain) {
    return NextResponse.next();
  }

  const forwardedProto = request.headers.get('x-forwarded-proto');
  const protocol = forwardedProto ? `${forwardedProto}:` : url.protocol;

  const shouldForceHttps = protocol !== 'https:';
  const shouldStripWww = hostname === `www.${CANONICAL_HOST}`;

  const pathname = url.pathname;
  const hasTrailingSlash =
    pathname.length > 1 &&
    pathname.endsWith('/') &&
    !pathname.startsWith('/_next/') &&
    !pathname.startsWith('/api/');

  // Check if we need to redirect
  if (shouldForceHttps || shouldStripWww || hasTrailingSlash) {
    // Only redirect if the current setup is actually different from the target
    if (url.protocol !== 'https:' || url.hostname !== CANONICAL_HOST || hasTrailingSlash) {
      url.protocol = 'https:';
      url.hostname = CANONICAL_HOST;
      if (hasTrailingSlash) {
        url.pathname = pathname.replace(/\/+$/, '');
      }
      return NextResponse.redirect(url, 308);
    }
  }

  return NextResponse.next();
}
