import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../../ui/Section';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export function TrustSignalSection({ content }: { content: any }) {
  return (
    <Section variant="surface" className="py-16">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
        
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-primary font-semibold mb-4">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-sm tracking-widest uppercase">Trusted Platform</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-deep mb-6 leading-tight">{content.headline}</h2>
          <p className="text-slate text-lg mb-8">{content.subheadline}</p>
          
          <div className="flex flex-col gap-3">
             {content.signals.map((signal: string, idx: number) => (
               <div key={idx} className="flex items-center gap-3 text-ink font-medium">
                 <CheckCircle2 className="w-5 h-5 text-success" />
                 <span>{signal}</span>
               </div>
             ))}
          </div>
        </div>

        <div className="w-full md:w-[400px] bg-canvas rounded-2xl p-8 border border-border text-center flex flex-col items-center justify-center">
            <div className="text-sm text-slate mb-6 uppercase tracking-widest font-semibold">Technology Partner</div>
            {/* Mocking eBeauti logo if asset isn't ready */}
            <div className="flex items-center gap-2 mb-4 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
              <div className="w-10 h-10 bg-primary shrink-0 flex items-center justify-center text-white font-bold rounded-lg rounded-tr-none">
                 eB
              </div>
              <span className="text-3xl font-bold tracking-tight text-deep">eBeauti</span>
            </div>
            <p className="text-sm text-slate mt-4 border-t border-border/50 pt-4 w-full">Silicon Valley, CA, USA</p>
        </div>

      </div>
    </Section>
  );
}
