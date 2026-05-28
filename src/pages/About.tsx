import React from 'react';
import { useParams } from 'react-router-dom';

export default function About() {
  const { lang = 'en' } = useParams<{ lang: string }>();
  return (
    <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] py-20 relative z-10 w-full">
        <h1 className="text-3xl font-bold text-ink mb-4">{lang === 'en' ? 'About Us' : 'Về chúng tôi'}</h1>
        <p className="text-slate max-w-2xl text-lg">
            {lang === 'en' 
            ? 'We are transforming healthcare with AI.' 
            : 'Chúng tôi đang chuyển đổi y tế bằng AI.'}
        </p>
    </div>
  );
}
