import React from 'react';
import { useLang } from '@/lib/i18n';

// Import content
import { demoContent as enContent } from '../content/en/demo';
import { demoContent as viContent } from '../content/vi/demo';

// Import sections
import { DemoIntroSection } from '../components/sections/demo/DemoIntroSection';
import { HowToUseSteps } from '../components/sections/demo/HowToUseSteps';
import { SampleResultsDashboard } from '../components/sections/demo/SampleResultsDashboard';

export default function Demo() {
  const lang = useLang();
  const content = lang === 'en' ? enContent : viContent;

  return (
    <div className="w-full flex-1 flex flex-col">
       <DemoIntroSection content={content.intro} />
       <HowToUseSteps content={content.howToUse} />
       <SampleResultsDashboard content={content.sampleResults} />
    </div>
  );
}
