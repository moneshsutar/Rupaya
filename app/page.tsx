'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GameRates from '@/components/GameRates';
import AvailableGames from '@/components/AvailableGames';
import DownloadContactBar from '@/components/DownloadContactBar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: '#FFFBF0' }}>
      <Header />
      <Hero />
      <DownloadContactBar />
      <GameRates />
      <AvailableGames />
      <Footer />
    </main>
  );
}
