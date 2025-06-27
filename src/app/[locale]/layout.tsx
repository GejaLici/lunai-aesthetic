
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import '../globals.css';
import {NextIntlClientProvider, createTranslator} from 'next-intl';
import {getMessages} from 'next-intl/server';

export const metadata: Metadata = {
  title: {
    default: 'LUNAI - Expert Aesthetic Treatments',
    template: '%s | LUNAI',
  },
  description: 'LUNAI offers expert aesthetic treatments and personalized care to help you achieve lasting beauty and confidence. Explore our advanced services today.',
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className="smooth-scroll">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col bg-background">
          <NextIntlClientProvider messages={messages}>
            <SiteHeader />
            <main className="flex-grow">
              {children}
            </main>
            <SiteFooter />
            <Toaster />
          </NextIntlClientProvider>
      </body>
    </html>
  );
}
