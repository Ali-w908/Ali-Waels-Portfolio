import fs from 'fs';
import path from 'path';
import ResumeView from './ResumeView';

export const metadata = {
  title: 'Resume — Ali Wael',
  description: 'View and download the professional CV of Ali Wael Mohamed Ali, Mechatronics Engineer.',
};

export default function ResumePage() {
  // Read the CV markdown at build time
  const cvPath = path.join(process.cwd(), '..', 'CVs', 'AliWael-cv.md');
  let cvContent = '';

  try {
    cvContent = fs.readFileSync(cvPath, 'utf-8');
  } catch (e) {
    // Fallback: try from the portfolio root
    try {
      const fallbackPath = path.join(process.cwd(), 'CVs', 'AliWael-cv.md');
      cvContent = fs.readFileSync(fallbackPath, 'utf-8');
    } catch {
      cvContent = '# CV not found\n\nPlease ensure the CV markdown file exists at `CVs/AliWael-cv.md`.';
    }
  }

  return <ResumeView content={cvContent} />;
}
