"use client";

import { LanguageProvider } from "@/hooks/use-translations";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}
