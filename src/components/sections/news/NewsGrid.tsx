import React, { useState } from 'react';
import { NewsArticle } from '../../../types/news';
import { NewsCard } from './NewsCard';
import { NewsCategoryTabs } from './NewsCategoryTabs';
import { Section } from '../../ui/Section';
import { motion, AnimatePresence } from 'motion/react';

interface NewsGridProps {
  articles: NewsArticle[];
  categories: string[];
  allLabel: string;
  emptyState: string;
}

export function NewsGrid({ articles, categories, allLabel, emptyState }: NewsGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>(allLabel);

  const filteredArticles = activeCategory === allLabel 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  const featuredArticle = filteredArticles.find(a => a.featured) || filteredArticles[0];
  
  // If there's a featured article, we show it at the top, and filter it out of the grid below.
  const gridArticles = featuredArticle 
    ? filteredArticles.filter(a => a.id !== featuredArticle.id)
    : filteredArticles;

  return (
    <Section className="py-12 relative z-10 w-full" variant="surface">
      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)]">
        
        <NewsCategoryTabs 
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          allLabel={allLabel}
        />

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-8 md:gap-12"
          >
            {/* Featured Article */}
            {filteredArticles.length > 0 ? (
                <>
                  {featuredArticle && (
                    <NewsCard 
                      article={featuredArticle} 
                      featured={true} 
                      index={0} 
                    />
                  )}
                  
                  {/* Standard Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {gridArticles.map((article, i) => (
                      <NewsCard 
                        key={article.id}
                        article={article}
                        index={i + 1}
                      />
                    ))}
                  </div>
                </>
            ) : (
                <div className="py-20 text-center">
                    <p className="text-slate text-lg">{emptyState}</p>
                </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </Section>
  );
}
