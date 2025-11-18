import { buildMetadata } from '@seo/metadata';
import { PageTemplate } from '@components/PageTemplate';

export const metadata = buildMetadata('custom', 'en');
export default function CustomPage() { return <PageTemplate pageKey="custom" locale="en" />; }
