import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function Contact() {
  const { lang = 'en' } = useParams<{ lang: string }>();
  return (
    <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] py-20 relative z-10 w-full">
        <h1 className="text-3xl font-bold text-ink mb-4">{lang === 'en' ? 'Get in Touch' : 'Liên hệ với chúng tôi'}</h1>
        <p className="text-slate max-w-2xl text-lg mb-12">
            {lang === 'en' 
            ? 'We would love to hear from you. Fill out the form below.' 
            : 'Chúng tôi rất mong nhận được liên lạc từ bạn. Vui lòng điền vào biểu mẫu dưới đây.'}
        </p>

        <form className="max-w-xl bg-surface p-8 rounded-[var(--radius-card)] border border-border shadow-[var(--shadow-card)]" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-ink mb-2">
                {lang === 'en' ? 'Name' : 'Họ và tên'}
              </label>
              <input type="text" className="w-full h-10 px-3 rounded-[var(--radius-input)] border border-border bg-canvas focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink mb-2">
                Email
              </label>
              <input type="email" className="w-full h-10 px-3 rounded-[var(--radius-input)] border border-border bg-canvas focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink mb-2">
                {lang === 'en' ? 'Message' : 'Tin nhắn'}
              </label>
              <textarea className="w-full p-3 rounded-[var(--radius-input)] border border-border bg-canvas focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[120px] resize-y" />
            </div>
          </div>
          <Button variant="primary" className="w-full">{lang === 'en' ? 'Send Message (Mock)' : 'Gửi tin nhắn (Giả lập)'}</Button>
        </form>
    </div>
  );
}
