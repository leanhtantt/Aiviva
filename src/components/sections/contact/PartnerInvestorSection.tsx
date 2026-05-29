import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../../ui/Section';
import { Button } from '../../ui/Button';
import { Building2, TrendingUp, Newspaper } from 'lucide-react';

const icons = [Building2, TrendingUp, Newspaper];

export function PartnerInvestorSection({ content }: { content: any }) {
  return (
    <Section variant="surface" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-deep mb-6 leading-tight"
          >
            {content.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate leading-relaxed"
          >
            {content.subheadline}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {content.cards.map((card: any, idx: number) => {
            const Icon = icons[idx] || Building2;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-border shadow-sm flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-sky/10 flex items-center justify-center text-primary mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-ink mb-4">{card.title}</h3>
                <p className="text-slate leading-relaxed mb-8 flex-1">{card.desc}</p>
                <Button variant={card.type as any} className="w-full justify-center">
                  {card.btnText}
                </Button>
              </motion.div>
            )
          })}
        </div>

      </div>
    </Section>
  );
}
