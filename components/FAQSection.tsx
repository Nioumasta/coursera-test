import { JsonLd } from '@seo/jsonld';

export type FAQ = { question: string; answer: string };

export function FAQSection({ items, title }: { items: FAQ[]; title: string }) {
  if (!items.length) return null;
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer }
    }))
  };

  return (
    <section className="mt-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <span className="text-xs text-slate-400">SEO FAQ</span>
      </div>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <details key={item.question} className="card">
            <summary className="cursor-pointer text-sm font-semibold">{item.question}</summary>
            <p className="mt-2 text-sm text-slate-200">{item.answer}</p>
          </details>
        ))}
      </div>
      <JsonLd data={faqLd} />
    </section>
  );
}
