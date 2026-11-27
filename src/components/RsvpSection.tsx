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
      className="relative w-full max-w-[1515px] mx-auto bg-[#FFEFE2] px-3 sm:px-8 overflow-hidden"
    >
      <div className="max-w-[1260px] mx-auto border-x border-[#DDA45D]/45 px-3 sm:px-8 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[340px] sm:max-w-[523px] lg:max-w-[580px] mx-auto bg-white rounded-[20px] p-5 sm:p-6 shadow-[0_12px_36px_rgba(95,37,15,0.08)] border border-[#E0E0E0]/70"
        >
          <h2
            className={`text-left text-[17px] sm:text-[19px] font-bold text-[#5F250F] mb-3.5 ${
              lang === 'gu' ? 'font-gujarati' : 'font-gotham'
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
                className={`w-full px-3.5 py-3 rounded-[12px] bg-white border text-[14px] text-[#5F250F] placeholder:text-[#5F250F]/45 focus:outline-none ${
                  errorMsg
                    ? 'border-[#AB5626] ring-1 ring-[#AB5626]/30'
                    : 'border-[#E0E0E0] focus:border-[#AB5626]'
                } ${lang === 'gu' ? 'font-gujarati' : 'font-gotham'}`}
              />
              {errorMsg && (
                <p
                  role="alert"
                  className={`mt-1.5 text-xs text-[#AB5626] font-medium ${
                    lang === 'gu' ? 'font-gujarati' : 'font-gotham'
                  }`}
                >
                  {errorMsg}
                </p>
              )}
            </div>

            {/* 2-Column Side-by-Side Dropdowns matching Framer RSVP Form */}
            <div className="grid grid-cols-2 gap-2 min-[375px]:gap-2.5">
              <select
                aria-label={t(weddingData.rsvp.eventPlaceholderGu, weddingData.rsvp.eventPlaceholderEn)}
                value={selectedEventId}
                onChange={(e) => setSelectedEventId(e.target.value)}
                className={`w-full px-2.5 min-[375px]:px-3 py-3 rounded-[12px] bg-white border border-[#E0E0E0] text-[12px] min-[375px]:text-[13px] sm:text-[14px] text-[#5F250F] focus:outline-none focus:border-[#AB5626] ${
                  lang === 'gu' ? 'font-gujarati' : 'font-gotham'
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
                className={`w-full px-2.5 min-[375px]:px-3 py-3 rounded-[12px] bg-white border border-[#E0E0E0] text-[12px] min-[375px]:text-[13px] sm:text-[14px] text-[#5F250F] focus:outline-none focus:border-[#AB5626] ${
                  lang === 'gu' ? 'font-gujarati' : 'font-gotham'
                }`}
              >
                {GUEST_COUNTS.map((num) => (
                  <option key={num} value={String(num)}>
                    {num} {t('વ્યક્તિ', num === 1 ? 'Guest' : 'Guests')}
                  </option>
                ))}
              </select>
            </div>

            {/* Vibrant WhatsApp Green CTA (#25D366) */}
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-[14px] bg-[#25D366] hover:bg-[#1EBE5B] active:scale-[0.99] text-white font-bold text-[15px] shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg fill="none" height="18" viewBox="0 0 24 24" width="18" aria-hidden="true">
                <path
                  d="M17.6 6.32A7.85 7.85 0 0012.05 4a7.94 7.94 0 00-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 003.85 1h.01a7.94 7.94 0 005.54-13.58zM12.05 18.4a6.6 6.6 0 01-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.6 6.6 0 1112.24-3.5 6.55 6.55 0 01-6.65 6.6zm3.6-4.93c-.2-.1-1.17-.58-1.35-.64-.18-.07-.32-.1-.45.1-.13.2-.5.64-.62.77-.11.13-.23.14-.43.05-.2-.1-.83-.31-1.58-.98a5.9 5.9 0 01-1.1-1.36c-.11-.2-.01-.3.09-.4.09-.09.2-.23.3-.35.1-.11.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.45-1.08-.61-1.48-.16-.39-.33-.33-.45-.34h-.38c-.13 0-.35.05-.53.25-.18.2-.7.68-.7 1.66 0 .98.71 1.93.81 2.06.1.13 1.4 2.14 3.4 3 .47.2.84.33 1.13.42.47.15.9.13 1.24.08.38-.06 1.17-.48 1.33-.94.17-.46.17-.86.12-.94-.05-.09-.18-.14-.38-.24z"
                  fill="currentColor"
                />
              </svg>
              <span className={lang === 'gu' ? 'font-gujarati' : 'font-gotham'}>
                {t(weddingData.rsvp.buttonGu, weddingData.rsvp.buttonEn)}
              </span>
            </button>

            {sentUrl && (
              <p className={`text-center text-xs text-[#5F250F]/75 pt-1 ${lang === 'gu' ? 'font-gujarati' : 'font-gotham'}`}>
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
      </div>
    </section>
  );
};

export default RsvpSection;
