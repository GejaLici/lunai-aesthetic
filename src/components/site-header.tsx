
'use client';
import { Link, usePathname } from 'next-intl/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { LogoIcon } from '@/components/icons/logo-icon';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './language-switcher';

const navLinks = [
  { href: '/', labelKey: 'home' },
  { href: '/services', labelKey: 'services' },
  { href: '/gallery', labelKey: 'gallery' },
  { href: '/consultation', labelKey: 'consultation' },
  { href: '/blog', labelKey: 'blog' },
  { href: '/contact', labelKey: 'contact' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const t = useTranslations('SiteHeader');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70 shadow-md">
      <div className="container flex h-16 items-center">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6 text-accent" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-2 text-base font-medium mt-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4 px-3">
                  <LogoIcon className="h-10 w-auto" />
                  <span className="font-headline font-semibold text-lg">Lunai<br />Aesthetics</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                     className={cn(
                      "block px-3 py-2 rounded-md transition-colors",
                      pathname === link.href
                        ? "text-primary bg-primary/10 font-semibold"
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {t(link.labelKey)}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="flex items-center justify-start flex-1 md:flex-none">
            <Link href="/" className="flex items-center gap-2" aria-label="Lunai Aesthetics Home">
              <LogoIcon className="h-10 w-auto" />
              <span
                className="font-headline text-base md:text-2xl font-bold text-foreground leading-snug"
                suppressHydrationWarning
              >
                Lunai <br className="block md:hidden" /> Aesthetics
              </span>
            </Link>
        </div>

        <nav className="hidden md:flex items-center gap-1 mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 ease-in-out", 
                pathname === link.href
                  ? "bg-primary/10 text-primary font-semibold" 
                  : "text-foreground/70 hover:bg-primary/5 hover:text-primary" 
              )}
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center justify-end flex-1 md:flex-none">
            <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
