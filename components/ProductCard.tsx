import Link from 'next/link';

export type Product = {
  name: string;
  price: string;
  badge?: string;
  description: string;
  href: string;
};

export function ProductCard({ name, price, badge, description, href }: Product) {
  return (
    <div className="card flex flex-col gap-3">
      <div className="h-40 rounded-xl bg-gradient-to-br from-brand-primary/40 to-brand-secondary/30" />
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg text-white">{name}</h3>
        {badge && <span className="tag">{badge}</span>}
      </div>
      <p className="text-sm text-slate-300">{description}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xl font-bold">{price}</span>
        <Link href={href} className="btn-primary text-xs">
          Add to cart
        </Link>
      </div>
    </div>
  );
}
