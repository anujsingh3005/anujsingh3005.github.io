export interface FeatureGroup {
  heading: string;
  items: string[];
}

export interface Project {
  slug: string;
  name: string;
  title: string;
  tagline: string;
  summary: string;
  tags: string[];
  timeline?: string;
  deployedAt?: string;
  platform?: string;
  teamNote?: string;
  contribution?: string;
  overview: string;
  featureGroups: FeatureGroup[];
  extraSection?: FeatureGroup;
  image?: string;
}

// Most recent first. `image` is optional — cards fall back to a text
// placeholder when absent.
export const projects: Project[] = [
  {
    slug: 'scope',
    name: 'S.C.O.P.E.',
    title: 'S.C.O.P.E. — Secure Cognitive Online Proctoring Ecosystem',
    tagline: 'Full-stack proctored assessment platform for Training & Placement drives',
    summary:
      'A proctored, computer-based exam platform combining Aptitude, Technical MCQs, and live coding in one workspace, graded via a self-hosted Judge0 cluster.',
    tags: [
      'React 19',
      'Vite',
      'Node.js',
      'Express 5',
      'Prisma',
      'PostgreSQL',
      'Docker',
      'Nginx',
      'Redis',
      'Judge0',
      'Socket.IO',
      'Monaco Editor',
      'JWT',
    ],
    timeline: 'Feb 2026 — Apr 2026',
    deployedAt: 'Thakur College of Engineering & Technology',
    overview:
      'A full-stack web app running proctored, computer-based exams combining Aptitude MCQs, Technical MCQs, and hands-on Coding problems in one workspace — graded via a self-hosted Judge0 cluster. Supports 4 account roles (Student, Teacher, TnP Admin, Super Admin), each with its own dashboard.',
    featureGroups: [
      {
        heading: 'Student Experience',
        items: [
          'Live exam dashboard with server-synced countdown timer (not device clock — prevents time manipulation)',
          'In-browser Monaco IDE (VS Code-style) with language switcher, boilerplate code, and separate Run (sample tests) vs. Submit (hidden tests) actions',
          'Split timers: overall duration + separate coding-phase duration with automatic hand-off',
          '"Best attempt" protection — a worse resubmission never overwrites a higher-scoring one',
          'Anti-navigation guards: blocked back button, tab-close warnings, on-screen proctoring alerts',
          'Post-exam Analysis Board: score breakdown, percentile rank, top-5 leaderboard, runtime/memory percentile vs. peers',
        ],
      },
      {
        heading: 'Admin / TnP Tools',
        items: [
          'Test Scheduler with Draft/Upcoming/Live/Completed states, attempt limits, start/end passwords',
          'Coding Problem Builder: Markdown editor with live preview, per-language time-limit multipliers, bulk ZIP-based test case import',
          'Bulk question import via Aiken-format .txt files',
          'Live Test Monitor: real-time leaderboard, live coding telemetry per problem, live time-extension broadcast to all active students via WebSockets',
          'Post-test analytics: full leaderboard, percentile-band distribution, per-student answer/code drill-down',
        ],
      },
      {
        heading: 'Infrastructure & Grading Engine',
        items: [
          'Distributed microservices: Nginx load balancer + Redis job queue distributing code payloads across isolated Judge0 Docker nodes',
          'Supports 8 languages: Java, Python 3, C++, C, JavaScript, C#, Go, SQL',
          'Scoring model: Aptitude + Technical + Coding (test cases passed ÷ total × marks)',
          'Super Admin: live Distributed Cluster Telemetry dashboard — CPU/RAM per worker node, Redis queue length, cluster health status (5-second refresh)',
        ],
      },
    ],
    extraSection: {
      heading: 'Performance & Load Testing (k6)',
      items: [
        '446,340 requests processed at 1,487 RPS with 0.00% failure rate under simulated DoS traffic',
        '30,000 heavy code payloads executed at ~400 RPS with zero backend stutter or DB deadlocks',
        'Optimized to safely support 6,000–7,500 concurrent users',
      ],
    },
  },
  {
    slug: 'sg-academy-lms',
    name: 'SG Academy LMS',
    title: 'SG Academy — Learning Management System (LMS)',
    tagline: 'Full-stack LMS bridging content management and mobile learning',
    summary:
      'A secure LMS with a lightweight admin dashboard for content orchestration and a cross-platform Flutter app for student consumption.',
    tags: ['Flutter', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary', 'pdf-lib', 'Vanilla JS'],
    timeline: 'Dec 2025 — Feb 2026',
    platform: 'Cross-platform Mobile & Web',
    overview:
      'A secure LMS with a lightweight Vanilla JS Admin Dashboard for content orchestration and a cross-platform Flutter app for student consumption.',
    featureGroups: [
      {
        heading: 'Key Features',
        items: [
          'Data Modeling: MongoDB schemas mapping nested educational structures — Categories → Courses → Chapters → Quizzes',
          'Gamification: Progress-tracking engine with a Bayesian average weighting system to rank "Bestseller" content fairly (avoiding bias toward newly-listed courses)',
          'Security: Role-based access control (RBAC) via JWT + Bcrypt password hashing',
          'Automated Credentialing: Cloudinary integration for scalable media delivery + pdf-lib to auto-issue verifiable completion certificates once a student crosses 95% course completion',
        ],
      },
    ],
    extraSection: {
      heading: 'Notable Technical Problem-Solving',
      items: [
        '"Ghost Module" bug fix: Resolved persistent deletion bugs by replacing standard Mongoose ID matching with a custom Index-Based Deletion strategy for mixed-type nested arrays',
        'Dynamic certificate layouts: Built pixel-width calculation logic in the pdf-lib pipeline so variable-length student names always center correctly without overflow',
        'Schema flexibility: Used strict: false and .lean() selectively to handle unstructured educational data without breaking schema rigidity elsewhere',
      ],
    },
  },
  {
    slug: 'xpertpace-mr-tracking',
    name: 'XpertPACE MR Tracking',
    title: 'XpertPACE — Medical Representative Visit Tracking System',
    tagline: 'Centralized field-operations platform for pharmaceutical MR tracking, with AI-assisted manager analytics',
    summary:
      'Digitizes MR visit logging, attendance, and territory coverage with a verifiable backend and real-time manager dashboards, including an AI-assisted analytics engine.',
    tags: ['Flutter', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Socket/Realtime'],
    teamNote:
      'Team Project — built with Rudra Sharma (Backend & Secure Visit Verification) and Niyati Shetty (Salesperson Dashboard)',
    contribution: 'Manager Dashboard, Technical Backend & AI Analytics Engine',
    overview:
      'Digitizes MR visit logging, attendance, and territory coverage — replacing manual/WhatsApp-based reporting with a verifiable, auditable backend plus real-time dashboards for managers.',
    featureGroups: [
      {
        heading: 'Manager Dashboard',
        items: [
          '360° oversight aggregating thousands of visit/sales data points into actionable KPIs',
          'Live activity feed of MR actions with confidence scores, plus team visit-outcomes chart and live Sales Leaderboard',
          'Client/itinerary management with per-client visit history and unassigned-visit reassignment',
          'Searchable team roster by role (Sales Executive, Senior Executive, Area Manager)',
        ],
      },
      {
        heading: '"Ask AI" — Comparative Analytics Engine',
        items: [
          'AI-assisted chat interface letting managers request on-demand performance comparisons between named MRs',
          'Auto-generates bar and radar charts from natural-language queries',
          'Radar charts overlay multiple metrics (e.g. speed vs. volume) to surface coaching opportunities hidden in raw numbers',
        ],
      },
      {
        heading: 'Security & State Management',
        items: [
          'JWT authentication with Role-Based Access Control (MR / Manager / Admin), each landing in a purpose-built interface',
          'Reactive global session state (Provider pattern) — UI rebuilds automatically if a session expires or a role changes server-side',
          'Secure logout clearing all cached session data from device memory',
        ],
      },
      {
        heading: 'System-Wide Contributions',
        items: [
          'Organizational alignment: persistent Announcements feed pushing campaign updates and compliance policies directly to field staff',
          'Roll-up KPI calculations: individual visit data aggregates from MR → Admin → Region → Company in real time',
          'Indexing on mrId and visitDateTime for millisecond-level query response on high-volume visit data; leaderboard sorting optimized to ~O(log n) via server-side indexing',
        ],
      },
    ],
  },
];
