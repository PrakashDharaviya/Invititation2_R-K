import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import weddingData from '@/data/wedding';
import { StylizedGaneshSvg, FourPointStarSvg } from '@/components/svg/TempleOrnaments';

gsap.registerPlugin(ScrollTrigger);

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

    gsap.set(items, { opacity: 0, y: 24 });

    const ctx = gsap.context(() => {
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: linesRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, linesRef);

    return () => ctx.revert();
  }, [lang]);

  const en = weddingData.invitation.en;
  const gu = weddingData.invitation.gu;

  return (
    <section
      id="invitation"
      className="relative w-full bg-[#FFF4EA] pt-2 pb-0 overflow-hidden"
    >
      {/* Wide Scalloped Gold-Bordered Cream Arch (Seamless from Hero Carpet) */}
      <div className="relative z-20 max-w-[920px] mx-auto px-4 sm:px-8">
        <div className="relative bg-[#FFF4EA] border-2 border-[#DDA45D] rounded-t-[160px] sm:rounded-t-[320px] rounded-b-3xl px-5 sm:px-14 pt-12 sm:pt-16 pb-12 sm:pb-16 shadow-[0_12px_40px_rgba(95,37,15,0.06)]">
          {/* Inner double border */}
          <div className="absolute inset-2 sm:inset-3 rounded-t-[150px] sm:rounded-t-[308px] rounded-b-2xl border border-[#DDA45D]/55 pointer-events-none" />

          {/* Corner stars */}
          <FourPointStarSvg className="w-3.5 h-3.5 absolute bottom-5 left-5 pointer-events-none" />
          <FourPointStarSvg className="w-3.5 h-3.5 absolute bottom-5 right-5 pointer-events-none" />

          <div ref={linesRef} className="relative z-10 text-center max-w-[660px] mx-auto">
            {/* Ganesh Shloka & Stylized Emblem */}
            <p className="invite-line font-gujarati text-xs sm:text-sm font-semibold text-[#5F250F] tracking-wide mb-3">
              {weddingData.invitation.shlokaLine}
            </p>
            <div className="invite-line flex justify-center mb-5">
              <StylizedGaneshSvg className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>

            {lang === 'en' ? (
              <div className="space-y-3 sm:space-y-4">
                <p className="invite-line font-display text-lg sm:text-2xl lg:text-[30px] font-semibold text-[#AB5626] leading-snug">
                  {en.groomParents}
                </p>
                <p className="invite-line font-sans text-xs sm:text-sm lg:text-base text-[#5F250F]/85 leading-relaxed max-w-[480px] mx-auto">
                  {en.requestLine}
                </p>

                <div className="py-2 sm:py-3">
                  <p className="invite-line font-heroName text-4xl sm:text-6xl lg:text-[68px] text-[#AB5626] leading-none">
                    {en.groomName}
                  </p>
                  <p className="invite-line font-script text-3xl sm:text-4xl lg:text-5xl text-[#AB5626]/80 my-1">
                    {en.ampersand}
                  </p>
                  <p className="invite-line font-heroName text-4xl sm:text-6xl lg:text-[68px] text-[#AB5626] leading-none">
                    {en.brideName}
                  </p>
                </div>

                <p className="invite-line font-sans text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#5F250F]/70 pt-1">
                  {en.daughterOfLabel}
                </p>
                <p className="invite-line font-display text-lg sm:text-2xl lg:text-[28px] font-semibold text-[#AB5626] leading-snug">
                  {en.brideParents}
                </p>

                <div className="invite-line pt-5">
                  <p className="font-sans text-xs sm:text-sm text-[#5F250F]/80 tracking-wide">
                    {en.eventsIntro}
                  </p>
                  <span className="inline-block text-[#5F250F] text-lg mt-1">↓</span>
                </div>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-3.5">
                <p className="invite-line font-gujarati text-sm sm:text-base lg:text-lg text-[#5F250F]/90 leading-relaxed max-w-[540px] mx-auto">
                  {gu.opening}
                </p>
                <p className="invite-line font-gujarati text-base sm:text-xl lg:text-[22px] font-semibold text-[#AB5626] leading-relaxed pt-1">
                  {gu.groomParents}
                </p>
                <p className="invite-line font-gujarati text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5F250F] py-1">
                  {gu.groomName}
                </p>
                <p className="invite-line font-gujarati text-sm sm:text-base font-semibold text-[#AB5626]">
                  {gu.middleConnector}
                </p>
                <p className="invite-line font-gujarati text-base sm:text-xl lg:text-[22px] font-semibold text-[#AB5626] leading-relaxed">
                  {gu.brideParents}
                </p>
                <p className="invite-line font-gujarati text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5F250F] py-1">
                  {gu.brideName}
                </p>
                <p className="invite-line font-gujarati text-sm sm:text-base lg:text-lg font-semibold text-[#5F250F]">
                  {gu.dateLine}
                </p>
                <p className="invite-line font-gujarati text-xs sm:text-sm lg:text-base text-[#5F250F]/85 leading-relaxed max-w-[540px] mx-auto pt-2">
                  {gu.blessing}
                </p>
                <div className="invite-line pt-4">
                  <p className="font-gujarati text-xs sm:text-sm font-semibold text-[#AB5626]">
                    {gu.eventsIntro}
                  </p>
                  <span className="inline-block text-[#5F250F] text-lg mt-0.5">↓</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scenic Chhatri Domes, Facing Peacocks Balustrade & Garden Stairs -> Sand Courtyard */}
      <div className="relative w-full -mt-6 sm:-mt-10 z-10 pointer-events-none select-none">
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FFF4EA] to-transparent z-10" />
        <img
          src={weddingData.assets.chhatriPeacocksScene}
          alt="Temple chhatri and peacock balustrade"
          loading="lazy"
          className="w-full h-auto max-h-[620px] object-cover object-center block"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#E5C28E] to-transparent z-10" />
      </div>
    </section>
  );
};

export default InvitationSection;
