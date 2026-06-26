'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Trophy } from 'lucide-react';
import { fadeUp } from '@/lib/variants';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

const IMAGE_MAP: Record<string, string> = {
  gatepoint: '/images/gatepoint.png',
  neocortex: '/images/neocortex.png',
  memora: '/images/memora.png',
  imagedoctor: '/images/imageDoctor.png',
  pipefantasy: '/images/pipefantasy.png',
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const image = IMAGE_MAP[project.id];

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="card-surface rounded-sm overflow-hidden group relative glow-accent-hover flex flex-col"
    >
      {/* Top-edge accent gradient on hover */}
      <div
        className="absolute inset-x-0 top-0 h-px z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(to right, transparent, #10B98160, transparent)',
        }}
      />

      {/* Image area */}
      <div className="relative w-full h-44 bg-surface-2 overflow-hidden flex items-center justify-center">
        {image ? (
          <>
            <img
              src={image}
              alt={`${project.name}`}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-2/80 via-transparent to-transparent" />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-accent/5 to-accent-warm/5 flex items-center justify-center">
            <span className="text-2xl font-bold text-accent/20 font-mono">
              {project.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        {/* Award badge */}
        {project.award && (
          <div className="flex items-center gap-1.5 text-xs font-mono text-accent-warm mb-2">
            <Trophy size={12} />
            <span>{project.award}</span>
          </div>
        )}

        <h3 className="text-lg font-bold text-text-primary mb-1 group-hover:text-accent transition-colors duration-200">
          {project.name}
        </h3>
        <p className="text-xs font-mono text-accent mb-2">{project.shortDescription}</p>
        <p className="text-sm text-text-secondary leading-relaxed flex-1">{project.longDescription}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
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
