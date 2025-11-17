import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import PromoBar from './PromoBar';

const navItems = {
  fr: [
    { href: '/fr/catalogue', label: 'Catalogue' },
    { href: '/fr/personnalisation', label: 'Personnalisation' },
    { href: '/fr/clubs', label: 'Clubs & Fédérations' },
    { href: '/fr/blog', label: 'Blog' },
  ],
  en: [
    { href: '/en/catalog', label: 'Catalog' },
    { href: '/en/custom', label: 'Customization' },
    { href: '/en/clubs', label: 'Clubs & Federations' },
    { href: '/en/blog', label: 'Blog' },
  ],
};

export default function Header({ locale }: { locale: 'fr' | 'en' }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-frost">
      <PromoBar locale={locale} />
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-display text-xl font-semibold text-primary">My Cheer Bowtique</Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navItems[locale].map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-primary transition">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <Link
            href={locale === 'fr' ? '/fr/catalogue' : '/en/catalog'}
            className="px-4 py-2 rounded-full bg-primary text-white shadow-lg shadow-primary/20 text-sm"
          >
            {locale === 'fr' ? 'Commander' : 'Shop now'}
          </Link>
        </div>
      </div>
    </header>
  );
}
