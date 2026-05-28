import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Section } from '../../ui/Section';
import { 
  Smartphone, 
  Timer, 
  CircleDollarSign, 
  ShieldCheck
} from 'lucide-react';

export function FeatureSection({ content }: { content: any }) {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (idx: number) => {
    setImgErrors(prev => ({ ...prev, [idx]: true }));
  };

  // Modern clean static mockups representing each feature
  const featureConfigs = [
    {
      imageName: 'home-features-no-device.vi.jpg',
      folderPath: '/assets/images/home/',
      icon: Smartphone,
      color: 'text-blue-600 dark:text-blue-400',
      outlineColor: 'border-slate-200 dark:border-slate-800',
      fallback: (
        <div className="relative w-full h-full flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-6 overflow-hidden">
          {/* Static mockup representing scan layout */}
          <div className="w-16 h-28 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-2 flex flex-col justify-between">
            <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full" />
            <div className="flex-1 flex items-center justify-center my-2">
              <Smartphone className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="w-full h-1 bg-emerald-500 rounded-full" />
          </div>
        </div>
      )
    },
    {
      imageName: 'home-features-thirty-seconds.vi.jpg',
      folderPath: '/assets/images/home/',
      icon: Timer,
      color: 'text-emerald-600 dark:text-emerald-400',
      outlineColor: 'border-slate-200 dark:border-slate-800',
      fallback: (
        <div className="relative w-full h-full flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-6 overflow-hidden">
          {/* Static clean clock progress mockup */}
          <div className="w-24 h-24 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col items-center justify-center">
            <Timer className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-1" />
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">30s</span>
          </div>
        </div>
      )
    },
    {
      imageName: 'home-features-free-start.vi.jpg',
      folderPath: '/assets/images/home/',
      icon: CircleDollarSign,
      color: 'text-amber-600 dark:text-amber-400',
      outlineColor: 'border-slate-200 dark:border-slate-800',
      fallback: (
        <div className="relative w-full h-full flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-6 overflow-hidden">
          {/* Static neat money card mockup */}
          <div className="w-28 h-18 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center">
              <CircleDollarSign className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="text-left">
              <div className="w-10 h-1 bg-slate-200 dark:bg-slate-800 rounded-full mb-1" />
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400">$0</span>
            </div>
          </div>
        </div>
      )
    },
    {
      imageName: 'home-features-edge-ai.vi.jpg',
      folderPath: '/assets/images/home/',
      icon: ShieldCheck,
      color: 'text-violet-600 dark:text-violet-400',
      outlineColor: 'border-slate-200 dark:border-slate-800',
      fallback: (
        <div className="relative w-full h-full flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-6 overflow-hidden">
          {/* Static shield lock secure state mockup */}
          <div className="w-24 h-24 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col items-center justify-center gap-1">
            <ShieldCheck className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">Secure</span>
          </div>
        </div>
      )
    },
  ];

  return (
    <Section variant="canvas" className="py-24 relative overflow-hidden">
      {/* Title block */}
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-5xl font-bold text-deep mb-6 leading-tight tracking-tight animate-fade-in"
        >
          {content.headline}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate"
        >
          {content.subheadline}
        </motion.p>
      </div>

      {/* Grid of features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-7xl mx-auto">
        {content.items.map((item: any, idx: number) => {
          const config = featureConfigs[idx];
          const hasError = imgErrors[idx];
          const fullPath = `${config.folderPath}${config.imageName}`;
          
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col w-full text-left"
            >
              {/* [shape chứa hình ảnh, bo góc] */}
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden flex items-center justify-center relative bg-surface transition-all duration-300">
                {!hasError ? (
                  <img
                    src={fullPath}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(idx)}
                    className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  config.fallback
                )}

                {/* Always-on dynamic overlay guide when using fallback */}
                {hasError && (
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-4 text-left">
                    <span className="text-[10px] uppercase font-bold text-white/50 tracking-wider mb-0.5">Asset Path info</span>
                    <p className="text-[11px] font-mono text-white select-all break-all leading-snug">
                      public{fullPath}
                    </p>
                  </div>
                )}
              </div>

              {/* <nội dung nằm phía ngoài hình ảnh, canh lề trái> */}
              <div className="mt-6 flex flex-col text-left pl-1">
                <h3 className="text-xl font-bold text-ink mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  <config.icon className="w-5 h-5 text-primary/70 block lg:hidden" />
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

