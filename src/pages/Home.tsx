import { About } from '../components/About';
import { CertificationsAwards } from '../components/CertificationsAwards';
import { Contact } from '../components/Contact';
import { Education } from '../components/Education';
import { Experience } from '../components/Experience';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Publications } from '../components/Publications';
import { Skills } from '../components/Skills';
import { Volunteering } from '../components/Volunteering';

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <CertificationsAwards />
      <Volunteering />
      <Publications />
      <Contact />
    </main>
  );
}
