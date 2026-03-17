import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export function Navbar() {
  const { messages, locale, toggleLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/90 backdrop-blur dark:bg-black/90">
      <div className="section-container flex h-20 items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-wide text-primary">
          VENDRIX
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#inicio" className="transition hover:text-primary">{messages.nav.home}</a>
          <a href="#apoiadores" className="transition hover:text-primary">{messages.nav.supporters}</a>
          <Link to="/planos" className="transition hover:text-primary">{messages.nav.plans}</Link>
          <a href="#solucao" className="transition hover:text-primary">{messages.nav.solution}</a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button onClick={toggleLocale} className="rounded-lg border border-primary/60 px-3 py-2 text-xs font-semibold uppercase tracking-wide transition hover:bg-primary/10">
            {locale}
          </button>
          <button onClick={toggleTheme} className="rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold transition hover:border-primary/60">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <Link to="/login" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110">
            {messages.nav.clientArea}
          </Link>
        </div>
      </div>
    </header>
  );
}
