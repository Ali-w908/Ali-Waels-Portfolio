import { portfolioData } from '../../../data/portfolioData';
import Link from 'next/link';
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
    return <div className="min-h-screen flex items-center justify-center bg-white text-anti-text"><h1 className="text-4xl font-bold tracking-tight">Project Not Found</h1></div>;
  }

  return (
    <main className="min-h-screen bg-anti-surface text-anti-text pb-24 font-sans">
      <Navigation />
      
      {/* Massive Media Header */}
      <div className="w-full h-[60vh] md:h-[80vh] relative placeholder-media rounded-none border-0 border-b border-anti-border bg-white pt-20">
        <p className="text-xl md:text-2xl font-bold tracking-tight text-anti-textMuted opacity-50">[FULL WIDTH PROJECT VIDEO/GIF PLACEHOLDER]</p>
      </div>

      <div className="max-w-6xl mx-auto px-8 md:px-16 py-16 content-z relative -mt-20">
        
        <div className="google-card p-8 md:p-16 mb-12 shadow-google">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-anti-textMuted hover:text-anti-primary transition-colors mb-12 font-medium text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to Portfolio
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{project.title}</h1>
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-anti-textMuted">
              <span className="text-lg font-bold text-anti-primary tracking-wide uppercase">{project.role}</span>
              <span className="hidden md:inline text-anti-border">•</span>
              <span className="font-medium">{project.date}</span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 tracking-tight text-anti-text">The Goal</h2>
                <p className="text-lg text-anti-textMuted leading-relaxed">
                  {project.description}
                  <br/><br/>
                  <span className="italic opacity-80">Expand on the problem statement and objective here...</span>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 tracking-tight text-anti-text">The Result</h2>
                <p className="text-lg text-anti-textMuted leading-relaxed">
                  {project.result}
                </p>
              </section>
            </div>

            <aside className="space-y-12">
              <div>
                <h3 className="text-xl font-bold mb-4 tracking-tight text-anti-text">Technologies</h3>
                <ul className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <li key={index} className="px-3 py-1.5 bg-anti-surface border border-anti-border text-anti-textMuted rounded-full font-medium text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={project.repo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-white border border-anti-border text-anti-text font-bold text-sm rounded-full hover:bg-anti-surfaceHover transition-colors shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                View on GitHub
              </a>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
