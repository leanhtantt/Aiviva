import React from 'react';
import { Button } from '../../ui/Button';
import { ScanState } from './DemoScanScreen';
import { CheckCircle2, RotateCcw, ArrowRight, Minimize, Activity, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DemoScanStatusPanelProps {
  scanState: ScanState;
  progress: number;
  content: any;
  onStart: () => void;
  onReset: () => void;
}

export function DemoScanStatusPanel({ scanState, progress, content, onStart, onReset }: DemoScanStatusPanelProps) {
  
  const getStatusContent = () => {
    switch (scanState) {
      case 'idle':
        return {
          title: 'Ready for scanning',
          desc: 'Click Start to begin the 30-second simulation.',
          icon: null
        };
      case 'aligning':
        return {
          title: content.detecting || 'Aligning face...',
          desc: 'Hold your device steady and wait for the alignment frame to lock.',
          icon: <Minimize className="w-6 h-6 text-sky animate-pulse" />
        };
      case 'scanning':
        return {
          title: content.scanning || 'Scanning vitals...',
          desc: 'Capturing micro-variations in skin color through the camera.',
          icon: <Activity className="w-6 h-6 text-primary" />
        };
      case 'analyzing':
        return {
          title: content.analyzing || 'Analyzing data...',
          desc: 'Processing captured frames securely via AI models.',
          icon: <Sparkles className="w-6 h-6 text-primary" />
        };
      case 'complete':
        return {
          title: content.success || 'Scan Complete',
          desc: 'All necessary vitals data has been successfully acquired and processed.',
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
              <span className="text-slate uppercase tracking-wider text-xs">Progress</span>
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
            {content.buttonStart || 'Start Scanning'}
          </Button>
        )}
        
        {scanState === 'complete' && (
          <>
            <Button size="lg" onClick={() => {
              window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
            }} className="px-8 font-semibold shadow-lg group">
               View Results
               <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" onClick={onReset} className="px-6 font-semibold">
               <RotateCcw className="w-4 h-4 mr-2" />
               Reset
            </Button>
          </>
        )}

        {scanState !== 'idle' && scanState !== 'complete' && (
          <Button variant="outline" onClick={onReset} className="px-6 font-semibold text-slate">
             Cancel Demo
          </Button>
        )}
      </div>

      <div className="mt-8 pt-8 border-t border-mist">
        <p className="text-sm text-slate bg-canvas px-4 py-3 rounded-lg border border-border inline-flex items-start gap-3">
          <span className="text-primary mt-0.5"><Sparkles className="w-4 h-4" /></span>
          <span>{content.disclaimer || 'For demonstration purposes only. Not a medical device.'}</span>
        </p>
      </div>

    </div>
  );
}
