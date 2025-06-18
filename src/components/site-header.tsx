
'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { LogoIcon } from '@/components/icons/logo-icon';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/consultation', label: 'Virtual Consultation' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70 shadow-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Zenviora Aesthetics Home">
          <LogoIcon className="h-8 w-8 text-accent" />
          <span
            className="font-headline text-base md:text-2xl font-bold text-foreground leading-snug"
            suppressHydrationWarning
          >
            Zenviora<br className="block md:hidden" />Aesthetics
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-1">
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
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6 text-accent" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-2 text-base font-medium mt-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4 px-3">
                  <LogoIcon className="h-8 w-8 text-accent" />
                  <span className="font-headline font-semibold text-lg">Zenviora<br />Aesthetics</span>
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
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
