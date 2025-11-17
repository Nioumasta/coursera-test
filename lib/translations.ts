type Locale = 'fr' | 'en';

type TranslationBundle = Record<string, string>;

const fr: TranslationBundle = {
  homeTitle: 'Cheer bows et équipements premium pour équipes européennes',
  heroHeadline: 'Customise tes cheer bows, équipe ton squad, brille en compétition',
  heroSub: 'My Cheer Bowtique est la maison européenne des bows personnalisés, accessoires cheer, twirling, pompon et gymnastique.',
  ctaShop: 'Découvrir la collection',
  ctaCustom: 'Créer mon bow',
  uspSpeed: 'Production rapide en Europe',
  uspQuality: 'Strass haute tenue & tissus premium',
  uspClubs: 'Solutions clubs & fédérations',
  featuredTitle: 'Top ventes prêtes à expédier',
  categoryTitle: 'Silos SEO & catégories clés',
  faqTitle: 'Questions fréquentes',
  seoEAT: 'Conçu par des coachs et athlètes européens : expertise produit, retours d’expérience de clubs élite et process qualité certifié.',
  newsletterTitle: 'Recevoir les drops et offres exclusives',
};

const en: TranslationBundle = {
  homeTitle: 'Elite cheer bows and gear crafted for European squads',
  heroHeadline: 'Customize your cheer bows, outfit your team, shine on the mat',
  heroSub: 'My Cheer Bowtique is Europe’s home for bespoke bows, cheer accessories, twirling, pom and acrobatic gymnastics essentials.',
  ctaShop: 'Shop the collection',
  ctaCustom: 'Design my bow',
  uspSpeed: 'Fast EU production',
  uspQuality: 'High-hold crystals & premium fabrics',
  uspClubs: 'Club & federation programs',
  featuredTitle: 'Best sellers ready to ship',
  categoryTitle: 'SEO silos & key categories',
  faqTitle: 'Common questions',
  seoEAT: 'Built with coaches and athletes across Europe: product expertise, elite club feedback and certified quality control.',
  newsletterTitle: 'Get drops and exclusive offers',
};

export const translations: Record<Locale, TranslationBundle> = { fr, en };

export function t(locale: Locale, key: keyof TranslationBundle): string {
  return translations[locale][key];
}
