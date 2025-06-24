
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "./contact-form";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-8">
        <h1 className="text-5xl font-headline font-bold text-primary">Contact Lunai Aesthetics</h1>
        <p className="text-xl text-foreground/80 mt-4">
          We're here to answer your questions and help you schedule your appointment at Lunai Aesthetics.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Send Us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <Card className="shadow-xl bg-card">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Clinic Information</CardTitle>
            <CardDescription>Find us or get in touch directly.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground/90">
            <div className="flex items-start space-x-3">
              <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>Lunai Aesthetics</p>
                <p>123 Beauty Avenue, Suite 400</p>
                <p>Aesthetics City, AC 54321</p>
                <p className="text-sm text-muted-foreground mt-1">(Interactive map placeholder: A map will be displayed here in a future update.)</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>(123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>contact@luniaesthetics.com</p>
              </div>
            </div>
            <div>
                <h3 className="font-semibold mb-2">Clinic Hours</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                    <li>Saturday: 10:00 AM - 4:00 PM</li>
                    <li>Sunday: Closed</li>
                </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
