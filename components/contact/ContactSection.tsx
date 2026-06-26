'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Check } from 'lucide-react';
import { stagger, fadeUp } from '@/lib/variants';
import MagneticButton from '@/components/ui/MagneticButton';

const EMAIL = 'bisht.a@northeastern.edu';
const LINKEDIN = 'https://linkedin.com/in/aditya-bisht-neu';
const GITHUB = 'https://github.com/Aditya292248';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback: select text
    }
  };

  return (
    <section id="contact" className="relative py-32 md:py-44 px-6">
      {/* Center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(16,185,129,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.p variants={fadeUp} className="text-xs font-mono tracking-[0.2em] uppercase text-accent">
            05 — Contact
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary leading-tight"
          >
            Let&apos;s build
            <br />
            <span className="text-gradient-accent">something.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-base text-text-secondary max-w-md mx-auto leading-relaxed">
            Open to co-ops, research collaborations, and interesting problems. If
            you&apos;re working on something ambitious, I&apos;d love to hear about it.
          </motion.p>

          {/* Action buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 pt-4">
            {/* Email copy */}
            <div className="relative">
              <MagneticButton
                onClick={handleCopyEmail}
                className="flex items-center gap-2.5 px-6 py-3 bg-surface border border-border hover:border-accent/40 text-text-primary text-sm font-medium rounded-sm transition-all duration-200 group"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="check"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-2.5"
                    >
                      <Check size={14} className="text-accent" />
                      <span className="text-accent">Copied!</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="email"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-2.5"
                    >
                      <Mail size={14} className="text-text-secondary group-hover:text-accent transition-colors" />
                      {EMAIL}
                    </motion.span>
                  )}
                </AnimatePresence>
              </MagneticButton>
            </div>

            {/* LinkedIn */}
            <MagneticButton
              as="a"
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3 bg-accent text-bg text-sm font-semibold rounded-sm hover:bg-accent/90 transition-colors duration-200 glow-accent"
            >
              <Linkedin size={14} />
              LinkedIn
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-6xl mx-auto mt-24 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p className="text-xs text-text-secondary font-mono">
          Aditya Bisht &copy; 2026
        </p>
        <div className="flex items-center gap-4">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            <Github size={13} />
            GitHub
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            <Linkedin size={13} />
            LinkedIn
          </a>
        </div>
      </motion.footer>
    </section>
  );
}
