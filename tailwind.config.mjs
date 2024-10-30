/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px'
      },
      colors: {
        rose: {
          50: '#FFF7FB',
          800: '#7A284E'
        },
        stone: {
          100: '#F3E5D7',
          150: '#E3DDD7',
          600: '#5F564D',
          900: '#312E2C'
        },
        brown: {
          800: '#854632'
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        young: ['Young Serif', 'serif']
      },
      spacing: {
        100: '0.5rem', // 8px
        150: '0.75rem', // 12px
        200: '1rem', // 16px
        300: '1.5rem', // 24px
        400: '2rem', // 32px
        500: '2.5rem', // 40px
        600: '3rem', // 48px
        1600: '8rem' // 128px
      }
    }
  },
  plugins: []
};
