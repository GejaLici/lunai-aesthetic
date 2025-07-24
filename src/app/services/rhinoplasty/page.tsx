
import { ServicePageLayout } from '../service-page-layout';
import { allServices } from '@/lib/services';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

const serviceId = 'rhinoplasty';
const service = allServices.find((s) => s.id === serviceId);

if (!service) {
  notFound();
}

// Helper to read and parse the service JSON file
const getServiceContent = (locale: string) => {
  const filePath = path.join(process.cwd(), 'messages', 'services', `${serviceId}.json`);
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const messages = JSON.parse(fileContent);
    return messages[locale] || messages['en']; // Fallback to English
  } catch (error) {
    console.error(`Error reading service file for ${serviceId}:`, error);
    const enFilePath = path.join(process.cwd(), 'messages', 'services', `${serviceId}.json`);
    const fileContent = fs.readFileSync(enFilePath, 'utf-8');
    const messages = JSON.parse(fileContent);
    return messages['en'];
  }
};

const enContent = getServiceContent('en');

export const metadata: Metadata = {
  title: `${enContent.name}: Comprehensive Rejuvenation & Anti-Aging Surgery`,
  description: `Discover everything about ${enContent.name} surgery, a premier anti-aging procedure designed to reduce sagging skin, deep wrinkles, and jowls for a dramatically more youthful and refreshed facial appearance. Learn about types, benefits, recovery, and choosing an expert cosmetic surgeon.`,
  keywords: `${enContent.name}, rhytidectomy, facial rejuvenation, anti-aging surgery, sagging skin, deep wrinkles, jowls, neck lift, cosmetic surgeon, plastic surgery, youthful appearance, facial harmony`,
  robots: 'index, follow',
  openGraph: {
    title: `${enContent.name}: Comprehensive Facial Rejuvenation & Anti-Aging Surgery`,
    description: `Unlock the secrets to a younger-looking you with ${enContent.name} surgery. Our comprehensive guide covers how this transformative procedure can tighten skin, lift sagging tissues, and restore youthful facial contours for lasting results.`,
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['it_IT', 'de_DE', 'es_ES', 'fr_FR', 'sq_AL'],
  },
};

export default function ServicePage() {
  const content = getServiceContent('en'); 

  return (
    <ServicePageLayout serviceName={content.name}>
      <section>
        <h2>About {content.name}</h2>
        {Array.isArray(content.description) ? 
            content.description.map((p: string, i: number) => <p key={i}>{p}</p>) : 
            <p>{content.description}</p>
        }
      </section>
    </ServicePageLayout>
  );
}
