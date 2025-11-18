import { buildMetadata } from '@seo/metadata';
import { PageTemplate } from '@components/PageTemplate';

export const metadata = buildMetadata('teams', 'fr');
export default function TeamsPage() { return <PageTemplate pageKey="teams" locale="fr" />; }
