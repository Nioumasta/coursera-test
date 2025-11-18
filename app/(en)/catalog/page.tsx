import { buildMetadata } from '@seo/metadata';
import { PageTemplate } from '@components/PageTemplate';

export const metadata = buildMetadata('catalog', 'en');

export default function CatalogPage() {
  return <PageTemplate pageKey="catalog" locale="en" />;
}
