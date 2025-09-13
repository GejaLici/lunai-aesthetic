import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import { Newspaper } from 'lucide-react';
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import type { BlogPost } from "@/lib/blog-posts";

export const revalidate = 0; // Force dynamic rendering to fetch latest posts

async function getBlogPosts() {
  try {
    const postsCollection = collection(db, 'blogPosts');
    const q = query(postsCollection, orderBy("date", "desc"));
    const postsSnapshot = await getDocs(q);
    const posts = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BlogPost));
    return posts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  // Note: We're rendering this server-side, so useTranslations is not available here.
  // We will pass translations down or handle them differently if needed,
  // but for now, we'll use English as the default.

  if (!posts || posts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <Newspaper className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-5xl font-headline font-bold text-primary">LUNAI Blog</h1>
        <p className="text-xl text-foreground/80 mt-4">
          No blog posts available at the moment. Please check back soon for insights and news from LUNAI.
        </p>
      </div>
    );
  }

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-8">
        <Newspaper className="h-16 w-16 text-accent mx-auto mb-4" />
        <h1 className="text-5xl font-headline font-bold text-primary">LUNAI Blog</h1>
        <p className="text-xl text-foreground/80 mt-4">
          Insights, tips, and news on aesthetic treatments and wellness from LUNAI.
        </p>
      </section>

      {featuredPost && (
        <section className="py-8 mb-8">
          <Card className="flex flex-col md:flex-row shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.01] bg-card overflow-hidden">
            <div className="md:w-1/2 relative min-h-[250px] md:min-h-full h-72 md:h-auto">
              <Image
                src={featuredPost.imageUrl}
                alt={featuredPost.title?.en || 'Featured Post'}
                fill
                className="object-cover"
                data-ai-hint={featuredPost.imageHint}
              />
            </div>
            <div className="md:w-1/2 flex flex-col p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="font-headline text-2xl lg:text-3xl text-primary mb-2">{featuredPost.title?.en}</CardTitle>
                <p className="text-sm text-muted-foreground">{new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <CardDescription className="text-foreground/90 text-base mb-4">
                  {featuredPost.excerpt?.en}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-0 mt-4">
                <Button asChild variant="link" className="text-accent p-0 hover:text-accent/80 text-base">
                  <Link href={`/blog/${featuredPost.slug}`}>Read More &rarr;</Link>
                </Button>
              </CardFooter>
            </div>
          </Card>
        </section>
      )}

      <section className="py-8">
        <div className="grid md:grid-cols-2 gap-10">
          {regularPosts.map((post) => (
            <Card key={post.id} className="flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] bg-card">
              <CardHeader className="p-0">
                <div className="relative w-full h-56 rounded-t-lg overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title?.en || 'Blog post image'}
                    fill
                    className="object-cover"
                    data-ai-hint={post.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow pt-6 flex flex-col">
                <CardTitle className="font-headline text-xl text-primary mb-2">{post.title?.en}</CardTitle>
                <p className="text-sm text-muted-foreground mb-3">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <CardDescription className="text-foreground/90 text-sm mb-4 flex-grow">
                  {post.excerpt?.en}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-accent p-0 hover:text-accent/80">
                  <Link href={`/blog/${post.slug}`}>Read More &rarr;</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
