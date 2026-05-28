import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../../ui/Button';
import { Activity } from 'lucide-react';
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-start gap-4 sm:gap-5 text-left mx-auto lg:mx-0 w-full max-w-md"
          >
             {content.badges.map((badge: string, idx: number) => (
                <div key={idx} className="flex items-center gap-4 text-xl sm:text-2xl font-medium text-white/95 w-full">
                  <Activity className="w-7 h-7 text-sky-300 shrink-0" />
                  <span>{badge}</span>
                </div>
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
