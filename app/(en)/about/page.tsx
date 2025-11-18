import { buildMetadata } from '@seo/metadata';
import { PageTemplate } from '@components/PageTemplate';

export const metadata = buildMetadata('about', 'en');
export default function AboutPage() { return <PageTemplate pageKey="about" locale="en" />; }
