import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../../ui/Section';
import { Eye, Target, Users, Lock, CheckCircle, Zap } from 'lucide-react';

const icons = {
  Accessible: <Users className="w-6 h-6 text-primary" />,
  Private: <Lock className="w-6 h-6 text-primary" />,
  Accurate: <CheckCircle className="w-6 h-6 text-primary" />,
  Simple: <Zap className="w-6 h-6 text-primary" />,
  'Tiếp cận': <Users className="w-6 h-6 text-primary" />,
  'Riêng tư': <Lock className="w-6 h-6 text-primary" />,
  'Chính xác': <CheckCircle className="w-6 h-6 text-primary" />,
  'Đơn giản': <Zap className="w-6 h-6 text-primary" />
};

export function MissionVisionSection({ content }: { content: any }) {
  return (
    <Section variant="canvas" className="py-20 lg:py-32">
      <div className="max-w-5xl mx-auto">
        
        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-sky/10 rounded-xl sm:rounded-2xl mb-6">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-deep mb-4 tracking-widest uppercase">{content.mission.title}</h3>
            <p className="text-xl md:text-2xl text-slate leading-relaxed font-medium">"{content.mission.content}"</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-sky/10 rounded-xl sm:rounded-2xl mb-6">
              <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-deep mb-4 tracking-widest uppercase">{content.vision.title}</h3>
            <p className="text-xl md:text-2xl text-slate leading-relaxed font-medium">"{content.vision.content}"</p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-bold text-deep tracking-widest uppercase">{content.coreValues.title}</h3>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.coreValues.items.map((item: any, idx: number) => {
             // Try to map icon by label, fallback to check
             const Icon = (icons as any)[item.label] || <CheckCircle className="w-6 h-6 text-primary" />;

             return (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
               >
                 <div className="mb-4 inline-flex p-3 bg-sky/5 rounded-xl">
                   {Icon}
                 </div>
                 <h4 className="text-xl font-bold text-ink mb-2">{item.label}</h4>
                 <p className="text-slate">{item.desc}</p>
               </motion.div>
             );
          })}
        </div>

      </div>
    </Section>
  );
}
