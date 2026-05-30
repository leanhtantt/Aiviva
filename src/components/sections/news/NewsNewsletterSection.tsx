import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Section } from '../../ui/Section';
import { Button } from '../../ui/Button';
import { Mail, CheckCircle2 } from 'lucide-react';

interface NewsNewsletterSectionProps {
  headline: string;
  subheadline: string;
  placeholder: string;
  buttonText: string;
  successMessage: string;
}

export function NewsNewsletterSection({ headline, subheadline, placeholder, buttonText, successMessage }: NewsNewsletterSectionProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setIsSubscribed(false);
      }, 5000); // Reset after 5 seconds just for demo
    }
  };

  return (
    <Section className="py-24 relative z-10 w-full overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-ink pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent mix-blend-overlay"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-sky/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 text-center md:text-left">
             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-sky flex items-center justify-center text-white mb-6 mx-auto md:mx-0 shadow-lg shadow-primary/20">
               <Mail className="w-8 h-8" />
             </div>
             <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{headline}</h2>
             <p className="text-white/70 text-lg">{subheadline}</p>
          </div>

          <div className="w-full md:w-[400px]">
             {isSubscribed ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/10 border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center gap-3"
                >
                  <CheckCircle2 className="w-12 h-12 text-teal-400" />
                  <p className="text-white font-medium">{successMessage}</p>
                </motion.div>
             ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="relative">
                     <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={placeholder}
                        className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                     />
                  </div>
                  <Button variant="primary" size="lg" type="submit" className="w-full font-bold shadow-lg shadow-primary/30 hover:-translate-y-0.5">
                    {buttonText}
                  </Button>
                </form>
             )}
          </div>

        </div>
      </div>
    </Section>
  );
}
