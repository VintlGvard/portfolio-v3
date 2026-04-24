import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';
import Info from '@/components/Info';

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Info />
      <Contact />
    </>
  );
}
