import type { Project, Experience, Stat, SkillCategory } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'gatepoint',
    company: 'GatePoint',
    role: 'Founder & Lead Engineer',
    period: 'Sept 2025 – Feb 2026',
    location: 'Boston, MA',
    type: '',
    bullets: [
      'Architected a production AI agent security gateway — Express + PostgreSQL (15-model Prisma schema), React/Vite/Tailwind dashboard, published TypeScript SDK — enabling enterprises to enforce security policies and audit every tool call made by AI agents.',
      'Designed a 3-layer cryptographic trust chain (Ed25519 challenge-response, 15-min JWTs, CA-signed certificates with token-nonce binding) with per-request RFC 8785 canonical JSON signatures — delivering 3 independent cryptographic verifications and 2 replay-prevention layers per tool call.',
      'Built a policy decision engine: 18 JSONPath condition operators, 4 effects, 3 evaluation phases, and GPT-4 Turbo policy generation with Zod validation as a hard correctness gate.',
      '2nd place, Husky Startup Challenge.',
    ],
  },
  {
    id: 'rezolve',
    company: 'Rezolve.ai',
    role: 'Software Development Engineering Intern',
    period: 'July 2025 – Dec 2025',
    location: 'Boston, MA',
    type: '',
    bullets: [
      'Built real-time sentiment analysis pipeline (OpenAI + Anthropic APIs) for customer support transcripts with streaming inference.',
      'Implemented Redis caching for API prompts/responses, reducing AI platform costs by 50% and improving response latency by 2x.',
      'Built React admin dashboard for DeskIQ with authentication, master account controls, and test coverage for user management.',
    ],
  },
  {
    id: 'zolve',
    company: 'Zolve',
    role: 'Data Engineering Intern',
    period: 'Jun 2024 – Sept 2024',
    location: 'Bangalore, India',
    type: '',
    bullets: [
      'Built automated KYC verification pipeline (MTCNN, YOLO, ArcFace) processing 15,000+ documents at ~92% accuracy.',
      'Optimized inference throughput ~30% through batching and GPU utilization improvements; built evaluation metrics and failure analysis dashboards.',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'gatepoint',
    name: 'GatePoint',
    shortDescription: 'AI Agent Security Gateway',
    longDescription:
      'Production security gateway for AI agents — cryptographic trust chain, policy decision engine with 18 operators, GPT-4 policy generation, transparent SDK with zero agent code changes.',
    tags: ['TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'React', 'Ed25519', 'GPT-4'],
    github: 'https://github.com/Aditya292248',
    featured: true,
  },
  {
    id: 'neocortex',
    name: 'Neocortex',
    shortDescription: 'Semantic Code Intelligence',
    longDescription:
      'Parses GitHub repos into AST entity graphs at ~1,000 entities/sec, generates OpenAI embeddings, returns ranked token-budgeted context to any LLM in <500ms.',
    tags: ['TypeScript', 'tree-sitter', 'OpenAI', 'Express', 'React', 'Voyage AI'],
    github: 'https://github.com/Aditya292248',
  },
  {
    id: 'imagedoctor',
    name: 'ImageDoctor',
    shortDescription: 'Vision Transformer IQA System',
    longDescription:
      'Full-reference image quality assessment on KADID-10k (10,125 images). 50.6% validation loss reduction over 50 epochs. ~70% GPU memory reduction via selective ViT freezing + gradient accumulation.',
    tags: ['PyTorch', 'ViT', 'DirectML', 'KADID-10k', 'timm', 'Python'],
    github: 'https://github.com/Aditya292248',
  },
  {
    id: 'loan',
    name: 'Loan Default Prediction',
    shortDescription: 'ML Credit Risk Modeling',
    longDescription:
      '1.35M Lending Club loans, 0.72 AUC-ROC with XGBoost. All feature engineering in SQL (DuckDB). SHAP interpretability. Full error analysis revealing systematic failure patterns by loan grade.',
    tags: ['Python', 'XGBoost', 'DuckDB', 'SHAP', 'scikit-learn', 'Streamlit'],
    github: 'https://github.com/Aditya292248',
  },
  {
    id: 'ab-analysis',
    name: 'Marketing A/B Analysis',
    shortDescription: 'Statistical Experiment Analysis',
    longDescription:
      '588K-user A/B test. 43% relative conversion lift confirmed across 3 statistical methods. Dose-response curve, Simpson\'s paradox detection, Bonferroni-corrected timing analysis.',
    tags: ['Python', 'SciPy', 'Statsmodels', 'Pandas', 'Streamlit'],
    github: 'https://github.com/Aditya292248',
  },
  {
    id: 'memora',
    name: 'Memora',
    shortDescription: 'Alzheimer\'s Remediation App',
    longDescription:
      'AI-generated memory quizzes from tagged photos, TikTok-style feed, drag-and-drop annotation. Built in <36 hours.',
    tags: ['React', 'Supabase', 'Framer Motion', 'Material UI'],
    github: 'https://github.com/Aditya292248',
    award: 'HackBeanPot 2025 — 1st Place',
  },
  {
    id: 'fuse',
    name: 'FUSE Filesystem',
    shortDescription: 'Systems Programming',
    longDescription:
      '1MB FUSE-based filesystem in C — file creation, deletion, renaming, hierarchical directories, byte-level read/write on a custom block storage layer.',
    tags: ['C', 'FUSE', 'Linux', 'Systems Programming'],
    github: 'https://github.com/Aditya292248',
  },
];

export const stats: Stat[] = [
  { value: 3.52, suffix: '', label: 'GPA', decimals: 2 },
  { value: 2, suffix: '', label: 'Co-ops Completed', decimals: 0 },
  { value: 5, suffix: '+', label: 'Projects Shipped', decimals: 0 },
  { value: 2, suffix: '', label: 'Hackathon Placements', decimals: 0 },
];

export const techStack: string[] = [
  'Python',
  'TypeScript',
  'React',
  'Next.js',
  'PostgreSQL',
  'Redis',
  'PyTorch',
  'ViT',
  'XGBoost',
  'FUSE',
  'C',
  'OpenAI API',
  'Anthropic API',
  'Framer Motion',
  'Three.js',
  'Prisma',
  'Express',
  'Supabase',
  'DuckDB',
  'SHAP',
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    icon: 'Code2',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C', 'SQL', 'Java'],
    accentColor: 'primary',
  },
  {
    name: 'AI / ML',
    icon: 'Brain',
    skills: [
      'PyTorch',
      'scikit-learn',
      'XGBoost',
      'SHAP',
      'timm',
      'Vision Transformer (ViT)',
      'OpenAI API',
      'Anthropic API',
      'LangChain',
      'Hugging Face',
    ],
    accentColor: 'secondary',
  },
  {
    name: 'Web & Backend',
    icon: 'Globe',
    skills: [
      'React',
      'Next.js',
      'Express',
      'Node.js',
      'Framer Motion',
      'Three.js',
      'Tailwind CSS',
      'REST APIs',
      'WebSockets',
      'Streaming (NDJSON/SSE)',
    ],
    accentColor: 'primary',
  },
  {
    name: 'Data & Infrastructure',
    icon: 'Database',
    skills: [
      'PostgreSQL',
      'Redis',
      'Supabase',
      'Prisma',
      'DuckDB',
      'Parquet',
      'pandas',
      'NumPy',
      'Docker',
      'Git',
      'Vercel',
      'Linux',
    ],
    accentColor: 'secondary',
  },
];
