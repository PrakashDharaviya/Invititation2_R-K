import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import weddingData from '@/data/wedding';

gsap.registerPlugin(ScrollTrigger);

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const pondRef = useRef<HTMLDivElement>(null);
  const targetTimestamp = useMemo(
    () => new Date(weddingData.countdown.targetIsoIST).getTime(),
    []
  );

  // Smooth depth parallax on Royal Temple Lotus Pond & Elephant backdrop
  useEffect(() => {
    if (!pondRef.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        pondRef.current,
        { y: 20, scale: 1.03 },
        {
          y: 0,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: pondRef.current,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 1.1,
          },
        }
      );
    }, pondRef);

    return () => ctx.revert();
  }, []);

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
      className="relative w-full max-w-[1515px] mx-auto bg-[#FFEFE2] overflow-hidden text-center"
    >
      {/* Upper Countdown Text & Timer with Gold Architectural Side Rails */}
      <div className="max-w-[1260px] mx-auto border-x border-[#DDA45D]/45 px-4 pt-6 sm:pt-12 pb-6 sm:pb-10">
        {/* Top Framer Sunburst Ornament */}
        <div className="flex justify-center mb-5 sm:mb-8 pointer-events-none select-none">
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

        {/* Heading + Intro Paragraph + Star Divider */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.95, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[780px] mx-auto"
        >
          <h2
            className={`text-[#5F250F] leading-[1.06] ${
              lang === 'gu'
                ? 'font-gujarati font-bold text-2xl sm:text-5xl lg:text-[64px]'
                : 'font-ivyora font-medium text-[24px] sm:text-6xl lg:text-[86px]'
            }`}
          >
            {t(weddingData.countdown.headingGu, weddingData.countdown.headingEn)}
          </h2>

          <p
            className={`mt-3 sm:mt-5 text-[11px] sm:text-lg lg:text-[26px] text-[#5F250F] leading-[1.45] max-w-[680px] mx-auto ${
              lang === 'gu' ? 'font-gujarati' : 'font-ivyora font-normal'
            }`}
          >
            {t(weddingData.countdown.subtextGu, weddingData.countdown.subtextEn)}
          </p>

          {/* Exact Framer 4-Point Star Golden Line Divider */}
          <div className="flex justify-center mt-5 sm:mt-7 pointer-events-none select-none">
            <img
              src={weddingData.framer.starDividerMobile}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="md:hidden w-[180px] h-auto"
            />
            <img
              src={weddingData.framer.starDividerWide}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="hidden md:block w-[560px] h-auto"
            />
          </div>
        </motion.div>

        {/* Framer Countdown Numerals (#DDA45D Bold Inter, Blur-Flip Digit Animation) */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-7 sm:mt-10"
        >
          {completed ? (
            <p
              className={`text-xl sm:text-4xl font-bold text-[#AB5626] ${
                lang === 'gu' ? 'font-gujarati' : 'font-ivyora'
              }`}
            >
              {t(weddingData.countdown.completedTextGu, weddingData.countdown.completedTextEn)}
            </p>
          ) : (
            <div className="flex justify-center items-center gap-3.5 min-[375px]:gap-6 sm:gap-12 lg:gap-16">
              {units.map((u) => {
                const formatted = String(u.value).padStart(2, '0');
                return (
                  <div key={u.key} className="flex flex-col items-center">
                    <div className="relative h-10 min-[375px]:h-11 sm:h-16 lg:h-20 flex items-center justify-center overflow-hidden">
                      <AnimatePresence mode="popLayout">
                        <motion.span
                          key={formatted}
                          initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
                          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                          exit={{ opacity: 0, y: -12, filter: 'blur(3px)' }}
                          transition={{ duration: 0.35 }}
                          style={{ fontFamily: '"Inter", sans-serif' }}
                          className="font-bold text-[30px] min-[375px]:text-[36px] sm:text-[54px] lg:text-[72px] text-[#DDA45D] leading-none tabular-nums"
                        >
                          {formatted}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                    <span
                      style={{ fontFamily: lang === 'gu' ? undefined : '"Inter", sans-serif' }}
                      className={`mt-1.5 text-[9px] sm:text-[12px] lg:text-[14px] tracking-[0.12em] uppercase font-semibold text-[#888888] ${
                        lang === 'gu' ? 'font-gujarati' : ''
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

        {/* Bottom Flipped Framer Sunburst Ornament */}
        <div className="flex justify-center mt-7 sm:mt-10 pointer-events-none select-none rotate-180">
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

      {/* Royal Temple Lotus Pond & Elephant Sunset Scene (Framers Countdown Backdrop) */}
      <div
        ref={pondRef}
        className="relative w-full -mt-4 sm:-mt-10 lg:-mt-16 pointer-events-none select-none will-change-transform"
      >
        <img
          src={weddingData.framer.countdownBackdropMobile}
          alt="Royal Temple Lotus Pond and Elephant"
          loading="lazy"
          className="md:hidden w-full h-auto block"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 100%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 100%)',
          }}
        />
        <img
          src={weddingData.framer.countdownBackdropDesktop}
          alt="Royal Temple Lotus Pond and Elephant"
          loading="lazy"
          className="hidden md:block w-full h-auto block"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 100%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 100%)',
          }}
        />
      </div>
    </section>
  );
};

export default CountdownSection;
