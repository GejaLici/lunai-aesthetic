
import apicalResection_de from '../../messages/services/de/apical-resection.json';
import apicalResection_en from '../../messages/services/en/apical-resection.json';
import apicalResection_es from '../../messages/services/es/apical-resection.json';
import apicalResection_fr from '../../messages/services/fr/apical-resection.json';
import apicalResection_it from '../../messages/services/it/apical-resection.json';
import apicalResection_sq from '../../messages/services/sq/apical-resection.json';

const serviceTranslations: Record<string, Record<string, any>> = {
  de: {
    'apical-resection': apicalResection_de,
  },
  en: {
    'apical-resection': apicalResection_en,
  },
  es: {
    'apical-resection': apicalResection_es,
  },
  fr: {
    'apical-resection': apicalResection_fr,
  },
  it: {
    'apical-resection': apicalResection_it,
  },
  sq: {
    'apical-resection': apicalResection_sq,
  }
};

export const allServiceMessages = serviceTranslations;
