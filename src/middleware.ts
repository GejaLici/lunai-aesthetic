
import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'sq', 'it'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  // and exclude paths that should not be localized
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|videos).*)']
};
