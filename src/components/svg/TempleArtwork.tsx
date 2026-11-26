import React from 'react';

// ============================================================
// ORIGINAL TEMPLE & WEDDING SVG ARTWORK
// 100% original vectors styled in warm sandstone/gold/umber
// (#F7E8D4, #DDA45D, #E4BC83, #AB5626, #5F250F)
// ============================================================

export const SunGlowSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 220 220" className={className} fill="none" aria-hidden="true">
    <defs>
      <radialGradient id="sunRadial" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFF5DF" stopOpacity="1" />
        <stop offset="45%" stopColor="#F5C97B" stopOpacity="0.85" />
        <stop offset="75%" stopColor="#DDA45D" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#FFEFE2" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="110" cy="110" r="106" fill="url(#sunRadial)" />
    <circle cx="110" cy="110" r="52" fill="#FFF3D6" opacity="0.95" />
    <circle cx="110" cy="110" r="64" stroke="#DDA45D" strokeWidth="1" strokeDasharray="3 5" opacity="0.55" />
  </svg>
);

export const MountainRangeSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 500 220" className={className} preserveAspectRatio="none" fill="none" aria-hidden="true">
    {/* Distant ridge */}
    <path
      d="M0 155 Q70 95, 145 125 Q215 65, 290 110 Q365 60, 440 105 Q475 88, 500 110 L500 220 L0 220 Z"
      fill="#ECC9A0"
      opacity="0.55"
    />
    {/* Midground ridge */}
    <path
      d="M0 175 Q95 115, 190 148 Q270 98, 360 142 Q435 115, 500 145 L500 220 L0 220 Z"
      fill="#DFB07D"
      opacity="0.65"
    />
    {/* Foreground foothill */}
    <path
      d="M0 195 Q120 155, 250 175 Q375 150, 500 182 L500 220 L0 220 Z"
      fill="#D49A62"
      opacity="0.45"
    />
  </svg>
);

export const CloudsLayerSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 460 140" className={className} fill="none" aria-hidden="true">
    {/* Left cloud */}
    <g opacity="0.72">
      <ellipse cx="90" cy="52" rx="46" ry="15" fill="#FFF8EE" />
      <circle cx="72" cy="45" r="18" fill="#FFF8EE" />
      <circle cx="98" cy="40" r="22" fill="#FFF8EE" />
      <circle cx="118" cy="48" r="14" fill="#FFF8EE" />
    </g>
    {/* Right cloud */}
    <g opacity="0.65">
      <ellipse cx="362" cy="72" rx="52" ry="16" fill="#FFF8EE" />
      <circle cx="338" cy="64" r="18" fill="#FFF8EE" />
      <circle cx="366" cy="58" r="23" fill="#FFF8EE" />
      <circle cx="390" cy="67" r="15" fill="#FFF8EE" />
    </g>
    {/* Small wispy cloud */}
    <g opacity="0.5">
      <ellipse cx="220" cy="30" rx="34" ry="10" fill="#FFF8EE" />
      <circle cx="212" cy="26" r="12" fill="#FFF8EE" />
      <circle cx="230" cy="25" r="14" fill="#FFF8EE" />
    </g>
  </svg>
);

export const FlockingBirdsSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 320 90" className={className} fill="none" aria-hidden="true">
    {[
      { x: 55, y: 34, s: 1 },
      { x: 78, y: 24, s: 0.85 },
      { x: 96, y: 38, s: 0.7 },
      { x: 225, y: 28, s: 0.9 },
      { x: 246, y: 18, s: 0.75 },
      { x: 264, y: 32, s: 0.65 },
    ].map((b, i) => (
      <path
        key={i}
        d={`M${b.x - 7 * b.s} ${b.y + 3 * b.s} Q${b.x - 3 * b.s} ${b.y - 3 * b.s}, ${b.x} ${b.y + 2 * b.s} Q${b.x + 3 * b.s} ${b.y - 3 * b.s}, ${b.x + 7 * b.s} ${b.y + 3 * b.s}`}
        stroke="#5F250F"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.5"
      />
    ))}
  </svg>
);

export const WavingFlagSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 48 44" className={className} fill="none" aria-hidden="true">
    {/* Flagpole */}
    <line x1="8" y1="42" x2="8" y2="4" stroke="#5F250F" strokeWidth="2" strokeLinecap="round" />
    <circle cx="8" cy="3.5" r="2" fill="#DDA45D" stroke="#5F250F" strokeWidth="1" />
    {/* Saffron pennant */}
    <g className="animate-flag-wave" style={{ transformOrigin: '8px 12px' }}>
      <path
        d="M9 6 Q22 4, 32 9 Q38 11, 45 7 L36 14 L43 20 Q30 16, 20 19 Q14 21, 9 18 Z"
        fill="#E07A22"
        stroke="#5F250F"
        strokeWidth="1"
      />
      <path d="M12 12 Q24 10, 34 13" stroke="#FFF3D6" strokeWidth="0.9" opacity="0.7" />
    </g>
  </svg>
);

export const RamMandirTempleSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 440 360" className={className} fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="templeSand" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#EBC592" />
        <stop offset="55%" stopColor="#DDA45D" />
        <stop offset="100%" stopColor="#C38348" />
      </linearGradient>
      <linearGradient id="templeShadow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#B8763C" />
        <stop offset="100%" stopColor="#8C4E22" />
      </linearGradient>
      <linearGradient id="templeBaseFade" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#DDA45D" stopOpacity="0.95" />
        <stop offset="80%" stopColor="#F7E8D4" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#F7E8D4" stopOpacity="1" />
      </linearGradient>
    </defs>

    {/* ---- MAIN CENTRAL SHIKHARA (Tallest spire) ---- */}
    {/* Kalash Finial */}
    <line x1="220" y1="8" x2="220" y2="26" stroke="#5F250F" strokeWidth="2" />
    <circle cx="220" cy="21" r="4" fill="#E4BC83" stroke="#5F250F" strokeWidth="1.2" />
    <ellipse cx="220" cy="29" rx="10" ry="4" fill="#DDA45D" stroke="#5F250F" strokeWidth="1.2" />
    {/* Amalaka */}
    <ellipse cx="220" cy="35" rx="16" ry="5.5" fill="#B8763C" stroke="#5F250F" strokeWidth="1.2" />
    {/* Shikhara curved spire with urushringa ribs */}
    <path
      d="M202 38 C184 72, 174 124, 168 175 L272 175 C266 124, 256 72, 238 38 Z"
      fill="url(#templeSand)"
      stroke="#5F250F"
      strokeWidth="1.4"
    />
    {/* Shikhara vertical carvings */}
    {[184, 196, 208, 220, 232, 244, 256].map((x, idx) => (
      <path
        key={idx}
        d={`M${220 + (x - 220) * 0.42} 42 Q${x} 105, ${x} 173`}
        stroke="#5F250F"
        strokeWidth="0.9"
        opacity="0.45"
      />
    ))}
    {/* Horizontal band ribs on spire */}
    {[68, 94, 120, 146].map((y, idx) => (
      <line
        key={idx}
        x1={194 - idx * 6}
        y1={y}
        x2={246 + idx * 6}
        y2={y}
        stroke="#5F250F"
        strokeWidth="0.9"
        opacity="0.4"
      />
    ))}

    {/* ---- LEFT & RIGHT MANDAPA DOMES ---- */}
    {[
      { cx: 128, topY: 96, w: 36 },
      { cx: 312, topY: 96, w: 36 },
      { cx: 74, topY: 132, w: 26 },
      { cx: 366, topY: 132, w: 26 },
    ].map((d, i) => (
      <g key={i}>
        <line x1={d.cx} y1={d.topY - 12} x2={d.cx} y2={d.topY} stroke="#5F250F" strokeWidth="1.5" />
        <circle cx={d.cx} cy={d.topY - 6} r="2.5" fill="#E4BC83" stroke="#5F250F" strokeWidth="1" />
        <path
          d={`M${d.cx - 8} ${d.topY} C${d.cx - d.w * 0.65} ${d.topY + 25}, ${d.cx - d.w} ${d.topY + 55}, ${d.cx - d.w} 175 L${d.cx + d.w} 175 C${d.cx + d.w} ${d.topY + 55}, ${d.cx + d.w * 0.65} ${d.topY + 25}, ${d.cx + 8} ${d.topY} Z`}
          fill="url(#templeSand)"
          stroke="#5F250F"
          strokeWidth="1.2"
        />
        {/* Dome tiers */}
        <line x1={d.cx - d.w * 0.55} y1={d.topY + 24} x2={d.cx + d.w * 0.55} y2={d.topY + 24} stroke="#5F250F" strokeWidth="0.8" opacity="0.45" />
        <line x1={d.cx - d.w * 0.8} y1={d.topY + 42} x2={d.cx + d.w * 0.8} y2={d.topY + 42} stroke="#5F250F" strokeWidth="0.8" opacity="0.45" />
      </g>
    ))}

    {/* ---- UPPER CORNICE & TORANA FRIEZE ---- */}
    <rect x="42" y="172" width="356" height="12" rx="2" fill="url(#templeShadow)" stroke="#5F250F" strokeWidth="1.3" />
    <rect x="34" y="184" width="372" height="7" rx="1" fill="#EBC592" stroke="#5F250F" strokeWidth="1.1" />

    {/* ---- CARVED COLONNADE & ARCHES ---- */}
    <rect x="46" y="191" width="348" height="86" fill="#F5DFC2" stroke="#5F250F" strokeWidth="1.2" />

    {/* Inner Sanctum Arch (Garbhagriha) */}
    <path
      d="M192 277 L192 228 Q206 202, 220 198 Q234 202, 248 228 L248 277 Z"
      fill="#5F250F"
      opacity="0.92"
    />
    {/* Warm inner diya glow inside sanctum */}
    <ellipse cx="220" cy="248" rx="14" ry="20" fill="#F4A300" opacity="0.35" />
    <circle cx="220" cy="256" r="4" fill="#FFE082" />

    {/* Side Arches & Pillars */}
    {[64, 102, 144, 270, 312, 350].map((px, i) => (
      <g key={i}>
        {/* Arch bay */}
        <path
          d={`M${px + 6} 277 L${px + 6} 230 Q${px + 18} 214, ${px + 30} 230 L${px + 30} 277`}
          fill="#8C4E22"
          opacity="0.28"
          stroke="#5F250F"
          strokeWidth="0.9"
        />
        {/* Fluted Pillar */}
        <rect x={px} y="191" width="9" height="86" fill="url(#templeSand)" stroke="#5F250F" strokeWidth="1" />
        <rect x={px - 2} y="191" width="13" height="6" fill="#B8763C" stroke="#5F250F" strokeWidth="0.8" />
        <rect x={px - 2} y="271" width="13" height="6" fill="#B8763C" stroke="#5F250F" strokeWidth="0.8" />
      </g>
    ))}
    {/* Central flanking pillars */}
    {[180, 250].map((px, i) => (
      <g key={i}>
        <rect x={px} y="191" width="10" height="86" fill="url(#templeSand)" stroke="#5F250F" strokeWidth="1.1" />
        <rect x={px - 2} y="191" width="14" height="7" fill="#B8763C" stroke="#5F250F" strokeWidth="0.9" />
      </g>
    ))}

    {/* ---- PLINTH (JAGATI) & GRAND STAIRCASE ---- */}
    <rect x="24" y="277" width="392" height="14" rx="2" fill="url(#templeShadow)" stroke="#5F250F" strokeWidth="1.2" />
    <rect x="14" y="291" width="412" height="69" fill="url(#templeBaseFade)" />
    <line x1="14" y1="291" x2="426" y2="291" stroke="#5F250F" strokeWidth="1.2" />

    {/* Central Steps */}
    {[0, 1, 2, 3, 4, 5].map((step) => (
      <rect
        key={step}
        x={182 - step * 8}
        y={291 + step * 9}
        width={76 + step * 16}
        height="9"
        fill={step % 2 === 0 ? '#EBC592' : '#DDA45D'}
        stroke="#5F250F"
        strokeWidth="0.9"
      />
    ))}
    {/* Step side balustrades */}
    <path d="M182 291 L140 345 L152 345 L188 291 Z" fill="#B8763C" stroke="#5F250F" strokeWidth="1" />
    <path d="M258 291 L300 345 L288 345 L252 291 Z" fill="#B8763C" stroke="#5F250F" strokeWidth="1" />
  </svg>
);

export const HangingBellSvg: React.FC<{ className?: string; chainHeight?: number }> = ({
  className = '',
  chainHeight = 80,
}) => {
  const totalHeight = chainHeight + 62;
  return (
    <svg
      viewBox={`0 0 56 ${totalHeight}`}
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* Brass Chain Links */}
      <line x1="28" y1="0" x2="28" y2={chainHeight} stroke="#B37443" strokeWidth="2.2" strokeDasharray="5 3" />
      <circle cx="28" cy={chainHeight} r="4.5" fill="#DDA45D" stroke="#5F250F" strokeWidth="1.2" />

      {/* Bell Crown */}
      <path
        d={`M21 ${chainHeight + 4} Q28 ${chainHeight - 2}, 35 ${chainHeight + 4} L36 ${chainHeight + 10} L20 ${chainHeight + 10} Z`}
        fill="#DDA45D"
        stroke="#5F250F"
        strokeWidth="1.2"
      />

      {/* Bell Body */}
      <path
        d={`M18 ${chainHeight + 10} C14 ${chainHeight + 24}, 10 ${chainHeight + 36}, 7 ${chainHeight + 44} L49 ${chainHeight + 44} C46 ${chainHeight + 36}, 42 ${chainHeight + 24}, 38 ${chainHeight + 10} Z`}
        fill="#E4BC83"
        stroke="#5F250F"
        strokeWidth="1.4"
      />

      {/* Decorative Engraved Rings */}
      <line x1="15" y1={chainHeight + 23} x2="41" y2={chainHeight + 23} stroke="#5F250F" strokeWidth="1" opacity="0.6" />
      <line x1="11" y1={chainHeight + 36} x2="45" y2={chainHeight + 36} stroke="#5F250F" strokeWidth="1.1" opacity="0.7" />
      {/* Bell highlight */}
      <path
        d={`M20 ${chainHeight + 14} C18 ${chainHeight + 24}, 16 ${chainHeight + 32}, 13 ${chainHeight + 40}`}
        stroke="#FFF6E5"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* Bottom Rim & Clapper */}
      <ellipse cx="28" cy={chainHeight + 45} rx="21" ry="4.5" fill="#B37443" stroke="#5F250F" strokeWidth="1.2" />
      <line x1="28" y1={chainHeight + 45} x2="28" y2={chainHeight + 53} stroke="#5F250F" strokeWidth="1.5" />
      <circle cx="28" cy={chainHeight + 55} r="3.5" fill="#DDA45D" stroke="#5F250F" strokeWidth="1.2" />
    </svg>
  );
};

export const GanpatiCrestSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden="true">
    {/* Outer Halo Mandala */}
    <circle cx="60" cy="62" r="46" stroke="#DDA45D" strokeWidth="1.2" strokeDasharray="3 3" />
    <circle cx="60" cy="62" r="39" stroke="#5F250F" strokeWidth="1" opacity="0.25" />
    {/* Crown (Mukut) */}
    <path d="M46 38 L52 22 L60 32 L68 20 L74 38 Z" fill="#DDA45D" stroke="#5F250F" strokeWidth="1.3" />
    <circle cx="60" cy="17" r="2.5" fill="#AB5626" />
    {/* Ears */}
    <ellipse cx="36" cy="56" rx="10" ry="14" fill="#F7E8D4" stroke="#5F250F" strokeWidth="1.3" />
    <ellipse cx="84" cy="56" rx="10" ry="14" fill="#F7E8D4" stroke="#5F250F" strokeWidth="1.3" />
    {/* Head */}
    <circle cx="60" cy="54" r="18" fill="#FFEFE2" stroke="#5F250F" strokeWidth="1.4" />
    {/* Tilak */}
    <path d="M56 44 Q60 47, 64 44" stroke="#AB5626" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="60" cy="49" r="1.8" fill="#AB5626" />
    {/* Eyes */}
    <path d="M50 53 Q53 51, 56 53" stroke="#5F250F" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M64 53 Q67 51, 70 53" stroke="#5F250F" strokeWidth="1.4" strokeLinecap="round" />
    {/* Curved Trunk */}
    <path
      d="M57 58 C57 68, 50 74, 46 78 C43 81, 47 84, 51 81 C55 77, 62 70, 63 58"
      fill="#FFEFE2"
      stroke="#5F250F"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    {/* Lotus Base */}
    <path d="M36 92 Q48 84, 60 88 Q72 84, 84 92 Q72 98, 60 96 Q48 98, 36 92 Z" fill="#DDA45D" opacity="0.45" stroke="#5F250F" strokeWidth="1.1" />
  </svg>
);

export const OrnamentDividerSvg: React.FC<{ className?: string; flipped?: boolean }> = ({
  className = '',
  flipped = false,
}) => (
  <svg
    viewBox="0 0 360 40"
    className={className}
    style={{ transform: flipped ? 'rotate(180deg)' : undefined }}
    fill="none"
    aria-hidden="true"
  >
    <line x1="16" y1="20" x2="142" y2="20" stroke="#DDA45D" strokeWidth="1.2" />
    <line x1="218" y1="20" x2="344" y2="20" stroke="#DDA45D" strokeWidth="1.2" />
    <circle cx="14" cy="20" r="3" fill="#DDA45D" />
    <circle cx="346" cy="20" r="3" fill="#DDA45D" />
    {/* Central floral kalash crest */}
    <path d="M150 20 Q165 8, 180 20 Q165 32, 150 20 Z" fill="#E4BC83" stroke="#5F250F" strokeWidth="1.1" />
    <path d="M210 20 Q195 8, 180 20 Q195 32, 210 20 Z" fill="#E4BC83" stroke="#5F250F" strokeWidth="1.1" />
    <path d="M180 5 L186 20 L180 35 L174 20 Z" fill="#AB5626" stroke="#5F250F" strokeWidth="1.1" />
    <circle cx="180" cy="20" r="3" fill="#FFF3D6" />
  </svg>
);

export const PeacockOrnamentSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 320 72" className={className} fill="none" aria-hidden="true">
    {/* Central Lotus */}
    <path d="M160 12 Q172 28, 160 42 Q148 28, 160 12 Z" fill="#DDA45D" stroke="#5F250F" strokeWidth="1.1" />
    <path d="M160 42 Q140 28, 136 18 Q152 24, 160 42 Z" fill="#E4BC83" stroke="#5F250F" strokeWidth="1" />
    <path d="M160 42 Q180 28, 184 18 Q168 24, 160 42 Z" fill="#E4BC83" stroke="#5F250F" strokeWidth="1" />

    {/* Left Peacock */}
    <path d="M130 48 C114 48, 102 36, 94 24 C86 16, 70 20, 62 32 C76 34, 88 42, 98 52 Z" fill="#DDA45D" opacity="0.45" stroke="#5F250F" strokeWidth="1.2" />
    <circle cx="122" cy="30" r="4" fill="#AB5626" stroke="#5F250F" strokeWidth="1" />
    <path d="M124 27 L129 25" stroke="#5F250F" strokeWidth="1.1" />
    <circle cx="74" cy="34" r="2.5" fill="#AB5626" />
    <circle cx="84" cy="40" r="2.5" fill="#AB5626" />

    {/* Right Peacock (Mirrored) */}
    <path d="M190 48 C206 48, 218 36, 226 24 C234 16, 250 20, 258 32 C244 34, 232 42, 222 52 Z" fill="#DDA45D" opacity="0.45" stroke="#5F250F" strokeWidth="1.2" />
    <circle cx="198" cy="30" r="4" fill="#AB5626" stroke="#5F250F" strokeWidth="1" />
    <path d="M196 27 L191 25" stroke="#5F250F" strokeWidth="1.1" />
    <circle cx="246" cy="34" r="2.5" fill="#AB5626" />
    <circle cx="236" cy="40" r="2.5" fill="#AB5626" />

    {/* Horizontal scrollwork */}
    <path d="M16 56 Q88 48, 160 56 Q232 48, 304 56" stroke="#5F250F" strokeWidth="1.1" opacity="0.45" />
  </svg>
);

export const PillarSideSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 60 320" className={className} preserveAspectRatio="none" fill="none" aria-hidden="true">
    {/* Capital */}
    <rect x="6" y="4" width="48" height="14" rx="2" fill="#E4BC83" stroke="#5F250F" strokeWidth="1.2" />
    <path d="M10 18 L50 18 L44 32 L16 32 Z" fill="#DDA45D" stroke="#5F250F" strokeWidth="1.1" />
    {/* Shaft */}
    <rect x="16" y="32" width="28" height="256" fill="#F5DFC2" stroke="#5F250F" strokeWidth="1.1" />
    <line x1="23" y1="36" x2="23" y2="284" stroke="#DDA45D" strokeWidth="1.2" />
    <line x1="30" y1="36" x2="30" y2="284" stroke="#DDA45D" strokeWidth="1.2" />
    <line x1="37" y1="36" x2="37" y2="284" stroke="#DDA45D" strokeWidth="1.2" />
    {/* Mid Medallion */}
    <circle cx="30" cy="160" r="10" fill="#DDA45D" stroke="#5F250F" strokeWidth="1.1" />
    <circle cx="30" cy="160" r="4" fill="#5F250F" />
    {/* Base */}
    <path d="M16 288 L44 288 L50 302 L10 302 Z" fill="#DDA45D" stroke="#5F250F" strokeWidth="1.1" />
    <rect x="6" y="302" width="48" height="14" rx="2" fill="#E4BC83" stroke="#5F250F" strokeWidth="1.2" />
  </svg>
);

export const EventMiniIconSvg: React.FC<{
  type: 'mandap' | 'mamera' | 'bhojan' | 'dandiya' | 'jaan' | 'shaadi';
  className?: string;
}> = ({ type, className = 'w-11 h-11' }) => {
  switch (type) {
    case 'mandap':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
          <path d="M6 18 L24 6 L42 18" stroke="#5F250F" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M10 18 Q17 24, 24 18 Q31 24, 38 18" stroke="#AB5626" strokeWidth="1.6" />
          <line x1="12" y1="18" x2="12" y2="40" stroke="#5F250F" strokeWidth="2" />
          <line x1="36" y1="18" x2="36" y2="40" stroke="#5F250F" strokeWidth="2" />
          <path d="M19 40 L24 31 L29 40 Z" fill="#DDA45D" stroke="#5F250F" strokeWidth="1.3" />
          <line x1="6" y1="40" x2="42" y2="40" stroke="#5F250F" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'mamera':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
          <rect x="10" y="20" width="28" height="20" rx="2" fill="#E4BC83" opacity="0.45" stroke="#5F250F" strokeWidth="1.6" />
          <rect x="8" y="15" width="32" height="6" rx="1.5" fill="#DDA45D" stroke="#5F250F" strokeWidth="1.5" />
          <line x1="24" y1="15" x2="24" y2="40" stroke="#AB5626" strokeWidth="2" />
          <path d="M24 15 C18 8, 12 12, 16 15" stroke="#5F250F" strokeWidth="1.5" />
          <path d="M24 15 C30 8, 36 12, 32 15" stroke="#5F250F" strokeWidth="1.5" />
        </svg>
      );
    case 'bhojan':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
          <circle cx="24" cy="26" r="13" fill="#E4BC83" opacity="0.35" stroke="#5F250F" strokeWidth="1.6" />
          <circle cx="24" cy="26" r="8" stroke="#AB5626" strokeWidth="1.2" />
          <circle cx="19" cy="23" r="2.2" fill="#DDA45D" stroke="#5F250F" strokeWidth="1" />
          <circle cx="28" cy="23" r="2.2" fill="#DDA45D" stroke="#5F250F" strokeWidth="1" />
          <circle cx="24" cy="29" r="2.5" fill="#AB5626" />
          <path d="M18 10 Q20 7, 18 4 M24 10 Q26 7, 24 4 M30 10 Q32 7, 30 4" stroke="#AB5626" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case 'dandiya':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
          <line x1="12" y1="38" x2="34" y2="10" stroke="#5F250F" strokeWidth="3" strokeLinecap="round" />
          <line x1="36" y1="38" x2="14" y2="10" stroke="#AB5626" strokeWidth="3" strokeLinecap="round" />
          <circle cx="24" cy="24" r="3" fill="#DDA45D" />
          <path d="M24 6 L25 10 M38 22 L42 22 M6 22 L10 22" stroke="#DDA45D" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'jaan':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
          <path d="M12 36 L14 22 Q20 12, 29 14 L34 20 L30 24 L27 22 L28 36" stroke="#5F250F" strokeWidth="1.6" fill="#E4BC83" opacity="0.4" strokeLinejoin="round" />
          <path d="M29 14 L31 8 L33 13" stroke="#AB5626" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="8" y1="38" x2="40" y2="38" stroke="#5F250F" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="22" cy="27" r="2" fill="#AB5626" />
        </svg>
      );
    case 'shaadi':
      return (
        <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
          <path d="M24 9 C30 16, 30 23, 24 27 C18 23, 18 16, 24 9 Z" fill="#DDA45D" stroke="#5F250F" strokeWidth="1.4" />
          <path d="M24 14 C27 18, 27 22, 24 25 C21 22, 21 18, 24 14 Z" fill="#AB5626" />
          <path d="M12 33 L36 33 L32 40 L16 40 Z" fill="#E4BC83" stroke="#5F250F" strokeWidth="1.5" />
          <path d="M14 29 Q24 33, 34 29" stroke="#5F250F" strokeWidth="1.4" />
        </svg>
      );
  }
};

export const ThingsToKnowIconSvg: React.FC<{
  id: 'hashtag' | 'weather' | 'staff' | 'parking';
  className?: string;
}> = ({ id, className = 'w-10 h-10' }) => {
  switch (id) {
    case 'hashtag':
      return (
        <svg viewBox="0 0 44 44" className={className} fill="none" aria-hidden="true">
          <rect x="6" y="12" width="32" height="23" rx="4" fill="#FFEFE2" stroke="#5F250F" strokeWidth="1.6" />
          <path d="M15 12 L18 8 L26 8 L29 12" stroke="#5F250F" strokeWidth="1.6" />
          <circle cx="22" cy="23.5" r="6.5" fill="#DDA45D" opacity="0.4" stroke="#5F250F" strokeWidth="1.5" />
          <text x="22" y="26.5" textAnchor="middle" fill="#5F250F" fontSize="9" fontWeight="700">#</text>
        </svg>
      );
    case 'weather':
      return (
        <svg viewBox="0 0 44 44" className={className} fill="none" aria-hidden="true">
          <circle cx="20" cy="18" r="7" fill="#DDA45D" stroke="#5F250F" strokeWidth="1.5" />
          <path d="M20 7 V9 M20 27 V29 M9 18 H11 M29 18 H31 M12 10 L14 12 M26 24 L28 26 M28 10 L26 12" stroke="#AB5626" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M17 31 H32 C35 31, 37 29, 37 26.5 C37 24, 35 22, 32.5 22 C31.5 19, 29 17.5, 26 17.5 C22.5 17.5, 20 20, 19.5 23 C17 23.2, 15 25, 15 27.5 C15 29.5, 16 31, 17 31 Z" fill="#FFEFE2" stroke="#5F250F" strokeWidth="1.5" />
        </svg>
      );
    case 'staff':
      return (
        <svg viewBox="0 0 44 44" className={className} fill="none" aria-hidden="true">
          <circle cx="22" cy="14" r="5" fill="#FFEFE2" stroke="#5F250F" strokeWidth="1.5" />
          <path d="M12 32 C12 25, 32 25, 32 32" fill="#E4BC83" opacity="0.45" stroke="#5F250F" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 36 H36" stroke="#5F250F" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M16 9 H28 L26 6 H18 Z" fill="#DDA45D" stroke="#5F250F" strokeWidth="1.2" />
        </svg>
      );
    case 'parking':
      return (
        <svg viewBox="0 0 44 44" className={className} fill="none" aria-hidden="true">
          <rect x="8" y="8" width="28" height="28" rx="6" fill="#FFEFE2" stroke="#5F250F" strokeWidth="1.6" />
          <path d="M17 30 V14 H24 C27.5 14, 29 16, 29 18.8 C29 21.6, 27.5 23.5, 24 23.5 H17" stroke="#5F250F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
};

export const DiyaLampSvg: React.FC<{ className?: string }> = ({ className = 'w-10 h-12' }) => (
  <svg viewBox="0 0 56 64" className={className} fill="none" aria-hidden="true">
    {/* Flame */}
    <g className="animate-diya-flicker" style={{ transformOrigin: '28px 26px' }}>
      <ellipse cx="28" cy="17" rx="10" ry="13" fill="#DDA45D" opacity="0.28" />
      <path d="M28 6 Q34 16, 28 26 Q22 16, 28 6 Z" fill="#E07A22" />
      <path d="M28 10 Q31.5 17, 28 24 Q24.5 17, 28 10 Z" fill="#FFE082" />
    </g>
    {/* Diya bowl */}
    <path d="M10 30 Q28 36, 46 30 L40 46 Q28 52, 16 46 Z" fill="#DDA45D" stroke="#5F250F" strokeWidth="1.4" />
    <ellipse cx="28" cy="30" rx="18" ry="4" fill="#AB5626" opacity="0.35" stroke="#5F250F" strokeWidth="1.2" />
    <rect x="22" y="49" width="12" height="5" rx="1" fill="#B37443" stroke="#5F250F" strokeWidth="1.1" />
    <ellipse cx="28" cy="56" rx="14" ry="3.5" fill="#DDA45D" stroke="#5F250F" strokeWidth="1.1" />
  </svg>
);

export const DoorLeafSvg: React.FC<{ className?: string; mirror?: boolean }> = ({
  className = '',
  mirror = false,
}) => (
  <svg
    viewBox="0 0 180 440"
    className={className}
    style={{ transform: mirror ? 'scaleX(-1)' : undefined }}
    preserveAspectRatio="none"
    fill="none"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="176" height="436" rx="4" fill="#5F250F" stroke="#DDA45D" strokeWidth="2.5" />
    <rect x="12" y="12" width="156" height="416" rx="3" fill="#461A0A" stroke="#DDA45D" strokeWidth="1.1" opacity="0.8" />
    {/* Upper Carved Arch */}
    <path d="M24 120 L24 64 Q90 20, 156 64 L156 120 Z" fill="#5F250F" stroke="#DDA45D" strokeWidth="1.3" />
    <circle cx="90" cy="76" r="20" stroke="#DDA45D" strokeWidth="1" opacity="0.65" />
    <circle cx="90" cy="76" r="8" fill="#DDA45D" opacity="0.35" />
    {/* Brass Door Knocker / Ring */}
    <circle cx="144" cy="224" r="12" stroke="#DDA45D" strokeWidth="2.2" fill="#3B1508" />
    <circle cx="144" cy="224" r="4" fill="#E4BC83" />
    {/* Center Mandala Panel */}
    <rect x="24" y="138" width="132" height="164" rx="2" fill="#5F250F" stroke="#DDA45D" strokeWidth="1.1" opacity="0.85" />
    <circle cx="82" cy="220" r="38" stroke="#DDA45D" strokeWidth="1" strokeDasharray="3 3" opacity="0.55" />
    <circle cx="82" cy="220" r="22" stroke="#DDA45D" strokeWidth="1" opacity="0.45" />
    {/* Lower Carved Panel */}
    <rect x="24" y="318" width="132" height="94" rx="2" fill="#5F250F" stroke="#DDA45D" strokeWidth="1.1" opacity="0.85" />
    <path d="M36 392 Q90 340, 144 392" stroke="#DDA45D" strokeWidth="1.2" opacity="0.55" />
  </svg>
);

export const MandalaCornerSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 110 110" className={className} fill="none" aria-hidden="true">
    <path d="M0 100 Q0 0, 100 0" stroke="#DDA45D" strokeWidth="1.3" opacity="0.55" />
    <path d="M0 78 Q0 18, 78 0" stroke="#5F250F" strokeWidth="1" opacity="0.25" />
    <path d="M0 54 Q0 30, 54 0" stroke="#DDA45D" strokeWidth="1" opacity="0.45" />
    <circle cx="18" cy="18" r="4" fill="#DDA45D" opacity="0.45" />
    <circle cx="36" cy="12" r="2.5" fill="#AB5626" opacity="0.35" />
    <circle cx="12" cy="36" r="2.5" fill="#AB5626" opacity="0.35" />
  </svg>
);
