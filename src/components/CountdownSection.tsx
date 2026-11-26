import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import weddingData from '@/data/wedding';
import {
  SunburstDividerSvg,
  FourPointStarSvg,
} from '@/components/svg/TempleOrnaments';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const targetTimestamp = useMemo(
    () => new Date(weddingData.countdown.targetIsoIST).getTime(),
    []
  );

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = Date.now();
      if (Number.isNaN(targetTimestamp)) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const diff = targetTimestamp - now;
      if (diff <= 0) {
        setCompleted(true);
        return;
      }
      setCompleted(false);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [targetTimestamp]);

  const units = [
    { key: 'days', value: timeLeft.days, labelEn: 'DAYS', labelGu: 'દિવસ' },
    { key: 'hours', value: timeLeft.hours, labelEn: 'HOURS', labelGu: 'કલાક' },
    { key: 'minutes', value: timeLeft.minutes, labelEn: 'MINUTES', labelGu: 'મિનિટ' },
    { key: 'seconds', value: timeLeft.seconds, labelEn: 'SECONDS', labelGu: 'સેકન્ડ' },
  ];

  return (
    <section
      id="countdown"
      className="relative w-full bg-[#FFF4EA] pt-6 sm:pt-10 pb-8 px-4 text-center overflow-hidden"
    >
      {/* Downward Golden Sunburst Divider */}
      <SunburstDividerSvg className="w-48 sm:w-64 h-12 mx-auto mb-6" direction="down" />

      {/* Heading + Subtitle + Star Divider */}
      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[540px] mx-auto"
      >
        <h2
          className={`text-[#5F250F] leading-tight ${
            lang === 'gu'
              ? 'font-gujarati font-bold text-2xl sm:text-4xl lg:text-[48px]'
              : 'font-display font-medium text-[26px] sm:text-4xl lg:text-[54px]'
          }`}
        >
          {t(weddingData.countdown.headingGu, weddingData.countdown.headingEn)}
        </h2>
        <p
          className={`mt-2.5 text-xs sm:text-sm text-[#5F250F]/80 leading-relaxed max-w-[440px] mx-auto ${
            lang === 'gu' ? 'font-gujarati' : 'font-sans'
          }`}
        >
          {t(weddingData.countdown.subtextGu, weddingData.countdown.subtextEn)}
        </p>

        {/* Gold Star Divider */}
        <div className="flex items-center justify-center gap-3 w-40 mx-auto mt-5">
          <div className="h-[1px] flex-1 bg-[#DDA45D]/70" />
          <FourPointStarSvg className="w-3 h-3" />
          <div className="h-[1px] flex-1 bg-[#DDA45D]/70" />
        </div>
      </motion.div>

      {/* Open Floating Gold Numerals (#DDA45D) with Blur-Flip Transition */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-7"
      >
        {completed ? (
          <p className="font-gujarati text-2xl sm:text-4xl font-bold text-[#AB5626]">
            {weddingData.countdown.completedText}
          </p>
        ) : (
          <div className="flex justify-center items-center gap-6 sm:gap-10">
            {units.map((u) => {
              const formatted = String(u.value).padStart(2, '0');
              return (
                <div key={u.key} className="flex flex-col items-center">
                  <div className="relative h-11 sm:h-14 flex items-center justify-center overflow-hidden">
                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={formatted}
                        initial={{ opacity: 0, y: 10, filter: 'blur(3px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -10, filter: 'blur(3px)' }}
                        transition={{ duration: 0.35 }}
                        className="font-sans font-bold text-[34px] sm:text-[44px] lg:text-[52px] text-[#DDA45D] leading-none tabular-nums"
                      >
                        {formatted}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <span
                    className={`mt-1.5 text-[9px] sm:text-[10px] tracking-[0.12em] uppercase font-semibold text-[#888888] ${
                      lang === 'gu' ? 'font-gujarati' : 'font-sans'
                    }`}
                  >
                    {lang === 'gu' ? u.labelGu : u.labelEn}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default CountdownSection;
