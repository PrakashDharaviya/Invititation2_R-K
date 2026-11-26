import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import weddingData from '@/data/wedding';
import {
  SunburstDividerSvg,
  ThingsBadgeIconSvg,
} from '@/components/svg/TempleOrnaments';

const ThingsToKnowSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const items = weddingData.thingsToKnow.items;

  return (
    <section
      id="things-to-know"
      className="relative w-full bg-[#FFF4EA] py-8 sm:py-12 px-2 sm:px-6 text-center overflow-hidden"
    >
      {/* Top Upward Sunburst Divider */}
      <SunburstDividerSvg className="w-48 sm:w-64 h-12 mx-auto mb-3" direction="up" />

      {/* Heading + Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="max-w-[680px] mx-auto px-3 mb-8 sm:mb-10"
      >
        <h2
          className={`text-[#5F250F] leading-tight ${
            lang === 'gu'
              ? 'font-gujarati font-bold text-3xl sm:text-5xl lg:text-[56px]'
              : 'font-display font-medium text-[31px] sm:text-5xl lg:text-[60px]'
          }`}
        >
          {t(weddingData.thingsToKnow.headingGu, weddingData.thingsToKnow.headingEn)}
        </h2>
        <p
          className={`mt-2.5 text-xs sm:text-sm lg:text-base text-[#5F250F]/80 leading-relaxed ${
            lang === 'gu' ? 'font-gujarati' : 'font-sans'
          }`}
        >
          {t(weddingData.thingsToKnow.subtextGu, weddingData.thingsToKnow.subtextEn)}
        </p>
      </motion.div>

      {/* 4 Columns Side-by-Side in 1 Horizontal Row (on BOTH Desktop AND 393px Poco M4 Pro) */}
      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8 }}
        className="max-w-[1040px] mx-auto grid grid-cols-4 divide-x divide-[#DDA45D]/55"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center px-1 sm:px-5 py-2 min-w-0"
          >
            {/* Circular Dark Burnt-Umber Icon Badge (#5F250F) */}
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#5F250F] flex items-center justify-center shadow-sm mb-2 sm:mb-3.5">
              <ThingsBadgeIconSvg id={item.id} />
            </div>

            <h3
              className={`text-[11px] sm:text-base lg:text-lg font-bold text-[#5F250F] leading-snug break-words w-full ${
                lang === 'gu' ? 'font-gujarati' : 'font-display'
              }`}
            >
              {t(item.titleGu, item.titleEn)}
            </h3>

            <p
              className={`mt-1 text-[9px] sm:text-xs lg:text-[13px] text-[#5F250F]/75 leading-[1.35] max-w-[190px] break-words w-full ${
                lang === 'gu' ? 'font-gujarati' : 'font-sans'
              }`}
            >
              {t(item.descriptionGu, item.descriptionEn)}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ThingsToKnowSection;
