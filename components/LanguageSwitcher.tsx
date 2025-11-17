'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LanguageSwitcher({ locale }: { locale: 'fr' | 'en' }) {
  const pathname = usePathname();
  const target = locale === 'fr' ? pathname.replace('/fr', '/en') : pathname.replace('/en', '/fr');

  return (
    <div className="flex items-center gap-2 text-xs font-semibold">
      <Link href={locale === 'fr' ? pathname : target} className={locale === 'fr' ? 'text-primary' : 'text-gray-500'}>
        FR
      </Link>
      <span className="text-gray-400">/</span>
      <Link href={locale === 'en' ? pathname : target} className={locale === 'en' ? 'text-primary' : 'text-gray-500'}>
        EN
      </Link>
    </div>
  );
}
