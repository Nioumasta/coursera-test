import { ReactNode } from 'react';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <div data-locale="en">
      <Header locale="en" />
      <main className="container py-10 space-y-10">{children}</main>
      <Footer locale="en" />
    </div>
  );
}
