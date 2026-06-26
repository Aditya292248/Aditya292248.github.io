'use client';

import { motion } from 'framer-motion';
import { slideInRight, stagger, fadeUp } from '@/lib/variants';
import type { Experience } from '@/types';

const LOGO_MAP: Record<string, string> = {
  allowance: '/images/allowance.png',
  gatepoint: '/images/gatepoint.png',
  rezolve: '/images/rezolve.png',
  zolve: '/images/zolve.png',
};

interface TimelineCardProps {
  experience: Experience;
  index: number;
}

export default function TimelineCard({ experience, index }: TimelineCardProps) {
  const logo = LOGO_MAP[experience.id];

  return (
    <motion.div
      variants={slideInRight}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[2.55rem] top-6 w-2.5 h-2.5 rounded-full border-2 border-accent bg-bg z-10" />

      {/* Card */}
      <div className="card-surface rounded-sm p-6 md:p-8 glow-accent-hover group relative overflow-hidden">
        {/* Top-edge gradient on hover */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
          <div className="flex items-start gap-4">
            {logo && (
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-md bg-surface-3 border border-border/50 flex items-center justify-center flex-shrink-0 overflow-hidden p-1.5">
                <img
                  src={logo}
                  alt={`${experience.company} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-text-primary">
                {experience.company}
                {experience.upcoming && (
                  <span className="ml-3 text-xs font-mono px-2 py-0.5 bg-accent/10 border border-accent/30 text-accent rounded-sm align-middle">
                    UPCOMING
                  </span>
                )}
              </h3>
              <p className="text-sm font-medium text-accent mt-0.5">
                {experience.role}
              </p>
              {experience.type && (
                <p className="text-xs text-text-secondary mt-0.5">{experience.type}</p>
              )}
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-xs font-mono text-text-secondary">{experience.period}</p>
            <p className="text-xs text-text-secondary/60 mt-0.5">{experience.location}</p>
          </div>
        </div>

        {/* Bullets */}
        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-3 mt-4"
        >
          {experience.bullets.map((bullet, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              className="flex items-start gap-3 text-base text-text-secondary leading-relaxed"
            >
              <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0 mt-2.5" />
              {bullet}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}
