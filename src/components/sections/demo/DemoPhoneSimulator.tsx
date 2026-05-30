import React, { useState, useEffect } from 'react';
import { DemoScanScreen, ScanState } from './DemoScanScreen';
import { DemoScanStatusPanel } from './DemoScanStatusPanel';

export function DemoPhoneSimulator({ content }: { content: any }) {
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

  useEffect(() => {
    if (scanState === 'idle' || scanState === 'complete') {
      return; 
    }

    // 15 seconds total timeline
    const totalDuration = 15000; 
    const interval = 50; // update frequency
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
  }, [scanState === 'idle', scanState === 'complete']);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 max-w-6xl mx-auto w-full">
       <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <DemoScanScreen scanState={scanState} />
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
