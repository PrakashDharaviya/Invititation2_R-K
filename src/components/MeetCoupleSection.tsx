import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import weddingData from '@/data/wedding';

gsap.registerPlugin(ScrollTrigger);

// Scaled circular orbital wheel geometry (fits cleanly inside 1200px container without side or top clipping)
const WHEEL_SLOTS = Array.from({ length: 10 }, (_, i) => i * 36);
const GALLERY_SLOT_INDEXES = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3];
const WHEEL_DIAMETER = 840;
const WHEEL_RADIUS = 420;
const CARD_SIZE = 136;

const MeetCoupleSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const mandapRef = useRef<HTMLDivElement>(null);
  const coupleBannerRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLParagraphElement>(null);

  const storyText = t(weddingData.meetCouple.messageGu, weddingData.meetCouple.messageEn);
  const words = storyText.split(' ');

  // Smooth Framer-style parallax on Mandap pavilion & Couple portrait banner + word scrub
  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wordEls = storyRef.current ? storyRef.current.querySelectorAll('.story-word') : null;

    if (prefersReduced) {
      if (wordEls) gsap.set(wordEls, { color: 'rgb(95, 37, 15)' });
      return;
    }

    if (wordEls) gsap.set(wordEls, { color: 'rgba(95, 37, 15, 0.22)' });

    const ctx = gsap.context(() => {
      if (mandapRef.current) {
        gsap.fromTo(
          mandapRef.current,
          { y: 16 },
          {
            y: -18,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: '45% top',
              scrub: 1.1,
            },
          }
        );
      }

      if (coupleBannerRef.current) {
        gsap.fromTo(
          coupleBannerRef.current,
          { scale: 1.05, y: 14 },
          {
            scale: 1,
            y: -10,
            ease: 'none',
            scrollTrigger: {
              trigger: coupleBannerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.1,
            },
          }
        );
      }

      if (storyRef.current && wordEls) {
        gsap.to(wordEls, {
          color: 'rgb(95, 37, 15)',
          stagger: 0.08,
          duration: 0.3,
          ease: 'none',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 82%',
            end: 'bottom 52%',
            scrub: 0.7,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [lang, storyText]);

  return (
    <section
      ref={sectionRef}
      id="meet-couple"
      className="relative w-full max-w-[1515px] mx-auto bg-[#FFEFE2] overflow-hidden"
    >
      {/* Top Royal Floral Mandap Scene Backdrop pinned cleanly behind header with soft depth glide */}
      <div
        ref={mandapRef}
        className="absolute inset-x-0 top-0 w-full pointer-events-none select-none will-change-transform"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 7%, black 92%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 7%, black 92%, transparent 100%)',
        }}
      >
        <img
          src={weddingData.framer.coupleBackdropMobile}
          alt="Floral Mandap Pavilion"
          loading="lazy"
          className="md:hidden w-full h-auto block"
        />
        <img
          src={weddingData.framer.coupleBackdropDesktop}
          alt="Floral Mandap Pavilion"
          loading="lazy"
          className="hidden md:block w-full h-auto block"
        />
      </div>

      {/* Foreground Stage Positioned Cleanly Below the Floral Mandap (98% mobile / 60% desktop) */}
      <div className="relative z-20 pt-[98%] md:pt-[60%] px-4">
        {/* Heading: "Meet the BRIDE & GROOM" + Flanked Round Mandalas on Desktop */}
        <div className="relative max-w-[1200px] mx-auto pt-4 sm:pt-8 pb-6 sm:pb-12">
          <img
            src={weddingData.framer.mandalaRound}
            alt=""
            aria-hidden="true"
            className="hidden lg:block absolute left-[4%] top-6 w-[250px] h-[250px] opacity-85 mandala-spin pointer-events-none select-none"
          />
          <img
            src={weddingData.framer.mandalaRound}
            alt=""
            aria-hidden="true"
            className="hidden lg:block absolute right-[4%] top-6 w-[250px] h-[250px] opacity-85 mandala-spin pointer-events-none select-none"
          />

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 1.14, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 text-center"
          >
            <p
              className={`text-[#5F250F] leading-tight ${
                lang === 'gu'
                  ? 'font-gujarati font-semibold text-xl sm:text-3xl lg:text-[40px]'
                  : 'font-ivyora font-medium text-2xl sm:text-4xl lg:text-[54px]'
              }`}
            >
              {t(weddingData.meetCouple.kickerGu, weddingData.meetCouple.kickerEn)}
            </p>
            <h2
              className={`mt-1 text-[#5F250F] leading-[0.98] ${
                lang === 'gu'
                  ? 'font-gujarati font-bold text-3xl sm:text-6xl lg:text-[84px]'
                  : 'font-ivyora font-medium text-[34px] sm:text-6xl lg:text-[110px]'
              }`}
            >
              {t(weddingData.meetCouple.headingGu, weddingData.meetCouple.headingEn)}
            </h2>
          </motion.div>
        </div>

        {/* Exact Framer Scalloped Golden Picture Frame ("Message Card Frame") */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-[330px] sm:max-w-[560px] lg:max-w-[804px] mx-auto aspect-[1515/1865]"
        >
          {/* Solid #FFEFE2 backing behind transparent cutout */}
          <div className="absolute inset-[4%] bg-[#FFEFE2] rounded-[40px] sm:rounded-[80px] -z-10" />

          <img
            src={weddingData.framer.messageFrameMobile}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="md:hidden w-full h-full object-contain block select-none pointer-events-none"
          />
          <img
            src={weddingData.framer.messageFrameDesktop}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="hidden md:block w-full h-full object-contain block select-none pointer-events-none"
          />

          {/* Scroll-Highlighted Word-by-Word Paragraph inside the Golden Frame */}
          <div className="absolute inset-x-[13%] top-[16%] bottom-[22%] flex items-center justify-center text-center">
            <p
              ref={storyRef}
              className={`leading-[1.28] ${
                lang === 'gu'
                  ? 'font-gujarati text-[14px] sm:text-xl lg:text-[26px]'
                  : 'font-gotham font-normal text-[14px] sm:text-xl lg:text-[30px]'
              }`}
            >
              {words.map((w, idx) => (
                <span
                  key={idx}
                  className="story-word inline-block mr-1 sm:mr-1.5 lg:mr-2 transition-colors duration-300"
                >
                  {w}
                </span>
              ))}
            </p>
          </div>
        </motion.div>

        {/* "Almost time to celebrate" + Orbiting Circular Photo Wheel with Full-Box Vertical Soft Fade */}
        <div className="relative mt-4 sm:mt-8 h-[310px] sm:h-[420px] lg:h-[520px] w-full overflow-hidden">
          {/* Mask applied directly to the viewport-clipped box so cards dissolve softly before bottom edge */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              WebkitMaskImage:
                'linear-gradient(to bottom, transparent 0%, black 7%, black 56%, transparent 94%)',
              maskImage:
                'linear-gradient(to bottom, transparent 0%, black 7%, black 56%, transparent 94%)',
            }}
          >
            <div className="absolute left-1/2 top-[48px] sm:top-[82px] lg:top-[118px] -translate-x-1/2 scale-[0.34] sm:scale-[0.68] lg:scale-100 origin-top">
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
                      className="absolute rounded-[12px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.16)] bg-[#FAF3E8] border border-[#DDA45D]/35"
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
                        className="w-full h-full object-cover object-[50%_20%]"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Centered "Almost time to celebrate" comfortably inside lower arch of wheel */}
          <div className="relative z-20 h-full flex items-center justify-center pt-28 sm:pt-40 lg:pt-48 px-4 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 26, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className={`text-[#5F250F] leading-[1.1] whitespace-pre-line ${
                lang === 'gu'
                  ? 'font-gujarati font-bold text-xl sm:text-3xl lg:text-[42px]'
                  : 'font-ivyora font-medium text-[22px] sm:text-4xl lg:text-[52px]'
              }`}
            >
              {t(weddingData.meetCouple.almostTimeGu, weddingData.meetCouple.almostTimeEn)}
            </motion.h3>
          </div>
        </div>
      </div>

      {/* Framed Couple Celebration Portrait (proportioned cleanly to fit viewport) */}
      <div className="relative max-w-[1260px] mx-auto border-x border-[#DDA45D]/45 px-4 sm:px-8 py-4 sm:py-8">
        <div className="relative max-w-[330px] sm:max-w-[580px] lg:max-w-[720px] mx-auto rounded-[20px] overflow-hidden border border-[#DDA45D]/45 shadow-[0_14px_38px_rgba(95,37,15,0.14)] bg-[#FFEFE2]">
          <div className="absolute inset-x-0 top-0 h-10 sm:h-14 bg-gradient-to-b from-[#FFEFE2]/35 to-transparent z-10 pointer-events-none" />
          <div ref={coupleBannerRef} className="w-full will-change-transform">
            <img
              src={weddingData.assets.couplePhotoMobile}
              alt="Rajnesh and Kinjal celebration"
              loading="lazy"
              className="md:hidden w-full aspect-[3/2] block object-cover object-[50%_22%]"
            />
            <img
              src={weddingData.assets.couplePhoto}
              alt="Rajnesh and Kinjal celebration"
              loading="lazy"
              className="hidden md:block w-full aspect-[3/2] block object-cover object-[50%_22%]"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-10 sm:h-16 bg-gradient-to-t from-[#FFEFE2]/45 to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default MeetCoupleSection;
