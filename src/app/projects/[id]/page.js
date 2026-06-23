import { portfolioData } from '../../../data/portfolioData';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import CustomCursor from '@/components/CustomCursor';

// This is a dynamic route
export default function ProjectPage({ params }) {
  const { id } = params;
  const project = portfolioData.projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen relative bg-[#f8fafc]">
      <CustomCursor />
      
      {/* Background decorations specific to project page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 opacity-30">
        <div className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-indigo-200 blur-[100px]" />
        <div className="absolute top-[40%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-pink-200 blur-[80px]" />
      </div>

      <div className="max-w-5xl mx-auto px-8 py-16">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors mb-12 interactive font-medium">
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">{project.title}</h1>
          <p className="text-xl text-pink-600 font-medium">{project.role}</p>
          <p className="text-md text-slate-500 mt-2">{project.date}</p>
        </div>

        {/* Massive Video/GIF Placeholder */}
        <div className="w-full aspect-video placeholder-media bg-white/50 backdrop-blur-md rounded-3xl shadow-xl mb-16 interactive border border-white">
          <div className="text-center p-8">
            <p className="text-2xl font-bold mb-2">[PLACEHOLDER: Large Video or GIF]</p>
            <p className="text-slate-500">Showcase your {project.title} working here.</p>
            <p className="text-xs opacity-70 mt-4 font-mono">Aspect Ratio: 16:9</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="glass p-8 rounded-2xl border-l-4 border-l-indigo-400">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">The Goal</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {project.deliverables}
            </p>
          </div>
          
          <div className="glass p-8 rounded-2xl border-l-4 border-l-pink-400">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">The Result</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {project.results}
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Technologies & Skills Acquired</h2>
          <div className="flex flex-wrap gap-3">
            {project.skills.map((skill, index) => (
              <span key={index} className="px-5 py-2.5 bg-white shadow-sm text-indigo-700 rounded-xl text-sm font-semibold border border-indigo-100">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {project.repo && (
          <div className="flex justify-center mt-24 mb-12">
            <a 
              href={project.repo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg interactive hover:bg-indigo-600 hover:scale-105 transition-all shadow-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
              View on GitHub
            </a>
          </div>
        )}
      </div>
    </main>
  );
}

// Generate static params for all known projects to pre-render at build time
export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}
