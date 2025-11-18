import { Hero } from './Hero';
import { Breadcrumb } from './Breadcrumb';
import { FAQSection, FAQ } from './FAQSection';
import { JsonLd } from '@seo/jsonld';
import { translations, Locale } from '@lib/translations';
import { ProductGrid } from './ProductGrid';
import { Filters } from './Filters';
import { Reviews } from './Reviews';

const sampleProducts = [
  { name: 'Bow Elite', price: '€38', description: 'Strass AB, holographique', href: '/en/product/bow-elite', badge: 'Top' },
  { name: 'Fan Hoodie', price: '€55', description: 'Supporters clubs européens', href: '/en/catalog', badge: 'New' },
  { name: 'Training Pack', price: '€120', description: 'Pack sac + bow + bottle', href: '/en/catalog', badge: 'Bundle' }
];

type PageKey = keyof typeof translations;

export function PageTemplate({ pageKey, locale }: { pageKey: PageKey; locale: Locale }) {
  const t = translations[pageKey][locale];
  const faqItems: FAQ[] = t.seo.faq;
  const breadcrumb = t.seo.breadcrumbs;

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumb.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href
    }))
  };

  const listLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: sampleProducts.map((product, index) => ({
      '@type': 'Product',
      name: product.name,
      position: index + 1,
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock'
      }
    }))
  };

  return (
    <div className="space-y-10">
      <Breadcrumb items={breadcrumb} />
      <Hero
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        badges={t.hero.badges}
        ctaPrimary={{ label: t.hero.ctaPrimary, href: t.path }}
        ctaSecondary={{ label: t.hero.ctaSecondary, href: t.path }}
      />
      <section className="grid-auto-fit">
        {t.highlights.map((item) => (
          <div key={item.title} className="card">
            <p className="text-sm text-brand-secondary">{item.icon}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-200">{item.description}</p>
          </div>
        ))}
      </section>
      <section>
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
          <div className="md:w-1/3">
            <Filters />
            <p className="mt-4 text-xs text-slate-400">
              {locale === 'fr'
                ? 'Affinez par taille, couleur, type et prix pour trouver le bow idéal.'
                : 'Refine by size, color, type and price to find your perfect bow.'}
            </p>
          </div>
          <div className="md:flex-1">
            <ProductGrid products={sampleProducts} />
          </div>
        </div>
      </section>
      <section>
        <div className="card">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-brand-secondary">{locale === 'fr' ? 'Urgence & rareté' : 'Urgency & scarcity'}</p>
              <h3 className="text-xl font-semibold text-white">{locale === 'fr' ? 'Plus que 3 en stock' : 'Only 3 left in stock'}</h3>
              <p className="text-sm text-slate-200">{locale === 'fr' ? 'Expédition en 24h depuis l’Europe, paiement sécurisé.' : 'Ships in 24h from Europe with secure checkout.'}</p>
            </div>
            <a className="btn-primary" href={t.path}>{locale === 'fr' ? 'Commander maintenant' : 'Order now'}</a>
          </div>
        </div>
      </section>
      <Reviews />
      <FAQSection title={locale === 'fr' ? 'Questions fréquentes' : 'Frequently asked questions'} items={faqItems} />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={listLd} />
    </div>
  );
}
