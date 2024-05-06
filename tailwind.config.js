/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-130%)' },
        },
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xs: '100%',
          lg: '1440px',
        },
      },
      colors: {
        red: '#F4013B',
        'dark-red': '#9A0017',
        'bright-red': '#F4013B',
        yellow: '#F7B200',
        orange: '#FD7E25',
        'light-blue': '#0091B6',
        'dark-blue': '#005975',
        dark: '#1A1A1A',
        black: '#181818',
        'black-transparent': 'rgba(0, 0, 0, 0.5)',
        'off-white': '#FBF7F7',
        gray: '#827E7E',
      },

      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        syntax: 'TrueSyntax',
      },
      fontSize: {
        // 10px
        '3xs': [
          '0.5rem',
          {
            lineHeight: '1.1rem',
            letterSpacing: '0.03em',
          },
        ],
        // 12px
        xxs: [
          '0.75rem',
          {
            lineHeight: '1.3rem',
            letterSpacing: '0.03em',
          },
        ],
        // 14px
        sm: [
          '0.875rem',
          {
            lineHeight: '1.4375rem',
            letterSpacing: '0.03em',
          },
        ],
        // 16px
        md: [
          '1rem',
          {
            lineHeight: '1.5625rem',
            letterSpacing: '0.03em',
          },
        ],
        // 20px
        lg: [
          '1.25rem',
          {
            lineHeight: '2rem',
            letterSpacing: '0.03em',
          },
        ],
        // 24px
        xl: [
          '1.5rem',
          {
            lineHeight: '2.5rem',
            letterSpacing: '0.03em',
          },
        ],
        // 36px
        '2xl': [
          '2.2rem',
          {
            lineHeight: '2.75rem',
            letterSpacing: '0.03em',
          },
        ],
        // 48px
        '3xl': [
          '3rem',
          {
            lineHeight: '3.375rem',
            letterSpacing: '0.03em',
          },
        ],
        // 64px
        '4xl': [
          '3.75rem',
          {
            lineHeight: '1',
          },
        ],
      },
    },
  },
  plugins: [],
};
