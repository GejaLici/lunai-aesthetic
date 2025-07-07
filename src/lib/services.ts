
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
      { id: 'rhinoplasty', imageBefore: '/images/services/rhinoplasty-before.jpg', imageAfter: '/images/services/rhinoplasty-after.jpg', dataAiHint: 'woman nose', serviceType: 'operation' },
      { id: 'otoplasty', imageBefore: '/images/services/otoplasty-before.jpg', imageAfter: '/images/services/otoplasty-after.jpg', dataAiHint: 'woman ear', serviceType: 'operation' },
      { id: 'blepharoplasty', imageBefore: '/images/services/blepharoplasty-before.jpg', imageAfter: '/images/services/blepharoplasty-after.jpg', dataAiHint: 'woman eyes', serviceType: 'operation' },
      { id: 'facelift', imageBefore: '/images/services/facelift-before.jpg', imageAfter: '/images/services/facelift-after.jpg', dataAiHint: 'woman profile', serviceType: 'operation' },
      { id: 'chin-reshaping', imageBefore: '/images/services/chin-reshaping-before.jpg', imageAfter: '/images/services/chin-reshaping-after.jpg', dataAiHint: 'woman chin', serviceType: 'operation' },
      { id: 'brow-lift', imageBefore: '/images/services/brow-lift-before.jpg', imageAfter: '/images/services/brow-lift-after.jpg', dataAiHint: 'woman forehead', serviceType: 'operation' },
      { id: 'hair-transplant', imageBefore: '/images/services/hair-transplant-before.jpg', imageAfter: '/images/services/hair-transplant-after.jpg', dataAiHint: 'man hair', serviceType: 'operation' },
      { id: 'beard-transplant', imageBefore: '/images/services/beard-transplant-before.jpg', imageAfter: '/images/services/beard-transplant-after.jpg', dataAiHint: 'man beard', serviceType: 'operation' },
      { id: 'eyebrow-transplant', imageBefore: '/images/services/eyebrow-transplant-before.jpg', imageAfter: '/images/services/eyebrow-transplant-after.jpg', dataAiHint: 'woman eyebrow', serviceType: 'operation' },
      { id: 'non-surgical-rhinoplasty', imageBefore: '/images/services/non-surgical-rhinoplasty-before.jpg', imageAfter: '/images/services/non-surgical-rhinoplasty-after.jpg', dataAiHint: 'woman nose', serviceType: 'treatment' },
      { id: 'dark-circles-treatment', imageBefore: '/images/services/dark-circles-treatment-before.jpg', imageAfter: '/images/services/dark-circles-treatment-after.jpg', dataAiHint: 'woman eyes', serviceType: 'treatment' },
      { id: 'eyelids-plasma-arc', imageBefore: '/images/services/eyelids-plasma-arc-before.jpg', imageAfter: '/images/services/eyelids-plasma-arc-after.jpg', dataAiHint: 'eyelid treatment', serviceType: 'treatment' },
      { id: 'jawline-contouring', imageBefore: '/images/services/jawline-contouring-before.jpg', imageAfter: '/images/services/jawline-contouring-after.jpg', dataAiHint: 'woman jawline', serviceType: 'treatment' },
      { id: 'lip-reshaping', imageBefore: '/images/services/lip-reshaping-before.jpg', imageAfter: '/images/services/lip-reshaping-after.jpg', dataAiHint: 'woman lips', serviceType: 'treatment' },
      { id: 'microdermabrasion', imageBefore: '/images/services/microdermabrasion-before.jpg', imageAfter: '/images/services/microdermabrasion-after.jpg', dataAiHint: 'facial treatment', serviceType: 'treatment' },
      { id: 'microneedling', imageBefore: '/images/services/microneedling-before.jpg', imageAfter: '/images/services/microneedling-after.jpg', dataAiHint: 'skin texture', serviceType: 'treatment' },
      { id: 'multivitamin-treatment', imageBefore: '/images/services/multivitamin-treatment-before.jpg', imageAfter: '/images/services/multivitamin-treatment-after.jpg', dataAiHint: 'glowing skin', serviceType: 'treatment' },
      { id: 'prp-for-hair', imageBefore: '/images/services/prp-for-hair-before.jpg', imageAfter: '/images/services/prp-for-hair-after.jpg', dataAiHint: 'hair treatment', serviceType: 'treatment' },
      { id: 'prp-for-face', imageBefore: '/images/services/prp-for-face-before.jpg', imageAfter: '/images/services/prp-for-face-after.jpg', dataAiHint: 'facial plasma', serviceType: 'treatment' },
      { id: 'radiofrequency-treatment', imageBefore: '/images/services/radiofrequency-treatment-before.jpg', imageAfter: '/images/services/radiofrequency-treatment-after.jpg', dataAiHint: 'skin tightening', serviceType: 'treatment' },
      { id: 'sulcus-filling', imageBefore: '/images/services/sulcus-filling-before.jpg', imageAfter: '/images/services/sulcus-filling-after.jpg', dataAiHint: 'wrinkle treatment', serviceType: 'treatment' },
      { id: 'white-peeling', imageBefore: '/images/services/white-peeling-before.jpg', imageAfter: '/images/services/white-peeling-after.jpg', dataAiHint: 'skin peel', serviceType: 'treatment' },
      { id: 'wrinkle-fillers', imageBefore: '/images/services/wrinkle-fillers-before.jpg', imageAfter: '/images/services/wrinkle-fillers-after.jpg', dataAiHint: 'woman face', serviceType: 'treatment' },
      { id: 'xanthelasma-treatment', imageBefore: '/images/services/xanthelasma-treatment-before.jpg', imageAfter: '/images/services/xanthelasma-treatment-after.jpg', dataAiHint: 'eyelid spots', serviceType: 'treatment' },
    ],
  },
  {
    id: 'body',
    icon: Activity,
    services: [
      { id: 'breast-augmentation', imageBefore: '/images/services/breast-augmentation-before.jpg', imageAfter: '/images/services/breast-augmentation-after.jpg', dataAiHint: 'woman torso', serviceType: 'operation' },
      { id: 'breast-lift', imageBefore: '/images/services/breast-lift-before.jpg', imageAfter: '/images/services/breast-lift-after.jpg', dataAiHint: 'woman chest', serviceType: 'operation' },
      { id: 'breast-reduction', imageBefore: '/images/services/breast-reduction-before.jpg', imageAfter: '/images/services/breast-reduction-after.jpg', dataAiHint: 'woman back', serviceType: 'operation' },
      { id: 'breast-reconstruction', imageBefore: '/images/services/breast-reconstruction-before.jpg', imageAfter: '/images/services/breast-reconstruction-after.jpg', dataAiHint: 'woman surgery', serviceType: 'operation' },
      { id: 'arm-lift', imageBefore: '/images/services/arm-lift-before.jpg', imageAfter: '/images/services/arm-lift-after.jpg', dataAiHint: 'woman arm', serviceType: 'operation' },
      { id: 'tummy-tuck', imageBefore: '/images/services/tummy-tuck-before.jpg', imageAfter: '/images/services/tummy-tuck-after.jpg', dataAiHint: 'woman abdomen', serviceType: 'operation' },
      { id: 'liposculpture', imageBefore: '/images/services/liposculpture-before.jpg', imageAfter: '/images/services/liposculpture-after.jpg', dataAiHint: 'woman body', serviceType: 'operation' },
      { id: 'brazilian-butt-lift', imageBefore: '/images/services/brazilian-butt-lift-before.jpg', imageAfter: '/images/services/brazilian-butt-lift-after.jpg', dataAiHint: 'woman buttocks', serviceType: 'operation' },
      { id: 'labiaplasty', imageBefore: '/images/services/labiaplasty-before.jpg', imageAfter: '/images/services/labiaplasty-after.jpg', dataAiHint: 'intimate surgery', serviceType: 'operation' },
      { id: 'thigh-lift', imageBefore: '/images/services/thigh-lift-before.jpg', imageAfter: '/images/services/thigh-lift-after.jpg', dataAiHint: 'woman legs', serviceType: 'operation' },
      { id: 'gynecomastia', imageBefore: '/images/services/gynecomastia-before.jpg', imageAfter: '/images/services/gynecomastia-after.jpg', dataAiHint: 'man chest', serviceType: 'operation' },
      { id: 'carboxytherapy', imageBefore: '/images/services/carboxytherapy-before.jpg', imageAfter: '/images/services/carboxytherapy-after.jpg', dataAiHint: 'skin therapy', serviceType: 'treatment' },
      { id: 'cellulite-treatment', imageBefore: '/images/services/cellulite-treatment-before.jpg', imageAfter: '/images/services/cellulite-treatment-after.jpg', dataAiHint: 'woman thigh', serviceType: 'treatment' },
      { id: 'laser-hair-removal', imageBefore: '/images/services/laser-hair-removal-before.jpg', imageAfter: '/images/services/laser-hair-removal-after.jpg', dataAiHint: 'smooth skin', serviceType: 'treatment' },
      { id: 'lipolysis', imageBefore: '/images/services/lipolysis-before.jpg', imageAfter: '/images/services/lipolysis-after.jpg', dataAiHint: 'body contouring', serviceType: 'treatment' },
      { id: 'plasma-arc-skin', imageBefore: '/images/services/plasma-arc-skin-before.jpg', imageAfter: '/images/services/plasma-arc-skin-after.jpg', dataAiHint: 'skin rejuvenation', serviceType: 'treatment' },
      { id: 'sclerotherapy', imageBefore: '/images/services/sclerotherapy-before.jpg', imageAfter: '/images/services/sclerotherapy-after.jpg', dataAiHint: 'leg veins', serviceType: 'treatment' },
    ],
  },
  {
    id: 'dentistry',
    icon: Smile,
    services: [
      { id: 'composite-veneers', imageBefore: '/images/services/composite-veneers-before.jpg', imageAfter: '/images/services/composite-veneers-after.jpg', dataAiHint: 'smile teeth', serviceType: 'treatment', dentalCategory: 'aesthetics' },
      { id: 'emax-veneers', imageBefore: '/images/services/emax-veneers-before.jpg', imageAfter: '/images/services/emax-veneers-after.jpg', dataAiHint: 'perfect smile', serviceType: 'treatment', dentalCategory: 'aesthetics' },
      { id: 'teeth-whitening', imageBefore: '/images/services/teeth-whitening-before.jpg', imageAfter: '/images/services/teeth-whitening-after.jpg', dataAiHint: 'white teeth', serviceType: 'treatment', dentalCategory: 'aesthetics' },
      { id: 'crowns', imageBefore: '/images/services/crowns-before.jpg', imageAfter: '/images/services/crowns-after.jpg', dataAiHint: 'dental crown', serviceType: 'treatment', dentalCategory: 'prosthetics' },
      { id: 'dental-bridges', imageBefore: '/images/services/dental-bridges-before.jpg', imageAfter: '/images/services/dental-bridges-after.jpg', dataAiHint: 'dental bridge', serviceType: 'treatment', dentalCategory: 'prosthetics' },
      { id: 'dentures', imageBefore: '/images/services/dentures-before.jpg', imageAfter: '/images/services/dentures-after.jpg', dataAiHint: 'denture smile', serviceType: 'treatment', dentalCategory: 'prosthetics' },
      { id: 'fixed-braces', imageBefore: '/images/services/fixed-braces-before.jpg', imageAfter: '/images/services/fixed-braces-after.jpg', dataAiHint: 'teeth braces', serviceType: 'treatment', dentalCategory: 'orthodontics' },
      { id: 'invisalign', imageBefore: '/images/services/invisalign-before.jpg', imageAfter: '/images/services/invisalign-after.jpg', dataAiHint: 'clear aligner', serviceType: 'treatment', dentalCategory: 'orthodontics' },
      { id: 'removable-appliances', imageBefore: '/images/services/removable-appliances-before.jpg', imageAfter: '/images/services/removable-appliances-after.jpg', dataAiHint: 'dental retainer', serviceType: 'treatment', dentalCategory: 'orthodontics' },
      { id: 'infected-teeth-treatment', imageBefore: '/images/services/infected-teeth-treatment-before.jpg', imageAfter: '/images/services/infected-teeth-treatment-after.jpg', dataAiHint: 'dental xray', serviceType: 'treatment', dentalCategory: 'therapy' },
      { id: 'tartar-cleaning', imageBefore: '/images/services/tartar-cleaning-before.jpg', imageAfter: '/images/services/tartar-cleaning-after.jpg', dataAiHint: 'dental cleaning', serviceType: 'treatment', dentalCategory: 'therapy' },
      { id: 'tooth-fillings', imageBefore: '/images/services/tooth-fillings-before.jpg', imageAfter: '/images/services/tooth-fillings-after.jpg', dataAiHint: 'tooth filling', serviceType: 'treatment', dentalCategory: 'therapy' },
      { id: 'apical-resection', imageBefore: '/images/services/apical-resection-before.jpg', imageAfter: '/images/services/apical-resection-after.jpg', dataAiHint: 'dental surgery', serviceType: 'operation', dentalCategory: 'surgery' },
      { id: 'dental-implants', imageBefore: '/images/services/dental-implants-before.jpg', imageAfter: '/images/services/dental-implants-after.jpg', dataAiHint: 'dental implant', serviceType: 'operation', dentalCategory: 'surgery' },
      { id: 'tooth-extraction', imageBefore: '/images/services/tooth-extraction-before.jpg', imageAfter: '/images/services/tooth-extraction-after.jpg', dataAiHint: 'tooth extraction', serviceType: 'operation', dentalCategory: 'surgery' },
      { id: 'milk-teeth-treatment', imageBefore: '/images/services/milk-teeth-treatment-before.jpg', imageAfter: '/images/services/milk-teeth-treatment-after.jpg', dataAiHint: 'child smile', serviceType: 'treatment', dentalCategory: 'pedodontics' },
      { id: 'tooth-fluoridation', imageBefore: '/images/services/tooth-fluoridation-before.jpg', imageAfter: '/images/services/tooth-fluoridation-after.jpg', dataAiHint: 'child dentist', serviceType: 'treatment', dentalCategory: 'pedodontics' },
      { id: 'tooth-sealants', imageBefore: '/images/services/tooth-sealants-before.jpg', imageAfter: '/images/services/tooth-sealants-after.jpg', dataAiHint: 'healthy teeth', serviceType: 'treatment', dentalCategory: 'pedodontics' },
    ],
  },
];

export const allServices: ServiceItem[] = serviceData.reduce((acc, category) => {
  return acc.concat(category.services);
}, [] as ServiceItem[]);
