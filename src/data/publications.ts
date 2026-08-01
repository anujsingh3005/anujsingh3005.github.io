export interface Publication {
  title: string;
  venue: string;
  date: string;
  url?: string;
}

// TODO: replace with your real publications, most recent first. Remove the url field for entries with no public link.
export const publications: Publication[] = [
  {
    title: 'Paper Title Goes Here: A Study on Something Relevant',
    venue: 'Conference or Journal Name',
    date: '2025',
    url: 'https://example.com',
  },
  {
    title: 'Another Publication or Technical Write-up',
    venue: 'Publication Venue',
    date: '2024',
  },
];
