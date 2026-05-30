import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Section } from '../../ui/Section';
import { Button } from '../../ui/Button';
import { Mail, CheckCircle2 } from 'lucide-react';
import { useLang } from '../../../lib/i18n';
import { submitGoogleForm } from '../../../lib/googleForms';

interface NewsNewsletterSectionProps {
  headline: string;
  subheadline: string;
  placeholder: string;
  buttonText: string;
  successMessage: string;
}

export function NewsNewsletterSection({ headline, subheadline, placeholder, buttonText, successMessage }: NewsNewsletterSectionProps) {
  const lang = useLang();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isSubmitting) {
      setIsSubmitting(true);
      try {
        const formId = import.meta.env.VITE_GOOGLE_SUBSCRIBE_FORM_ID;
        const entries: Record<string, string> = {};
        
        const emailKey = import.meta.env.VITE_GOOGLE_SUBSCRIBE_ENTRY_EMAIL;
        if (emailKey) entries[emailKey] = email;
        
        const langKey = import.meta.env.VITE_GOOGLE_SUBSCRIBE_ENTRY_LANG;
        if (langKey) entries[langKey] = lang;
        
        const sourceKey = import.meta.env.VITE_GOOGLE_SUBSCRIBE_ENTRY_SOURCE;
        if (sourceKey) entries[sourceKey] = 'news';

        await submitGoogleForm(formId || '', entries);
        
        setIsSubscribed(true);
        setEmail('');
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          setIsSubscribed(false);
        }, 5000);
      } catch (error) {
        // Silently fail or keep email
        console.error("Subscription failed:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Section variant="canvas" className="text-center py-16 lg:py-24 border-none">
      <div 
        className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden px-6 py-16 md:py-20 lg:px-16 text-white shadow-2xl transition-all duration-300 hover:shadow-[0_24px_60px_rgba(8,112,184,0.22)]"
        style={{
          background: "linear-gradient(120deg, var(--color-deep-val) 0%, var(--color-primary-val) 52%, var(--color-bright-val) 100%)"
        }}
      >
        {/* Extremely faint modern design grid pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.12]" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Ambient glow spots */}
        <div className="absolute -top-[30%] -right-[20%] w-[60%] h-[120%] rounded-full bg-sky/20 blur-[120px] pointer-events-none mix-blend-screen" />
        <div className="absolute -bottom-[30%] -left-[20%] w-[60%] h-[120%] rounded-full bg-bright/20 blur-[120px] pointer-events-none mix-blend-screen" />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-md border border-white/20">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight select-none">
            {headline}
          </h2>
          <p className="text-mist text-base sm:text-lg mb-10 text-opacity-95 leading-relaxed max-w-xl">
            {subheadline}
          </p>

          <div className="w-full max-w-md mx-auto">
             {isSubscribed ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center gap-3"
                >
                  <CheckCircle2 className="w-12 h-12 text-white" />
                  <p className="text-white font-medium">{successMessage}</p>
                </motion.div>
             ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
                  <div className="relative flex-1">
                     <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={placeholder}
                        className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/60 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all h-[56px]"
                     />
                  </div>
                  <Button 
                    size="lg" 
                    type="submit" 
                    disabled={isSubmitting}
                    className="relative overflow-hidden w-full sm:w-auto px-8 shadow-lg !bg-white !text-primary font-bold !rounded-full cursor-pointer opacity-100 transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] hover:shadow-xl h-[56px] flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <span className="absolute inset-0 block bg-gradient-to-r from-transparent via-sky-200/40 to-transparent animate-shimmer pointer-events-none" />
                    <span className="relative z-10">{buttonText}</span>
                  </Button>
                </form>
             )}
          </div>

        </div>
      </div>
    </Section>
  );
}
