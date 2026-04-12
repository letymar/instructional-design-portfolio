'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import ptMessages from '../../messages/pt.json';
import enMessages from '../../messages/en.json';

export type Language = 'pt' | 'en';

type Messages = typeof ptMessages;

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Messages;
}

const messagesMap: Record<Language, Messages> = {
  pt: ptMessages,
  en: enMessages as unknown as Messages,
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'pt',
  setLang: () => {},
  t: ptMessages,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('pt');

  useEffect(() => {
    // Restore from localStorage first
    const saved = localStorage.getItem('portfolio_lang') as Language | null;
    if (saved === 'pt' || saved === 'en') {
      setLangState(saved);
      return;
    }
    // Auto-detect from browser
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('en')) {
      setLangState('en');
    }
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem('portfolio_lang', l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: messagesMap[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
