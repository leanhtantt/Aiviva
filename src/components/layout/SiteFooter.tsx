import React from 'react';
import { Link } from 'react-router-dom';
import { Activity } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLang } from '@/lib/i18n';

export function SiteFooter() {
  const lang = useLang();

  return (
    <footer className="border-t border-border bg-canvas pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div>
            <Link to={`/${lang}`} className="flex items-center gap-2 text-deep mb-4 hover:text-primary transition-colors">
              <Activity className="h-6 w-6" />
              <span className="text-xl font-bold tracking-tight">AIVIVA</span>
            </Link>
            <p className="text-slate max-w-xs mb-6">
              {lang === 'en' 
                ? 'Pioneering Medical AI Technology for a healthier tomorrow.' 
                : 'Công nghệ AI y tế tiên phong cho một ngày mai khỏe mạnh hơn.'}
            </p>
            <LanguageSwitcher />
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-ink mb-2">
              {lang === 'en' ? 'Quick Links' : 'Liên kết'}
            </h3>
            <Link to={`/${lang}/about`} className="text-slate hover:text-primary transition-colors">
              {lang === 'en' ? 'About Us' : 'Về chúng tôi'}
            </Link>
            <Link to={`/${lang}/solution`} className="text-slate hover:text-primary transition-colors">
              {lang === 'en' ? 'Solutions' : 'Giải pháp'}
            </Link>
            <Link to={`/${lang}/demo`} className="text-slate hover:text-primary transition-colors">
              {lang === 'en' ? 'Demo' : 'Trải nghiệm'}
            </Link>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate">
          <p>&copy; {new Date().getFullYear()} AIVIVA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
