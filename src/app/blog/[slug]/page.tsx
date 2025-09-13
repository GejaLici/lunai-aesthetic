import { db } from '@/lib/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BlogPost } from '@/lib/blog-posts';

type BlogPostPageProps = {
    params: {
        slug: string;
    };
};

async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const q = query(collection(db, "blogPosts"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            return null;
        }
        const doc = querySnapshot.docs[0];
        return { id: doc.id, ...doc.data() } as BlogPost;
    } catch (error) {
        console.error("Error fetching post by slug:", error);
        return null;
    }
}

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

    // A simple function to render content based on a hypothetical structure
    // For now, we'll just render the English content as a single block.
    // A more advanced version would parse a JSON structure like the old posts had.
    const renderContent = (content: string) => {
        // Simple paragraph splitting
        return content.split('\\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
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
                    {/* Render the english content for now */}
                    {post.content?.en && renderContent(post.content.en)}
                </div>
            </article>
        </div>
    );
}

// Optional: Generate static paths for all blog posts at build time for better performance
export async function generateStaticParams() {
    try {
        const querySnapshot = await getDocs(collection(db, "blogPosts"));
        const slugs = querySnapshot.docs.map(doc => ({
            slug: doc.data().slug as string,
        }));
        return slugs;
    } catch (error) {
        console.error("Error generating static params for blog posts:", error);
        return [];
    }
}
