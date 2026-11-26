import React, { createContext, useContext, useState, useCallback } from 'react';
import { Language } from '@/data/wedding';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (gu: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'gu',
  toggleLang: () => {},
  t: (gu: string) => gu,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('gu');

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
