import React from 'react';
import { useLang } from '@/lib/i18n';

// Import content
import { solutionContent as enContent } from '../content/en/solution';
import { solutionContent as viContent } from '../content/vi/solution';

// Import sections
import { SolutionOverviewSection } from '../components/sections/solution/SolutionOverviewSection';
import { ProductRoadmapSection } from '../components/sections/solution/ProductRoadmapSection';
import { SolutionPillarsSection } from '../components/sections/solution/SolutionPillarsSection';
import { AudienceSection } from '../components/sections/solution/AudienceSection';
// Competitive advantage is temporarily blank according to instructions

export default function Solution() {
  const lang = useLang();
  const content = lang === 'en' ? enContent : viContent;

  return (
    <div className="w-full flex-1 flex flex-col">
       <SolutionOverviewSection content={content.overview} />
       <ProductRoadmapSection content={content.roadmap} />
       <SolutionPillarsSection content={content.fourPillars} />
       <AudienceSection content={content.whoWeServe} />
    </div>
  );
}
