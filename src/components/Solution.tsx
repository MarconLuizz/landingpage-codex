import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function Solution() {
  const { messages } = useLanguage();

  return (
    <section id="solucao" className="section-spacing">
      <div className="section-container grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold leading-tight">{messages.solution.title}</h2>
          <p className="mb-6 text-black/70 dark:text-white/70">{messages.solution.subtitle}</p>
          <ul className="space-y-3">
            {messages.solution.benefits.map((benefit) => (
              <li key={benefit} className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-3">
                {benefit}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/registro" className="rounded-lg border border-primary px-5 py-3 font-semibold text-primary transition hover:bg-primary/10">
              {messages.solution.viewPlan}
            </Link>
            <Link to="/registro" className="rounded-lg bg-primary px-5 py-3 font-semibold text-white transition hover:brightness-110">
              {messages.solution.startNow}
            </Link>
          </div>
        </div>

        <div className="rounded-lg border border-primary/40 bg-darkSurface p-8">
          <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-primary/60 text-center text-white/70">
            GIF / Vídeo da ferramenta
          </div>
        </div>
      </div>
    </section>
  );
}
