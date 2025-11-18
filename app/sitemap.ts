import { MetadataRoute } from 'next';
import { translations } from '@lib/translations';
import { siteConfig } from '@lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = Object.values(translations).flatMap((page) => Object.values(page));
  return pages.map((page) => ({
    url: `${siteConfig.url}${page.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }));
}
