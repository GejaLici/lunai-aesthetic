import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Redirect root path to /en
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url))
  }

  // Rewrite requests for /services to /en/services, etc.
  // This handles direct navigation to clean URLs.
  // Excludes paths that already have a locale prefix or are special Next.js paths.
  const locales = ['en', 'es', 'it'];
  const hasLocale = locales.some(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  if (!hasLocale) {
     const url = request.nextUrl.clone()
     url.pathname = `/en${pathname}`
     return NextResponse.rewrite(url)
  }
 
  return NextResponse.next()
}
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
