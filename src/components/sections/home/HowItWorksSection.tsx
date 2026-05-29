import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Smartphone, Cpu, ShieldCheck, HeartPulse } from 'lucide-react';

const icons = [Smartphone, Cpu, ShieldCheck, HeartPulse];

export function HowItWorksSection({ content }: { content: any }) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-32 lg:py-48 w-full border-t border-border">
      {/* Background Layer: Smart AI Processing Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Grid Dots */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60"
          style={{ maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 40%, transparent 100%)' }}
        />

        {/* Floating blurred orbs */}
        <motion.div 
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-[120px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-deep mb-8 leading-tight tracking-tight">
            {content.headline}
          </h2>
          <p className="text-lg text-slate lg:text-xl font-medium">
            {content.subheadline}
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-sky-100 border-dashed z-0">
             <motion.div 
               className="h-full bg-gradient-to-r from-transparent via-sky-400 to-transparent w-1/3 opacity-70"
               animate={{ x: ['-100%', '300%'] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 relative z-10 w-full">
             {content.steps.map((step: any, idx: number) => {
                const Icon = icons[idx];
                const isActive = idx === activeStep;
                
                return (
                   <motion.div
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="flex flex-col items-center text-center"
                   >
                     <div className={`w-[88px] h-[88px] rounded-full flex items-center justify-center mb-8 shadow-sm relative group overflow-hidden transition-all duration-500 border-4 z-10 ${isActive ? 'bg-primary border-primary scale-110 shadow-xl shadow-sky-500/30' : 'bg-surface border-mist scale-100 hover:border-sky-200'}`}>
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                        <Icon className={`w-8 h-8 transition-colors duration-500 ${isActive ? 'text-white' : 'text-primary'}`} />
                        
                        {isActive && (
                          <motion.div 
                            className="absolute inset-0 rounded-full bg-white opacity-20"
                            initial={{ scale: 0.8, opacity: 0.5 }}
                            animate={{ scale: 1.5, opacity: 0 }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                          />
                        )}
                     </div>
                     <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-ink'}`}>{step.title}</h3>
                     <p className="text-sm text-slate md:max-w-[80%] mx-auto leading-relaxed">{step.desc}</p>
                   </motion.div>
                )
             })}
          </div>
        </div>
      </div>
    </section>
  );
}
