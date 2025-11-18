import { buildMetadata } from '@seo/metadata';
import { PageTemplate } from '@components/PageTemplate';

export const metadata = buildMetadata('reviews', 'en');
export default function ReviewsPage() { return <PageTemplate pageKey="reviews" locale="en" />; }
