import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../../ui/Section';
import { Badge } from '../../ui/Badge';
import { Smartphone, Cpu, ShieldCheck, HeartPulse } from 'lucide-react';

const icons = [Smartphone, Cpu, ShieldCheck, HeartPulse];

export function HowItWorksSection({ content }: { content: any }) {
  return (
    <Section variant="surface">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-deep mb-6 leading-tight">{content.headline}</h2>
        <p className="text-lg text-slate max-w-2xl mx-auto">{content.subheadline}</p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Connection Line (Desktop) */}
        <div className="hidden md:block absolute top-[44px] left-12 right-12 h-[2px] bg-border border-dashed z-0" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 w-full">
           {content.steps.map((step: any, idx: number) => {
              const Icon = icons[idx];
              return (
                 <motion.div
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="flex flex-col items-center text-center"
                 >
                   <div className="w-[88px] h-[88px] rounded-full bg-surface border-4 border-mist flex items-center justify-center mb-6 shadow-sm relative group overflow-hidden">
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                      <Icon className="w-8 h-8 text-primary" />
                   </div>
                   <h3 className="text-xl font-bold text-ink mb-3">{step.title}</h3>
                   <p className="text-sm text-slate">{step.desc}</p>
                 </motion.div>
              )
           })}
        </div>
      </div>


    </Section>
  );
}
