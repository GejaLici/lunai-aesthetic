import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ConsultationForm } from "./consultation-form";
import { Lightbulb } from "lucide-react";

export default function ConsultationPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <section className="text-center py-8">
        <Lightbulb className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-5xl font-headline font-bold text-primary">Virtual Aesthetic Consultant</h1>
        <p className="text-xl text-foreground/80 mt-4">
          Let our AI guide you. Describe your aesthetic concerns and preferences, and receive personalized suggestions for treatments.
        </p>
      </section>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Your Concerns</CardTitle>
          <CardDescription>
            Please be as detailed as possible for the best recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ConsultationForm />
        </CardContent>
      </Card>
    </div>
  );
}
