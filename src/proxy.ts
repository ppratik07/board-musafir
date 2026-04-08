import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Proxy configuration for Board Musafir
 * 
 * Note: Authentication checks are currently handled at the page/API route level
 * rather than in the proxy to avoid Edge Runtime compatibility issues with NextAuth.
 * 
 * This proxy is used for:
 * - Request logging
 * - Basic routing rules
 * - Future rate limiting
 */

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Log requests in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Proxy] ${request.method} ${pathname}`);
  }

  // Allow all routes to proceed
  // Auth checks are handled at the page/component level using NextAuth's useSession/auth()
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     * - files with extensions (images, fonts, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|public).*)',
  ],
};
