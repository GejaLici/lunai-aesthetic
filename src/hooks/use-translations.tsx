"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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
  const [messages, setMessages] = useState<Messages>({});

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const loadedMessages = await import(`@/messages/${locale}.json`);
        setMessages(loadedMessages.default || loadedMessages);
      } catch (error) {
        console.error(`Could not load messages for locale: ${locale}`, error);
        // Fallback to English if the selected locale fails
        if (locale !== 'en') {
          const fallbackMessages = await import(`@/messages/en.json`);
          setMessages(fallbackMessages.default || fallbackMessages);
        }
      }
    };
    loadMessages();
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, messages }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the translations
export const useTranslations = (namespace: string) => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslations must be used within a LanguageProvider');
  }
  return context.messages[namespace] || {};
};

// Custom hook to access locale and setter
export const useLocale = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLocale must be used within a LanguageProvider');
    }
    return { locale: context.locale, setLocale: context.setLocale };
}
