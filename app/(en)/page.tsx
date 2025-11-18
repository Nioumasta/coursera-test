import { buildMetadata } from '@seo/metadata';
import { PageTemplate } from '@components/PageTemplate';

export const metadata = buildMetadata('home', 'en');

export default function Page() {
  return <PageTemplate pageKey="home" locale="en" />;
}
