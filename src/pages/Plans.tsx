import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { useLanguage } from '../context/LanguageContext';

export function Plans() {
  const { messages } = useLanguage();
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <Navbar />
      <main className="section-spacing section-container">
        <h1 className="text-center text-4xl font-bold">{messages.plans.title}</h1>
        <p className="mt-3 text-center text-black/70 dark:text-white/70">{messages.plans.subtitle}</p>

        <div className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-lg border border-white/20 p-1">
          <button onClick={() => setYearly(false)} className={`rounded-md px-4 py-2 ${!yearly ? 'bg-primary text-white' : ''}`}>
            {messages.plans.monthly}
          </button>
          <button onClick={() => setYearly(true)} className={`rounded-md px-4 py-2 ${yearly ? 'bg-primary text-white' : ''}`}>
            {messages.plans.yearly}
          </button>
        </div>
        {yearly && <p className="mt-2 text-center text-sm text-primary">{messages.plans.save}</p>}

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {messages.plans.tiers.map((tier, index) => (
            <article key={tier.name} className={`rounded-lg border p-6 ${index === 1 ? 'border-primary bg-primary/5' : 'border-white/20 bg-white/5'}`}>
              {index === 1 && <p className="mb-3 text-xs font-bold uppercase text-primary">{messages.plans.recommended}</p>}
              <h3 className="text-2xl font-bold">{tier.name}</h3>
              <p className="my-4 text-3xl font-extrabold">{yearly ? tier.priceYearly : tier.priceMonthly}<span className="text-sm font-normal">{messages.common.perMonth}</span></p>
              <ul className="mb-6 space-y-2 text-sm">
                {tier.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
              <Link to="/registro" className="inline-block rounded-lg bg-primary px-4 py-2 font-semibold text-white">{messages.plans.cta}</Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
