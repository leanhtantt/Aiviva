import React from 'react';
import { useParams } from 'react-router-dom';

export default function News() {
  const { lang = 'en' } = useParams<{ lang: string }>();
  return (
    <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] py-20 relative z-10 w-full">
        <h1 className="text-3xl font-bold text-ink mb-4">{lang === 'en' ? 'Latest News' : 'Tin tức mới nhất'}</h1>
        <p className="text-slate max-w-2xl text-lg">
            {lang === 'en' 
            ? 'Updates from our ecosystem.' 
            : 'Cập nhật từ hệ sinh thái của chúng tôi.'}
        </p>
    </div>
  );
}
