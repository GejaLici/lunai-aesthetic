'use client';

import { Link } from 'next-intl/navigation';
import { useTranslations } from 'next-intl';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { LogoIcon } from '@/components/icons/logo-icon';

export function SiteFooter() {
  const t = useTranslations('SiteFooter');
  const tHeader = useTranslations('SiteHeader');

  return (
    <footer className="border-t border-border/40 bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="Zenith Aesthetics Home">
              <LogoIcon className="h-10 w-auto" />
              <span className="font-headline text-xl font-bold">Zenith Aesthetics</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t('tagline')}
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-3">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-primary transition-colors">{tHeader('services')}</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">{tHeader('gallery')}</Link></li>
              <li><Link href="/consultation" className="hover:text-primary transition-colors">{tHeader('consultation')}</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">{tHeader('blog')}</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">{tHeader('contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-3">{t('followUs')}</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter size={24} />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Zenith Aesthetics<br />
              123 Beauty Ave, Suite 400<br />
              Aesthetics City, AC 54321
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              (123) 456-7890
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Zenith Aesthetics. All rights reserved. Website by Firebase Studio.
        </div>
      </div>
    </footer>
  );
}
