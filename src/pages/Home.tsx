import React from 'react';
import { useLang } from '@/lib/i18n';
import { homeContentEn } from '@/content/en/home';
import { homeContentVi } from '@/content/vi/home';

import { HeroSection } from '@/components/sections/home/HeroSection';
import { ProblemSection } from '@/components/sections/home/ProblemSection';
import { HowItWorksSection } from '@/components/sections/home/HowItWorksSection';
import { FeatureSection } from '@/components/sections/home/FeatureSection';
import { TrustSignalSection } from '@/components/sections/home/TrustSignalSection';
import { FinalCtaSection } from '@/components/sections/home/FinalCtaSection';

export default function Home() {
  const lang = useLang();
  
  const contentMap = {
    en: homeContentEn,
    vi: homeContentVi
  };
  const content = contentMap[lang];

  return (
    <div className="w-full flex-col flex">
      <HeroSection content={content.hero} />
      <ProblemSection content={content.problem} />
      <HowItWorksSection content={content.howItWorks} />
      <FeatureSection content={content.features} />
      <TrustSignalSection content={content.trust} />
      <FinalCtaSection content={content.cta} />
    </div>
  );
}
