/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spectral: {
          bg: '#1d242a',
          alt: '#2e3842',
          lighter: '#3a4652',
          accent: '#ed4933', // The classic Spectral red/orange
          accentHover: '#ef5e4a',
          text: '#ffffff',
          muted: '#a0a0a0',
        }
      },
      fontFamily: {
        spectral: ['"Open Sans"', 'sans-serif'], // Spectral usually uses Open Sans
        heading: ['"Open Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
