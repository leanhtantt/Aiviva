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
    headline: string;
    subheadline: string;
  };
  filter: {
    all: string;
    categories: string[];
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
