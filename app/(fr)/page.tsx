import { buildMetadata } from '@seo/metadata';
import { PageTemplate } from '@components/PageTemplate';

export const metadata = buildMetadata('home', 'fr');

export default function Page() {
  return <PageTemplate pageKey="home" locale="fr" />;
}
