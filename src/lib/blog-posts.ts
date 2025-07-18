
export interface BlogPost {
  id: string;
  imageUrl: string;
  imageHint: string;
  date: string;
  slug: string;
}

export const placeholderPosts: BlogPost[] = [
  {
    id: "7",
    imageUrl: "/images/blog/blog-7.png",
    imageHint: "hair transplant",
    date: "July 05, 2024",
    slug: "/blog/hair-transplant-cost-2025",
  },
  {
    id: "1",
    imageUrl: "/images/blog/blog-1.png",
    imageHint: "skincare products",
    date: "June 20, 2024",
    slug: "/blog", 
  },
  {
    id: "2",
    imageUrl: "/images/blog/blog-2.png",
    imageHint: "woman face",
    date: "June 15, 2024",
    slug: "/blog", 
  },
  {
    id: "3",
    imageUrl: "/images/blog/blog-3.png",
    imageHint: "calm relax",
    date: "June 10, 2024",
    slug: "/blog", 
  },
   {
    id: "4",
    imageUrl: "/images/blog/blog-4.png",
    imageHint: "perfect smile",
    date: "June 5, 2024",
    slug: "/blog",
  },
  {
    id: "5",
    imageUrl: "/images/blog/blog-5.png",
    imageHint: "woman silhouette",
    date: "May 30, 2024",
    slug: "/blog",
  },
  {
    id: "6",
    imageUrl: "/images/blog/blog-6.png",
    imageHint: "healthy food",
    date: "May 25, 2024",
    slug: "/blog",
  },
];
