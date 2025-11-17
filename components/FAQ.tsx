const faq = {
  fr: [
    { q: 'Quels délais de production ?', a: '7 à 12 jours ouvrés en Europe, options rush disponibles.' },
    { q: 'Puis-je commander pour mon équipe ?', a: 'Oui, packs clubs avec tarifs dégressifs et design dédié.' },
  ],
  en: [
    { q: 'What is the production time?', a: '7-12 business days in Europe, rush options available.' },
    { q: 'Do you handle team orders?', a: 'Yes, club packs with tiered pricing and dedicated design support.' },
  ],
};

export default function FAQ({ locale }: { locale: 'fr' | 'en' }) {
  return (
    <section className="py-12">
      <div className="grid gap-4 md:grid-cols-2">
        {faq[locale].map((item) => (
          <div key={item.q} className="border border-frost rounded-2xl p-4 bg-white shadow-sm">
            <h3 className="font-semibold text-midnight mb-2">{item.q}</h3>
            <p className="text-sm text-gray-700">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
