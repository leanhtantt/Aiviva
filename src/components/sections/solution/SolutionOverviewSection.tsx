import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, Cpu, ShieldCheck, Activity } from 'lucide-react';

const icons = [Camera, Cpu, ShieldCheck, Activity];

export function SolutionOverviewSection({ content }: { content: any }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-full flex flex-col">
      {/* Top Hero Part */}
      <section className="w-full bg-canvas pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-24 relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-sky blur-[150px] mix-blend-screen mix-blend-mode" />
        </div>

        <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] relative z-10">
          <div className="text-center max-w-4xl mx-auto">
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
        </div>
      </section>

      {/* 4-Step Process Section - Dark Navy */}
      <section className="w-full bg-ink py-20 lg:py-32 relative overflow-hidden text-white">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky rounded-full blur-[200px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] relative z-10">
          
          <div className="text-center mb-16 lg:mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-white uppercase"
            >
              {content.processTitle}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/70 max-w-2xl mx-auto"
            >
              <strong className="text-white font-semibold">{content.coreTechTitle}:</strong> {content.coreTechDesc}
            </motion.p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-4 xl:gap-8 items-center max-w-7xl mx-auto">
             {/* Left Column */}
             <div className="flex flex-col gap-24 text-right items-end relative">
                {content.processSteps.slice(0, 2).map((step: any, idx: number) => {
                  const Icon = icons[idx] || Activity;
                  return (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 }}
                      className="relative max-w-[320px] xl:max-w-sm group"
                    >
                      <div className="hidden lg:flex absolute top-3.5 right-0 translate-x-full w-8 xl:w-16 items-center">
                        <div className="h-[2px] bg-white flex-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                        <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1)]"></div>
                      </div>
                      <div className="flex flex-col items-end">
                        <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                        <p className="text-white/70 leading-relaxed text-sm">{step.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
             </div>

             {/* Center Image */}
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-[420px] xl:w-[560px] h-[420px] xl:h-[560px] flex items-center justify-center relative p-4 xl:p-8"
             >
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
                
                <img src="/assets/images/solution/solution-process-core-stack.webp" 
                     alt="" 
                     aria-hidden="true" 
                     loading="lazy" 
                     decoding="async" 
                     width={1200} height={900} 
                     className={`w-full h-full object-contain relative z-10 ${imageError ? 'hidden' : 'block'}`}
                     onError={() => setImageError(true)}
                />
                
                {imageError && (
                  <div className="absolute inset-8 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden z-10 backdrop-blur-sm">
                     <div className="w-[80%] h-[80%] rounded-full border border-sky/30 animate-[spin_20s_linear_infinite]" />
                     <div className="w-[60%] h-[60%] rounded-full border border-primary/20 animate-[spin_15s_linear_infinite_reverse] absolute" />
                     <Activity className="w-16 h-16 text-white/30 absolute" />
                  </div>
                )}
             </motion.div>

             {/* Right Column */}
             <div className="flex flex-col gap-24 text-left items-start relative">
                {content.processSteps.slice(2, 4).map((step: any, idx: number) => {
                  const Icon = icons[idx + 2] || Activity;
                  return (
                    <motion.div 
                      key={idx + 2}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (idx + 2) * 0.2 }}
                      className="relative max-w-[320px] xl:max-w-sm group"
                    >
                      <div className="hidden lg:flex absolute top-3.5 left-0 -translate-x-full w-8 xl:w-16 items-center flex-row-reverse">
                        <div className="h-[2px] bg-white flex-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                        <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1)]"></div>
                      </div>
                      <div className="flex flex-col items-start">
                        <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                        <p className="text-white/70 leading-relaxed text-sm">{step.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
             </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col items-center">
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-[400px] aspect-square flex items-center justify-center relative mb-12"
             >
                <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
                <img src="/assets/images/solution/solution-process-core-stack.webp" 
                     alt="" 
                     aria-hidden="true" 
                     loading="lazy" 
                     decoding="async" 
                     width={1200} height={900} 
                     className={`w-full h-full object-contain relative z-10 ${imageError ? 'hidden' : 'block'}`}
                     onError={() => setImageError(true)}
                />
                
                {imageError && (
                  <div className="absolute inset-4 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden z-10">
                     <div className="w-[80%] h-[80%] rounded-full border border-sky/30 animate-[spin_20s_linear_infinite]" />
                     <div className="w-[60%] h-[60%] rounded-full border border-primary/20 animate-[spin_15s_linear_infinite_reverse] absolute" />
                     <Activity className="w-12 h-12 text-white/30 absolute" />
                  </div>
                )}
             </motion.div>

             <div className="flex flex-col gap-8 w-full relative before:absolute before:inset-0 before:left-2 before:h-full before:w-[2px] before:bg-white/20">
                {content.processSteps.map((step: any, idx: number) => {
                  return (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative flex items-start gap-4 group pl-6"
                    >
                      <div className="absolute left-[7px] top-2.5 w-2 h-2 -translate-x-1/2 rounded-full bg-white z-10 shadow-[0_0_8px_rgba(255,255,255,1)]" />
                      
                      <div className="flex-1 pb-4">
                         <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                         <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
             </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 lg:mt-24 p-6 bg-white/5 border border-white/10 rounded-2xl max-w-4xl mx-auto backdrop-blur-sm"
          >
            <p className="text-sm md:text-base font-medium text-white/90 text-center whitespace-pre-wrap">{content.platformInfo}</p>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
