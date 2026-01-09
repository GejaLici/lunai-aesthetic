
import { getBlogPost } from '../../actions';
import { BlogForm } from '../../blog-form';
import { notFound } from 'next/navigation';

export default async function EditBlogPostPage({ params }: { params: { id: string } }) {
  const post = await getBlogPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
       <h1 className="text-4xl font-headline font-bold text-primary mb-8">Edit Post</h1>
      <BlogForm post={post} />
    </div>
  );
}

export const revalidate = 0;
