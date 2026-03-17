import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { messages } = useLanguage();

  const examples = [messages.hero.example1, messages.hero.example2, messages.hero.example3];

  return (
    <section id="inicio" className="section-spacing">
      <div className="section-container grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="font-semibold tracking-[0.2em] text-primary">{messages.hero.line1}</p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{messages.hero.line2}</h1>
          <p className="text-base text-black/70 dark:text-white/70">{messages.hero.subtitle}</p>
        </div>

        <div className="rounded-lg border border-primary/40 bg-darkSurface p-6 text-white shadow-2xl shadow-primary/10">
          <div className="mb-4 flex gap-2">
            <button className="rounded-full bg-primary px-4 py-1 text-xs font-bold">{messages.hero.lead}</button>
            <button className="rounded-full border border-white/20 px-4 py-1 text-xs">{messages.hero.company}</button>
          </div>
          <input className="mb-3 w-full rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-primary"
            placeholder={messages.hero.placeholder}
          />
          <Link to="/registro" className="mb-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold transition hover:brightness-110">
            🔍 {messages.hero.investigate}
          </Link>

          <p className="mb-3 text-sm text-white/70">{messages.hero.examplesTitle}</p>
          <div className="space-y-2">
            {examples.map((example) => (
              <div key={example} className="rounded-lg border border-primary/60 bg-[#131314] px-3 py-2 text-xs text-white/80">
                {example}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
