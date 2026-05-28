import React from 'react';
import { useParams } from 'react-router-dom';
import { homeContentEn } from '../content/en/home';
import { homeContentVi } from '../content/vi/home';

import { HeroSection } from '../components/sections/home/HeroSection';
import { ProblemSection } from '../components/sections/home/ProblemSection';
import { HowItWorksSection } from '../components/sections/home/HowItWorksSection';
import { FeatureSection } from '../components/sections/home/FeatureSection';
import { TrustSignalSection } from '../components/sections/home/TrustSignalSection';
import { FinalCtaSection } from '../components/sections/home/FinalCtaSection';

export default function Home() {
  const { lang = 'en' } = useParams<{ lang: string }>();
  const content = lang === 'en' ? homeContentEn : homeContentVi;

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
