'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Stethoscope } from 'lucide-react';

export function SiteFooter() {
  const navLinks = [
      { href: "/services", label: "Services" },
      { href: "/gallery", label: "Gallery" },
      { href: "/consultation", label: "Virtual Consultation" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-border/40 bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="LUNAI Home">
               <Stethoscope className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-bold">LUNAI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Crafting beauty, inspired by science.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map(link => (
                <li key={link.href}><Link href={link.href} className="hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter size={24} />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin size={24} />
              </Link>
              <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-accent transition-colors">
                <Github size={24} />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              LUNAI<br />
              123 Beauty Avenue, Suite 400<br />
              Aesthetics City, AC 54321
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} LUNAI. All rights reserved. Website by Firebase Studio.
        </div>
      </div>
    </footer>
  );
}
