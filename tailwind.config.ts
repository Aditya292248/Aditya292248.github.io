import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#06090A',
        surface: '#0B1214',
        'surface-2': '#111B1F',
        'surface-3': '#17242A',
        accent: '#10B981',
        'accent-warm': '#F59E0B',
        'text-primary': '#E2E8F0',
        'text-secondary': '#6B8A99',
        'text-muted': '#6B8A99',
        border: '#1A2E35',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'blink': 'blink 1.2s step-end infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
