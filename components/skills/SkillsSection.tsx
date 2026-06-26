'use client';

import { motion } from 'framer-motion';
import { Code2, Brain, Globe, Database, type LucideIcon } from 'lucide-react';
import { stagger, fadeUp } from '@/lib/variants';
import SectionHeading from '@/components/ui/SectionHeading';
import { skillCategories } from '@/lib/data';
import type { SkillCategory } from '@/types';

const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  Brain,
  Globe,
  Database,
};

const SKILL_ICON_MAP: Record<string, string> = {
  'Python': '/images/python.png',
  'TypeScript': '/images/typescript.png',
  'JavaScript': '/images/js.png',
  'SQL': '/images/sql.png',
  'PyTorch': '/images/pytorch.png',
  'Hugging Face': '/images/huggingface.png',
  'LangChain': '/images/langchain.png',
  'scikit-learn': '/images/skleanr.png',
};

const pillVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

const pillStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};

function SkillCard({ category }: { category: SkillCategory }) {
  const Icon: LucideIcon = ICON_MAP[category.icon] ?? Code2;
  const isPrimary = category.accentColor === 'primary';
  const accentHex = isPrimary ? '#10B981' : '#F59E0B';

  return (
    <motion.div
      variants={fadeUp}
      className="card-surface rounded-sm p-6 group relative overflow-hidden flex flex-col gap-5 glow-accent-hover"
    >
      {/* Top-edge gradient on hover */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(to right, transparent, ${accentHex}60, transparent)`,
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 flex items-center justify-center rounded-sm border"
          style={{ borderColor: `${accentHex}30`, backgroundColor: `${accentHex}10` }}
        >
          <Icon size={15} style={{ color: accentHex }} />
        </div>
        <h3
          className="text-xs font-mono tracking-widest uppercase font-semibold"
          style={{ color: accentHex }}
        >
          {category.name}
        </h3>
      </div>

      {/* Pills */}
      <motion.div
        variants={pillStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap gap-2"
      >
        {category.skills.map((skill) => {
          const icon = SKILL_ICON_MAP[skill];
          return (
            <motion.span
              key={skill}
              variants={pillVariant}
              className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-sm border transition-all duration-200"
              style={{
                backgroundColor: 'var(--surface-3)',
                borderColor: `${accentHex}20`,
                color: accentHex,
              }}
            >
              {icon && (
                <span className="w-4 h-4 rounded-[3px] bg-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img
                    src={icon}
                    alt=""
                    className="w-3 h-3 object-contain"
                  />
                </span>
              )}
              {skill}
            </motion.span>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 md:py-40 px-6">
      {/* Bottom-left glow */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at bottom left, rgba(16,185,129,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            eyebrow="03 — Skills"
            title="Tech Stack."
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {skillCategories.map((category) => (
            <SkillCard key={category.name} category={category} />
          ))}
        </motion.div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto mt-32 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
