# Rajnesh weds Kinjal — Wedding Invitation

A mobile-first, animated temple-themed Gujarati & English wedding invitation built with React 18, Vite, TypeScript, Tailwind CSS, GSAP + ScrollTrigger, Motion, and Lenis.

## Run Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Edit Content (`src/data/wedding.ts`)

All wedding copy, dates, times, venues, RSVP WhatsApp number, family members, Things to Know details, and asset paths live in **one file**:

```
src/data/wedding.ts
```

Before publishing, search `src/data/wedding.ts` for `[MM]`, `[YYYY]`, `[TIME]`, `[LAGNA STHAL NAME & ADDRESS]`, `[TO BE PROVIDED]`, `[CONFIRM]`, and update `countdown.targetIsoIST` & `rsvp.whatsappNumber`.

## Replace Images & Music (`src/assets/` & `public/assets/`)

| File | Purpose |
|---|---|
| `src/assets/audio/Kriss_Flute.mp3` | Background flute music (plays automatically on load / first tap with bottom-right mute pill) |
| `src/assets/couple.jpg` | Framed portrait in **Meet the Bride & Groom** |
| `src/assets/gallery/1.jpg` ... `6.jpg` | Orbiting photo wheel images (WebP also supported — update imports in `src/data/wedding.ts`) |
| `src/assets/scenes/*.jpg` | Hero temple, floral corner, chhatri peacocks, floral mandap, and elephant footer artwork |
| `public/assets/og-preview.jpg` | Social / WhatsApp link preview image (`1200x630`) |

## Structure (`src/components/`)

- `IntroGate.tsx` — 3D swinging temple doors + petal burst + music trigger
- `HeroSection.tsx` — Layered parallax temple scene + couple names
- `InvitationSection.tsx` — 6 pendulum brass bells + staggered parent/couple invitation
- `TimelineSection.tsx` — Horizontal scrolling/pausable arch event cards
- `MeetCoupleSection.tsx` — Couple portrait + scroll-reveal message + photo marquee
- `CountdownSection.tsx` — Live IST countdown + post-wedding message
- `VenueSection.tsx` — Tabbed Khimrana & Dhrol Google Maps cards
- `RsvpSection.tsx` — WhatsApp RSVP form (`1–50` guests)
- `ThingsToKnowSection.tsx` — Hashtag, Weather, Staff/Drivers, Parking cards
- `FooterSection.tsx` — Nimantrak, tap-to-call numbers, Mandviya family list, sponsors
- `DesktopBackdrop.tsx` — Illustrated temple sides on desktop (`1440px`)

## Deploy to Vercel

```bash
npm run build
npx vercel --prod
```

Or import the repository into Vercel with framework preset **Vite** (`Build Command: npm run build`, `Output Directory: dist`).
