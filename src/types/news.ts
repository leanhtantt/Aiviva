export interface NewsArticle {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
  featured?: boolean;
}

export interface NewsContent {
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
  };
  filter: {
    all: string;
    categories: string[];
    emptyState: string;
  };
  newsletter: {
    headline: string;
    subheadline: string;
    placeholder: string;
    button: string;
    success: string;
  };
  articles: NewsArticle[];
}
