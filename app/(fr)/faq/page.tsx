import { buildMetadata } from '@seo/metadata';
import { PageTemplate } from '@components/PageTemplate';

export const metadata = buildMetadata('faq', 'fr');
export default function FAQPage() { return <PageTemplate pageKey="faq" locale="fr" />; }
