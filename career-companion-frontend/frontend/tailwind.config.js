/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#003366',
        secondary: '#006699',
        accent: '#0099CC',
        text: {
          DEFAULT: '#333333',
          muted: '#your-muted',
        },
        background: {
          DEFAULT: '#F4F4F4',
          secondary: '#F8F4EC',
        },
        success: '#your-success-color',
        error: '#your-error-color',
        warning: '#your-warning-color',
        info: '#your-info-color',
        // You can define more custom colors here
      },
      // You can also customize other theme values here, like spacing, font sizes, etc.
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.btn-primary': {
          backgroundColor: theme('colors.primary'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: '#004080',
            color: '#FFFFFF',
          },
        },
        '.btn-secondary': {
          backgroundColor: theme('colors.secondary'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: '#007ACC',
            color: '#FFFFFF',
          },
        },
        '.btn-accent': {
          backgroundColor: theme('colors.accent'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: '#00BFFF',
            color: '#FFFFFF',
          },
        },
        '.hover-general': {
          '&:hover': {
            backgroundColor: '#E0E0E0',
            color: '#003366',
          },
        },
        '.link': {
          color: theme('colors.blue.500'), // Example link color
          '&:hover': {
            backgroundColor: '#E0E0E0',
            color: '#003366',
          },
        },
        // You can define more custom components with hover states here
      });
    },
  ],
};
