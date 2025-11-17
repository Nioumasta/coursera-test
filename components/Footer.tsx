import Link from 'next/link';

export default function Footer({ locale }: { locale: 'fr' | 'en' }) {
  const isFr = locale === 'fr';
  return (
    <footer className="bg-midnight text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="font-display text-lg mb-3">My Cheer Bowtique</h3>
          <p className="text-sm text-white/70">
            {isFr
              ? 'Fabriqué en Europe, pensé pour les équipes de cheer, twirling et pom pom.'
              : 'Crafted in Europe for cheer, twirling and pom teams.'}
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">{isFr ? 'Navigation' : 'Navigation'}</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href={isFr ? '/fr/catalogue' : '/en/catalog'}>Catalogue</Link></li>
            <li><Link href={isFr ? '/fr/personnalisation' : '/en/custom'}>{isFr ? 'Personnalisation' : 'Customization'}</Link></li>
            <li><Link href={isFr ? '/fr/clubs' : '/en/clubs'}>{isFr ? 'Clubs & fédérations' : 'Clubs & federations'}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">{isFr ? 'Support' : 'Support'}</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href={isFr ? '/fr/contact' : '/en/contact'}>{isFr ? 'Contact & devis' : 'Contact & quote'}</Link></li>
            <li><Link href={isFr ? '/fr/faq' : '/en/faq'}>FAQ</Link></li>
            <li><Link href={isFr ? '/fr/conditions' : '/en/policies'}>{isFr ? 'Conditions' : 'Policies'}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">{isFr ? 'Confiance' : 'Trust'}</h4>
          <p className="text-sm text-white/80">{isFr ? 'Paiement sécurisé, livraison rapide, retours faciles.' : 'Secure checkout, fast shipping, easy returns.'}</p>
          <p className="text-sm mt-2 text-white/60">{isFr ? 'Support 7j/7 par chat, email, WhatsApp.' : '7/7 support via chat, email, WhatsApp.'}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} My Cheer Bowtique — {isFr ? 'Site optimisé SEO Europe' : 'SEO-optimized for Europe'}
      </div>
    </footer>
  );
}
