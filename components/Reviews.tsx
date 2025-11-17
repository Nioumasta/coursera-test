const testimonials = [
  {
    name: 'Lyon Elite Cheer',
    text: 'Des bows qui tiennent toute la saison et un service design réactif.',
  },
  {
    name: 'London Sparks',
    text: 'We loved the holographic finish and the rush production for Worlds.',
  },
  {
    name: 'Madrid Twirl',
    text: 'Strass AB et broderie personnalisée, livraison en une semaine.',
  },
];

export default function Reviews() {
  return (
    <section className="py-12">
      <div className="grid md:grid-cols-3 gap-4">
        {testimonials.map((t) => (
          <article key={t.name} className="border border-frost rounded-2xl p-4 bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-xs text-gray-500">Trustpilot</span>
            </div>
            <p className="text-sm text-gray-700 mb-3">{t.text}</p>
            <p className="text-xs font-semibold text-midnight">{t.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
