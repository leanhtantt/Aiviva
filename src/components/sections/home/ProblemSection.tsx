import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Section } from '../../ui/Section';
import { Watch, Wallet, CalendarClock, ShieldAlert, ArrowDown, Sparkles } from 'lucide-react';

export function ProblemSection({ content }: { content: any }) {
  const [imgError, setImgError] = useState(false);

  // Map each difficulty to its respective icon, color palette, and pointer styles
  const problemDetails = [
    {
      icon: Watch,
      color: 'from-amber-500/10 to-orange-500/10 text-orange-600 dark:text-orange-400',
      borderColor: 'border-orange-500/20',
      tailClass: '-right-2 top-10 rotate-45 border-r border-t',
      side: 'left',
    },
    {
      icon: Wallet,
      color: 'from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400',
      borderColor: 'border-blue-500/20',
      tailClass: '-left-2 top-10 -rotate-45 border-l border-t',
      side: 'right',
    },
    {
      icon: CalendarClock,
      color: 'from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400',
      borderColor: 'border-emerald-500/20',
      tailClass: '-right-2 top-10 rotate-45 border-r border-t',
      side: 'left',
    },
    {
      icon: ShieldAlert,
      color: 'from-rose-500/10 to-red-500/10 text-rose-600 dark:text-rose-400',
      borderColor: 'border-rose-500/20',
      tailClass: '-left-2 top-10 -rotate-45 border-l border-t',
      side: 'right',
    },
  ];

  return (
    <Section variant="canvas" className="relative overflow-hidden py-24">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-16 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-deep mb-6 leading-tight tracking-tight"
          >
            {content.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate max-w-2xl mx-auto"
          >
            {content.subheadline}
          </motion.p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full mb-16">
          
          {/* Left Column (Bubbles 1 & 3 - on Desktop) */}
          <div className="lg:col-span-4 flex flex-col gap-6 w-full order-2 lg:order-1">
            {content.items.map((item: string, idx: number) => {
              if (idx % 2 !== 0) return null; // Even indices on left (0, 2 -> mapping to Items 1 & 3)
              const detail = problemDetails[idx];
              const IconComponent = detail.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`relative p-6 rounded-3xl bg-surface/90 backdrop-blur border border-border shadow-md hover:shadow-xl transition-all flex gap-4 text-left items-start`}
                >
                  {/* Bubble Arrow pointing right towards center woman */}
                  <div className={`hidden lg:block absolute w-4 h-4 bg-surface border-border ${detail.tailClass}`} />
                  
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${detail.color} flex items-center justify-center shrink-0 border border-white/40 dark:border-white/5`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-ink font-semibold leading-snug text-base sm:text-lg">{item}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Column (Thinking Woman Image) */}
          <div className="lg:col-span-4 flex justify-center w-full order-1 lg:order-2 my-6 lg:my-0">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[430px] flex items-center justify-center"
            >
              {/* Outer Decorative Circles */}
              <div className="absolute inset-0 rounded-full border border-dashed border-primary/40 animate-[spin_40s_linear_infinite] pointer-events-none" />
              <div className="absolute inset-4 rounded-full border border-dashed border-primary/25 animate-[spin_25s_linear_infinite_reverse] pointer-events-none" />
              
              {!imgError ? (
                <img
                  src="/assets/images/home/home-problem-thinking-woman.png"
                  alt="Thinking Patient"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={430}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-500 cursor-pointer"
                />
              ) : (
                <div 
                  className="w-5/6 h-5/6 rounded-full bg-gradient-to-tr from-primary/10 to-bright/20 flex flex-col items-center justify-center p-6 text-center border border-primary/20 relative z-10 shadow-inner"
                  title="Image Placeholder"
                >
                  <Sparkles className="w-12 h-12 text-primary animate-pulse mb-3" />
                  {import.meta.env.DEV && (
                    <>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Cần thêm hình ảnh</span>
                      <p className="text-[11px] text-slate leading-tight">Vui lòng tải ảnh <code className="bg-white/60 px-1 py-0.5 rounded text-primary">home-problem-thinking-woman.png</code> vào thư mục <code className="bg-white/60 px-1 py-0.5 rounded text-primary">/public/assets/images/home/</code></p>
                    </>
                  )}
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column (Bubbles 2 & 4 - on Desktop) */}
          <div className="lg:col-span-4 flex flex-col gap-6 w-full order-3">
            {content.items.map((item: string, idx: number) => {
              if (idx % 2 === 0) return null; // Odd indices on right (1, 3 -> mapping to Items 2 & 4)
              const detail = problemDetails[idx];
              const IconComponent = detail.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`relative p-6 rounded-3xl bg-surface/90 backdrop-blur border border-border shadow-md hover:shadow-xl transition-all flex gap-4 text-left items-start`}
                >
                  {/* Bubble Arrow pointing left towards center woman */}
                  <div className={`hidden lg:block absolute w-4 h-4 bg-surface border-border ${detail.tailClass}`} />
                  
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${detail.color} flex items-center justify-center shrink-0 border border-white/40 dark:border-white/5`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-ink font-semibold leading-snug text-base sm:text-lg">{item}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex flex-col items-center gap-4 cursor-pointer"
        >
          <span className="text-sm sm:text-base font-bold tracking-wider uppercase px-6 py-3 rounded-full bg-primary text-white shadow-md hover:bg-bright transition-all duration-300 hover:scale-105 active:scale-95 inline-block selection:bg-transparent">
            {content.cta.replace(' ↓', '')}
          </span>
          <ArrowDown className="w-5 h-5 animate-bounce text-bright" />
        </motion.div>

      </div>
    </Section>
  );
}

