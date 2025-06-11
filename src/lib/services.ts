
import type { LucideIcon } from 'lucide-react';
import { Smile, Aperture, PersonStanding, HeartHandshake, Eye, Ruler, Sparkles, Construction, AlignCenter, ClipboardCheck, Scissors, Baby, Activity } from 'lucide-react';

export type ServiceItem = {
  id: string;
  name: string;
  description: string;
  imageBefore: string;
  imageAfter: string;
  dataAiHint: string;
  serviceType?: 'operation' | 'treatment';
  dentalSubCategoryTitle?: string; // New field for dental sub-categories
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
      { id: "rhinoplasty", name: "Nose Surgery (Rhinoplasty)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "nose surgery", serviceType: "operation" },
      { id: "nose-reshaping", name: "Nose Reshaping", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "nose reshaping", serviceType: "treatment" },
      { id: "otoplasty", name: "Ear Reshaping (Otoplasty)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "ear reshaping", serviceType: "operation" },
      { id: "hair-transplant", name: "Hair Transplant", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "hair transplant", serviceType: "operation" },
      { id: "beard-transplant", name: "Beard Transplant", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "beard transplant", serviceType: "operation" },
      { id: "eyebrow-transplant", name: "Eyebrow Transplant", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "eyebrow transplant", serviceType: "operation" },
      { id: "brow-lift", name: "Brow Lift", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "brow lift", serviceType: "operation" },
      { id: "blepharoplasty", name: "Eyelid Surgery (Blepharoplasty)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "eyelid surgery", serviceType: "operation" },
      { id: "face-lift", name: "Face Lift (Rhytidectomy)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "face lift", serviceType: "operation" },
      { id: "chin-reshaping-genioplasty", name: "Chin Reshaping (Genioplasty)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "chin reshaping", serviceType: "operation" },
      { id: "lip-reshaping", name: "Lip Reshaping", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "lip reshaping", serviceType: "treatment" },
      { id: "xanthelasma-plasma-arc", name: "Xanthelasma, Plasma Arc", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "xanthelasma treatment", serviceType: "treatment" },
      { id: "multivitamin-treatment", name: "Multivitamin Treatment", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "facial treatment", serviceType: "treatment" },
      { id: "eyelids-plasma-arc", name: "Eyelids, Plasma Arc", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "eyelid plasma", serviceType: "treatment" },
      { id: "cheekbone-reshaping", name: "Cheekbone Reshaping", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "cheekbone contour", serviceType: "treatment" },
      { id: "microdermabrasion", name: "Microdermabrasion", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "skin exfoliation", serviceType: "treatment" },
      { id: "jawline-contouring", name: "Jawline Contouring", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "jawline definition", serviceType: "treatment" },
      { id: "wrinkle-fillers", name: "Wrinkle Fillers", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "dermal fillers", serviceType: "treatment" },
      { id: "prp-face", name: "PRP for the Face", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "facial rejuvenation", serviceType: "treatment" },
      { id: "dark-circles-eyes", name: "Dark Circles Under the Eyes", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "eye treatment", serviceType: "treatment" },
      { id: "prp-hair", name: "PRP for Hair", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "hair restoration", serviceType: "treatment" },
      { id: "white-peeling", name: "White Peeling", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "chemical peel", serviceType: "treatment" },
      { id: "microneedling", name: "Microneedling", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "skin needling", serviceType: "treatment" },
      { id: "radiofrequency", name: "Radiofrequency", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "skin tightening", serviceType: "treatment" },
      { id: "sulcus-filling", name: "Sulcus Filling (Deep Wrinkle Filling)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "wrinkle treatment", serviceType: "treatment" },
      { id: "chin-reshaping", name: "Chin Reshaping", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "chin augmentation", serviceType: "treatment" },
    ],
  },
  {
    id: "breasts",
    title: "BREASTS (Female)",
    icon: HeartHandshake,
    services: [
      { id: "breast-augmentation", name: "Breast Augmentation", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "breast augmentation", serviceType: "operation" },
      { id: "breast-lift", name: "Breast Lift (Mastopexy)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "breast lift", serviceType: "operation" },
      { id: "breast-reduction", name: "Breast Reduction", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "breast reduction", serviceType: "operation" },
      { id: "breast-reconstruction", name: "Breast Reconstruction", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "breast reconstruction", serviceType: "operation" },
    ],
  },
  {
    id: "body",
    title: "BODY",
    icon: PersonStanding,
    services: [
      { id: "arm-lift", name: "Arm Lift (Brachioplasty)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "arm lift", serviceType: "operation" },
      { id: "tummy-tuck", name: "Tummy Tuck (Abdominoplasty)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "tummy tuck", serviceType: "operation" },
      { id: "liposculpture", name: "Liposculpture", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "liposculpture body", serviceType: "operation" },
      { id: "bbl", name: "Buttock Augmentation (BBL)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "buttock augmentation", serviceType: "operation" },
      { id: "labiaplasty", name: "Labiaplasty", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "labiaplasty procedure", serviceType: "operation" },
      { id: "thigh-lift", name: "Thigh Lift", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "thigh lift", serviceType: "operation" },
      { id: "gynecomastia", name: "Gynecomastia (Male Breast Reduction)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "gynecomastia surgery", serviceType: "operation" },
      { id: "cellulite-treatment", name: "Cellulite Treatment", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "cellulite reduction", serviceType: "treatment" },
      { id: "plasma-arc-body", name: "Plasma Arc (Body)", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "skin tightening", serviceType: "treatment" },
      { id: "carboxytherapy", name: "Carboxytherapy", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "stretch marks", serviceType: "treatment" },
      { id: "sclerotherapy", name: "Sclerotherapy", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "vein treatment", serviceType: "treatment" },
      { id: "lipolysis", name: "Lipolysis", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "fat reduction", serviceType: "treatment" },
      { id: "laser-hair-removal", name: "Laser Hair Removal", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "hair removal", serviceType: "treatment" },
    ],
  },
  {
    id: "dentistry",
    title: "DENTISTRY",
    icon: Sparkles, // Using Sparkles as the main icon for Dentistry
    services: [
      // AESTHETICS
      { id: "teeth-whitening", name: "Teeth Whitening", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "teeth whitening", serviceType: "treatment", dentalSubCategoryTitle: "AESTHETICS" },
      { id: "composite-veneers", name: "Composite Veneers", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "composite veneers", serviceType: "treatment", dentalSubCategoryTitle: "AESTHETICS" },
      { id: "emax-veneers", name: "E-Max Veneers", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "emax veneers", serviceType: "treatment", dentalSubCategoryTitle: "AESTHETICS" },
      // PROSTHETICS
      { id: "dental-crowns", name: "Crowns", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "dental crowns", serviceType: "treatment", dentalSubCategoryTitle: "PROSTHETICS" },
      { id: "dental-bridges", name: "Dental Bridges", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "dental bridges", serviceType: "treatment", dentalSubCategoryTitle: "PROSTHETICS" },
      { id: "dentures", name: "Dentures", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "dentures", serviceType: "treatment", dentalSubCategoryTitle: "PROSTHETICS" },
      // ORTHODONTICS
      { id: "invisalign", name: "Invisalign", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "invisalign", serviceType: "treatment", dentalSubCategoryTitle: "ORTHODONTICS" },
      { id: "fixed-braces", name: "Fixed Braces", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "fixed braces", serviceType: "treatment", dentalSubCategoryTitle: "ORTHODONTICS" },
      { id: "removable-appliances", name: "Removable Appliances", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "removable ortho", serviceType: "treatment", dentalSubCategoryTitle: "ORTHODONTICS" },
      // THERAPY
      { id: "tartar-cleaning", name: "Tartar Cleaning", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "teeth cleaning", serviceType: "treatment", dentalSubCategoryTitle: "THERAPY" },
      { id: "tooth-fillings", name: "Tooth Fillings", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "tooth fillings", serviceType: "treatment", dentalSubCategoryTitle: "THERAPY" },
      { id: "infected-teeth-treatment", name: "Infected Teeth Treatment", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "root canal", serviceType: "treatment", dentalSubCategoryTitle: "THERAPY" },
      // SURGERY
      { id: "tooth-extraction", name: "Tooth Extraction", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "tooth extraction", serviceType: "operation", dentalSubCategoryTitle: "SURGERY" },
      { id: "dental-implants", name: "Dental Implants", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "dental implants", serviceType: "operation", dentalSubCategoryTitle: "SURGERY" },
      { id: "apical-resection", name: "Apical Resection", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "apical resection", serviceType: "operation", dentalSubCategoryTitle: "SURGERY" },
      // PEDODONTICS (CHILDREN'S DENTISTRY)
      { id: "milk-teeth-treatment", name: "Milk Teeth Treatment", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "childrens dentistry", serviceType: "treatment", dentalSubCategoryTitle: "PEDODONTICS (CHILDREN'S DENTISTRY)" },
      { id: "tooth-fluoridation", name: "Tooth Fluoridation", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "tooth fluoridation", serviceType: "treatment", dentalSubCategoryTitle: "PEDODONTICS (CHILDREN'S DENTISTRY)" },
      { id: "tooth-sealants", name: "Tooth Sealants", description: commonDescription, imageBefore: "https://placehold.co/600x400.png", imageAfter: "https://placehold.co/600x400.png", dataAiHint: "tooth sealants", serviceType: "treatment", dentalSubCategoryTitle: "PEDODONTICS (CHILDREN'S DENTISTRY)" },
    ],
  },
];

export const allServices: ServiceItem[] = serviceData.reduce((acc, category) => {
  return acc.concat(category.services);
}, [] as ServiceItem[]);

    