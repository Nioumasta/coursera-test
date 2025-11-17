import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.mycheerbowtique.eu';
  return [
    { url: `${base}/fr`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/en`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
  ];
}
