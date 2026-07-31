export interface Project {
  title: string;
  summary: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

// TODO: replace with your real projects. Add images to /public/images and reference them, e.g. "/images/project-1.png".
export const projects: Project[] = [
  {
    title: 'Project One',
    summary: 'A one-line summary of what this project does and the problem it solves.',
    tags: ['React', 'TypeScript', 'Node.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/anujsingh30005/project-one',
  },
  {
    title: 'Project Two',
    summary: 'A one-line summary of what this project does and the problem it solves.',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/anujsingh30005/project-two',
  },
  {
    title: 'Project Three',
    summary: 'A one-line summary of what this project does and the problem it solves.',
    tags: ['Python', 'FastAPI', 'Docker'],
    githubUrl: 'https://github.com/anujsingh30005/project-three',
  },
];
