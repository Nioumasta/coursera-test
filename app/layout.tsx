import './globals.css';
import { ReactNode } from 'react';
import { MarketingScripts } from '@components/MarketingScripts';
import { organizationLd, JsonLd } from '@seo/jsonld';
import { siteConfig } from '@lib/config';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${siteConfig.name} | Cheerleading Europe`,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url)
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <MarketingScripts />
        <JsonLd data={organizationLd} />
        {children}
      </body>
    </html>
  );
}
