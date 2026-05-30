import { useLocation, useNavigate } from 'react-router-dom';
import { useLang } from '@/lib/i18n';
import { newsContentEn } from '../../content/en/news';
import { newsContentVi } from '../../content/vi/news';

export function LanguageSwitcher() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const lang = useLang();
  const nextLang = lang === 'en' ? 'vi' : 'en';

  const toggleLang = () => {
    const pathParts = pathname.split('/');

    if ((pathParts[1] === 'en' || pathParts[1] === 'vi') && pathParts[2] === 'news' && pathParts[3]) {
      const currentSlug = pathParts[3];

      const currentContent = lang === 'en' ? newsContentEn : newsContentVi;
      const nextContent = nextLang === 'en' ? newsContentEn : newsContentVi;

      const currentArticle = currentContent.articles.find((article) => article.slug === currentSlug);
      if (currentArticle) {
        const nextArticle = nextContent.articles.find(
          (article) => article.translationKey === currentArticle.translationKey,
        );
        if (nextArticle) {
          pathParts[1] = nextLang;
          pathParts[3] = nextArticle.slug;
          navigate(pathParts.join('/'), { state: { preventScrollReset: true } });
          return;
        }
      }

      pathParts[1] = nextLang;
      pathParts.length = 3;
      navigate(pathParts.join('/'), { state: { preventScrollReset: true } });
      return;
    }

    if (pathParts[1] === 'en' || pathParts[1] === 'vi') {
      pathParts[1] = nextLang;
      navigate(pathParts.join('/'), { state: { preventScrollReset: true } });
    } else {
      navigate(`/${nextLang}`, { state: { preventScrollReset: true } });
    }
  };

  return (
    <button
      type="button"
      onClick={toggleLang}
      className="group grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-xs font-bold uppercase tracking-wider text-surface shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_20px_rgba(0,0,0,0.16)] backdrop-blur transition-all duration-200 hover:border-white/45 hover:bg-surface hover:text-primary focus:outline-none focus:ring-2 focus:ring-surface/70 focus:ring-offset-2 focus:ring-offset-primary active:scale-95"
      aria-label={lang === 'en' ? 'Switch to Vietnamese' : 'Switch to English'}
    >
      <span className="select-none leading-none">{nextLang}</span>
    </button>
  );
}
