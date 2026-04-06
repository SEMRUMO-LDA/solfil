import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        solfil: {
          orange: '#FE5000',
          gray: '#888B8D',
          black: '#111111',
        },
      },
      animation: {
        'spin-slow': 'spin 120s linear infinite',
        'spin-slow-reverse': 'spin 180s linear infinite reverse',
        float: 'float 20s ease-in-out infinite',
        'pulse-slow': 'pulse 15s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
