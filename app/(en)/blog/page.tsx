import { buildMetadata } from '@seo/metadata';
import { PageTemplate } from '@components/PageTemplate';

export const metadata = buildMetadata('blog', 'en');
export default function BlogPage() { return <PageTemplate pageKey="blog" locale="en" />; }
