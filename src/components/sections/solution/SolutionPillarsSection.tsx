import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../../ui/Section';
import { ShieldAlert, HeartPulse, Search, Sparkles } from 'lucide-react';

const icons = [ShieldAlert, HeartPulse, Search, Sparkles];

export function SolutionPillarsSection({ content }: { content: any }) {
  return (
    <Section variant="canvas" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep mb-6 leading-tight"
          >
            {content.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-xl text-slate max-w-2xl mx-auto"
          >
            {content.subheadline}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {content.pillars.map((pillar: any, idx: number) => {
             const Icon = icons[idx] || Sparkles;
             return (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
               >
                 <div className="w-14 h-14 rounded-2xl bg-sky/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                   <Icon className="w-7 h-7" />
                 </div>
                 <h3 className="text-xl font-bold text-ink mb-4">{pillar.title}</h3>
                 <p className="text-slate leading-relaxed">{pillar.desc}</p>
                 <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-1 rounded flex bg-primary/20" />
                 </div>
               </motion.div>
             )
          })}
        </div>
      </div>
    </Section>
  );
}
