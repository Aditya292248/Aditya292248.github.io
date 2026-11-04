import './globals.css';
import type { Metadata } from 'next';
import { Lora, Plus_Jakarta_Sans, Caveat } from 'next/font/google';

const sans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans' });
const serif = Lora({ subsets: ['latin'], variable: '--font-serif' });
const hand = Caveat({ subsets: ['latin'], variable: '--font-hand' });

export const metadata: Metadata = {
  title: 'Aditya :)',
  description:
    'Aditya Bisht — CS student at Northeastern University building AI systems, agents, and products.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${hand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
