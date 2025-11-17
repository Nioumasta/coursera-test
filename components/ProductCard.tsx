import Image from 'next/image';
import Link from 'next/link';

export type Product = {
  slug: string;
  locale: 'fr' | 'en';
  name: string;
  price: string;
  tag: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const href = `/${product.locale}/${product.slug}`;
  return (
    <Link href={href} className="rounded-2xl border border-frost p-4 shadow-sm hover:shadow-md transition bg-white card-sheen">
      <div className="relative w-full h-48 mb-3 overflow-hidden rounded-xl">
        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(min-width: 768px) 25vw, 80vw" />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold">{product.tag}</span>
        <span className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary font-semibold">★ 4.9</span>
      </div>
      <h3 className="font-display text-lg mb-1">{product.name}</h3>
      <p className="text-primary font-semibold">{product.price}</p>
      <p className="text-xs text-gray-500 mt-1">Plus que 3 en stock · Expédition 48h EU</p>
    </Link>
  );
}
