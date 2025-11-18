import { buildMetadata } from '@seo/metadata';
import { PageTemplate } from '@components/PageTemplate';

export const metadata = buildMetadata('catalog', 'fr');
export default function CatalogPage() { return <PageTemplate pageKey="catalog" locale="fr" />; }
