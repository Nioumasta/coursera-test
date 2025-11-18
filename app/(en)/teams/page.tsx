import { buildMetadata } from '@seo/metadata';
import { PageTemplate } from '@components/PageTemplate';

export const metadata = buildMetadata('teams', 'en');
export default function TeamsPage() { return <PageTemplate pageKey="teams" locale="en" />; }
