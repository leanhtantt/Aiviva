import React from 'react';
import { motion } from 'motion/react';
import { DemoPhoneSimulator } from './DemoPhoneSimulator';

export function DemoIntroSection({ content }: { content: any }) {
  return (
    <section className="w-full bg-canvas pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-deep mb-6 leading-tight tracking-tight"
          >
            {content.headline}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-slate"
          >
            {content.subheadline}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <DemoPhoneSimulator content={content.cameraMock} />
        </motion.div>

      </div>
    </section>
  );
}
