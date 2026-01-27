/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          brand: '#212121',
        },
        accent: {
          highlight: '#5755EE',
          highlightLight: 'rgba(87, 85, 238, 0.08)',
        },
        text: {
          primary: '#ececec',
          secondary: '#9b9b9b',
          inverse: '#171717',
          onAccent: '#ffffff',
        },
        background: {
          base: '#212121',
          surface: '#ffffff',
          card: 'transparent',
        },
        border: {
          default: '#454545',
          accent: '#5755EE',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        display: ['48px', { lineHeight: '40px', fontWeight: '510' }],
        h1: ['32px', { lineHeight: '40px', fontWeight: '510' }],
        h2: ['20px', { lineHeight: '28px', fontWeight: '400' }],
        body: ['16px', { lineHeight: '24px', fontWeight: '400' }],
        small: ['14px', { lineHeight: '20px', fontWeight: '400' }],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '40px',
        '3xl': '48px',
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '16px',
        xl: '24px',
      },
    },
  },
  plugins: [],
}
