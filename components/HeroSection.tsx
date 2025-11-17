import Link from 'next/link';

export default function HeroSection({
  locale,
  headline,
  sub,
  ctaPrimary,
  ctaSecondary,
}: {
  locale: 'fr' | 'en';
  headline: string;
  sub: string;
  ctaPrimary: string;
  ctaSecondary: string;
}) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-frost via-white to-white">
      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Europe · Cheer · Twirling</p>
          <h1 className="font-display text-3xl md:text-4xl leading-tight text-midnight">{headline}</h1>
          <p className="text-gray-600 text-lg">{sub}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={locale === 'fr' ? '/fr/catalogue' : '/en/catalog'}
              className="px-5 py-3 rounded-full bg-primary text-white text-sm shadow-lg shadow-primary/20"
            >
              {ctaPrimary}
            </Link>
            <Link
              href={locale === 'fr' ? '/fr/personnalisation' : '/en/custom'}
              className="px-5 py-3 rounded-full border border-primary text-primary text-sm"
            >
              {ctaSecondary}
            </Link>
          </div>
          <div className="flex gap-4 text-sm text-gray-600">
            <span>★ 4.9/5 clubs EU</span>
            <span>•</span>
            <span>{locale === 'fr' ? 'Production responsable en Europe' : 'Responsible EU production'}</span>
          </div>
        </div>
        <div className="gradient-border rounded-3xl p-2">
          <div className="rounded-2xl bg-white card-sheen p-8 shadow-xl">
            <p className="text-sm font-semibold text-primary mb-2">{locale === 'fr' ? 'Boost conversion' : 'Conversion boost'}</p>
            <p className="text-midnight text-xl font-display mb-4">
              {locale === 'fr'
                ? 'Livraison express, options glitter, strass AB, paillettes holo — adaptées aux règlements européens.'
                : 'Express shipping, glitter, AB crystals, holo sparkles — compliant with European rules.'}
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ {locale === 'fr' ? 'CTA toujours visible' : 'Persistent CTA'}</li>
              <li>✓ {locale === 'fr' ? 'Urgence : stocks limités' : 'Urgency: limited stock'}</li>
              <li>✓ {locale === 'fr' ? 'Preuve sociale : clubs élite' : 'Social proof: elite clubs'}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
