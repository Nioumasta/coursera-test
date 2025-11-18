import { buildMetadata } from '@seo/metadata';
import { PageTemplate } from '@components/PageTemplate';

export const metadata = buildMetadata('custom', 'fr');
export default function CustomPage() { return <PageTemplate pageKey="custom" locale="fr" />; }
