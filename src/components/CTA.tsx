import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function CTA() {
  const { messages } = useLanguage();

  return (
    <section id="cta" className="section-spacing">
      <div className="section-container rounded-lg bg-primary p-8 sm:p-12">
        <div className="mx-auto max-w-3xl rounded-lg bg-black p-10 text-center text-white">
          <h2 className="mb-6 text-3xl font-bold">{messages.cta.title}</h2>
          <Link to="/registro" className="inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.02]">
            {messages.cta.button}
            <span className="rounded-full bg-primary px-2 py-0.5 text-white">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
