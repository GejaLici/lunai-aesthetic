
import type { LucideIcon } from 'lucide-react';
import { Stethoscope, Activity, Smile } from 'lucide-react';

export type ServiceItem = {
  id: string;
  name: string;
  description: string;
  imageBefore: string;
  imageAfter: string;
  dataAiHint: string;
  serviceType?: 'operation' | 'treatment';
  dentalSubCategoryTitle?: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  icon?: LucideIcon;
  services: ServiceItem[];
};

export const serviceData: ServiceCategory[] = [
  {
    id: 'face',
    title: 'Facial Aesthetics',
    icon: Stethoscope,
    services: [
      { id: 'botox', name: 'Botox Injections', description: 'Smooth fine lines and wrinkles for a refreshed, youthful appearance. Our expert application ensures natural-looking results.', imageBefore: 'https://placehold.co/400x400.png', imageAfter: 'https://placehold.co/400x400.png', dataAiHint: 'woman face', serviceType: 'treatment' },
      { id: 'dermal-fillers', name: 'Dermal Fillers', description: 'Restore volume and contour to your face. Ideal for lips, cheeks, and reducing deep-set wrinkles.', imageBefore: 'https://placehold.co/400x400.png', imageAfter: 'https://placehold.co/400x400.png', dataAiHint: 'woman profile', serviceType: 'treatment' },
      { id: 'rhinoplasty', name: 'Rhinoplasty', description: 'Surgical reshaping of the nose to improve facial harmony and correct breathing issues.', imageBefore: 'https://placehold.co/400x400.png', imageAfter: 'https://placehold.co/400x400.png', dataAiHint: 'woman nose', serviceType: 'operation' },
    ],
  },
  {
    id: 'body',
    title: 'Body Contouring',
    icon: Activity,
    services: [
      { id: 'liposuction', name: 'Liposuction', description: 'Permanently remove stubborn fat deposits from areas like the abdomen, thighs, and arms for a more sculpted physique.', imageBefore: 'https://placehold.co/400x400.png', imageAfter: 'https://placehold.co/400x400.png', dataAiHint: 'woman abdomen', serviceType: 'operation' },
      { id: 'coolsculpting', name: 'CoolSculpting', description: 'A non-invasive treatment that freezes and eliminates fat cells without surgery, perfect for targeted fat reduction.', imageBefore: 'https://placehold.co/400x400.png', imageAfter: 'https://placehold.co/400x400.png', dataAiHint: 'woman thigh', serviceType: 'treatment' },
    ],
  },
  {
    id: 'dentistry',
    title: 'Aesthetic Dentistry',
    icon: Smile,
    services: [
      { id: 'teeth-whitening', name: 'Teeth Whitening', description: 'Brighten your smile with our professional in-office or take-home teeth whitening solutions.', imageBefore: 'https://placehold.co/400x400.png', imageAfter: 'https://placehold.co/400x400.png', dataAiHint: 'smile teeth', serviceType: 'treatment', dentalSubCategoryTitle: 'AESTHETIC DENTISTRY' },
      { id: 'veneers', name: 'Porcelain Veneers', description: 'Custom-made thin shells of porcelain to cover the front surface of teeth, correcting chips, stains, or gaps.', imageBefore: 'https://placehold.co/400x400.png', imageAfter: 'https://placehold.co/400x400.png', dataAiHint: 'perfect smile', serviceType: 'treatment', dentalSubCategoryTitle: 'AESTHETIC DENTISTRY' },
      { id: 'dental-implants', name: 'Dental Implants', description: 'A permanent solution for missing teeth, providing a strong foundation for replacement teeth that look, feel, and function like natural teeth.', imageBefore: 'https://placehold.co/400x400.png', imageAfter: 'https://placehold.co/400x400.png', dataAiHint: 'dental xray', serviceType: 'operation', dentalSubCategoryTitle: 'ORAL SURGERY' },
    ],
  },
];

export const allServices: ServiceItem[] = serviceData.reduce((acc, category) => {
  return acc.concat(category.services);
}, [] as ServiceItem[]);
