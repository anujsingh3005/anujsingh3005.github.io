export interface Publication {
  title: string;
  venue: string;
  type: string;
  date: string;
  status?: string;
  authors: string;
  description: string;
  tags?: string[];
  externalUrl?: string;
  certificateUrl?: string;
}

// Most recent first. `externalUrl` is the published/live link (e.g.
// publisher page); `certificateUrl` points to the paper/proof PDF in
// public/docs.
export const publications: Publication[] = [
  {
    title: 'IoT-Driven Accessibility Advances: Innovative Technologies Empowering Inclusive Living',
    venue: 'Springer Nature',
    type: 'Book Chapter',
    date: '2026',
    status: 'Published — Online First (July 2026)',
    authors: 'Co-Author',
    description:
      'Contributed as co-author to this edited volume exploring how IoT-driven technologies can advance accessibility and support more inclusive living, published in Online First mode by Springer Nature.',
    tags: ['IoT', 'Accessibility'],
    externalUrl: 'https://link.springer.com/book/9789819205400',
    certificateUrl: '/docs/springer-iot-accessibility-chapter.pdf',
  },
  {
    title: 'Artificial Intelligence in Preventing Environmental Issues',
    venue: 'MULTICON-W Research Paper Competition',
    type: 'Conference Paper',
    date: '2024',
    authors: 'Anuj Singh, Aniket Bhaskar, Ganesh Singh, Chetan Yadav',
    description:
      "This paper examines the effects of environmental changes — air pollution, climate change, water pollution, and soil degradation — on human health, and explores how Artificial Intelligence can be applied to monitor climatic variations, predict future impact, and manage these issues more effectively. It further discusses AI's role in climate mitigation, air-quality monitoring, soil preservation, and carbon footprint reduction, along with key implementation challenges and strategies to improve data collection and regulatory standards.",
    tags: ['Artificial Intelligence', 'Sustainability', 'Climate Change', 'Environmental Monitoring'],
    certificateUrl: '/docs/multicon-w-2024-paper.pdf',
  },
];
