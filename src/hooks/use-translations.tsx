
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback, useMemo } from 'react';

// Define the shape of the translation messages
type Messages = {
  [key: string]: any;
};

// Define the context shape
interface LanguageContextType {
  locale: string;
  setLocale: (locale: string) => void;
  messages: Messages;
  serviceMessages: { [key: string]: Messages };
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define the provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState('en');
  const [messages, setMessages] = useState<Messages>({});

  useEffect(() => {
    const loadMessages = async (currentLocale: string) => {
      let loadedMessages;
      try {
        switch (currentLocale) {
          case 'de':
            loadedMessages = await import('../../messages/de.json');
            break;
          case 'es':
            loadedMessages = await import('../../messages/es.json');
            break;
          case 'fr':
            loadedMessages = await import('../../messages/fr.json');
            break;
          case 'it':
            loadedMessages = await import('../../messages/it.json');
            break;
          case 'sq':
            loadedMessages = await import('../../messages/sq.json');
            break;
          default:
            loadedMessages = await import('../../messages/en.json');
            break;
        }
        setMessages(loadedMessages.default || loadedMessages);
      } catch (error) {
        console.error(`Could not load messages for locale: ${currentLocale}`, error);
        try {
          const fallbackMessages = await import('../../messages/en.json');
          setMessages(fallbackMessages.default || fallbackMessages);
        } catch (fallbackError) {
          console.error(`Could not load fallback English messages.`, fallbackError);
          setMessages({});
        }
      }
    };
    loadMessages(locale);
  }, [locale]);
  
  const value = useMemo(() => ({ locale, setLocale, messages, serviceMessages: {} }), [locale, messages]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

const get = (obj: any, path: string) => {
  const keys = path.split('.');
  return keys.reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
};

export const useTranslations = (namespace?: string) => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslations must be used within a LanguageProvider');
  }

  const t = useCallback((key: string, variables?: { [key:string]: string | number }) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    const translation = get(context.messages, fullKey);

    if (translation === undefined) {
      console.warn(`Translation not found for key: ${fullKey}`);
      try {
        const enMessages = require('../../messages/en.json');
        const fallbackTranslation = get(enMessages, fullKey);
        if (fallbackTranslation !== undefined) {
          return fallbackTranslation;
        }
      } catch (e) {
         return fullKey;
      }
      return fullKey;
    }
    
    if (typeof translation === 'string') {
      if (variables) {
        let result = translation;
        Object.keys(variables).forEach(varKey => {
          const regex = new RegExp(`\\{\\{\\s*${varKey}\\s*\\}\\}`, 'g');
          result = result.replace(regex, String(variables[varKey]));
        });
        return result;
      }
      return translation;
    }
    
    return translation;
  }, [context.messages, namespace]);

  return t;
};

// Simplified hook to get basic service info from the main translation file
export const useServiceTranslation = (serviceId: string) => {
    const t = useTranslations('services.items');
    const context = useContext(LanguageContext);

    if (context === undefined) {
        throw new Error('useServiceTranslation must be used within a LanguageProvider');
    }

    // This is a simplified implementation. We'll get name and a basic description.
    // Full content will require a more robust solution.
    const name = t(serviceId) || serviceId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    // NOTE: This simplified version does not support detailed content sections for services.
    // It provides enough to prevent the app from crashing.
    return {
        name,
        description: {
          what_is: {
            heading: "About This Service",
            paragraphs: [`Learn more about ${name}. Contact us for a consultation.`]
          }
        },
        meta_title: name,
        meta_description: `Learn more about ${name}`,
        meta_keywords: serviceId.replace(/-/g, ', '),
    };
};


export const useLocale = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLocale must be used within a LanguageProvider');
    }
    return { locale: context.locale, setLocale: context.setLocale };
}
