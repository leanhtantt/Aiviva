export type NewsArticleBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string };

export interface NewsArticle {
  id: string;
  translationKey: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
  featured?: boolean;
  content?: NewsArticleBlock[];
  author?: string;
  tags?: string[];
  heroImage?: string;
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
  detail: {
    backToNews: string;
    articleNotFound: string;
    relatedArticles: string;
    shareArticle: string;
    linkCopied: string;
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
