import React from 'react';
import { useParams } from 'react-router-dom';
import { newsContentEn } from '../content/en/news';
import { newsContentVi } from '../content/vi/news';
import { NewsHeroSection } from '../components/sections/news/NewsHeroSection';
import { NewsGrid } from '../components/sections/news/NewsGrid';
import { NewsNewsletterSection } from '../components/sections/news/NewsNewsletterSection';

export default function News() {
  const { lang = 'en' } = useParams<{ lang: string }>();
  const content = lang === 'vi' ? newsContentVi : newsContentEn;

  return (
    <div className="flex flex-col min-h-screen">
      <NewsHeroSection 
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
      />
      <NewsGrid 
        articles={content.articles}
        categories={content.filter.categories}
        allLabel={content.filter.all}
      />
      <NewsNewsletterSection 
        headline={content.newsletter.headline}
        subheadline={content.newsletter.subheadline}
        placeholder={content.newsletter.placeholder}
        buttonText={content.newsletter.button}
        successMessage={content.newsletter.success}
      />
    </div>
  );
}

