
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

export const serviceData: ServiceCategory[] = [
  {
    id: "face",
    title: "FACE",
    icon: Smile,
    services: [
      { 
        id: "rhinoplasty", 
        name: "Nose Surgery (Rhinoplasty)", 
        description: "Rhinoplasty, commonly known as a nose job, is a surgical procedure to reshape or resize the nose, aiming to improve facial harmony or correct breathing problems. It involves altering the bone and cartilage structure of the nose. This can be done through incisions hidden inside the nostrils (closed rhinoplasty) or a small incision across the columella (open rhinoplasty). General anesthesia is typically used. \n\nRecovery involves wearing a splint for about a week, with initial swelling and bruising lasting 1-2 weeks. Most significant swelling subsides within a few months, but subtle changes can continue for up to a year. Patients usually return to light activities in 1-2 weeks. \n\nPost-treatment, it's crucial to keep your head elevated, use cold compresses as advised, and attend all follow-up appointments. Avoid strenuous activities, blowing your nose forcefully, and wearing glasses that rest heavily on the nasal bridge for several weeks.", 
        imageBefore: "/images/rhinoplasty.png", 
        imageAfter: "/images/rhinoplasty2.png", 
        dataAiHint: "nose surgery", 
        serviceType: "operation" 
      },
      { 
        id: "nose-reshaping", 
        name: "Nose Reshaping", 
        description: "Non-surgical nose reshaping, also known as a 'liquid nose job,' uses injectable dermal fillers (typically hyaluronic acid) to subtly alter the nose's shape. It can smooth out bumps, lift the tip, or improve symmetry without surgery. The procedure involves precise injections after a topical anesthetic may be applied, taking about 15-30 minutes. \n\nRecovery is minimal, with little to no downtime. Patients might experience mild swelling, redness, or bruising at injection sites, which usually resolves within a few days. Results are immediate but temporary, lasting 6-18 months depending on the filler. \n\nPost-treatment, avoid touching or massaging the treated area for a few days unless instructed by your practitioner. It's also advisable to avoid heavy glasses resting on the nose and strenuous exercise for 24-48 hours.", 
        imageBefore: "/images/nose-reshaping.png", 
        imageAfter: "/images/nose-reshaping2.png", 
        dataAiHint: "nose reshaping", 
        serviceType: "treatment" 
      },
      { 
        id: "otoplasty", 
        name: "Ear Reshaping (Otoplasty)", 
        description: "Otoplasty is a surgical procedure to alter the size, position, or shape of the ears. It's commonly performed to 'pin back' prominent ears or to correct other ear deformities. Incisions are typically made on the back surface of the ear or within the inner creases. The cartilage is then sculpted and secured with internal, non-removable stitches. The procedure can be done under local or general anesthesia. \n\nRecovery involves wearing a supportive headband for several days to weeks, especially at night, to protect the ears. Mild discomfort, swelling, and bruising are common for 1-2 weeks. Most patients return to work or school within a week. \n\nPost-treatment, it's important to keep the incisions clean and dry, wear the headband as directed, and avoid activities that could put pressure or impact on the ears for several weeks.", 
        imageBefore: "/images/otoplasty.png", 
        imageAfter: "/images/otoplasty2.png", 
        dataAiHint: "ear reshaping", 
        serviceType: "operation" 
      },
      { 
        id: "hair-transplant", 
        name: "Hair Transplant", 
        description: "Hair transplantation is a surgical technique that moves individual hair follicles from a part of the body called the 'donor site' (typically the back or sides of the head) to a bald or balding part of the body known as the 'recipient site.' The two main techniques are Follicular Unit Transplantation (FUT or strip method) and Follicular Unit Extraction (FUE). \n\nRecovery varies; the scalp may be tender, and you might need pain medication for a few days. Scabs will form around the transplanted hairs and typically fall off within 7-10 days. Transplanted hairs often shed within 2-4 weeks, with new growth appearing in 3-4 months and full results visible in 12-18 months. \n\nPost-treatment, follow specific washing instructions carefully, avoid strenuous activity for about a week, and protect the scalp from sun exposure. Do not pick at scabs.", 
        imageBefore: "/images/hair-transplant.png", 
        imageAfter: "/images/hair-transplant2.png", 
        dataAiHint: "hair transplant", 
        serviceType: "operation" 
      },
      { 
        id: "beard-transplant", 
        name: "Beard Transplant", 
        description: "A beard transplant is a type of hair transplant procedure specifically designed to enhance facial hair density, create a fuller beard, or fill in patchy areas. Hair follicles are typically harvested from the back of the scalp (donor area) using FUE techniques and then meticulously implanted into the beard region. \n\nRecovery is similar to scalp hair transplants. Expect some redness, swelling, and tiny scabs in the recipient and donor areas for 5-10 days. The transplanted hairs will shed after 2-4 weeks, with new beard growth starting around 3-4 months. Full results are typically seen in 9-12 months. \n\nPost-treatment care involves gentle cleansing of the face, avoiding shaving the transplanted area for a specified period (usually 10-14 days), and protecting the skin from direct sun. Avoid strenuous activities for the first week.", 
        imageBefore: "/images/beard-transplant.png", 
        imageAfter: "/images/beard-transplant2.png", 
        dataAiHint: "beard transplant", 
        serviceType: "operation" 
      },
      { 
        id: "eyebrow-transplant", 
        name: "Eyebrow Transplant", 
        description: "An eyebrow transplant is a cosmetic procedure to restore or enhance the fullness and shape of eyebrows. Similar to other hair transplants, follicles are harvested from a donor site (usually the scalp) and implanted into the eyebrow area. This provides a permanent and natural-looking solution for thin, sparse, or missing eyebrows. \n\nRecovery involves minimal discomfort. Small scabs may form around the transplanted hairs, typically falling off within a week. Some initial shedding of transplanted hairs is normal, followed by new growth in 3-4 months. Full eyebrow density is usually achieved within 6-9 months. \n\nPost-treatment, keep the area clean and avoid touching or rubbing the eyebrows. Follow specific instructions for washing and care. Avoid makeup on the area for the first week.", 
        imageBefore: "/images/eyebrow-transplant.png", 
        imageAfter: "/images/eyebrow-transplant2.png", 
        dataAiHint: "eyebrow transplant", 
        serviceType: "operation" 
      },
      { 
        id: "brow-lift", 
        name: "Brow Lift", 
        description: "A brow lift, also known as a forehead lift, is a surgical procedure to elevate sagging eyebrows, reduce horizontal forehead wrinkles, and minimize frown lines between the eyebrows. This results in a more youthful, alert, and refreshed appearance. Techniques can vary, including endoscopic lifts with small incisions or traditional coronal incisions. \n\nRecovery involves swelling and bruising, which typically peak in the first few days and subside over 1-2 weeks. Sutures or staples are usually removed within 7-10 days. Most patients can return to light activities within a week and resume normal activities within a few weeks. \n\nPost-treatment, keep your head elevated, use cold compresses to reduce swelling, and avoid strenuous exercise for several weeks. Follow all care instructions for incision sites.", 
        imageBefore: "/images/brow-lift.png", 
        imageAfter: "/images/brow-lift2.png", 
        dataAiHint: "brow lift", 
        serviceType: "operation" 
      },
      { 
        id: "blepharoplasty", 
        name: "Eyelid Surgery (Blepharoplasty)", 
        description: "Blepharoplasty is a surgical procedure to improve the appearance of the eyelids. It can be performed on the upper lids, lower lids, or both. Upper blepharoplasty removes excess skin and fat that can cause droopy eyelids and sometimes impair vision. Lower blepharoplasty addresses puffiness, bags, and fine wrinkles under the eyes. Incisions are made in the natural creases of the eyelids or inside the lower eyelid. \n\nRecovery typically involves swelling, bruising, and some discomfort for 1-2 weeks. Stitches are usually removed within a week. Most people return to work and light activities within 10-14 days. \n\nPost-treatment, use prescribed eye drops or ointments, apply cold compresses, wear sunglasses to protect from sun and wind, and avoid activities that strain the eyes, like reading for long periods initially.", 
        imageBefore: "/images/blepharoplasty (2).png", 
        imageAfter: "/images/blepharoplasty (3).png", 
        dataAiHint: "eyelid surgery", 
        serviceType: "operation" 
      },
      { 
        id: "face-lift", 
        name: "Face Lift (Rhytidectomy)", 
        description: "A facelift, or rhytidectomy, is a comprehensive surgical procedure designed to reduce visible signs of aging in the face and neck, such as sagging skin, deep creases, jowls, and a 'turkey neck.' It involves tightening underlying facial muscles and tissues and redraping the skin. Incisions are typically made around the ears and along the hairline to minimize visible scarring. \n\nRecovery is significant. Expect considerable swelling and bruising for the first 1-2 weeks. Drains may be used for a day or two. Bandages are applied initially. Most patients feel comfortable being seen in public after 2-3 weeks, though full recovery and final results can take several months. \n\nPost-treatment, rest with head elevated, avoid strenuous activity for at least 4-6 weeks, attend all follow-up appointments, and protect your skin from the sun. Follow meticulous wound care instructions.", 
        imageBefore: "/images/face-lift.png", 
        imageAfter: "/images/face-lift2.png", 
        dataAiHint: "face lift", 
        serviceType: "operation" 
      },
      { 
        id: "chin-reshaping-genioplasty", 
        name: "Chin Reshaping (Genioplasty)", 
        description: "Genioplasty is a surgical procedure to alter the shape or size of the chin, improving facial balance and profile. It can involve repositioning the chin bone (sliding genioplasty) or using implants to augment the chin. Incisions are often made inside the mouth or under the chin. \n\nRecovery involves swelling and some discomfort. A liquid or soft diet may be necessary for a few days. Stitches inside the mouth dissolve. Most swelling subsides in a few weeks, but final results may take several months to fully appear. Return to work is typically possible within 1-2 weeks. \n\nPost-treatment, follow dietary restrictions, maintain good oral hygiene if incisions are internal, and avoid strenuous activities or impact to the chin for several weeks.", 
        imageBefore: "/images/chin-reshaping-genioplasty.png", 
        imageAfter: "/images/chin-reshaping-genioplasty2.png", 
        dataAiHint: "chin reshaping", 
        serviceType: "operation" 
      },
      { 
        id: "lip-reshaping", 
        name: "Lip Reshaping", 
        description: "Lip reshaping, often achieved with dermal fillers (like hyaluronic acid), enhances lip volume, defines the vermillion border, corrects asymmetries, or reduces fine lines around the mouth. Surgical options like lip lifts or fat transfer also exist for more permanent results. Filler treatments are quick, involving injections after a topical anesthetic. \n\nRecovery for fillers is minimal, with possible mild swelling, bruising, or tenderness for a few days. Results are immediate. Surgical lip reshaping has a longer recovery of 1-2 weeks for initial healing. \n\nPost-filler treatment, avoid excessive touching or massaging of the lips for 24-48 hours. Avoid extreme temperatures and alcohol for a day. For surgical procedures, follow specific wound care and activity restrictions.", 
        imageBefore: "/images/lip-reshaping.png", 
        imageAfter: "/images/lip-reshaping2.png", 
        dataAiHint: "lip reshaping", 
        serviceType: "treatment" 
      },
      { 
        id: "xanthelasma-plasma-arc", 
        name: "Xanthelasma, Plasma Arc", 
        description: "Plasma Arc treatment is a non-surgical method for removing xanthelasma, which are yellowish cholesterol deposits that appear on or around the eyelids. The plasma device creates a tiny electrical arc that sublimates (turns solid tissue into gas) the targeted skin lesions with high precision, minimizing damage to surrounding tissue. \n\nRecovery involves the formation of small scabs over the treated areas, which typically fall off within 5-10 days revealing new, healthy skin underneath. Some redness and mild swelling may occur. Multiple sessions may be needed for complete removal. \n\nPost-treatment, keep the treated area clean and dry, apply any prescribed ointments, and avoid picking at the scabs. Sun protection is crucial to prevent hyperpigmentation once the scabs heal.", 
        imageBefore: "/images/xanthelasma-plasma-arc.png", 
        imageAfter: "/images/xanthelasma-plasma-arc2.png", 
        dataAiHint: "xanthelasma treatment", 
        serviceType: "treatment" 
      },
      { 
        id: "multivitamin-treatment", 
        name: "Multivitamin Treatment", 
        description: "Multivitamin facial treatments, often delivered via mesotherapy or specialized facials, involve infusing the skin with a potent cocktail of vitamins, minerals, amino acids, and antioxidants. This nourishes, revitalizes, and hydrates the skin, improving its overall health, tone, and radiance. The specific formulation is tailored to individual skin concerns. \n\nRecovery is typically minimal with little to no downtime. Some patients may experience slight redness or sensitivity immediately after the treatment, which usually subsides within a few hours. \n\nPost-treatment, it's generally advised to avoid direct sun exposure, harsh skincare products, and saunas for 24-48 hours. Keep the skin hydrated and follow any specific aftercare advice provided by your aesthetician.", 
        imageBefore: "/images/multivitamin-treatment.png", 
        imageAfter: "/images/multivitamin-treatment2.png", 
        dataAiHint: "facial treatment", 
        serviceType: "treatment" 
      },
      { 
        id: "eyelids-plasma-arc", 
        name: "Eyelids, Plasma Arc", 
        description: "Plasma Arc technology, also known as plasma pen treatment or non-surgical blepharoplasty, is used to tighten loose or sagging eyelid skin and reduce fine lines around the eyes. It works by creating a series_of tiny plasma arcs on the skin's surface, causing immediate contraction and stimulating collagen production for long-term tightening. \n\nRecovery involves the formation of small carbon crusts (dots) on the treated area, which typically fall off within 5-7 days. Swelling and redness are common for a few days. The skin underneath will be pink and sensitive. \n\nPost-treatment, keep the area clean and dry, avoid picking the crusts, and use prescribed aftercare products. Strict sun avoidance and use of high SPF sunscreen are essential for several weeks to prevent pigmentation changes.", 
        imageBefore: "/images/eyelids-plasma-arc.png", 
        imageAfter: "/images/eyelids-plasma-arc2.png", 
        dataAiHint: "eyelid plasma", 
        serviceType: "treatment" 
      },
      { 
        id: "cheekbone-reshaping", 
        name: "Cheekbone Reshaping", 
        description: "Cheekbone reshaping aims to enhance or restore volume and definition to the cheeks, creating a more sculpted and youthful facial contour. This is commonly achieved non-surgically with dermal fillers (e.g., hyaluronic acid, calcium hydroxylapatite) injected strategically to lift and contour. Surgical options include cheek implants or fat grafting. \n\nRecovery for filler-based cheek reshaping is minimal, with possible mild swelling, bruising, or tenderness for a few days. Results are immediate. Surgical options have a longer recovery of 1-2 weeks or more. \n\nPost-filler treatment, avoid strenuous exercise for 24 hours and excessive touching of the area. For surgical procedures, follow specific post-operative care instructions.", 
        imageBefore: "/images/cheekbone-reshaping.png", 
        imageAfter: "/images/cheekbone-reshaping2.png", 
        dataAiHint: "cheekbone contour", 
        serviceType: "treatment" 
      },
      { 
        id: "microdermabrasion", 
        name: "Microdermabrasion", 
        description: "Microdermabrasion is a non-invasive exfoliation treatment that gently removes the outermost layer of dead skin cells. It uses a specialized applicator with an abrasive surface or fine crystals to buff the skin, revealing a smoother, brighter, and more even complexion. It can help improve skin texture, reduce fine lines, unclog pores, and minimize superficial hyperpigmentation. \n\nRecovery is immediate with no downtime. Skin may appear slightly pink or feel sensitive for a few hours post-treatment. \n\nPost-treatment, it's important to keep the skin hydrated and protected with sunscreen, as it will be more sensitive to sun exposure. Avoid harsh exfoliants or retinoids for a few days.", 
        imageBefore: "/images/microdermabrasion.png", 
        imageAfter: "/images/microdermabrasion2.png", 
        dataAiHint: "skin exfoliation", 
        serviceType: "treatment" 
      },
      { 
        id: "jawline-contouring", 
        name: "Jawline Contouring", 
        description: "Jawline contouring uses injectable dermal fillers or other techniques (like thread lifts or energy-based devices) to define, sculpt, and enhance the jawline. This can create a sharper, more youthful, and balanced facial profile by improving definition, reducing the appearance of jowls, or augmenting a weak jawline. \n\nRecovery for filler-based contouring is minimal. Some swelling, bruising, or tenderness at injection sites may occur, typically resolving in a few days. Results are visible immediately. \n\nPost-treatment, avoid massaging the treated area unless instructed, and refrain from strenuous exercise for 24-48 hours. Follow specific aftercare provided for other techniques like thread lifts.", 
        imageBefore: "/images/jawline-contouring.png", 
        imageAfter: "/images/jawline-contouring2.png", 
        dataAiHint: "jawline definition", 
        serviceType: "treatment" 
      },
      { 
        id: "wrinkle-fillers", 
        name: "Wrinkle Fillers", 
        description: "Dermal fillers, often made of hyaluronic acid, are injectable treatments used to smooth out wrinkles, lines, and facial folds, as well as restore lost volume and enhance facial contours. Common areas include nasolabial folds, marionette lines, lips, and cheeks. The procedure is quick, with injections precisely placed to achieve the desired effect. \n\nRecovery involves minimal downtime. Patients may experience temporary swelling, redness, bruising, or tenderness at the injection sites, which usually subsides within a few days. Results are visible immediately and can last from 6 months to over a year, depending on the filler used. \n\nPost-treatment, avoid strenuous activity, excessive sun or heat exposure, and alcohol for 24 hours. Do not rub or massage the treated areas unless specifically advised.", 
        imageBefore: "/images/wrinkle-fillers1.png", 
        imageAfter: "/images/wrinkle-fillers2.png", 
        dataAiHint: "dermal fillers", 
        serviceType: "treatment" 
      },
      { 
        id: "prp-face", 
        name: "PRP for the Face", 
        description: "Platelet-Rich Plasma (PRP) therapy for the face, also known as a 'vampire facial' when combined with microneedling, uses your body's own growth factors to rejuvenate the skin. A small amount of blood is drawn, processed to concentrate the platelets, and then this PRP is injected or applied topically (often after microneedling) to the facial skin. It stimulates collagen production, improves skin texture, reduces fine lines, and promotes a youthful glow. \n\nRecovery involves some redness and mild swelling for 1-3 days, similar to a sunburn. If combined with microneedling, skin may feel tight and sensitive. Results develop gradually over several weeks to months as collagen is produced. \n\nPost-treatment, avoid sun exposure, harsh skincare products, and makeup for 24-48 hours. Keep skin clean and hydrated. Follow specific aftercare instructions.", 
        imageBefore: "/images/prp-face.png", 
        imageAfter: "/images/prp-face2.png", 
        dataAiHint: "facial rejuvenation", 
        serviceType: "treatment" 
      },
      { 
        id: "dark-circles-eyes", 
        name: "Dark Circles Under the Eyes", 
        description: "Treatments for dark circles under the eyes aim to address their underlying causes, which can include volume loss (tear troughs), thin skin, pigmentation, or vascular issues. Options include tear trough fillers (hyaluronic acid) to restore volume, topical creams with ingredients like Vitamin C or retinoids, chemical peels, laser treatments, or PRP therapy. \n\nRecovery depends on the chosen treatment. Fillers may cause temporary swelling or bruising. Peels and lasers can result in redness and peeling for several days. \n\nPost-treatment, follow specific aftercare for the chosen method. This often includes sun protection, gentle skincare, and avoiding irritants. Consistent home care and lifestyle adjustments (e.g., adequate sleep) can also help manage dark circles.", 
        imageBefore: "/images/dark-circles-eyes.png", 
        imageAfter: "/images/dark-circles-eyes2.png", 
        dataAiHint: "eye treatment", 
        serviceType: "treatment" 
      },
      { 
        id: "prp-hair", 
        name: "PRP for Hair", 
        description: "Platelet-Rich Plasma (PRP) therapy for hair loss involves injecting a concentration of your own platelets, rich in growth factors, directly into the scalp. This stimulates dormant or weakened hair follicles, promoting new hair growth, increasing hair thickness, and slowing down hair thinning. A small sample of blood is drawn and processed to extract the PRP. \n\nRecovery is minimal. The scalp may feel tender or slightly swollen for a day or two. Patients can typically resume normal activities immediately or the next day. A series of treatments (usually 3-4 sessions, 4-6 weeks apart) is often needed for optimal results, with maintenance treatments thereafter. \n\nPost-treatment, avoid washing your hair for 24 hours. Refrain from using harsh chemical hair treatments for a few days. Mild pain relievers can be used if needed.", 
        imageBefore: "/images/prp-hair.png", 
        imageAfter: "/images/prp-hair2.png", 
        dataAiHint: "hair restoration", 
        serviceType: "treatment" 
      },
      { 
        id: "white-peeling", 
        name: "White Peeling", 
        description: "White peeling, often referring to depigmenting or lightening chemical peels, is designed to treat hyperpigmentation issues such as melasma, sun spots, age spots, and post-inflammatory hyperpigmentation. These peels use specific acids (e.g., tranexamic acid, kojic acid, phytic acid) to inhibit melanin production and exfoliate pigmented skin cells, leading to a more even and brighter skin tone. \n\nRecovery involves a period of visible peeling or flaking, which can last from a few days to over a week, depending on the peel's strength. Redness, sensitivity, and dryness are common. Multiple sessions may be required. \n\nPost-treatment, strict sun avoidance and daily use of high-SPF broad-spectrum sunscreen are critical to prevent recurrence of pigmentation. Gentle cleansing and moisturizing are essential. Avoid picking at peeling skin.", 
        imageBefore: "/images/white-peeling.png", 
        imageAfter: "/images/white-peeling2.png", 
        dataAiHint: "chemical peel", 
        serviceType: "treatment" 
      },
      { 
        id: "microneedling", 
        name: "Microneedling", 
        description: "Microneedling, also known as collagen induction therapy, is a minimally invasive procedure that uses a device with fine, sterile needles to create controlled micro-injuries in the skin. This process stimulates the body's natural wound healing response, leading to increased collagen and elastin production. It improves skin texture, reduces scars (acne, surgical), fine lines, wrinkles, and pore size, and enhances product absorption. \n\nRecovery involves redness and mild swelling, similar to a sunburn, for 24-72 hours. Skin may feel tight and sensitive. Some pinpoint bleeding during the procedure is normal. Results are progressive, with optimal effects seen after a series of treatments. \n\nPost-treatment, keep the skin clean, avoid makeup for 24 hours, and use gentle, hydrating skincare products. Sun protection is crucial. Avoid exfoliants and active ingredients like retinoids for a few days.", 
        imageBefore: "/images/microneedling1.png", 
        imageAfter: "/images/microneedling2.png", 
        dataAiHint: "skin needling", 
        serviceType: "treatment" 
      },
      { 
        id: "radiofrequency", 
        name: "Radiofrequency", 
        description: "Radiofrequency (RF) treatments use controlled RF energy to heat the deeper layers of the skin (dermis) without damaging the outer layer (epidermis). This heat stimulates the production of new collagen and elastin, leading to skin tightening, wrinkle reduction, and improved skin firmness and texture. It can be used on the face and body. \n\nRecovery is typically minimal with little to no downtime. Skin may appear slightly red or feel warm immediately after treatment, but this usually subsides within a few hours. Results are often gradual, appearing over several weeks to months as new collagen forms. A series of treatments is usually recommended. \n\nPost-treatment, no specific aftercare is usually needed beyond gentle skincare and sun protection. Patients can typically resume normal activities immediately.", 
        imageBefore: "/images/radiofrequency1.png", 
        imageAfter: "/images/radiofrequency2.png", 
        dataAiHint: "skin tightening", 
        serviceType: "treatment" 
      },
      { 
        id: "sulcus-filling", 
        name: "Sulcus Filling (Deep Wrinkle Filling)", 
        description: "Sulcus filling refers to the use of dermal fillers to treat deep wrinkles, facial folds, or depressions, such as nasolabial folds (smile lines), marionette lines, or deep forehead furrows. Hyaluronic acid fillers are commonly used to add volume to these areas, smoothing out the skin and creating a more youthful appearance. The filler is injected precisely into the targeted sulcus. \n\nRecovery is minimal. Patients might experience temporary swelling, redness, bruising, or tenderness at the injection sites, typically resolving within a few days. Results are visible immediately and can last for several months to over a year. \n\nPost-treatment, avoid strenuous activity, excessive sun or heat, and alcohol for 24 hours. Do not rub or massage the treated areas unless specifically advised by your practitioner.", 
        imageBefore: "/images/sulcus-filling.png", 
        imageAfter: "/images/sulcus-filling2.png", 
        dataAiHint: "wrinkle treatment", 
        serviceType: "treatment" 
      },
      { 
        id: "chin-reshaping", 
        name: "Chin Reshaping", 
        description: "Non-surgical chin reshaping involves the use of injectable dermal fillers to enhance chin projection, improve definition, correct asymmetries, or create a more balanced facial profile without surgery. Hyaluronic acid fillers are commonly used, strategically injected to achieve the desired contour. The procedure is quick and offers immediate results. \n\nRecovery is minimal. Some swelling, bruising, or tenderness at the injection sites may occur but usually subsides within a few days. \n\nPost-treatment, avoid strenuous exercise and excessive touching or massaging of the chin for 24-48 hours. Follow any specific aftercare instructions provided by your practitioner. Results are temporary, typically lasting 9-18 months.", 
        imageBefore: "/images/chin-reshaping.png", 
        imageAfter: "/images/chin-reshaping2.png", 
        dataAiHint: "chin augmentation", 
        serviceType: "treatment" 
      },
    ],
  },
  {
    id: "breasts",
    title: "BREASTS (Female)",
    icon: HeartHandshake,
    services: [
      { 
        id: "breast-augmentation", 
        name: "Breast Augmentation", 
        description: "Breast augmentation is a surgical procedure to increase breast size and enhance shape using implants (saline or silicone) or, in some cases, fat transfer (fat grafting). It can improve breast proportion, correct asymmetry, or restore breast volume lost after pregnancy or weight loss. Incision locations and implant placement are customized. Performed under general anesthesia. \n\nRecovery involves soreness, swelling, and bruising for several weeks. A surgical bra or compression garment is worn. Most patients return to light activities in 1-2 weeks and full activities, including strenuous exercise, in 4-6 weeks. Final results and breast shape settle over several months. \n\nPost-treatment, follow activity restrictions, care for incision sites as directed, attend follow-up appointments, and perform any recommended breast massage if advised.", 
        imageBefore: "/images/breast-augmentation.png", 
        imageAfter: "/images/breast-augmentation2.png", 
        dataAiHint: "breast augmentation", 
        serviceType: "operation" 
      },
      { 
        id: "breast-lift", 
        name: "Breast Lift (Mastopexy)", 
        description: "A breast lift, or mastopexy, is a surgical procedure to raise and reshape sagging breasts by removing excess skin and tightening the surrounding tissue. It can improve breast firmness, position the nipples higher, and restore a more youthful breast contour. It does not significantly change breast size but can be combined with augmentation or reduction. Performed under general anesthesia. \n\nRecovery involves swelling, bruising, and discomfort for 1-2 weeks. A surgical bra is worn for support. Stitches are usually removed or dissolve. Return to work and light activities typically occurs within 1-2 weeks, with strenuous activities avoided for 4-6 weeks. \n\nPost-treatment, wear supportive garments as instructed, avoid heavy lifting, care for incisions, and protect scars from sun exposure.", 
        imageBefore: "/images/breast-lift.png", 
        imageAfter: "/images/breast-lift2.png", 
        dataAiHint: "breast lift", 
        serviceType: "operation" 
      },
      { 
        id: "breast-reduction", 
        name: "Breast Reduction", 
        description: "Breast reduction surgery (reduction mammaplasty) is performed to alleviate physical discomfort (back, neck, shoulder pain; skin irritation) and emotional distress caused by overly large breasts. The procedure involves removing excess breast fat, glandular tissue, and skin to achieve a breast size more in proportion with the body. The nipple and areola are repositioned higher. Performed under general anesthesia. \n\nRecovery includes significant swelling, bruising, and soreness. Drains may be used. A surgical bra provides support. Patients usually take 1-2 weeks off work. Strenuous activities are restricted for 4-6 weeks. \n\nPost-treatment, follow all wound care instructions, wear supportive bras, avoid heavy lifting, and attend follow-up visits. Scar maturation can take up to a year.", 
        imageBefore: "/images/breast-reduction.png", 
        imageAfter: "/images/breast-reduction2.png", 
        dataAiHint: "breast reduction", 
        serviceType: "operation" 
      },
      { 
        id: "breast-reconstruction", 
        name: "Breast Reconstruction", 
        description: "Breast reconstruction is a surgical procedure to recreate the shape, appearance, and size of a breast, commonly performed after mastectomy (breast removal due to cancer) or lumpectomy. Techniques include using implants, the patient's own tissue (autologous flap reconstruction), or a combination. The goal is to restore a natural-looking breast mound and improve body image and confidence. It can be done at the time of mastectomy (immediate) or later (delayed). \n\nRecovery varies greatly depending on the technique used, ranging from a few weeks for simpler implant procedures to several months for complex flap reconstructions. Multiple stages may be required. \n\nPost-treatment care is extensive and specific to the type of reconstruction. It involves managing drains, incision care, activity restrictions, and wearing supportive garments. Emotional support is also key.", 
        imageBefore: "/images/breast-reconstruction.png", 
        imageAfter: "/images/breast-reconstruction2.png", 
        dataAiHint: "breast reconstruction", 
        serviceType: "operation" 
      },
    ],
  },
  {
    id: "body",
    title: "BODY",
    icon: PersonStanding,
    services: [
      { 
        id: "arm-lift", 
        name: "Arm Lift (Brachioplasty)", 
        description: "An arm lift, or brachioplasty, is a surgical procedure to remove excess sagging skin and fat from the upper arms, often referred to as 'bat wings.' This results in a firmer, more toned, and youthful arm contour. Incisions are typically made on the inside or back of the arm, potentially extending from the underarm to the elbow. Liposuction may be used in conjunction. Performed under general anesthesia. \n\nRecovery involves swelling, bruising, and discomfort. Compression garments are worn for several weeks. Drains may be placed temporarily. Return to light activities in 1-2 weeks; avoid heavy lifting and strenuous arm movements for 4-6 weeks. \n\nPost-treatment, keep arms elevated when possible, care for incisions, wear compression garments as directed, and gradually resume arm mobility exercises as advised.", 
        imageBefore: "/images/arm-lift.png", 
        imageAfter: "/images/arm-lift2.png", 
        dataAiHint: "arm lift", 
        serviceType: "operation" 
      },
      { 
        id: "tummy-tuck", 
        name: "Tummy Tuck (Abdominoplasty)", 
        description: "An abdominoplasty, or tummy tuck, is a surgical procedure to remove excess skin and fat from the abdomen and tighten weakened or separated abdominal muscles (diastasis recti). This results in a flatter, firmer, and more contoured midsection. It's suitable for individuals with loose skin after pregnancy or significant weight loss. Incisions are typically made low on the abdomen, from hip to hip, and around the navel. \n\nRecovery is significant, involving swelling, bruising, and discomfort. Drains are common for several days. A compression garment is worn for weeks. Patients usually need 2-4 weeks off work and must avoid strenuous activity for 6-8 weeks. \n\nPost-treatment, walk slightly bent at the waist initially, care for drains and incisions, wear the compression garment, and avoid heavy lifting. Full results take several months to appear as swelling subsides.", 
        imageBefore: "/images/tummy-tuck.png", 
        imageAfter: "/images/tummy-tuck2.png", 
        dataAiHint: "tummy tuck", 
        serviceType: "operation" 
      },
      { 
        id: "liposculpture", 
        name: "Liposculpture", 
        description: "Liposculpture is an advanced form of liposuction that focuses on removing unwanted fat deposits while simultaneously contouring and shaping the body for a more defined, athletic, and aesthetically pleasing silhouette. It requires a high degree of surgical skill and artistry to selectively remove and sometimes redistribute fat. Common areas include abdomen, flanks, thighs, arms, and neck. \n\nRecovery involves wearing compression garments for several weeks to control swelling and support new contours. Bruising, swelling, and soreness are expected. Most patients return to work in 1-2 weeks, with strenuous activity restricted for 3-4 weeks. Final contoured results become more apparent as swelling resolves over months. \n\nPost-treatment, wear compression garments diligently, engage in light walking to aid circulation, avoid soaking in baths until cleared, and follow massage instructions if given.", 
        imageBefore: "/images/liposculpture.png", 
        imageAfter: "/images/liposculpture2.png", 
        dataAiHint: "liposculpture body", 
        serviceType: "operation" 
      },
      { 
        id: "bbl", 
        name: "Buttock Augmentation (BBL)", 
        description: "A Brazilian Butt Lift (BBL) is a specialized fat transfer procedure that augments the size and shape of the buttocks and improves their contour. Fat is harvested via liposuction from other areas of the body (like the abdomen, flanks, or thighs), processed, and then strategically reinjected into different layers of the buttocks to create a fuller, rounder, and more lifted appearance. \n\nRecovery is unique because it requires avoiding direct pressure on the buttocks for several weeks (typically 2-4 weeks, sometimes longer). Special pillows are used for sitting. Swelling and bruising in liposuctioned and buttock areas are common. Compression garments are worn. Full results take several months as some transferred fat is naturally absorbed. \n\nPost-treatment, strictly avoid sitting or lying directly on your buttocks, sleep on your stomach or side, wear compression garments, and follow all activity restrictions. Not all transferred fat will survive; results vary.", 
        imageBefore: "/images/Gemini(1).png", 
        imageAfter: "/images/Gemin.png", 
        dataAiHint: "buttock augmentation", 
        serviceType: "operation" 
      },
      { 
        id: "labiaplasty", 
        name: "Labiaplasty", 
        description: "Labiaplasty is a surgical procedure to alter the size or shape of the labia minora (inner lips) or, less commonly, the labia majora (outer lips) of the vulva. It is performed for aesthetic reasons, to alleviate physical discomfort (e.g., from friction during exercise or intercourse), or to improve hygiene. Excess tissue is trimmed and reshaped. \n\nRecovery involves swelling, mild pain, and bruising for 1-2 weeks. Dissolvable stitches are often used. Patients typically take a few days to a week off work. Sexual activity and strenuous exercise are usually avoided for 4-6 weeks. \n\nPost-treatment, maintain meticulous hygiene, use prescribed topical ointments, wear loose-fitting clothing, and use cold packs to reduce swelling. Avoid tampons initially.", 
        imageBefore: "/images/labiaplasty.png", 
        imageAfter: "/images/labiaplasty2.png", 
        dataAiHint: "labiaplasty procedure", 
        serviceType: "operation" 
      },
      { 
        id: "thigh-lift", 
        name: "Thigh Lift", 
        description: "A thigh lift (thighplasty) is a surgical procedure to reshape the thighs by removing excess skin and, in some cases, fat. This results in smoother skin and better-proportioned contours of the thighs and lower body. It's often sought after significant weight loss or due to aging. Incisions can be made in the groin, extending down the inner thigh, or sometimes around the outer thigh. \n\nRecovery involves significant swelling, bruising, and discomfort. Compression garments are essential for several weeks. Drains may be used. Walking may be uncomfortable initially. Return to work may take 2-4 weeks, with strenuous activities restricted for 6-8 weeks. \n\nPost-treatment, wear compression garments, care for incisions, limit leg movement as advised initially, and attend follow-up appointments. Scarring is a significant consideration.", 
        imageBefore: "/images/thigh-lift.png", 
        imageAfter: "/images/thigh-lift2.png", 
        dataAiHint: "thigh lift", 
        serviceType: "operation" 
      },
      { 
        id: "gynecomastia", 
        name: "Gynecomastia (Male Breast Reduction)", 
        description: "Gynecomastia surgery corrects overdeveloped or enlarged breasts in men. The procedure typically involves liposuction to remove excess fatty tissue and/or surgical excision to remove excess glandular breast tissue. The goal is to create a flatter, firmer, and more masculine chest contour. Incisions are often made around the areola. \n\nRecovery includes swelling, bruising, and soreness. A compression vest is worn for several weeks to support healing and reduce swelling. Most men return to work and light activities within a week, but strenuous exercise and heavy lifting should be avoided for 3-4 weeks. \n\nPost-treatment, wear the compression garment as directed, avoid activities that strain the chest muscles, and follow instructions for incision care. Results are typically long-lasting.", 
        imageBefore: "/images/gynecomastia.png", 
        imageAfter: "/images/gynecomastia2.png", 
        dataAiHint: "gynecomastia surgery", 
        serviceType: "operation" 
      },
      { 
        id: "cellulite-treatment", 
        name: "Cellulite Treatment", 
        description: "Cellulite treatments aim to reduce the dimpled appearance of skin commonly found on thighs, buttocks, and abdomen. Various non-invasive or minimally invasive techniques exist, including radiofrequency, acoustic wave therapy, laser treatments (like Cellulaze), massage, carboxytherapy, or subcision (breaking fibrous bands). The choice depends on cellulite severity and type. \n\nRecovery varies widely. Non-invasive treatments often have no downtime, perhaps mild redness. Minimally invasive options like subcision or Cellulaze may involve bruising, swelling, and wearing compression garments for a few days to weeks. Multiple sessions are usually needed for optimal and lasting results. \n\nPost-treatment, follow specific aftercare for the chosen method. Maintaining a healthy lifestyle with regular exercise and a balanced diet can help sustain results. Avoid sun exposure on treated areas if skin is sensitive.", 
        imageBefore: "/images/cellulite-treatment.png", 
        imageAfter: "/images/cellulite-treatment2.png", 
        dataAiHint: "cellulite reduction", 
        serviceType: "treatment" 
      },
      { 
        id: "plasma-arc-body", 
        name: "Plasma Arc (Body)", 
        description: "Plasma Arc technology (plasma pen) offers non-surgical skin tightening and rejuvenation for various body areas. It's used to treat loose skin (e.g., on the abdomen, neck, knees), stretch marks, and scars. The device creates tiny plasma arcs on the skin's surface, causing sublimation and immediate skin contraction, while also stimulating long-term collagen production. \n\nRecovery involves the formation of small carbon crusts on the treated areas, which fall off in 5-10 days. Swelling and redness are common for a few days post-treatment. The underlying skin will be pink and sensitive. \n\nPost-treatment, keep the area clean and dry, avoid picking at the crusts, use prescribed aftercare products, and strictly protect the new skin from sun exposure with high SPF sunscreen for several weeks to prevent hyperpigmentation.", 
        imageBefore: "/images/plasma-arc-body.png", 
        imageAfter: "/images/plasma-arc-body2.png", 
        dataAiHint: "skin tightening", 
        serviceType: "treatment" 
      },
      { 
        id: "carboxytherapy", 
        name: "Carboxytherapy", 
        description: "Carboxytherapy involves the therapeutic administration of medical-grade carbon dioxide (CO2) gas injected into the subcutaneous tissue using a fine needle. This process is believed to improve circulation, stimulate collagen production, and enhance skin elasticity. It's used to treat stretch marks, cellulite, dark under-eye circles, and localized fat deposits, as well as for overall skin rejuvenation. \n\nRecovery is minimal with little to no downtime. Patients might experience slight bruising, redness, or a crackling sensation under the skin at the injection site, which usually resolves quickly. A series of treatments is typically required for noticeable results. \n\nPost-treatment, patients can usually resume normal activities immediately. Avoid bathing in tubs or swimming pools for a few hours after treatment to prevent infection at injection sites.", 
        imageBefore: "/images/carboxytherapy.png", 
        imageAfter: "/images/carboxytherapy2.png", 
        dataAiHint: "stretch marks", 
        serviceType: "treatment" 
      },
      { 
        id: "sclerotherapy", 
        name: "Sclerotherapy", 
        description: "Sclerotherapy is a minimally invasive procedure used to treat varicose veins and spider veins. It involves injecting a sclerosing solution directly into the affected veins. This solution irritates the lining of the blood vessel, causing it to collapse, stick together, and eventually be reabsorbed by the body, fading from view over time. \n\nRecovery involves wearing compression stockings for a period (days to weeks) to help collapse the treated veins and reduce bruising. Mild bruising, itching, or tenderness at injection sites is common. Walking is encouraged, but strenuous exercise should be avoided for a few days. Multiple sessions may be needed. \n\nPost-treatment, wear compression garments as directed, walk regularly, and avoid prolonged sitting or standing. Avoid hot baths, saunas, and direct sun exposure on treated areas for a couple of weeks.", 
        imageBefore: "/images/sclerotherapy.png", 
        imageAfter: "/images/sclerotherapy2.png", 
        dataAiHint: "vein treatment", 
        serviceType: "treatment" 
      },
      { 
        id: "lipolysis", 
        name: "Lipolysis", 
        description: "Injectable lipolysis, often known as 'fat-dissolving injections' (e.g., Kybella containing deoxycholic acid), is a non-surgical treatment to reduce small, stubborn fat deposits. The solution is injected into localized fat pockets, such as under the chin (double chin), jowls, or small body areas. It works by breaking down fat cells, which are then naturally eliminated by the body. \n\nRecovery involves significant swelling, bruising, numbness, and tenderness in the treated area, which can last for several days to a few weeks. Multiple treatment sessions (typically 2-4, spaced 4-8 weeks apart) are usually required for optimal results. \n\nPost-treatment, expect swelling and manage with cold packs if advised. Avoid strenuous exercise for a few days. Results appear gradually as fat cells are cleared.", 
        imageBefore: "/images/lipolysis.png", 
        imageAfter: "/images/lipolysis2.png", 
        dataAiHint: "fat reduction", 
        serviceType: "treatment" 
      },
      { 
        id: "laser-hair-removal", 
        name: "Laser Hair Removal", 
        description: "Laser hair removal is a non-invasive cosmetic procedure that uses concentrated beams of light (laser) to target and destroy hair follicles, inhibiting future hair growth. It offers a long-term solution for unwanted hair on various body areas, including the face, legs, arms, underarms, and bikini line. Multiple sessions are needed as hair grows in cycles. \n\nRecovery is minimal. The treated skin may appear red and slightly swollen (like a mild sunburn) for a few hours to a day. Some discomfort, similar to a rubber band snap, may be felt during treatment. \n\nPost-treatment, avoid sun exposure and use sunscreen on treated areas. Avoid hot showers, saunas, and strenuous exercise for 24 hours. Do not wax or pluck hairs between sessions (shaving is okay).", 
        imageBefore: "/images/laser-hair-removal.png", 
        imageAfter: "/images/laser-hair-removal2.png", 
        dataAiHint: "hair removal", 
        serviceType: "treatment" 
      },
    ],
  },
  {
    id: "dentistry",
    title: "DENTISTRY",
    icon: Sparkles, 
    services: [
      // AESTHETICS
      { 
        id: "teeth-whitening", 
        name: "Teeth Whitening", 
        description: "Teeth whitening is a cosmetic dental procedure to lighten the shade of your teeth and remove stains or discoloration. It can be done in-office by a dentist using stronger bleaching agents and often light activation, or at home with custom-fitted trays and professional-grade gel. The process breaks down stain molecules, resulting in a brighter smile. \n\nRecovery is typically immediate. Some may experience temporary tooth sensitivity or gum irritation for a day or two, which usually subsides. \n\nPost-treatment, avoid consuming staining foods and drinks (coffee, tea, red wine, berries) for 24-48 hours. Maintain good oral hygiene to prolong results. Touch-up treatments may be needed periodically.", 
        imageBefore: "/images/teeth-whitening.png", 
        imageAfter: "/images/teeth-whitening2.png", 
        dataAiHint: "teeth whitening", 
        serviceType: "treatment", 
        dentalSubCategoryTitle: "AESTHETICS" 
      },
      { 
        id: "composite-veneers", 
        name: "Composite Veneers", 
        description: "Composite veneers are thin layers of tooth-colored composite resin bonded directly to the front surface of teeth to improve their appearance. They can correct chips, cracks, discoloration, minor misalignments, or gaps. The procedure is typically completed in a single visit, with the dentist sculpting and shaping the resin on your teeth. \n\nRecovery is minimal with no downtime. Your bite may feel slightly different initially. Composite veneers are not as stain-resistant as porcelain and may require polishing or repair over time. \n\nPost-treatment, maintain good oral hygiene, avoid biting hard objects or foods with the veneered teeth, and be mindful of staining foods/drinks. Regular dental check-ups are important.", 
        imageBefore: "/images/composite-veneers.png", 
        imageAfter: "/images/composite-veneers2.png", 
        dataAiHint: "composite veneers", 
        serviceType: "treatment", 
        dentalSubCategoryTitle: "AESTHETICS" 
      },
      { 
        id: "emax-veneers", 
        name: "E-Max Veneers", 
        description: "E-Max veneers are ultra-thin, highly durable, and aesthetic shells made from lithium disilicate ceramic. They are custom-fabricated in a dental lab and then bonded to the front surface of teeth to significantly improve their color, shape, size, or length. E-Max offers excellent translucency and a very natural look. Minimal tooth preparation is often required. \n\nRecovery involves a short adjustment period. Some temporary sensitivity might occur. The procedure typically requires two visits. \n\nPost-treatment, practice good oral hygiene, avoid biting into very hard foods with your veneers, and attend regular dental check-ups. E-Max veneers are very stain-resistant and can last for many years with proper care.", 
        imageBefore: "/images/emax-veneers.png", 
        imageAfter: "/images/emax-veneers2.png", 
        dataAiHint: "emax veneers", 
        serviceType: "treatment", 
        dentalSubCategoryTitle: "AESTHETICS" 
      },
      // PROSTHETICS
      { 
        id: "dental-crowns", 
        name: "Crowns", 
        description: "A dental crown is a custom-fitted, tooth-shaped 'cap' placed over a damaged, decayed, weakened, or discolored tooth to restore its shape, size, strength, and appearance. Crowns can also be used to cover a dental implant or hold a bridge in place. They are made from materials like porcelain, ceramic, metal alloys, or a combination. \n\nRecovery after crown placement is usually straightforward. The tooth might be sensitive for a few days, especially if a root canal wasn't performed. The procedure typically involves two visits: one for preparation and impressions, and another for fitting the permanent crown. \n\nPost-treatment, maintain excellent oral hygiene, avoid chewing very hard or sticky foods on the crowned tooth initially, and attend regular dental check-ups. Properly cared for crowns can last many years.", 
        imageBefore: "/images/dental-crowns.png", 
        imageAfter: "/images/dental-crowns2.png", 
        dataAiHint: "dental crowns", 
        serviceType: "treatment", 
        dentalSubCategoryTitle: "PROSTHETICS" 
      },
      { 
        id: "dental-bridges", 
        name: "Dental Bridges", 
        description: "A dental bridge is a fixed prosthetic device used to replace one or more missing teeth. It consists of one or more artificial teeth (pontics) held in place by dental crowns on the adjacent natural teeth (abutments) or by dental implants. Bridges restore chewing function, maintain facial shape, prevent remaining teeth from shifting, and improve smile aesthetics. \n\nRecovery involves an adjustment period to the new bridge. Some temporary sensitivity in abutment teeth may occur. The process usually takes two or more dental visits. \n\nPost-treatment, meticulous oral hygiene is crucial, especially cleaning under the pontic. Avoid chewing extremely hard or sticky foods. Regular dental visits are necessary to ensure the bridge's longevity and health of supporting teeth.", 
        imageBefore: "/images/dental-bridges.png", 
        imageAfter: "/images/dental-bridges2.png", 
        dataAiHint: "dental bridges", 
        serviceType: "treatment", 
        dentalSubCategoryTitle: "PROSTHETICS" 
      },
      { 
        id: "dentures", 
        name: "Dentures", 
        description: "Dentures are removable prosthetic appliances designed to replace missing teeth and surrounding tissues. There are two main types: complete dentures (replace all teeth in an arch) and partial dentures (replace some teeth while natural teeth remain). They restore chewing ability, speech, and facial aesthetics. Made from acrylic resin, sometimes with metal frameworks. \n\nRecovery involves an adjustment period. Initially, dentures may feel bulky or cause minor irritation or soreness. Speech and eating may require practice. Increased saliva flow is common. Several adjustment appointments may be needed. \n\nPost-treatment, clean dentures daily, remove them at night (unless advised otherwise), massage gums, and attend regular dental check-ups for fit and oral health. Do not use abrasive cleaners on dentures.", 
        imageBefore: "/images/dentures.png", 
        imageAfter: "/images/dentures2.png", 
        dataAiHint: "dentures", 
        serviceType: "treatment", 
        dentalSubCategoryTitle: "PROSTHETICS" 
      },
      // ORTHODONTICS
      { 
        id: "invisalign", 
        name: "Invisalign", 
        description: "Invisalign is an orthodontic treatment that uses a series_of custom-made, clear, removable aligners to gradually straighten teeth. These aligners are virtually invisible, offering a discreet alternative to traditional braces. Each aligner is worn for about 1-2 weeks before moving to the next in the series. Suitable for various malocclusion cases. \n\nRecovery is essentially the treatment duration itself, which varies based on complexity (typically 6-18 months or more). Some initial discomfort or pressure is common when starting a new aligner. Aligners must be worn 20-22 hours a day. \n\nPost-treatment (active phase), retainers are crucial to maintain the new tooth position. Aligners should be removed for eating, drinking (except water), brushing, and flossing. Clean aligners regularly.", 
        imageBefore: "/images/invisalign.png", 
        imageAfter: "/images/invisalign2.png", 
        dataAiHint: "invisalign", 
        serviceType: "treatment", 
        dentalSubCategoryTitle: "ORTHODONTICS" 
      },
      { 
        id: "fixed-braces", 
        name: "Fixed Braces", 
        description: "Fixed braces are traditional orthodontic appliances consisting of brackets (metal or ceramic) bonded to teeth and connected by archwires. They apply continuous pressure to gradually move teeth into their correct positions, correcting misalignments, bite issues, and improving overall dental health and aesthetics. Treatment duration varies widely (often 1-3 years). \n\nRecovery involves an adjustment period. Teeth and gums may be sore for a few days after placement and adjustments. Wax can be used for bracket irritation. Regular orthodontic appointments are needed for adjustments. \n\nPost-treatment (active phase), retainers are essential. Meticulous oral hygiene is required to clean around brackets and wires. Avoid hard, sticky, or chewy foods that can damage braces. Follow all orthodontist instructions.", 
        imageBefore: "/images/fixed-braces.png", 
        imageAfter: "/images/fixed-braces.png", 
        dataAiHint: "fixed braces", 
        serviceType: "treatment", 
        dentalSubCategoryTitle: "ORTHODONTICS" 
      },
      { 
        id: "removable-appliances", 
        name: "Removable Appliances", 
        description: "Removable orthodontic appliances are custom-made devices used for specific tooth movements, habit correction (e.g., thumb sucking), or as part of a phased orthodontic treatment plan, often in younger patients. Examples include retainers, palatal expanders, or functional appliances. They are not designed to correct all types of malocclusion like fixed braces. \n\nRecovery involves an adjustment period for speech and comfort. The appliance must be worn as prescribed by the orthodontist (often many hours per day or full-time). \n\nPost-treatment (or during), follow wearing instructions precisely. Clean the appliance daily as directed. Store it safely when not in use. Attend all orthodontic appointments for monitoring and adjustments.", 
        imageBefore: "/images/removable-appliances.png", 
        imageAfter: "/images/removable-appliances2.png", 
        dataAiHint: "removable ortho", 
        serviceType: "treatment", 
        dentalSubCategoryTitle: "ORTHODONTICS" 
      },
      // THERAPY
      { 
        id: "tartar-cleaning", 
        name: "Tartar Cleaning", 
        description: "Professional tartar cleaning, also known as scaling and polishing, is a dental hygiene procedure to remove plaque (soft bacterial film) and tartar (hardened plaque or calculus) from tooth surfaces, both above and below the gumline. This helps prevent gum disease (gingivitis, periodontitis), cavities, and bad breath. It's usually performed by a dental hygienist. \n\nRecovery is immediate. Gums might be slightly tender or bleed a little, especially if there's existing gingivitis, but this usually resolves quickly. Teeth feel smooth and clean. \n\nPost-treatment, maintain good daily oral hygiene (brushing twice a day, flossing once a day) to prevent new plaque and tartar buildup. Regular professional cleanings (typically every 6 months) are recommended.", 
        imageBefore: "/images/tartar-cleaning.png", 
        imageAfter: "/images/tartar-cleaning2.png", 
        dataAiHint: "teeth cleaning", 
        serviceType: "treatment", 
        dentalSubCategoryTitle: "THERAPY" 
      },
      { 
        id: "tooth-fillings", 
        name: "Tooth Fillings", 
        description: "Tooth fillings are used to repair teeth damaged by decay (cavities), cracks, or fractures. The decayed or affected portion of the tooth is removed, cleaned, and then 'filled' with a restorative material. Common materials include composite resin (tooth-colored), amalgam (silver), gold, or porcelain. This restores the tooth's integrity and function. \n\nRecovery is usually quick. Some temporary sensitivity to hot, cold, or pressure may occur for a few days, especially with deeper fillings. The bite should feel normal. \n\nPost-treatment, if an anesthetic was used, avoid chewing until numbness wears off to prevent biting your cheek or tongue. Maintain good oral hygiene. If sensitivity persists or the bite feels off, contact your dentist.", 
        imageBefore: "/images/tooth-fillings.png", 
        imageAfter: "/images/tooth-fillings2.png", 
        dataAiHint: "tooth fillings", 
        serviceType: "treatment", 
        dentalSubCategoryTitle: "THERAPY" 
      },
      { 
        id: "infected-teeth-treatment", 
        name: "Infected Teeth Treatment", 
        description: "Treatment for an infected tooth, typically referring to root canal therapy (endodontic treatment), is necessary when the pulp (soft inner tissue containing nerves and blood vessels) becomes inflamed or infected due to deep decay, repeated dental procedures, cracks, or trauma. The infected pulp is removed, the inside of the tooth is cleaned and disinfected, then filled and sealed. A crown is often placed afterward to protect the tooth. \n\nRecovery involves some tenderness or mild pain for a few days, manageable with over-the-counter pain relievers. The tooth may feel different initially. Avoid chewing on the treated tooth until it's fully restored (often with a crown). \n\nPost-treatment, follow all instructions, take any prescribed antibiotics, and schedule follow-up for permanent restoration. Good oral hygiene is essential.", 
        imageBefore: "/images/infected-teeth-treatment.png", 
        imageAfter: "/images/infected-teeth-treatment2.png", 
        dataAiHint: "root canal", 
        serviceType: "treatment", 
        dentalSubCategoryTitle: "THERAPY" 
      },
      // SURGERY
      { 
        id: "tooth-extraction", 
        name: "Tooth Extraction", 
        description: "A tooth extraction is the removal of a tooth from its socket in the bone. Extractions are performed for various reasons, including severe decay, advanced periodontal disease, infection, impaction (common with wisdom teeth), to make space for orthodontic treatment, or if a tooth is badly fractured. Can be simple (for visible teeth) or surgical (for impacted or broken teeth). \n\nRecovery time varies. Initial healing takes 1-2 weeks. Some pain, swelling, and minor bleeding are normal. A blood clot forms in the socket, which is crucial for healing. \n\nPost-treatment, bite on gauze to control bleeding, use ice packs for swelling, eat soft foods, avoid smoking and drinking through a straw, and don't disturb the blood clot. Take prescribed pain medication and antibiotics if needed. Follow specific oral hygiene instructions.", 
        imageBefore: "/images/tooth-extraction.png", 
        imageAfter: "/images/tooth-extraction2.png", 
        dataAiHint: "tooth extraction", 
        serviceType: "operation", 
        dentalSubCategoryTitle: "SURGERY" 
      },
      { 
        id: "dental-implants", 
        name: "Dental Implants", 
        description: "Dental implants are titanium posts surgically placed into the jawbone beneath the gums to act as artificial tooth roots. Once integrated with the bone (osseointegration), they provide a stable foundation for replacement teeth like crowns, bridges, or implant-supported dentures. Implants offer a durable, natural-looking, and functional solution for missing teeth. \n\nRecovery is a multi-stage process. After implant placement, healing and osseointegration take several months (3-6+). Some swelling, bruising, and discomfort are expected initially. A temporary prosthesis may be worn. The final restoration is placed after full integration. \n\nPost-operative care includes soft diet, good oral hygiene (gentle initially), avoiding pressure on the implant site, and taking prescribed medications. No smoking is critical for success.", 
        imageBefore: "/images/dental-implants.png", 
        imageAfter: "/images/dental-implants2.png", 
        dataAiHint: "dental implants", 
        serviceType: "operation", 
        dentalSubCategoryTitle: "SURGERY" 
      },
      { 
        id: "apical-resection", 
        name: "Apical Resection", 
        description: "Apical resection, or apicoectomy, is a minor surgical procedure performed when inflammation or infection persists in the bone around the root tip of a tooth after a root canal treatment has failed or is not possible. The oral surgeon accesses the root tip, removes any infected tissue along with the very end of the root, and places a filling to seal the root canal. \n\nRecovery involves some swelling, bruising, and discomfort for a few days, manageable with pain relievers and cold compresses. Stitches may be dissolvable or need removal. A soft diet is recommended initially. \n\nPost-treatment, follow oral hygiene instructions carefully, avoid disturbing the surgical site, take prescribed medications (antibiotics, pain relievers), and attend follow-up appointments.", 
        imageBefore: "/images/apical-resection.png", 
        imageAfter: "/images/apical-resection2.png", 
        dataAiHint: "apical resection", 
        serviceType: "operation", 
        dentalSubCategoryTitle: "SURGERY" 
      },
      // PEDODONTICS (CHILDREN'S DENTISTRY)
      { 
        id: "milk-teeth-treatment", 
        name: "Milk Teeth Treatment", 
        description: "Treatment for milk teeth (primary teeth) in children is crucial for their oral health, development, and proper eruption of permanent teeth. This includes fillings for cavities, pulp therapy (like a mini root canal) if decay reaches the pulp, stainless steel crowns for badly decayed teeth, and space maintainers if a milk tooth is lost prematurely. A gentle, child-friendly approach is used. \n\nRecovery depends on the specific treatment. For fillings or crowns, there's usually minimal recovery. After pulp therapy or extractions, some mild discomfort may occur. \n\nPost-treatment, encourage good oral hygiene, ensure the child follows any dietary advice (e.g., soft foods), and attend regular pediatric dental check-ups. Positive reinforcement helps create good dental habits.", 
        imageBefore: "/images/milk-teeth-treatment.png", 
        imageAfter: "/images/milk-teeth-treatment2.png", 
        dataAiHint: "childrens dentistry", 
        serviceType: "treatment", 
        dentalSubCategoryTitle: "PEDODONTICS (CHILDREN'S DENTISTRY)" 
      },
      { 
        id: "tooth-fluoridation", 
        name: "Tooth Fluoridation", 
        description: "Professional tooth fluoridation involves applying a concentrated fluoride solution, gel, foam, or varnish to children's teeth. Fluoride strengthens tooth enamel, making it more resistant to acid attacks from bacteria and sugars, thus helping to prevent cavities. It's a quick, painless, and effective preventive measure. \n\nRecovery is immediate; there is no downtime. \n\nPost-treatment, the child is usually advised not to eat or drink for about 30 minutes to allow the fluoride to fully absorb. Continue regular brushing with fluoride toothpaste at home. Recommended frequency varies by individual risk.", 
        imageBefore: "/images/tooth-fluoridation.png", 
        imageAfter: "/images/tooth-fluoridation2.png", 
        dataAiHint: "tooth fluoridation", 
        serviceType: "treatment", 
        dentalSubCategoryTitle: "PEDODONTICS (CHILDREN'S DENTISTRY)" 
      },
      { 
        id: "tooth-sealants", 
        name: "Tooth Sealants", 
        description: "Dental sealants are thin, plastic coatings painted onto the chewing surfaces (grooves and pits) of back teeth (molars and premolars) to prevent tooth decay. These surfaces are particularly vulnerable to cavities, especially in children. The sealant acts as a physical barrier, 'sealing out' food particles and bacteria. The application is quick and painless. \n\nRecovery is immediate. Sealants harden quickly, often with a special curing light. \n\nPost-treatment, children can eat and drink normally right away. Sealants can last for several years with good oral hygiene and regular dental check-ups, during which their integrity will be monitored. They do not replace the need for brushing and flossing.", 
        imageBefore: "/images/tooth-sealants.png", 
        imageAfter: "/images/tooth-sealants2.png", 
        dataAiHint: "tooth sealants", 
        serviceType: "treatment", 
        dentalSubCategoryTitle: "PEDODONTICS (CHILDREN'S DENTISTRY)" 
      },
    ],
  },
];

export const allServices: ServiceItem[] = serviceData.reduce((acc, category) => {
  return acc.concat(category.services);
}, [] as ServiceItem[]);

    