'use client';

import { LanguageProvider } from '@/hooks/use-translations';
import { ReactNode, createContext, useContext, useState } from 'react';
import { AuthProvider } from '@/contexts/auth-context';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ContactForm } from '@/app/contact/contact-form';
import { useTranslations } from '@/hooks/use-translations';

// Contact Popup Context
interface ContactPopupContextType {
  openContactPopup: (source?: string) => void;
}

const ContactPopupContext = createContext<ContactPopupContextType | undefined>(
  undefined
);

export const useContactPopup = () => {
  const context = useContext(ContactPopupContext);
  if (!context) {
    throw new Error('useContactPopup must be used within a ContactPopupProvider');
  }
  return context;
};

function ContactPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState('Unknown');
  const tContact = useTranslations('ContactPage.formCard');

  const openContactPopup = (popupSource: string = 'General') => {
    setSource(popupSource);
    setIsOpen(true);
  };

  return (
    <ContactPopupContext.Provider value={{ openContactPopup }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{tContact('title')}</DialogTitle>
            <DialogDescription>{tContact('description')}</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <ContactForm onSuccess={() => setIsOpen(false)} source={source} />
          </div>
        </DialogContent>
      </Dialog>
    </ContactPopupContext.Provider>
  );
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <AuthProvider>
        <ContactPopupProvider>{children}</ContactPopupProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}
