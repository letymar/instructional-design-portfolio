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
    // 1. Restore from localStorage (user's explicit choice)
    const saved = localStorage.getItem('portfolio_lang') as Language | null;
    if (saved === 'pt' || saved === 'en') {
      setLangState(saved);
      return;
    }

    // 2. Check all browser/OS languages in order of preference
    // navigator.languages covers: browser UI language, OS language, and user-configured preferences
    const browserLangs = navigator.languages?.length
      ? navigator.languages
      : [navigator.language];

    const hasPt = browserLangs.some(l => l.toLowerCase().startsWith('pt'));
    const hasEn = browserLangs.some(l => l.toLowerCase().startsWith('en'));

    if (hasPt) {
      setLangState('pt');
      return;
    }
    if (hasEn) {
      setLangState('en');
      return;
    }

    // 3. Geographic fallback via IP (async, best-effort)
    fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) })
      .then(r => r.json())
      .then(data => {
        const country: string = (data.country_code ?? '').toUpperCase();
        const ptCountries = ['PT', 'BR', 'AO', 'MZ', 'CV', 'GW', 'ST', 'TL'];
        if (ptCountries.includes(country)) setLangState('pt');
        else setLangState('en');
      })
      .catch(() => {
        // Default to PT (portfolio owner is Portuguese)
        setLangState('pt');
      });
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
