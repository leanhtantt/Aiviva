import React from 'react';
import { Button } from '../../ui/Button';
import { ScanState } from './DemoScanScreen';
import { CheckCircle2, RotateCcw, ArrowRight, Minimize, Activity, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CameraMockContent } from './DemoPhoneSimulator';

interface DemoScanStatusPanelProps {
  scanState: ScanState;
  progress: number;
  content: CameraMockContent;
  onStart: () => void;
  onReset: () => void;
}

export function DemoScanStatusPanel({ scanState, progress, content, onStart, onReset }: DemoScanStatusPanelProps) {
  
  const getStatusContent = () => {
    switch (scanState) {
      case 'idle':
        return {
          title: content.idleTitle,
          desc: content.idleDesc,
          icon: null
        };
      case 'aligning':
        return {
          title: content.aligningTitle,
          desc: content.aligningDesc,
          icon: <Minimize className="w-6 h-6 text-sky animate-pulse" />
        };
      case 'scanning':
        return {
          title: content.scanningTitle,
          desc: content.scanningDesc,
          icon: <Activity className="w-6 h-6 text-primary" />
        };
      case 'analyzing':
        return {
          title: content.analyzingTitle,
          desc: content.analyzingDesc,
          icon: <Sparkles className="w-6 h-6 text-primary" />
        };
      case 'complete':
        return {
          title: content.completeTitle,
          desc: content.completeDesc,
          icon: <CheckCircle2 className="w-6 h-6 text-success" />
        };
    }
  };

  const status = getStatusContent();

  return (
    <div className="flex flex-col justify-center h-full max-w-lg w-full mt-10 lg:mt-0 lg:ml-12 px-2">
      
      <div className="min-h-[120px]">
        <AnimatePresence mode="wait">
          <motion.div 
            key={scanState}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              {status.icon && (
                <div className="w-10 h-10 rounded-full bg-slate/10 flex items-center justify-center shrink-0">
                  {status.icon}
                </div>
              )}
              <h3 className="text-2xl sm:text-3xl font-bold text-deep">
                {status.title}
              </h3>
            </div>
            <p className="text-slate text-lg leading-relaxed">
              {status.desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mb-10 h-14">
        {scanState !== 'idle' && scanState !== 'complete' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex justify-between text-sm font-bold mb-2">
              <span className="text-slate uppercase tracking-wider text-xs">{content.progressLabel}</span>
              <span className="text-primary">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-mist rounded-full h-3 overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-primary to-sky transition-all duration-[100ms] ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {scanState === 'idle' && (
          <Button size="lg" onClick={onStart} className="px-10 py-6 text-lg font-semibold shadow-xl hover:shadow-primary/30">
            {content.buttonStart}
          </Button>
        )}
        
        {scanState === 'complete' && (
          <>
            <Button size="lg" onClick={() => {
              const el = document.getElementById('sample-results');
              if (el) {
                 el.scrollIntoView({ behavior: 'smooth' });
              } else {
                 window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
              }
            }} className="px-8 font-semibold shadow-lg group">
               {content.viewResultsBtn}
               <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" onClick={onReset} className="px-6 font-semibold">
               <RotateCcw className="w-4 h-4 mr-2" />
               {content.resetBtn}
            </Button>
          </>
        )}

        {scanState !== 'idle' && scanState !== 'complete' && (
          <Button variant="outline" onClick={onReset} className="px-6 font-semibold text-slate">
             {content.cancelBtn}
          </Button>
        )}
      </div>

      <div className="mt-8 pt-8 border-t border-mist">
        <p className="text-sm text-slate bg-canvas px-4 py-3 rounded-lg border border-border inline-flex items-start gap-3">
          <span className="text-primary mt-0.5"><Sparkles className="w-4 h-4" /></span>
          <span>{content.disclaimer}</span>
        </p>
      </div>

    </div>
  );
}
