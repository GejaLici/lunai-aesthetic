import { ContactForm } from "@/app/contact/contact-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
       <section className="text-center py-8">
        <Mail className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-5xl font-headline font-bold text-primary">Contact Us</h1>
        <p className="text-xl text-foreground/80 mt-4 max-w-3xl mx-auto">
          We're here to help. Reach out to us with any questions or to schedule your in-person consultation at LUNAI.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <Card className="shadow-lg">
           <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>
              Our team will get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-accent" />
                    Our Contact Information
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
                <p>
                    <strong>LUNAI Clinic</strong><br/>
                    123 Beauty Avenue, Suite 400<br/>
                    Aesthetics City, AC 54321
                </p>
                <p>
                    <strong>Email:</strong> contact@lunai.clinic
                </p>
                 <p>
                    <strong>Phone:</strong> (123) 456-7890
                </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
