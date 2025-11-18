import Link from 'next/link';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Locale } from '@lib/translations';

const nav = {
  fr: [
    { label: 'Catalogue', href: '/fr/catalogue' },
    { label: 'Personnalisation', href: '/fr/personnalisation' },
    { label: 'Clubs', href: '/fr/clubs-federations' },
    { label: 'Équipes', href: '/fr/equipes' },
    { label: 'Blog', href: '/fr/blog' }
  ],
  en: [
    { label: 'Catalog', href: '/en/catalog' },
    { label: 'Customization', href: '/en/custom' },
    { label: 'Clubs', href: '/en/clubs-federations' },
    { label: 'Teams', href: '/en/teams' },
    { label: 'Blog', href: '/en/blog' }
  ]
};

export function Header({ locale }: { locale: Locale }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-brand-dark/70 border-b border-white/10">
      <div className="container flex items-center justify-between py-4">
        <Link href={locale === 'fr' ? '/fr' : '/en'} className="text-lg font-bold font-display text-white">
          My Cheer Bowtique
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav[locale].map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-secondary">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher locale={locale} />
          <Link href={locale === 'fr' ? '/fr/catalogue' : '/en/catalog'} className="btn-primary">
            {locale === 'fr' ? 'Acheter' : 'Shop now'}
          </Link>
        </div>
      </div>
    </header>
  );
}
