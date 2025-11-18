'use client';
import Link from 'next/link';
import { translations } from '@lib/translations';

export default function Error() {
  const t = translations.error.en;
  return (
    <div className="container py-20 text-center space-y-6">
      <h1 className="text-3xl font-bold text-white">{t.hero.title}</h1>
      <p className="text-slate-200">{t.hero.subtitle}</p>
      <div className="flex justify-center gap-3">
        <button onClick={() => window.location.reload()} className="btn-primary">{t.hero.ctaPrimary}</button>
        <Link href="/en/contact" className="btn-secondary">{t.hero.ctaSecondary}</Link>
      </div>
    </div>
  );
}
