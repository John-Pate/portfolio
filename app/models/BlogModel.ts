export interface BlogItem {
  featured_image: string;
  seo_title: string;
  slug: string;
  summary: string;
  published: string;
  categories: [{ name: string; slug: string }];
}
