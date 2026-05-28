import React from 'react';
import { useLang } from '@/lib/i18n';

const contentMap = {
  en: {
    title: 'About Us',
    description: 'We are transforming healthcare with AI.',
  },
  vi: {
    title: 'Về chúng tôi',
    description: 'Chúng tôi đang chuyển đổi y tế bằng AI.',
  }
};

export default function About() {
  const lang = useLang();
  const content = contentMap[lang];

  return (
    <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] py-20 relative z-10 w-full">
        <h1 className="text-3xl font-bold text-ink mb-4">{content.title}</h1>
        <p className="text-slate max-w-2xl text-lg">
            {content.description}
        </p>
    </div>
  );
}
