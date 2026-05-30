import React from 'react';
import { motion } from 'motion/react';
import { NewsArticle } from '../../../types/news';
import { Clock, Calendar } from 'lucide-react';

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
  index: number;
}

export function NewsCard({ article, featured, index }: NewsCardProps) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: featured ? 0 : index * 0.1 }}
      className={`group flex flex-col bg-white rounded-3xl overflow-hidden border border-mist shadow-sm hover:shadow-xl transition-all duration-300 block 
        ${featured ? 'lg:flex-row' : ''}
      `}
    >
      <div className={`relative overflow-hidden bg-slate-100 ${featured ? 'w-full lg:w-1/2 aspect-video lg:aspect-auto' : 'aspect-video w-full'}`}>
        {article.image ? (
            <img 
              src={article.image} 
              alt={article.title}
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
        ) : (
           <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-sky/20 flex flex-col items-center justify-center p-6 text-center text-primary/40 transition-transform duration-700 group-hover:scale-105">
             <div className="w-16 h-16 rounded-full bg-white/50 backdrop-blur-sm mb-4 flex items-center justify-center shadow-sm">
                <span className="text-xl font-bold">{article.category.charAt(0)}</span>
             </div>
             <span className="font-medium">{article.category}</span>
           </div>
        )}
      </div>

      <div className={`flex flex-col p-6 sm:p-8 ${featured ? 'w-full lg:w-1/2 justify-center' : 'flex-1'}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
            {article.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-slate font-medium">
             <Calendar className="w-3.5 h-3.5" />
             <span>{article.date}</span>
          </div>
        </div>

        <h3 className={`font-bold text-ink mb-3 group-hover:text-primary transition-colors ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
          {article.title}
        </h3>
        
        <p className={`text-slate mb-6 line-clamp-2 ${featured ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}`}>
          {article.excerpt}
        </p>
        
        <div className="mt-auto flex items-center gap-4 text-xs font-semibold text-slate">
           <div className="flex items-center gap-1.5">
             <Clock className="w-4 h-4" />
             <span>{article.readTime}</span>
           </div>
        </div>
      </div>
    </motion.article>
  );
}
