
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
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define the provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState('en');
  const [messages, setMessages] = useState<Messages>({}); // Initialize with empty object

  useEffect(() => {
    const loadMessages = async (currentLocale: string) => {
      try {
        const loadedMessages = (await import(`@/messages/${currentLocale}.json`)).default;
        setMessages(loadedMessages);
      } catch (error) {
        console.error(`Could not load messages for locale: ${currentLocale}`, error);
        try {
            const enMessages = (await import('@/messages/en.json')).default;
            setMessages(enMessages); // Fallback to English
        } catch (e) {
            console.error('Could not load fallback English messages.', e);
        }
      }
    };

    loadMessages(locale);
  }, [locale]);
  
  const value = useMemo(() => ({ locale, setLocale, messages }), [locale, messages]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Utility function to safely access nested properties
const get = (obj: any, path: string): any => {
  const keys = path.split('.');
  let result = obj;
  for (const key of keys) {
    if (result === null || typeof result !== 'object') {
      return undefined;
    }
    result = result[key];
  }
  return result;
};


export const useTranslations = (namespace?: string) => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslations must be used within a LanguageProvider');
  }

  const { messages, locale } = context;

  const t = useCallback((key: string, variables?: { [key:string]: string | number }) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    let translation = get(messages, fullKey);

    if (translation === undefined) {
      // Don't warn in production, just return the key.
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`Translation not found for key: '${fullKey}' in locale '${locale}'.`);
      }
      return fullKey; // Return the key as a fallback
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
    
    // If the key exists but the value is not a string (e.g., it's an object of nested keys),
    // return a warning or the key itself.
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Translation for key '${fullKey}' is not a string.`);
    }
    return fullKey;
  }, [messages, namespace, locale]);

  return t;
};

export const useServiceTranslation = (serviceId: string) => {
    const { messages, locale } = useContext(LanguageContext)!;
    
    const fallbackData = useMemo(() => ({
        name: serviceId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        content_sections: {},
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
    }), [serviceId]);
    
    const serviceData = useMemo(() => {
        const path = `services.items.${serviceId}`;
        const service = get(messages, path);

        if (!service || typeof service !== 'object') {
            return fallbackData;
        }
        
        return {
            name: service.name || fallbackData.name,
            content_sections: service.content_sections || fallbackData.content_sections,
            meta_title: service.meta_title || service.name || fallbackData.name,
            meta_description: service.meta_description || `Learn more about ${service.name || fallbackData.name}`,
            meta_keywords: service.meta_keywords || '',
        };
        
    }, [messages, serviceId, fallbackData]);

    return serviceData;
};


export const useLocale = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLocale must be used within a LanguageProvider');
    }
    return { locale: context.locale, setLocale: context.setLocale };
}
