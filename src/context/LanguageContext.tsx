import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Language } from '@/data/wedding';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (gu: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  toggleLang: () => {},
  t: (_gu: string, en: string) => en,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'gu' ? 'en' : 'gu'));
  }, []);

  const t = useCallback(
    (gu: string, en: string) => (lang === 'gu' ? gu : en),
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
