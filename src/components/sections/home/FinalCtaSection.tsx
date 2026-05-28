import React from 'react';
import { Section } from '../../ui/Section';
import { Button } from '../../ui/Button';

export function FinalCtaSection({ content }: { content: any }) {
  return (
    <Section variant="deep" className="text-center py-24">
       <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">{content.headline}</h2>
          <p className="text-mist text-lg mb-10 text-opacity-90 leading-relaxed">
            {content.subheadline}
          </p>
          <Button size="lg" disabled className="w-full sm:w-auto px-10 shadow-none !bg-surface !text-slate cursor-not-allowed mb-6 opacity-70">
            {content.primary}
          </Button>
          <p className="text-sm text-sky font-medium tracking-wide w-full">{content.note}</p>
       </div>
    </Section>
  );
}
