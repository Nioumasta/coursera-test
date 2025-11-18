import Link from 'next/link';
import { translations } from '@lib/translations';

export default function NotFound() {
  const t = translations.notFound.en;
  return (
    <div className="container py-20 text-center space-y-6">
      <h1 className="text-4xl font-bold text-white">{t.hero.title}</h1>
      <p className="text-slate-200">{t.hero.subtitle}</p>
      <div className="flex justify-center gap-3">
        <Link href="/en" className="btn-primary">{t.hero.ctaPrimary}</Link>
        <Link href="/en/contact" className="btn-secondary">{t.hero.ctaSecondary}</Link>
      </div>
    </div>
  );
}
