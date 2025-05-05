import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Internship } from '@/components/sections/internship'; // Added
import { Projects } from '@/components/sections/projects';
import { Extracurricular } from '@/components/sections/extracurricular'; // Added
import { GetInTouch } from '@/components/sections/get-in-touch';

export default function Home() {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: 'url("/ai-background.jpg")' }}>
      <Hero />
      <About />
      <Internship />
      <Projects />
      <Extracurricular />
      <GetInTouch />
    </div>
  );
}



