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
