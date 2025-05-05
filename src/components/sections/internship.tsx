import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, CalendarDays, Target, Bot, TestTubeDiagonal } from 'lucide-react'; // Added icons

export function Internship() {
  const experience = {
    title: 'Artificial Intelligence Intern',
    company: 'Learn-flu Private Limited',
    period: 'July 2024 - Dec 2024',
    location: 'Bengaluru, Karnataka',
    responsibilities: [
      'Improved skills in Python and machine learning frameworks.',
      'Worked on a chatbot project using AI techniques.',
      'Learned how to train and test models for chatbot responses.',
    ],
  };

  const respIcons = [Target, Bot, TestTubeDiagonal]; // Icons corresponding to responsibilities

  return (
    <section id="internship" className="w-full bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 mb-8 md:mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight flex items-center justify-center gap-2">
             <Briefcase className="h-8 w-8 text-primary" /> Internship Experience
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
            <Card className="shadow-lg rounded-xl overflow-hidden">
                 <CardHeader className="bg-muted/30 p-4 md:p-6">
                    <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                         {experience.title}
                    </CardTitle>
                    <CardDescription className="text-md font-semibold text-primary">{experience.company}</CardDescription>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground pt-2">
                        <div className="flex items-center gap-1.5">
                            <CalendarDays className="h-4 w-4" />
                            <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                        </div>
                    </div>
                 </CardHeader>
                 <CardContent className="p-4 md:p-6 space-y-4">
                    <h4 className="font-semibold text-md">Key Responsibilities & Learnings:</h4>
                    <ul className="space-y-3">
                        {experience.responsibilities.map((resp, index) => {
                         const IconComponent = respIcons[index % respIcons.length]; // Cycle through icons
                         return (
                            <li key={index} className="flex items-start gap-3">
                                <IconComponent className="h-5 w-5 mt-1 text-accent shrink-0" />
                                <span className="text-muted-foreground">{resp}</span>
                            </li>
                         );
                        })}
                    </ul>
                 </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
