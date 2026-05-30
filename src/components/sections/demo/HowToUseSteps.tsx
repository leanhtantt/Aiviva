import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../../ui/Section';

export interface HowToUseStep {
  title: string;
  items: string[];
}

export interface HowToUseContent {
  headline: string;
  subheadline: string;
  steps: HowToUseStep[];
}

export function HowToUseSteps({ content }: { content: HowToUseContent }) {
  return (
    <Section variant="canvas" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)]">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-deep mb-6 tracking-tight"
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

        <div className="max-w-5xl mx-auto">
          {/* Timeline Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 relative">
             
             {/* Connecting line for desktop */}
             <div className="hidden lg:block absolute top-[28px] left-[15%] right-[15%] h-[4px] bg-mist rounded-full overflow-hidden">
               <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-sky"
               />
             </div>

             {/* Connecting line for mobile */}
             <div className="lg:hidden absolute top-[28px] bottom-[28px] left-[28px] w-[4px] bg-mist rounded-full overflow-hidden">
               <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-full bg-gradient-to-b from-primary to-sky"
               />
             </div>

             {content.steps.map((step, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.2 }}
                 className="relative flex-1 flex flex-row lg:flex-col items-start lg:items-center pr-0 lg:px-6 group"
               >
                 {/* Number Badge */}
                 <div className="w-14 h-14 lg:w-16 lg:h-16 shrink-0 rounded-full bg-white border-[4px] border-canvas shadow-lg flex items-center justify-center text-xl lg:text-2xl font-black text-primary mb-0 lg:mb-8 z-10 mr-6 lg:mr-0 group-hover:scale-110 transition-transform">
                   {idx + 1}
                 </div>
                 
                 {/* Content Card */}
                 <div className="bg-white rounded-[2rem] p-6 lg:p-8 border border-border shadow-sm flex-1 w-full hover:shadow-md transition-shadow">
                   <h3 className="text-xl font-bold text-ink mb-4">{step.title}</h3>
                   <ul className="space-y-3">
                     {step.items.map((item: string, i: number) => (
                       <li key={i} className="flex items-start gap-3">
                         <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                           <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                         </div>
                         <span className="text-sm md:text-base text-slate leading-relaxed">{item}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
