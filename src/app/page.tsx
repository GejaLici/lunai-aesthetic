import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { serviceData } from "@/lib/services";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function HomePage() {
  const featuredServiceCategories = serviceData.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-card rounded-lg shadow-xl">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary mb-6 animate-fadeIn">
            Zenith Aesthetics
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Reaching the Pinnacle of Beauty and Confidence
          </p>
          <div className="space-x-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/services">Explore Our Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Link href="/consultation">Virtual Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="container mx-auto px-4 py-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-primary">Welcome to Zenith Aesthetics</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-foreground/90 space-y-4">
            <p>
              At Zenith Aesthetics, we believe that everyone deserves to feel confident and beautiful in their own skin. Our state-of-the-art clinic offers a comprehensive range of aesthetic treatments, delivered by experienced professionals dedicated to achieving exceptional, natural-looking results.
            </p>
            <p>
              We combine artistry with the latest medical advancements to provide personalized care tailored to your unique needs and aspirations. Your journey to enhanced beauty and self-assurance begins here.
            </p>
            <div className="flex items-center space-x-2 text-accent">
              <CheckCircle className="h-6 w-6" />
              <span>Expert Care & Personalized Treatments</span>
            </div>
            <div className="flex items-center space-x-2 text-accent">
              <CheckCircle className="h-6 w-6" />
              <span>State-of-the-Art Technology</span>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Featured Services Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
          Our Premier Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredServiceCategories.map((category, index) => (
            <Card key={category.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeIn" style={{ animationDelay: `${0.2 * index}s` }}>
              <CardHeader>
                {category.icon && <category.icon className="h-12 w-12 text-accent mb-4" />}
                <CardTitle className="font-headline text-2xl text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 mb-6">
                  {category.services.slice(0, 2).map(s => s.name).join(', ')} and more...
                </CardDescription>
                <Button asChild variant="link" className="text-accent p-0">
                  <Link href={`/services#${category.id}`}>Learn More &rarr;</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action for Consultation */}
      <section className="py-16 bg-primary text-primary-foreground rounded-lg shadow-xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-headline font-bold mb-6">Ready for a Transformation?</h2>
          <p className="text-xl mb-8">
            Our AI-powered virtual consultant can help guide you towards the perfect treatment.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90">
            <Link href="/consultation">Start Your Virtual Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
