
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import { Newspaper } from 'lucide-react';

// Placeholder blog post data - Exported for use on homepage
export const placeholderPosts = [
  {
    id: "1",
    title: "The Future of Non-Invasive Treatments",
    excerpt: "Explore the latest advancements in non-surgical aesthetic procedures and what they mean for you. Discover cutting-edge technologies that promise remarkable results with minimal downtime.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "futuristic technology",
    date: "June 20, 2024",
    slug: "#", // Placeholder slug, actual link TBD
  },
  {
    id: "2",
    title: "Understanding Your Skin Type for Better Care",
    excerpt: "A comprehensive guide to identifying your skin type and choosing the right products and treatments for a healthy, glowing complexion. Learn the secrets to personalized skincare.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "skin care products",
    date: "June 15, 2024",
    slug: "#", // Placeholder slug
  },
  {
    id: "3",
    title: "Post-Treatment Care: Tips for Optimal Results",
    excerpt: "Learn how to care for your skin after aesthetic treatments to ensure longevity and the best possible outcomes. Maximize the benefits of your procedures with our expert advice.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "healing process",
    date: "June 10, 2024",
    slug: "#", // Placeholder slug
  },
   {
    id: "4",
    title: "The Science Behind Anti-Aging Solutions",
    excerpt: "Delve into the science of aging and discover how modern aesthetic treatments can effectively turn back the clock, rejuvenating your appearance and boosting your confidence.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "science anti-aging",
    date: "June 5, 2024",
    slug: "#",
  },
  {
    id: "5",
    title: "Nutrition and Skin Health: Eating Your Way to Radiance",
    excerpt: "Discover the powerful connection between your diet and the health of your skin. Learn which foods can help you achieve a naturally radiant and youthful glow from within.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "healthy food",
    date: "May 30, 2024",
    slug: "#",
  },
  {
    id: "6",
    title: "Debunking Common Myths About Aesthetic Procedures",
    excerpt: "We separate fact from fiction, addressing common misconceptions about popular aesthetic treatments to help you make informed decisions about your beauty journey.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "question mark",
    date: "May 25, 2024",
    slug: "#",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-8">
        <Newspaper className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-5xl font-headline font-bold text-primary">Zenviora Aesthetics Blog</h1>
        <p className="text-xl text-foreground/80 mt-4">
          Insights, tips, and news on aesthetic treatments and wellness.
        </p>
      </section>

      <section className="py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderPosts.map((post) => (
            <Card key={post.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader className="p-0">
                <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    data-ai-hint={post.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow pt-6 flex flex-col">
                <CardTitle className="font-headline text-xl text-primary mb-2">{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground mb-3">{post.date}</p>
                <CardDescription className="text-foreground/90 text-sm mb-4 flex-grow">
                  {post.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-accent p-0 hover:text-accent/80">
                  <Link href={post.slug}>Read More &rarr;</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Placeholder for pagination or load more button if needed in future 
      <div className="text-center mt-12">
        <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
          Load More Posts
        </Button>
      </div>
      */}
    </div>
  );
}
