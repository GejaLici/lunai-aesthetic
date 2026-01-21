'use client';

import { LanguageProvider } from '@/hooks/use-translations';
import { ReactNode, createContext, useContext, useState, lazy, Suspense } from 'react';
import { AuthProvider } from '@/contexts/auth-context';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useTranslations } from '@/hooks/use-translations';
import { Skeleton } from '@/components/ui/skeleton';

// Dynamically import the ContactForm to reduce initial bundle size
const ContactForm = lazy(() => import('@/app/contact/contact-form').then(module => ({ default: module.ContactForm })));


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
  
  const FormSkeleton = () => (
    <div className="space-y-6">
        <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />
        </div>
         <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-24 w-full" />
        </div>
        <Skeleton className="h-10 w-full" />
    </div>
  )

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
             <Suspense fallback={<FormSkeleton />}>
                {isOpen && <ContactForm onSuccess={() => setIsOpen(false)} source={source} />}
             </Suspense>
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
