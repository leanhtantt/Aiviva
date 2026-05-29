import React from 'react';
import { motion } from 'motion/react';

export function AboutHero({ content }: { content: any }) {
  return (
    <section className="w-full bg-surface pt-16 pb-16 lg:pt-24 lg:pb-24 overflow-hidden relative">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[100%] rounded-full bg-sky blur-[120px] mix-blend-screen" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[100%] rounded-full bg-bright blur-[120px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] relative z-10 text-center max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-deep mb-6 leading-tight tracking-tight"
        >
          {content.headline}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-slate leading-relaxed max-w-2xl mx-auto"
        >
          {content.subheadline}
        </motion.p>
      </div>
    </section>
  );
}
