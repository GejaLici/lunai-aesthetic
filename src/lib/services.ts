
import type { LucideIcon } from 'lucide-react';
import { Stethoscope, Activity, Smile } from 'lucide-react';

export type ServiceItem = {
  id: string;
  imageBefore: string;
  imageAfter: string;
  dataAiHint: string;
  serviceType?: 'operation' | 'treatment';
  dentalCategory?: 'aesthetics' | 'prosthetics' | 'orthodontics' | 'therapy' | 'surgery' | 'pedodontics';
};

export type ServiceCategory = {
  id: string;
  icon?: LucideIcon;
  services: ServiceItem[];
};

export const serviceData: ServiceCategory[] = [
  {
    id: 'face',
    icon: Stethoscope,
    services: [
      { id: 'rhinoplasty', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman nose', serviceType: 'operation' },
      { id: 'otoplasty', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman ear', serviceType: 'operation' },
      { id: 'blepharoplasty', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman eyes', serviceType: 'operation' },
      { id: 'facelift', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman profile', serviceType: 'operation' },
      { id: 'chin-reshaping', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman chin', serviceType: 'operation' },
      { id: 'brow-lift', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman forehead', serviceType: 'operation' },
      { id: 'hair-transplant', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'man hair', serviceType: 'operation' },
      { id: 'beard-transplant', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'man beard', serviceType: 'operation' },
      { id: 'eyebrow-transplant', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman eyebrow', serviceType: 'operation' },
      { id: 'non-surgical-rhinoplasty', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman nose', serviceType: 'treatment' },
      { id: 'dark-circles-treatment', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman eyes', serviceType: 'treatment' },
      { id: 'eyelids-plasma-arc', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'eyelid treatment', serviceType: 'treatment' },
      { id: 'jawline-contouring', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman jawline', serviceType: 'treatment' },
      { id: 'lip-reshaping', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman lips', serviceType: 'treatment' },
      { id: 'microdermabrasion', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'facial treatment', serviceType: 'treatment' },
      { id: 'microneedling', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'skin texture', serviceType: 'treatment' },
      { id: 'multivitamin-treatment', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'glowing skin', serviceType: 'treatment' },
      { id: 'prp-for-hair', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'hair treatment', serviceType: 'treatment' },
      { id: 'prp-for-face', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'facial plasma', serviceType: 'treatment' },
      { id: 'radiofrequency-treatment', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'skin tightening', serviceType: 'treatment' },
      { id: 'sulcus-filling', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'wrinkle treatment', serviceType: 'treatment' },
      { id: 'white-peeling', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'skin peel', serviceType: 'treatment' },
      { id: 'wrinkle-fillers', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman face', serviceType: 'treatment' },
      { id: 'xanthelasma-treatment', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'eyelid spots', serviceType: 'treatment' },
    ],
  },
  {
    id: 'body',
    icon: Activity,
    services: [
      { id: 'breast-augmentation', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman torso', serviceType: 'operation' },
      { id: 'breast-lift', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman chest', serviceType: 'operation' },
      { id: 'breast-reduction', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman back', serviceType: 'operation' },
      { id: 'breast-reconstruction', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman surgery', serviceType: 'operation' },
      { id: 'arm-lift', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman arm', serviceType: 'operation' },
      { id: 'tummy-tuck', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman abdomen', serviceType: 'operation' },
      { id: 'liposculpture', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman body', serviceType: 'operation' },
      { id: 'brazilian-butt-lift', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman buttocks', serviceType: 'operation' },
      { id: 'labiaplasty', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'intimate surgery', serviceType: 'operation' },
      { id: 'thigh-lift', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman legs', serviceType: 'operation' },
      { id: 'gynecomastia', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'man chest', serviceType: 'operation' },
      { id: 'carboxytherapy', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'skin therapy', serviceType: 'treatment' },
      { id: 'cellulite-treatment', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'woman thigh', serviceType: 'treatment' },
      { id: 'laser-hair-removal', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'smooth skin', serviceType: 'treatment' },
      { id: 'lipolysis', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'body contouring', serviceType: 'treatment' },
      { id: 'plasma-arc-skin', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'skin rejuvenation', serviceType: 'treatment' },
      { id: 'sclerotherapy', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'leg veins', serviceType: 'treatment' },
    ],
  },
  {
    id: 'dentistry',
    icon: Smile,
    services: [
      { id: 'composite-veneers', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'smile teeth', serviceType: 'treatment', dentalCategory: 'aesthetics' },
      { id: 'emax-veneers', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'perfect smile', serviceType: 'treatment', dentalCategory: 'aesthetics' },
      { id: 'teeth-whitening', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'white teeth', serviceType: 'treatment', dentalCategory: 'aesthetics' },
      { id: 'crowns', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'dental crown', serviceType: 'treatment', dentalCategory: 'prosthetics' },
      { id: 'dental-bridges', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'dental bridge', serviceType: 'treatment', dentalCategory: 'prosthetics' },
      { id: 'dentures', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'denture smile', serviceType: 'treatment', dentalCategory: 'prosthetics' },
      { id: 'fixed-braces', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'teeth braces', serviceType: 'treatment', dentalCategory: 'orthodontics' },
      { id: 'invisalign', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'clear aligner', serviceType: 'treatment', dentalCategory: 'orthodontics' },
      { id: 'removable-appliances', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'dental retainer', serviceType: 'treatment', dentalCategory: 'orthodontics' },
      { id: 'infected-teeth-treatment', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'dental xray', serviceType: 'treatment', dentalCategory: 'therapy' },
      { id: 'tartar-cleaning', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'dental cleaning', serviceType: 'treatment', dentalCategory: 'therapy' },
      { id: 'tooth-fillings', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'tooth filling', serviceType: 'treatment', dentalCategory: 'therapy' },
      { id: 'apical-resection', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'dental surgery', serviceType: 'operation', dentalCategory: 'surgery' },
      { id: 'dental-implants', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'dental implant', serviceType: 'operation', dentalCategory: 'surgery' },
      { id: 'tooth-extraction', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'tooth extraction', serviceType: 'operation', dentalCategory: 'surgery' },
      { id: 'milk-teeth-treatment', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'child smile', serviceType: 'treatment', dentalCategory: 'pedodontics' },
      { id: 'tooth-fluoridation', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'child dentist', serviceType: 'treatment', dentalCategory: 'pedodontics' },
      { id: 'tooth-sealants', imageBefore: 'https://placehold.co/600x400.png', imageAfter: 'https://placehold.co/600x400.png', dataAiHint: 'healthy teeth', serviceType: 'treatment', dentalCategory: 'pedodontics' },
    ],
  },
];

export const allServices: ServiceItem[] = serviceData.reduce((acc, category) => {
  return acc.concat(category.services);
}, [] as ServiceItem[]);
