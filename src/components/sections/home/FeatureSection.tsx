import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../../ui/Section';
import { Card } from '../../ui/Card';

export function FeatureSection({ content }: { content: any }) {
  return (
    <Section variant="canvas">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-deep mb-6 leading-tight">{content.headline}</h2>
        <p className="text-lg text-slate">{content.subheadline}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {content.items.map((item: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
          >
            <Card className="h-full flex flex-col items-start p-6 hover:shadow-[var(--shadow-float)] transition-shadow">
               <div className="w-10 h-10 rounded-lg bg-mist text-primary flex items-center justify-center mb-5">
                 <span className="font-bold">0{idx + 1}</span>
               </div>
               <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
               <p className="text-sm text-slate">{item.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
