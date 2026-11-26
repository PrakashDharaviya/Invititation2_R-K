/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Reference display serifs ("Miofarin" / "IvyOra Display" matches)
        display: ['"Cormorant Garamond"', '"Alike Angular"', '"Alegreya"', 'serif'],
        // Reference flared serif for couple hero names
        heroName: ['"Alike Angular"', '"Cormorant Garamond"', 'serif'],
        // Reference signature script ("Brother Signature" match)
        script: ['"Alex Brush"', '"Great Vibes"', 'cursive'],
        // Reference clean sans ("Gotham" / "Inter" match)
        sans: ['"DM Sans"', '"Inter"', 'sans-serif'],
        // Gujarati Unicode fonts
        gujarati: ['"Noto Serif Gujarati"', 'serif'],
        gujaratiSans: ['"Hind Vadodara"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
