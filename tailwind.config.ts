import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#faf9f6',
        ink: '#1a1715',
        muted: '#78716c',
        line: '#e7e5e0',
        accent: '#b45309',
      },
      fontSize: {
        display: ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.08', letterSpacing: '-0.015em' }],
        heading: ['clamp(1.5rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.005em' }],
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
        hand: ['var(--font-hand)', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config;
