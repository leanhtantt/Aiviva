import React from 'react';
import { motion } from 'motion/react';
import { Eye, Target, Users, Lock, CheckCircle, Zap } from 'lucide-react';

const icons = {
  Accessible: <Users className="w-8 h-8 text-primary" />,
  Private: <Lock className="w-8 h-8 text-primary" />,
  Accurate: <CheckCircle className="w-8 h-8 text-primary" />,
  Simple: <Zap className="w-8 h-8 text-primary" />,
  'Tiếp cận': <Users className="w-8 h-8 text-primary" />,
  'Riêng tư': <Lock className="w-8 h-8 text-primary" />,
  'Chính xác': <CheckCircle className="w-8 h-8 text-primary" />,
  'Đơn giản': <Zap className="w-8 h-8 text-primary" />
};

export function MissionVisionSection({ content }: { content: any }) {
  return (
    <section className="w-full relative py-20 lg:py-28 bg-canvas overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-0 w-full h-[800px] bg-sky blur-[150px] mix-blend-screen -translate-y-1/2 opacity-50 block" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full blur-[200px] opacity-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] relative z-10">
        
        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-24 lg:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start bg-gradient-to-br from-primary to-deep text-white rounded-[2rem] p-8 sm:p-12 shadow-xl shadow-sky/5 relative overflow-hidden group hover:shadow-2xl hover:shadow-sky/10 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="inline-flex w-16 h-16 items-center justify-center bg-white/10 rounded-2xl sm:rounded-3xl mb-8 relative z-10 scale-100 group-hover:scale-105 transition-transform duration-500">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 tracking-widest uppercase relative z-10">{content.mission.title}</h3>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium relative z-10 italic">"{content.mission.content}"</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-start bg-gradient-to-br from-primary to-deep text-white rounded-[2rem] p-8 sm:p-12 shadow-xl shadow-sky/5 relative overflow-hidden group hover:shadow-2xl hover:shadow-sky/10 transition-all duration-500"
          >
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="inline-flex w-16 h-16 items-center justify-center bg-white/10 rounded-2xl sm:rounded-3xl mb-8 relative z-10 scale-100 group-hover:scale-105 transition-transform duration-500">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 tracking-widest uppercase relative z-10">{content.vision.title}</h3>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium relative z-10 italic">"{content.vision.content}"</p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12 lg:mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-deep tracking-wider uppercase inline-flex items-center gap-4">
            <span className="w-12 sm:w-16 h-[2px] bg-sky rounded-full hidden sm:block opacity-50"></span>
            {content.coreValues.title}
            <span className="w-12 sm:w-16 h-[2px] bg-sky rounded-full hidden sm:block opacity-50"></span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {content.coreValues.items.map((item: any, idx: number) => {
             // Try to map icon by label, fallback to check
             const Icon = (icons as any)[item.label] || <CheckCircle className="w-8 h-8 text-primary" />;

             return (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="flex flex-col h-full bg-white rounded-[1.5rem] p-8 border border-border/50 shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sky/10 hover:border-sky/30 transition-all duration-300 group relative overflow-hidden"
               >
                 <div className="mb-6 inline-flex w-16 h-16 items-center justify-center bg-sky/5 rounded-2xl group-hover:bg-primary/5 group-hover:scale-110 transition-all duration-300 relative z-10">
                   {Icon}
                 </div>
                 <h4 className="text-xl font-bold text-deep mb-3 relative z-10">{item.label}</h4>
                 <p className="text-slate flex-1 leading-relaxed text-lg relative z-10">{item.desc}</p>
                 <div className="absolute top-0 right-0 w-32 h-32 bg-sky/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
               </motion.div>
             );
          })}
        </div>

      </div>
    </section>
  );
}
