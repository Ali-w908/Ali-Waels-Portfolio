import { portfolioData } from '@/data/portfolioData';
import ProjectCaseStudy from './ProjectCaseStudy';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import fs from 'fs';
import path from 'path';

export function generateStaticParams() {
  return portfolioData.projects.map((p) => ({
    slug: p.id,
  }));
}

function extractProjectData(slug) {
  const FOLDER_MAP = {
    'museum-guide': 'ROS-based-Robotic-RC-Car',
    'bvm-ventilator': 'GP-ML-BVM-Smart-E-Vent',
    'smartwatch': 'AssemblyOnSTM32',
    'pick-place-robot': 'Pick-and-Place-Robotic-Arm',
    'solar-tracker': 'Dual-Axis-Solar-Tracker',
    'bottling-simulation': 'PLC-Automated-Bottle-Filling-and-Capping-Machine',
    'embedded-linux-2025': 'Ezzmedical-Embedded-Linux/Internship2025',
    'embedded-linux-2024': 'Ezzmedical-Embedded-Linux/Internship2024',
    'atm-software': null,
    'robotic-arm': null,
  };

  // Explicit file allowlists for projects with many files
  const FILE_ALLOWLIST = {
    'museum-guide': [
      'Nav_basics/Nav_basics/scripts/Go_To_Goal.py',
      'camera_claiberation.py',
      'navigation_1.py',
      'Advanced_Robotics_Final/Advanced_Robotics_Final/ROS_Node_code_and_YOLO_Model/Museum_Guide.py',
      'Advanced_Robotics_Final/Advanced_Robotics_Final/ESP_Node_src_codes/main.cpp',
    ],
    'smartwatch': [
      'TFT_CODE.s',
      'RTC/MP_Project/code.s',
    ],
  };

  const folderName = FOLDER_MAP[slug];
  if (!folderName) return { codeSnippets: [], extractedText: [] };

  const projectPath = path.join(process.cwd(), '..', 'Projects-Info', folderName);
  
  if (!fs.existsSync(projectPath)) return { codeSnippets: [], extractedText: [] };

  const codeSnippets = [];
  const extractedText = [];

  const CODE_EXTENSIONS = ['.py', '.cpp', '.c', '.s', '.js', '.jsx', '.ts', '.tsx', '.h'];
  const TEXT_EXTENSIONS = ['.md'];

  function readFileAsSnippet(fullPath, fileName) {
    const ext = path.extname(fileName).toLowerCase();
    if (!CODE_EXTENSIONS.includes(ext) && !TEXT_EXTENSIONS.includes(ext)) return;

    let content = fs.readFileSync(fullPath, 'utf-8');
    const lines = content.split('\n');
    if (lines.length > 100) {
      content = lines.slice(0, 100).join('\n') + '\n\n// ... (content truncated to 100 lines for readability)';
    }
    if (CODE_EXTENSIONS.includes(ext)) {
      let language = 'javascript';
      if (ext === '.py') language = 'python';
      else if (ext === '.cpp' || ext === '.c' || ext === '.h') language = 'cpp';
      else if (ext === '.s') language = 'assembly';
      
      codeSnippets.push({ file: fileName, content, language });
    } else if (TEXT_EXTENSIONS.includes(ext)) {
      extractedText.push({ file: fileName, content });
    }
  }

  // If this project has an allowlist, only include those specific files
  if (FILE_ALLOWLIST[slug]) {
    for (const relativePath of FILE_ALLOWLIST[slug]) {
      const fullPath = path.join(projectPath, relativePath);
      if (fs.existsSync(fullPath)) {
        readFileAsSnippet(fullPath, path.basename(relativePath));
      }
    }
    return { codeSnippets, extractedText };
  }

  // Otherwise, recursive scan (for other projects)
  function scanDir(dir) {
    try {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        if (file === 'node_modules' || file === '.git') continue;
        
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
          scanDir(fullPath);
        } else {
          readFileAsSnippet(fullPath, file);
        }
      }
    } catch (err) {
      console.warn(`Could not read directory ${dir}`, err);
    }
  }

  scanDir(projectPath);
  return { codeSnippets, extractedText };
}

export default async function ProjectPage({ params }) {
  const resolvedParams = await params;
  const project = portfolioData.projects.find((p) => p.id === resolvedParams.slug);
  
  if (!project) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-white selection:bg-white selection:text-black">
        <h1 className="text-8xl md:text-9xl font-bold tracking-tighter uppercase mb-4 text-white/10">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold tracking-widest uppercase mb-8">Project Not Found</h2>
        <p className="text-sm font-medium opacity-60 max-w-md text-center mb-12 leading-relaxed">
          The case study you are looking for does not exist in the database or has been archived.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors font-bold tracking-widest uppercase text-xs">
          <ArrowLeft className="w-4 h-4" />
          Return Home
        </Link>
      </div>
    );
  }

  const { codeSnippets, extractedText } = extractProjectData(resolvedParams.slug);

  return <ProjectCaseStudy project={project} codeSnippets={codeSnippets} extractedText={extractedText} />;
}
