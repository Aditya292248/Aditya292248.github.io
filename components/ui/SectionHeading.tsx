'use client';

import { motion } from 'framer-motion';
import { scaleUp, fadeUp } from '@/lib/variants';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${className}`}>
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className="text-sm font-mono tracking-[0.15em] uppercase text-accent mb-3"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={scaleUp}
        className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-none"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={fadeUp}
        className="mt-4 h-px bg-gradient-to-r from-accent/30 via-border to-transparent"
      />
    </div>
  );
}
