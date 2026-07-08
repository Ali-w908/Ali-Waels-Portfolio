/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          hero: 'var(--bg-hero)',
          main: 'var(--bg-main)',
          footer: 'var(--bg-footer)',
          text: 'var(--text-primary)',
          footerText: 'var(--text-footer)',
          accent: 'var(--accent)',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'google': '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)',
        'google-hover': '0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
