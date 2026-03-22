import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CTA } from '../components/CTA';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Solution } from '../components/Solution';
import { Supporters } from '../components/Supporters';
import { BackToTop } from '../components/BackToTop';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const target = document.getElementById(location.hash.replace('#', ''));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Supporters />
        <Solution />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
