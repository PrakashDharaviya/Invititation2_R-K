import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import weddingData from '@/data/wedding';

gsap.registerPlugin(ScrollTrigger);

const TimelineSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const events = weddingData.timeline.events;
  const sectionRef = useRef<HTMLElement>(null);
  const pillarRef = useRef<HTMLDivElement>(null);
  const peacockRef = useRef<HTMLDivElement>(null);

  // Multi-plane 2.5D ScrollTrigger parallax matching Framer's layered architecture
  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (pillarRef.current) {
        gsap.fromTo(
          pillarRef.current,
          { y: -12 },
          {
            y: 22,
            ease: 'none',
            scrollTrigger: {
              trigger: pillarRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      }

      if (peacockRef.current) {
        gsap.fromTo(
          peacockRef.current,
          { y: 18 },
          {
            y: -16,
            ease: 'none',
            scrollTrigger: {
              trigger: peacockRef.current,
              start: 'top bottom',
              end: '55% top',
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="relative z-10 w-full max-w-[1515px] mx-auto -mt-[13%] md:-mt-[9.5%] bg-transparent overflow-x-clip"
    >
      {/* Top Pillar Backdrop Transition from Temple Entryway */}
      <div ref={pillarRef} className="relative w-full pointer-events-none select-none z-10">
        <img
          src={weddingData.framer.pillarBackdropMobile}
          alt=""
          loading="lazy"
          className="md:hidden w-full h-auto block"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 56%, transparent 96%)',
            maskImage: 'linear-gradient(to bottom, black 56%, transparent 96%)',
          }}
        />
        <img
          src={weddingData.framer.pillarBackdropDesktop}
          alt=""
          loading="lazy"
          className="hidden md:block w-full h-auto block"
        />
      </div>

      {/* Peacock Garden & Sandstone Courtyard (overlaps Pillar lower foliage cleanly with no upper beige slice) */}
      <div className="relative z-20 w-full -mt-[63%] md:-mt-[40.5%] overflow-hidden">
        {/* Courtyard Warm Sandstone Backdrop starting strictly BELOW the foliage/bridge overlap */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[30%] md:top-[22%] bottom-0 bg-gradient-to-b from-[#E5C28E]/0 via-[#E5C28E] via-15% to-[#FFEFE2] pointer-events-none"
        />

        {/* Peacock Terrace Artwork pinned cleanly on top of Pillar foliage with soft parallax */}
        <div
          ref={peacockRef}
          className="absolute inset-x-0 top-0 w-full pointer-events-none select-none z-10"
        >
          <img
            src={weddingData.framer.peacockBackdropMobile}
            alt="Peacock Garden Courtyard"
            loading="lazy"
            className="md:hidden w-full h-auto block"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)',
            }}
          />
          <img
            src={weddingData.framer.peacockBackdropDesktop}
            alt="Peacock Garden Courtyard"
            loading="lazy"
            className="hidden md:block w-full h-auto block"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)',
            }}
          />
        </div>

        {/* Flow Content Positioned Cleanly Below the Peacock Archway (145% of w mobile / 76% of w desktop) */}
        <div className="relative z-20 pt-[145%] md:pt-[76%] pb-14 sm:pb-20 lg:pb-28 px-3 sm:px-6 lg:px-8">
          {/* Side Starburst Rays on Mobile (matching Framer Pillar Ornament L1-L3 / R1-R3) */}
          <img
            src={weddingData.framer.raysLeft1}
            alt=""
            aria-hidden="true"
            className="md:hidden absolute left-0 top-[46%] w-[52px] opacity-90 pointer-events-none select-none"
          />
          <img
            src={weddingData.framer.raysLeft3}
            alt=""
            aria-hidden="true"
            className="md:hidden absolute left-0 top-[76%] w-[52px] opacity-90 pointer-events-none select-none"
          />
          <img
            src={weddingData.framer.raysRight}
            alt=""
            aria-hidden="true"
            className="md:hidden absolute right-0 top-[60%] w-[52px] opacity-90 pointer-events-none select-none"
          />

          {/* Section Heading ("Wedding Celebration Timeline" + Subtext) */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 1.06, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-[920px] mx-auto mb-6 sm:mb-10 lg:mb-12"
          >
            <h2
              className={`text-[#5F250F] leading-[1.06] ${
                lang === 'gu'
                  ? 'font-gujarati font-bold text-[28px] sm:text-5xl lg:text-[68px]'
                  : 'font-ivyora font-medium text-[28px] sm:text-5xl lg:text-[78px]'
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
              className={`mt-2 sm:mt-3 text-[12px] sm:text-base lg:text-[22px] text-[#5F250F] ${
                lang === 'gu' ? 'font-gujarati' : 'font-gotham font-light'
              }`}
            >
              {t(weddingData.timeline.subtextGu, weddingData.timeline.subtextEn)}
            </p>
          </motion.div>

          {/* Peacock Pink Lotus Accent (Desktop above cards) */}
          <div className="hidden lg:flex justify-center -mt-2 mb-5 pointer-events-none select-none">
            <img
              src={weddingData.framer.peacockLotus}
              alt=""
              aria-hidden="true"
              className="w-[210px] h-auto"
            />
          </div>

          {/* ================= CARDS GRID ================= */}
          <div className="relative max-w-[400px] sm:max-w-[740px] lg:max-w-[1410px] mx-auto">
            {/* Desktop Scalloped Mandalas Above Card Gaps (1 up .. 5 up) */}
            <div className="hidden lg:flex justify-between px-[11.5%] -mb-8 pointer-events-none select-none">
              {[0, 1, 2, 3, 4].map((i) => (
                <img
                  key={`up-${i}`}
                  src={weddingData.framer.mandalaScalloped}
                  alt=""
                  aria-hidden="true"
                  className="w-[104px] h-[104px] mandala-spin opacity-90"
                />
              ))}
            </div>

            {/* Mobile Scalloped Mandalas between card rows */}
            <img
              src={weddingData.framer.mandalaScalloped}
              alt=""
              aria-hidden="true"
              className="lg:hidden absolute left-1/2 -translate-x-1/2 top-[29%] w-[110px] h-[110px] mandala-spin opacity-85 pointer-events-none z-0"
            />
            <img
              src={weddingData.framer.mandalaScalloped}
              alt=""
              aria-hidden="true"
              className="lg:hidden absolute left-1/2 -translate-x-1/2 top-[63%] w-[110px] h-[110px] mandala-spin opacity-85 pointer-events-none z-0"
            />

            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-6 gap-x-2 min-[375px]:gap-x-3 gap-y-4 min-[375px]:gap-y-5 lg:gap-4 items-start">
              {events.map((ev, idx) => (
                <motion.div
                  key={ev.id}
                  initial={{
                    opacity: 0,
                    y: 40,
                    rotate: idx % 2 === 0 ? -4 : 4,
                  }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.7, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`relative w-full aspect-[1515/2342] ${
                    idx === 4 ? 'lg:translate-y-4' : ''
                  }`}
                >
                  {/* Original Framer Scalloped Arch Event Frame PNG */}
                  <img
                    src={weddingData.framer.cardFrame}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-contain block select-none pointer-events-none drop-shadow-[0_10px_22px_rgba(95,37,15,0.12)]"
                  />

                  {/* Event Details Positioned Strictly Inside Cream Arch Zone */}
                  <div className="absolute top-[13%] bottom-[34%] inset-x-[10%] min-[375px]:inset-x-[12%] flex flex-col items-center justify-between text-center py-0.5 min-[375px]:py-1">
                    <div>
                      <h3
                        className={`font-medium text-[#5F250F] leading-tight ${
                          lang === 'gu'
                            ? 'font-gujarati font-bold text-[12px] min-[375px]:text-[14px] sm:text-[17px]'
                            : 'font-ivyora text-[13px] min-[375px]:text-[15px] sm:text-[18px] lg:text-[17px]'
                        }`}
                      >
                        {t(ev.titleGu, ev.titleEn)}
                      </h3>
                    </div>

                    <div
                      className={`space-y-0.5 text-[8.5px] min-[375px]:text-[9.5px] sm:text-[11px] lg:text-[11px] text-[#5F250F] leading-[1.24] ${
                        lang === 'gu' ? 'font-gujarati' : 'font-gotham font-light'
                      }`}
                    >
                      <p>{t(ev.dayGu, ev.dayEn)}</p>
                      <p className="font-normal">{t(ev.dateGu, ev.dateEn)}</p>
                      <p className="opacity-90">{t(ev.placeGu, ev.placeEn)}</p>
                      <p className="font-medium text-[#AB5626] pt-0.5">
                        {t(ev.timeGu, ev.timeEn)}
                      </p>
                    </div>

                    <a
                      href="#venue"
                      className={`text-[8px] min-[375px]:text-[8.5px] sm:text-[10px] text-[#5F250F]/80 hover:text-[#AB5626] underline underline-offset-2 ${
                        lang === 'gu' ? 'font-gujarati' : 'font-gotham font-light'
                      }`}
                    >
                      {t(weddingData.timeline.moreDetailsGu, weddingData.timeline.moreDetailsEn)}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop Scalloped Mandalas Below Card Gaps (1 down .. 5 down) */}
            <div className="hidden lg:flex justify-between px-[11.5%] -mt-12 pointer-events-none select-none">
              {[0, 1, 2, 3, 4].map((i) => (
                <img
                  key={`down-${i}`}
                  src={weddingData.framer.mandalaScalloped}
                  alt=""
                  aria-hidden="true"
                  className="w-[104px] h-[104px] mandala-spin opacity-90"
                />
              ))}
            </div>

            {/* Mobile Bottom Pink Lotus Accent */}
            <div className="lg:hidden flex justify-center mt-5 pointer-events-none select-none">
              <img
                src={weddingData.framer.peacockLotus}
                alt=""
                aria-hidden="true"
                className="w-[140px] h-auto"
              />
            </div>
          </div>
        </div>

        {/* Soft bottom sandstone -> cream blend into Floral Mandap Section */}
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-40 bg-gradient-to-t from-[#FFEFE2] via-[#FFEFE2]/80 to-transparent pointer-events-none z-20" />
      </div>
    </section>
  );
};

export default TimelineSection;
