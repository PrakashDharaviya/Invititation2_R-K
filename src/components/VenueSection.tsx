import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import weddingData from '@/data/wedding';

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
      // Ignore if clipboard API blocked
    }
  };

  return (
    <section
      id="venue"
      className="relative w-full max-w-[1515px] mx-auto bg-[#FFEFE2] pt-8 sm:pt-14 pb-10 sm:pb-16 px-3 sm:px-8 overflow-hidden"
    >
      {/* Subtle architectural gold side rails matching Framer's Location & Countdown BG */}
      <div className="max-w-[1260px] mx-auto border-x border-[#DDA45D]/45 px-3 sm:px-8 lg:px-14 py-6 sm:py-10">
        {/* Top Heading: "Looking forward to see you" */}
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className={`text-center text-[#5F250F] mb-6 sm:mb-10 ${
            lang === 'gu'
              ? 'font-gujarati font-bold text-2xl sm:text-4xl lg:text-[54px]'
              : 'font-ivyora font-medium text-[22px] sm:text-5xl lg:text-[64px]'
          }`}
        >
          {t(weddingData.venuesSection.headingGu, weddingData.venuesSection.headingEn)}
        </motion.h2>

        {/* Framer Location Map Frame (max-width 980px-1078px on Desktop, 343px centered on Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[1040px] mx-auto flex flex-col gap-4"
        >
          {/* Interactive Map Canvas */}
          <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[399px] rounded-[16px] overflow-hidden border border-[#DDA45D]/40 bg-[#F7E8D4] shadow-sm">
            <iframe
              key={current.key}
              src={current.mapEmbedUrl}
              title={current.nameEn}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={`w-full h-full border-0 ${mapUnlocked ? 'pointer-events-auto' : 'pointer-events-none'}`}
            />

            {/* Top-Right "Nearby Location" badge */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(current.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 px-3.5 py-2 rounded-[8px] bg-black/55 text-white text-[12px] sm:text-[13px] font-gotham font-medium hover:bg-black/75 transition-colors"
            >
              {t(weddingData.venuesSection.nearbyLabelGu, weddingData.venuesSection.nearbyLabelEn)}
            </a>

            {/* Center "Tap to interact with map" Overlay Pill */}
            {!mapUnlocked && (
              <button
                type="button"
                onClick={() => setMapUnlocked(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/5 cursor-pointer"
                aria-label="Tap to interact with map"
              >
                <span className="px-4 py-2 rounded-[20px] bg-black/60 text-white text-[12px] font-gotham font-medium shadow-md">
                  {t(weddingData.venuesSection.tapOverlayGu, weddingData.venuesSection.tapOverlayEn)}
                </span>
              </button>
            )}

            {/* Bottom-Left Recenter Button */}
            <button
              type="button"
              onClick={() => setMapUnlocked(false)}
              title="Lock / Recenter"
              aria-label="Recenter map on location"
              className="absolute bottom-3 left-3 flex items-center justify-center w-[34px] h-[34px] rounded-[8px] bg-black/55 text-white hover:bg-black/75 transition-colors cursor-pointer"
            >
              <svg fill="none" height="16" viewBox="0 0 24 24" width="16">
                <path
                  d="M12 3v3m0 12v3m9-9h-3M6 12H3m15 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>

            {/* Bottom-Right "Open in Google Maps" Button */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(current.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-2 rounded-[8px] bg-black/55 text-white text-[12px] sm:text-[13px] font-gotham font-medium hover:bg-black/75 transition-colors"
            >
              <span>
                {t(weddingData.venuesSection.openMapsGu, weddingData.venuesSection.openMapsEn)}
              </span>
              <svg fill="none" height="14" viewBox="0 0 24 24" width="14">
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                />
              </svg>
            </a>
          </div>

          {/* Exact Framer Golden-Tan Venue Info Box (rgb(228, 188, 131)) */}
          <div className="relative w-full px-5 sm:px-6 py-5 pr-14 rounded-[16px] bg-[#E4BC83] text-[#5F250F] text-left">
            <h3
              className={`text-[17px] sm:text-[18px] font-bold ${
                lang === 'gu' ? 'font-gujarati' : 'font-gotham'
              }`}
            >
              {t(current.nameGu, current.nameEn)}
            </h3>
            <p
              className={`mt-1.5 text-[13px] sm:text-[14px] text-[#5F250F]/85 leading-relaxed ${
                lang === 'gu' ? 'font-gujarati' : 'font-gotham'
              }`}
            >
              {t(current.addressGu, current.addressEn)}
            </p>
            {copied && (
              <p className="mt-1.5 text-[11px] font-gotham font-medium text-[#5F250F]">
                ✓ {t(weddingData.venuesSection.copiedGu, weddingData.venuesSection.copiedEn)}
              </p>
            )}

            <button
              type="button"
              onClick={handleCopyAddress}
              title="Copy address"
              aria-label="Copy address to clipboard"
              className="absolute bottom-4 right-4 flex items-center justify-center w-8 h-8 rounded-[8px] bg-white/25 hover:bg-white/45 text-[#5F250F] transition-colors cursor-pointer"
            >
              <svg fill="none" height="16" viewBox="0 0 24 24" width="16">
                <rect height="11" rx="2" stroke="currentColor" strokeWidth="2" width="11" x="9" y="9" />
                <path d="M5 15V5a2 2 0 0 1 2-2h10" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>

          {/* Exact Framer Location Tabs Row */}
          <div className="grid grid-cols-2 gap-3">
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
                  className={`py-3.5 px-4 rounded-[16px] border text-[13px] sm:text-[14px] font-medium transition-colors cursor-pointer ${
                    lang === 'gu' ? 'font-gujarati' : 'font-gotham'
                  } ${
                    isActive
                      ? 'bg-[#AB5626] border-[#AB5626] text-white'
                      : 'bg-white border-[#D0D0D0] text-[#5F250F] hover:bg-[#FAF3E8]'
                  }`}
                >
                  {t(loc.tabGu, loc.tabEn)}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;
