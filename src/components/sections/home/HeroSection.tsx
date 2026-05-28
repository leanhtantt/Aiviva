import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../../ui/Button';
import { PhoneScanMockup } from '../../ui/PhoneScanMockup';

export function HeroSection({ content }: { content: any }) {
  return (
    <section 
      className="w-full relative overflow-hidden bg-surface pt-32 pb-16 lg:pt-40 lg:pb-24"
      style={{
        background: "linear-gradient(120deg, var(--color-deep-val) 0%, var(--color-primary-val) 52%, var(--color-bright-val) 100%)"
      }}
    >
      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[500px]">
        
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left pt-10 lg:pt-0">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl tracking-tight text-4xl sm:text-5xl lg:text-6xl font-bold text-surface mb-6 lg:leading-[1.1] whitespace-pre-line"
          >
            {content.headline}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl text-lg sm:text-xl text-mist/90 mb-10 leading-relaxed"
          >
            {content.subheadline}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
          >
            <Button size="lg" disabled className="font-semibold px-8 w-full sm:w-auto shadow-none !bg-mist/20 !text-surface border border-mist/30 cursor-not-allowed">
              {content.cta}
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
             {content.badges.map((badge: string, idx: number) => (
                <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface/10 rounded-full text-xs font-medium text-surface border border-surface/20">
                  <svg className="w-3 h-3 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  {badge}
                </span>
             ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 w-full max-w-sm lg:max-w-md flex justify-center lg:justify-end"
        >
          <PhoneScanMockup />
        </motion.div>
      </div>
      
      {/* Abstract background graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[100%] rounded-full bg-sky blur-[100px] mix-blend-screen" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[100%] rounded-full bg-bright blur-[100px] mix-blend-screen" />
      </div>
    </section>
  );
}
