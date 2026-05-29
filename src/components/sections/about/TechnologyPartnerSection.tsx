import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../../ui/Section';
import { Building2, CheckCircle2 } from 'lucide-react';

export function TechnologyPartnerSection({ content }: { content: any }) {
  return (
    <Section variant="canvas" className="py-20 lg:py-32 overflow-hidden relative border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        <div className="flex-1 w-full order-2 md:order-1">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full bg-slate-50/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-border shadow-md"
          >
             <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-primary rounded-2xl rounded-tr-none flex items-center justify-center shrink-0">
                   <span className="text-white font-bold text-xl">eB</span>
                </div>
                <div>
                   <h3 className="text-3xl font-bold text-deep">eBeauti</h3>
                   <p className="text-slate text-sm font-medium">Silicon Valley, CA, USA</p>
                </div>
             </div>

             <div className="space-y-4">
                {content.bullets.map((bullet: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 text-ink">
                    <CheckCircle2 className="w-6 h-6 text-success shrink-0" />
                    <span className="text-lg">{bullet}</span>
                  </div>
                ))}
             </div>
          </motion.div>
        </div>

        <div className="flex-1 order-1 md:order-2 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-semibold mb-4 bg-sky/10 px-4 py-2 rounded-full">
              <Building2 className="w-5 h-5" />
              <span className="text-sm tracking-widest uppercase">Strategic Partner</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep mb-6 leading-tight">
               {content.headline}
            </h2>
            <p className="text-xl text-slate leading-relaxed">
               {content.subheadline}
            </p>
          </motion.div>
        </div>

      </div>
    </Section>
  );
}
