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
      style: {
        textBg: "bg-[#eaf3fa]", // Light blue
        iconColor: "text-blue-500",
        orderTextFirst: false,
        imageAspect: "aspect-[4/3] lg:aspect-[1/1]",
      },
      fallback: (
        <div className="relative w-full h-full flex items-center justify-center bg-slate-50 p-6 overflow-hidden">
          <div className="w-16 h-28 rounded-xl border border-slate-200 bg-white p-2 flex flex-col justify-between">
            <div className="w-full h-1.5 bg-slate-100 rounded-full" />
            <div className="flex-1 flex items-center justify-center my-2">
              <Smartphone className="w-8 h-8 text-blue-600" />
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
      style: {
        textBg: "bg-[#fcece6]", // Peach
        iconColor: "text-orange-500",
        orderTextFirst: true,
        imageAspect: "aspect-[4/3] lg:aspect-[3/4]",
      },
      fallback: (
        <div className="relative w-full h-full flex items-center justify-center bg-slate-50 p-6 overflow-hidden">
          <div className="w-24 h-24 rounded-full border border-slate-200 bg-white flex flex-col items-center justify-center">
            <Timer className="w-8 h-8 text-emerald-600 mb-1" />
            <span className="text-xs font-bold text-slate-800">30s</span>
          </div>
        </div>
      )
    },
    {
      imageName: 'home-features-free-start.vi.jpg',
      folderPath: '/assets/images/home/',
      icon: CircleDollarSign,
      style: {
        textBg: "bg-[#fae8ef]", // Pink
        iconColor: "text-pink-500",
        orderTextFirst: false,
        imageAspect: "aspect-[4/3] lg:aspect-[16/10]",
      },
      fallback: (
        <div className="relative w-full h-full flex items-center justify-center bg-slate-50 p-6 overflow-hidden">
          <div className="w-28 h-[4.5rem] rounded-lg border border-slate-200 bg-white p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
              <CircleDollarSign className="w-5 h-5 text-amber-600" />
            </div>
            <div className="text-left">
              <div className="w-10 h-1 bg-slate-200 rounded-full mb-1" />
              <span className="text-xs font-bold text-amber-600">$0</span>
            </div>
          </div>
        </div>
      )
    },
    {
      imageName: 'home-features-edge-ai.vi.jpg',
      folderPath: '/assets/images/home/',
      icon: ShieldCheck,
      style: {
        textBg: "bg-[#e5f5f4]", // Teal
        iconColor: "text-teal-500",
        orderTextFirst: true,
        imageAspect: "aspect-[4/3] lg:aspect-[4/5]",
      },
      fallback: (
        <div className="relative w-full h-full flex items-center justify-center bg-slate-50 p-6 overflow-hidden">
          <div className="w-24 h-24 rounded-2xl border border-slate-200 bg-white flex flex-col items-center justify-center gap-1">
            <ShieldCheck className="w-8 h-8 text-violet-600" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-violet-600">Secure</span>
          </div>
        </div>
      )
    },
  ];

  const renderTextCard = (item: any, config: any) => (
    <div className={`rounded-[2rem] p-6 lg:p-8 flex flex-col w-full h-full min-h-[300px] ${config.style.textBg}`}>
      <div className={`mb-6 ${config.style.iconColor}`}>
        <config.icon className="w-8 h-8" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl lg:text-[1.35rem] font-bold text-slate-900 mb-8">
        {item.title}
      </h3>
      <p className="text-[1.1rem] lg:text-[1.25rem] leading-snug mt-auto text-slate-800 font-normal">
        {item.desc}
      </p>
    </div>
  );

  const renderImageCard = (item: any, config: any, idx: number, hasError: boolean, fullPath: string) => (
    <div className={`w-full ${config.style.imageAspect} rounded-[2rem] overflow-hidden flex items-center justify-center relative bg-surface border border-slate-200/50 shadow-sm transition-all duration-300 group/card`}>
      {!hasError ? (
        <img
          src={fullPath}
          alt={item.title}
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
          onError={() => handleImageError(idx)}
          className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover/card:scale-105"
        />
      ) : (
        config.fallback
      )}
      
      {hasError && import.meta.env.DEV && (
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-4 text-left">
          <span className="text-[10px] uppercase font-bold text-white/50 tracking-wider mb-0.5">Asset Path info</span>
          <p className="text-[11px] font-mono text-white select-all break-all leading-snug">
            public{fullPath}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <Section variant="canvas" className="py-24 relative overflow-hidden">
      {/* Title block */}
      <div className="text-center mb-16 lg:mb-24 max-w-3xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-deep mb-6 leading-tight tracking-tight animate-fade-in"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        {content.items.map((item: any, idx: number) => {
          const config = featureConfigs[idx];
          const hasError = imgErrors[idx];
          const fullPath = `${config.folderPath}${config.imageName}`;
          const isTextFirstOnDesktop = config.style.orderTextFirst;
          
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col gap-6 w-full h-full"
            >
              {/* On mobile, standard stack. On desktop, reverse dynamically based on config */}
              <div className={`flex flex-col gap-6 h-full ${isTextFirstOnDesktop ? 'flex-col lg:flex-col-reverse' : 'flex-col'}`}>
                <div className="flex w-full shrink-0">
                   {renderImageCard(item, config, idx, hasError, fullPath)}
                </div>
                <div className="flex w-full grow">
                   {renderTextCard(item, config)}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

