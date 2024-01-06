import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'de', 'jp'],
 
  defaultLocale: 'en'
});
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};