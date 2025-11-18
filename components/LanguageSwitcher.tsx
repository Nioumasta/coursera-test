'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale } from '@lib/translations';

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const switchTo = locale === 'fr' ? 'en' : 'fr';
  const newPath = pathname?.replace(`/${locale}`, `/${switchTo}`) || `/${switchTo}`;

  return (
    <Link href={newPath} className="text-sm font-semibold hover:text-brand-secondary">
      {switchTo === 'fr' ? 'FR' : 'EN'}
    </Link>
  );
}
