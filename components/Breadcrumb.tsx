import Link from 'next/link';

type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="breadcrumb" className="text-xs text-gray-500 flex items-center gap-1 mb-4">
      {items.map((item, idx) => (
        <span key={item.label} className="flex items-center gap-1">
          {item.href ? (
            <Link href={item.href} className="hover:text-primary">{item.label}</Link>
          ) : (
            <span className="text-primary font-semibold">{item.label}</span>
          )}
          {idx < items.length - 1 && <span>/</span>}
        </span>
      ))}
    </nav>
  );
}
