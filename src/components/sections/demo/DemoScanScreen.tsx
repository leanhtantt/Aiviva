import React from 'react';
import { motion } from 'motion/react';
import { ScanLine, UserSquare2, ShieldCheck, Activity } from 'lucide-react';
import { CameraMockContent } from './DemoPhoneSimulator';

export type ScanState = 'idle' | 'aligning' | 'scanning' | 'analyzing' | 'complete';

interface DemoScanScreenProps {
  scanState: ScanState;
  content: CameraMockContent;
}

export function DemoScanScreen({ scanState, content }: DemoScanScreenProps) {
  return (
    <div className="relative w-[260px] sm:w-[320px] aspect-[9/19.5] bg-ink rounded-[2.5rem] p-2 sm:p-3 pb-6 sm:pb-8 shadow-2xl border-4 sm:border-8 border-slate overflow-hidden mx-auto">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 sm:h-6 bg-slate rounded-b-2xl z-20"></div>

        {/* Screen container */}
        <div className="relative w-full h-full bg-[#0B1524] rounded-[2rem] overflow-hidden flex flex-col">
          
          {scanState === 'idle' && (
             <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 bg-gradient-to-b from-[#0B1524] to-[#11233A]">
               <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
                 <ScanLine className="w-8 h-8 text-sky" />
               </div>
               <h3 className="text-white font-semibold text-lg mb-2">{content.screenIdleTitle}</h3>
               <p className="text-sky/60 text-sm">{content.screenIdleDesc}</p>
             </div>
          )}

          {scanState !== 'idle' && scanState !== 'complete' && (
             <div className="absolute inset-0 z-10 bg-[#0B1524]">
               <div className={`absolute inset-x-6 top-1/2 -translate-y-1/2 aspect-[3/4] border-2 rounded-[3.5rem] transition-all duration-700 flex items-center justify-center overflow-hidden
                  ${scanState === 'aligning' ? 'border-sky shadow-[0_0_20px_rgba(79,163,232,0.2)]' : 
                    scanState === 'scanning' ? 'border-primary shadow-[0_0_25px_rgba(20,85,181,0.4)]' :
                    'border-success/50 shadow-[0_0_20px_rgba(34,197,94,0.1)]'}`}
               >
                  {/* Face Silhouette */}
                  <motion.div 
                    animate={{ scale: scanState === 'aligning' ? [1, 1.02, 1] : 1 }}
                    transition={{ repeat: scanState === 'aligning' ? Infinity : 0, duration: 2 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                     <UserSquare2 strokeWidth={1} className={`w-full h-full scale-[1.3] translate-y-6 transition-colors duration-[2s] ${scanState === 'analyzing' ? 'text-primary/30' : 'text-sky/10'}`} />
                  </motion.div>
                  
                  {/* Scanning Animation */}
                  {scanState === 'scanning' && (
                     <motion.div 
                        initial={{ top: '-10%' }}
                        animate={{ top: '110%' }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                        className="absolute left-0 right-0 h-[2px] bg-sky shadow-[0_0_15px_rgba(79,163,232,0.9)] z-20"
                     />
                  )}
                  {scanState === 'scanning' && (
                     <div className="absolute inset-0 bg-primary/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent opacity-50"></div>
                  )}

                  {scanState === 'analyzing' && (
                     <div className="absolute inset-0 flex items-center justify-center bg-[#0B1524]/60 backdrop-blur-sm z-20">
                       <div className="relative">
                         <div className="absolute inset-0 rounded-full bg-primary blur-xl opacity-30 animate-pulse"></div>
                         <Activity className="w-12 h-12 text-sky animate-bounce" />
                       </div>
                     </div>
                  )}
               </div>
               
               {/* Alignment guidelines */}
               <div className="absolute inset-0 pointer-events-none">
                  {scanState === 'aligning' && (
                    <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 aspect-[3/4]">
                      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-sky/70 rounded-tl-3xl"></div>
                      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-sky/70 rounded-tr-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-sky/70 rounded-bl-3xl"></div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-sky/70 rounded-br-3xl"></div>
                    </div>
                  )}
               </div>
             </div>
          )}

          {scanState === 'complete' && (
             <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-[#0B1524] to-[#0A2016] z-10">
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.2)]"
                >
                  <ShieldCheck className="w-10 h-10 text-success" />
                </motion.div>
                <h3 className="text-white font-bold text-xl mb-2">{content.screenCompleteTitle}</h3>
                <p className="text-success/70 text-sm">{content.screenCompleteDesc}</p>
             </div>
          )}

          {/* Top StatusBar Simulator */}
          <div className="absolute top-1 sm:top-2 inset-x-5 flex justify-between items-center z-20">
             <div className="text-[10px] text-white/70 font-medium">10:42</div>
             <div className="flex gap-1">
               <div className="w-3 h-3 bg-white/40 rounded-full border border-white/20"></div>
               <div className="w-3 h-3 bg-white/40 rounded-full border border-white/20"></div>
             </div>
          </div>
        </div>
    </div>
  );
}
