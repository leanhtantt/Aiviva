import React, { useState, useEffect } from 'react';
import { DemoScanScreen, ScanState } from './DemoScanScreen';
import { DemoScanStatusPanel } from './DemoScanStatusPanel';

export interface CameraMockContent {
  buttonStart: string;
  scanning: string;
  detecting: string;
  analyzing: string;
  success: string;
  disclaimer: string;
  idleTitle: string;
  idleDesc: string;
  aligningTitle: string;
  aligningDesc: string;
  scanningTitle: string;
  scanningDesc: string;
  analyzingTitle: string;
  analyzingDesc: string;
  completeTitle: string;
  completeDesc: string;
  progressLabel: string;
  viewResultsBtn: string;
  resetBtn: string;
  cancelBtn: string;
  screenIdleTitle: string;
  screenIdleDesc: string;
  screenCompleteTitle: string;
  screenCompleteDesc: string;
}

export function DemoPhoneSimulator({ content }: { content: CameraMockContent }) {
  const [scanState, setScanState] = useState<ScanState>('idle');
  const [progress, setProgress] = useState(0);

  const startScan = () => {
    setScanState('aligning');
    setProgress(0);
  };

  const resetScan = () => {
    setScanState('idle');
    setProgress(0);
  };

  const isRunning = scanState !== 'idle' && scanState !== 'complete';

  useEffect(() => {
    if (!isRunning) {
      return; 
    }

    // 15 seconds total timeline
    const totalDuration = 15000; 
    const interval = 100; // update frequency
    const totalSteps = totalDuration / interval;
    const progressPerStep = 100 / totalSteps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + progressPerStep;
        
        if (next >= 100) {
          clearInterval(timer);
          setScanState('complete');
          return 100;
        }
        
        // Derive state based on progress ranges
        if (next < 15) {
          setScanState((s) => s !== 'aligning' ? 'aligning' : s);
        } else if (next < 75) {
          setScanState((s) => s !== 'scanning' ? 'scanning' : s);
        } else {
          setScanState((s) => s !== 'analyzing' ? 'analyzing' : s);
        }

        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 max-w-6xl mx-auto w-full">
       <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <DemoScanScreen scanState={scanState} content={content} />
       </div>
       <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <DemoScanStatusPanel 
            scanState={scanState} 
            progress={progress} 
            content={content} 
            onStart={startScan} 
            onReset={resetScan} 
          />
       </div>
    </div>
  );
}
