import { buildMetadata } from '@seo/metadata';
import { PageTemplate } from '@components/PageTemplate';

export const metadata = buildMetadata('blog', 'fr');
export default function BlogPage() { return <PageTemplate pageKey="blog" locale="fr" />; }
