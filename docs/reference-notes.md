# Reference Study Notes — `rammandir.framer.website`

> **Source studied:** `https://rammandir.framer.website/` (DOM, CSS tokens, Framer Motion appear specs, responsive breakpoints).  
> **Rule:** Zero images, fonts, or files are copied or hotlinked from `framerusercontent.com`. Every visual element is recreated using original SVGs, CSS, and Google Fonts, paired with client assets in `/public/assets/`.

---

## 1. Visual Design System

### Color Palette
| Role | Hex / RGB | Notes |
|---|---|---|
| **Primary Ink / Temple Maroon-Umber** | `#5F250F` (`rgb(95, 37, 15)`) | Main headings, body text, borders, ornament strokes |
| **Warm Terracotta / Saffron Accent** | `#AB5626` (`rgb(171, 86, 38)` / `rgba(171,86,38,0.72)`) | Subheadings, secondary labels, ampersand, day labels |
| **Antique Temple Gold** | `#DDA45D` (`rgb(221, 164, 93)`), `#E4BC83`, `#B37443` | Pillars, bells, ornaments, card borders, sun glow |
| **Warm Parchment / Sandstone Cream** | `#F7E8D4`, `#FFEFE2`, `#FFF0E3` | Hero sky/temple backdrop, card fills |
| **Crisp Ivory / White** | `#FFFFFF` / `#FFFDF9` | Section transitions, form inputs, clean contrast cards |
| **Subtle Hairline Border** | `rgba(95, 37, 15, 0.22)` | Card frames, section dividers |
| **WhatsApp CTA Green** | `#25D366` (`rgb(37, 211, 102)`) | RSVP "Send via WhatsApp" button |

### Typography
- **English Display Serif** *(reference: IvyOra Display / Alegreya / Alike Angular)* → Google Fonts **`Cormorant Garamond`** + **`Alike Angular`** + **`Alegreya`**
- **English Script (Couple Names)** *(reference: Brother Signature)* → Google Fonts **`Great Vibes`**
- **English Clean Sans (Labels / UI)** *(reference: Gotham Book / Medium)* → Google Fonts **`Montserrat`** / **`DM Sans`**
- **Gujarati Serif & Sans** → Google Fonts **`Noto Serif Gujarati`** + **`Hind Vadodara`**

### Responsive Layout Rule
- **Mobile (`360px`–`480px`)**: Full-width single column (`390px`–`431px` natural width).
- **Desktop (`1440px`)**: The invitation sits inside a centered narrow mobile-like column (`max-width: 450px`) framed over a full-bleed decorative illustrated temple/sky/mandala backdrop on the left and right sides.

---

## 2. Section-by-Section Layout & Animation Breakdown

### Section 1 — Hero / Temple (`1 — Hero & Invitation` → `Hero Banner`)
- **Structure & Layers (back to front):**
  1. `Sky Background`: warm sandstone-peach gradient (`#F7E8D4` → `#FFEFE2` → `#FFFFFF`).
  2. `Flocking Birds`: subtle animated silhouette gliding near top sky.
  3. `Sun`: warm golden solar disk (`scale: 1.5` initially, slow upward/downward scroll parallax).
  4. `Mountain`: layered warm sandstone mountain silhouettes (medium scroll parallax).
  5. `Cloud`: soft drifting clouds (`translateY` parallax).
  6. `Temple`: tall layered Ram Mandir–style multi-shikhara temple illustration (foreground scroll parallax).
  7. `Waving Flag`: saffron temple flag waving gently on top spire (`scale: 0.7 → 1` reveal).
  8. `Corner Decoration`: ornate gold corner flourishes.
  9. `Hero Content`: top invocation (`શ્રી ગણેશાય નમઃ | શ્રી ચામુંડા માં | શ્રી સુરાપુરા દાદા`), couple names (`Rajnesh` `weds` `Kinjal` in script + `ચિ. રજનેશ  સંગ  ચિ. કિંજલ` below), and bouncing `Scroll Arrow`.
- **Animations & Timing:**
  - Names fade and rise smoothly on load (`opacity: 0 → 1`, `y: 28 → 0`, duration `~1.0s`, staggered `0.15s`).
  - ScrollTrigger `scrub: true` parallax across sky/sun/mountain/clouds/temple layers at staggered speeds (`sun` fastest/deepest, `temple` slowest/foreground).

### Section 2 — Invitation / Parents (with Hanging Bells) (`2nd Hero Banner` / `Invitation Details`)
- **Structure:**
  - `Bells Frame`: 4–6 brass hanging bells on left & right sides (`Hanging Bell 1..6`).
  - `Ganpati Icon` + invocation heading.
  - Parent & couple invitation copy (English pattern + full Gujarati unicode invitation & blessing when Gujarati is active).
- **Animations & Timing:**
  - `Bells Frame`: enters with spring zoom-out (`scale: 1.6 → 1`, `type: 'spring'`, `bounce: 0`, `delay: 0.1`, `duration: 2.1s`).
  - `Hanging Bell 1..4`: fade in (`opacity: 0.001 → 1`, `delay: 0.7s`, `duration: 2s` spring); `Bell 5..6` (`delay: 2.0s`, `duration: 1.5s`).
  - Continuous pendulum swing (`transform-origin: 50% 0%`) at staggered durations (`2.8s`–`4.0s`) and delays; swing amplitude/speed intensifies dynamically while the user scrolls.
  - Text lines stagger in sequentially on scroll (`opacity: 0 → 1`, `y: 24px → 0`, `duration: 0.7s`, `stagger: 0.12s`).

### Section 3 — Wedding Timeline (`2 — Wedding Timeline`)
- **Heading:** `"Wedding Timeline"` / `"શુભ પ્રસંગો"` + subtext `"Mark Your Calendars, We Can't Wait to Celebrate"`.
- **Structure:**
  - Ornate `Pillar Backdrop`, `Mandala Decoration L & R`, `Peacock Ornament`, and `Timeline Ornament 1 & 2`.
  - 6 tall illustrated arch-top event cards (`width ~210–240px`, aspect ratio `~0.65`) displaying: Event Name, Day, Date, Place, Time, and `"More details below"`.
- **Animations & Timing:**
  - Heading & subtext reveal (`y: 32px → 0`, `opacity: 0 → 1`, `0.8s`).
  - Cards enter with subtle alternating tilt (`x: ±60px, y: 50px, rotate: ±10deg → 0`, `0.8s`) and glide in an infinite smooth horizontal marquee/carousel (pauses on hover/touch, plus manual next/prev/swipe).

### Section 4 — Meet the Bride & Groom (`3 — Meet the Couple`)
- **Heading:** `"Meet the"` + `"BRIDE & GROOM"` (`y: 110px, scale: 1.35 → y: 0, scale: 1`, `opacity: 0 → 1`).
- **Structure:**
  - Ornate temple-arch framed couple portrait (`/assets/couple.jpg` with clean SVG placeholder fallback).
  - Warm message card (`Message Card Frame`) with word-by-word / line-by-line scroll-triggered reveal (`"Our hearts are full and our smiles wide..."`).
  - Infinite auto-scrolling horizontal photo strip (`Photo Gallery`, `/assets/gallery/*.jpg`) with smooth CSS/GPU transform loop that pauses on hover/touch.

### Section 5 — Almost Time to Celebrate + Countdown (`4 — Location & Countdown` → `Countdown`)
- **Structure:**
  - Top ornament + `"Almost time to celebrate"` + `"The countdown begins"`.
  - 4-column live timer (`DAYS` | `HOURS` | `MINUTES` | `SECONDS`) with crisp serif numerals and uppercase sans labels (`10px`, `letter-spacing: 1px`).
  - Family excitement paragraph below + `Countdown Divider` + rotated bottom ornament (`rotate(180deg)`).
  - Post-wedding fallback: `"શુભ લગ્ન સંપન્ન 🙏"`.
- **Animations:** Reveal `y: 56px, scale: 0.94 → y: 0, scale: 1`, `opacity: 0 → 1`.

### Section 6 — Venue + Map (`Location Map`)
- **Structure:**
  - Tabbed venue selector (`Location 1: Khimrana` | `Location 2: Dhrol`).
  - `Location Frame`: embedded interactive Google Map with `"Tap to interact with map"` overlay pill (`rgba(0,0,0,0.6)`) so page scrolling stays smooth until tapped, venue name, full address, and `"Open in Google Maps"` button.
- **Animations:** Reveal `y: 56px, scale: 0.94 → 0, 1`.

### Section 7 — RSVP via WhatsApp (`RSVP Form`)
- **Structure:**
  - Heading `"Please confirm your presence"` / `"RSVP via WhatsApp"`.
  - Narrow rounded card (`max-width: 340px`): Name input, Select Event dropdown (6 events + All Events), No. of People (`1–50`), and WhatsApp green `#25D366` `"Send via WhatsApp"` button opening `wa.me/<number>?text=...`.
- **Animations:** Reveal `y: 56px, scale: 0.94 → 0, 1`.

### Section 8 — Things to Know (`Things to Know`)
- **Structure:**
  - Heading `"Things to know"` + warm intro subtext.
  - 4 icon rows separated by thin `rgba(95,37,15,0.22)` dividers:
    1. **Hashtag** (original camera/hashtag icon)
    2. **Weather** (original sun-cloud icon)
    3. **Staff / Drivers** (original hospitality/car-key icon)
    4. **Parking** (original parking/valet icon)
- **Animations:** Reveal `y: 56px, scale: 0.94 → 0, 1` with staggered rows.

### Section 9 — Footer (`Looking Forward Heading`)
- **Structure:**
  - `"Looking forward to see you"` + `"આપની પધરામણીની રાહ જોઈશું 🙏"`.
  - Nimantrak (`શ્રી ડાયાભાઈ કુરજીભાઈ માંડવિયા`) + tap-to-call buttons.
  - Compact, elegant family list (`માંડવિયા` elders & couples).
  - Sponsor credit line (`બજરંગ કન્સ્ટ્રક્શન (જામનગર) | બજરંગ સ્ટુડિયો (જામનગર) 98248 40032`).

### Extras
- **Opening Screen (`IntroGate`)**: Ornate 3D temple doors (`perspective: 1400px`, `rotateY(±112deg)`) + `"Tap to Open"`, marigold petal burst, starts `/assets/music.mp3`, persistent bottom-right Mute/Unmute toggle.
- **Language Toggle**: Floating `ગુજરાતી / English` toggle (default Gujarati).
- **Performance**: `transform` & `opacity` only, `loading="lazy"`, `prefers-reduced-motion` respected, Open Graph tags configured.

---

## 3. Verification Note
- Reference DOM/CSS/Framer animations were inspected directly via HTTP fetch (`rammandir.framer.website`). Automated Chrome DevTools screenshots were unavailable in this environment because Chrome remote debugging (`DevToolsActivePort`) was not active.
