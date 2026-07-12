import fs from 'fs';
import path from 'path';
import ResumeView from './ResumeView';

export const metadata = {
  title: 'Resume — Ali Wael',
  description: 'View and download the professional CV of Ali Wael Mohamed Ali, Mechatronics Engineer.',
};

export default function ResumePage() {
  // Read the CV markdown at build time
  const cvPath = path.join(process.cwd(), 'src', 'data', 'AliWael-cv.md');
  let cvContent = '';

  try {
    cvContent = fs.readFileSync(cvPath, 'utf-8');
  } catch (e) {
    cvContent = '# CV not found\n\nPlease ensure the CV markdown file exists at `src/data/AliWael-cv.md`.';
  }

  return <ResumeView content={cvContent} />;
}
