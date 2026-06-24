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
        anti: {
          bg: '#ffffff',
          surface: '#f8f9fa',
          surfaceHover: '#f1f3f4',
          border: '#dadce0',
          text: '#202124',
          textMuted: '#5f6368',
          primary: '#1a73e8', // Google Blue
          primaryHover: '#174ea6',
          accentRed: '#ea4335',
          accentYellow: '#fbbc04',
          accentGreen: '#34a853',
          accentPurple: '#a142f4',
          accentCyan: '#12b5cb',
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
  plugins: [],
};
