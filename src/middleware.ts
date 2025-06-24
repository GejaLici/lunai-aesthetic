
import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'it', 'sq'],
  defaultLocale: 'en'
});
 
export const config = {
  matcher: ['/', '/(it|sq|en)/:path*']
};
