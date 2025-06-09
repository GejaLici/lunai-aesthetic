
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { serviceData } from "@/lib/services";
import Link from "next/link";
import Image from "next/image";
import { Cpu, Leaf, UsersRound } from "lucide-react";

export default function HomePage() {
  const featuredServiceCategories = serviceData.slice(0, 3);

  return (
    <div className="space-y-24"> {/* Increased spacing */}
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-lg shadow-xl overflow-hidden">
        {/*
          Video Background:
          1. Uncomment the <video> tag below. (DONE)
          2. Replace "/videos/hero-background.mp4" with the actual path to your video file
             (e.g., place it in the `public/videos` directory and use `/videos/your-video-name.mp4`)
             or a URL to a remotely hosted video.
          3. Ensure your video is optimized for web playback.
          4. If text is hard to read over the video, uncomment the overlay div below the video tag. (DONE)
        */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional: Dark overlay for better text readability over video. Uncomment if needed. */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Content (ensure it's on top of the video and overlay) */}
        <div className="container mx-auto px-4 relative z-20">
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
        <Card className="shadow-lg overflow-hidden"> {/* Added overflow-hidden for image rounding */}
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-6 md:p-8">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-3xl font-headline text-primary">Welcome to Zenith Aesthetics</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-lg text-foreground/90 space-y-4">
                <p>
                  At Zenith Aesthetics, we believe that everyone deserves to feel confident and beautiful in their own skin. Our state-of-the-art clinic offers a comprehensive range of aesthetic treatments, delivered by experienced professionals dedicated to achieving exceptional, natural-looking results.
                </p>
                <p>
                  We combine artistry with the latest medical advancements to provide personalized care tailored to your unique needs and aspirations. Your journey to enhanced beauty and self-assurance begins here.
                </p>
              </CardContent>
            </div>
            <div className="relative h-64 md:h-full w-full">
              <Image
                src="https://placehold.co/600x450.png"
                alt="Welcoming clinic interior"
                layout="fill"
                objectFit="cover"
                data-ai-hint="clinic interior"
              />
            </div>
          </div>
        </Card>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
          Why Choose Zenith Aesthetics?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center text-center">
              <UsersRound className="h-12 w-12 text-accent mb-4" />
              <CardTitle className="font-headline text-2xl text-foreground">Expert & Personalized Care</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-foreground/80">
                Our highly skilled professionals provide tailored treatments, focusing on your unique goals to ensure the best possible outcomes.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center text-center">
              <Cpu className="h-12 w-12 text-accent mb-4" />
              <CardTitle className="font-headline text-2xl text-foreground">State-of-the-Art Technology</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-foreground/80">
                We utilize the latest advancements and cutting-edge equipment in aesthetic medicine to deliver safe and effective results.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center text-center">
              <Leaf className="h-12 w-12 text-accent mb-4" />
              <CardTitle className="font-headline text-2xl text-foreground">Commitment to Natural Results</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-foreground/80">
                Our philosophy centers on enhancing your natural beauty, aiming for subtle yet significant improvements that look authentic.
              </p>
            </CardContent>
          </Card>
        </div>
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
      <section className="py-16 bg-accent text-accent-foreground rounded-lg shadow-xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-headline font-bold mb-6">Ready for a Transformation?</h2>
          <p className="text-xl mb-8">
            Our AI-powered virtual consultant can help guide you towards the perfect treatment.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-accent-foreground text-accent border-accent-foreground hover:bg-accent-foreground/90 hover:text-accent">
            <Link href="/consultation">Start Your Virtual Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
