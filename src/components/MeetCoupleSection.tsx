import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import weddingData from '@/data/wedding';
import {
  PinkLotusSvg,
  FourPointStarSvg,
  SunburstDividerSvg,
} from '@/components/svg/TempleOrnaments';

gsap.registerPlugin(ScrollTrigger);

const WHEEL_SLOTS = Array.from({ length: 10 }, (_, i) => i * 36);
const GALLERY_SLOT_INDEXES = [0, 1, 2, 3, 4, 5, 1, 2, 4, 5];
const WHEEL_DIAMETER = 900;
const WHEEL_RADIUS = 450;
const CARD_SIZE = 152;

const MeetCoupleSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const [coupleSrc, setCoupleSrc] = useState(weddingData.assets.couplePhoto);
  const storyRef = useRef<HTMLParagraphElement>(null);

  const storyText = t(weddingData.meetCouple.messageGu, weddingData.meetCouple.messageEn);
  const words = storyText.split(' ');

  // Scroll-triggered word-by-word color highlight matching reference (transition: color 0.3s linear)
  useEffect(() => {
    if (!storyRef.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wordEls = storyRef.current.querySelectorAll('.story-word');

    if (prefersReduced) {
      gsap.set(wordEls, { color: 'rgb(95, 37, 15)' });
      return;
    }

    gsap.set(wordEls, { color: 'rgba(95, 37, 15, 0.25)' });

    const ctx = gsap.context(() => {
      gsap.to(wordEls, {
        color: 'rgb(95, 37, 15)',
        stagger: 0.08,
        duration: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top 80%',
          end: 'bottom 52%',
          scrub: 0.7,
        },
      });
    }, storyRef);

    return () => ctx.revert();
  }, [lang, storyText]);

  return (
    <section
      id="meet-couple"
      className="relative w-full marble-floor-bg pb-12 overflow-hidden"
    >
      {/* Heading: "Meet the BRIDE & GROOM" */}
      <motion.div
        initial={{ opacity: 0, y: 70, scale: 1.25 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-center px-4 pt-4 sm:pt-8 pb-8 sm:pb-12"
      >
        <p className="font-display italic text-2xl sm:text-4xl lg:text-[46px] text-[#5F250F]">
          {t(weddingData.meetCouple.kickerGu, weddingData.meetCouple.kickerEn)}
        </p>
        <h2
          className={`mt-1 text-[#5F250F] tracking-tight leading-none ${
            lang === 'gu'
              ? 'font-gujarati font-bold text-4xl sm:text-6xl lg:text-[88px]'
              : 'font-display font-medium text-[34px] sm:text-6xl lg:text-[106px]'
          }`}
        >
          {t(weddingData.meetCouple.headingGu, weddingData.meetCouple.headingEn)}
        </h2>
      </motion.div>

      {/* Huge Gold-Outlined Scalloped Arch Story Frame */}
      <div className="px-4 sm:px-8 max-w-[780px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#FFF4EA] border-2 border-[#DDA45D] rounded-[48px] sm:rounded-[84px] px-6 sm:px-14 py-10 sm:py-14 text-center shadow-[0_14px_40px_rgba(95,37,15,0.06)]"
        >
          <div className="absolute inset-2.5 sm:inset-3.5 rounded-[40px] sm:rounded-[74px] border border-[#DDA45D]/55 pointer-events-none" />

          {/* Top Pink Lotus & Star */}
          <div className="relative z-10 flex flex-col items-center mb-6">
            <PinkLotusSvg className="w-14 h-10 mb-2" />
            <div className="flex items-center gap-3 w-48">
              <div className="h-[1px] flex-1 bg-[#DDA45D]/60" />
              <FourPointStarSvg className="w-3.5 h-3.5" />
              <div className="h-[1px] flex-1 bg-[#DDA45D]/60" />
            </div>
          </div>

          {/* Story Message with Scroll Word Highlight */}
          <p
            ref={storyRef}
            className={`relative z-10 leading-[1.45] max-w-[580px] mx-auto ${
              lang === 'gu'
                ? 'font-gujarati text-lg sm:text-2xl lg:text-[26px]'
                : 'font-sans font-normal text-lg sm:text-2xl lg:text-[29px]'
            }`}
          >
            {words.map((w, idx) => (
              <span key={idx} className="story-word inline-block mr-1.5 sm:mr-2 transition-colors duration-300">
                {w}
              </span>
            ))}
          </p>

          {/* Bottom Dual-Star + Downward Sunburst Ornament */}
          <div className="relative z-10 mt-8 flex flex-col items-center">
            <div className="flex items-center justify-center gap-8 mb-1">
              <FourPointStarSvg className="w-3.5 h-3.5" />
              <FourPointStarSvg className="w-3.5 h-3.5" />
            </div>
            <SunburstDividerSvg className="w-52 h-12" direction="down" />
          </div>
        </motion.div>
      </div>

      {/* "Almost time to celebrate" + Continuous 360° Orbiting Photo Wheel */}
      <div className="relative mt-12 sm:mt-20 h-[255px] sm:h-[370px] lg:h-[460px] w-full overflow-hidden">
        {/* Responsive scaling wrapper tuned for Poco M4 Pro (393px) -> Desktop (1440px) */}
        <div className="absolute left-1/2 top-[44px] sm:top-[75px] lg:top-[105px] -translate-x-1/2 scale-[0.43] sm:scale-[0.76] lg:scale-100 origin-top pointer-events-none">
          {/* Continuously rotating 900x900 circular wheel */}
          <div
            className="photo-wheel-orbit relative"
            style={{ width: `${WHEEL_DIAMETER}px`, height: `${WHEEL_DIAMETER}px` }}
          >
            {WHEEL_SLOTS.map((angle, idx) => {
              const rad = (angle * Math.PI) / 180;
              const center = WHEEL_RADIUS;
              const left = center + Math.sin(rad) * WHEEL_RADIUS - CARD_SIZE / 2;
              const top = center - Math.cos(rad) * WHEEL_RADIUS - CARD_SIZE / 2;
              const galleryIdx = GALLERY_SLOT_INDEXES[idx] % weddingData.assets.gallery.length;
              const src = weddingData.assets.gallery[galleryIdx];

              return (
                <div
                  key={idx}
                  className="absolute rounded-2xl overflow-hidden shadow-[0_12px_30px_rgba(95,37,15,0.2)] bg-[#FAF3E8]"
                  style={{
                    width: `${CARD_SIZE}px`,
                    height: `${CARD_SIZE}px`,
                    left: `${left}px`,
                    top: `${top}px`,
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: 'center center',
                  }}
                >
                  <img
                    src={src}
                    alt={`Rajnesh and Kinjal memory ${galleryIdx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft bottom cream fade so bottom cards blend smoothly */}
        <div className="absolute inset-x-0 bottom-0 h-10 sm:h-14 bg-gradient-to-t from-[#FFF4EA] to-transparent z-10 pointer-events-none" />

        {/* Centered "Almost time to celebrate" inside the arch */}
        <div className="relative z-20 h-full flex items-center justify-center pt-20 sm:pt-28 lg:pt-32 px-4 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75 }}
            className={`text-[#5F250F] leading-[1.1] max-w-[260px] sm:max-w-[360px] ${
              lang === 'gu'
                ? 'font-gujarati font-bold text-xl sm:text-3xl lg:text-[42px]'
                : 'font-display font-medium text-2xl sm:text-4xl lg:text-[52px]'
            }`}
          >
            {t(weddingData.meetCouple.almostTimeGu, weddingData.meetCouple.almostTimeEn)}
          </motion.h3>
        </div>
      </div>

      {/* Full-Width Gold-Bordered Couple Celebration Photo */}
      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85 }}
        className="max-w-[1060px] mx-auto px-4 sm:px-8 mt-4"
      >
        <div className="rounded-2xl sm:rounded-3xl border-2 border-[#DDA45D] p-1.5 sm:p-2 bg-[#FFF4EA] shadow-[0_18px_50px_rgba(95,37,15,0.12)]">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] bg-[#F7E8D4]">
            <img
              src={coupleSrc}
              alt="Rajnesh and Kinjal wedding celebration"
              loading="lazy"
              onError={() => setCoupleSrc(weddingData.assets.coupleFallback)}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MeetCoupleSection;
