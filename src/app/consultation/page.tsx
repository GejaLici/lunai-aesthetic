import { ConsultationForm } from "@/app/consultation/consultation-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot } from "lucide-react";

export default function ConsultationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-8">
        <Bot className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-5xl font-headline font-bold text-primary">AI-Powered Virtual Consultation</h1>
        <p className="text-xl text-foreground/80 mt-4 max-w-3xl mx-auto">
          Get personalized aesthetic and dental treatment suggestions from our advanced AI. Describe your concerns, and our virtual consultant will provide initial guidance to help you on your journey with LUNAI.
        </p>
      </section>
      
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Your Virtual Consultation</CardTitle>
            <CardDescription>
                This tool provides preliminary suggestions and does not replace a professional medical consultation.
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
