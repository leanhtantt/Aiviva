import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function stripLang(pathname: string) {
  return pathname.replace(/^\/(en|vi)(?=\/|$)/, '') || '/';
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    // If there is a hash, scroll to the target element.
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 10);
      prevPathRef.current = pathname;
      return;
    }
    
    const prevNormalized = stripLang(prevPathRef.current);
    const nextNormalized = stripLang(pathname);

    // Only scroll to top if the normalized path changed (navigating to a different page)
    if (prevNormalized !== nextNormalized) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }

    prevPathRef.current = pathname;
  }, [pathname, hash]);

  return null;
}
