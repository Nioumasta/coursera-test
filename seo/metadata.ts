import { Metadata } from 'next';
import { siteConfig } from '@lib/config';
import { translations, Locale } from '@lib/translations';

export const buildMetadata = (pageKey: keyof typeof translations, locale: Locale): Metadata => {
  const t = translations[pageKey][locale];
  const alternateLanguages = {
    en: t.path.replace('/fr', '/en'),
    fr: t.path.replace('/en', '/fr'),
    'x-default': `${locale === 'en' ? '/en' : '/fr'}`
  };

  return {
    title: `${t.title} | ${siteConfig.name}`,
    description: t.description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: t.path,
      languages: alternateLanguages
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `${siteConfig.url}${t.path}`,
      locale,
      siteName: siteConfig.name
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description
    }
  };
};
