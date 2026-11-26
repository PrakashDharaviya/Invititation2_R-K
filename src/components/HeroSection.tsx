import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import weddingData from '@/data/wedding';
import {
  BrassBellSvg,
  FlockingBirdsSvg,
} from '@/components/svg/TempleOrnaments';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const [scrolling, setScrolling] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const templeWrapRef = useRef<HTMLDivElement>(null);
  const titleWrapRef = useRef<HTMLDivElement>(null);

  // Bells swing harder while user scrolls (matching reference)
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      setScrolling(true);
      clearTimeout(timer);
      timer = setTimeout(() => setScrolling(false), 350);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
  }, []);

  // GSAP ScrollTrigger parallax on temple & names
  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (templeWrapRef.current) {
        gsap.to(templeWrapRef.current, {
          y: 26,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
      if (titleWrapRef.current) {
        gsap.to(titleWrapRef.current, {
          y: 60,
          opacity: 0.45,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const leftBells = [
    { chain: 74, dur: '3.2s', delay: '0s', mobileShow: true },
    { chain: 112, dur: '3.8s', delay: '0.45s', mobileShow: true },
    { chain: 60, dur: '2.9s', delay: '0.9s', mobileShow: false },
  ];

  const rightBells = [
    { chain: 60, dur: '3.1s', delay: '0.6s', mobileShow: false },
    { chain: 112, dur: '3.6s', delay: '0.25s', mobileShow: true },
    { chain: 74, dur: '3.4s', delay: '0.8s', mobileShow: true },
  ];

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F6E6D0 0%, #FBEFE4 44%, #FFF4EA 100%)',
      }}
    >
      {/* Top-Left Floral Toran Corner Panel + Swinging Brass Bells (radial edge mask blends cleanly with sky) */}
      <div className="absolute top-0 left-0 w-[142px] sm:w-[240px] lg:w-[320px] pointer-events-none z-30">
        <div
          className="relative w-full aspect-[3/2] overflow-hidden"
          style={{
            maskImage: 'radial-gradient(ellipse 88% 85% at 15% 15%, black 46%, transparent 86%)',
            WebkitMaskImage: 'radial-gradient(ellipse 88% 85% at 15% 15%, black 46%, transparent 86%)',
          }}
        >
          <img
            src={weddingData.assets.floralCornerScene}
            alt="Floral corner garland"
            className="w-full h-full object-cover object-left-top mix-blend-multiply brightness-[1.04] contrast-[1.06] select-none"
          />
        </div>
        <div className="flex items-start gap-2 sm:gap-5 pl-2 sm:pl-6 -mt-8 sm:-mt-16">
          {leftBells.map((b, i) => (
            <div
              key={i}
              className={`${b.mobileShow ? 'block' : 'hidden md:block'} pendulum-bell ${
                scrolling ? 'pendulum-bell-active' : ''
              }`}
              style={{ animationDuration: b.dur, animationDelay: b.delay }}
            >
              <BrassBellSvg className="w-6 sm:w-9 lg:w-10 h-auto" chainHeight={b.chain} />
            </div>
          ))}
        </div>
      </div>

      {/* Top-Right Floral Toran Corner Panel + Swinging Brass Bells */}
      <div className="absolute top-0 right-0 w-[142px] sm:w-[240px] lg:w-[320px] pointer-events-none z-30">
        <div
          className="relative w-full aspect-[3/2] overflow-hidden"
          style={{
            maskImage: 'radial-gradient(ellipse 88% 85% at 85% 15%, black 46%, transparent 86%)',
            WebkitMaskImage: 'radial-gradient(ellipse 88% 85% at 85% 15%, black 46%, transparent 86%)',
          }}
        >
          <img
            src={weddingData.assets.floralCornerScene}
            alt="Floral corner garland"
            className="w-full h-full object-cover object-left-top mix-blend-multiply brightness-[1.04] contrast-[1.06] scale-x-[-1] select-none"
          />
        </div>
        <div className="flex items-start justify-end gap-2 sm:gap-5 pr-2 sm:pr-6 -mt-8 sm:-mt-16">
          {rightBells.map((b, i) => (
            <div
              key={i}
              className={`${b.mobileShow ? 'block' : 'hidden md:block'} pendulum-bell ${
                scrolling ? 'pendulum-bell-active' : ''
              }`}
              style={{ animationDuration: b.dur, animationDelay: b.delay }}
            >
              <BrassBellSvg className="w-6 sm:w-9 lg:w-10 h-auto" chainHeight={b.chain} />
            </div>
          ))}
        </div>
      </div>

      {/* Top Invocation — Safe below floral corner gap on 393px Poco M4 Pro, centered on desktop */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-20 pt-24 sm:pt-7 px-5 sm:px-40 text-center"
      >
        <p
          className={`text-[10.5px] sm:text-xs lg:text-sm text-[#5F250F]/80 tracking-wide ${
            lang === 'gu' ? 'font-gujarati' : 'font-sans font-medium'
          }`}
        >
          {t(weddingData.hero.invocationGu, weddingData.hero.invocationEn)}
        </p>
      </motion.div>

      {/* Hero Center Names — Language-Matched (English: Rajnesh weds Kinjal | Gujarati: ચિ. રજનેશ સંગ ચિ. કિંજલ) */}
      <div
        ref={titleWrapRef}
        className="relative z-20 flex flex-col items-center text-center px-4 pt-3 sm:pt-8 pb-2"
      >
        {lang === 'en' ? (
          <>
            <motion.h1
              key="en-groom"
              initial={{ opacity: 0, y: 34, rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-heroName text-[56px] sm:text-[90px] lg:text-[128px] leading-[0.88] text-[#AB5626]/85 tracking-tight select-none"
            >
              {weddingData.hero.groomEn}
            </motion.h1>

            <motion.span
              key="en-weds"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="font-script text-[40px] sm:text-[66px] lg:text-[90px] leading-[0.75] text-[#AB5626]/90 -my-1 sm:-my-2.5 z-10 select-none"
            >
              {weddingData.hero.wedsEn}
            </motion.span>

            <motion.h2
              key="en-bride"
              initial={{ opacity: 0, y: 34, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1.0, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="font-heroName text-[56px] sm:text-[90px] lg:text-[128px] leading-[0.88] text-[#AB5626]/85 tracking-tight select-none"
            >
              {weddingData.hero.brideEn}
            </motion.h2>

            <motion.p
              key="en-date"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.65 }}
              className="font-sans text-xs sm:text-sm uppercase tracking-[0.22em] text-[#5F250F]/75 mt-3 sm:mt-4"
            >
              {weddingData.hero.dateDisplayEn}
            </motion.p>
          </>
        ) : (
          <>
            <motion.h1
              key="gu-groom"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-gujarati font-bold text-[42px] sm:text-[72px] lg:text-[96px] leading-[1.08] text-[#AB5626]/90 select-none"
            >
              {weddingData.hero.groomGu}
            </motion.h1>

            <motion.span
              key="gu-weds"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="block w-full text-center font-gujarati not-italic font-semibold text-[24px] sm:text-[36px] lg:text-[44px] leading-[1.25] text-[#5F250F]/85 mt-0.5 mb-4 sm:mt-0.5 sm:mb-[26px] lg:mt-0.5 lg:mb-9 select-none"
            >
              {weddingData.hero.wedsGu}
            </motion.span>

            <motion.h2
              key="gu-bride"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="font-gujarati font-bold text-[42px] sm:text-[72px] lg:text-[96px] leading-[1.08] text-[#AB5626]/90 select-none"
            >
              {weddingData.hero.brideGu}
            </motion.h2>

            <motion.p
              key="gu-sub"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.65 }}
              className="font-gujarati text-xs sm:text-sm lg:text-base font-semibold text-[#5F250F]/80 mt-2.5 sm:mt-3 tracking-wide"
            >
              {weddingData.hero.dateDisplayGu}
            </motion.p>
          </>
        )}
      </div>

      {/* Flocking Birds in upper sky */}
      <div className="relative z-10 flex justify-center -mb-6 pointer-events-none birds-drift">
        <FlockingBirdsSvg className="w-40 sm:w-64 h-12 opacity-65" />
      </div>

      {/* Grand Painterly Temple Landscape */}
      <div ref={templeWrapRef} className="relative w-full z-10 -mt-2 sm:-mt-6">
        <div className="absolute inset-x-0 top-0 h-14 sm:h-24 bg-gradient-to-b from-[#FBEFE4] to-transparent z-10 pointer-events-none" />

        <img
          src={weddingData.assets.heroScene}
          alt="Temple wedding entrance"
          className="w-full h-[290px] sm:h-auto max-h-[660px] object-cover object-top block select-none"
        />

        <div className="absolute inset-x-0 bottom-0 h-14 sm:h-24 bg-gradient-to-t from-[#FFF4EA] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default HeroSection;
