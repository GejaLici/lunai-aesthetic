import { getPostBySlug, getAllBlogPosts, type BlogPost } from '@/lib/blog-posts';
import { notFound } from 'next/navigation';
import Image from 'next/image';

type BlogPostPageProps = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: BlogPostPageProps) {
    const post = await getPostBySlug(params.slug);
    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }
    return {
        title: post.title?.en,
        description: post.excerpt?.en,
    }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }
    
    // A simple function to render content. A more advanced version would parse markdown or structured content.
    const renderContent = (content: string) => {
        // Replace newline characters with <br> tags for simple formatting
        return content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4 last:mb-0">{paragraph}</p>
        ));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <article className="max-w-3xl mx-auto">
                <header className="mb-8 text-center">
                    <p className="text-sm text-muted-foreground mb-2">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
                        {post.title?.en}
                    </h1>
                    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mt-6 shadow-lg">
                        <Image
                            src={post.imageUrl}
                            alt={post.title?.en || 'Blog post image'}
                            fill
                            className="object-cover"
                            data-ai-hint={post.imageHint}
                            priority
                        />
                    </div>
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none mx-auto space-y-6 text-foreground/90">
                    {post.content?.en && renderContent(post.content.en)}
                </div>
            </article>
        </div>
    );
}

export async function generateStaticParams() {
    try {
        const posts = await getAllBlogPosts();
        return posts.map(post => ({
            slug: post.slug,
        }));
    } catch (error) {
        console.error("Error generating static params for blog posts:", error);
        return [];
    }
}

// Ensure the page is revalidated to pick up new posts, but still benefits from static generation
export const revalidate = 60; // Revalidate every 60 seconds
