import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLang } from '@/lib/i18n';
import { newsContentEn } from '../../content/en/news';
import { newsContentVi } from '../../content/vi/news';

export function LanguageSwitcher() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const lang = useLang();

  const toggleLang = () => {
    const nextLang = lang === 'en' ? 'vi' : 'en';
    const pathParts = pathname.split('/');
    
    // Check if we are on /:lang/news/:slug
    if ((pathParts[1] === 'en' || pathParts[1] === 'vi') && pathParts[2] === 'news' && pathParts[3]) {
      const currentSlug = pathParts[3];
      
      const currentContent = lang === 'en' ? newsContentEn : newsContentVi;
      const nextContent = nextLang === 'en' ? newsContentEn : newsContentVi;
      
      const currentArticle = currentContent.articles.find(a => a.slug === currentSlug);
      if (currentArticle) {
        const nextArticle = nextContent.articles.find(a => a.translationKey === currentArticle.translationKey);
        if (nextArticle) {
          pathParts[1] = nextLang;
          pathParts[3] = nextArticle.slug;
          navigate(pathParts.join('/'));
          return;
        }
      }
      
      // Fallback
      pathParts[1] = nextLang;
      pathParts.length = 3;
      navigate(pathParts.join('/'));
      return;
    }

    if (pathParts[1] === 'en' || pathParts[1] === 'vi') {
      pathParts[1] = nextLang;
      navigate(pathParts.join('/'));
    } else {
      navigate(`/${nextLang}`);
    }
  };

  return (
    <button
      onClick={toggleLang}
      className="relative flex items-center h-10 w-[200px] bg-mist rounded-full cursor-pointer border border-pale hover:border-sky transition-colors focus:outline-none focus:ring-2 focus:ring-sky shadow-inner"
      aria-label={lang === 'en' ? 'Chuyển sang tiếng Việt' : 'Switch to English'}
    >
      {/* Background texts */}
      <span className="absolute left-[24px] text-xs font-bold text-slate z-0 select-none">English</span>
      <span className="absolute right-[20px] text-xs font-bold text-slate z-0 select-none">Tiếng Việt</span>
      
      {/* Moving toggle pill */}
      <motion.div
        className="absolute top-[3px] flex items-center justify-center h-[32px] w-[96px] bg-surface rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.1)] border border-border z-10"
        animate={{
          left: lang === 'en' ? '3px' : 'calc(100% - 99px)',
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <span className="text-xs font-bold text-deep select-none tracking-wide uppercase">
          {lang === 'en' ? 'English' : 'Tiếng Việt'}
        </span>
      </motion.div>
    </button>
  );
}
