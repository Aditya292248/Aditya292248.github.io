'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Trophy } from 'lucide-react';
import { fadeUp } from '@/lib/variants';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-sm overflow-hidden group relative glow-accent-hover flex flex-col ${
        featured ? 'md:col-span-2 card-elevated' : 'card-surface'
      }`}
    >
      {/* Top-edge accent gradient on hover */}
      <div
        className="absolute inset-x-0 top-0 h-px z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: featured
            ? 'linear-gradient(to right, transparent, #F59E0B80, #10B98180, transparent)'
            : 'linear-gradient(to right, transparent, #10B98160, transparent)',
        }}
      />

      {/* Content */}
      <div className={`flex flex-col flex-1 ${featured ? 'p-6 md:p-8' : 'p-5 md:p-6'}`}>
        {/* Award badge */}
        {project.award && (
          <div className="flex items-center gap-1.5 text-xs font-mono text-accent-warm mb-3">
            <Trophy size={12} />
            <span>{project.award}</span>
          </div>
        )}

        <h3 className={`font-bold text-text-primary mb-1.5 group-hover:text-accent transition-colors duration-200 ${
          featured ? 'text-xl md:text-2xl' : 'text-lg'
        }`}>
          {project.name}
        </h3>
        <p className="text-xs font-mono text-accent mb-3">{project.shortDescription}</p>
        <p className="text-base text-text-secondary leading-relaxed flex-1">{project.longDescription}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 bg-surface-3 border border-border/60 text-text-secondary rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/50">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              <Github size={14} />
              <span>Code</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors duration-200"
            >
              <ExternalLink size={14} />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
