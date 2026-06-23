import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import Hobbies from '@/components/Hobbies';
import Certificates from '@/components/Certificates';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative text-spectral-text">
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Hobbies />
      <Certificates />
      <Footer />
    </main>
  );
}
