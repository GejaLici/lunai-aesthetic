
export interface BlogPost {
  id: string;
  imageUrl: string;
  imageHint: string;
  date: string;
  slug: string;
}

export const placeholderPosts: BlogPost[] = [
  {
    id: "1",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "skincare products",
    date: "June 20, 2024",
    slug: "/blog", 
  },
  {
    id: "2",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "woman face",
    date: "June 15, 2024",
    slug: "/blog", 
  },
  {
    id: "3",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "calm relax",
    date: "June 10, 2024",
    slug: "/blog", 
  },
   {
    id: "4",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "perfect smile",
    date: "June 5, 2024",
    slug: "/blog",
  },
  {
    id: "5",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "woman silhouette",
    date: "May 30, 2024",
    slug: "/blog",
  },
  {
    id: "6",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "healthy food",
    date: "May 25, 2024",
    slug: "/blog",
  },
];
