export interface CertAward {
  title: string;
  type: 'certification' | 'award';
  date?: string;
  issuer?: string;
  instructors?: string;
  score?: string;
  duration?: string;
  result?: string;
  project?: string;
  venue?: string;
  details?: string;
  certificateUrl?: string;
  image?: string;
}

// Most recent first within each group. `certificateUrl` points to a proof
// PDF in public/docs. `image` is shown on hover — a real event photo where
// we have one, otherwise a rendered preview of the actual certificate PDF
// (same document as `certificateUrl`). Entries with no real certificate at
// all (e.g. InnovGenius) omit `image` entirely rather than faking one.
export const awards: CertAward[] = [
  {
    title: 'Aether National Students Conference (NSC-ETT)',
    type: 'award',
    result: 'Winner — 1st Place, Poster Presentation',
    project: 'Cultural Heritage Preservation Through Digital Technologies',
    date: 'Sep 26, 2025',
    venue: 'Thakur College of Engineering & Technology (TCET), Mumbai',
    details:
      'Presented a poster on using 3D photogrammetry, AR, and AI to protect and democratize access to cultural heritage. Team led by Suhani Singh.',
    certificateUrl: '/docs/aether-nsc-ett-certificate.pdf',
    image: '/images/aether-nsc-ett-award.jpg',
  },
  {
    title: 'DIPEX 2025',
    type: 'award',
    result: 'Finalist — Reached Round 3 (Final Round), State-Level Exhibition-cum-Competition',
    project: 'Alertica — AI-powered Women Safety App',
    date: 'Apr 3–6, 2025',
    venue: 'COEP Technological University, Pune',
    details:
      'Presented a safety app featuring silent SOS, real-time alerts, and offline SMS notifications; received strong feedback from judges and industry experts. Organized by ABVP & COEP Technological University.',
    certificateUrl: '/docs/dipex-2025-certificate.pdf',
    image: '/images/dipex-2025-photo.jpg',
  },
  {
    title: 'Hackanova',
    type: 'award',
    result: 'Finalist',
    venue: 'TCET (National Level)',
    certificateUrl: '/docs/hackanova-certificate.pdf',
    image: '/images/hackanova-photo.jpg',
  },
  {
    title: 'InnovGenius Hackathon',
    type: 'award',
    result: 'Finalist',
    venue: 'Organized by TCET ACM SIGAI & SIGIT',
    // TODO: no certificate uploaded yet — send project name/date when available.
  },
];

export const certifications: CertAward[] = [
  {
    title: 'The Complete Full-Stack Web Development Bootcamp',
    type: 'certification',
    issuer: 'Udemy',
    instructors: 'Dr. Angela Yu',
    date: 'Jan 17, 2026',
    duration: '62 hours',
    certificateUrl: '/docs/webdev-bootcamp-certificate.pdf',
    image: '/images/webdev-bootcamp-certificate.jpg',
  },
  {
    title: 'Machine Learning A-Z: AI, Python & R + ChatGPT Prize',
    type: 'certification',
    issuer: 'Udemy',
    instructors: 'Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team, Ligency Team',
    date: 'Apr 26, 2024',
    duration: '43 hours',
    certificateUrl: '/docs/ml-az-udemy-certificate.pdf',
    image: '/images/ml-az-udemy-certificate.jpg',
  },
  {
    title: 'Python 3.4.3 Training',
    type: 'certification',
    issuer: 'Spoken Tutorial Project, IIT Bombay',
    date: 'Mar 1, 2024',
    score: '73.71% (4 Credits)',
    certificateUrl: '/docs/python-spoken-tutorial-certificate.pdf',
    image: '/images/python-spoken-tutorial-certificate.jpg',
  },
];
