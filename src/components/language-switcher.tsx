"use client";

import { useLocale } from "@/hooks/use-translations";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  const locales = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
    { value: 'it', label: 'Italiano' },
    { value: 'sq', label: 'Shqip' },
  ];

  const handleLocaleChange = (newLocale: string) => {
    setLocale(newLocale);
  };

  return (
    <Select value={locale} onValueChange={handleLocaleChange}>
      <SelectTrigger className="w-auto gap-2 border-none bg-transparent shadow-none focus:ring-0">
        <Globe className="h-5 w-5 text-accent" />
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {locales.map((loc) => (
          <SelectItem key={loc.value} value={loc.value}>
            {loc.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
