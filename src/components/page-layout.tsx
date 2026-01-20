'use client';

import { usePathname } from 'next/navigation';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ReactNode } from 'react';

export function PageLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin') || pathname === '/login';

  return (
    <>
      {!isAdminRoute && <SiteHeader />}
      <main className="flex-grow">
        {children}
      </main>
      {!isAdminRoute && <SiteFooter />}
    </>
  );
}
