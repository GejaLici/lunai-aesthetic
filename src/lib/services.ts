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
    id: "fytyra",
    title: "FYTYRA (Face)",
    icon: Smile,
    services: [
      { id: "operacioni-hundes", name: "Operacioni i hundës", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "nose surgery" },
      { id: "rimodelimi-hundes", name: "Rimodelimi i hundës", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "nose reshaping" },
      { id: "rimodelimi-vesheve", name: "Rimodelimi i veshëve", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "ear reshaping" },
      { id: "mbjellja-flokeve", name: "Mbjellja e flokëve", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "hair transplant" },
      { id: "mbjellja-mjekres", name: "Mbjellja e mjekrës", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "beard transplant" },
      { id: "mbjellja-vetullave", name: "Mbjellja e vetullave", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "eyebrow transplant" },
      { id: "lifting-vetullave", name: "Lifting i vetullave", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "brow lift" },
      { id: "blefaroplastika", name: "Blefaroplastika", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "eyelid surgery" },
      { id: "lifting-fytyres", name: "Lifting i fytyrës", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "face lift" },
      { id: "rimodelimi-mjekres", name: "Rimodelimi i mjekrës", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "chin reshaping" },
    ],
  },
  {
    id: "gjoksi",
    title: "GJOKSI (Breasts – Femra)",
    icon: HeartHandshake, 
    services: [
      { id: "zmadhimi-gjoksit", name: "Zmadhimi i gjoksit", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "breast augmentation" },
      { id: "lifting-gjoksit", name: "Lifting i gjoksit", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "breast lift" },
      { id: "zvogelimi-gjoksit", name: "Zvogëlimi i gjoksit", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "breast reduction" },
      { id: "rikonstruktrimi-gjoksit", name: "Rikonstuktrimi i gjoksit", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "breast reconstruction" },
    ],
  },
  {
    id: "trupi",
    title: "TRUPI (Body)",
    icon: PersonStanding,
    services: [
      { id: "lifting-kraheve", name: "Lifting i krahëve", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "arm lift" },
      { id: "rimodelimi-barkut", name: "Rimodelimi i barkut", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "tummy tuck" },
      { id: "liposculptura", name: "Liposculptura", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "liposculpture body" },
      { id: "rimodelimi-vitheve-bbl", name: "Rimodelimi i vitheve BBL", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "buttock augmentation" },
      { id: "labioplastika", name: "Labioplastika", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "labiaplasty procedure" },
      { id: "lifting-kofsheve", name: "Lifting i kofshëve", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "thigh lift" },
      { id: "gjinekomastia", name: "Gjinekomastia", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "gynecomastia surgery" },
    ],
  },
];

export const allServices: ServiceItem[] = serviceData.reduce((acc, category) => {
  return acc.concat(category.services);
}, [] as ServiceItem[]);
