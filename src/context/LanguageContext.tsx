import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import ptBR from '../locales/pt-BR.json';
import enUS from '../locales/en-US.json';

type Locale = 'pt-BR' | 'en-US';

type Messages = typeof ptBR;

const dictionaries: Record<Locale, Messages> = {
  'pt-BR': ptBR,
  'en-US': enUS,
};

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  messages: Messages;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('pt-BR');

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale((prev) => (prev === 'pt-BR' ? 'en-US' : 'pt-BR')),
      messages: dictionaries[locale],
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
