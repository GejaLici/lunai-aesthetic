import { db } from "@/lib/firebase";
import { collection, getDocs, query, where, orderBy, limit } from "firebase/firestore";
import { useEffect, useState } from "react";

export interface BlogPost {
  id: string;
  imageUrl: string;
  imageHint: string;
  date: string;
  slug: string;
  title?: { [key: string]: string };
  excerpt?: { [key: string]: string };
  content?: { [key: string]: string };
}

// Fetch all blog posts, sorted by date. For server-side rendering.
export async function getAllBlogPosts(): Promise<BlogPost[]> {
    try {
        const postsCollection = collection(db, 'blogPosts');
        const q = query(postsCollection, orderBy("date", "desc"));
        const postsSnapshot = await getDocs(q);
        return postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BlogPost));
    } catch (error) {
        console.error("Error fetching all blog posts:", error);
        return [];
    }
}

// Fetch a single post by its slug. For server-side rendering.
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const q = query(collection(db, "blogPosts"), where("slug", "==", slug), limit(1));
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


// A client-side hook to get recent posts for components like the homepage.
export function useRecentBlogPosts(count: number) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = collection(db, 'blogPosts');
        const q = query(postsCollection, orderBy("date", "desc"), limit(count));
        const postsSnapshot = await getDocs(q);
        const fetchedPosts = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BlogPost));
        setPosts(fetchedPosts);
      } catch (error) {
        console.error(`Error fetching latest ${count} blog posts:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [count]);

  return { posts, loading };
}