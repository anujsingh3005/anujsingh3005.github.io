export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

// TODO: replace with real quotes from clients, colleagues, or professors.
export const testimonials: Testimonial[] = [
  {
    quote:
      'A genuinely reliable engineer — clear communication, clean code, and always delivered on time.',
    name: 'Jane Doe',
    role: 'Engineering Manager, Company',
  },
  {
    quote:
      'Turned a vague brief into a polished product faster than we expected. Would work together again.',
    name: 'John Smith',
    role: 'Founder, Startup',
  },
  {
    quote: 'One of the strongest collaborators I’ve worked with on a team project.',
    name: 'Alex Lee',
    role: 'Peer, University Project',
  },
];
