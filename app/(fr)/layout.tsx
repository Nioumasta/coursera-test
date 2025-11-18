import { ReactNode } from 'react';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

export default function FrLayout({ children }: { children: ReactNode }) {
  return (
    <div data-locale="fr">
      <Header locale="fr" />
      <main className="container py-10 space-y-10">{children}</main>
      <Footer locale="fr" />
    </div>
  );
}
