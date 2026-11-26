import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import weddingData from '@/data/wedding';
import { LotusDividerSvg, FourPointStarSvg } from '@/components/svg/TempleOrnaments';

const FooterSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const f = weddingData.footer;
  const familyList = lang === 'gu' ? f.familyListGu : f.familyListEn;
  const wishesList = lang === 'gu' ? f.wishesListGu : f.wishesListEn;

  return (
    <footer
      id="footer"
      className="relative w-full bg-[#FFF4EA] overflow-hidden"
    >
      {/* Full-Bleed Scenic Royal Elephant, Octagonal Chhatri & Pink Lotus Pond */}
      <div className="relative w-full">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#FFF4EA] to-transparent z-10 pointer-events-none" />
        <img
          src={weddingData.assets.footerElephantScene}
          alt="Temple lotus pond and royal elephant"
          loading="lazy"
          className="w-full h-auto max-h-[680px] object-cover object-bottom block select-none"
        />
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#EDE0CD] to-transparent z-10 pointer-events-none" />
      </div>

      {/* Royal Parchment Footer Card — Clean Gujarati / English separation */}
      <div className="relative z-10 bg-gradient-to-b from-[#EDE0CD] via-[#F5E8D6] to-[#FFF4EA] pt-6 pb-16 sm:pb-12 px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="max-w-[820px] mx-auto"
        >
          {/* Top Lotus Ornament */}
          <LotusDividerSvg className="max-w-[280px] mx-auto mb-5" />

          {/* Greeting (pure Gujarati or pure English matching active toggle) */}
          <h2
            className={`text-2xl sm:text-3xl lg:text-[34px] text-[#5F250F] leading-snug ${
              lang === 'gu' ? 'font-gujarati font-bold' : 'font-display font-medium'
            }`}
          >
            {t(f.greetingGu, f.greetingEn)}
          </h2>

          {/* Nimantrak + Tap-to-Call Numbers */}
          <div className="mt-6">
            <p
              className={`text-[11px] font-semibold text-[#AB5626] ${
                lang === 'gu' ? 'font-gujarati' : 'font-sans uppercase tracking-[0.2em]'
              }`}
            >
              {t(f.nimantrakLabelGu, f.nimantrakLabelEn)}
            </p>
            <p
              className={`text-lg sm:text-xl font-bold text-[#5F250F] mt-1 ${
                lang === 'gu' ? 'font-gujarati' : 'font-display'
              }`}
            >
              {t(f.nimantrakNameGu, f.nimantrakNameEn)}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-3.5">
              {f.phones.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#DDA45D] text-[#5F250F] text-xs font-sans font-semibold hover:bg-[#AB5626] hover:text-white transition-colors shadow-sm"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>{p.display}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Ornate Family Plaque: Mandaviya Family & Darshanabhilashi */}
          <div className="relative mt-7 rounded-2xl border border-[#DDA45D]/70 bg-[#FFF8EE]/80 backdrop-blur-sm px-4 sm:px-8 py-6 shadow-sm">
            <FourPointStarSvg className="w-3 h-3 absolute top-3 left-3 pointer-events-none" />
            <FourPointStarSvg className="w-3 h-3 absolute top-3 right-3 pointer-events-none" />

            {/* Elders & Couples */}
            <p
              className={`text-xs sm:text-sm font-bold text-[#AB5626] mb-3 ${
                lang === 'gu' ? 'font-gujarati' : 'font-sans uppercase tracking-widest'
              }`}
            >
              {t(f.familyTitleGu, f.familyTitleEn)}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 max-w-[660px] mx-auto">
              {familyList.map((member, i) => (
                <p
                  key={i}
                  className={`text-xs sm:text-[13px] text-[#5F250F]/85 leading-relaxed ${
                    lang === 'gu' ? 'font-gujarati' : 'font-sans'
                  }`}
                >
                  {member}
                </p>
              ))}
            </div>

            {/* Darshanabhilashi / With Best Wishes */}
            <div className="mt-5 pt-4 border-t border-[#DDA45D]/40">
              <p
                className={`text-xs font-bold text-[#AB5626] mb-2 ${
                  lang === 'gu' ? 'font-gujarati' : 'font-sans uppercase tracking-widest'
                }`}
              >
                {t(f.wishesTitleGu, f.wishesTitleEn)}
              </p>
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 max-w-[660px] mx-auto">
                {wishesList.map((person, idx) => (
                  <span
                    key={idx}
                    className={`text-[11px] sm:text-xs text-[#5F250F]/80 ${
                      lang === 'gu' ? 'font-gujarati' : 'font-sans'
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
                  lang === 'gu' ? 'font-gujarati' : 'font-sans'
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
      </div>
    </footer>
  );
};

export default FooterSection;
