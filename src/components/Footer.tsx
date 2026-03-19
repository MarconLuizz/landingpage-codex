import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logo/logo.png';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

export function Footer() {
  const { messages } = useLanguage();

  return (
    <footer className="border-t border-black/10 py-10 dark:border-white/10">
      <div className="section-container grid gap-8 md:grid-cols-4">
        
        {/* Logo + descrição */}
        <div>
          <img src={logo} alt="Vendrix Logo" className="h-14 sm:h-20" />
          <p className="mt-1 text-sm text-black/70 dark:text-white/70">
            {messages.footer.description}
          </p>
        </div>

        {/* Navegação */}
        <div>
          <p className="mb-3 font-semibold">Navegação</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#inicio">{messages.nav.home}</a></li>
            <li><a href="#solucao">{messages.nav.solution}</a></li>
            <li><Link to="/planos">{messages.nav.plans}</Link></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <p className="mb-3 font-semibold">{messages.footer.contact}</p>
          <p className="text-sm">contato@vendrix.ai</p>
        </div>

        {/* Redes sociais */}
        <div>
          <p className="mb-3 font-semibold">{messages.footer.social}</p>
          <div className="flex items-center gap-5 text-2xl">
            <a
              href="https://linkedin.com/company/sua-empresa"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-primary"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/sua-empresa"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-primary"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      <p className="section-container mt-8 text-xs text-black/50 dark:text-white/50">
        {messages.footer.copyright}
      </p>
    </footer>
  );
}