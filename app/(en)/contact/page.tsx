import { buildMetadata } from '@seo/metadata';
import { PageTemplate } from '@components/PageTemplate';

export const metadata = buildMetadata('contact', 'en');
export default function ContactPage() { return <PageTemplate pageKey="contact" locale="en" />; }
