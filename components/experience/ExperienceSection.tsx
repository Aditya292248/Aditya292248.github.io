'use client';

import { motion } from 'framer-motion';
import { stagger } from '@/lib/variants';
import SectionHeading from '@/components/ui/SectionHeading';
import TimelineCard from './TimelineCard';
import { experiences } from '@/lib/data';

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

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading eyebrow="02 — Experience" title="Where I've worked." />
        </motion.div>

        {/* Timeline */}
        <div className="relative ml-8 md:ml-10">
          {/* Vertical line */}
          <div className="absolute -left-5 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #10B981, #F59E0B, transparent)' }} />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            {experiences.map((exp, i) => (
              <TimelineCard key={exp.id} experience={exp} index={i} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto mt-32 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
