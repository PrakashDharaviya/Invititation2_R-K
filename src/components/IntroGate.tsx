import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import weddingData from '@/data/wedding';
import {
  DoorLeafSvg,
  GanpatiCrestSvg,
  DiyaLampSvg,
  HangingBellSvg,
  MandalaCornerSvg,
} from '@/components/svg/TempleArtwork';

interface IntroGateProps {
  onOpen: () => void;
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

const IntroGate: React.FC<IntroGateProps> = ({ onOpen, audioRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [gone, setGone] = useState(false);
  const { t } = useLanguage();

  const burstPetals = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => {
        const angle = (i / 18) * Math.PI * 2;
        const dist = 110 + (i % 3) * 45;
        return {
          id: i,
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist - 20,
          rot: i * 40,
        };
      }),
    []
  );

  const handleOpen = useCallback(() => {
    if (isOpen) return;
    setIsOpen(true);

    try {
      if (!audioRef.current) {
        audioRef.current = new Audio(weddingData.assets.music);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.35;
      }
      audioRef.current.play().catch(() => {});
    } catch {
      // Ignore audio errors
    }

    setTimeout(() => {
      setGone(true);
      onOpen();
    }, 1750);
  }, [isOpen, onOpen, audioRef]);

  if (gone) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#3B070E] overflow-hidden px-4"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <MandalaCornerSvg className="absolute top-0 left-0 w-24 h-24 opacity-60 pointer-events-none" />
        <MandalaCornerSvg className="absolute top-0 right-0 w-24 h-24 opacity-60 scale-x-[-1] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative z-20 flex flex-col items-center mb-3"
        >
          <p className="font-gujarati text-[#FFF4EA] text-base sm:text-lg tracking-wider text-center">
            {t(weddingData.introGate.topInvocationGu, weddingData.introGate.topInvocationEn)}
          </p>
          <GanpatiCrestSvg className="w-12 h-12 mt-1 opacity-90" />
        </motion.div>

        <div className="relative w-[84vw] max-w-[360px] flex flex-col items-center">
          <div className="w-full flex justify-between px-8 -mb-4 relative z-20 pointer-events-none">
            <HangingBellSvg className="w-7 pendulum-bell" chainHeight={28} />
            <HangingBellSvg className="w-7 pendulum-bell" chainHeight={28} />
          </div>

          <div
            className="relative w-full h-[46vh] max-h-[400px] min-h-[260px] flex border-2 border-[#DDA45D]/70 rounded-t-xl shadow-2xl overflow-visible"
            style={{ perspective: '1400px' }}
          >
            <div
              className="w-1/2 h-full transition-transform duration-[1600ms] ease-in-out"
              style={{
                transformOrigin: 'left center',
                transform: isOpen ? 'rotateY(-112deg)' : 'rotateY(0deg)',
              }}
            >
              <DoorLeafSvg className="w-full h-full" />
            </div>

            <div
              className="w-1/2 h-full transition-transform duration-[1600ms] ease-in-out"
              style={{
                transformOrigin: 'right center',
                transform: isOpen ? 'rotateY(112deg)' : 'rotateY(0deg)',
              }}
            >
              <DoorLeafSvg className="w-full h-full" mirror />
            </div>

            {!isOpen && (
              <motion.button
                onClick={handleOpen}
                animate={{ scale: [1, 1.07, 1] }}
                transition={{ repeat: Infinity, duration: 2.3, ease: 'easeInOut' }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-[#5F250F] border-2 border-[#DDA45D] flex items-center justify-center shadow-lg cursor-pointer"
                aria-label="Open invitation"
              >
                <span className="text-[#FFF4EA] text-xl font-serif">ૐ</span>
              </motion.button>
            )}

            {isOpen &&
              burstPetals.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0.3 }}
                  animate={{ x: p.x, y: p.y, opacity: 0, scale: 1.1, rotate: p.rot }}
                  transition={{ duration: 1.3, ease: 'easeOut' }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
                >
                  <div className="w-3.5 h-2.5 rounded-full bg-[#DDA45D]" />
                </motion.div>
              ))}

            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#FFEFE2] via-[#F7E8D4] to-white flex flex-col items-center justify-center rounded-t-xl">
              <p className="font-script text-3xl text-[#5F250F]">
                {weddingData.hero.groomEn} &amp; {weddingData.hero.brideEn}
              </p>
              <p className="font-gujarati text-sm text-[#AB5626] font-semibold mt-1">
                {weddingData.hero.coupleLineGu}
              </p>
            </div>
          </div>

          <div className="w-full flex justify-between px-2 -mt-6 relative z-20 pointer-events-none">
            <DiyaLampSvg className="w-9 h-11" />
            <DiyaLampSvg className="w-9 h-11" />
          </div>
        </div>

        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            onClick={handleOpen}
            className="mt-4 z-20 px-7 py-3 rounded-full border-2 border-[#DDA45D] bg-[#5F250F] text-[#FFF4EA] font-gujarati text-sm sm:text-base tracking-wide hover:bg-[#AB5626] transition-colors shadow-xl cursor-pointer"
          >
            {weddingData.introGate.buttonGu} / {weddingData.introGate.buttonEn}
          </motion.button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroGate;
