import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './i18n';

export default createMiddleware({
  locales,
  defaultLocale
});

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next/static`, `/_next/image`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
