import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../../ui/Section';
import { Badge } from '../../ui/Badge';

interface NewsHeroSectionProps {
  headline: string;
  subheadline: string;
}

export function NewsHeroSection({ headline, subheadline }: NewsHeroSectionProps) {
  return (
    <Section className="py-20 lg:py-28 pt-32 lg:pt-40 relative z-10 w-full overflow-hidden text-center">
      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)]">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <Badge variant="primary" className="mb-6">News & Updates</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink mb-6">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-slate max-w-2xl">
            {subheadline}
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
