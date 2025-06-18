
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
      { id: "rhinoplasty", name: "Nose Surgery (Rhinoplasty)", description: commonDescription, imageBefore: "/images/rhinoplasty.png", imageAfter: "/images/rhinoplasty2.png", dataAiHint: "nose surgery", serviceType: "operation" },
      { id: "nose-reshaping", name: "Nose Reshaping", description: commonDescription, imageBefore: "/images/nose-reshaping.png", imageAfter: "/images/nose-reshaping2.png", dataAiHint: "nose reshaping", serviceType: "treatment" },
      { id: "otoplasty", name: "Ear Reshaping (Otoplasty)", description: commonDescription, imageBefore: "/images/otoplasty.png", imageAfter: "/images/otoplasty2.png", dataAiHint: "ear reshaping", serviceType: "operation" },
      { id: "hair-transplant", name: "Hair Transplant", description: commonDescription, imageBefore: "/images/hair-transplant.png", imageAfter: "/images/hair-transplant2.png", dataAiHint: "hair transplant", serviceType: "operation" },
      { id: "beard-transplant", name: "Beard Transplant", description: commonDescription, imageBefore: "/images/beard-transplant.png", imageAfter: "/images/beard-transplant2.png", dataAiHint: "beard transplant", serviceType: "operation" },
      { id: "eyebrow-transplant", name: "Eyebrow Transplant", description: commonDescription, imageBefore: "/images/eyebrow-transplant.png", imageAfter: "/images/eyebrow-transplant2.png", dataAiHint: "eyebrow transplant", serviceType: "operation" },
      { id: "brow-lift", name: "Brow Lift", description: commonDescription, imageBefore: "/images/brow-lift.png", imageAfter: "/images/brow-lift2.png", dataAiHint: "brow lift", serviceType: "operation" },
      { id: "blepharoplasty", name: "Eyelid Surgery (Blepharoplasty)", description: commonDescription, imageBefore: "/images/blepharoplasty (2).png", imageAfter: "/images/blepharoplasty (3).png", dataAiHint: "eyelid surgery", serviceType: "operation" },
      { id: "face-lift", name: "Face Lift (Rhytidectomy)", description: commonDescription, imageBefore: "/images/face-lift.png", imageAfter: "/images/face-lift2.png", dataAiHint: "face lift", serviceType: "operation" },
      { id: "chin-reshaping-genioplasty", name: "Chin Reshaping (Genioplasty)", description: commonDescription, imageBefore: "/images/chin-reshaping-genioplasty.png", imageAfter: "/images/chin-reshaping-genioplasty2.png", dataAiHint: "chin reshaping", serviceType: "operation" },
      { id: "lip-reshaping", name: "Lip Reshaping", description: commonDescription, imageBefore: "/images/lip-reshaping.png", imageAfter: "/images/lip-reshaping2.png", dataAiHint: "lip reshaping", serviceType: "treatment" },
      { id: "xanthelasma-plasma-arc", name: "Xanthelasma, Plasma Arc", description: commonDescription, imageBefore: "/images/xanthelasma-plasma-arc.png", imageAfter: "/images/xanthelasma-plasma-arc2.png", dataAiHint: "xanthelasma treatment", serviceType: "treatment" },
      { id: "multivitamin-treatment", name: "Multivitamin Treatment", description: commonDescription, imageBefore: "/images/multivitamin-treatment.png", imageAfter: "/images/multivitamin-treatment2.png", dataAiHint: "facial treatment", serviceType: "treatment" },
      { id: "eyelids-plasma-arc", name: "Eyelids, Plasma Arc", description: commonDescription, imageBefore: "/images/eyelids-plasma-arc.png", imageAfter: "/images/eyelids-plasma-arc2.png", dataAiHint: "eyelid plasma", serviceType: "treatment" },
      { id: "cheekbone-reshaping", name: "Cheekbone Reshaping", description: commonDescription, imageBefore: "/images/cheekbone-reshaping.png", imageAfter: "/images/cheekbone-reshaping2.png", dataAiHint: "cheekbone contour", serviceType: "treatment" },
      { id: "microdermabrasion", name: "Microdermabrasion", description: commonDescription, imageBefore: "/images/microdermabrasion.png", imageAfter: "/images/microdermabrasion2.png", dataAiHint: "skin exfoliation", serviceType: "treatment" },
      { id: "jawline-contouring", name: "Jawline Contouring", description: commonDescription, imageBefore: "/images/jawline-contouring.png", imageAfter: "/images/jawline-contouring2.png", dataAiHint: "jawline definition", serviceType: "treatment" },
      { id: "wrinkle-fillers", name: "Wrinkle Fillers", description: commonDescription, imageBefore: "/images/wrinkle-fillers1.png", imageAfter: "/images/wrinkle-fillers2.png", dataAiHint: "dermal fillers", serviceType: "treatment" },
      { id: "prp-face", name: "PRP for the Face", description: commonDescription, imageBefore: "/images/prp-face.png", imageAfter: "/images/prp-face2.png", dataAiHint: "facial rejuvenation", serviceType: "treatment" },
      { id: "dark-circles-eyes", name: "Dark Circles Under the Eyes", description: commonDescription, imageBefore: "/images/dark-circles-eyes.png", imageAfter: "/images/dark-circles-eyes2.png", dataAiHint: "eye treatment", serviceType: "treatment" },
      { id: "prp-hair", name: "PRP for Hair", description: commonDescription, imageBefore: "/images/prp-hair.png", imageAfter: "/images/prp-hair2.png", dataAiHint: "hair restoration", serviceType: "treatment" },
      { id: "white-peeling", name: "White Peeling", description: commonDescription, imageBefore: "/images/white-peeling.png", imageAfter: "/images/white-peeling2.png", dataAiHint: "chemical peel", serviceType: "treatment" },
      { id: "microneedling", name: "Microneedling", description: commonDescription, imageBefore: "/images/microneedling1.png", imageAfter: "/images/microneedling2.png", dataAiHint: "skin needling", serviceType: "treatment" },
      { id: "radiofrequency", name: "Radiofrequency", description: commonDescription, imageBefore: "/images/radiofrequency1.png", imageAfter: "/images/radiofrequency2.png", dataAiHint: "skin tightening", serviceType: "treatment" },
      { id: "sulcus-filling", name: "Sulcus Filling (Deep Wrinkle Filling)", description: commonDescription, imageBefore: "/images/sulcus-filling.png", imageAfter: "/images/sulcus-filling2.png", dataAiHint: "wrinkle treatment", serviceType: "treatment" },
      { id: "chin-reshaping", name: "Chin Reshaping", description: commonDescription, imageBefore: "/images/chin-reshaping.png", imageAfter: "/images/chin-reshaping2.png", dataAiHint: "chin augmentation", serviceType: "treatment" },
    ],
  },
  {
    id: "breasts",
    title: "BREASTS (Female)",
    icon: HeartHandshake,
    services: [
      { id: "breast-augmentation", name: "Breast Augmentation", description: commonDescription, imageBefore: "/images/breast-augmentation.png", imageAfter: "/images/breast-augmentation2.png", dataAiHint: "breast augmentation", serviceType: "operation" },
      { id: "breast-lift", name: "Breast Lift (Mastopexy)", description: commonDescription, imageBefore: "/images/breast-lift.png", imageAfter: "/images/breast-lift2.png", dataAiHint: "breast lift", serviceType: "operation" },
      { id: "breast-reduction", name: "Breast Reduction", description: commonDescription, imageBefore: "/images/breast-reduction.png", imageAfter: "/images/breast-reduction2.png", dataAiHint: "breast reduction", serviceType: "operation" },
      { id: "breast-reconstruction", name: "Breast Reconstruction", description: commonDescription, imageBefore: "/images/breast-reconstruction.png", imageAfter: "/images/breast-reconstruction2.png", dataAiHint: "breast reconstruction", serviceType: "operation" },
    ],
  },
  {
    id: "body",
    title: "BODY",
    icon: PersonStanding,
    services: [
      { id: "arm-lift", name: "Arm Lift (Brachioplasty)", description: commonDescription, imageBefore: "/images/arm-lift.png", imageAfter: "/images/arm-lift2.png", dataAiHint: "arm lift", serviceType: "operation" },
      { id: "tummy-tuck", name: "Tummy Tuck (Abdominoplasty)", description: commonDescription, imageBefore: "/images/tummy-tuck.png", imageAfter: "/images/tummy-tuck2.png", dataAiHint: "tummy tuck", serviceType: "operation" },
      { id: "liposculpture", name: "Liposculpture", description: commonDescription, imageBefore: "/images/liposculpture.png", imageAfter: "/images/liposculpture2.png", dataAiHint: "liposculpture body", serviceType: "operation" },
      { id: "bbl", name: "Buttock Augmentation (BBL)", description: commonDescription, imageBefore: "/images/Gemini(1).png", imageAfter: "/images/Gemin.png", dataAiHint: "buttock augmentation", serviceType: "operation" },
      { id: "labiaplasty", name: "Labiaplasty", description: commonDescription, imageBefore: "/images/labiaplasty.png", imageAfter: "/images/labiaplasty2.png", dataAiHint: "labiaplasty procedure", serviceType: "operation" },
      { id: "thigh-lift", name: "Thigh Lift", description: commonDescription, imageBefore: "/images/thigh-lift.png", imageAfter: "/images/thigh-lift2.png", dataAiHint: "thigh lift", serviceType: "operation" },
      { id: "gynecomastia", name: "Gynecomastia (Male Breast Reduction)", description: commonDescription, imageBefore: "/images/gynecomastia.png", imageAfter: "/images/gynecomastia2.png", dataAiHint: "gynecomastia surgery", serviceType: "operation" },
      { id: "cellulite-treatment", name: "Cellulite Treatment", description: commonDescription, imageBefore: "/images/cellulite-treatment.png", imageAfter: "/images/cellulite-treatment2.png", dataAiHint: "cellulite reduction", serviceType: "treatment" },
      { id: "plasma-arc-body", name: "Plasma Arc (Body)", description: commonDescription, imageBefore: "/images/plasma-arc-body.png", imageAfter: "/images/plasma-arc-body2.png", dataAiHint: "skin tightening", serviceType: "treatment" },
      { id: "carboxytherapy", name: "Carboxytherapy", description: commonDescription, imageBefore: "/images/carboxytherapy.png", imageAfter: "/images/carboxytherapy2.png", dataAiHint: "stretch marks", serviceType: "treatment" },
      { id: "sclerotherapy", name: "Sclerotherapy", description: commonDescription, imageBefore: "/images/sclerotherapy.png", imageAfter: "/images/sclerotherapy2.png", dataAiHint: "vein treatment", serviceType: "treatment" },
      { id: "lipolysis", name: "Lipolysis", description: commonDescription, imageBefore: "/images/lipolysis.png", imageAfter: "/images/lipolysis2.png", dataAiHint: "fat reduction", serviceType: "treatment" },
      { id: "laser-hair-removal", name: "Laser Hair Removal", description: commonDescription, imageBefore: "/images/laser-hair-removal.png", imageAfter: "/images/laser-hair-removal2.png", dataAiHint: "hair removal", serviceType: "treatment" },
    ],
  },
  {
    id: "dentistry",
    title: "DENTISTRY",
    icon: Sparkles, // Using Sparkles as the main icon for Dentistry
    services: [
      // AESTHETICS
      { id: "teeth-whitening", name: "Teeth Whitening", description: commonDescription, imageBefore: "/images/teeth-whitening.png", imageAfter: "/images/teeth-whitening2.png", dataAiHint: "teeth whitening", serviceType: "treatment", dentalSubCategoryTitle: "AESTHETICS" },
      { id: "composite-veneers", name: "Composite Veneers", description: commonDescription, imageBefore: "/images/composite-veneers.png", imageAfter: "/images/composite-veneers2.png", dataAiHint: "composite veneers", serviceType: "treatment", dentalSubCategoryTitle: "AESTHETICS" },
      { id: "emax-veneers", name: "E-Max Veneers", description: commonDescription, imageBefore: "/images/emax-veneers.png", imageAfter: "/images/emax-veneers2.png", dataAiHint: "emax veneers", serviceType: "treatment", dentalSubCategoryTitle: "AESTHETICS" },
      // PROSTHETICS
      { id: "dental-crowns", name: "Crowns", description: commonDescription, imageBefore: "/images/dental-crowns.png", imageAfter: "/images/dental-crowns2.png", dataAiHint: "dental crowns", serviceType: "treatment", dentalSubCategoryTitle: "PROSTHETICS" },
      { id: "dental-bridges", name: "Dental Bridges", description: commonDescription, imageBefore: "/images/dental-bridges.png", imageAfter: "/images/dental-bridges2.png", dataAiHint: "dental bridges", serviceType: "treatment", dentalSubCategoryTitle: "PROSTHETICS" },
      { id: "dentures", name: "Dentures", description: commonDescription, imageBefore: "/images/dentures.png", imageAfter: "/images/dentures2.png", dataAiHint: "dentures", serviceType: "treatment", dentalSubCategoryTitle: "PROSTHETICS" },
      // ORTHODONTICS
      { id: "invisalign", name: "Invisalign", description: commonDescription, imageBefore: "/images/invisalign.png", imageAfter: "/images/invisalign2.png", dataAiHint: "invisalign", serviceType: "treatment", dentalSubCategoryTitle: "ORTHODONTICS" },
      { id: "fixed-braces", name: "Fixed Braces", description: commonDescription, imageBefore: "/images/fixed-braces.png", imageAfter: "/images/fixed-braces.png", dataAiHint: "fixed braces", serviceType: "treatment", dentalSubCategoryTitle: "ORTHODONTICS" },
      { id: "removable-appliances", name: "Removable Appliances", description: commonDescription, imageBefore: "/images/removable-appliances.png", imageAfter: "/images/removable-appliances2.png", dataAiHint: "removable ortho", serviceType: "treatment", dentalSubCategoryTitle: "ORTHODONTICS" },
      // THERAPY
      { id: "tartar-cleaning", name: "Tartar Cleaning", description: commonDescription, imageBefore: "/images/tartar-cleaning.png", imageAfter: "/images/tartar-cleaning2.png", dataAiHint: "teeth cleaning", serviceType: "treatment", dentalSubCategoryTitle: "THERAPY" },
      { id: "tooth-fillings", name: "Tooth Fillings", description: commonDescription, imageBefore: "/images/tooth-fillings.png", imageAfter: "/images/tooth-fillings2.png", dataAiHint: "tooth fillings", serviceType: "treatment", dentalSubCategoryTitle: "THERAPY" },
      { id: "infected-teeth-treatment", name: "Infected Teeth Treatment", description: commonDescription, imageBefore: "/images/infected-teeth-treatment.png", imageAfter: "/images/infected-teeth-treatment2.png", dataAiHint: "root canal", serviceType: "treatment", dentalSubCategoryTitle: "THERAPY" },
      // SURGERY
      { id: "tooth-extraction", name: "Tooth Extraction", description: commonDescription, imageBefore: "/images/tooth-extraction.png", imageAfter: "/images/tooth-extraction2.png", dataAiHint: "tooth extraction", serviceType: "operation", dentalSubCategoryTitle: "SURGERY" },
      { id: "dental-implants", name: "Dental Implants", description: commonDescription, imageBefore: "/images/dental-implants.png", imageAfter: "/images/dental-implants2.png", dataAiHint: "dental implants", serviceType: "operation", dentalSubCategoryTitle: "SURGERY" },
      { id: "apical-resection", name: "Apical Resection", description: commonDescription, imageBefore: "/images/apical-resection.png", imageAfter: "/images/apical-resection2.png", dataAiHint: "apical resection", serviceType: "operation", dentalSubCategoryTitle: "SURGERY" },
      // PEDODONTICS (CHILDREN'S DENTISTRY)
      { id: "milk-teeth-treatment", name: "Milk Teeth Treatment", description: commonDescription, imageBefore: "/images/milk-teeth-treatment.png", imageAfter: "/images/milk-teeth-treatment2.png", dataAiHint: "childrens dentistry", serviceType: "treatment", dentalSubCategoryTitle: "PEDODONTICS (CHILDREN'S DENTISTRY)" },
      { id: "tooth-fluoridation", name: "Tooth Fluoridation", description: commonDescription, imageBefore: "/images/tooth-fluoridation.png", imageAfter: "/images/tooth-fluoridation2.png", dataAiHint: "tooth fluoridation", serviceType: "treatment", dentalSubCategoryTitle: "PEDODONTICS (CHILDREN'S DENTISTRY)" },
      { id: "tooth-sealants", name: "Tooth Sealants", description: commonDescription, imageBefore: "/images/tooth-sealants.png", imageAfter: "/images/tooth-sealants2.png", dataAiHint: "tooth sealants", serviceType: "treatment", dentalSubCategoryTitle: "PEDODONTICS (CHILDREN'S DENTISTRY)" },
    ],
  },
];

export const allServices: ServiceItem[] = serviceData.reduce((acc, category) => {
  return acc.concat(category.services);
}, [] as ServiceItem[]);

    