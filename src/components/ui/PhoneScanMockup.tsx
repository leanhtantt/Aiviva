import React from 'react';
import { motion } from 'motion/react';
import { Heart, Activity, Wind, Brain } from 'lucide-react';
import { useParams } from 'react-router-dom';

export function PhoneScanMockup() {
  const { lang = 'en' } = useParams<{ lang: string }>();
  const isEn = lang === 'en';

  return (
    <div className="relative w-full max-w-[320px] mx-auto md:max-w-[360px]">
      {/* Floating Badges */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute -left-12 top-20 z-20 bg-surface/90 backdrop-blur border border-border shadow-[var(--shadow-float)] px-3 py-2 rounded-xl flex items-center gap-2"
      >
        <div className="w-2 h-2 rounded-full bg-success"></div>
        <span className="text-xs font-semibold text-deep whitespace-nowrap">
          {isEn ? '>98% Accuracy' : 'Độ chính xác >98%'}
        </span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute -right-8 top-1/3 z-20 bg-surface/90 backdrop-blur border border-border shadow-[var(--shadow-float)] px-3 py-2 rounded-xl flex items-center gap-2"
      >
        <ShieldIcon className="w-4 h-4 text-primary" />
        <span className="text-xs font-semibold text-deep whitespace-nowrap">
          {isEn ? 'No Data Stored' : 'Không lưu trữ DL'}
        </span>
      </motion.div>

      {/* Phone Frame */}
      <div className="relative rounded-[40px] border-[8px] border-ink bg-canvas w-full aspect-[9/19] overflow-hidden shadow-[var(--shadow-float)]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-ink rounded-b-2xl z-20"></div>

        {/* Camera Feed Mock */}
        <div className="absolute inset-0 bg-deep/5 overflow-hidden">
          {/* Grid pattern */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(var(--color-primary-val) 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.1 }}></div>
          
          {/* Face overlay silhouette */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="w-32 h-40 border-2 border-dashed border-primary rounded-full relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-primary">
                 <ScanCrosshair />
              </div>
            </div>
          </div>

          {/* Scanning Line */}
          <motion.div 
            animate={{ top: ['10%', '90%', '10%'] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-bright to-transparent opacity-80 z-10 shadow-[0_0_10px_var(--color-bright-val)]"
          />

          {/* Scan UI Elements */}
          <div className="absolute top-12 left-4 right-4 flex justify-between items-center z-10">
            <div className="bg-ink/50 backdrop-blur text-surface px-3 py-1 rounded-full text-xs flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-danger animate-pulse"></span>
              {isEn ? 'Scanning...' : 'Đang quét...'}
            </div>
            <div className="bg-ink/50 backdrop-blur text-surface px-3 py-1 rounded-full text-xs font-mono">
              00:14
            </div>
          </div>

          {/* Real-time metrics dashboard at bottom */}
          <div className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur rounded-2xl p-4 shadow-lg border border-border/50 z-10">
             <div className="grid grid-cols-2 gap-3">
               {/* Heart Rate */}
               <div className="flex flex-col">
                 <div className="flex items-center gap-1 text-slate mb-1">
                   <Heart className="w-3 h-3 text-danger" />
                   <span className="text-[10px] font-medium uppercase">{isEn ? 'Heart Rate' : 'Nhịp tim'}</span>
                 </div>
                 <div className="flex items-baseline gap-1">
                   <span className="text-xl font-bold text-ink">78</span>
                   <span className="text-[10px] text-slate">bpm</span>
                 </div>
               </div>
               
               {/* SpO2 */}
               <div className="flex flex-col">
                 <div className="flex items-center gap-1 text-slate mb-1">
                   <Activity className="w-3 h-3 text-sky" />
                   <span className="text-[10px] font-medium uppercase">SpO₂</span>
                 </div>
                 <div className="flex items-baseline gap-1">
                   <span className="text-xl font-bold text-ink">98</span>
                   <span className="text-[10px] text-slate">%</span>
                 </div>
               </div>
               
               {/* Resp Rate */}
               <div className="flex flex-col">
                 <div className="flex items-center gap-1 text-slate mb-1">
                   <Wind className="w-3 h-3 text-success" />
                   <span className="text-[10px] font-medium uppercase">{isEn ? 'Resp Rate' : 'Nhịp thở'}</span>
                 </div>
                 <div className="flex items-baseline gap-1">
                   <span className="text-xl font-bold text-ink">16</span>
                   <span className="text-[10px] text-slate">rpm</span>
                 </div>
               </div>
               
               {/* Stress */}
               <div className="flex flex-col">
                 <div className="flex items-center gap-1 text-slate mb-1">
                   <Brain className="w-3 h-3 text-accent" />
                   <span className="text-[10px] font-medium uppercase">Stress</span>
                 </div>
                 <div className="flex items-baseline gap-1">
                   <span className="text-sm font-bold text-accent">{isEn ? 'Normal' : 'Bình thường'}</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
    </svg>
  );
}

function ScanCrosshair(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" {...props}>
      <path d="M12 2v20M2 12h20" />
      <circle cx="12" cy="12" r="6" />
    </svg>
  );
}
