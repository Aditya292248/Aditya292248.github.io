'use client';

import { motion } from 'framer-motion';
import { stagger, fadeUp } from '@/lib/variants';
import SectionHeading from '@/components/ui/SectionHeading';
import { experiences } from '@/lib/data';
import type { Experience } from '@/types';

const LOGO_MAP: Record<string, string> = {
  allowance: '/images/allowance.png',
  gatepoint: '/images/gatepoint.png',
  rezolve: '/images/rezolve.png',
  zolve: '/images/zolve.png',
};

function ExperienceCard({ experience }: { experience: Experience }) {
  const logo = LOGO_MAP[experience.id];

  return (
    <motion.div
      variants={fadeUp}
      className="card-surface rounded-sm group relative overflow-hidden glow-accent-hover"
    >
      {/* Top-edge gradient on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-6 md:p-8">
        {/* Top row: logo + company info + date */}
        <div className="flex items-start gap-5 mb-5">
          {/* Logo */}
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-surface-3 border border-border/50 flex items-center justify-center flex-shrink-0 overflow-hidden p-2">
            {logo ? (
              <img
                src={logo}
                alt={`${experience.company} logo`}
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-lg font-bold text-accent/30 font-mono">
                {experience.company.charAt(0)}
              </span>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-text-primary leading-tight">
                  {experience.company}
                  {experience.upcoming && (
                    <span className="ml-2 text-[10px] font-mono px-2 py-0.5 bg-accent/10 border border-accent/30 text-accent rounded-sm align-middle">
                      INCOMING
                    </span>
                  )}
                </h3>
                <p className="text-sm font-medium text-accent mt-1">
                  {experience.role}
                </p>
              </div>
              <div className="sm:text-right flex-shrink-0 mt-1 sm:mt-0">
                <p className="text-xs font-mono text-text-secondary">{experience.period}</p>
                {experience.location && (
                  <p className="text-xs text-text-secondary/60 mt-0.5">{experience.location}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-border/40 mb-5" />

        {/* Bullets */}
        <ul className="space-y-3">
          {experience.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm md:text-base text-text-secondary leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0 mt-2" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 md:py-40 px-6">
      {/* Left glow */}
      <div
        className="absolute top-1/4 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at left, rgba(16,185,129,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading eyebrow="02 — Experience" title="Where I've worked." />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-5"
        >
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </motion.div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto mt-32 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
