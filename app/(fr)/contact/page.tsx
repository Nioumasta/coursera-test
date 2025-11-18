import { buildMetadata } from '@seo/metadata';
import { PageTemplate } from '@components/PageTemplate';

export const metadata = buildMetadata('contact', 'fr');
export default function ContactPage() { return <PageTemplate pageKey="contact" locale="fr" />; }
