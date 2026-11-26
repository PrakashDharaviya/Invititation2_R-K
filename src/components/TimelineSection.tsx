import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import weddingData from '@/data/wedding';
import {
  ScallopedTimelineCardFrame,
  LotusDividerSvg,
} from '@/components/svg/TempleOrnaments';

const TimelineSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const events = weddingData.timeline.events;

  return (
    <section
      id="timeline"
      className="relative w-full courtyard-sand pt-10 sm:pt-16 pb-0 overflow-hidden"
    >
      {/* Subtle Diamond Courtyard Motifs matching reference */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 25%, rgba(171,86,38,0.22) 0%, transparent 25%), radial-gradient(circle at 80% 45%, rgba(171,86,38,0.18) 0%, transparent 25%)',
        }}
      />

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center px-4 max-w-[1160px] mx-auto mb-8 sm:mb-12"
      >
        <h2
          className={`text-[#5F250F] leading-tight ${
            lang === 'gu'
              ? 'font-gujarati font-bold text-3xl sm:text-5xl lg:text-[64px]'
              : 'font-display font-medium text-[28px] sm:text-5xl lg:text-[74px]'
          }`}
        >
          {lang === 'gu' ? (
            weddingData.timeline.headingGu
          ) : (
            <>
              <span className="md:hidden">{weddingData.timeline.headingMobileEn}</span>
              <span className="hidden md:inline">{weddingData.timeline.headingEn}</span>
            </>
          )}
        </h2>
        <p
          className={`mt-2 text-[13px] sm:text-base lg:text-lg text-[#5F250F]/85 ${
            lang === 'gu' ? 'font-gujarati' : 'font-sans'
          }`}
        >
          {t(weddingData.timeline.subtextGu, weddingData.timeline.subtextEn)}
        </p>
      </motion.div>

      {/* Cards Grid: 6 horizontally in 1 row on desktop (lg:grid-cols-6), static 2x3 grid on Poco M4 Pro / mobile (grid-cols-2) */}
      <div className="relative z-10 max-w-[1340px] mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-3.5 items-stretch max-w-[400px] sm:max-w-[760px] lg:max-w-none mx-auto">
          {events.map((ev, idx) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.65, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="h-[258px] sm:h-[310px] lg:h-[325px]"
            >
              <ScallopedTimelineCardFrame className="h-full">
                {/* Event Title */}
                <div className="pt-1">
                  <h3
                    className={`text-lg sm:text-[21px] leading-snug font-semibold text-[#AB5626] ${
                      lang === 'gu' ? 'font-gujarati font-bold' : 'font-display'
                    }`}
                  >
                    {t(ev.titleGu, ev.titleEn)}
                  </h3>
                  {lang === 'en' && (
                    <p className="font-gujarati text-[11px] text-[#5F250F]/70 mt-0.5">
                      {ev.titleGu}
                    </p>
                  )}
                </div>

                {/* Day, Date, Venue, Time */}
                <div
                  className={`space-y-1 text-[11px] sm:text-xs text-[#5F250F] leading-snug ${
                    lang === 'gu' ? 'font-gujarati' : 'font-sans'
                  }`}
                >
                  <p className="font-medium text-[#5F250F]/80">{t(ev.dayGu, ev.dayEn)}</p>
                  <p className="font-semibold">{t(ev.dateGu, ev.dateEn)}</p>
                  <p className="text-[#5F250F]/85">{t(ev.placeGu, ev.placeEn)}</p>
                  <p className="font-semibold text-[#AB5626] pt-0.5">
                    {t(ev.timeGu, ev.timeEn)}
                  </p>
                </div>

                {/* Bottom Link */}
                <a
                  href="#venue"
                  className={`text-[9px] sm:text-[10px] tracking-wide text-[#5F250F]/75 hover:text-[#AB5626] underline underline-offset-2 ${
                    lang === 'gu' ? 'font-gujarati' : 'font-sans'
                  }`}
                >
                  {t(weddingData.timeline.moreDetailsGu, weddingData.timeline.moreDetailsEn)}
                </a>
              </ScallopedTimelineCardFrame>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pink Lotus Horizontal Divider */}
      <div className="relative z-10 py-8 sm:py-12 px-6">
        <LotusDividerSvg className="max-w-[420px] mx-auto" />
      </div>

      {/* Grand Floral Mandap & Veined Cream Marble Floor */}
      <div className="relative z-10 w-full pointer-events-none select-none">
        <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#DFB87D] to-transparent z-10" />
        <img
          src={weddingData.assets.floralMandapScene}
          alt="Wedding floral mandap"
          loading="lazy"
          className="w-full h-auto max-h-[680px] object-cover object-center block"
        />
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#F9F2EB] to-transparent z-10" />
      </div>
    </section>
  );
};

export default TimelineSection;
