import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // If the pathname is for a static file or API route, do nothing.
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
      return NextResponse.next();
  }

  const pathnameHasLocale = pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`;

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect to the default locale
  const newUrl = new URL(`/${defaultLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url);
  
  if (request.nextUrl.search) {
    newUrl.search = request.nextUrl.search;
  }
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next/static|_next/image|favicon.ico|videos).*)',
  ],
};
