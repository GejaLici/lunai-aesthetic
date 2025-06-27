import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en', 'es', 'it'] as const;
export const localePrefix = 'always'; // Default

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // All pages have the same pathnames in all languages
  '/': '/',
  '/blog': '/blog',
  '/consultation': '/consultation',
  '/contact': '/contact',
  '/gallery': '/gallery',
  '/services': '/services',
  '/services/[serviceId]': '/services/[serviceId]',
};

export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});