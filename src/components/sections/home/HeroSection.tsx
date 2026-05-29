import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../../ui/Button';
import { Activity, HeartPulse, Droplet, Zap, Timer, ShieldCheck, Target } from 'lucide-react';

const FloatingBubble = ({ icon, posClass, delay }: any) => (
  <motion.div
    className={`absolute w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-xl flex items-center justify-center z-20 pointer-events-none ${posClass}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [0, -10, 0]
    }}
    transition={{ 
       opacity: { delay, duration: 0.5 },
       scale: { delay, duration: 0.5, type: 'spring' },
       y: { delay: delay + 0.5, duration: 3, repeat: Infinity, ease: 'easeInOut' } 
    }}
  >
    {icon}
  </motion.div>
);

export function HeroSection({ content }: { content: any }) {
  return (
    <section 
      className="w-full relative overflow-hidden bg-surface pt-24 lg:pt-40"
      style={{
        background: "linear-gradient(120deg, var(--color-deep-val) 0%, var(--color-primary-val) 52%, var(--color-bright-val) 100%)"
      }}
    >
      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] relative z-20 flex flex-col lg:flex-row items-center justify-between gap-0 min-h-[500px]">
        
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left pt-6 lg:pt-10 pb-4 lg:pb-24 w-full lg:max-w-2xl xl:max-w-3xl z-20">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl tracking-tight text-4xl sm:text-5xl lg:text-6xl font-bold text-surface mb-6 lg:leading-[1.1] whitespace-pre-line"
          >
            {content.headline}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl text-lg sm:text-xl text-mist/90 mb-7 lg:mb-10 leading-relaxed"
          >
            {content.subheadline}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-5 text-left mx-auto lg:mx-0 w-full max-w-md"
          >
             {content.badges.map((badge: string, idx: number) => (
                <div key={idx} className="flex items-center gap-4 text-xl sm:text-2xl font-medium text-white/95 w-full">
                  <Activity className="w-7 h-7 text-sky-300 shrink-0" />
                  <span>{badge}</span>
                </div>
             ))}
             
             {content.cta && (
               <div className="mt-5 lg:mt-8">
                 <Button 
                   size="lg" 
                   className="relative overflow-hidden w-full sm:w-auto px-10 shadow-lg !bg-white !text-primary font-bold !rounded-full cursor-pointer opacity-100 transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] hover:shadow-xl"
                 >
                   {/* Shimmer light sweep animation */}
                   <span className="absolute inset-0 block bg-gradient-to-r from-transparent via-sky-200/40 to-transparent animate-shimmer pointer-events-none" />
                   <span className="relative z-10">{content.cta}</span>
                 </Button>
               </div>
             )}
          </motion.div>
        </div>

      </div>
      
      {/* Background Wave Video container */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1 }}
         className="absolute bottom-0 left-0 w-full z-[5] pointer-events-none mix-blend-screen flex items-end"
      >
        <video 
           autoPlay 
           loop 
           muted 
           playsInline
           className="w-full h-auto max-h-full object-cover object-bottom"
        >
          <source src="/assets/video/wavebackground.webm" type="video/webm" />
        </video>
      </motion.div>

      {/* Right Column / Background Video container */}
      <motion.div 
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.2 }}
         className="w-full flex justify-center lg:justify-end lg:absolute lg:bottom-0 lg:right-[5%] xl:right-[10%] lg:w-[45%] lg:items-end pointer-events-none z-10 -mt-4 lg:mt-0"
      >
        <div className="relative w-full max-w-[500px] lg:max-w-none flex justify-center lg:justify-end mx-auto lg:mx-0">
          <video 
             autoPlay 
             loop 
             muted 
             playsInline
             className="w-full h-auto max-h-[42vh] lg:max-h-[90%] xl:max-h-[650px] object-contain object-bottom pointer-events-auto leading-none block"
          >
            <source src="/assets/video/woman_undergoing_AI_facial_scan.webm" type="video/webm" />
          </video>

          {/* OVERLAY ELEMENTS */}
          {/* Face Tracking Box */}
          <motion.div 
            className="absolute top-[25%] lg:top-[30%] left-[50%] -translate-x-1/2 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] border border-white/30 rounded-3xl bg-sky-200/5 mix-blend-screen"
            animate={{ 
               scale: [1, 1.05, 1],
               borderColor: ['rgba(255,255,255,0.2)', 'rgba(56, 189, 248, 0.6)', 'rgba(255,255,255,0.2)']
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white rounded-tl-xl" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white rounded-tr-xl" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white rounded-bl-xl" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white rounded-br-xl" />
          </motion.div>

          {/* Floating Bubbles */}
          <FloatingBubble icon={<HeartPulse className="w-5 h-5 lg:w-7 lg:h-7 text-rose-500" />} posClass="top-[10%] left-[5%] md:left-[10%] lg:top-[15%] lg:left-[15%]" delay={0.2} />
          <FloatingBubble icon={<Droplet className="w-5 h-5 lg:w-7 lg:h-7 text-cyan-400" />} posClass="top-[40%] left-[2%] md:left-[5%] lg:top-[40%] lg:left-[5%]" delay={0.8} />
          <FloatingBubble icon={<Target className="w-5 h-5 lg:w-7 lg:h-7 text-emerald-400" />} posClass="top-[15%] right-[5%] md:right-[10%] lg:top-[25%] lg:right-[15%]" delay={0.4} />
          <FloatingBubble icon={<Zap className="w-5 h-5 lg:w-7 lg:h-7 text-amber-400" />} posClass="top-[55%] right-[0%] md:right-[5%] lg:top-[55%] lg:right-[5%]" delay={1.2} />
          <FloatingBubble icon={<Timer className="w-5 h-5 lg:w-7 lg:h-7 text-fuchsia-400" />} posClass="top-[70%] left-[5%] md:left-[10%] lg:top-[70%] lg:left-[12%]" delay={1.6} />
          <FloatingBubble icon={<ShieldCheck className="w-5 h-5 lg:w-7 lg:h-7 text-white" />} posClass="top-[80%] lg:top-[75%] right-[8%] md:right-[15%] lg:top-[75%] lg:right-[18%]" delay={0.6} />
        </div>
      </motion.div>

      {/* Abstract background graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[100%] rounded-full bg-sky blur-[100px] mix-blend-screen" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[100%] rounded-full bg-bright blur-[100px] mix-blend-screen" />
      </div>
    </section>
  );
}
