import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Section } from '../../ui/Section';
import { Button } from '../../ui/Button';
import { ScanLine, CheckCircle2 } from 'lucide-react';

export function DemoIntroSection({ content }: { content: any }) {
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'detecting' | 'analyzing' | 'success'>('idle');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (scanState === 'idle' || scanState === 'success') {
      setProgress(0);
      return;
    }

    const totalDuration = 15000; // 15 seconds mock
    const interval = 100;
    const steps = totalDuration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = (currentStep / steps) * 100;
      setProgress(currentProgress);

      if (currentProgress < 30) {
        setScanState('detecting');
      } else if (currentProgress < 90) {
        setScanState('analyzing');
      } else if (currentProgress >= 100) {
        setScanState('success');
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [scanState]);

  const handleStart = () => {
    setScanState('scanning');
  };

  const handleReset = () => {
    setScanState('idle');
  };

  return (
    <section className="w-full bg-canvas pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep mb-6 leading-tight tracking-tight"
          >
            {content.headline}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate"
          >
            {content.subheadline}
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
           <div className="bg-surface rounded-3xl p-4 md:p-8 border border-border shadow-2xl relative overflow-hidden flex flex-col items-center justify-center min-h-[500px] md:min-h-[600px]">
              
              {scanState === 'idle' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center z-10"
                >
                  <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8 border border-primary/20">
                    <ScanLine className="w-12 h-12" />
                  </div>
                  <Button size="lg" onClick={handleStart} className="text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-primary/25">
                    {content.cameraMock.buttonStart}
                  </Button>
                  <p className="mt-8 text-sm text-slate px-6 py-3 bg-mist rounded-full inline-block">
                    {content.cameraMock.disclaimer}
                  </p>
                </motion.div>
              )}

              {['scanning', 'detecting', 'analyzing'].includes(scanState) && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full h-full flex flex-col items-center justify-center z-10"
                >
                  <div className="relative w-64 h-64 md:w-80 md:h-80 mb-12">
                     {/* Video placeholder */}
                     <div className="absolute inset-0 bg-slate/10 rounded-full overflow-hidden border-4 border-surface shadow-inner flex items-center justify-center">
                        <ScanLine className="w-20 h-20 text-slate/40" />
                     </div>
                     
                     {/* Scanning overlay */}
                     <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin" />
                     <div className="absolute inset-0 rounded-full border-4 border-transparent border-b-sky border-l-sky animate-[spin_2s_linear_reverse]" />

                     {/* Progress Ring */}
                     <svg className="absolute inset-[-16px] w-[calc(100%+32px)] h-[calc(100%+32px)] -rotate-90">
                       <circle 
                         cx="50%" cy="50%" r="48%" 
                         fill="none" stroke="currentColor" strokeWidth="4" 
                         className="text-transparent"
                       />
                       <circle 
                         cx="50%" cy="50%" r="48%" 
                         fill="none" stroke="currentColor" strokeWidth="4" 
                         strokeDasharray="100 100"
                         strokeDashoffset={100 - progress}
                         className="text-primary transition-all duration-100 ease-linear"
                         pathLength="100"
                       />
                     </svg>
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-ink mb-2 animate-pulse">
                       {scanState === 'detecting' ? content.cameraMock.detecting : content.cameraMock.analyzing}
                    </h3>
                    <p className="text-slate">{Math.round(progress)}%</p>
                  </div>
                </motion.div>
              )}

              {scanState === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center z-10"
                >
                  <div className="w-24 h-24 mx-auto bg-success/10 rounded-full flex items-center justify-center text-success mb-8">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-bold text-ink mb-2">{content.cameraMock.success}</h3>
                  <Button variant="outline" size="lg" onClick={handleReset} className="mt-8">
                     Reset Demo
                  </Button>
                </motion.div>
              )}

           </div>
        </div>

      </div>
    </section>
  );
}
