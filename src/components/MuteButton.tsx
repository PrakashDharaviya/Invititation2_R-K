import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';

interface MuteButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MuteButton: React.FC<MuteButtonProps> = ({ isPlaying, onToggle }) => {
  const { t } = useLanguage();

  return (
    <motion.button
      data-audio-toggle="true"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, type: 'spring' }}
      onClick={onToggle}
      className="fixed bottom-3 right-3 z-40 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#5F250F]/90 text-[#FFF4EA] border border-[#DDA45D] shadow-lg backdrop-blur-sm hover:bg-[#5F250F] transition-colors cursor-pointer"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      title={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        <>
          <span className="flex items-end gap-[2px] h-3.5" aria-hidden="true">
            <span className="w-[2px] bg-[#DDA45D] rounded-full animate-pulse h-2" />
            <span className="w-[2px] bg-[#DDA45D] rounded-full animate-pulse h-3.5" style={{ animationDelay: '150ms' }} />
            <span className="w-[2px] bg-[#DDA45D] rounded-full animate-pulse h-2.5" style={{ animationDelay: '300ms' }} />
          </span>
          <span className="text-[11px] font-sans font-semibold text-[#FFF4EA]">
            {t('સંગીત ચાલુ', 'Music On')}
          </span>
        </>
      ) : (
        <>
          <svg className="w-3.5 h-3.5 text-[#DDA45D]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          </svg>
          <span className="text-[11px] font-sans font-semibold text-[#FFF4EA]">
            {t('સંગીત', 'Music')}
          </span>
        </>
      )}
    </motion.button>
  );
};

export default MuteButton;
