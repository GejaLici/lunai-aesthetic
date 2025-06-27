'use client';
import { usePathname } from 'next/navigation';
import { Link } from '@/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Stethoscope } from 'lucide-react';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const pathname = usePathname();
  
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/consultation', label: 'Virtual Consultation' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const bookNowLabel = 'Book Now';

  // The pathname from usePathname in next-intl includes the locale, so we can use it directly.
  const adjustedPathname = pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6 text-accent" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background">
              <nav className="grid gap-2 text-base font-medium mt-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4 px-3">
                  <Stethoscope className="h-8 w-8 text-primary" />
                  <span className="font-headline font-bold text-xl">LUNAI</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                     className={cn(
                      "block px-3 py-2 rounded-md transition-colors",
                      adjustedPathname === link.href
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
        
        <div className="flex items-center justify-start flex-1 md:flex-none">
            <Link href="/" className="flex items-center gap-2" aria-label="LUNAI Home">
              <Stethoscope className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold text-foreground hidden sm:inline">
                LUNAI
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
                (adjustedPathname === link.href || (link.href !== '/' && adjustedPathname.startsWith(link.href)))
                  ? "bg-primary/10 text-primary font-semibold" 
                  : "text-foreground/70 hover:bg-primary/5 hover:text-primary" 
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center justify-end flex-1 md:flex-none">
             <Button asChild>
                <Link href="/contact">{bookNowLabel}</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
