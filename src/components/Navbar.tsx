import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/logo/logo.png';
import { FaSun, FaMoon } from 'react-icons/fa';
import { GB, BR } from 'country-flag-icons/react/3x2';

export function Navbar() {
  const { messages, locale, toggleLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/90 backdrop-blur dark:bg-black/90">
      <div className="section-container flex h-20 items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Vendrix Logo" className="h-14 sm:h-20" />
        </Link>

        {/* Navegação */}
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#inicio" className="transition hover:text-primary">{messages.nav.home}</a>
          <a href="#apoiadores" className="transition hover:text-primary">{messages.nav.supporters}</a>
          <Link to="/planos" className="transition hover:text-primary">{messages.nav.plans}</Link>
          <a href="#solucao" className="transition hover:text-primary">{messages.nav.solution}</a>
        </nav>

        {/* Ações */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Idioma */}
          <button
            onClick={toggleLocale}
            className="flex items-center gap-2 rounded-lg border border-primary/60 px-3 py-2 text-xs font-semibold transition hover:bg-primary/10"
          >
            {locale === 'pt-BR' ? (
              <>
                <BR className="h-4 w-5 rounded-sm" />
                <span>PT-BR</span>
              </>
            ) : (
              <>
                <GB className="h-4 w-5 rounded-sm" />
                <span>EN-US</span>
              </>
            )}
          </button>

          {/* Tema */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center px-4 py-2 text-lg transition"
          >
            {theme === 'dark' ? (
              <FaSun className="text-white-400" />
            ) : (
              <FaMoon className="text-gray-700" />
            )}
          </button>

          {/* CTA */}
          <Link
            to="/login"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
          >
            {messages.nav.clientArea}
          </Link>

        </div>
      </div>
    </header>
  );
}