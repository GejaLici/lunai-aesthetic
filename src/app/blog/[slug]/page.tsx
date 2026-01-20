'use client';

import { getPostBySlug, type BlogPost } from '@/lib/blog-posts';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLocale } from '@/hooks/use-translations';
import { Loader2 } from 'lucide-react';

export default function BlogPostPage() {
    const params = useParams();
    const slug = params.slug as string;
    const { locale } = useLocale();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;

        const fetchPost = async () => {
            setLoading(true);
            const fetchedPost = await getPostBySlug(slug);
            if (!fetchedPost) {
                notFound();
                return;
            }

            if (!fetchedPost.title?.[locale] || !fetchedPost.content?.[locale]) {
                notFound();
                return;
            }
            
            setPost(fetchedPost);
            setLoading(false);
        };

        fetchPost();
    }, [slug, locale]);

    useEffect(() => {
        if (post) {
            const title = post.title?.[locale];
            if (title) {
                document.title = `${title} | LUNAI`;
            }
        }
    }, [post, locale]);

    const renderContent = (content: string) => {
        // Replace newline characters with <br> tags for simple formatting
        return content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4 last:mb-0">{paragraph}</p>
        ));
    };

    if (loading) {
      return (
          <div className="flex h-[80vh] w-full items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin" />
          </div>
      );
    }
    
    if (!post) {
        return null; // notFound() would have been called
    }

    const title = post.title?.[locale];
    const content = post.content?.[locale];

    if (!title || !content) {
        // This is a fallback, but the useEffect should have already called notFound()
        notFound();
        return null;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <article className="max-w-3xl mx-auto">
                <header className="mb-8 text-center">
                    <p className="text-sm text-muted-foreground mb-2">{new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
                        {title}
                    </h1>
                    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mt-6 shadow-lg">
                        <Image
                            src={post.imageUrl}
                            alt={title || 'Blog post image'}
                            fill
                            className="object-cover"
                            data-ai-hint={post.imageHint}
                            priority
                        />
                    </div>
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none mx-auto space-y-6 text-foreground/90">
                    {renderContent(content)}
                </div>
            </article>
        </div>
    );
}

// We keep generateStaticParams to hint Next.js about the available routes for static optimization.
export async function generateStaticParams() {
    try {
        const { getAllBlogPosts } = await import('@/lib/blog-posts');
        const posts = await getAllBlogPosts();
        return posts.map(post => ({
            slug: post.slug,
        }));
    } catch (error) {
        console.error("Error generating static params for blog posts:", error);
        return [];
    }
}
