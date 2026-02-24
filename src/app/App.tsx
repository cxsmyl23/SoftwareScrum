import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NewsSection } from './components/NewsSection';
import { AcademicSection } from './components/AcademicSection';
import { QuickLinks } from './components/QuickLinks';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4EBE8] font-roboto text-[#0A2342]">
      <Header />
      <main>
        <Hero />
        <NewsSection />
        <AcademicSection />
        <QuickLinks />
      </main>
      <Footer />
    </div>
  );
}
