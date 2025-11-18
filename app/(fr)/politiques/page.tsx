import { buildMetadata } from '@seo/metadata';
import { PageTemplate } from '@components/PageTemplate';

export const metadata = buildMetadata('policies', 'fr');
export default function PoliciesPage() { return <PageTemplate pageKey="policies" locale="fr" />; }
