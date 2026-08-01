export interface Certification {
  title: string;
  issuer: string;
  date: string;
  type: 'certification' | 'award';
  url?: string;
  image?: string;
}

// TODO: replace with your real certifications and awards, most recent first.
// `url` should point to the certificate/credential itself; `image` is shown
// on hover — swap the placeholder for a real photo/scan of the certificate.
export const certifications: Certification[] = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2025',
    type: 'certification',
    url: 'https://example.com/certificate/aws-cloud-practitioner',
    image: '/images/certificate-placeholder.svg',
  },
  {
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta (Coursera)',
    date: '2024',
    type: 'certification',
    url: 'https://example.com/certificate/meta-frontend',
    image: '/images/certificate-placeholder.svg',
  },
  {
    title: 'Winner — University Hackathon',
    issuer: 'University Name',
    date: '2024',
    type: 'award',
    image: '/images/certificate-placeholder.svg',
  },
  {
    title: "Dean's List — Academic Excellence",
    issuer: 'University Name',
    date: '2023',
    type: 'award',
    image: '/images/certificate-placeholder.svg',
  },
];
