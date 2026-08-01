export interface SemesterResult {
  label: string;
  cgpa: string;
  scorecardImage?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score?: string;
  coursework: string[];
  semesters?: SemesterResult[];
}

// TODO: `period` is inferred from "final-year" + 6 completed semesters —
// confirm your actual start/end years. `semesters` CGPA values are still
// placeholders; swap in your real per-semester CGPA and, once you have
// scorecard scans, set `scorecardImage` per semester (e.g.
// "/images/scorecards/sem-1.jpg") to make that tile open it in the lightbox.
export const education: EducationItem[] = [
  {
    degree: 'B.Tech, Artificial Intelligence & Machine Learning',
    institution: 'Thakur College of Engineering & Technology (TCET), Mumbai',
    period: '2023 — 2027 (Expected)',
    score: 'CGPA: 8.45 / 10 (through Sem 6)',
    coursework: [
      'Data Structures & Algorithms',
      'Machine Learning',
      'Artificial Intelligence',
      'Database Management Systems',
      'Deep Learning / Neural Networks',
      'Operating Systems',
      'Probability & Statistics',
      'System Design',
    ],
    semesters: [
      { label: 'Sem 1', cgpa: '8.2' },
      { label: 'Sem 2', cgpa: '8.4' },
      { label: 'Sem 3', cgpa: '8.3' },
      { label: 'Sem 4', cgpa: '8.6' },
      { label: 'Sem 5', cgpa: '8.5' },
      { label: 'Sem 6', cgpa: '8.7' },
    ],
  },
];
