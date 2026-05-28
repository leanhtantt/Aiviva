import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLang } from '@/lib/i18n';
import { useScrollState, useBodyScrollLock } from '@/lib/hooks';

export function SiteHeader() {
  const lang = useLang();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollState(20);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when menu is open
  useBodyScrollLock(isMobileMenuOpen);

  const navigation = [
    { name: lang === 'en' ? 'About' : 'Về chúng tôi', href: `/${lang}/about` },
    { name: lang === 'en' ? 'Solutions' : 'Giải pháp', href: `/${lang}/solution` },
    { name: lang === 'en' ? 'News' : 'Tin tức', href: `/${lang}/news` },
    { name: lang === 'en' ? 'Demo' : 'Trải nghiệm', href: `/${lang}/demo` },
    { name: lang === 'en' ? 'Contact' : 'Liên hệ', href: `/${lang}/contact` },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out pointer-events-none ${
        isScrolled ? 'pt-0' : 'pt-4 px-4 lg:px-8'
      }`}>
        <div className={`pointer-events-auto transition-all duration-500 ease-in-out flex items-center justify-between w-full ${
          isScrolled
            ? 'h-16 bg-primary shadow-md rounded-none max-w-full px-4 md:px-16 lg:px-32 xl:px-[15vw]'
            : 'h-[4.5rem] bg-primary shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] rounded-full max-w-[1200px] px-6 lg:px-10 border border-white/10'
        }`}>
          
          {/* Left - Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to={`/${lang}`} className="flex items-center gap-2 text-surface hover:text-surface/80 transition-colors">
              <Activity className="h-6 w-6" />
              <span className="text-xl font-bold tracking-tight">AIVIVA</span>
            </Link>
          </div>
          
          {/* Center - Navigation */}
          <nav className="hidden md:flex flex-1 justify-center gap-4 lg:gap-8">
            {navigation.map((item) => {
              const isActive = location.pathname.startsWith(item.href) && item.href !== `/${lang}` || (item.href === `/${lang}` && location.pathname === `/${lang}`);
              // Note: adjusted isActive slightly to handle home page but the nav doesn't have home link right now.
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`relative text-sm uppercase tracking-widest transition-colors py-1 group whitespace-nowrap ${
                    isActive ? 'font-bold text-surface' : 'font-semibold text-surface/80 hover:text-surface'
                  }`}
                  id={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                  <span 
                    className={`absolute left-0 right-0 bottom-0 h-0.5 bg-surface transition-transform origin-left duration-300 ease-out ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
          
          {/* Right - CTA & Mobile Menu */}
          <div className="flex-shrink-0 flex items-center justify-end gap-4">
            <Link
              to={`/${lang}/demo`}
              className="hidden sm:inline-flex relative overflow-hidden bg-surface text-primary px-6 py-2.5 text-sm font-bold uppercase tracking-widest rounded-full transition-transform hover:scale-105 shadow-lg group"
            >
              <span className="relative z-10">{lang === 'en' ? 'Free to Scan' : 'Quét Miễn Phí'}</span>
              <motion.div
                className="absolute top-0 left-0 w-[50%] h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent -skew-x-12"
                initial={{ x: '-200%' }}
                animate={{ x: '300%' }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", repeatDelay: 1.5 }}
              />
            </Link>

            <button 
              className="md:hidden p-2 -mr-2 text-surface hover:bg-surface/20 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-ink/20 backdrop-blur-sm z-50 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-surface shadow-2xl z-50 flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between p-4 h-16 border-b border-border">
                <span className="text-sm font-bold text-deep uppercase tracking-widest">Menu</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-slate hover:bg-mist hover:text-deep rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-4 flex flex-col gap-2 overflow-y-auto">
                {navigation.map((item) => {
                  const isActive = location.pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`text-sm uppercase tracking-widest py-3 px-4 rounded-xl transition-colors ${
                        isActive ? 'font-bold text-surface bg-primary' : 'font-medium text-ink hover:text-primary hover:bg-mist'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
