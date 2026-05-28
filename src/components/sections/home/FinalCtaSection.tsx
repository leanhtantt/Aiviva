import React from 'react';
import { Section } from '../../ui/Section';
import { Button } from '../../ui/Button';

export function FinalCtaSection({ content }: { content: any }) {
  return (
    <Section variant="canvas" className="text-center py-16 lg:py-24 border-none">
      <div 
        className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden px-6 py-16 md:py-20 lg:px-16 text-white shadow-2xl transition-all duration-300 hover:shadow-[0_24px_60px_rgba(8,112,184,0.22)]"
        style={{
          background: "linear-gradient(120deg, var(--color-deep-val) 0%, var(--color-primary-val) 52%, var(--color-bright-val) 100%)"
        }}
      >
        {/* Extremely faint modern design grid pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.12]" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Ambient glow spots */}
        <div className="absolute -top-[30%] -right-[20%] w-[60%] h-[120%] rounded-full bg-sky/20 blur-[120px] pointer-events-none mix-blend-screen" />
        <div className="absolute -bottom-[30%] -left-[20%] w-[60%] h-[120%] rounded-full bg-bright/20 blur-[120px] pointer-events-none mix-blend-screen" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight select-none">
            {content.headline}
          </h2>
          <p className="text-mist text-base sm:text-lg mb-10 text-opacity-95 leading-relaxed max-w-xl">
            {content.subheadline}
          </p>
          <Button 
            size="lg" 
            className="relative overflow-hidden w-full sm:w-auto px-10 shadow-lg !bg-white !text-primary font-bold !rounded-full cursor-pointer mb-6 opacity-100 transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] hover:shadow-xl"
          >
            {/* Shimmer light sweep animation */}
            <span className="absolute inset-0 block bg-gradient-to-r from-transparent via-sky-200/40 to-transparent animate-shimmer pointer-events-none" />
            <span className="relative z-10">{content.primary}</span>
          </Button>
          <p className="text-xs sm:text-sm text-sky-200/90 font-medium tracking-wide w-full">
            {content.note}
          </p>
        </div>
      </div>
    </Section>
  );
}
