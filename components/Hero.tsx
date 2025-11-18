import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  badges?: string[];
}

export function Hero({ title, subtitle, ctaPrimary, ctaSecondary, badges = [] }: HeroProps) {
  return (
    <section className="hero-pattern rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-4">
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span key={badge} className="badge">
                {badge}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-display text-white">{title}</h1>
          <p className="text-lg text-slate-200">{subtitle}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href={ctaPrimary.href} className="btn-primary">
              {ctaPrimary.label}
            </Link>
            <Link href={ctaSecondary.href} className="btn-secondary">
              {ctaSecondary.label}
            </Link>
          </div>
        </div>
        <div className="grid-auto-fit md:max-w-sm">
          <div className="card">
            <p className="text-sm text-slate-200">⚡ Core Web Vitals optimisés</p>
            <p className="mt-2 text-xs text-slate-300">
              Lazy-loading, CDN, WebP/AVIF et rendu hybride SSG/SSR pour dominer les SERP européennes.
            </p>
          </div>
          <div className="card">
            <p className="text-sm text-slate-200">🏆 Preuves et conversion</p>
            <p className="mt-2 text-xs text-slate-300">
              Urgences stock, trust badges, cross-sell et upsell intégrés pour booster l’AOV.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
