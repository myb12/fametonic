import SaleBanner from '../components/SaleBanner';
import Header from '../components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-fam-dark-bg)] text-[var(--color-fam-text-light)]">
      <SaleBanner />
      <Header />
      <section className="container mx-auto px-4 py-8">
        <h1>Main content area</h1>
      </section>
    </main>
  );
}