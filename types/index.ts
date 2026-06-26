export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  award?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  upcoming?: boolean;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
  accentColor: 'primary' | 'secondary';
}
