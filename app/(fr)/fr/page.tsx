import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import { t } from '@/lib/translations';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Filters from '@/components/Filters';

const products = [
  { slug: 'produit/bow-sparkle', locale: 'fr', name: 'Bow Sparkle AB', price: '29€', tag: 'Top vente', image: '/images/bow1.jpg' },
  { slug: 'produit/bow-holo', locale: 'fr', name: 'Bow Holo Aurora', price: '32€', tag: 'Nouveau', image: '/images/bow2.jpg' },
  { slug: 'produit/bow-elite', locale: 'fr', name: 'Bow Elite Glitter', price: '35€', tag: 'Equipe', image: '/images/bow3.jpg' },
];

export const metadata = {
  title: 'Cheer bows personnalisés pour clubs européens',
  description: 'Bows cheer, twirling, pompon. Personnalisation rapide, strass premium, expédition EU.',
};

export default function Page() {
  return (
    <>
      <Header locale="fr" />
      <main className="max-w-6xl mx-auto px-4">
        <HeroSection
          locale="fr"
          headline={t('fr', 'heroHeadline')}
          sub={t('fr', 'heroSub')}
          ctaPrimary={t('fr', 'ctaShop')}
          ctaSecondary={t('fr', 'ctaCustom')}
        />
        <section className="py-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-2xl">{t('fr', 'featuredTitle')}</h2>
            <p className="text-sm text-gray-500">SEO optimisé · Stock EU</p>
          </div>
          <ProductGrid products={products} />
        </section>
        <section className="py-8">
          <h2 className="font-display text-2xl mb-4">{t('fr', 'categoryTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            {['Cheerleading', 'Twirling baton', 'Gymnastique acrobatique', 'Pompon girl', 'Custom bows', 'Vêtements supporters'].map((item) => (
              <div key={item} className="border border-frost rounded-2xl p-4 bg-white shadow-sm">
                <h3 className="font-semibold text-midnight">{item}</h3>
                <p className="text-gray-600 mt-2">Landing pages prêtes pour le SEO localisé en Europe.</p>
                <button className="mt-3 text-primary text-sm font-semibold">Voir les modèles →</button>
              </div>
            ))}
          </div>
        </section>
        <Filters />
        <Reviews />
        <section className="py-8">
          <div className="p-6 rounded-2xl bg-holographic">
            <h2 className="font-display text-2xl mb-2">E-E-A-T</h2>
            <p className="text-gray-700">{t('fr', 'seoEAT')}</p>
          </div>
        </section>
        <FAQ locale="fr" />
      </main>
      <Footer locale="fr" />
    </>
  );
}
