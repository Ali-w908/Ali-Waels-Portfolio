import CustomCursor from '@/components/CustomCursor';
import DynamicBackground from '@/components/DynamicBackground';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import Hobbies from '@/components/Hobbies';
import Certificates from '@/components/Certificates';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <CustomCursor />
      <DynamicBackground />
      
      <Hero />
      <Projects />
      <Skills />
      <Timeline />
      <Hobbies />
      <Certificates />
      <Footer />
    </main>
  );
}
