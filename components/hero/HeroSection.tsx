'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ArrowDown } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { letterVariant, stagger, fadeUp } from '@/lib/variants';

const ParticleCanvas = dynamic(() => import('./ParticleCanvas'), {
  ssr: false,
  loading: () => null,
});

const NAME = 'Aditya Bisht';
const LETTERS = NAME.split('');

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Three.js background */}
      {!prefersReducedMotion ? (
        <div className="absolute inset-0 z-0">
          {loaded && <ParticleCanvas />}
        </div>
      ) : (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.06) 0%, transparent 70%)',
          }}
        />
      )}

      {/* Corner glow spots */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle at top right, rgba(245,158,11,0.05) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle at bottom left, rgba(16,185,129,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="text-xs font-mono tracking-[0.15em] text-text-secondary border border-border px-3 py-1.5 rounded-sm bg-surface/50">
            [ AI Engineer &amp; Builder
            <span className="inline-block w-[1px] h-3 bg-accent ml-1 align-middle animate-blink" />
            ]
          </span>
        </motion.div>

        {/* Name — letter stagger */}
        <motion.h1
          variants={stagger}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.45 }}
          className="text-[clamp(52px,10vw,112px)] font-bold tracking-tight leading-none mb-6 overflow-hidden"
          aria-label={NAME}
        >
          {LETTERS.map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariant}
              className={`inline-block ${letter === ' ' ? 'w-[0.3em]' : ''}`}
              style={{ willChange: 'transform' }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-lg text-text-secondary max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Building AI systems, agents, and products at the intersection of
          research and real-world scale.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            onClick={handleScrollToWork}
            className="px-7 py-3 bg-accent text-bg text-sm font-semibold rounded-sm hover:bg-accent/90 transition-colors duration-200 glow-accent"
          >
            View My Work
          </MagneticButton>
          <MagneticButton
            onClick={handleScrollToContact}
            className="px-7 py-3 border border-accent/50 text-accent text-sm font-semibold rounded-sm hover:bg-accent/10 transition-all duration-200"
          >
            Get in Touch
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-secondary/60">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} className="text-text-secondary/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
