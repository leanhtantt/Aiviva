import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { newsContentEn } from '../content/en/news';
import { newsContentVi } from '../content/vi/news';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { NewsCard } from '../components/sections/news/NewsCard';
import { NewsArticleBlock } from '../types/news';

function renderBlock(block: NewsArticleBlock, index: number) {
  switch (block.type) {
    case 'heading':
      return <h2 key={index} className="text-2xl md:text-3xl font-bold text-ink mt-12 mb-6">{block.text}</h2>;
    case 'paragraph':
      return <p key={index} className="text-slate text-lg md:text-xl leading-relaxed mb-6">{block.text}</p>;
    case 'list':
      return (
        <ul key={index} className="list-disc list-inside text-slate text-lg md:text-xl leading-relaxed mb-6 ml-4 space-y-2">
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    case 'quote':
      return (
        <blockquote key={index} className="border-l-4 border-primary pl-6 my-8 italic text-xl md:text-2xl font-medium text-ink/80">
          "{block.text}"
        </blockquote>
      );
    default:
      return null;
  }
}

export default function NewsDetail() {
  const { lang = 'en', slug } = useParams<{ lang: string; slug: string }>();
  const content = lang === 'vi' ? newsContentVi : newsContentEn;
  const [imgError, setImgError] = useState(false);

  const article = content.articles.find(a => a.slug === slug);

  // Scroll to top on load or path change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 pb-24 px-4 bg-white relative z-10 w-full text-center">
         <div className="max-w-md w-full flex flex-col items-center gap-6">
           <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-slate-400 text-6xl">?</span>
           </div>
           <h1 className="text-3xl font-bold text-ink">{content.detail.articleNotFound}</h1>
           <Link to={`/${lang}/news`} className="mt-4 inline-flex items-center justify-center rounded-[var(--radius-button)] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky disabled:pointer-events-none disabled:opacity-50 bg-primary text-surface hover:bg-deep shadow-sm h-10 px-4 py-2">
              {content.detail.backToNews}
           </Link>
         </div>
      </div>
    );
  }

  const relatedArticles = content.articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  const heroImageSrc = article.heroImage || article.image;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Article Header Section */}
      <Section className="pt-32 lg:pt-40 pb-12 relative z-10 w-full">
        <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)]">
          <Link 
            to={`/${lang}/news`} 
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-sky transition-colors mb-10 group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            {content.detail.backToNews}
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-full uppercase tracking-wider mb-6">
              {article.category}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink mb-8 leading-[1.1]">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-slate text-sm font-medium">
               <div className="flex items-center gap-1.5 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                 <Calendar className="w-4 h-4 text-slate-400" />
                 <span>{article.date}</span>
               </div>
               <div className="flex items-center gap-1.5 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                 <Clock className="w-4 h-4 text-slate-400" />
                 <span>{article.readTime}</span>
               </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Hero Image */}
      <Section className="py-0 relative z-10 w-full">
        <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="w-full max-w-5xl mx-auto relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-slate-100 shadow-xl"
          >
            {heroImageSrc && !imgError ? (
              <img 
                src={heroImageSrc} 
                alt={article.title}
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-sky/20 flex flex-col items-center justify-center p-8">
                 <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/50 backdrop-blur-md mb-6 flex items-center justify-center shadow-lg border border-white/40">
                    <span className="text-4xl md:text-5xl font-bold text-primary/40">{article.category?.charAt(0) || 'A'}</span>
                 </div>
              </div>
            )}
          </motion.div>
        </div>
      </Section>

      {/* Article Body */}
      <Section className="py-16 md:py-24 relative z-10 w-full">
        <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)]">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg md:prose-xl text-slate max-w-none">
              {article.content ? (
                 article.content.map((block, index) => renderBlock(block, index))
              ) : (
                <p className="text-slate text-lg leading-relaxed">{article.excerpt}</p>
              )}
            </div>

            <div className="mt-16 pt-8 border-t border-mist flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex gap-2">
                 {(article.tags || []).map(tag => (
                   <span key={tag} className="px-3 py-1 bg-slate-50 text-slate text-sm font-medium rounded-md border border-slate-200">
                     #{tag}
                   </span>
                 ))}
              </div>
              <button className="flex items-center gap-2 text-slate hover:text-primary font-medium transition-colors group px-4 py-2 rounded-full hover:bg-primary/5">
                <Share2 className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                {content.detail.shareArticle}
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <Section className="py-20 lg:py-24 relative z-10 w-full" variant="surface">
          <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)]">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold text-ink">{content.detail.relatedArticles}</h2>
                <Link to={`/${lang}/news`} className="text-primary font-medium hover:underline hidden sm:block">
                  {content.filter.all}
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {relatedArticles.map((relArticle, index) => (
                  <NewsCard 
                    key={relArticle.id}
                    article={relArticle}
                    index={index}
                  />
                ))}
              </div>
              <div className="mt-8 text-center sm:hidden">
                <Link to={`/${lang}/news`} className="w-full inline-flex items-center justify-center rounded-[var(--radius-button)] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky disabled:pointer-events-none disabled:opacity-50 border border-slate text-ink hover:bg-canvas h-10 px-4 py-2">
                  {content.filter.all}
                </Link>
              </div>
            </div>
          </div>
        </Section>
      )}
    </div>
  );
}
