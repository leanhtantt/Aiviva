import React from 'react';
import { motion } from 'motion/react';
import { Camera, Cpu, ShieldCheck, Activity } from 'lucide-react';

const icons = [Camera, Cpu, ShieldCheck, Activity];

export function SolutionOverviewSection({ content }: { content: any }) {
  return (
    <section className="w-full bg-canvas pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sky blur-[150px] mix-blend-screen mix-blend-mode" />
      </div>

      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-deep mb-6 leading-tight"
          >
            {content.headline}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-2xl text-slate"
          >
            {content.subheadline}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
           {/* Visual diagram area */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="w-full lg:w-1/2"
           >
              <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square bg-sky/5 rounded-3xl border border-sky/20 flex flex-col items-center justify-center p-8 overflow-hidden group">
                 {/* Decorative rings */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-sky/30 animate-[spin_20s_linear_infinite]" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full border border-primary/20 animate-[spin_15s_linear_infinite_reverse]" />
                 
                 <div className="z-10 bg-white shadow-xl rounded-full p-6 sm:p-8 mb-6 border border-border">
                    <Camera className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
                 </div>
                 
                 <h3 className="text-xl sm:text-2xl font-bold text-deep z-10 text-center mb-4">{content.coreTechTitle}</h3>
                 <p className="text-slate text-center z-10 leading-relaxed text-sm sm:text-base px-4">{content.coreTechDesc}</p>
                 
                 {/* Shine effect */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
           </motion.div>

           {/* Steps list */}
           <div className="w-full lg:w-1/2">
             <motion.h3 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-2xl font-bold text-deep mb-10 tracking-wide uppercase"
             >
               {content.processTitle}
             </motion.h3>

             <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.125rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                {content.processSteps.map((step: any, idx: number) => {
                  const Icon = icons[idx] || Activity;
                  return (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative flex items-start gap-6 md:gap-8 group"
                    >
                      <div className="absolute left-[1.125rem] -translate-x-1/2 top-2 w-4 h-4 rounded-full bg-white border-4 border-sky/30 shadow-[0_0_0_4px_white] z-10 group-hover:border-primary transition-colors md:hidden" />
                      
                      <div className="hidden md:flex shrink-0 w-16 h-16 rounded-2xl bg-white border border-border shadow-sm items-center justify-center z-10 group-hover:border-primary group-hover:shadow-md transition-all">
                        <Icon className="w-8 h-8 text-sky group-hover:text-primary transition-colors" />
                      </div>
                      
                      <div className="flex-1 mt-1 md:mt-0 pl-10 md:pl-0">
                         <div className="md:hidden flex items-center gap-3 mb-2">
                           <div className="w-10 h-10 rounded-xl bg-sky/10 flex items-center justify-center shrink-0">
                             <Icon className="w-5 h-5 text-primary" />
                           </div>
                           <h4 className="text-xl font-bold text-ink">{step.title}</h4>
                         </div>
                         <h4 className="hidden md:block text-xl font-bold text-ink mb-2">{step.title}</h4>
                         <p className="text-slate leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
             </div>

             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
               className="mt-12 p-6 bg-sky/5 border border-sky/20 rounded-2xl"
             >
               <p className="text-sm font-medium text-slate text-center whitespace-pre-wrap">{content.platformInfo}</p>
             </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
}
