
"use client";

import { LanguageProvider } from "@/hooks/use-translations";
import { ReactNode } from "react";
import { AuthProvider } from "@/contexts/auth-context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </LanguageProvider>
  );
}
