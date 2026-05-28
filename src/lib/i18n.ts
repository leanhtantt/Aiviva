import { useParams } from 'react-router-dom';

export type SupportedLanguage = 'en' | 'vi';

export function normalizeLang(lang?: string): SupportedLanguage {
  if (lang === 'vi') return 'vi';
  return 'en';
}

export function useLang(): SupportedLanguage {
  const { lang } = useParams<{ lang: string }>();
  return normalizeLang(lang);
}
