import { CTA } from '../components/CTA';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Solution } from '../components/Solution';
import { Supporters } from '../components/Supporters';

export function Home() {
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
    </>
  );
}
