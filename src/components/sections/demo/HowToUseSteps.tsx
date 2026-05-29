import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../../ui/Section';

export function HowToUseSteps({ content }: { content: any }) {
  return (
    <Section variant="canvas" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)]">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-deep mb-6"
          >
            {content.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate"
          >
            {content.subheadline}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
           {/* Connecting line for desktop */}
           <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-primary/0 via-border to-primary/0" />

           {content.steps.map((step: any, idx: number) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="relative flex flex-col pt-8 md:pt-0"
             >
               <div className="w-16 h-16 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center text-2xl font-bold text-primary mb-8 md:mx-auto relative z-10">
                 {idx + 1}
               </div>
               
               <div className="bg-surface rounded-3xl p-8 border border-border shadow-sm flex-1 h-full">
                 <h3 className="text-xl font-bold text-ink mb-6">{step.title}</h3>
                 <ul className="space-y-4">
                   {step.items.map((item: string, i: number) => (
                     <li key={i} className="flex items-start gap-3">
                       <div className="w-6 h-6 rounded-full bg-mist flex items-center justify-center text-primary shrink-0 mt-0.5">
                         <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                       </div>
                       <span className="text-slate leading-relaxed">{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             </motion.div>
           ))}
        </div>

      </div>
    </Section>
  );
}
