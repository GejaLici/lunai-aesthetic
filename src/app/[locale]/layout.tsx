import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages({locale});

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SiteHeader />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <SiteFooter />
    </NextIntlClientProvider>
  );
}
