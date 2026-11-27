/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Exact Framer template custom fonts (bundled from Rajnesh_Kinjal_Updated.zip)
        miofarin: ['"Miofarin Regular"', '"Alike Angular"', 'serif'],
        signature: ['"Brother Signature Regular"', '"Alex Brush"', 'cursive'],
        ivyora: ['"IvyOra Display"', 'serif'],
        gotham: ['"Gotham"', '"Inter"', 'sans-serif'],
        // Aliases kept compatible
        display: ['"IvyOra Display"', 'serif'],
        heroName: ['"Miofarin Regular"', 'serif'],
        script: ['"Brother Signature Regular"', 'cursive'],
        sans: ['"Gotham"', '"Inter"', 'sans-serif'],
        // Gujarati Unicode fonts
        gujarati: ['"Noto Serif Gujarati"', 'serif'],
        gujaratiSans: ['"Hind Vadodara"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
