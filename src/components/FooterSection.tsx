import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import weddingData from '@/data/wedding';

const FooterSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const f = weddingData.footer;
  const familyList = lang === 'gu' ? f.familyListGu : f.familyListEn;
  const wishesList = lang === 'gu' ? f.wishesListGu : f.wishesListEn;

  return (
    <footer
      id="footer"
      className="relative w-full max-w-[1515px] mx-auto bg-gradient-to-b from-[#EDE0CD] via-[#F5E8D6] to-[#F7E8D4] pt-8 sm:pt-12 pb-16 sm:pb-14 px-4 sm:px-6 text-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="max-w-[820px] mx-auto"
      >
        {/* Top Framer Lotus Accent */}
        <div className="flex justify-center mb-4 pointer-events-none select-none">
          <img
            src={weddingData.framer.peacockLotus}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="w-[140px] sm:w-[190px] h-auto"
          />
        </div>

        {/* Greeting */}
        <h2
          className={`text-2xl sm:text-3xl lg:text-[38px] text-[#5F250F] leading-snug ${
            lang === 'gu' ? 'font-gujarati font-bold' : 'font-ivyora font-medium'
          }`}
        >
          {t(f.greetingGu, f.greetingEn)}
        </h2>

        {/* Nimantrak + Tap-to-Call Badges */}
        <div className="mt-6">
          <p
            className={`text-[11px] font-semibold text-[#AB5626] ${
              lang === 'gu' ? 'font-gujarati' : 'font-gotham uppercase tracking-[0.2em]'
            }`}
          >
            {t(f.nimantrakLabelGu, f.nimantrakLabelEn)}
          </p>
          <p
            className={`text-lg sm:text-2xl font-bold text-[#5F250F] mt-1 ${
              lang === 'gu' ? 'font-gujarati' : 'font-ivyora font-medium'
            }`}
          >
            {t(f.nimantrakNameGu, f.nimantrakNameEn)}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-3.5">
            {f.phones.map((p) => (
              <a
                key={p.tel}
                href={`tel:${p.tel}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#DDA45D] text-[#5F250F] text-xs font-gotham font-medium hover:bg-[#AB5626] hover:text-white transition-colors shadow-sm"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>{p.display}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Mandaviya Family Plaque & Darshanabhilashi */}
        <div className="relative mt-7 rounded-2xl border border-[#DDA45D]/70 bg-[#FFEFE2]/85 backdrop-blur-sm px-4 sm:px-8 py-6 shadow-sm">
          <p
            className={`text-xs sm:text-sm font-bold text-[#AB5626] mb-3 ${
              lang === 'gu' ? 'font-gujarati' : 'font-gotham uppercase tracking-widest'
            }`}
          >
            {t(f.familyTitleGu, f.familyTitleEn)}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 max-w-[660px] mx-auto">
            {familyList.map((member, i) => (
              <p
                key={i}
                className={`text-xs sm:text-[13px] text-[#5F250F]/85 leading-relaxed ${
                  lang === 'gu' ? 'font-gujarati' : 'font-gotham'
                }`}
              >
                {member}
              </p>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[#DDA45D]/40">
            <p
              className={`text-xs font-bold text-[#AB5626] mb-2 ${
                lang === 'gu' ? 'font-gujarati' : 'font-gotham uppercase tracking-widest'
              }`}
            >
              {t(f.wishesTitleGu, f.wishesTitleEn)}
            </p>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 max-w-[660px] mx-auto">
              {wishesList.map((person, idx) => (
                <span
                  key={idx}
                  className={`text-[11px] sm:text-xs text-[#5F250F]/80 ${
                    lang === 'gu' ? 'font-gujarati' : 'font-gotham'
                  }`}
                >
                  {person}
                  {idx < wishesList.length - 1 ? ' •' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sponsors Credit Line */}
        <div className="mt-6 pt-4 border-t border-[#5F250F]/15 space-y-1.5">
          {f.sponsors.map((sp, i) => (
            <p
              key={i}
              className={`text-[11px] sm:text-xs text-[#5F250F]/75 leading-relaxed ${
                lang === 'gu' ? 'font-gujarati' : 'font-gotham'
              }`}
            >
              <span className="font-semibold text-[#5F250F]">
                {t(sp.nameGu, sp.nameEn)}
              </span>
              {' — '}
              <span>{t(sp.detailGu, sp.detailEn)}</span>
            </p>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
