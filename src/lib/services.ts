
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
      { id: 'rhinoplasty', imageBefore: '/images/rhinoplasty-before.png', imageAfter: '/images/rhinoplasty-after.png', dataAiHint: 'woman nose', serviceType: 'operation' },
      { id: 'otoplasty', imageBefore: '/images/otoplasty-before.png', imageAfter: '/images/otoplasty-after.png', dataAiHint: 'woman ear', serviceType: 'operation' },
      { id: 'blepharoplasty', imageBefore: '/images/blepharoplasty-before.png', imageAfter: '/images/blepharoplasty-after.png', dataAiHint: 'woman eyes', serviceType: 'operation' },
      { id: 'facelift', imageBefore: '/images/facelift-before.png', imageAfter: '/images/facelift-after.png', dataAiHint: 'woman profile', serviceType: 'operation' },
      { id: 'chin-reshaping', imageBefore: '/images/chin-reshaping-before.png', imageAfter: '/images/chin-reshaping-after.png', dataAiHint: 'woman chin', serviceType: 'operation' },
      { id: 'brow-lift', imageBefore: '/images/brow-lift-before.png', imageAfter: '/images/brow-lift-after.png', dataAiHint: 'woman forehead', serviceType: 'operation' },
      { id: 'hair-transplant', imageBefore: '/images/hair-transplant-before.png', imageAfter: '/images/hair-transplant-after.png', dataAiHint: 'man hair', serviceType: 'operation' },
      { id: 'beard-transplant', imageBefore: '/images/beard-transplant-before.png', imageAfter: '/images/beard-transplant-after.png', dataAiHint: 'man beard', serviceType: 'operation' },
      { id: 'eyebrow-transplant', imageBefore: '/images/eyebrow-transplant-before.png', imageAfter: '/images/eyebrow-transplant-after.png', dataAiHint: 'woman eyebrow', serviceType: 'operation' },
      { id: 'non-surgical-rhinoplasty', imageBefore: '/images/non-surgical-rhinoplasty-before.png', imageAfter: '/images/non-surgical-rhinoplasty-after.png', dataAiHint: 'woman nose', serviceType: 'treatment' },
      { id: 'dark-circles-treatment', imageBefore: '/images/dark-circles-treatment-before.png', imageAfter: '/images/dark-circles-treatment-after.png', dataAiHint: 'woman eyes', serviceType: 'treatment' },
      { id: 'eyelids-plasma-arc', imageBefore: '/images/eyelids-plasma-arc-before.png', imageAfter: '/images/eyelids-plasma-arc-after.png', dataAiHint: 'eyelid treatment', serviceType: 'treatment' },
      { id: 'jawline-contouring', imageBefore: '/images/jawline-contouring-before.png', imageAfter: '/images/jawline-contouring-after.png', dataAiHint: 'woman jawline', serviceType: 'treatment' },
      { id: 'lip-reshaping', imageBefore: '/images/lip-reshaping-before.png', imageAfter: '/images/lip-reshaping-after.png', dataAiHint: 'woman lips', serviceType: 'treatment' },
      { id: 'microdermabrasion', imageBefore: '/images/microdermabrasion-before.png', imageAfter: '/images/microdermabrasion-after.png', dataAiHint: 'facial treatment', serviceType: 'treatment' },
      { id: 'microneedling', imageBefore: '/images/microneedling-before.png', imageAfter: '/images/microneedling-after.png', dataAiHint: 'skin texture', serviceType: 'treatment' },
      { id: 'multivitamin-treatment', imageBefore: '/images/multivitamin-treatment-before.png', imageAfter: '/images/multivitamin-treatment-after.png', dataAiHint: 'glowing skin', serviceType: 'treatment' },
      { id: 'prp-for-hair', imageBefore: '/images/prp-for-hair-before.png', imageAfter: '/images/prp-for-hair-after.png', dataAiHint: 'hair treatment', serviceType: 'treatment' },
      { id: 'prp-for-face', imageBefore: '/images/prp-for-face-before.png', imageAfter: '/images/prp-for-face-after.png', dataAiHint: 'facial plasma', serviceType: 'treatment' },
      { id: 'radiofrequency-treatment', imageBefore: '/images/radiofrequency-treatment-before.png', imageAfter: '/images/radiofrequency-treatment-after.png', dataAiHint: 'skin tightening', serviceType: 'treatment' },
      { id: 'sulcus-filling', imageBefore: '/images/sulcus-filling-before.png', imageAfter: '/images/sulcus-filling-after.png', dataAiHint: 'wrinkle treatment', serviceType: 'treatment' },
      { id: 'white-peeling', imageBefore: '/images/white-peeling-before.png', imageAfter: '/images/white-peeling-after.png', dataAiHint: 'skin peel', serviceType: 'treatment' },
      { id: 'wrinkle-fillers', imageBefore: '/images/wrinkle-fillers-before.png', imageAfter: '/images/wrinkle-fillers-after.png', dataAiHint: 'woman face', serviceType: 'treatment' },
      { id: 'xanthelasma-treatment', imageBefore: '/images/xanthelasma-treatment-before.png', imageAfter: '/images/xanthelasma-treatment-after.png', dataAiHint: 'eyelid spots', serviceType: 'treatment' },
    ],
  },
  {
    id: 'body',
    icon: Activity,
    services: [
      { id: 'breast-augmentation', imageBefore: '/images/breast-augmentation-before.png', imageAfter: '/images/breast-augmentation-after.png', dataAiHint: 'woman torso', serviceType: 'operation' },
      { id: 'breast-lift', imageBefore: '/images/breast-lift-before.png', imageAfter: '/images/breast-lift-after.png', dataAiHint: 'woman chest', serviceType: 'operation' },
      { id: 'breast-reduction', imageBefore: '/images/breast-reduction-before.png', imageAfter: '/images/breast-reduction-after.png', dataAiHint: 'woman back', serviceType: 'operation' },
      { id: 'breast-reconstruction', imageBefore: '/images/breast-reconstruction-before.png', imageAfter: '/images/breast-reconstruction-after.png', dataAiHint: 'woman surgery', serviceType: 'operation' },
      { id: 'arm-lift', imageBefore: '/images/arm-lift-before.png', imageAfter: '/images/arm-lift-after.png', dataAiHint: 'woman arm', serviceType: 'operation' },
      { id: 'tummy-tuck', imageBefore: '/images/tummy-tuck-before.png', imageAfter: '/images/tummy-tuck-after.png', dataAiHint: 'woman abdomen', serviceType: 'operation' },
      { id: 'liposculpture', imageBefore: '/images/liposculpture-before.png', imageAfter: '/images/liposculpture-after.png', dataAiHint: 'woman body', serviceType: 'operation' },
      { id: 'brazilian-butt-lift', imageBefore: '/images/brazilian-butt-lift-before.png', imageAfter: '/images/brazilian-butt-lift-after.png', dataAiHint: 'woman buttocks', serviceType: 'operation' },
      { id: 'labiaplasty', imageBefore: '/images/labiaplasty-before.png', imageAfter: '/images/labiaplasty-after.png', dataAiHint: 'intimate surgery', serviceType: 'operation' },
      { id: 'thigh-lift', imageBefore: '/images/thigh-lift-before.png', imageAfter: '/images/thigh-lift-after.png', dataAiHint: 'woman legs', serviceType: 'operation' },
      { id: 'gynecomastia', imageBefore: '/images/gynecomastia-before.png', imageAfter: '/images/gynecomastia-after.png', dataAiHint: 'man chest', serviceType: 'operation' },
      { id: 'carboxytherapy', imageBefore: '/images/carboxytherapy-before.png', imageAfter: '/images/carboxytherapy-after.png', dataAiHint: 'skin therapy', serviceType: 'treatment' },
      { id: 'cellulite-treatment', imageBefore: '/images/cellulite-treatment-before.png', imageAfter: '/images/cellulite-treatment-after.png', dataAiHint: 'woman thigh', serviceType: 'treatment' },
      { id: 'laser-hair-removal', imageBefore: '/images/laser-hair-removal-before.png', imageAfter: '/images/laser-hair-removal-after.png', dataAiHint: 'smooth skin', serviceType: 'treatment' },
      { id: 'lipolysis', imageBefore: '/images/lipolysis-before.png', imageAfter: '/images/lipolysis-after.png', dataAiHint: 'body contouring', serviceType: 'treatment' },
      { id: 'plasma-arc-skin', imageBefore: '/images/plasma-arc-skin-before.png', imageAfter: '/images/plasma-arc-skin-after.png', dataAiHint: 'skin rejuvenation', serviceType: 'treatment' },
      { id: 'sclerotherapy', imageBefore: '/images/sclerotherapy-before.png', imageAfter: '/images/sclerotherapy-after.png', dataAiHint: 'leg veins', serviceType: 'treatment' },
    ],
  },
  {
    id: 'dentistry',
    icon: Smile,
    services: [
      { id: 'composite-veneers', imageBefore: '/images/composite-veneers-before.png', imageAfter: '/images/composite-veneers-after.png', dataAiHint: 'smile teeth', serviceType: 'treatment', dentalCategory: 'aesthetics' },
      { id: 'emax-veneers', imageBefore: '/images/emax-veneers-before.png', imageAfter: '/images/emax-veneers-after.png', dataAiHint: 'perfect smile', serviceType: 'treatment', dentalCategory: 'aesthetics' },
      { id: 'teeth-whitening', imageBefore: '/images/teeth-whitening-before.png', imageAfter: '/images/teeth-whitening-after.png', dataAiHint: 'white teeth', serviceType: 'treatment', dentalCategory: 'aesthetics' },
      { id: 'crowns', imageBefore: '/images/crowns-before.png', imageAfter: '/images/crowns-after.png', dataAiHint: 'dental crown', serviceType: 'treatment', dentalCategory: 'prosthetics' },
      { id: 'dental-bridges', imageBefore: '/images/dental-bridges-before.png', imageAfter: '/images/dental-bridges-after.png', dataAiHint: 'dental bridge', serviceType: 'treatment', dentalCategory: 'prosthetics' },
      { id: 'dentures', imageBefore: '/images/dentures-before.png', imageAfter: '/images/dentures-after.png', dataAiHint: 'denture smile', serviceType: 'treatment', dentalCategory: 'prosthetics' },
      { id: 'fixed-braces', imageBefore: '/images/fixed-braces-before.png', imageAfter: '/images/fixed-braces-after.png', dataAiHint: 'teeth braces', serviceType: 'treatment', dentalCategory: 'orthodontics' },
      { id: 'invisalign', imageBefore: '/images/invisalign-before.png', imageAfter: '/images/invisalign-after.png', dataAiHint: 'clear aligner', serviceType: 'treatment', dentalCategory: 'orthodontics' },
      { id: 'removable-appliances', imageBefore: '/images/removable-appliances-before.png', imageAfter: '/images/removable-appliances-after.png', dataAiHint: 'dental retainer', serviceType: 'treatment', dentalCategory: 'orthodontics' },
      { id: 'infected-teeth-treatment', imageBefore: '/images/infected-teeth-treatment-before.png', imageAfter: '/images/infected-teeth-treatment-after.png', dataAiHint: 'dental xray', serviceType: 'treatment', dentalCategory: 'therapy' },
      { id: 'tartar-cleaning', imageBefore: '/images/tartar-cleaning-before.png', imageAfter: '/images/tartar-cleaning-after.png', dataAiHint: 'dental cleaning', serviceType: 'treatment', dentalCategory: 'therapy' },
      { id: 'tooth-fillings', imageBefore: '/images/tooth-fillings-before.png', imageAfter: '/images/tooth-fillings-after.png', dataAiHint: 'tooth filling', serviceType: 'treatment', dentalCategory: 'therapy' },
      { id: 'apical-resection', imageBefore: '/images/apical-resection-before.png', imageAfter: '/images/apical-resection-after.png', dataAiHint: 'dental surgery', serviceType: 'operation', dentalCategory: 'surgery' },
      { id: 'dental-implants', imageBefore: '/images/dental-implants-before.png', imageAfter: '/images/dental-implants-after.png', dataAiHint: 'dental implant', serviceType: 'operation', dentalCategory: 'surgery' },
      { id: 'tooth-extraction', imageBefore: '/images/tooth-extraction-before.png', imageAfter: '/images/tooth-extraction-after.png', dataAiHint: 'tooth extraction', serviceType: 'operation', dentalCategory: 'surgery' },
      { id: 'milk-teeth-treatment', imageBefore: '/images/milk-teeth-treatment-before.png', imageAfter: '/images/milk-teeth-treatment-after.png', dataAiHint: 'child smile', serviceType: 'treatment', dentalCategory: 'pedodontics' },
      { id: 'tooth-fluoridation', imageBefore: '/images/tooth-fluoridation-before.png', imageAfter: '/images/tooth-fluoridation-after.png', dataAiHint: 'child dentist', serviceType: 'treatment', dentalCategory: 'pedodontics' },
      { id: 'tooth-sealants', imageBefore: '/images/tooth-sealants-before.png', imageAfter: '/images/tooth-sealants-after.png', dataAiHint: 'healthy teeth', serviceType: 'treatment', dentalCategory: 'pedodontics' },
    ],
  },
];

export const allServices: ServiceItem[] = serviceData.reduce((acc, category) => {
  return acc.concat(category.services);
}, [] as ServiceItem[]);
