import React, { useState, useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LanguageProvider } from '@/context/LanguageContext';
import weddingData from '@/data/wedding';
import IntroGate from '@/components/IntroGate';
import HeroSection from '@/components/HeroSection';
import InvitationSection from '@/components/InvitationSection';
import TimelineSection from '@/components/TimelineSection';
import MeetCoupleSection from '@/components/MeetCoupleSection';
import VenueSection from '@/components/VenueSection';
import RsvpSection from '@/components/RsvpSection';
import ThingsToKnowSection from '@/components/ThingsToKnowSection';
import CountdownSection from '@/components/CountdownSection';
import FooterSection from '@/components/FooterSection';
import MuteButton from '@/components/MuteButton';
import LanguageToggle from '@/components/LanguageToggle';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const [gateOpen, setGateOpen] = useState(!weddingData.features.enableIntroDoors);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userMutedRef = useRef(false);

  // Initialize background Krishna Flute audio once and start on load or first user tap
  useEffect(() => {
    const audio = new Audio(weddingData.assets.music);
    audio.loop = true;
    audio.volume = 0.4;
    audio.preload = 'auto';
    audioRef.current = audio;

    const syncPlaying = () => setIsMusicPlaying(!audio.paused && !audio.muted);
    audio.addEventListener('play', syncPlaying);
    audio.addEventListener('pause', syncPlaying);
    audio.addEventListener('volumechange', syncPlaying);

    if (!weddingData.features.enableIntroDoors) {
      audio.play().catch(() => {
        // Browser blocked autoplay until user interaction
      });
    }

    const handleFirstInteraction = (ev: Event) => {
      const target = ev.target as HTMLElement | null;
      if (target?.closest('[data-audio-toggle="true"]')) return;
      if (!userMutedRef.current && audioRef.current && audioRef.current.paused) {
        audioRef.current.muted = false;
        audioRef.current.play().catch(() => {});
      }
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };

    window.addEventListener('pointerdown', handleFirstInteraction, { passive: true });
    window.addEventListener('keydown', handleFirstInteraction, { passive: true });

    return () => {
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      audio.removeEventListener('play', syncPlaying);
      audio.removeEventListener('pause', syncPlaying);
      audio.removeEventListener('volumechange', syncPlaying);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const handleToggleMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused && !audio.muted) {
      userMutedRef.current = true;
      audio.pause();
      audio.muted = true;
      setIsMusicPlaying(false);
    } else {
      userMutedRef.current = false;
      audio.muted = false;
      audio
        .play()
        .then(() => setIsMusicPlaying(true))
        .catch(() => setIsMusicPlaying(false));
    }
  }, []);

  useEffect(() => {
    if (!gateOpen) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tick);
    };
  }, [gateOpen]);

  return (
    <LanguageProvider>
      {!gateOpen && (
        <IntroGate
          onOpen={() => setGateOpen(true)}
          audioRef={audioRef}
        />
      )}

      {gateOpen && (
        <div className="relative min-h-screen w-full bg-[#FFF4EA]">
          {/* Bottom-corner controls that never overlap Hero or section headers */}
          <LanguageToggle />
          <MuteButton isPlaying={isMusicPlaying} onToggle={handleToggleMusic} />

          {/* Full-bleed responsive experience matching rammandir.framer.website */}
          <main className="w-full overflow-x-hidden">
            <HeroSection />
            <InvitationSection />
            <TimelineSection />
            <MeetCoupleSection />
            <VenueSection />

            {/* Desktop: RSVP -> Things to Know | Mobile: Things to Know -> RSVP (exact reference order) */}
            <div className="flex flex-col">
              <div className="order-2 md:order-1">
                <RsvpSection />
              </div>
              <div className="order-1 md:order-2">
                <ThingsToKnowSection />
              </div>
            </div>

            <CountdownSection />
            <FooterSection />
          </main>
        </div>
      )}
    </LanguageProvider>
  );
};

export default App;
