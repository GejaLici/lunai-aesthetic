
import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
 
// All messages are now inlined
const messages = {
  en: {
    "SiteHeader": {
      "home": "Home",
      "services": "Services",
      "gallery": "Gallery",
      "consultation": "Virtual Consultation",
      "blog": "Blog",
      "contact": "Contact Us"
    },
    "LanguageSwitcher": {
      "label": "Change language",
      "en": "English",
      "it": "Italiano",
      "sq": "Shqip"
    },
    "SiteFooter": {
      "quickLinks": "Quick Links",
      "followUs": "Follow Us",
      "tagline": "Crafting beauty, inspired by light."
    }
  },
  it: {
    "SiteHeader": {
      "home": "Home",
      "services": "Servizi",
      "gallery": "Galleria",
      "consultation": "Consulenza Virtuale",
      "blog": "Blog",
      "contact": "Contattaci"
    },
    "LanguageSwitcher": {
      "label": "Cambia lingua",
      "en": "Inglese",
      "it": "Italiano",
      "sq": "Albanese"
    },
    "SiteFooter": {
      "quickLinks": "Link Rapidi",
      "followUs": "Seguici",
      "tagline": "Creando bellezza, ispirata dalla luce."
    }
  },
  sq: {
    "SiteHeader": {
      "home": "Kryefaqja",
      "services": "Shërbimet",
      "gallery": "Galeria",
      "consultation": "Konsultim Virtual",
      "blog": "Blogu",
      "contact": "Na Kontaktoni"
    },
    "LanguageSwitcher": {
      "label": "Ndrysho gjuhën",
      "en": "Anglisht",
      "it": "Italisht",
      "sq": "Shqip"
    },
    "SiteFooter": {
      "quickLinks": "Lidhje të Shpejta",
      "followUs": "Na Ndiqni",
      "tagline": "Duke krijuar bukuri, e frymëzuar nga drita."
    }
  }
};

const locales = ['en', 'it', 'sq'];
 
export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale)) {
    notFound();
  }

  return {
    messages: messages[locale as keyof typeof messages]
  };
});
