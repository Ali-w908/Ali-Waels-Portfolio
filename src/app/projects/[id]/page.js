import { portfolioData } from '../../../data/portfolioData';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetail({ params }) {
  const { id } = params;
  const project = portfolioData.projects.find(p => p.id === id);

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center bg-spectral-bg text-white"><h1 className="text-4xl">Project Not Found</h1></div>;
  }

  return (
    <main className="min-h-screen bg-spectral-bg text-white pb-24 texture-overlay">
      <Navigation />
      
      {/* Massive Media Header */}
      <div className="w-full h-[60vh] md:h-[80vh] relative placeholder-media border-b border-spectral-lighter/50">
        <p className="text-xl md:text-2xl font-bold tracking-widest opacity-50 uppercase">[FULL WIDTH PROJECT VIDEO/GIF PLACEHOLDER]</p>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-16 content-z relative">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-spectral-muted hover:text-white transition-colors mb-12 uppercase tracking-widest text-sm font-semibold border-b border-transparent hover:border-white pb-1">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <header className="mb-16 border-b border-spectral-lighter/50 pb-8">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-6">{project.title}</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-spectral-muted">
            <span className="text-xl font-semibold text-spectral-accent uppercase tracking-widest">{project.role}</span>
            <span className="hidden md:inline text-spectral-lighter">•</span>
            <span className="uppercase tracking-widest text-sm">{project.date}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6 text-white uppercase tracking-widest border-b border-spectral-lighter inline-block pb-2">The Goal</h2>
              <p className="text-lg text-gray-400 leading-relaxed bg-spectral-alt p-6 md:p-8 rounded-sm shadow-md border border-spectral-lighter/20">
                {project.description}
                <br/><br/>
                <span className="italic opacity-70">Expand on the problem statement and objective here...</span>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-white uppercase tracking-widest border-b border-spectral-lighter inline-block pb-2">The Result</h2>
              <p className="text-lg text-gray-400 leading-relaxed bg-spectral-alt p-6 md:p-8 rounded-sm shadow-md border border-spectral-lighter/20">
                {project.result}
              </p>
            </section>
          </div>

          <aside className="space-y-12">
            <div className="bg-spectral-alt p-8 rounded-sm shadow-md border border-spectral-lighter/20">
              <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-widest border-b border-spectral-lighter/50 pb-4">Technologies</h3>
              <ul className="flex flex-col gap-3">
                {project.skills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-spectral-accent"></span>
                    <span className="font-semibold tracking-wide text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href={project.repo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-5 bg-spectral-accent text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-spectral-accentHover transition-colors shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
              View on GitHub
            </a>
          </aside>
        </div>
      </div>
    </main>
  );
}
