
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
      { id: 'rhinoplasty', imageBefore: '/images/rhinoplasty.png', imageAfter: '/images/rhinoplasty2.png', dataAiHint: 'woman nose', serviceType: 'operation' },
      { id: 'otoplasty', imageBefore: '/images/otoplasty.png', imageAfter: '/images/otoplasty2.png', dataAiHint: 'woman ear', serviceType: 'operation' },
      { id: 'blepharoplasty', imageBefore: '/images/blepharoplasty.png', imageAfter: '/images/blepharoplasty2.png', dataAiHint: 'woman eyes', serviceType: 'operation' },
      { id: 'facelift', imageBefore: '/images/face-lift.png', imageAfter: '/images/face-lift2.png', dataAiHint: 'woman profile', serviceType: 'operation' },
      { id: 'chin-reshaping', imageBefore: '/images/chin-reshaping.png', imageAfter: '/images/chin-reshaping2.png', dataAiHint: 'woman chin', serviceType: 'operation' },
      { id: 'brow-lift', imageBefore: '/images/brow-lift.png', imageAfter: '/images/brow-lift2.png', dataAiHint: 'woman forehead', serviceType: 'operation' },
      { id: 'hair-transplant', imageBefore: '/images/hair-transplant.png', imageAfter: '/images/hair-transplant2.png', dataAiHint: 'man hair', serviceType: 'operation' },
      { id: 'beard-transplant', imageBefore: '/images/beard-transplant.png', imageAfter: '/images/beard-transplant2.png', dataAiHint: 'man beard', serviceType: 'operation' },
      { id: 'eyebrow-transplant', imageBefore: '/images/eyebrow-transplant.png', imageAfter: '/images/eyebrow-transplant2.png', dataAiHint: 'woman eyebrow', serviceType: 'operation' },
      { id: 'non-surgical-rhinoplasty', imageBefore: '/images/nose-reshaping.png', imageAfter: '/images/nose-reshaping2.png', dataAiHint: 'woman nose', serviceType: 'treatment' },
      { id: 'dark-circles-treatment', imageBefore: '/images/dark-circles-eyes.png', imageAfter: '/images/dark-circles-eyes2.png', dataAiHint: 'woman eyes', serviceType: 'treatment' },
      { id: 'eyelids-plasma-arc', imageBefore: '/images/eyelids-plasma-arc.png', imageAfter: '/images/eyelids-plasma-arc2.png', dataAiHint: 'eyelid treatment', serviceType: 'treatment' },
      { id: 'jawline-contouring', imageBefore: '/images/jawline-contouring.png', imageAfter: '/images/jawline-contouring2.png', dataAiHint: 'woman jawline', serviceType: 'treatment' },
      { id: 'lip-reshaping', imageBefore: '/images/lip-reshaping.png', imageAfter: '/images/lip-reshaping2.png', dataAiHint: 'woman lips', serviceType: 'treatment' },
      { id: 'microdermabrasion', imageBefore: '/images/microdermabrasion.png', imageAfter: '/images/microdermabrasion2.png', dataAiHint: 'facial treatment', serviceType: 'treatment' },
      { id: 'microneedling', imageBefore: '/images/microneedling1.png', imageAfter: '/images/microneedling2.png', dataAiHint: 'skin texture', serviceType: 'treatment' },
      { id: 'multivitamin-treatment', imageBefore: '/images/multivitamin-treatment.png', imageAfter: '/images/multivitamin-treatment2.png', dataAiHint: 'glowing skin', serviceType: 'treatment' },
      { id: 'prp-for-hair', imageBefore: '/images/prp-hair.png', imageAfter: '/images/prp-hair2.png', dataAiHint: 'hair treatment', serviceType: 'treatment' },
      { id: 'prp-for-face', imageBefore: '/images/prp-face.png', imageAfter: '/images/prp-face2.png', dataAiHint: 'facial plasma', serviceType: 'treatment' },
      { id: 'radiofrequency-treatment', imageBefore: '/images/radiofrequency1.png', imageAfter: '/images/radiofrequency2.png', dataAiHint: 'skin tightening', serviceType: 'treatment' },
      { id: 'sulcus-filling', imageBefore: '/images/sulcus-filling.png', imageAfter: '/images/sulcus-filling2.png', dataAiHint: 'wrinkle treatment', serviceType: 'treatment' },
      { id: 'white-peeling', imageBefore: '/images/white-peeling.png', imageAfter: '/images/white-peeling2.png', dataAiHint: 'skin peel', serviceType: 'treatment' },
      { id: 'wrinkle-fillers', imageBefore: '/images/wrinkle-fillers1.png', imageAfter: '/images/wrinkle-fillers2.png', dataAiHint: 'woman face', serviceType: 'treatment' },
      { id: 'xanthelasma-treatment', imageBefore: '/images/xanthelasma-plasma-arc.png', imageAfter: '/images/xanthelasma-plasma-arc2.png', dataAiHint: 'eyelid spots', serviceType: 'treatment' },
    ],
  },
  {
    id: 'body',
    icon: Activity,
    services: [
      { id: 'breast-augmentation', imageBefore: '/images/breast-augmentation.png', imageAfter: '/images/breast-augmentation2.png', dataAiHint: 'woman torso', serviceType: 'operation' },
      { id: 'breast-lift', imageBefore: '/images/breast-lift.png', imageAfter: '/images/breast-lift2.png', dataAiHint: 'woman chest', serviceType: 'operation' },
      { id: 'breast-reduction', imageBefore: '/images/breast-reduction.png', imageAfter: '/images/breast-reduction2.png', dataAiHint: 'woman back', serviceType: 'operation' },
      { id: 'breast-reconstruction', imageBefore: '/images/breast-reconstruction.png', imageAfter: '/images/breast-reconstruction2.png', dataAiHint: 'woman surgery', serviceType: 'operation' },
      { id: 'arm-lift', imageBefore: '/images/arm-lift.png', imageAfter: '/images/arm-lift2.png', dataAiHint: 'woman arm', serviceType: 'operation' },
      { id: 'tummy-tuck', imageBefore: '/images/tummy-tuck.png', imageAfter: '/images/tummy-tuck2.png', dataAiHint: 'woman abdomen', serviceType: 'operation' },
      { id: 'liposculpture', imageBefore: '/images/liposculpture.png', imageAfter: '/images/liposculpture2.png', dataAiHint: 'woman body', serviceType: 'operation' },
      { id: 'brazilian-butt-lift', imageBefore: '/images/bbl.png', imageAfter: '/images/bbl2.png', dataAiHint: 'woman buttocks', serviceType: 'operation' },
      { id: 'labiaplasty', imageBefore: '/images/labiaplasty.png', imageAfter: '/images/labiaplasty2.png', dataAiHint: 'intimate surgery', serviceType: 'operation' },
      { id: 'thigh-lift', imageBefore: '/images/thigh-lift.png', imageAfter: '/images/thigh-lift2.png', dataAiHint: 'woman legs', serviceType: 'operation' },
      { id: 'gynecomastia', imageBefore: '/images/gynecomastia.png', imageAfter: '/images/gynecomastia2.png', dataAiHint: 'man chest', serviceType: 'operation' },
      { id: 'carboxytherapy', imageBefore: '/images/carboxytherapy.png', imageAfter: '/images/carboxytherapy2.png', dataAiHint: 'skin therapy', serviceType: 'treatment' },
      { id: 'cellulite-treatment', imageBefore: '/images/cellulite-treatment.png', imageAfter: '/images/cellulite-treatment2.png', dataAiHint: 'woman thigh', serviceType: 'treatment' },
      { id: 'laser-hair-removal', imageBefore: '/images/laser-hair-removal.png', imageAfter: '/images/laser-hair-removal2.png', dataAiHint: 'smooth skin', serviceType: 'treatment' },
      { id: 'lipolysis', imageBefore: '/images/lipolysis.png', imageAfter: '/images/lipolysis2.png', dataAiHint: 'body contouring', serviceType: 'treatment' },
      { id: 'plasma-arc-skin', imageBefore: '/images/plasma-arc-body.png', imageAfter: '/images/plasma-arc-body2.png', dataAiHint: 'skin rejuvenation', serviceType: 'treatment' },
      { id: 'sclerotherapy', imageBefore: '/images/sclerotherapy.png', imageAfter: '/images/sclerotherapy2.png', dataAiHint: 'leg veins', serviceType: 'treatment' },
    ],
  },
  {
    id: 'dentistry',
    icon: Smile,
    services: [
      { id: 'composite-veneers', imageBefore: '/images/composite-veneers.png', imageAfter: '/images/composite-veneers2.png', dataAiHint: 'smile teeth', serviceType: 'treatment', dentalCategory: 'aesthetics' },
      { id: 'emax-veneers', imageBefore: '/images/emax-veneers.png', imageAfter: '/images/emax-veneers2.png', dataAiHint: 'perfect smile', serviceType: 'treatment', dentalCategory: 'aesthetics' },
      { id: 'teeth-whitening', imageBefore: '/images/teeth-whitening.png', imageAfter: '/images/teeth-whitening2.png', dataAiHint: 'white teeth', serviceType: 'treatment', dentalCategory: 'aesthetics' },
      { id: 'crowns', imageBefore: '/images/crowns.png', imageAfter: '/images/crowns2.png', dataAiHint: 'dental crown', serviceType: 'treatment', dentalCategory: 'prosthetics' },
      { id: 'dental-bridges', imageBefore: '/images/dental-bridges.png', imageAfter: '/images/dental-bridges2.png', dataAiHint: 'dental bridge', serviceType: 'treatment', dentalCategory: 'prosthetics' },
      { id: 'dentures', imageBefore: '/images/dentures.png', imageAfter: '/images/dentures2.png', dataAiHint: 'denture smile', serviceType: 'treatment', dentalCategory: 'prosthetics' },
      { id: 'fixed-braces', imageBefore: '/images/fixed-braces.png', imageAfter: '/images/fixed-braces2.png', dataAiHint: 'teeth braces', serviceType: 'treatment', dentalCategory: 'orthodontics' },
      { id: 'invisalign', imageBefore: '/images/invisalign.png', imageAfter: '/images/invisalign2.png', dataAiHint: 'clear aligner', serviceType: 'treatment', dentalCategory: 'orthodontics' },
      { id: 'removable-appliances', imageBefore: '/images/removable-appliances.png', imageAfter: '/images/removable-appliances2.png', dataAiHint: 'dental retainer', serviceType: 'treatment', dentalCategory: 'orthodontics' },
      { id: 'infected-teeth-treatment', imageBefore: '/images/infected-teeth-treatment.png', imageAfter: '/images/infected-teeth-treatment2.png', dataAiHint: 'dental xray', serviceType: 'treatment', dentalCategory: 'therapy' },
      { id: 'tartar-cleaning', imageBefore: '/images/tartar-cleaning.png', imageAfter: '/images/tartar-cleaning2.png', dataAiHint: 'dental cleaning', serviceType: 'treatment', dentalCategory: 'therapy' },
      { id: 'tooth-fillings', imageBefore: '/images/tooth-fillings.png', imageAfter: '/images/tooth-fillings2.png', dataAiHint: 'tooth filling', serviceType: 'treatment', dentalCategory: 'therapy' },
      { id: 'apical-resection', imageBefore: '/images/apical-resection.png', imageAfter: '/images/apical-resection2.png', dataAiHint: 'dental surgery', serviceType: 'operation', dentalCategory: 'surgery' },
      { id: 'dental-implants', imageBefore: '/images/dental-implants.png', imageAfter: '/images/dental-implants2.png', dataAiHint: 'dental implant', serviceType: 'operation', dentalCategory: 'surgery' },
      { id: 'tooth-extraction', imageBefore: '/images/tooth-extraction.png', imageAfter: '/images/tooth-extraction2.png', dataAiHint: 'tooth extraction', serviceType: 'operation', dentalCategory: 'surgery' },
      { id: 'milk-teeth-treatment', imageBefore: '/images/milk-teeth-treatment.png', imageAfter: '/images/milk-teeth-treatment2.png', dataAiHint: 'child smile', serviceType: 'treatment', dentalCategory: 'pedodontics' },
      { id: 'tooth-fluoridation', imageBefore: '/images/tooth-fluoridation.png', imageAfter: '/images/tooth-fluoridation2.png', dataAiHint: 'child dentist', serviceType: 'treatment', dentalCategory: 'pedodontics' },
      { id: 'tooth-sealants', imageBefore: '/images/tooth-sealants.png', imageAfter: '/images/tooth-sealants2.png', dataAiHint: 'healthy teeth', serviceType: 'treatment', dentalCategory: 'pedodontics' },
    ],
  },
];

export const allServices: ServiceItem[] = serviceData.flatMap(category => category.services);
