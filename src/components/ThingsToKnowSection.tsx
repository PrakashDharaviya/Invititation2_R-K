import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import weddingData from '@/data/wedding';

const ThingsToKnowSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const items = weddingData.thingsToKnow.items;

  return (
    <section
      id="things-to-know"
      className="relative w-full max-w-[1515px] mx-auto bg-[#FFEFE2] py-6 sm:py-10 px-3 sm:px-8 overflow-hidden"
    >
      <div className="max-w-[1260px] mx-auto border-x border-[#DDA45D]/45 px-2 sm:px-8 lg:px-12 py-6 sm:py-10 text-center">
        {/* Top Framer Sunburst Ornament Divider */}
        <div className="flex justify-center mb-4 sm:mb-7 pointer-events-none select-none">
          <img
            src={weddingData.framer.ornamentMobile}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="md:hidden w-[250px] h-auto"
          />
          <img
            src={weddingData.framer.ornamentWide}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="hidden md:block w-[480px] h-auto"
          />
        </div>

        {/* Heading + Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.96, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[820px] mx-auto px-3 mb-7 sm:mb-10"
        >
          <h2
            className={`text-[#5F250F] leading-tight ${
              lang === 'gu'
                ? 'font-gujarati font-bold text-[30px] sm:text-5xl lg:text-[56px]'
                : 'font-ivyora font-medium text-[31px] sm:text-5xl lg:text-[60px]'
            }`}
          >
            {t(weddingData.thingsToKnow.headingGu, weddingData.thingsToKnow.headingEn)}
          </h2>
          <p
            className={`mt-2.5 text-[11px] sm:text-base lg:text-[20px] text-[#5F250F] leading-[1.6] ${
              lang === 'gu' ? 'font-gujarati' : 'font-gotham tracking-[-0.02em]'
            }`}
          >
            {t(weddingData.thingsToKnow.subtextGu, weddingData.thingsToKnow.subtextEn)}
          </p>
        </motion.div>

        {/* 4 Info Columns Row — Original Circular Framer Icons + #DDA45D Vertical Dividers */}
        <div className="max-w-[1040px] mx-auto grid grid-cols-4 divide-x-[1.5px] sm:divide-x-[3px] divide-[#DDA45D]">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28, scale: 0.95, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.75, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col items-center text-center px-1 sm:px-4 py-2 min-w-0"
            >
              <img
                src={item.icon}
                alt={t(item.titleGu, item.titleEn)}
                loading="lazy"
                className="w-10 h-10 sm:w-16 sm:h-16 lg:w-[88px] lg:h-[88px] object-contain mb-2 sm:mb-3 select-none"
              />

              <h3
                className={`text-[12px] sm:text-[20px] lg:text-[26px] font-medium text-[#5F250F] leading-snug break-words w-full ${
                  lang === 'gu' ? 'font-gujarati font-bold' : 'font-ivyora'
                }`}
              >
                {t(item.titleGu, item.titleEn)}
              </h3>

              <p
                className={`mt-1 text-[8.5px] sm:text-[12px] lg:text-[13px] text-[#5F250F]/85 leading-[1.35] max-w-[200px] break-words w-full ${
                  lang === 'gu' ? 'font-gujarati' : 'font-ivyora'
                }`}
              >
                {t(item.descriptionGu, item.descriptionEn)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Flipped Framer Sunburst Ornament Divider */}
        <div className="flex justify-center mt-6 sm:mt-10 pointer-events-none select-none rotate-180">
          <img
            src={weddingData.framer.ornamentMobile}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="md:hidden w-[250px] h-auto"
          />
          <img
            src={weddingData.framer.ornamentWide}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="hidden md:block w-[480px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ThingsToKnowSection;
