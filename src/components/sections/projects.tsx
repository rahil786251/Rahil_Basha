import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github } from 'lucide-react'; // Added Github icon

// Updated project data based on the resume
const projects = [
  {
    title: 'Diabetes Prediction System',
    category: 'Machine Learning — Flask — Scikit-Learn',
    description: 'A machine learning-based web application for predicting diabetes risk based on user-input health parameters.',
    imageUrl: 'https://picsum.photos/400/300?random=1', // Placeholder image
    tags: ['Python', 'Scikit-Learn', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Machine Learning', 'Web App'],
    liveUrl: '#', // Add live URL if available
    repoUrl: '#', // Add repository URL if available
    aiHint: 'diabetes prediction machine learning dashboard',
    details: [
        'Developed a predictive model using logistic regression and decision trees to assess diabetes risk.',
        'Implemented a user-friendly web interface using Flask to accept Age, BMI, and Skin Thickness as inputs.',
        'Ensured secure model deployment and real-time predictions without storing user data.'
    ],
    date: 'Jan 2025', // Or relevant timeframe
  },
  // Add more projects here if needed, following the same structure
  // {
  //   title: 'Project Beta',
  //   description: 'An overview of Project Beta, focusing on its purpose and the challenges overcome.',
  //   imageUrl: 'https://picsum.photos/400/300?random=2',
  //   tags: ['Next.js', 'Tailwind', 'Design'],
  //   liveUrl: '#',
  //   repoUrl: '#',
  //   aiHint: 'mobile app interface'
  // },
];

export function Projects() {
  return (
    <section id="projects" className="w-full bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 mb-8 md:mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Featured Projects</h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here's a project I've worked on, showcasing my skills in machine learning and web development.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 lg:gap-8 justify-center"> {/* Centered grid */}
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1 max-w-2xl mx-auto"> {/* Max width and auto margin */}
              <CardHeader className="p-0 relative">
                 <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600} // Increased width
                  height={350} // Adjusted height
                  data-ai-hint={project.aiHint}
                  className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-105" // Aspect ratio
                />
                 {project.date && <Badge variant="secondary" className="absolute top-3 right-3 rounded-sm text-xs shadow-md">{project.date}</Badge>}
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                 {project.category && <CardDescription className="text-sm font-medium text-primary">{project.category}</CardDescription>}
                <p className="text-sm text-muted-foreground">{project.description}</p>
                 {project.details && (
                     <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 pl-2">
                         {project.details.map((detail, i) => <li key={i}>{detail}</li>)}
                     </ul>
                 )}
                 <div className="flex flex-wrap gap-1 pt-2">
                    {project.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="rounded-sm text-xs">{tag}</Badge>
                    ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 flex justify-between items-center bg-muted/30">
                <Button variant="link" size="sm" asChild className="p-0 h-auto text-primary hover:underline disabled:opacity-50 disabled:no-underline" disabled={project.liveUrl === '#'}>
                   <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    View Live <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                 <Button variant="outline" size="sm" asChild className="rounded-full text-xs disabled:opacity-50" disabled={project.repoUrl === '#'}>
                   <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                     <Github className="mr-1 h-3 w-3"/> GitHub Repo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
