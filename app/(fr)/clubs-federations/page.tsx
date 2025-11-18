import { buildMetadata } from '@seo/metadata';
import { PageTemplate } from '@components/PageTemplate';

export const metadata = buildMetadata('clubs', 'fr');
export default function ClubsPage() { return <PageTemplate pageKey="clubs" locale="fr" />; }
