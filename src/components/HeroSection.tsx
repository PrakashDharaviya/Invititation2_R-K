import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import weddingData from '@/data/wedding';
import InvitationSection from '@/components/InvitationSection';

gsap.registerPlugin(ScrollTrigger);

/**
 * Saffron swallowtail waving temple banner with golden border & "जय श्री राम" silk cloth ripple shader
 */
const WavingFlagCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const TEX_W = 520;
    const TEX_H = 340;
    const FLAG_TOP = 24;
    const FLAG_BOT = 316;
    const NOTCH_X = 392;
    const MID_Y = (FLAG_TOP + FLAG_BOT) / 2;

    const offscreen = document.createElement('canvas');
    offscreen.width = TEX_W;
    offscreen.height = TEX_H;
    const octx = offscreen.getContext('2d');
    if (!octx) return;

    const drawBannerTexture = () => {
      octx.clearRect(0, 0, TEX_W, TEX_H);

      const traceSwallowtail = (inset = 0) => {
        const top = FLAG_TOP + inset;
        const bot = FLAG_BOT - inset;
        const right = TEX_W - 14 - inset * 1.4;
        const notch = NOTCH_X - inset * 1.1;
        octx.beginPath();
        octx.moveTo(0, top);
        octx.lineTo(right, top);
        octx.lineTo(notch, MID_Y);
        octx.lineTo(right, bot);
        octx.lineTo(0, bot);
        octx.closePath();
      };

      // Glowing saffron-vermilion silk fill
      const silkGrad = octx.createLinearGradient(0, FLAG_TOP, TEX_W, FLAG_BOT);
      silkGrad.addColorStop(0, '#F35B0E');
      silkGrad.addColorStop(0.42, '#E23E04');
      silkGrad.addColorStop(0.78, '#CD2B02');
      silkGrad.addColorStop(1, '#AE1D00');
      traceSwallowtail(0);
      octx.fillStyle = silkGrad;
      octx.fill();

      // Subtle diagonal weave depth inside cloth
      const sheenGrad = octx.createLinearGradient(0, FLAG_TOP, TEX_W * 0.8, FLAG_BOT);
      sheenGrad.addColorStop(0, 'rgba(255, 210, 120, 0.16)');
      sheenGrad.addColorStop(0.5, 'rgba(255, 160, 40, 0.04)');
      sheenGrad.addColorStop(1, 'rgba(90, 10, 0, 0.2)');
      octx.fillStyle = sheenGrad;
      octx.fill();

      // Double gold zari border trim along top, bottom, and swallowtail V-cut
      octx.strokeStyle = '#E8B239';
      octx.lineWidth = 6;
      traceSwallowtail(3);
      octx.stroke();

      octx.strokeStyle = '#FBE28A';
      octx.lineWidth = 2.2;
      traceSwallowtail(9);
      octx.stroke();

      // Sacred gold metallic lettering gradient
      const goldGrad = octx.createLinearGradient(60, 80, 320, 265);
      goldGrad.addColorStop(0, '#FFF1AA');
      goldGrad.addColorStop(0.45, '#F5C851');
      goldGrad.addColorStop(1, '#D38B1B');

      octx.textAlign = 'center';
      octx.textBaseline = 'middle';
      octx.shadowColor = 'rgba(92, 16, 0, 0.45)';
      octx.shadowBlur = 4;
      octx.shadowOffsetX = 1.5;
      octx.shadowOffsetY = 2;

      // Top line: "जय श्री"
      octx.font = '700 54px "Noto Serif Devanagari", "Kokila", "Mangal", serif';
      octx.fillStyle = goldGrad;
      octx.fillText('जय श्री', 200, 122);

      // Bold lower line: "राम" + curved devotional flourish beneath
      octx.font = '700 102px "Noto Serif Devanagari", "Kokila", "Mangal", serif';
      octx.fillText('राम', 202, 216);

      // Decorative gold calligraphic tail sweep under "राम"
      octx.shadowBlur = 2;
      octx.strokeStyle = goldGrad;
      octx.lineWidth = 9;
      octx.lineCap = 'round';
      octx.beginPath();
      octx.moveTo(156, 250);
      octx.quadraticCurveTo(214, 286, 294, 266);
      octx.stroke();
      octx.shadowColor = 'transparent';
    };

    drawBannerTexture();
    let active = true;
    document.fonts?.ready.then(() => {
      if (active) drawBannerTexture();
    });

    let rafId = 0;
    let lastTs = performance.now();
    let elapsed = 0.8;

    const renderWave = (now: number) => {
      const dt = Math.min((now - lastTs) / 1000, 0.05);
      lastTs = now;
      if (!prefersReduced) elapsed += dt;

      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const scaleX = W / TEX_W;
      const scaleY = H / TEX_H;
      const padTop = 18;
      const drawScaleY = (H - padTop * 2) / TEX_H;
      const stripStep = 2;

      for (let sx = 0; sx < TEX_W; sx += stripStep) {
        const p = sx / TEX_W;
        const amp = Math.pow(p, 1.15) * 20;
        const primary = Math.sin(p * 6.4 - elapsed * 3.5);
        const harmonic = Math.sin(p * 11.2 - elapsed * 5.2 + 0.85) * 0.36;
        const dy = (primary + harmonic) * amp;

        // Perspective ripple compression + silk highlight/shadow from surface slope
        const slope = Math.cos(p * 6.4 - elapsed * 3.5) * (0.65 + p * 0.5);
        const destX = sx * scaleX;
        const destW = Math.max(1.5, stripStep * scaleX * (1 - 0.045 * Math.abs(slope) * p)) + 0.6;
        const destY = padTop + dy * scaleY;
        const destH = TEX_H * drawScaleY;

        ctx.drawImage(offscreen, sx, 0, stripStep, TEX_H, destX, destY, destW, destH);

        // Realistic fabric specular highlights & fold shadows locked inside flag shape
        if (Math.abs(slope) > 0.06) {
          ctx.save();
          ctx.globalCompositeOperation = 'source-atop';
          if (slope > 0) {
            ctx.fillStyle = `rgba(255, 224, 136, ${(slope * 0.24 * Math.min(1, p * 2.2)).toFixed(3)})`;
          } else {
            ctx.fillStyle = `rgba(82, 10, 0, ${(-slope * 0.28 * Math.min(1, p * 2.2)).toFixed(3)})`;
          }
          ctx.fillRect(destX, destY, destW, destH);
          ctx.restore();
        }
      }

      if (!prefersReduced) {
        rafId = requestAnimationFrame(renderWave);
      }
    };

    rafId = requestAnimationFrame(renderWave);
    return () => {
      active = false;
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={360}
      height={240}
      aria-hidden="true"
      className={className}
    />
  );
};

interface BirdEntity {
  x: number;
  baseY: number;
  speed: number;
  scale: number;
  alpha: number;
  phase: number;
  flapSpeed: number;
  bobAmp: number;
  bobFreq: number;
  tint: string;
}

/**
 * Smooth 60fps flocking birds canvas gliding organically across the upper sky
 */
const FlockingBirdsCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const palette = ['95, 37, 15', '128, 62, 26', '150, 82, 42'];

    const birds: BirdEntity[] = Array.from({ length: 24 }, (_, idx) => {
      const layer = (idx % 3) * 0.25 + 0.42;
      return {
        x: ((idx * 0.137) % 1.16) - 0.08,
        baseY: 0.16 + ((idx * 0.293) % 0.68),
        speed: 0.012 + (idx % 5) * 0.0042 + layer * 0.005,
        scale: layer + (idx % 4) * 0.08,
        alpha: 0.22 + layer * 0.34,
        phase: idx * 1.45,
        flapSpeed: 4.2 + (idx % 4) * 0.85,
        bobAmp: 6 + (idx % 3) * 5,
        bobFreq: 0.85 + (idx % 4) * 0.22,
        tint: palette[idx % palette.length],
      };
    });

    const syncSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(300, Math.round(rect.width * dpr));
      const h = Math.max(180, Math.round(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      return { w, h, dpr };
    };

    let size = syncSize();
    const onResize = () => {
      size = syncSize();
    };
    window.addEventListener('resize', onResize, { passive: true });

    let rafId = 0;
    let lastTs = performance.now();
    let elapsed = 0;

    const renderFrame = (now: number) => {
      const dt = Math.min((now - lastTs) / 1000, 0.05);
      lastTs = now;
      if (!prefersReduced) elapsed += dt;

      const { w, h, dpr } = size;
      ctx.clearRect(0, 0, w, h);

      for (const b of birds) {
        if (!prefersReduced) {
          b.x += b.speed * dt;
          if (b.x > 1.08) b.x = -0.08;
        }

        // Smooth edge fade near horizontal viewport bounds
        const edgeFade = Math.min(
          1,
          Math.max(0, (b.x + 0.06) / 0.14),
          Math.max(0, (1.06 - b.x) / 0.14)
        );
        const px = b.x * w;
        const py =
          b.baseY * h +
          Math.sin(elapsed * b.bobFreq + b.phase) * b.bobAmp * dpr;

        // Wing flap curve with brief mid-air glide moments
        const rawWave = Math.sin(elapsed * b.flapSpeed + b.phase);
        const flapY = rawWave * 6.4;
        const spreadX = 11.5 * b.scale * dpr;
        const wingLift = flapY * b.scale * dpr;
        const pitch = Math.cos(elapsed * b.bobFreq + b.phase) * 0.08;

        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(pitch);
        ctx.strokeStyle = `rgba(${b.tint}, ${(b.alpha * edgeFade).toFixed(3)})`;
        ctx.lineWidth = Math.max(1.1, 1.55 * b.scale * dpr);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();
        // Left graceful wing arc
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(
          -spreadX * 0.48,
          -Math.abs(wingLift) - 3.2 * b.scale * dpr + wingLift * 0.35,
          -spreadX,
          -wingLift * 0.72
        );
        // Right graceful wing arc
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(
          spreadX * 0.48,
          -Math.abs(wingLift) - 3.2 * b.scale * dpr + wingLift * 0.35,
          spreadX,
          -wingLift * 0.72
        );
        ctx.stroke();
        ctx.restore();
      }

      if (!prefersReduced) {
        rafId = requestAnimationFrame(renderFrame);
      }
    };

    rafId = requestAnimationFrame(renderFrame);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
};

const HeroSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const [scrolling, setScrolling] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const mountainRef = useRef<HTMLDivElement>(null);
  const birdsRef = useRef<HTMLDivElement>(null);
  const groomRef = useRef<HTMLDivElement>(null);
  const wedsRef = useRef<HTMLDivElement>(null);
  const brideRef = useRef<HTMLDivElement>(null);
  const templeWrapRef = useRef<HTMLDivElement>(null);

  // Strengthen bell pendulum swing while scrolling (matches Framer behavior)
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      setScrolling(true);
      clearTimeout(timer);
      timer = setTimeout(() => setScrolling(false), 380);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
  }, []);

  // Multi-layer ScrollTrigger parallax (Sky < Mountain < Cloud < Birds < Kinetic Names < Temple)
  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (sunRef.current) {
        gsap.to(sunRef.current, {
          y: -80,
          scale: 1.15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '40% top',
            scrub: 1,
          },
        });
      }
      if (mountainRef.current) {
        gsap.to(mountainRef.current, {
          y: 45,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '45% top',
            scrub: 1,
          },
        });
      }
      if (cloudRef.current) {
        gsap.to(cloudRef.current, {
          y: -35,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '45% top',
            scrub: 1,
          },
        });
      }
      if (birdsRef.current) {
        gsap.to(birdsRef.current, {
          y: -48,
          opacity: 0.2,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '35% top',
            scrub: 1,
          },
        });
      }
      // Kinetic Hero names gliding gently down & rotating behind the rising temple spire
      if (groomRef.current) {
        gsap.to(groomRef.current, {
          y: 360,
          rotate: 22,
          scale: 0.78,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '36% top',
            scrub: 1.1,
          },
        });
      }
      if (wedsRef.current) {
        gsap.to(wedsRef.current, {
          y: 310,
          scale: 0.74,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '34% top',
            scrub: 1.1,
          },
        });
      }
      if (brideRef.current) {
        gsap.to(brideRef.current, {
          y: 340,
          rotate: -22,
          scale: 0.78,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '36% top',
            scrub: 1.1,
          },
        });
      }
      if (templeWrapRef.current) {
        gsap.to(templeWrapRef.current, {
          y: -26,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [lang]);

  // Medium-sized cascading bells matching original Framer proportions (behind toran floral trim)
  const bells = [
    { img: weddingData.framer.bellLeft, left: '15.9%', topClass: '-top-[2px]', w: 'w-[22px] sm:w-[32px] lg:w-[44px]', dur: '3.2s', delay: '0s', showMobile: true, z: 'z-20' },
    { img: weddingData.framer.bellLeft, left: '83.6%', topClass: '-top-[2px]', w: 'w-[22px] sm:w-[32px] lg:w-[44px]', dur: '3.6s', delay: '0.4s', showMobile: true, z: 'z-20' },
    { img: weddingData.framer.bellRight, left: '9.3%', topClass: 'top-[14px] sm:top-[34px] lg:top-[52px]', w: 'w-[20px] sm:w-[29px] lg:w-[42px]', dur: '3.0s', delay: '0.7s', showMobile: true, z: 'z-20' },
    { img: weddingData.framer.bellRight, left: '90.5%', topClass: 'top-[14px] sm:top-[34px] lg:top-[52px]', w: 'w-[20px] sm:w-[29px] lg:w-[42px]', dur: '3.4s', delay: '0.2s', showMobile: true, z: 'z-20' },
    { img: weddingData.framer.bellRight, left: '4.7%', topClass: 'top-[86px] lg:top-[126px]', w: 'w-[30px] lg:w-[43px]', dur: '3.8s', delay: '0.9s', showMobile: false, z: 'z-10' },
    { img: weddingData.framer.bellRight, left: '95.8%', topClass: 'top-[94px] lg:top-[140px]', w: 'w-[30px] lg:w-[43px]', dur: '3.1s', delay: '0.5s', showMobile: false, z: 'z-10' },
  ];

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative z-20 w-full overflow-x-clip bg-gradient-to-b from-[#F7E8D4] from-60% via-[#FFEFE2]/90 via-85% to-transparent"
    >
      {/* ==================== SKY PARALLAX BACKDROP ==================== */}
      <div className="relative w-full max-w-[1515px] mx-auto overflow-x-clip">
        {/* Background Sky Layer */}
        <div className="relative w-full h-[520px] min-[375px]:h-[590px] min-[420px]:h-[630px] sm:h-[820px] lg:h-[1180px] bg-[#F7E8D4] pointer-events-none select-none overflow-hidden">
          <img
            src={weddingData.framer.skyMobile}
            alt=""
            aria-hidden="true"
            className="md:hidden absolute inset-0 w-full h-full object-cover object-top"
          />
          <img
            src={weddingData.framer.skyDesktop}
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute inset-0 w-full h-full object-cover object-top"
          />

          {/* Glowing Sun Layer */}
          <div
            ref={sunRef}
            className="absolute left-[45%] -translate-x-1/2 top-[230px] sm:top-[280px] lg:top-[300px] w-[180px] sm:w-[320px] lg:w-[440px] z-[2] pointer-events-none"
          >
            <img
              src={weddingData.framer.sunMobile}
              alt=""
              className="md:hidden w-full h-auto"
            />
            <img
              src={weddingData.framer.sunDesktop}
              alt=""
              className="hidden md:block w-full h-auto"
            />
          </div>

          {/* Misty Sandstone Mountain Layer */}
          <div
            ref={mountainRef}
            className="absolute inset-x-0 top-[255px] sm:top-[340px] lg:top-[420px] z-[4] pointer-events-none"
          >
            <img
              src={weddingData.framer.mountainMobile}
              alt=""
              className="md:hidden w-full h-auto object-cover"
            />
            <img
              src={weddingData.framer.mountainDesktop}
              alt=""
              className="hidden md:block w-full h-auto object-cover"
            />
          </div>

          {/* Soft Drifting Cloud Layer */}
          <div
            ref={cloudRef}
            className="absolute inset-x-0 top-[75px] sm:top-[40px] lg:top-[0px] z-[5] pointer-events-none opacity-90"
          >
            <img
              src={weddingData.framer.cloudMobile}
              alt=""
              className="md:hidden w-full h-auto"
            />
            <img
              src={weddingData.framer.cloudDesktop}
              alt=""
              className="hidden md:block w-full h-auto"
            />
          </div>

          {/* Smooth Flocking Birds Gliding Across the Sky */}
          <div
            ref={birdsRef}
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[380px] sm:h-[520px] lg:h-[640px] z-[6] pointer-events-none"
          >
            <FlockingBirdsCanvas className="w-full h-full block" />
          </div>
        </div>

        {/* ==================== TOP FLORAL GARLANDS + PENDULUM BELLS ==================== */}
        <motion.div
          initial={{ scale: 1.75 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', bounce: 0, delay: 0.1, duration: 2.2 }}
          className="absolute top-0 inset-x-0 z-30 pointer-events-none origin-top"
        >
          <img
            src={weddingData.framer.bellsFrameMobile}
            alt="Floral toran garlands"
            className="md:hidden w-full h-auto block select-none"
          />
          <img
            src={weddingData.framer.bellsFrameDesktop}
            alt="Floral toran garlands"
            className="hidden md:block w-full h-auto block select-none"
          />
        </motion.div>

        {/* Original PNG Swinging Temple Bells */}
        {bells.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.001 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'spring', bounce: 0, delay: 0.7, duration: 2.0 }}
            style={{ left: b.left }}
            className={`${b.showMobile ? 'block' : 'hidden md:block'} ${b.topClass} absolute -translate-x-1/2 pointer-events-none ${b.z}`}
          >
            <div
              className={`pendulum-bell ${scrolling ? 'pendulum-bell-active' : ''}`}
              style={{ animationDuration: b.dur, animationDelay: b.delay }}
            >
              <img
                src={b.img}
                alt=""
                aria-hidden="true"
                className={`${b.w} h-auto block select-none`}
              />
            </div>
          </motion.div>
        ))}

        {/* ==================== HERO NAMES OVER SKY (z-[8] so kinetic scroll dips behind Temple z-20) ==================== */}
        <div className="absolute inset-x-0 top-0 z-[8] flex flex-col items-center text-center pt-[23.5%] sm:pt-12 lg:pt-8 px-4 pointer-events-none">
          {/* Discreet Top Invocation positioned strictly below the narrow top toran curve */}
          <motion.p
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className={`max-w-[70%] sm:max-w-[460px] lg:max-w-none text-[8px] min-[375px]:text-[9px] sm:text-xs text-[#5F250F]/80 leading-snug tracking-wide mb-2 min-[375px]:mb-2.5 sm:mb-3 ${
              lang === 'gu' ? 'font-gujarati' : 'font-gotham font-medium'
            }`}
          >
            {t(weddingData.hero.invocationGu, weddingData.hero.invocationEn)}
          </motion.p>

          <div className="w-full flex flex-col items-center text-center">
            {lang === 'en' ? (
              <>
                <div ref={groomRef} className="will-change-transform">
                  <motion.h1
                    key="en-groom"
                    initial={{ opacity: 0, y: 36, scale: 1.08, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.05, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="font-miofarin text-[38px] min-[375px]:text-[45px] min-[410px]:text-[50px] sm:text-[98px] lg:text-[138px] leading-[1.02] text-[#AB5626]/75 select-none"
                  >
                    {weddingData.hero.groomEn}
                  </motion.h1>
                </div>

                <div ref={wedsRef} className="my-0.5 min-[375px]:my-1 sm:my-1.5 z-10 will-change-transform">
                  <motion.span
                    key="en-weds"
                    initial={{ opacity: 0, scale: 0.72, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="block font-signature text-[26px] min-[375px]:text-[32px] min-[410px]:text-[36px] sm:text-[74px] lg:text-[104px] leading-[0.95] text-[#AB5626]/80 select-none"
                  >
                    {weddingData.hero.wedsEn}
                  </motion.span>
                </div>

                <div ref={brideRef} className="will-change-transform">
                  <motion.h2
                    key="en-bride"
                    initial={{ opacity: 0, y: 36, scale: 1.08, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.05, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
                    className="font-miofarin text-[38px] min-[375px]:text-[45px] min-[410px]:text-[50px] sm:text-[98px] lg:text-[138px] leading-[1.02] text-[#AB5626]/75 select-none"
                  >
                    {weddingData.hero.brideEn}
                  </motion.h2>
                </div>
              </>
            ) : (
              <>
                <div ref={groomRef} className="will-change-transform">
                  <motion.h1
                    key="gu-groom"
                    initial={{ opacity: 0, y: 34, scale: 1.06, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.0, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="font-gujarati font-bold text-[24px] min-[375px]:text-[30px] min-[410px]:text-[34px] sm:text-[64px] lg:text-[88px] leading-[1.2] text-[#AB5626]/90 select-none"
                  >
                    {weddingData.hero.groomGu}
                  </motion.h1>
                </div>

                <div ref={wedsRef} className="my-1 min-[375px]:my-1.5 sm:mt-2 sm:mb-4 lg:mt-2 lg:mb-6 z-10 will-change-transform">
                  <motion.span
                    key="gu-weds"
                    initial={{ opacity: 0, scale: 0.78, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="block w-full text-center font-gujarati not-italic font-semibold text-[15px] min-[375px]:text-[18px] sm:text-[32px] lg:text-[42px] leading-[1.3] text-[#5F250F]/85 select-none"
                  >
                    {weddingData.hero.wedsGu}
                  </motion.span>
                </div>

                <div ref={brideRef} className="will-change-transform">
                  <motion.h2
                    key="gu-bride"
                    initial={{ opacity: 0, y: 34, scale: 1.06, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.0, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
                    className="font-gujarati font-bold text-[24px] min-[375px]:text-[30px] min-[410px]:text-[34px] sm:text-[64px] lg:text-[88px] leading-[1.2] text-[#AB5626]/90 select-none"
                  >
                    {weddingData.hero.brideGu}
                  </motion.h2>
                </div>
              </>
            )}
          </div>
        </div>

        {/* ==================== TEMPLE ARCHITECTURE & EMBEDDED ARCH INVITATION ==================== */}
        <div
          ref={templeWrapRef}
          className="relative z-20 w-full -mt-[215px] min-[375px]:-mt-[245px] min-[420px]:-mt-[265px] sm:-mt-[410px] lg:-mt-[620px]"
        >
          {/* Brass Temple Spire + Animated "जय श्री राम" Saffron Flag mounted cleanly on dome kalash peak */}
          <div className="absolute left-[49.85%] -translate-x-1/2 -top-[68px] sm:-top-[96px] lg:-top-[122px] z-20 pointer-events-none select-none">
            <div className="relative w-[16px] sm:w-[22px] lg:w-[28px]">
              {/* Animated swallowtail banner wrapped directly onto shaft below spire spearhead */}
              <div className="absolute left-[42%] top-[23%] w-[56px] sm:w-[82px] lg:w-[112px] aspect-[3/2] z-10">
                <WavingFlagCanvas className="w-full h-full block" />
              </div>

              <img
                src={weddingData.framer.spireMobile}
                alt=""
                aria-hidden="true"
                className="md:hidden relative z-20 w-full h-auto block"
              />
              <img
                src={weddingData.framer.spireDesktop}
                alt=""
                aria-hidden="true"
                className="hidden md:block relative z-20 w-full h-auto block"
              />
            </div>
          </div>

          {/* Mobile Temple Scene clipped neatly to fit doorway content cleanly (no extra blank bottom tail) */}
          <div
            className="md:hidden w-full aspect-[876/2520] overflow-hidden"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
            }}
          >
            <img
              src={weddingData.framer.templeMobile}
              alt="Temple Wedding Entrance"
              className="w-full h-full object-cover object-top block select-none"
            />
          </div>

          {/* Original Desktop Temple Scene with soft bottom alpha feather into chhatri sky */}
          <img
            src={weddingData.framer.templeDesktop}
            alt="Temple Wedding Entrance"
            className="hidden md:block w-full h-auto block select-none"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
            }}
          />

          {/* Embedded Invitation Card directly inside the Temple Cream Archway */}
          <InvitationSection />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
