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
        </div>

      </div>
      </div>
    </section>
  );
}
