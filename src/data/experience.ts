export interface ExperienceStat {
  value: string;
  label: string;
}

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  status?: string;
  stats?: ExperienceStat[];
  achievements: string[];
  tags?: string[];
  certificateUrl?: string;
}

// certificateUrl points to a LOR / offer letter / appointment letter in
// public/docs — dates sourced from official documents, most recent first.
export const experience: ExperienceItem[] = [
  {
    role: 'Full-Stack AI Engineer',
    org: 'Liferythem Healthcare Services Pvt. Ltd.',
    period: 'Feb 2026 — Jun 2026',
    status: 'Internship',
    stats: [{ value: '2', label: 'Projects shipped' }],
    achievements: [
      'Integrated vendor-provided SDKs into the core Android app to enable real-time data collection from multi-lead ECG, BMI, blood sugar, and an AI-powered digital stethoscope.',
      'Designed secure AWS cloud workflows to reliably store device-generated clinical files and patient vital data.',
    ],
    tags: ['Android SDK', 'Kotlin', 'React Native', 'AWS'],
    certificateUrl: '/docs/liferythem-lor.pdf',
  },
  {
    role: 'Full-Stack AI Developer',
    org: 'Dr. Sengupta & Associates (DRSGA)',
    period: 'Dec 2025 — Jan 2026',
    status: 'Internship',
    stats: [{ value: '1', label: 'Projects shipped' }],
    achievements: [
      'Engineered a cross-platform learning ecosystem (Flutter, Node.js, MongoDB) to streamline client workflows.',
      'Integrated a Botpress AI agent to automate client interactions and deployed a real-time admin dashboard for centralized content management.',
    ],
    tags: ['Flutter', 'Node.js', 'MongoDB', 'Botpress'],
    certificateUrl: '/docs/drsga-offer-letter.pdf',
  },
  {
    role: 'Full Stack Developer',
    org: 'XpertPACE Technologies Pvt. Ltd.',
    period: 'Aug 2025 — Dec 2025',
    status: 'Internship',
    stats: [{ value: '1', label: 'Projects shipped' }],
    achievements: [
      'Built the Medical Representative Visit Tracking Application, an enterprise-grade Flutter solution for the pharmaceutical industry with cross-platform mobile UI and state management.',
      'Implemented backend REST APIs, authentication, and role-based access control using Node.js, Express.js, PostgreSQL, and Supabase (RPC functions, Row Level Security).',
    ],
    tags: ['Flutter', 'Node.js', 'PostgreSQL', 'Supabase'],
    certificateUrl: '/docs/xpertpace-lor.pdf',
  },
  {
    role: 'Technical Head',
    org: 'TCET ACM SIGAI',
    period: 'Jun 2025 — Apr 2026',
    status: 'Leadership',
    stats: [{ value: '2', label: 'Projects shipped' }],
    achievements: [
      'Led a 30+ member technical team, assigning tasks to fix issues, ship new features, and build interactive games for events attended by 100+ participants.',
      'Collaborated with teammates to update and fix the ACM SIGAI website and app, improving the experience for 200+ students and faculty.',
    ],
    tags: ['Team Leadership', 'Web Development', 'Project Management'],
    certificateUrl: '/docs/acm-appointment-letter.pdf',
  },
];
