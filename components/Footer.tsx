import Link from 'next/link';
import { siteConfig } from '@lib/config';
import { Locale } from '@lib/translations';

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-white/10 bg-brand-dark/70 mt-16">
      <div className="container grid gap-8 py-10 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold">{siteConfig.name}</p>
          <p className="mt-3 text-sm text-slate-300">{siteConfig.description}</p>
        </div>
        <div>
          <p className="font-semibold">{locale === 'fr' ? 'Navigation' : 'Navigation'}</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link href={locale === 'fr' ? '/fr/catalogue' : '/en/catalog'}>Catalog</Link>
            <Link href={locale === 'fr' ? '/fr/blog' : '/en/blog'}>Blog</Link>
            <Link href={locale === 'fr' ? '/fr/politiques' : '/en/policies'}>Policies</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold">{locale === 'fr' ? 'Support' : 'Support'}</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link href={locale === 'fr' ? '/fr/faq' : '/en/faq'}>FAQ</Link>
            <Link href={locale === 'fr' ? '/fr/contact' : '/en/contact'}>{locale === 'fr' ? 'Contact' : 'Contact'}</Link>
            <a href={`mailto:${siteConfig.contactEmail}`}>Email</a>
          </div>
        </div>
        <div>
          <p className="font-semibold">{locale === 'fr' ? 'Confiance' : 'Trust'}</p>
          <div className="mt-3 text-sm space-y-2">
            <p>{locale === 'fr' ? 'Paiement sécurisé & retours 30 jours' : 'Secure payment & 30-day returns'}</p>
            <p>{siteConfig.phone}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {siteConfig.name}
      </div>
    </footer>
  );
}
