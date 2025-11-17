import '../styles/globals.css';
import type { Metadata } from 'next';
import MarketingScripts from '@/components/MarketingScripts';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mycheerbowtique.eu'),
  title: {
    default: 'My Cheer Bowtique | Cheer bows & gear Europe',
    template: '%s | My Cheer Bowtique',
  },
  description: 'Cheer bows personnalisés, accessoires, vêtements supporters pour clubs européens.',
  alternates: {
    canonical: 'https://www.mycheerbowtique.eu',
    languages: {
      fr: 'https://www.mycheerbowtique.eu/fr',
      en: 'https://www.mycheerbowtique.eu/en',
      'x-default': 'https://www.mycheerbowtique.eu/fr',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <MarketingScripts />
      </body>
    </html>
  );
}
