import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function AuthPlaceholder({ title }: { title: string }) {
  const { messages } = useLanguage();

  return (
    <main className="section-container section-spacing text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-4 text-black/70 dark:text-white/70">{messages.common.soon}</p>
      <Link to="/" className="mt-6 inline-block rounded-lg bg-primary px-4 py-2 font-semibold text-white">
        {messages.common.back}
      </Link>
    </main>
  );
}
