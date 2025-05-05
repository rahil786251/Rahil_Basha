import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Lightbulb, BookOpen, Globe, Settings, Users, Code, Languages } from 'lucide-react';

export function About() {
  const education = [
    {
      degree: 'Bachelor of Technology, in CSE(AIML)',
      institution: 'Vel Tech Rangarajan Dr.Saguntala RD Institute of Science and Technology',
      period: 'June 2022 - Present',
      location: 'Chennai, India',
      details: 'CGPA: 8.7/10',
    },
    {
      degree: 'Senior Secondary (12th)',
      institution: 'Narayana Junior College',
      period: 'July 2020 - June 2022',
      location: 'Nandyal, Andhra Pradesh',
      details: 'Achieved a percentage of 82.9 %',
    },
    {
      degree: 'High School (10th)',
      institution: 'Sri Chaitanya Techno School',
      period: 'July 2019 - June 2020',
      location: 'Nandyal, Andhra Pradesh',
      details: 'Achieved a percentage of 93.33 %',
    },
  ];

  const skills = {
    'Programming Languages': ['Java', 'Python', 'C'],
    'Soft Skills': ['Communication', 'Time Management', 'Team work', 'Leadership', 'Problem Solving'],
    'Web Development': ['HTML', 'CSS', 'JavaScript'],
    'Web Dev Tools': ['VScode', 'Github'],
    'Certifications': ['Python for beginners(Infosys Springboard)', 'Introduction to Machine Learning(Kaggle)'],
    'Languages Known': ['English', 'Hindi', 'Telugu', 'Urdu'],
  };

  const skillIcons: { [key: string]: React.ElementType } = {
    'Programming Languages': Code,
    'Soft Skills': Users,
    'Web Development': Settings,
    'Web Dev Tools': Settings, // Using Settings again, adjust if needed
    'Certifications': BookOpen,
    'Languages Known': Languages,
  };


  return (
    <section id="about" className="w-full bg-background">
      <div className="container mx-auto px-4 md:px-6 space-y-12">
        {/* Objective Section */}
        <div className="text-center space-y-2">
           <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Objective</h2>
           <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Enthusiastic Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning with a 8.7 GPA. Proficient in Python and full-stack development. Looking for opportunities to apply my skills and learn new technologies.
          </p>
        </div>


        {/* Education Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-tighter flex items-center gap-2">
             <GraduationCap className="h-6 w-6 text-primary" /> Education
          </h3>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {education.map((edu, index) => (
              <Card key={index} className="shadow-md rounded-xl">
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">{edu.institution}</p>
                </CardHeader>
                <CardContent className="text-sm space-y-1">
                  <p className="text-muted-foreground">{edu.period}</p>
                  <p className="text-muted-foreground">{edu.location}</p>
                  <p>{edu.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <Card className="shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-primary" />
                Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
               {Object.entries(skills).map(([category, items]) => {
                 const IconComponent = skillIcons[category] || Lightbulb; // Default icon
                 return (
                  <div key={category} className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-4 items-start">
                     <div className="flex items-center gap-2 font-semibold text-md pt-1">
                       <IconComponent className="h-5 w-5 text-accent shrink-0" />
                       {category}
                     </div>
                     <div className="flex flex-wrap gap-2">
                       {items.map((item) => (
                          <Badge key={item} variant="secondary" className="text-sm rounded-md px-3 py-1 shadow-sm">{item}</Badge>
                       ))}
                     </div>
                  </div>
                 );
               })}
            </CardContent>
          </Card>

      </div>
    </section>
  );
}
