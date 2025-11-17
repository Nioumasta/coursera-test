import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import { t } from '@/lib/translations';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Filters from '@/components/Filters';

const products = [
  { slug: 'product/bow-sparkle', locale: 'en', name: 'Sparkle AB Bow', price: '€29', tag: 'Bestseller', image: '/images/bow1.jpg' },
  { slug: 'product/bow-holo', locale: 'en', name: 'Aurora Holo Bow', price: '€32', tag: 'New', image: '/images/bow2.jpg' },
  { slug: 'product/bow-elite', locale: 'en', name: 'Elite Glitter Bow', price: '€35', tag: 'Team', image: '/images/bow3.jpg' },
];

export const metadata = {
  title: 'Custom cheer bows for European teams',
  description: 'Cheer, twirling and pom bows. Fast personalization, premium crystals, EU shipping.',
};

export default function Page() {
  return (
    <>
      <Header locale="en" />
      <main className="max-w-6xl mx-auto px-4">
        <HeroSection
          locale="en"
          headline={t('en', 'heroHeadline')}
          sub={t('en', 'heroSub')}
          ctaPrimary={t('en', 'ctaShop')}
          ctaSecondary={t('en', 'ctaCustom')}
        />
        <section className="py-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-2xl">{t('en', 'featuredTitle')}</h2>
            <p className="text-sm text-gray-500">SEO-primed · EU stock</p>
          </div>
          <ProductGrid products={products} />
        </section>
        <section className="py-8">
          <h2 className="font-display text-2xl mb-4">{t('en', 'categoryTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            {['Cheerleading', 'Twirling baton', 'Acrobatic gymnastics', 'Pom pom', 'Custom bows', 'Supporter apparel'].map((item) => (
              <div key={item} className="border border-frost rounded-2xl p-4 bg-white shadow-sm">
                <h3 className="font-semibold text-midnight">{item}</h3>
                <p className="text-gray-600 mt-2">Landing pages ready for localized SEO across Europe.</p>
                <button className="mt-3 text-primary text-sm font-semibold">View templates →</button>
              </div>
            ))}
          </div>
        </section>
        <Filters />
        <Reviews />
        <section className="py-8">
          <div className="p-6 rounded-2xl bg-holographic">
            <h2 className="font-display text-2xl mb-2">E-E-A-T</h2>
            <p className="text-gray-700">{t('en', 'seoEAT')}</p>
          </div>
        </section>
        <FAQ locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
