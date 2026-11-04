'use client';

import { useEffect, useRef, useState } from 'react';
import { Mail, Box, Brain, Heart, ScanSearch, type LucideIcon } from 'lucide-react';
import { experiences, projects } from '@/lib/data';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const TECH: Record<string, string> = {
  TypeScript: 'typescript/typescript-original',
  JavaScript: 'javascript/javascript-original',
  Python: 'python/python-original',
  React: 'react/react-original',
  PostgreSQL: 'postgresql/postgresql-original',
  PyTorch: 'pytorch/pytorch-original',
  Express: 'express/express-original',
  'Node.js': 'nodejs/nodejs-original',
  Rust: 'rust/rust-original',
  Chrome: 'chrome/chrome-original',
  C: 'c/c-original',
  Linux: 'linux/linux-original',
  Prisma: 'prisma/prisma-original',
  Supabase: 'supabase/supabase-original',
  'scikit-learn': 'scikitlearn/scikitlearn-original',
  Pandas: 'pandas/pandas-original',
  Streamlit: 'streamlit/streamlit-original',
  'VS Code': 'vscode/vscode-original',
  'Material UI': 'materialui/materialui-original',
  OpenAI: 'openai/openai-original',
  'GPT-4': 'openai/openai-original',
  DuckDB: 'duckdb/duckdb-original',
};
const local = (f: string) => `/images/${f}.png`;
const LOGO: Record<string, string> = {
  gatepoint: local('gatepoint'),
  imagedoctor: `${DEVICON}/pytorch/pytorch-original.svg`,
  allowance: local('allowance'),
  rezolve: local('rezolve'),
  zolve: local('zolve'),
  'verified-caller': 'https://www.google.com/s2/favicons?domain=agentphone.ai&sz=128',
  codingagent: `${DEVICON}/vscode/vscode-original.svg`,
  openbrowser: `${DEVICON}/rust/rust-original.svg`,
  finreview: `${DEVICON}/react/react-original.svg`,
};

const ICON: Record<string, LucideIcon> = { neocortex: Brain, memora: Heart, stepglass: ScanSearch };
const CHIP = ['#FFE59E', '#FFD3C9', '#D6EABF', '#E4DCF7'];

function Logo({ id }: { id: string }) {
  const src = LOGO[id];
  const base = 'doodle-chip mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-ink';
  const tilt = { ['--tilt' as string]: `${(id.length % 3) - 1.5}deg` };
  if (!src) {
    const Fallback = ICON[id] ?? Box;
    return (
      <span className={`${base} text-ink`} style={{ ...tilt, backgroundColor: CHIP[id.length % CHIP.length] }}>
        <Fallback size={20} strokeWidth={1.8} />
      </span>
    );
  }
  return (
    <span className={`${base} overflow-hidden bg-white p-1.5`} style={tilt}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="h-full w-full object-contain" />
    </span>
  );
}

function TechTags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {tags.map((t) => (
        <li key={t} className="flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-xs text-muted">
          {TECH[t] && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={`${DEVICON}/${TECH[t]}.svg`} alt="" className="h-3.5 w-3.5" loading="lazy" />
          )}
          {t}
        </li>
      ))}
    </ul>
  );
}

const EMAIL = 'bisht.ad@northeastern.edu';
const LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/aditya-bisht-neu', bg: '#FFE59E', rot: -2 },
  { label: 'GitHub', href: 'https://github.com/Aditya292248', bg: '#D6EABF', rot: 1.5 },
  { label: 'Email', href: `mailto:${EMAIL}`, bg: '#FFD3C9', rot: -1 },
];

function Typewriter({ text }: { text: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n >= text.length) return;
    const t = setTimeout(() => setN(n + 1), 90);
    return () => clearTimeout(t);
  }, [n, text]);
  return (
    <>
      {text.slice(0, n)}
      <span className="ml-[2px] inline-block text-accent">|</span>
    </>
  );
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('in');
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <h2 className="mb-3 font-serif text-heading">{children}</h2>
      <svg className="mb-10" width="110" height="10" viewBox="0 0 110 10" fill="none" aria-hidden="true">
        <path d="M3 7 C 30 2.5, 75 2, 107 5.5" stroke="#B45309" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    </Reveal>
  );
}

function ArrowUpRight() {
  return (
    <span className="mt-1 shrink-0 text-muted/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 19 C9 16 13 11 17.5 6.5" />
        <path d="M11 5.5 L18 6 L17.5 13" />
      </svg>
    </span>
  );
}

const ROW =
  'group -mx-4 flex items-start gap-4 rounded-lg border-b border-line/60 px-4 py-5 transition-all duration-300 last:border-b-0 hover:bg-[#f2efe9]/60';

export default function Home() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <header className="fixed inset-x-0 top-0 z-50 bg-bg/80 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-serif text-lg tracking-tight transition-colors duration-300 hover:text-accent">
            Aditya Bisht
          </a>
          <div className="flex items-center gap-8 font-mono text-sm tracking-wide text-muted">
            <a href="#projects" className="transition-colors duration-300 hover:text-ink">Projects</a>
            <a href="#experience" className="transition-colors duration-300 hover:text-ink">Experience</a>
            <a href="#contact" className="transition-colors duration-300 hover:text-ink">Contact</a>
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-4xl px-6 pb-32">
        <section className="pb-20 pt-32 md:pb-28 md:pt-40">
          <h1 className="mb-8 font-serif text-display md:mb-10">
            <Typewriter text="Hey, I'm Aditya." />
          </h1>
          <div className="blur-in max-w-2xl">
            <p className="text-lg leading-relaxed text-muted md:text-xl">
              CS @ <span className="marker-static font-medium text-ink">Northeastern</span>. Interested in building AI
              Agents, Security Infrastructure, and Products People Actually Use.
            </p>
            <p className="mt-5 max-w-xl origin-left -rotate-1 font-hand text-2xl leading-snug text-muted/90">
              My Dream Is To Build Something You Use Every Day :)
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              {LINKS.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                  <span className="inline-block" style={{ transform: `rotate(${l.rot}deg)` }}>
                    <span className="sticker inline-block rounded-full px-4 py-2 font-mono text-sm text-ink" style={{ backgroundColor: l.bg }}>
                      {l.label}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 py-12">
          <Heading>Things I&apos;ve Built</Heading>
          <div>
            {projects.map((p) => (
              <Reveal key={p.id}>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className={ROW}>
                  <Logo id={p.id} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="marker-highlight text-lg font-medium">{p.name}</span>
                      <span className="inline-block -rotate-2 select-none font-hand text-xl leading-none text-accent">
                        {p.shortDescription}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted md:text-base">{p.longDescription}</p>
                    {p.award && <p className="mt-2 font-hand text-xl text-accent">{p.award}</p>}
                    <TechTags tags={p.tags} />
                  </div>
                  <ArrowUpRight />
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 py-12">
          <Heading>Experience</Heading>
          <div>
            {experiences.map((e) => (
              <Reveal key={e.id}>
                <div className={ROW}>
                  <Logo id={e.id} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="marker-highlight text-lg font-medium">
                        {e.role} @ {e.company}
                      </span>
                      <span className="inline-block -rotate-2 select-none font-hand text-xl leading-none text-accent">
                        {e.upcoming ? 'Next! ' : ''}
                        {e.period}
                      </span>
                    </div>
                    <ul className="mt-1.5 space-y-1.5 text-[15px] leading-relaxed text-muted md:text-base">
                      {e.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-24">
          <Reveal>
            <h2 className="font-serif text-heading">Want To Build Something Together?</h2>
            <p className="mt-2 -rotate-1 font-hand text-3xl text-accent">Hit Me Up.</p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-6 inline-block text-muted underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {EMAIL}
            </a>
          </Reveal>
        </section>
      </main>

      <a
        href={`mailto:${EMAIL}`}
        aria-label="Email me"
        className="fixed bottom-4 right-3 z-[1000] flex h-12 w-12 items-center justify-center border-2 border-ink bg-[#FFE59E] transition-transform duration-200 hover:-translate-y-0.5 md:bottom-6 md:right-6"
        style={{ borderRadius: '48% 52% 50% 50% / 52% 48% 52% 48%', boxShadow: '3px 3px 0 #1A1715' }}
      >
        <Mail size={22} strokeWidth={2} />
      </a>
    </>
  );
}
