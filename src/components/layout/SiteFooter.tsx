import React from 'react';
import { Link } from 'react-router-dom';
import { Activity } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLang } from '@/lib/i18n';

export function SiteFooter() {
  const lang = useLang();

  return (
    <footer 
      className="border-t border-white/5 pt-16 pb-8 bg-[var(--color-deep-val)] text-white"
    >
      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] text-white">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div>
            <Link to={`/${lang}`} className="flex items-center mb-4 hover:opacity-80 transition-opacity">
              <img src="/assets/brand/logo-aiviva.png" alt="AIVIVA" className="w-[100px] h-[100px] object-contain" />
            </Link>
            <p className="text-sky-100/85 max-w-xs mb-6 text-sm sm:text-base leading-relaxed">
              {lang === 'en' 
                ? 'Pioneering Medical AI Technology for a healthier tomorrow.' 
                : 'Công nghệ AI y tế tiên phong cho một ngày mai khỏe mạnh hơn.'}
            </p>
            <LanguageSwitcher />
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-sky-200 mb-2 uppercase tracking-wider text-xs sm:text-sm">
              {lang === 'en' ? 'Quick Links' : 'Liên kết'}
            </h3>
            <Link to={`/${lang}/about`} className="text-sky-100/80 hover:text-white text-sm sm:text-base transition-colors">
              {lang === 'en' ? 'About Us' : 'Về chúng tôi'}
            </Link>
            <Link to={`/${lang}/solution`} className="text-sky-100/80 hover:text-white text-sm sm:text-base transition-colors">
              {lang === 'en' ? 'Solutions' : 'Giải pháp'}
            </Link>
            <Link to={`/${lang}/demo`} className="text-sky-100/80 hover:text-white text-sm sm:text-base transition-colors">
              {lang === 'en' ? 'Demo' : 'Trải nghiệm'}
            </Link>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-sky-200/70">
          <p>&copy; {new Date().getFullYear()} AIVIVA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
