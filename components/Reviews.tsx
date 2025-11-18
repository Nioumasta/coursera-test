const reviews = [
  {
    name: 'Paris Cheer Elite',
    text: 'Bows lumineux et solides même après 8 compétitions. Livraison ultra rapide.',
    rating: 5
  },
  { name: 'London Rays', text: 'Supporter packs prêts en 72h, nos fans adorent.', rating: 5 },
  { name: 'Roma Twirl', text: 'Strass AB qui tiennent et couleurs fidèles à notre drapeau.', rating: 5 }
];

export function Reviews() {
  return (
    <div className="grid-auto-fit mt-8">
      {reviews.map((review) => (
        <div key={review.name} className="card">
          <div className="flex items-center justify-between">
            <p className="font-semibold">{review.name}</p>
            <p className="text-amber-300">{'★'.repeat(review.rating)}</p>
          </div>
          <p className="mt-3 text-sm text-slate-200">{review.text}</p>
        </div>
      ))}
    </div>
  );
}
