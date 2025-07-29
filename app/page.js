import SaleBanner from '../components/SaleBanner';
import Header from '../components/Header';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-fam-dark-bg)] text-[var(--color-fam-text-light)] overflow-hidden">
      <SaleBanner />
      <Header />
      <HeroSection />
    </main>
  );
}