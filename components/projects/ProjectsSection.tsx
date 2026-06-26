'use client';

import { motion } from 'framer-motion';
import { stagger } from '@/lib/variants';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from './ProjectCard';
import { projects } from '@/lib/data';

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 md:py-40 px-6">
      {/* Right glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at top right, rgba(16,185,129,0.03) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading eyebrow="04 — Projects" title="What I've built." />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto mt-32 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
