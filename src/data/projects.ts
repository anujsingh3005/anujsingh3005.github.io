export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  objective: string;
  approach: string[];
  outcome: string;
}

// TODO: replace with your real projects. Add images to /public/images and reference them, e.g. "/images/project-1.png".
export const projects: Project[] = [
  {
    slug: 'project-one',
    title: 'Project One',
    summary: 'A one-line summary of what this project does and the problem it solves.',
    tags: ['React', 'TypeScript', 'Node.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/anujsingh3005/project-one',
    objective:
      'Describe the problem this project set out to solve and who it was for. What was the goal, and why did it matter?',
    approach: [
      'Describe the first major step of how you built this — architecture decisions, key challenges, or trade-offs.',
      'Describe a second step — e.g. how you handled a specific technical problem or design choice.',
      'Describe a third step — testing, iteration, or collaboration process.',
    ],
    outcome:
      'Describe the result: what shipped, how it performed, what you learned, or the measurable impact it had.',
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    summary: 'A one-line summary of what this project does and the problem it solves.',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/anujsingh3005/project-two',
    objective:
      'Describe the problem this project set out to solve and who it was for. What was the goal, and why did it matter?',
    approach: [
      'Describe the first major step of how you built this — architecture decisions, key challenges, or trade-offs.',
      'Describe a second step — e.g. how you handled a specific technical problem or design choice.',
    ],
    outcome:
      'Describe the result: what shipped, how it performed, what you learned, or the measurable impact it had.',
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    summary: 'A one-line summary of what this project does and the problem it solves.',
    tags: ['Python', 'FastAPI', 'Docker'],
    githubUrl: 'https://github.com/anujsingh3005/project-three',
    objective:
      'Describe the problem this project set out to solve and who it was for. What was the goal, and why did it matter?',
    approach: [
      'Describe the first major step of how you built this — architecture decisions, key challenges, or trade-offs.',
      'Describe a second step — e.g. how you handled a specific technical problem or design choice.',
    ],
    outcome:
      'Describe the result: what shipped, how it performed, what you learned, or the measurable impact it had.',
  },
];
