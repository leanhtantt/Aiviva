import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export function TrustSignalSection({ content }: { content: any }) {
  return (
    <section 
      className="w-full py-16 lg:py-28 relative overflow-hidden bg-cover bg-center bg-no-repeat border-t border-border"
      style={{ backgroundImage: "url('/assets/images/home/home-trust-bg.jpg')" }}
    >
      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
        
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-primary font-semibold mb-4">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-sm tracking-widest uppercase">Trusted Platform</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-deep mb-6 md:mr-[465px] leading-tight tracking-tight">{content.headline}</h2>
          <p className="text-slate text-lg mb-8 md:mr-[465px]">{content.subheadline}</p>
          
          <div className="flex flex-col gap-3 md:mr-[465px]">
             {content.signals.map((signal: string, idx: number) => (
               <div key={idx} className="flex items-center gap-3 text-ink font-medium">
                 <CheckCircle2 className="w-5 h-5 text-success" />
                 <span>{signal}</span>
               </div>
             ))}
          </div>

          <div className="mt-10 w-full md:w-[400px] bg-[#3985f4]/80 backdrop-blur-lg rounded-2xl p-8 border border-white/30 shadow-[0_8px_32px_rgba(0,100,250,0.2)] text-center flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300/10 to-transparent pointer-events-none" />
              <div className="relative text-sm text-blue-50 mb-6 uppercase tracking-widest font-semibold flex items-center gap-2">
                Technology Partner
              </div>
              <div className="relative flex items-center gap-3 mb-4 opacity-95 transition-transform cursor-pointer hover:scale-105 duration-300">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/40 shrink-0 flex items-center justify-center text-white font-bold rounded-xl shadow-lg">
                   eB
                </div>
                <span className="text-3xl font-bold tracking-tight text-white drop-shadow-md">eBeauti</span>
              </div>
              <p className="relative text-sm text-blue-100 mt-4 border-t border-white/20 pt-4 w-full">Silicon Valley, CA, USA</p>
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}
