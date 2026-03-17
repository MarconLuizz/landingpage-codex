import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { messages } = useLanguage();

  return (
    <footer className="border-t border-black/10 py-10 dark:border-white/10">
      <div className="section-container grid gap-8 md:grid-cols-4">
        <div>
          <p className="text-xl font-bold text-primary">VENDRIX</p>
          <p className="mt-3 text-sm text-black/70 dark:text-white/70">{messages.footer.description}</p>
        </div>
        <div>
          <p className="mb-3 font-semibold">Navegação</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#inicio">{messages.nav.home}</a></li>
            <li><a href="#solucao">{messages.nav.solution}</a></li>
            <li><Link to="/planos">{messages.nav.plans}</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 font-semibold">{messages.footer.contact}</p>
          <p className="text-sm">contato@vendrix.ai</p>
        </div>
        <div>
          <p className="mb-3 font-semibold">{messages.footer.social}</p>
          <p className="text-sm">LinkedIn • Instagram • X</p>
        </div>
      </div>
      <p className="section-container mt-8 text-xs text-black/50 dark:text-white/50">{messages.footer.copyright}</p>
    </footer>
  );
}
