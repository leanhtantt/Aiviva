import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../../ui/Section';
import { ArrowDown } from 'lucide-react';

export function ProblemSection({ content }: { content: any }) {
  return (
    <Section variant="canvas">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-deep mb-6"
          >
            {content.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate"
          >
            {content.subheadline}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-16">
          {content.items.map((item: string, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="bg-surface border border-border rounded-[var(--radius-card)] p-6 shadow-sm flex items-start gap-4"
            >
               <div className="w-8 h-8 rounded-full bg-mist text-deep font-bold flex items-center justify-center shrink-0">
                 {idx + 1}
               </div>
               <p className="text-ink font-medium mt-1">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex flex-col items-center gap-3 text-primary font-semibold"
        >
          <span>{content.cta.replace(' ↓', '')}</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </div>
    </Section>
  );
}
