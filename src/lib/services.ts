
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
      // Surgical
      { id: 'rhinoplasty', name: 'Nose Reshaping (Rhinoplasty)', description: 'Surgically enhances facial harmony and the proportions of your nose. It can also correct impaired breathing.', imageBefore: '/images/rhinoplasty-before.png', imageAfter: '/images/rhinoplasty-after.png', dataAiHint: 'woman nose', serviceType: 'operation' },
      { id: 'otoplasty', name: 'Ear Reshaping (Otoplasty)', description: 'Corrects the shape, position, or proportion of the ear for a more natural look.', imageBefore: '/images/otoplasty-before.png', imageAfter: '/images/otoplasty-after.png', dataAiHint: 'woman ear', serviceType: 'operation' },
      { id: 'blepharoplasty', name: 'Blepharoplasty (Eyelid Surgery)', description: 'Rejuvenates the appearance of the eyes by removing excess skin, fat, or muscle from the eyelids.', imageBefore: '/images/blepharoplasty-before.png', imageAfter: '/images/blepharoplasty-after.png', dataAiHint: 'woman eyes', serviceType: 'operation' },
      { id: 'facelift', name: 'Facelift', description: 'Reduces sagging and wrinkles to create a more youthful facial appearance.', imageBefore: '/images/facelift-before.png', imageAfter: '/images/facelift-after.png', dataAiHint: 'woman profile', serviceType: 'operation' },
      { id: 'chin-reshaping', name: 'Chin Reshaping', description: 'Enhances facial balance by augmenting or reshaping the chin.', imageBefore: '/images/chin-reshaping-before.png', imageAfter: '/images/chin-reshaping-after.png', dataAiHint: 'woman chin', serviceType: 'operation' },
      { id: 'brow-lift', name: 'Brow Lift', description: 'Raises the eyebrows to reduce forehead wrinkles and create a more alert, youthful look.', imageBefore: '/images/brow-lift-before.png', imageAfter: '/images/brow-lift-after.png', dataAiHint: 'woman forehead', serviceType: 'operation' },
      { id: 'hair-transplant', name: 'Hair Transplant', description: 'Restores hair to areas of the scalp with permanent hair loss.', imageBefore: '/images/hair-transplant-before.png', imageAfter: '/images/hair-transplant-after.png', dataAiHint: 'man hair', serviceType: 'operation' },
      { id: 'beard-transplant', name: 'Beard Transplant', description: 'Creates a fuller, denser beard using hair transplantation techniques.', imageBefore: '/images/beard-transplant-before.png', imageAfter: '/images/beard-transplant-after.png', dataAiHint: 'man beard', serviceType: 'operation' },
      { id: 'eyebrow-transplant', name: 'Eyebrow Transplant', description: 'Restores or enhances the shape and fullness of eyebrows.', imageBefore: '/images/eyebrow-transplant-before.png', imageAfter: '/images/eyebrow-transplant-after.png', dataAiHint: 'woman eyebrow', serviceType: 'operation' },
      // Non-Surgical
      { id: 'non-surgical-rhinoplasty', name: 'Nose Reshaping (Non-surgical)', description: 'Uses dermal fillers to make minor modifications to the shape of the nose without surgery.', imageBefore: '/images/non-surgical-rhinoplasty-before.png', imageAfter: '/images/non-surgical-rhinoplasty-after.png', dataAiHint: 'woman nose', serviceType: 'treatment' },
      { id: 'dark-circles-treatment', name: 'Dark Circles Treatment', description: 'Reduces the appearance of dark circles under the eyes using various techniques like fillers or peels.', imageBefore: '/images/dark-circles-treatment-before.png', imageAfter: '/images/dark-circles-treatment-after.png', dataAiHint: 'woman eyes', serviceType: 'treatment' },
      { id: 'eyelids-plasma-arc', name: 'Eyelids (Plasma Arc)', description: 'A non-surgical blepharoplasty alternative that tightens eyelid skin using plasma energy.', imageBefore: '/images/eyelids-plasma-arc-before.png', imageAfter: '/images/eyelids-plasma-arc-after.png', dataAiHint: 'eyelid treatment', serviceType: 'treatment' },
      { id: 'jawline-contouring', name: 'Jawline Contouring', description: 'Enhances and defines the jawline using dermal fillers for a sharper, more sculpted look.', imageBefore: '/images/jawline-contouring-before.png', imageAfter: '/images/jawline-contouring-after.png', dataAiHint: 'woman jawline', serviceType: 'treatment' },
      { id: 'lip-reshaping', name: 'Lip Reshaping', description: 'Uses fillers to add volume, correct asymmetry, and define the shape of the lips.', imageBefore: '/images/lip-reshaping-before.png', imageAfter: '/images/lip-reshaping-after.png', dataAiHint: 'woman lips', serviceType: 'treatment' },
      { id: 'microdermabrasion', name: 'Microdermabrasion', description: 'A minimally invasive procedure to renew overall skin tone and texture.', imageBefore: '/images/microdermabrasion-before.png', imageAfter: '/images/microdermabrasion-after.png', dataAiHint: 'facial treatment', serviceType: 'treatment' },
      { id: 'microneedling', name: 'Microneedling', description: 'Stimulates collagen production to treat acne scars, fine lines, and large pores.', imageBefore: '/images/microneedling-before.png', imageAfter: '/images/microneedling-after.png', dataAiHint: 'skin texture', serviceType: 'treatment' },
      { id: 'multivitamin-treatment', name: 'Multivitamin Treatment', description: 'A facial infusion of essential vitamins to nourish, hydrate, and rejuvenate the skin.', imageBefore: '/images/multivitamin-treatment-before.png', imageAfter: '/images/multivitamin-treatment-after.png', dataAiHint: 'glowing skin', serviceType: 'treatment' },
      { id: 'prp-for-hair', name: 'PRP for Hair', description: 'Uses your own platelet-rich plasma to stimulate hair follicles and promote new growth.', imageBefore: '/images/prp-for-hair-before.png', imageAfter: '/images/prp-for-hair-after.png', dataAiHint: 'hair treatment', serviceType: 'treatment' },
      { id: 'prp-for-face', name: 'PRP for the Face', description: 'Also known as a "vampire facial," this treatment uses your own plasma to promote collagen and rejuvenate skin.', imageBefore: '/images/prp-for-face-before.png', imageAfter: '/images/prp-for-face-after.png', dataAiHint: 'facial plasma', serviceType: 'treatment' },
      { id: 'radiofrequency-treatment', name: 'Radiofrequency Treatment', description: 'A non-surgical method of tightening skin by using radiofrequency energy to heat tissue and stimulate collagen.', imageBefore: '/images/radiofrequency-treatment-before.png', imageAfter: '/images/radiofrequency-treatment-after.png', dataAiHint: 'skin tightening', serviceType: 'treatment' },
      { id: 'sulcus-filling', name: 'Sulcus Filling (Deep Wrinkle Filling)', description: 'Injectable fillers are used to smooth out deep facial wrinkles and folds, such as nasolabial folds.', imageBefore: '/images/sulcus-filling-before.png', imageAfter: '/images/sulcus-filling-after.png', dataAiHint: 'wrinkle treatment', serviceType: 'treatment' },
      { id: 'white-peeling', name: 'White Peeling', description: 'A gentle chemical peel designed to lighten hyperpigmentation and improve skin radiance.', imageBefore: '/images/white-peeling-before.png', imageAfter: '/images/white-peeling-after.png', dataAiHint: 'skin peel', serviceType: 'treatment' },
      { id: 'wrinkle-fillers', name: 'Wrinkle Fillers', description: 'General term for dermal fillers used to smooth out lines and wrinkles across the face.', imageBefore: '/images/wrinkle-fillers-before.png', imageAfter: '/images/wrinkle-fillers-after.png', dataAiHint: 'woman face', serviceType: 'treatment' },
      { id: 'xanthelasma-treatment', name: 'Xanthelasma Treatment (Plasma Arc)', description: 'Non-surgical removal of yellowish cholesterol deposits around the eyelids using plasma energy.', imageBefore: '/images/xanthelasma-treatment-before.png', imageAfter: '/images/xanthelasma-treatment-after.png', dataAiHint: 'eyelid spots', serviceType: 'treatment' },
    ],
  },
  {
    id: 'body',
    title: 'Body Contouring',
    icon: Activity,
    services: [
      // Surgical
      { id: 'breast-augmentation', name: 'Breast Augmentation', description: 'Increases breast size and enhances shape using implants or fat transfer.', imageBefore: '/images/breast-augmentation-before.png', imageAfter: '/images/breast-augmentation-after.png', dataAiHint: 'woman torso', serviceType: 'operation' },
      { id: 'breast-lift', name: 'Breast Lift', description: 'Raises and firms the breasts by removing excess skin and tightening the surrounding tissue.', imageBefore: '/images/breast-lift-before.png', imageAfter: '/images/breast-lift-after.png', dataAiHint: 'woman chest', serviceType: 'operation' },
      { id: 'breast-reduction', name: 'Breast Reduction', description: 'Reduces the size and weight of large breasts, relieving discomfort and improving proportion.', imageBefore: '/images/breast-reduction-before.png', imageAfter: '/images/breast-reduction-after.png', dataAiHint: 'woman back', serviceType: 'operation' },
      { id: 'breast-reconstruction', name: 'Breast Reconstruction', description: 'Recreates the breast mound after a mastectomy or other trauma.', imageBefore: '/images/breast-reconstruction-before.png', imageAfter: '/images/breast-reconstruction-after.png', dataAiHint: 'woman surgery', serviceType: 'operation' },
      { id: 'arm-lift', name: 'Arm Lift', description: 'Removes excess, sagging skin from the upper arms to create a more toned appearance.', imageBefore: '/images/arm-lift-before.png', imageAfter: '/images/arm-lift-after.png', dataAiHint: 'woman arm', serviceType: 'operation' },
      { id: 'tummy-tuck', name: 'Tummy Tuck (Abdominoplasty)', description: 'Removes excess fat and skin from the abdomen and tightens the abdominal muscles.', imageBefore: '/images/tummy-tuck-before.png', imageAfter: '/images/tummy-tuck-after.png', dataAiHint: 'woman abdomen', serviceType: 'operation' },
      { id: 'liposculpture', name: 'Liposculpture', description: 'A refined form of liposuction that removes fat and re-contours the body for a more athletic, sculpted look.', imageBefore: '/images/liposculpture-before.png', imageAfter: '/images/liposculpture-after.png', dataAiHint: 'woman body', serviceType: 'operation' },
      { id: 'brazilian-butt-lift', name: 'Brazilian Butt Lift (BBL)', description: 'Enhances the size and shape of the buttocks using fat transferred from other areas of the body.', imageBefore: '/images/brazilian-butt-lift-before.png', imageAfter: '/images/brazilian-butt-lift-after.png', dataAiHint: 'woman buttocks', serviceType: 'operation' },
      { id: 'labiaplasty', name: 'Labiaplasty', description: 'Surgical procedure to alter the size or shape of the labia minora or majora.', imageBefore: '/images/labiaplasty-before.png', imageAfter: '/images/labiaplasty-after.png', dataAiHint: 'intimate surgery', serviceType: 'operation' },
      { id: 'thigh-lift', name: 'Thigh Lift', description: 'Reshapes the thighs by reducing excess skin and fat, resulting in smoother skin and better-proportioned contours.', imageBefore: '/images/thigh-lift-before.png', imageAfter: '/images/thigh-lift-after.png', dataAiHint: 'woman legs', serviceType: 'operation' },
      { id: 'gynecomastia', name: 'Gynecomastia (Male Breast Reduction)', description: 'Reduces enlarged breast tissue in men for a flatter, more masculine chest contour.', imageBefore: '/images/gynecomastia-before.png', imageAfter: '/images/gynecomastia-after.png', dataAiHint: 'man chest', serviceType: 'operation' },
      // Non-Surgical
      { id: 'carboxytherapy', name: 'Carboxytherapy', description: 'The therapeutic use of carbon dioxide gas to improve circulation, reduce cellulite, and treat stretch marks.', imageBefore: '/images/carboxytherapy-before.png', imageAfter: '/images/carboxytherapy-after.png', dataAiHint: 'skin therapy', serviceType: 'treatment' },
      { id: 'cellulite-treatment', name: 'Cellulite Treatment', description: 'A variety of non-invasive procedures aimed at reducing the appearance of cellulite.', imageBefore: '/images/cellulite-treatment-before.png', imageAfter: '/images/cellulite-treatment-after.png', dataAiHint: 'woman thigh', serviceType: 'treatment' },
      { id: 'laser-hair-removal', name: 'Laser Hair Removal', description: 'A long-term solution for unwanted hair on the face and body.', imageBefore: '/images/laser-hair-removal-before.png', imageAfter: '/images/laser-hair-removal-after.png', dataAiHint: 'smooth skin', serviceType: 'treatment' },
      { id: 'lipolysis', name: 'Lipolysis', description: 'Injectable treatments that break down and destroy fat cells in targeted areas.', imageBefore: '/images/lipolysis-before.png', imageAfter: '/images/lipolysis-after.png', dataAiHint: 'body contouring', serviceType: 'treatment' },
      { id: 'plasma-arc-skin', name: 'Plasma Arc (Skin Treatments)', description: 'Used for skin tightening, mole removal, and treating scars on the body.', imageBefore: '/images/plasma-arc-skin-before.png', imageAfter: '/images/plasma-arc-skin-after.png', dataAiHint: 'skin rejuvenation', serviceType: 'treatment' },
      { id: 'sclerotherapy', name: 'Sclerotherapy', description: 'A medical procedure used to eliminate varicose veins and spider veins.', imageBefore: '/images/sclerotherapy-before.png', imageAfter: '/images/sclerotherapy-after.png', dataAiHint: 'leg veins', serviceType: 'treatment' },
    ],
  },
  {
    id: 'dentistry',
    title: 'Dentistry',
    icon: Smile,
    services: [
      // Aesthetics
      { id: 'composite-veneers', name: 'Composite Veneers', description: 'Improve your smile with composite resin veneers, applied in a single visit to correct chips and discoloration.', imageBefore: '/images/composite-veneers-before.png', imageAfter: '/images/composite-veneers-after.png', dataAiHint: 'smile teeth', serviceType: 'treatment', dentalSubCategoryTitle: 'AESTHETICS' },
      { id: 'emax-veneers', name: 'E-Max Veneers', description: 'High-strength, aesthetic porcelain veneers for a beautiful and durable smile transformation.', imageBefore: '/images/emax-veneers-before.png', imageAfter: '/images/emax-veneers-after.png', dataAiHint: 'perfect smile', serviceType: 'treatment', dentalSubCategoryTitle: 'AESTHETICS' },
      { id: 'teeth-whitening', name: 'Teeth Whitening', description: 'Brighten your smile with our professional in-office or take-home teeth whitening solutions.', imageBefore: '/images/teeth-whitening-before.png', imageAfter: '/images/teeth-whitening-after.png', dataAiHint: 'white teeth', serviceType: 'treatment', dentalSubCategoryTitle: 'AESTHETICS' },
      // Prosthetics
      { id: 'crowns', name: 'Crowns', description: 'A dental cap that completely covers a damaged tooth to restore its shape, size, strength, and appearance.', imageBefore: '/images/crowns-before.png', imageAfter: '/images/crowns-after.png', dataAiHint: 'dental crown', serviceType: 'treatment', dentalSubCategoryTitle: 'PROSTHETICS' },
      { id: 'dental-bridges', name: 'Dental Bridges', description: 'Bridges the gap created by one or more missing teeth.', imageBefore: '/images/dental-bridges-before.png', imageAfter: '/images/dental-bridges-after.png', dataAiHint: 'dental bridge', serviceType: 'treatment', dentalSubCategoryTitle: 'PROSTHETICS' },
      { id: 'dentures', name: 'Dentures', description: 'Removable replacements for missing teeth and surrounding tissues.', imageBefore: '/images/dentures-before.png', imageAfter: '/images/dentures-after.png', dataAiHint: 'denture smile', serviceType: 'treatment', dentalSubCategoryTitle: 'PROSTHETICS' },
      // Orthodontics
      { id: 'fixed-braces', name: 'Fixed Braces', description: 'Traditional orthodontic treatment to correct misaligned teeth and jaws.', imageBefore: '/images/fixed-braces-before.png', imageAfter: '/images/fixed-braces-after.png', dataAiHint: 'teeth braces', serviceType: 'treatment', dentalSubCategoryTitle: 'ORTHODONTICS' },
      { id: 'invisalign', name: 'Invisalign', description: 'A clear-aligner system used to straighten teeth as an alternative to traditional braces.', imageBefore: '/images/invisalign-before.png', imageAfter: '/images/invisalign-after.png', dataAiHint: 'clear aligner', serviceType: 'treatment', dentalSubCategoryTitle: 'ORTHODONTICS' },
      { id: 'removable-appliances', name: 'Removable Appliances', description: 'Custom-fitted devices used to move teeth or maintain their position after orthodontic treatment.', imageBefore: '/images/removable-appliances-before.png', imageAfter: '/images/removable-appliances-after.png', dataAiHint: 'dental retainer', serviceType: 'treatment', dentalSubCategoryTitle: 'ORTHODONTICS' },
      // Therapy
      { id: 'infected-teeth-treatment', name: 'Infected Teeth Treatment', description: 'Root canal therapy to treat infection within the pulp of a tooth and save it from extraction.', imageBefore: '/images/infected-teeth-treatment-before.png', imageAfter: '/images/infected-teeth-treatment-after.png', dataAiHint: 'dental xray', serviceType: 'treatment', dentalSubCategoryTitle: 'THERAPY' },
      { id: 'tartar-cleaning', name: 'Tartar Cleaning', description: 'Professional dental cleaning to remove tartar and plaque buildup from the teeth.', imageBefore: '/images/tartar-cleaning-before.png', imageAfter: '/images/tartar-cleaning-after.png', dataAiHint: 'dental cleaning', serviceType: 'treatment', dentalSubCategoryTitle: 'THERAPY' },
      { id: 'tooth-fillings', name: 'Tooth Fillings', description: 'Restores decayed teeth by filling the cavity with composite or other materials.', imageBefore: '/images/tooth-fillings-before.png', imageAfter: '/images/tooth-fillings-after.png', dataAiHint: 'tooth filling', serviceType: 'treatment', dentalSubCategoryTitle: 'THERAPY' },
      // Surgery
      { id: 'apical-resection', name: 'Apical Resection', description: 'A surgical procedure to remove the tip of a tooth\'s root and any infected tissue.', imageBefore: '/images/apical-resection-before.png', imageAfter: '/images/apical-resection-after.png', dataAiHint: 'dental surgery', serviceType: 'operation', dentalSubCategoryTitle: 'SURGERY' },
      { id: 'dental-implants', name: 'Dental Implants', description: 'A permanent solution for missing teeth, providing a strong foundation for replacement teeth.', imageBefore: '/images/dental-implants-before.png', imageAfter: '/images/dental-implants-after.png', dataAiHint: 'dental implant', serviceType: 'operation', dentalSubCategoryTitle: 'SURGERY' },
      { id: 'tooth-extraction', name: 'Tooth Extraction', description: 'The removal of a tooth from its socket in the bone, often due to decay, damage, or crowding.', imageBefore: '/images/tooth-extraction-before.png', imageAfter: '/images/tooth-extraction-after.png', dataAiHint: 'tooth extraction', serviceType: 'operation', dentalSubCategoryTitle: 'SURGERY' },
      // Pedodontics
      { id: 'milk-teeth-treatment', name: 'Milk Teeth Treatment', description: 'Specialized care for children\'s primary teeth, including fillings and pulp therapy.', imageBefore: '/images/milk-teeth-treatment-before.png', imageAfter: '/images/milk-teeth-treatment-after.png', dataAiHint: 'child smile', serviceType: 'treatment', dentalSubCategoryTitle: 'PEDODONTICS' },
      { id: 'tooth-fluoridation', name: 'Tooth Fluoridation', description: 'Application of fluoride to teeth to help prevent decay.', imageBefore: '/images/tooth-fluoridation-before.png', imageAfter: '/images/tooth-fluoridation-after.png', dataAiHint: 'child dentist', serviceType: 'treatment', dentalSubCategoryTitle: 'PEDODONTICS' },
      { id: 'tooth-sealants', name: 'Tooth Sealants', description: 'A thin, protective coating applied to the chewing surfaces of the back teeth to prevent cavities.', imageBefore: '/images/tooth-sealants-before.png', imageAfter: '/images/tooth-sealants-after.png', dataAiHint: 'healthy teeth', serviceType: 'treatment', dentalSubCategoryTitle: 'PEDODONTICS' },
    ],
  },
];

export const allServices: ServiceItem[] = serviceData.reduce((acc, category) => {
  return acc.concat(category.services);
}, [] as ServiceItem[]);

    
