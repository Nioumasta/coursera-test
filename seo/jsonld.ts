export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'My Cheer Bowtique',
  url: 'https://www.mycheerbowtique.eu',
  logo: 'https://www.mycheerbowtique.eu/logo.png',
  areaServed: 'EU',
  sameAs: ['https://www.instagram.com', 'https://www.facebook.com'],
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
