
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { LogoIcon } from '@/components/icons/logo-icon';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="Lunai Aesthetics Home">
              <LogoIcon className="h-10 w-10 text-accent" />
              <span className="font-headline text-xl font-bold">Lunai Aesthetics</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Reaching the pinnacle of beauty and confidence.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/consultation" className="hover:text-primary transition-colors">Virtual Consultation</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-3">Follow Us</h3>
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
              Lunai Aesthetics<br />
              123 Beauty Ave, Suite 400<br />
              Aesthetics City, AC 54321
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              (123) 456-7890
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Lunai Aesthetics. All rights reserved. Website by Firebase Studio.
        </div>
      </div>
    </footer>
  );
}
