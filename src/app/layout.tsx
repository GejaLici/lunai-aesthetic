import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { Rubik, PT_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { PageProgressBar } from '@/components/ui/page-progress-bar';

export const metadata: Metadata = {
  title: {
    default: 'LUNAI - Expert Aesthetic Treatments',
    template: '%s | LUNAI',
  },
  description: 'LUNAI offers expert aesthetic treatments and personalized care to help you achieve lasting beauty and confidence. Explore our advanced services today.',
};

const fontRubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['400', '700'],
});

const fontPtSans = PT_Sans({
  subsets: ['latin'],
  variable: '--font-pt-sans',
  weight: ['400', '700'],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={cn("font-body antialiased min-h-screen flex flex-col bg-background", fontRubik.variable, fontPtSans.variable)}>
          <Providers>
            <PageProgressBar />
            <SiteHeader />
            <main className="flex-grow">
              {children}
            </main>
            <SiteFooter />
            <Toaster />
          </Providers>
      </body>
    </html>
  );
}
