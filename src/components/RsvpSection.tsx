import React, { useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import weddingData from '@/data/wedding';

const GUEST_COUNTS = Array.from({ length: 50 }, (_, i) => i + 1);

const RsvpSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const [name, setName] = useState('');
  const [selectedEventId, setSelectedEventId] = useState('');
  const [guests, setGuests] = useState('1');
  const [errorMsg, setErrorMsg] = useState('');
  const [sentUrl, setSentUrl] = useState('');
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Normalize WhatsApp phone number (handles spaces or 10-digit numbers cleanly)
  const waPhone = useMemo(() => {
    const digits = weddingData.rsvp.whatsappNumber.replace(/\D/g, '');
    return digits.length === 10 ? `91${digits}` : digits;
  }, []);

  const buildWhatsAppUrl = (guestName: string) => {
    const matched = weddingData.timeline.events.find((ev) => ev.id === selectedEventId);
    const eventLabel = matched
      ? t(matched.titleGu, matched.titleEn)
      : t(weddingData.rsvp.allEventsGu, weddingData.rsvp.allEventsEn);
    const count = guests || '1';

    const text =
      lang === 'gu'
        ? `નમસ્કાર!\nહું *${guestName}*,\n*${eventLabel}* માં *${count}* વ્યક્તિ સાથે ઉપસ્થિત રહીશ.\n\nચિ. રજનેશ સંગ ચિ. કિંજલ`
        : `Namaste!\nI, *${guestName}*,\nwould love to attend *${eventLabel}* with *${count}* guest(s).\n\nRajnesh weds Kinjal`;

    return `https://wa.me/${waPhone}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();

    if (!trimmed) {
      setErrorMsg(
        t('કૃપા કરીને પહેલા આપનું નામ લખો.', 'Please enter your name first.')
      );
      setSentUrl('');
      nameInputRef.current?.focus();
      return;
    }

    setErrorMsg('');
    const url = buildWhatsAppUrl(trimmed);
    setSentUrl(url);

    const opened = window.open(url, '_blank', 'noopener,noreferrer');
    if (!opened) {
      window.location.href = url;
    }
  };

  return (
    <section
      id="rsvp"
      className="relative w-full bg-[#FFF4EA] py-8 sm:py-10 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[570px] mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-[0_12px_36px_rgba(95,37,15,0.08)] border border-[#5F250F]/12"
      >
        <h2
          className={`text-left text-lg sm:text-xl font-bold text-[#5F250F] mb-4 ${
            lang === 'gu' ? 'font-gujarati' : 'font-sans'
          }`}
        >
          {t(weddingData.rsvp.headingGu, weddingData.rsvp.headingEn)}
        </h2>

        <form onSubmit={handleSubmit} noValidate className="space-y-3">
          {/* Full Name input */}
          <div>
            <input
              ref={nameInputRef}
              type="text"
              aria-label={t(weddingData.rsvp.namePlaceholderGu, weddingData.rsvp.namePlaceholderEn)}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errorMsg) setErrorMsg('');
              }}
              placeholder={t(weddingData.rsvp.namePlaceholderGu, weddingData.rsvp.namePlaceholderEn)}
              className={`w-full px-4 py-3 rounded-xl bg-[#F6F4F1] border text-[15px] sm:text-sm text-[#5F250F] placeholder:text-[#5F250F]/45 focus:outline-none ${
                errorMsg
                  ? 'border-[#AB5626] ring-1 ring-[#AB5626]/30'
                  : 'border-[#5F250F]/15 focus:border-[#AB5626]'
              } ${lang === 'gu' ? 'font-gujarati' : 'font-sans'}`}
            />
            {errorMsg && (
              <p
                role="alert"
                className={`mt-1.5 text-xs text-[#AB5626] font-medium ${
                  lang === 'gu' ? 'font-gujarati' : 'font-sans'
                }`}
              >
                {errorMsg}
              </p>
            )}
          </div>

          {/* 2-Column side-by-side dropdowns matching reference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <select
              aria-label={t(weddingData.rsvp.eventPlaceholderGu, weddingData.rsvp.eventPlaceholderEn)}
              value={selectedEventId}
              onChange={(e) => setSelectedEventId(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl bg-[#F6F4F1] border border-[#5F250F]/15 text-[15px] sm:text-sm text-[#5F250F] focus:outline-none focus:border-[#AB5626] ${
                lang === 'gu' ? 'font-gujarati' : 'font-sans'
              }`}
            >
              <option value="">
                {t(weddingData.rsvp.eventPlaceholderGu, weddingData.rsvp.eventPlaceholderEn)}
              </option>
              <option value="all">
                {t(weddingData.rsvp.allEventsGu, weddingData.rsvp.allEventsEn)}
              </option>
              {weddingData.timeline.events.map((ev) => (
                <option key={ev.id} value={ev.id}>
                  {t(ev.titleGu, ev.titleEn)}
                </option>
              ))}
            </select>

            <select
              aria-label={t(weddingData.rsvp.guestsPlaceholderGu, weddingData.rsvp.guestsPlaceholderEn)}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl bg-[#F6F4F1] border border-[#5F250F]/15 text-[15px] sm:text-sm text-[#5F250F] focus:outline-none focus:border-[#AB5626] ${
                lang === 'gu' ? 'font-gujarati' : 'font-sans'
              }`}
            >
              {GUEST_COUNTS.map((num) => (
                <option key={num} value={String(num)}>
                  {num} {t('વ્યક્તિ', num === 1 ? 'Guest' : 'Guests')}
                </option>
              ))}
            </select>
          </div>

          {/* Vibrant WhatsApp Green CTA Button (#25D366) — always active & clickable */}
          <button
            type="submit"
            className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5B] active:scale-[0.99] text-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className={lang === 'gu' ? 'font-gujarati' : 'font-sans'}>
              {t(weddingData.rsvp.buttonGu, weddingData.rsvp.buttonEn)}
            </span>
          </button>

          {/* Direct fallback link if popup blocker intercepted window.open */}
          {sentUrl && (
            <p className={`text-center text-xs text-[#5F250F]/75 pt-1 ${lang === 'gu' ? 'font-gujarati' : 'font-sans'}`}>
              {t('WhatsApp ન ખુલ્યું હોય તો ', "Didn't open? ")}
              <a
                href={sentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#1EBE5B] underline"
              >
                {t('અહીં ક્લિક કરો', 'Tap here to open WhatsApp')}
              </a>
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default RsvpSection;
