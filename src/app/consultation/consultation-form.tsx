
"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { virtualConsultation, type VirtualConsultationOutput } from "@/ai/flows/virtual-consultation";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FormSchema = z.object({
  concerns: z.string().min(20, {
    message: "Please describe your concerns in at least 20 characters.",
  }).max(2000, {
    message: "Your description should not exceed 2000 characters.",
  }),
});

type FormData = z.infer<typeof FormSchema>;

export function ConsultationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<VirtualConsultationOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      concerns: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await virtualConsultation({ concerns: data.concerns });
      setResult(response);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to get suggestions. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="concerns"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="concerns" className="text-lg">Describe your aesthetic concerns and goals</FormLabel>
                <FormControl>
                  <Textarea
                    id="concerns"
                    placeholder="e.g., I'm concerned about fine lines around my eyes and a loss of volume in my cheeks..."
                    className="min-h-[150px] text-base"
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
                Analyzing...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Get AI-Powered Suggestions
              </>
            )}
          </Button>
        </form>
      </Form>

      {result && (
        <Card className="mt-8 bg-secondary/50 shadow-md">
          <CardHeader>
            <CardTitle className="font-headline text-xl text-accent flex items-center">
              <Sparkles className="mr-2 h-5 w-5" />
              Initial Thoughts & Potential Directions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap text-foreground/90">{result.suggestions}</p>
          </CardContent>
        </Card>
      )}
    </>
  );
}
