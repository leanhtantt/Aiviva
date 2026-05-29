import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../../ui/Section';
import { UserCircle, Building2, CheckCircle2 } from 'lucide-react';

export function AudienceSection({ content }: { content: any }) {
  return (
    <Section variant="surface" className="py-20 lg:py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
           {/* B2C */}
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white rounded-[2rem] p-8 sm:p-12 border border-border shadow-md relative overflow-hidden group"
           >
             <div className="absolute top-0 right-0 w-64 h-64 bg-sky/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
             
             <div className="flex items-center gap-4 mb-8 relative z-10">
               <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-lg text-white">
                 <UserCircle className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-bold text-deep">{content.b2c.title}</h3>
             </div>

             <div className="space-y-6 relative z-10">
               {content.b2c.items.map((item: string, idx: number) => {
                 const [target, outcome] = item.split('→').map(s => s.trim());
                 return (
                   <div key={idx} className="flex gap-4">
                     <CheckCircle2 className="w-6 h-6 text-sky shrink-0 mt-1" />
                     <div>
                       <p className="font-semibold text-ink">{target}</p>
                       <p className="text-slate">{outcome}</p>
                     </div>
                   </div>
                 );
               })}
             </div>
           </motion.div>

           {/* B2B */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-deep rounded-[2rem] p-8 sm:p-12 border border-blue-900 shadow-xl relative overflow-hidden group text-white"
           >
             <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
             
             <div className="flex items-center gap-4 mb-8 relative z-10">
               <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur justify-center flex items-center shadow-lg text-white border border-white/20">
                 <Building2 className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-bold text-white">{content.b2b.title}</h3>
             </div>

             <div className="space-y-6 relative z-10">
               {content.b2b.items.map((item: string, idx: number) => {
                 const [target, outcome] = item.split('→').map(s => s.trim());
                 return (
                   <div key={idx} className="flex gap-4">
                     <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center shrink-0 mt-1">
                       <CheckCircle2 className="w-4 h-4 text-sky-200" />
                     </div>
                     <div>
                       <p className="font-semibold text-sky-50">{target}</p>
                       <p className="text-sky-200/80">{outcome}</p>
                     </div>
                   </div>
                 );
               })}
             </div>
           </motion.div>
        </div>

      </div>
    </Section>
  );
}
