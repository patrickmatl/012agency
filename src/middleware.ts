import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(_request: NextRequest) {
  // No redirects — all pages are served to all visitors equally.
  // Removed previous bot-detection cloaking that redirected real users
  // away from location pages (violated Google's cloaking guidelines).
  return NextResponse.next();
}
