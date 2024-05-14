import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        base: '68.0625rem',
      },
      screens: {
        '2xl': '90rem',
      },
      fontFamily: {
        sansation: ['Sansation', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0B1736',
          red: '#A4031F',
          purple: '#240B36',
          gray: {
            DEFAULT: '#F5F5F5',
            100: '#EFEFEF',
          },
        },
      },
      borderRadius: {
        1.5: '0.0938rem',
        3: '0.1875rem',
        5: '0.3125rem',
        7: '0.4375rem',
        10: '0.625rem',
        20: '1.25rem',
      },
      spacing: {
        140: '8.75rem',
        220: '13.75rem',
      },
    },
  },
  plugins: [],
};
export default config;
