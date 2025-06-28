import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es', 'it', 'fr', 'sq'],

  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',
    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(en|es|it|fr|sq)/:path*',
    // Enable redirects that add a locale prefix
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|.*\\..*|api).*)'
  ]
};
