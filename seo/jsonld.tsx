import React from 'react';
import { siteConfig } from '@lib/config';

export type JsonLdProps = {
  data: Record<string, any>;
};

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.png`,
  sameAs: Object.values(siteConfig.social),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.phone,
    contactType: 'customer support',
    areaServed: 'EU',
    availableLanguage: ['fr', 'en']
  }
};
