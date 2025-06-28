
import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix, defaultLocale} from './i18n-config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix
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
