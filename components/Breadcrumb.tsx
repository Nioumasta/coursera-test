import Link from 'next/link';
import { Locale } from '@lib/translations';

type Crumb = { label: string; href: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  if (!items.length) return null;
  return (
    <nav aria-label="breadcrumb" className="text-xs text-slate-300 mb-4">
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            <Link href={item.href} className="hover:text-brand-secondary underline decoration-dotted">
              {item.label}
            </Link>
            {index < items.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
