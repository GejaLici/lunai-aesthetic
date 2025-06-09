
import type { LucideIcon } from 'lucide-react';
import { Smile, Aperture, PersonStanding, HeartHandshake, Eye, Ruler } from 'lucide-react';

export type ServiceItem = {
  id: string;
  name: string;
  description: string;
  imageBefore: string;
  imageAfter: string;
  dataAiHint: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  icon?: LucideIcon;
  services: ServiceItem[];
};

const commonDescription = "Discover personalized treatments designed to enhance your natural beauty and boost your confidence. Our experts use the latest techniques for optimal results.";

export const serviceData: ServiceCategory[] = [
  {
    id: "face",
    title: "FACE",
    icon: Smile,
    services: [
      { id: "rhinoplasty", name: "Nose Surgery (Rhinoplasty)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "nose surgery" },
      { id: "nose-reshaping", name: "Nose Reshaping", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "nose reshaping" },
      { id: "otoplasty", name: "Ear Reshaping (Otoplasty)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "ear reshaping" },
      { id: "hair-transplant", name: "Hair Transplant", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "hair transplant" },
      { id: "beard-transplant", name: "Beard Transplant", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "beard transplant" },
      { id: "eyebrow-transplant", name: "Eyebrow Transplant", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "eyebrow transplant" },
      { id: "brow-lift", name: "Brow Lift", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "brow lift" },
      { id: "blepharoplasty", name: "Eyelid Surgery (Blepharoplasty)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "eyelid surgery" },
      { id: "face-lift", name: "Face Lift (Rhytidectomy)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "face lift" },
      { id: "chin-reshaping-genioplasty", name: "Chin Reshaping (Genioplasty)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "chin reshaping" },
      { id: "lip-reshaping", name: "Lip Reshaping", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "lip reshaping" },
      { id: "xanthelasma-plasma-arc", name: "Xanthelasma, Plasma Arc", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "xanthelasma treatment" },
      { id: "multivitamin-treatment", name: "Multivitamin Treatment", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "facial treatment" },
      { id: "eyelids-plasma-arc", name: "Eyelids, Plasma Arc", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "eyelid plasma" },
      { id: "cheekbone-reshaping", name: "Cheekbone Reshaping", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "cheekbone contour" },
      { id: "microdermabrasion", name: "Microdermabrasion", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "skin exfoliation" },
      { id: "jawline-contouring", name: "Jawline Contouring", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "jawline definition" },
      { id: "wrinkle-fillers", name: "Wrinkle Fillers", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "dermal fillers" },
      { id: "prp-face", name: "PRP for the Face", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "facial rejuvenation" },
      { id: "dark-circles-eyes", name: "Dark Circles Under the Eyes", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "eye treatment" },
      { id: "prp-hair", name: "PRP for Hair", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "hair restoration" },
      { id: "white-peeling", name: "White Peeling", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "chemical peel" },
      { id: "microneedling", name: "Microneedling", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "skin needling" },
      { id: "radiofrequency", name: "Radiofrequency", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "skin tightening" },
      { id: "sulcus-filling", name: "Sulcus Filling (Deep Wrinkle Filling)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "wrinkle treatment" },
      { id: "chin-reshaping", name: "Chin Reshaping", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "chin augmentation" },
    ],
  },
  {
    id: "breasts",
    title: "BREASTS (Female)",
    icon: HeartHandshake,
    services: [
      { id: "breast-augmentation", name: "Breast Augmentation", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "breast augmentation" },
      { id: "breast-lift", name: "Breast Lift (Mastopexy)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "breast lift" },
      { id: "breast-reduction", name: "Breast Reduction", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "breast reduction" },
      { id: "breast-reconstruction", name: "Breast Reconstruction", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "breast reconstruction" },
    ],
  },
  {
    id: "body",
    title: "BODY",
    icon: PersonStanding,
    services: [
      { id: "arm-lift", name: "Arm Lift (Brachioplasty)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "arm lift" },
      { id: "tummy-tuck", name: "Tummy Tuck (Abdominoplasty)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "tummy tuck" },
      { id: "liposculpture", name: "Liposculpture", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "liposculpture body" },
      { id: "bbl", name: "Buttock Augmentation (BBL)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "buttock augmentation" },
      { id: "labiaplasty", name: "Labiaplasty", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "labiaplasty procedure" },
      { id: "thigh-lift", name: "Thigh Lift", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "thigh lift" },
      { id: "gynecomastia", name: "Gynecomastia (Male Breast Reduction)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "gynecomastia surgery" },
      { id: "cellulite-treatment", name: "Cellulite Treatment", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "cellulite reduction" },
      { id: "plasma-arc-body", name: "Plasma Arc (Body)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "skin tightening" },
      { id: "carboxytherapy", name: "Carboxytherapy", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "stretch marks" },
      { id: "sclerotherapy", name: "Sclerotherapy", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "vein treatment" },
      { id: "lipolysis", name: "Lipolysis", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "fat reduction" },
      { id: "laser-hair-removal", name: "Laser Hair Removal", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "hair removal" },
    ],
  },
];

export const allServices: ServiceItem[] = serviceData.reduce((acc, category) => {
  return acc.concat(category.services);
}, [] as ServiceItem[]);

