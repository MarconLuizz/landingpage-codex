import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function CTA() {
  const { messages } = useLanguage();

  return (
    <section id="cta" className="w-full py-32 bg-primary">
      <div className="mx-auto max-w-3xl flex justify-center">
        {/* Quadrado preto arredondado */}
        <div className="w-64 h-64 bg-black rounded-3xl flex flex-col items-center justify-center text-center text-white p-6">
          
          {/* Título maior */}
          <h2 className="mb-6 text-3xl font-medium">
            {messages.cta.title}
          </h2>

          {/* Botão menor */}
          <Link
            to="/registro"
            className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            {messages.cta.button}
            {/* Círculo da seta com cor ciano */}
            <span className="rounded-full bg-primary px-2 py-0.5 text-white">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}