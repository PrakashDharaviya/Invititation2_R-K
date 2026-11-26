// ============================================================
// SINGLE SOURCE OF TRUTH — src/data/wedding.ts
// Edit ALL text, dates, times, names, venues, contacts, and
// image paths here without touching any components.
// ============================================================

import heroTempleImg from '@/assets/scenes/hero-temple.jpg';
import chhatriPeacocksImg from '@/assets/scenes/chhatri-peacocks.jpg';
import floralMandapImg from '@/assets/scenes/floral-mandap.jpg';
import footerElephantImg from '@/assets/scenes/footer-elephant.jpg';
import floralCornerImg from '@/assets/scenes/floral-corner.jpg';
import coupleSampleImg from '@/assets/couple.jpg';
import gallery1Img from '@/assets/gallery/1.jpg';
import gallery2Img from '@/assets/gallery/2.jpg';
import gallery3Img from '@/assets/gallery/3.jpg';
import gallery4Img from '@/assets/gallery/4.jpg';
import gallery5Img from '@/assets/gallery/5.jpg';
import gallery6Img from '@/assets/gallery/6.jpg';
import krissFluteAudio from '@/assets/audio/Kriss_Flute.mp3';

export type Language = 'gu' | 'en';

export interface WeddingEvent {
  id: string;
  dayNumber: 1 | 2;
  titleEn: string;
  titleGu: string;
  dayEn: string;
  dayGu: string;
  dateEn: string;
  dateGu: string;
  placeEn: string;
  placeGu: string;
  timeEn: string;
  timeGu: string;
}

export interface VenueItem {
  key: 'khimrana' | 'dhrol';
  tabEn: string;
  tabGu: string;
  nameEn: string;
  nameGu: string;
  addressEn: string;
  addressGu: string;
  mapQuery: string;
  mapEmbedUrl: string;
}

export interface ThingToKnowItem {
  id: 'hashtag' | 'weather' | 'staff' | 'parking';
  titleEn: string;
  titleGu: string;
  descriptionEn: string;
  descriptionGu: string;
}

export const weddingData = {
  // ---- FEATURES ----
  features: {
    // Set true to show 3D temple doors before the Hero; false matches reference instant Hero entry
    enableIntroDoors: false,
  },

  // ---- ASSETS (Bundled via ES imports + /public/assets/ user overrides) ----
  assets: {
    music: krissFluteAudio,
    // Swap /public/assets/couple.jpg or update directly here
    couplePhoto: coupleSampleImg,
    coupleFallback: coupleSampleImg,
    ogPreview: '/assets/og-preview.jpg',
    // Bundled scenic illustrations
    heroScene: heroTempleImg,
    chhatriPeacocksScene: chhatriPeacocksImg,
    floralMandapScene: floralMandapImg,
    footerElephantScene: footerElephantImg,
    floralCornerScene: floralCornerImg,
    // Photo wheel / gallery (replace src/assets/gallery/1..6.jpg or point to /assets/gallery/*.jpg)
    gallery: [
      gallery1Img,
      gallery2Img,
      gallery3Img,
      gallery4Img,
      gallery5Img,
      gallery6Img,
    ],
  },

  // ---- INTRO GATE (when enableIntroDoors is true) ----
  introGate: {
    topInvocationGu: 'શ્રી ગણેશાય નમઃ',
    topInvocationEn: 'Shree Ganeshay Namah',
    buttonGu: 'ખોલવા માટે ટેપ કરો',
    buttonEn: 'Tap to Open',
  },

  // ---- SECTION 1: HERO / TEMPLE ----
  hero: {
    invocationGu: 'શ્રી ગણેશાય નમઃ  |  શ્રી ચામુંડા માં  |  શ્રી સુરાપુરા દાદા',
    invocationEn: 'Shree Ganeshay Namah  |  Shree Chamunda Maa  |  Shree Surapura Dada',
    groomEn: 'Rajnesh',
    wedsEn: 'weds',
    brideEn: 'Kinjal',
    groomGu: 'ચિ. રજનેશ',
    wedsGu: 'સંગ',
    brideGu: 'ચિ. કિંજલ',
    coupleLineGu: 'ચિ. રજનેશ  સંગ  ચિ. કિંજલ',
    coupleLineEn: 'Rajnesh weds Kinjal',
    // TODO: Update exact date when finalized
    dateDisplayEn: '16th Jan 2027',
    dateDisplayGu: 'તા. ૧૬ જાન્યુઆરી ૨૦૨૭',
  },

  // ---- SECTION 2: INVITATION / PARENTS ----
  invitation: {
    shlokaLine: '॥ શ્રી ગણેશાય નમઃ ॥',
    en: {
      groomParents: 'Shri Dayabhai Kurjibhai Mandaviya & Smt. Bhanuben Mandaviya',
      requestLine:
        'Cordially request the honor of your presence at the wedding celebration of our beloved son',
      groomName: 'Rajnesh',
      ampersand: 'and',
      brideName: 'Kinjal',
      daughterOfLabel: 'Daughter of',
      brideParents: 'Shri Yogeshbhai Nakum & Smt. Sarasvatiben Nakum',
      eventsIntro: 'On the following events',
    },
    gu: {
      opening:
        'સહર્ષ ખુશાલી સાથે જણાવવાનું કે અમારા કુળદેવી શ્રી ચામુંડા માતાજીની તથા સુરાપુરા દાદાની અસીમ કૃપાથી',
      groomParents: 'અ.સૌ. ભાનુબેન તથા શ્રી ડાયાભાઈ કુરજીભાઈ માંડવિયાના સુપુત્ર',
      groomName: 'ચિ. રજનેશ',
      middleConnector: 'ના શુભ લગ્ન',
      brideParents: 'અ.સૌ. સરસ્વતીબેન તથા શ્રી યોગેશભાઈ નકુમની સુપુત્રી',
      brideName: 'ચિ. કિંજલ',
      // TODO: Update exact date when finalized
      dateLine: 'સાથે તા. ૧૬ જાન્યુઆરી ૨૦૨૭ ના શુભ દિને નિરધારેલ છે.',
      blessing:
        'તો હૈયાના હેતે આપની હાજરીના તોરણે પરિણય જીવનના પવિત્ર પથિક બનતા નવયુગલને અંતરના આશીર્વાદ આપવા અમારું ભાવભર્યું નિમંત્રણ છે.',
      eventsIntro: 'શુભ પ્રસંગોની વિગત',
    },
  },

  // ---- SECTION 3: WEDDING TIMELINE ----
  timeline: {
    headingEn: 'Wedding Celebration Timeline',
    headingMobileEn: 'Wedding Timeline',
    headingGu: 'શુભ લગ્ન પ્રસંગો',
    subtextEn: "Mark Your Calendars, We Can't Wait to Celebrate",
    subtextGu: 'આપની શુભ ઉપસ્થિતિથી અમારા આનંદમાં વધારો કરશો',
    moreDetailsEn: 'More details below',
    moreDetailsGu: 'વધુ વિગત નીચે',
    // TODO: Confirm exact dates & timings below
    events: [
      {
        id: 'mandap',
        dayNumber: 1,
        titleEn: 'Mandap Muhurat',
        titleGu: 'મંડપ મુહૂર્ત',
        dayEn: 'Friday',
        dayGu: 'શુક્રવાર',
        dateEn: '15th Jan 2027',
        dateGu: '૧૫ જાન. ૨૦૨૭',
        placeEn: 'Khimrana, Jamnagar',
        placeGu: 'ખીમરાણા, જામનગર',
        timeEn: '8:30 AM Onwards',
        timeGu: 'સવારે ૮:૩૦ થી',
      },
      {
        id: 'mamera',
        dayNumber: 1,
        titleEn: 'Ruda Mamera',
        titleGu: 'રૂડા મામેરા',
        dayEn: 'Friday',
        dayGu: 'શુક્રવાર',
        dateEn: '15th jan 2027',
        dateGu: '૧૫ જાન. ૨૦૨૭',
        placeEn: 'Khimrana, Jamnagar',
        placeGu: 'ખીમરાણા, જામનગર',
        timeEn: '11:30 AM Onwards',
        timeGu: 'બપોરે ૧૧:૩૦ થી',
      },
      {
        id: 'bhojan',
        dayNumber: 1,
        titleEn: 'Bhojan',
        titleGu: 'ભોજન સમારંભ',
        dayEn: 'Friday',
        dayGu: 'શુક્રવાર',
        dateEn: '15th Jan 2027',
        dateGu: '૧૫ જાન. ૨૦૨૭',
        placeEn: 'Khimrana, Jamnagar',
        placeGu: 'ખીમરાણા, જામનગર',
        timeEn: '12:30 PM Onwards',
        timeGu: 'બપોરે ૧૨:૩૦ થી',
      },
      {
        id: 'dandiya',
        dayNumber: 1,
        titleEn: 'Dandiya Raas',
        titleGu: 'દાંડિયા રાસ',
        dayEn: 'Friday',
        dayGu: 'શુક્રવાર',
        dateEn: '15th Jan 2027',
        dateGu: '૧૫ જાન. ૨૦૨૭',
        placeEn: 'Khimrana, Jamnagar',
        placeGu: 'ખીમરાણા, જામનગર',
        timeEn: '7:30 PM Onwards',
        timeGu: 'સાંજે ૭:૩૦ થી',
      },
      {
        id: 'jaan',
        dayNumber: 2,
        titleEn: 'Jaan Prasthan',
        titleGu: 'જાન પ્રસ્થાન',
        dayEn: 'Saturday',
        dayGu: 'શનિવાર',
        dateEn: '16th Jan 2027',
        dateGu: '૧૬ જાન. ૨૦૨૭',
        placeEn: 'Khimrana → Dhrol',
        placeGu: 'ખીમરાણા → ધ્રોલ',
        timeEn: '7:00 AM Onwards',
        timeGu: 'સવારે ૭:૦૦ કલાકે',
      },
      {
        id: 'shaadi',
        dayNumber: 2,
        titleEn: 'Hast Melap',
        titleGu: 'હસ્ત મેળાપ',
        dayEn: 'Saturday',
        dayGu: 'શનિવાર',
        dateEn: '16th Jan 2027',
        dateGu: '૧૬ જાન. ૨૦૨૭',
        placeEn: 'Dhrol, Jamnagar',
        placeGu: 'ધ્રોલ, જામનગર',
        timeEn: '10:30 AM Onwards',
        timeGu: 'સવારે ૧૦:૩૦ કલાકે',
      },
    ] as WeddingEvent[],
  },

  // ---- SECTION 4: MEET THE BRIDE & GROOM ----
  meetCouple: {
    kickerEn: 'Meet the',
    kickerGu: 'પરિચય',
    headingEn: 'BRIDE & GROOM',
    headingGu: 'વર અને વધૂ',
    messageEn:
      'Our hearts are full and our smiles wide. Come celebrate our love, share our joy, and bless us as we begin this new journey together.',
    messageGu:
      'અમારા હૈયામાં અપાર આનંદ છે અને ચહેરા પર સ્મિત છે. અમારા પ્રેમ, સ્નેહ અને ખુશીની આ ઉજવણીમાં સહભાગી થઈને નવજીવનની શુભ શરૂઆત માટે અમને અંતરના આશીર્વાદ આપશો.',
    almostTimeEn: 'Almost time to celebrate',
    almostTimeGu: 'ઉજવણીની શુભ ઘડી નજીક છે',
  },

  // ---- SECTION 5: VENUE + MAP ----
  venuesSection: {
    headingEn: 'Looking forward to see you',
    headingGu: 'શુભ પ્રસંગ સ્થળ',
    tapOverlayEn: 'Tap to interact with map',
    tapOverlayGu: 'નકશો જોવા માટે ટેપ કરો',
    nearbyLabelEn: 'Nearby Location',
    nearbyLabelGu: 'નજીકનું સ્થળ',
    openMapsEn: 'Open in Google Maps',
    openMapsGu: 'Google Maps માં ખોલો',
    copiedEn: 'Address copied!',
    copiedGu: 'સરનામું કોપી થયું!',
    // TODO: Update exact Dhrol lagna sthal name & address and map pins
    locations: [
      {
        key: 'khimrana',
        tabEn: 'Location 1 · Khimrana',
        tabGu: 'સ્થળ ૧ · ખીમરાણા',
        nameEn: 'Khimrana (Mandap to Dandiya)',
        nameGu: 'ખીમરાણા (મંડપ થી દાંડિયા)',
        addressEn: 'Near Khijda Mama, Morawadi, Khimrana, Tal. & Dist. Jamnagar, Gujarat',
        addressGu: 'ખીજડા મામાની બાજુમાં, મોરાવાડી, ખીમરાણા, તા.જી. જામનગર, ગુજરાત',
        mapQuery: 'Khimrana, Jamnagar',
        mapEmbedUrl:
          'https://maps.google.com/maps?q=Khimrana,+Jamnagar,+Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed',
      },
      {
        key: 'dhrol',
        tabEn: 'Location 2 · Dhrol',
        tabGu: 'સ્થળ ૨ · ધ્રોલ',
        nameEn: 'Dhrol (Shubh Lagna)',
        nameGu: 'ધ્રોલ (શુભ લગ્ન)',
        addressEn: 'Shubh Lagna Sthal, Dhrol, Dist. Jamnagar, Gujarat',
        addressGu: 'શુભ લગ્ન સ્થળ, ધ્રોલ, જિ. જામનગર, ગુજરાત',
        mapQuery: 'Dhrol, Jamnagar',
        mapEmbedUrl:
          'https://maps.google.com/maps?q=Dhrol,+Jamnagar,+Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed',
      },
    ] as VenueItem[],
  },

  // ---- SECTION 6: RSVP VIA WHATSAPP ----
  rsvp: {
    headingEn: 'Please confirm your presence',
    headingGu: 'આપની ઉપસ્થિતિ જણાવશો',
    subheadingEn: 'RSVP via WhatsApp',
    subheadingGu: 'WhatsApp દ્વારા RSVP',
    namePlaceholderEn: 'Full Name',
    namePlaceholderGu: 'આપનું પૂરું નામ',
    eventPlaceholderEn: 'Select Event',
    eventPlaceholderGu: 'પ્રસંગ પસંદ કરો',
    allEventsEn: 'All Events',
    allEventsGu: 'બધા પ્રસંગો',
    guestsPlaceholderEn: 'No. of People',
    guestsPlaceholderGu: 'વ્યક્તિની સંખ્યા',
    buttonEn: 'Send via WhatsApp',
    buttonGu: 'WhatsApp પર મોકલો',
    // TODO: Confirm RSVP WhatsApp number
    whatsappNumber: '919824935013',
  },

  // ---- SECTION 7: THINGS TO KNOW ----
  thingsToKnow: {
    headingEn: 'Things to know',
    headingGu: 'જાણવા જેવું',
    subtextEn:
      "To help you feel at ease and enjoy every moment of the celebrations, we've gathered a few thoughtful details we'd love for you to know before the big day",
    subtextGu:
      'ઉજવણીની દરેક ક્ષણનો આપ નિશ્ચિંતપણે આનંદ માણી શકો તે માટે થોડી ઉપયોગી વિગતો અહીં રજૂ કરી છે',
    // TODO: Confirm Hashtag, Weather, Staff/Drivers, Parking copy
    items: [
      {
        id: 'hashtag',
        titleEn: 'Hashtag',
        titleGu: 'હેશટેગ',
        descriptionEn: 'Please use #RajneshWedsKinjal when posting photos',
        descriptionGu: 'ફોટા શેર કરતી વખતે #RajneshWedsKinjal હેશટેગ વાપરશો',
      },
      {
        id: 'weather',
        titleEn: 'Weather',
        titleGu: 'હવામાન',
        descriptionEn: 'Pleasant & sunny weather around 24–28°C at the venue',
        descriptionGu: 'પ્રસંગ સ્થળે સુખદ અને ખુશનુમા વાતાવરણ (૨૪–૨૮°C) રહેશે',
      },
      {
        id: 'staff',
        titleEn: 'Staff / Drivers',
        titleGu: 'સ્ટાફ / ડ્રાઇવર',
        descriptionEn: 'Comfortable rest & refreshment arrangements near the venue',
        descriptionGu: 'ડ્રાઇવર અને સ્ટાફ માટે સ્થળ નજીક વિશ્રામ અને ભોજન વ્યવસ્થા છે',
      },
      {
        id: 'parking',
        titleEn: 'Parking',
        titleGu: 'પાર્કિંગ',
        descriptionEn: 'Spacious parking available at the venue for all guests',
        descriptionGu: 'મહેમાનો માટે પ્રસંગ સ્થળે પાર્કિંગની પૂરતી સુવિધા ઉપલબ્ધ છે',
      },
    ] as ThingToKnowItem[],
  },

  // ---- SECTION 8: COUNTDOWN ----
  countdown: {
    headingEn: 'The countdown begins',
    headingGu: 'શુભ ઘડીની ગણતરી',
    // TODO: Update exact Hasta Melap date/time (IST)
    targetIsoIST: '2027-01-16T10:30:00+05:30',
    subtextEn:
      'Our families are excited that you are able to join us in celebrating what we hope will be one of the happiest days of our lives',
    subtextGu:
      'અમારા જીવનના આ અત્યંત આનંદમય દિવસની ઉજવણીમાં આપ સહપરિવાર પધારશો એની અમને અત્યંત ખુશી છે',
    completedText: 'શુભ લગ્ન સંપન્ન 🙏',
  },

  // ---- SECTION 9: FOOTER ----
  footer: {
    greetingGu: 'આપની પધરામણીની રાહ જોઈશું 🙏',
    greetingEn: 'Looking forward to see you 🙏',
    nimantrakLabelGu: 'નિમંત્રક',
    nimantrakLabelEn: 'Hosted By',
    nimantrakNameGu: 'શ્રી ડાયાભાઈ કુરજીભાઈ માંડવિયા',
    nimantrakNameEn: 'Shri Dayabhai Kurjibhai Mandaviya',
    phones: [
      { display: '98249 35013', tel: '+919824935013' },
      { display: '79845 47903', tel: '+917984547903' },
      { display: '90237 76215', tel: '+919023776215' },
    ],
    familyTitleGu: 'નિમંત્રક પરિવાર (માંડવિયા)',
    familyTitleEn: 'Mandaviya Family',
    familyListGu: [
      'સ્વ. કુરજીભાઈ મનજીભાઈ માંડવિયા',
      'સ્વ. દેવીબેન કુરજીભાઈ માંડવિયા',
      'શ્રી ડાયાભાઈ – અ.સૌ. ભાનુબેન માંડવિયા',
      'શ્રી દિનેશભાઈ – અ.સૌ. ધીરુબેન માંડવિયા',
      'શ્રી રતિલાલ – અ.સૌ. હેમલતાબેન માંડવિયા',
      'શ્રી દયાળજીભાઈ – અ.સૌ. હરીલાબેન માંડવિયા',
    ],
    familyListEn: [
      'Late Kurjibhai Manjibhai Mandaviya',
      'Late Deviben Kurjibhai Mandaviya',
      'Shri Dayabhai – Smt. Bhanuben Mandaviya',
      'Shri Dineshbhai – Smt. Dhiruben Mandaviya',
      'Shri Ratilal – Smt. Hemlataben Mandaviya',
      'Shri Dayaljibhai – Smt. Harilaben Mandaviya',
    ],
    wishesTitleGu: 'દર્શનાભિલાષી (માંડવિયા પરિવાર)',
    wishesTitleEn: 'With Best Wishes (Mandaviya)',
    wishesListGu: [
      'શ્રી નિકુંજ દિનેશભાઈ',
      'શ્રી નિમેષ દિનેશભાઈ',
      'શ્રી રાજ દિનેશભાઈ',
      'શ્રી હિતેન રતિલાલ',
      'શ્રી દિવ્યેશ રતિલાલ',
      'શ્રી નિરવ રતિલાલ',
      'શ્રી રિતવ દયાળજીભાઈ',
    ],
    wishesListEn: [
      'Nikunj Dineshbhai',
      'Nimesh Dineshbhai',
      'Raj Dineshbhai',
      'Hiten Ratilal',
      'Divyesh Ratilal',
      'Nirav Ratilal',
      'Ritav Dayaljibhai',
    ],
    sponsors: [
      {
        nameGu: 'બજરંગ કન્સ્ટ્રક્શન (જામનગર)',
        nameEn: 'Bajrang Construction (Jamnagar)',
        detailGu: 'ડાયાભાઈ 98247 35013, દયાળભાઈ 96878 66724',
        detailEn: 'Dayabhai 98247 35013, Dayalbhai 96878 66724',
      },
      {
        nameGu: 'બજરંગ સ્ટુડિયો (જામનગર)',
        nameEn: 'Bajrang Studio (Jamnagar)',
        detailGu: '98248 40032',
        detailEn: '98248 40032',
      },
    ],
  },
};

export default weddingData;
