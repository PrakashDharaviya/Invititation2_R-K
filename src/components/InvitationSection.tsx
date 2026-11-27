import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import weddingData from '@/data/wedding';

gsap.registerPlugin(ScrollTrigger);

/**
 * Positioned directly inside the cream #FFEFE2 arched doorway of Framer's temple illustration:
 * - Mobile (temple-mobile.webp): arch interior is x=14%..86%, y=40%..95%
 * - Desktop (temple-desktop.webp): arch interior is x=14%..86%, y=46%..90%
 */
const InvitationSection: React.FC = () => {
  const { lang } = useLanguage();
  const linesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!linesRef.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = linesRef.current.querySelectorAll('.invite-line');

    if (prefersReduced) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(items, { opacity: 0, y: 20 });

    const ctx = gsap.context(() => {
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.72,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: linesRef.current,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      });
    }, linesRef);

    return () => ctx.revert();
  }, [lang]);

  const en = weddingData.invitation.en;
  const gu = weddingData.invitation.gu;

  return (
    <div
      id="invitation"
      className="absolute inset-x-0 top-[44.5%] bottom-[6%] md:top-[48%] md:bottom-[10%] z-20 flex flex-col items-center justify-evenly px-[14%] min-[375px]:px-[16%] md:px-[18%] py-2 text-center pointer-events-auto"
    >
      <div
        ref={linesRef}
        className="w-full h-full max-w-[820px] mx-auto flex flex-col items-center justify-evenly"
      >
        {/* Framer Official Ganesha Invocation Graphic + Original Ganesh Ji Line Icon + Sanskrit Shloka */}
        <div className="invite-line flex flex-col items-center">
          <img
            src={weddingData.framer.ganpatiName}
            alt="Shree Ganeshay Namah"
            className="w-[74px] min-[375px]:w-[86px] sm:w-[135px] lg:w-[180px] h-auto mb-1 sm:mb-2 select-none"
          />
          <img
            src={weddingData.framer.ganpatiIcon}
            alt="Lord Ganesha"
            className="w-[40px] min-[375px]:w-[46px] sm:w-[68px] lg:w-[82px] h-auto mb-1 sm:mb-2 select-none"
          />
          <img
            src={weddingData.framer.shriShloka}
            alt="Vakratunda Mahakaya Shloka"
            className="w-[150px] min-[375px]:w-[172px] sm:w-[240px] lg:w-[290px] h-auto select-none"
          />
        </div>

        {lang === 'en' ? (
          <div className="w-full flex flex-col items-center">
            <p className="invite-line font-gotham font-medium text-[9.5px] min-[375px]:text-[11px] sm:text-base lg:text-[25px] leading-snug text-[#AB5626] max-w-[94%] mb-1.5 min-[375px]:mb-2 sm:mb-3.5">
              {en.groomParents}
            </p>

            <p className="invite-line font-ivyora text-[11px] min-[375px]:text-[12.5px] sm:text-lg lg:text-[26px] leading-snug text-[#5F250F] whitespace-pre-line max-w-[94%] mb-2 min-[375px]:mb-3 sm:mb-4">
              {en.requestLine}
            </p>

            <p className="invite-line font-miofarin text-[40px] min-[375px]:text-[48px] sm:text-[90px] lg:text-[138px] leading-[1.02] text-[#AB5626]/75 select-none">
              {en.groomName}
            </p>

            <p className="invite-line font-signature text-[30px] min-[375px]:text-[36px] sm:text-[74px] lg:text-[116px] leading-[0.95] text-[#AB5626]/75 my-0.5 min-[375px]:my-1 sm:my-1.5 select-none">
              {en.ampersand}
            </p>

            <p className="invite-line font-miofarin text-[40px] min-[375px]:text-[48px] sm:text-[90px] lg:text-[138px] leading-[1.02] text-[#AB5626]/75 select-none">
              {en.brideName}
            </p>

            <p className="invite-line font-ivyora text-[9.5px] min-[375px]:text-[11px] sm:text-base lg:text-[22px] text-[#5F250F] mt-2 min-[375px]:mt-2.5 sm:mt-4">
              {en.daughterOfLabel}
            </p>

            <p className="invite-line font-gotham font-medium text-[9.5px] min-[375px]:text-[11px] sm:text-base lg:text-[25px] leading-snug text-[#AB5626] max-w-[94%] mt-0.5 sm:mt-1.5">
              {en.brideParents}
            </p>

            <p className="invite-line font-ivyora font-medium text-[14px] min-[375px]:text-[16px] sm:text-2xl lg:text-[36px] text-[#5F250F] mt-2.5 min-[375px]:mt-3.5 sm:mt-6">
              {en.eventsIntro}
            </p>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center space-y-1 min-[375px]:space-y-1.5 sm:space-y-3 lg:space-y-4">
            <p className="invite-line font-gujarati text-[9.5px] min-[375px]:text-[10.5px] sm:text-sm lg:text-lg text-[#5F250F]/90 leading-relaxed max-w-[95%]">
              {gu.opening}
            </p>

            <p className="invite-line font-gujarati font-semibold text-[10.5px] min-[375px]:text-[11.5px] sm:text-base lg:text-2xl text-[#AB5626] leading-snug max-w-[95%]">
              {gu.groomParents}
            </p>

            <p className="invite-line font-gujarati font-bold text-[24px] min-[375px]:text-[28px] sm:text-5xl lg:text-[72px] text-[#5F250F] leading-tight py-0.5">
              {gu.groomName}
            </p>

            <p className="invite-line font-gujarati font-semibold text-[10.5px] min-[375px]:text-[11.5px] sm:text-sm lg:text-xl text-[#AB5626]">
              {gu.middleConnector}
            </p>

            <p className="invite-line font-gujarati font-semibold text-[10.5px] min-[375px]:text-[11.5px] sm:text-base lg:text-2xl text-[#AB5626] leading-snug max-w-[95%]">
              {gu.brideParents}
            </p>

            <p className="invite-line font-gujarati font-bold text-[24px] min-[375px]:text-[28px] sm:text-5xl lg:text-[72px] text-[#5F250F] leading-tight py-0.5">
              {gu.brideName}
            </p>

            <p className="invite-line font-gujarati font-semibold text-[9.5px] min-[375px]:text-[10.5px] sm:text-sm lg:text-xl text-[#5F250F] leading-snug max-w-[94%]">
              {gu.dateLine}
            </p>

            <p className="invite-line font-gujarati text-[8.5px] min-[375px]:text-[9.5px] sm:text-xs lg:text-base text-[#5F250F]/80 leading-relaxed max-w-[94%]">
              {gu.blessing}
            </p>

            <p className="invite-line font-gujarati font-bold text-[11.5px] min-[375px]:text-[13px] sm:text-lg lg:text-2xl text-[#5F250F] pt-0.5 min-[375px]:pt-1 sm:pt-3">
              {gu.eventsIntro}
            </p>
          </div>
        )}

        {/* Framer Scroll Down Arrow */}
        <a
          href="#timeline"
          aria-label="Scroll to Wedding Timeline"
          className="invite-line mt-2 sm:mt-4 inline-flex items-center justify-center text-[#5F250F]/75 hover:text-[#AB5626] transition-colors scroll-arrow-pulse"
        >
          <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default InvitationSection;
