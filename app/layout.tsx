import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import LenisProvider from '@/components/providers/LenisProvider';

export const metadata: Metadata = {
  title: 'Aditya Bisht — AI Engineer & Builder',
  description:
    'Aditya Bisht — CS student at Northeastern University building AI systems, agents, and products at the intersection of research and real-world scale.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-bg text-text-primary antialiased overflow-x-hidden">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
