import React from 'react';

// ============================================================
// ORIGINAL ORNAMENTAL SVG COMPONENTS
// Matching rammandir.framer.website's exact gold/umber/rose style:
// #5F250F (ink), #AB5626 (terracotta), #DDA45D (gold), #FAF3E8 (cream)
// ============================================================

export const FourPointStarSvg: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path
      d="M12 1 L14.6 9.4 L23 12 L14.6 14.6 L12 23 L9.4 14.6 L1 12 L9.4 9.4 Z"
      fill="#DDA45D"
    />
  </svg>
);

export const SunburstDividerSvg: React.FC<{ className?: string; direction?: 'up' | 'down' }> = ({
  className = 'w-44 h-12',
  direction = 'up',
}) => (
  <svg
    viewBox="0 0 200 56"
    className={className}
    style={{ transform: direction === 'down' ? 'scaleY(-1)' : undefined }}
    fill="none"
    aria-hidden="true"
  >
    {/* Horizontal line */}
    <line x1="6" y1="50" x2="194" y2="50" stroke="#DDA45D" strokeWidth="1.2" opacity="0.85" />
    {/* Radiating rays */}
    {[-68, -54, -40, -27, -14, 0, 14, 27, 40, 54, 68].map((deg, idx) => {
      const rad = ((deg - 90) * Math.PI) / 180;
      const len = idx % 2 === 0 ? 40 : 28;
      const x2 = 100 + Math.cos(rad) * len;
      const y2 = 50 + Math.sin(rad) * len;
      return (
        <line
          key={idx}
          x1="100"
          y1="50"
          x2={x2}
          y2={y2}
          stroke="#DDA45D"
          strokeWidth={idx % 2 === 0 ? '1.3' : '0.9'}
          strokeLinecap="round"
          opacity="0.85"
        />
      );
    })}
    <circle cx="100" cy="50" r="3.5" fill="#DDA45D" />
  </svg>
);

export const PinkLotusSvg: React.FC<{ className?: string }> = ({ className = 'w-14 h-10' }) => (
  <svg viewBox="0 0 80 54" className={className} fill="none" aria-hidden="true">
    {/* Outer petals */}
    <path d="M40 44 C26 42, 12 32, 8 20 C20 20, 32 28, 40 44 Z" fill="#F29DB0" stroke="#A6465E" strokeWidth="0.9" />
    <path d="M40 44 C54 42, 68 32, 72 20 C60 20, 48 28, 40 44 Z" fill="#F29DB0" stroke="#A6465E" strokeWidth="0.9" />
    {/* Mid petals */}
    <path d="M40 44 C28 36, 20 22, 23 11 C32 16, 37 28, 40 44 Z" fill="#F7B8C6" stroke="#A6465E" strokeWidth="0.9" />
    <path d="M40 44 C52 36, 60 22, 57 11 C48 16, 43 28, 40 44 Z" fill="#F7B8C6" stroke="#A6465E" strokeWidth="0.9" />
    {/* Center petal */}
    <path d="M40 4 C48 16, 48 32, 40 44 C32 32, 32 16, 40 4 Z" fill="#F9CDD7" stroke="#A6465E" strokeWidth="1" />
    {/* Base calyx */}
    <path d="M24 45 Q40 40, 56 45 Q40 50, 24 45 Z" fill="#88A973" stroke="#536E42" strokeWidth="0.8" />
  </svg>
);

export const LotusDividerSvg: React.FC<{ className?: string }> = ({ className = 'w-64' }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
    <div className="h-[1px] flex-1 bg-[#DDA45D]/70" />
    <PinkLotusSvg className="w-12 h-9 flex-shrink-0" />
    <div className="h-[1px] flex-1 bg-[#DDA45D]/70" />
  </div>
);

export const StylizedGaneshSvg: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden="true">
    {/* Soft sacred golden halo behind Ganesha */}
    <circle cx="60" cy="60" r="46" fill="#DDA45D" fillOpacity="0.12" stroke="#DDA45D" strokeWidth="1.2" strokeDasharray="3 4" />

    {/* Mukut (3-tier Royal Crown) */}
    <path
      d="M46 31 C48 22, 53 16, 60 11 C67 16, 72 22, 74 31 Z"
      fill="#DDA45D"
      fillOpacity="0.32"
      stroke="#AB5626"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path d="M49 27 Q60 23, 71 27" stroke="#AB5626" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="60" cy="8.5" r="2.3" fill="#AB5626" />

    {/* Sacred Tilak on Forehead */}
    <path d="M55.5 36.5 Q60 39.5, 64.5 36.5" stroke="#AB5626" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="60" y1="33.5" x2="60" y2="41" stroke="#AB5626" strokeWidth="2" strokeLinecap="round" />
    <circle cx="60" cy="43.5" r="1.6" fill="#AB5626" />

    {/* Graceful Fan Ears (Left & Right) */}
    <path
      d="M44 37 C30 34, 21 44, 23 56 C25 65, 34 68, 41 62"
      fill="#FAF3E8"
      stroke="#AB5626"
      strokeWidth="2.3"
      strokeLinecap="round"
    />
    <path d="M31 46 C27 50, 28 57, 34 59" stroke="#DDA45D" strokeWidth="1.5" strokeLinecap="round" />

    <path
      d="M76 37 C90 34, 99 44, 97 56 C95 65, 86 68, 79 62"
      fill="#FAF3E8"
      stroke="#AB5626"
      strokeWidth="2.3"
      strokeLinecap="round"
    />
    <path d="M89 46 C93 50, 92 57, 86 59" stroke="#DDA45D" strokeWidth="1.5" strokeLinecap="round" />

    {/* Head Contour */}
    <path
      d="M44 36 C42 42, 41 48, 43 54"
      stroke="#AB5626"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M76 36 C78 42, 79 48, 77 54"
      stroke="#AB5626"
      strokeWidth="2.2"
      strokeLinecap="round"
    />

    {/* Gentle Smiling Eyes */}
    <path d="M47.5 47.5 Q51 45, 54.5 47.5" stroke="#5F250F" strokeWidth="1.9" strokeLinecap="round" />
    <path d="M65.5 47.5 Q69 45, 72.5 47.5" stroke="#5F250F" strokeWidth="1.9" strokeLinecap="round" />

    {/* Tusks (Ekadanta — full left, gentle right) */}
    <path d="M48 56 Q44 61, 41 62" stroke="#5F250F" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M72 56 Q75 59, 76 60" stroke="#5F250F" strokeWidth="1.8" strokeLinecap="round" />

    {/* Graceful Sweeping Calligraphic Trunk (Vamamukhi — curving left toward Modak) */}
    <path
      d="M57 52 C56 64, 48 70, 44 76 C40 82, 45 88, 52 85 C56 83, 57 79, 54 77"
      stroke="#AB5626"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    <path
      d="M64 52 C65 65, 59 75, 52 84"
      stroke="#AB5626"
      strokeWidth="2.1"
      strokeLinecap="round"
      opacity="0.7"
    />

    {/* Sacred Shoulders & Blessing / Modak Hand */}
    <path
      d="M42 64 C32 69, 28 80, 36 88 C42 94, 52 96, 60 96 C68 96, 78 94, 84 88 C92 80, 88 69, 78 64"
      stroke="#AB5626"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Modak in left palm */}
    <path d="M76 81 C76 76, 82 76, 82 81 C82 83, 76 83, 76 81 Z" fill="#DDA45D" stroke="#AB5626" strokeWidth="1.4" />

    {/* Lotus Seat (Padmasana) */}
    <path
      d="M32 100 Q46 93, 60 97 Q74 93, 88 100 Q74 107, 60 104 Q46 107, 32 100 Z"
      fill="#DDA45D"
      fillOpacity="0.35"
      stroke="#AB5626"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path d="M24 106 Q60 99, 96 106" stroke="#DDA45D" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const BrassBellSvg: React.FC<{ className?: string; chainHeight?: number }> = ({
  className = 'w-10',
  chainHeight = 84,
}) => {
  const totalH = chainHeight + 66;
  return (
    <svg viewBox={`0 0 60 ${totalH}`} className={className} fill="none" aria-hidden="true">
      {/* Ornate beaded floral chain */}
      <line x1="30" y1="0" x2="30" y2={chainHeight} stroke="#B37443" strokeWidth="2.2" />
      {Array.from({ length: Math.max(2, Math.floor(chainHeight / 16)) }, (_, i) => (
        <circle
          key={i}
          cx="30"
          cy={10 + i * 16}
          r={i % 2 === 0 ? 3 : 2.2}
          fill={i % 2 === 0 ? '#E47A2E' : '#F4C46A'}
          stroke="#5F250F"
          strokeWidth="0.7"
        />
      ))}

      {/* Brass Bell Hook & Cap */}
      <circle cx="30" cy={chainHeight} r="4.5" fill="#DDA45D" stroke="#5F250F" strokeWidth="1.2" />
      <path
        d={`M22 ${chainHeight + 5} Q30 ${chainHeight - 2}, 38 ${chainHeight + 5} L40 ${chainHeight + 12} L20 ${chainHeight + 12} Z`}
        fill="#DDA45D"
        stroke="#5F250F"
        strokeWidth="1.2"
      />

      {/* Brass Bell Body with warm metallic gradient */}
      <defs>
        <linearGradient id={`bellGrad-${chainHeight}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A66D32" />
          <stop offset="35%" stopColor="#F4D38C" />
          <stop offset="70%" stopColor="#DDA45D" />
          <stop offset="100%" stopColor="#8F5520" />
        </linearGradient>
      </defs>
      <path
        d={`M19 ${chainHeight + 12} C15 ${chainHeight + 25}, 11 ${chainHeight + 37}, 7 ${chainHeight + 46} L53 ${chainHeight + 46} C49 ${chainHeight + 37}, 45 ${chainHeight + 25}, 41 ${chainHeight + 12} Z`}
        fill={`url(#bellGrad-${chainHeight})`}
        stroke="#5F250F"
        strokeWidth="1.3"
      />
      <line x1="15" y1={chainHeight + 26} x2="45" y2={chainHeight + 26} stroke="#5F250F" strokeWidth="0.9" opacity="0.55" />
      <line x1="11" y1={chainHeight + 38} x2="49" y2={chainHeight + 38} stroke="#5F250F" strokeWidth="1" opacity="0.65" />

      {/* Bell Rim & Clapper */}
      <ellipse cx="30" cy={chainHeight + 47} rx="23" ry="4.5" fill="#9E622B" stroke="#5F250F" strokeWidth="1.2" />
      <line x1="30" y1={chainHeight + 47} x2="30" y2={chainHeight + 55} stroke="#5F250F" strokeWidth="1.6" />
      <circle cx="30" cy={chainHeight + 57} r="3.5" fill="#DDA45D" stroke="#5F250F" strokeWidth="1.1" />
    </svg>
  );
};

export const ScallopedTimelineCardFrame: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`relative bg-[#FAF3E8] rounded-[26px] shadow-[0_10px_28px_rgba(95,37,15,0.1)] ${className}`}>
    {/* Double stepped/scalloped gold border SVG overlay */}
    <svg
      viewBox="0 0 220 330"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      {/* Outer notched border */}
      <path
        d="M28 6 L192 6 A22 22 0 0 0 214 28 L214 302 A22 22 0 0 0 192 324 L28 324 A22 22 0 0 0 6 302 L6 28 A22 22 0 0 0 28 6 Z"
        fill="none"
        stroke="#DDA45D"
        strokeWidth="1.5"
      />
      {/* Inner thin border */}
      <path
        d="M32 12 L188 12 A20 20 0 0 0 208 32 L208 298 A20 20 0 0 0 188 318 L32 318 A20 20 0 0 0 12 298 L12 32 A20 20 0 0 0 32 12 Z"
        fill="none"
        stroke="#DDA45D"
        strokeWidth="0.9"
        opacity="0.7"
      />
      {/* Bottom upward sunburst rays */}
      {[-55, -36, -18, 0, 18, 36, 55].map((deg, i) => {
        const rad = ((deg - 90) * Math.PI) / 180;
        const len = i % 2 === 0 ? 44 : 32;
        return (
          <line
            key={i}
            x1="110"
            y1="318"
            x2={110 + Math.cos(rad) * len}
            y2={318 + Math.sin(rad) * len}
            stroke="#DDA45D"
            strokeWidth="0.9"
            opacity="0.55"
          />
        );
      })}
    </svg>

    {/* 3 tiny corner 4-point stars */}
    <FourPointStarSvg className="w-2.5 h-2.5 absolute top-3.5 left-4 pointer-events-none" />
    <FourPointStarSvg className="w-2.5 h-2.5 absolute top-3.5 right-4 pointer-events-none" />
    <FourPointStarSvg className="w-2.5 h-2.5 absolute bottom-3.5 left-4 pointer-events-none" />
    <FourPointStarSvg className="w-2.5 h-2.5 absolute bottom-3.5 right-4 pointer-events-none" />

    <div className="relative z-10 h-full flex flex-col items-center justify-between px-4 pt-6 pb-8 text-center">
      {children}
    </div>
  </div>
);

export const FlockingBirdsSvg: React.FC<{ className?: string }> = ({ className = 'w-48 h-16' }) => (
  <svg viewBox="0 0 220 70" className={className} fill="none" aria-hidden="true">
    {[
      { x: 24, y: 26, s: 0.9 },
      { x: 46, y: 18, s: 0.75 },
      { x: 64, y: 31, s: 0.65 },
      { x: 148, y: 22, s: 0.85 },
      { x: 168, y: 14, s: 0.7 },
      { x: 185, y: 28, s: 0.6 },
    ].map((b, i) => (
      <path
        key={i}
        d={`M${b.x - 7 * b.s} ${b.y + 3 * b.s} Q${b.x - 3 * b.s} ${b.y - 3 * b.s}, ${b.x} ${b.y + 1.5 * b.s} Q${b.x + 3 * b.s} ${b.y - 3 * b.s}, ${b.x + 7 * b.s} ${b.y + 3 * b.s}`}
        stroke="#5F250F"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.55"
      />
    ))}
  </svg>
);

export const SaffronFlagSvg: React.FC<{ className?: string }> = ({ className = 'w-10 h-8' }) => (
  <svg viewBox="0 0 46 38" className={`${className} flag-flutter`} fill="none" aria-hidden="true">
    <path
      d="M2 5 Q18 2, 32 7 Q39 9, 44 6 L34 13 L42 19 Q28 15, 16 18 Q8 20, 2 17 Z"
      fill="#EA6A1F"
      stroke="#7E3008"
      strokeWidth="0.9"
    />
  </svg>
);

export const ThingsBadgeIconSvg: React.FC<{
  id: 'hashtag' | 'weather' | 'staff' | 'parking';
}> = ({ id }) => {
  switch (id) {
    case 'hashtag':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 sm:w-7 sm:h-7" fill="none" aria-hidden="true">
          <rect x="6" y="6" width="20" height="20" rx="5.5" stroke="#FFF4EA" strokeWidth="2" />
          <circle cx="16" cy="16" r="4.5" stroke="#FFF4EA" strokeWidth="2" />
          <circle cx="21.5" cy="10.5" r="1.3" fill="#FFF4EA" />
        </svg>
      );
    case 'weather':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 sm:w-7 sm:h-7" fill="none" aria-hidden="true">
          <circle cx="14" cy="13" r="4.5" stroke="#FFF4EA" strokeWidth="2" />
          <path d="M14 5 V6.5 M14 19.5 V21 M6 13 H7.5 M20.5 13 H22 M8.5 7.5 L9.5 8.5 M18.5 17.5 L19.5 18.5" stroke="#FFF4EA" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M12 24 H23.5 C25.5 24, 27 22.5, 27 20.5 C27 18.6, 25.5 17.2, 23.6 17.2 C22.8 15, 20.8 13.8, 18.5 13.8 C15.8 13.8, 13.8 15.8, 13.5 18.2 C11.8 18.4, 10.5 19.8, 10.5 21.3 C10.5 22.8, 11.2 24, 12 24 Z" fill="#5F250F" stroke="#FFF4EA" strokeWidth="1.7" />
        </svg>
      );
    case 'staff':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 sm:w-7 sm:h-7" fill="none" aria-hidden="true">
          <circle cx="16" cy="12" r="4" stroke="#FFF4EA" strokeWidth="2" />
          <path d="M8.5 25.5 C8.5 20.5, 23.5 20.5, 23.5 25.5" stroke="#FFF4EA" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 7.5 H20" stroke="#DDA45D" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'parking':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6 sm:w-7 sm:h-7" fill="none" aria-hidden="true">
          <rect x="6" y="6" width="20" height="20" rx="4.5" stroke="#FFF4EA" strokeWidth="2" />
          <path d="M13 22 V10 H18.2 C20.6 10, 22 11.4, 22 13.5 C22 15.6, 20.6 17, 18.2 17 H13" stroke="#FFF4EA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
};
