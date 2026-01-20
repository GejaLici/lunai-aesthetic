'use client';

import { getPostBySlug, type BlogPost } from '@/lib/blog-posts';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLocale } from '@/hooks/use-translations';
import { Loader2 } from 'lucide-react';
import { BlogContentRenderer } from '@/components/blog-content-renderer';

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

            // A post is considered "untranslated" if the title is missing for the current locale.
            const title = fetchedPost.title?.[locale];
            const hasTranslation = !!title;

            if (!hasTranslation) {
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

    // This check is now redundant because it's handled in the useEffect, but it's a good safeguard
    if (!title) {
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

                <BlogContentRenderer content={content} />
            </article>
        </div>
    );
}
