import React from 'react';
import { useLang } from '@/lib/i18n';
import { PageShell } from '../components/layout/PageShell';

// Import content
import { aboutContent as enContent } from '../content/en/about';
import { aboutContent as viContent } from '../content/vi/about';

// Import sections
import { AboutHero } from '../components/sections/about/AboutHero';
import { MissionVisionSection } from '../components/sections/about/MissionVisionSection';
import { FoundingTeamSection } from '../components/sections/about/FoundingTeamSection';
import { TechnologyPartnerSection } from '../components/sections/about/TechnologyPartnerSection';

export default function About() {
  const lang = useLang();
  const content = lang === 'en' ? enContent : viContent;

  return (
    <div className="w-full flex-1 flex flex-col">
      <AboutHero content={content.hero} />
      <MissionVisionSection content={content.missionVision} />
      <FoundingTeamSection content={content.team} />
      <TechnologyPartnerSection content={content.partner} />
    </div>
  );
}
