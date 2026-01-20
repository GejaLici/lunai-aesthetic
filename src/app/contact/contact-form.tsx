"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";
import { saveContactMessage, type ContactFormData } from "@/app/contact/actions";
import { useTranslations } from "@/hooks/use-translations";

export function ContactForm({ onSuccess }: { onSuccess?: () => void }) {
  const t = useTranslations('ContactPage.form');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const contactFormSchema = z.object({
    name: z.string().min(2, t('validation.name.minLength')),
    email: z.string().email(t('validation.email.invalid')),
    phone: z.string().optional(),
    message: z.string().min(10, t('validation.message.minLength')).max(500, t('validation.message.maxLength')),
  });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsLoading(true);
    
    const result = await saveContactMessage(data);

    if (result.success) {
      toast({
        title: t('toast.success.title'),
        description: t('toast.success.description'),
      });
      form.reset();
      if (onSuccess) onSuccess();
    } else {
      let description = result.message || t('toast.error.default');
      if (result.errors) {
        const errorMessages = Object.values(result.errors).map(errArray => errArray?.[0]).filter(Boolean);
        if (errorMessages.length > 0) {
          description = errorMessages.join(' ');
        }
      }
      toast({
        title: t('toast.error.title'),
        description: description,
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name">{t('labels.name')}</FormLabel>
              <FormControl>
                <Input id="name" placeholder={t('placeholders.name')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">{t('labels.email')}</FormLabel>
              <FormControl>
                <Input id="email" type="email" placeholder={t('placeholders.email')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="phone">{t('labels.phone')}</FormLabel>
              <FormControl>
                <Input id="phone" type="tel" placeholder={t('placeholders.phone')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="message">{t('labels.message')}</FormLabel>
              <FormControl>
                <Textarea
                  id="message"
                  placeholder={t('placeholders.message')}
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t('button.loading')}
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              {t('button.default')}
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
