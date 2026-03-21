/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#F0F4F9',
          100: '#D9E3EF',
          200: '#B3C7DF',
          300: '#8DAACC',
          400: '#678EBA',
          500: '#3E6FA0',
          600: '#2E5580',
          700: '#1F3D60',
          800: '#132840',
          900: '#0B1A2B',
          950: '#060E18',
        },
        aqua: {
          50:  '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
          700: '#0E7490',
          800: '#155E75',
          900: '#164E63',
        },
        pool: {
          light: '#EBF8FF',
          mid:   '#BAE6FD',
          deep:  '#0369A1',
        },
        sand: {
          100: '#FEF9EE',
          200: '#FDF0C8',
          400: '#E8C84C',
          500: '#C8A82A',
          600: '#9A7D1A',
        },
        stone: {
          50:  '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'xs':    '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card':  '0 4px 20px rgba(11,26,43,0.07)',
        'card-lg': '0 8px 40px rgba(11,26,43,0.10)',
        'btn':   '0 4px 14px rgba(6,182,212,0.30)',
        'btn-lg':'0 6px 24px rgba(6,182,212,0.35)',
        'hero':  '0 20px 60px rgba(11,26,43,0.20)',
      },
      animation: {
        'fade-up':   'fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in':   'fadeIn 0.5s ease-out forwards',
        'float':     'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
