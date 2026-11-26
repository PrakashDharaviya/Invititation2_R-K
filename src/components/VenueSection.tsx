import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import weddingData from '@/data/wedding';
import { FourPointStarSvg } from '@/components/svg/TempleOrnaments';

const VenueSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  const [mapUnlocked, setMapUnlocked] = useState(false);
  const [copied, setCopied] = useState(false);

  const locations = weddingData.venuesSection.locations;
  const current = locations[activeIdx];

  const handleCopyAddress = async () => {
    const fullText = `${t(current.nameGu, current.nameEn)} — ${t(current.addressGu, current.addressEn)}`;
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored if clipboard denied
    }
  };

  return (
    <section
      id="venue"
      className="relative w-full bg-[#FFF4EA] pt-8 sm:pt-12 pb-8 px-3 sm:px-6 overflow-hidden"
    >
      {/* Wide Gold-Bordered Scalloped Cream Arch Frame */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-[1060px] mx-auto bg-[#FFF4EA] border-2 border-[#DDA45D] rounded-[36px] sm:rounded-[56px] p-5 sm:p-10 shadow-[0_12px_40px_rgba(95,37,15,0.06)]"
      >
        <div className="absolute inset-2 rounded-[30px] sm:rounded-[48px] border border-[#DDA45D]/45 pointer-events-none" />
        <FourPointStarSvg className="w-3.5 h-3.5 absolute top-5 left-5 pointer-events-none" />
        <FourPointStarSvg className="w-3.5 h-3.5 absolute top-5 right-5 pointer-events-none" />

        {/* Heading: "Looking forward to see you" */}
        <h2
          className={`relative z-10 text-center text-[#5F250F] mb-6 sm:mb-8 ${
            lang === 'gu'
              ? 'font-gujarati font-bold text-2xl sm:text-4xl lg:text-[42px]'
              : 'font-display font-medium text-2xl sm:text-4xl lg:text-[46px]'
          }`}
        >
          {t(weddingData.venuesSection.headingGu, weddingData.venuesSection.headingEn)}
        </h2>

        {/* 2-Column Split on Desktop (Map left, Golden Venue Card + Pills right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left: Embedded Interactive Map */}
          <div className="lg:col-span-7 relative h-[250px] sm:h-[360px] rounded-2xl overflow-hidden border border-[#DDA45D]/60 bg-[#F7E8D4] shadow-sm">
            <iframe
              key={current.key}
              src={current.mapEmbedUrl}
              title={current.nameEn}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={`w-full h-full border-0 ${mapUnlocked ? 'pointer-events-auto' : 'pointer-events-none'}`}
            />

            {/* Top-right "Nearby Location" pill */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(current.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-white/95 text-[#5F250F] text-[11px] font-sans font-semibold shadow-md hover:bg-white transition-colors"
            >
              {t(weddingData.venuesSection.nearbyLabelGu, weddingData.venuesSection.nearbyLabelEn)}
            </a>

            {/* Center "Tap to interact with map" overlay */}
            {!mapUnlocked && (
              <button
                type="button"
                onClick={() => setMapUnlocked(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/10 cursor-pointer"
                aria-label="Tap to interact with map"
              >
                <span className="px-4 py-2 rounded-full bg-black/65 text-white text-xs font-sans font-semibold shadow-md backdrop-blur-sm">
                  {t(weddingData.venuesSection.tapOverlayGu, weddingData.venuesSection.tapOverlayEn)}
                </span>
              </button>
            )}

            {/* Bottom-right "Open in Google Maps" button */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(current.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#1a1a1a]/90 text-white text-xs font-sans font-semibold shadow-md hover:bg-black transition-colors"
            >
              <span>
                {t(weddingData.venuesSection.openMapsGu, weddingData.venuesSection.openMapsEn)}
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Right: Warm Golden-Tan Venue Card (#E3C28C) + Location Selector Pills */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {/* Golden-tan Venue Info Box */}
            <div className="bg-[#E3C28C] rounded-2xl p-5 sm:p-6 text-left shadow-sm flex items-start justify-between gap-3">
              <div>
                <h3
                  className={`text-lg sm:text-xl font-bold text-[#5F250F] ${
                    lang === 'gu' ? 'font-gujarati' : 'font-display'
                  }`}
                >
                  {t(current.nameGu, current.nameEn)}
                </h3>
                <p
                  className={`mt-2 text-xs sm:text-sm text-[#5F250F]/85 leading-relaxed ${
                    lang === 'gu' ? 'font-gujarati' : 'font-sans'
                  }`}
                >
                  {t(current.addressGu, current.addressEn)}
                </p>
                {copied && (
                  <p className="mt-2 text-[11px] font-sans font-semibold text-[#5F250F]">
                    ✓ {t(weddingData.venuesSection.copiedGu, weddingData.venuesSection.copiedEn)}
                  </p>
                )}
              </div>

              {/* Copy-to-clipboard button */}
              <button
                type="button"
                onClick={handleCopyAddress}
                title="Copy address"
                aria-label="Copy venue address"
                className="flex-shrink-0 w-9 h-9 rounded-xl bg-white/60 hover:bg-white text-[#5F250F] flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>

            {/* Venue Selector Pills: 2x1 on mobile, stacked on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5">
              {locations.map((loc, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={loc.key}
                    type="button"
                    onClick={() => {
                      setActiveIdx(idx);
                      setMapUnlocked(false);
                      setCopied(false);
                    }}
                    className={`w-full py-2.5 sm:py-3 px-2.5 sm:px-4 rounded-xl text-[11px] sm:text-sm font-semibold transition-all cursor-pointer shadow-sm leading-snug ${
                      lang === 'gu' ? 'font-gujarati' : 'font-sans'
                    } ${
                      isActive
                        ? 'bg-[#AB5626] text-white shadow-md'
                        : 'bg-white text-[#5F250F] border border-[#5F250F]/15 hover:bg-[#FAF3E8]'
                    }`}
                  >
                    {t(loc.tabGu, loc.tabEn)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VenueSection;
