import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      onClick={toggleLang}
      className="fixed bottom-3 left-3 z-40 px-3.5 py-1.5 rounded-full bg-[#5F250F]/90 text-[#FFF4EA] border border-[#DDA45D] text-[11px] sm:text-xs font-semibold shadow-lg backdrop-blur-sm hover:bg-[#5F250F] transition-colors cursor-pointer"
      aria-label="Toggle language"
    >
      {lang === 'gu' ? 'English' : 'ગુજરાતી'}
    </motion.button>
  );
};

export default LanguageToggle;
