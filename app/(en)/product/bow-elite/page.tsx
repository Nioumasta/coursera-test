import { buildMetadata } from '@seo/metadata';
import { PageTemplate } from '@components/PageTemplate';

export const metadata = buildMetadata('product', 'en');

export default function ProductPage() {
  return <PageTemplate pageKey="product" locale="en" />;
}
