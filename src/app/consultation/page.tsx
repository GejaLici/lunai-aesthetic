"use client";

import { ConsultationForm } from "@/app/consultation/consultation-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";

export default function ConsultationPage() {
  const t = useTranslations('ConsultationPage');

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-8">
        <Bot className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-5xl font-headline font-bold text-primary">{t('title')}</h1>
        <p className="text-xl text-foreground/80 mt-4 max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
      </section>
      
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>{t('formCard.title')}</CardTitle>
            <CardDescription>
              {t('formCard.description')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ConsultationForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
