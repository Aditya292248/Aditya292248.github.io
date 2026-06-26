'use client';

import { motion } from 'framer-motion';
import { stagger, fadeUp, slideInRight } from '@/lib/variants';
import SectionHeading from '@/components/ui/SectionHeading';
import CountUp from '@/components/ui/CountUp';
import MarqueeTicker from '@/components/ui/MarqueeTicker';
import { stats, techStack } from '@/lib/data';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 md:py-40 px-6">
      {/* Section glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at top right, rgba(245,158,11,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading eyebrow="01 — About" title="Who I am." />
        </motion.div>

        {/* Two-column */}
        <div className="grid md:grid-cols-2 gap-16 items-start mt-4">
          {/* Left — bio */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <motion.p variants={fadeUp} className="text-base text-text-secondary leading-relaxed">
              I&apos;m a third-year Computer Science student at{' '}
              <span className="text-text-primary font-medium">
                Northeastern University
              </span>{' '}
              (AI concentration, 3.52 GPA), graduating May 2027. My work sits at
              the intersection of AI systems, agent infrastructure, and data
              engineering — I care about building things that actually run in
              production.
            </motion.p>

            <motion.p variants={fadeUp} className="text-base text-text-secondary leading-relaxed">
              I founded{' '}
              <span className="text-accent font-medium">GatePoint</span> — a
              production security gateway for AI agents with a cryptographic
              trust chain, policy decision engine, and a zero-change TypeScript
              SDK. It placed 2nd at the Husky Startup Challenge. Before that, I
              built sentiment pipelines and admin tooling at{' '}
              <span className="text-text-primary font-medium">Rezolve.ai</span>{' '}
              and KYC automation infrastructure at{' '}
              <span className="text-text-primary font-medium">Zolve</span>.
            </motion.p>

            <motion.p variants={fadeUp} className="text-base text-text-secondary leading-relaxed">
              Beyond work:{' '}
              <span className="text-text-primary font-medium">Z Fellows</span>{' '}
              alum, member of{' '}
              <span className="text-text-primary font-medium">
                MIT Sundai Club
              </span>
              , and 1st-place finisher at HackBeanPot 2025 with Memora. I like
              hackathons — the constraint is the point.
            </motion.p>

            <motion.p variants={fadeUp} className="text-base text-text-secondary leading-relaxed">
              Long-term, I&apos;m drawn to{' '}
              <span className="text-text-primary font-medium">
                AI safety and interpretability
              </span>
              . The systems we&apos;re building are getting powerful fast, and I
              think getting the foundations right matters enormously.{' '}
              <span className="text-accent font-medium">Anthropic</span> is
              where I want to end up.
            </motion.p>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={slideInRight}
                className="card-surface rounded-sm p-6 glow-accent-hover group relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-3xl md:text-4xl font-bold text-accent tabular-nums">
                  <CountUp
                    end={stat.value}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-xs text-text-secondary mt-2 font-mono tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <p className="text-xs font-mono tracking-[0.15em] uppercase text-text-secondary/50 mb-4">
            Tech Stack
          </p>
          <MarqueeTicker items={techStack} />
        </motion.div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto mt-32 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
