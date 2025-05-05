import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Github, Linkedin } from 'lucide-react'; // Removed Mail, Phone


export function Hero() {
  const profileImageUrl = "https://media-hosting.imagekit.io/96d93817e2f9428a/bbq%20pic.jpg?Expires=1841072767&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KELqTHVWxXe1wrasochpESyrD2wPuUlu48xdSACmimgOgVoAiIhUmG27orB9Ks42Xkz1UAbvsiiVWgwTpgW7TQDlP5zoKoBrbaOmj6pYxxjWUZvDE9byse6UdtTwnBAWYuxeEMICvMVmmyBZNS9mpiP5pSs8i30hi9HAQETzDPzDORYVH9YvVx1f3nmzdooxMdf9Q-rtD-d2R7IWxh7NKZWvB1mbnlr6ujwtm8fALg5l80K4O2gHSJUsfjXsyLS7JW9GKCEFEGpWNkyXmtd0psgOyvm9U4M6kSI6JBzn52o3lCSgkMG5tWSORS8Ifo48QTkyCWgrMg7-6-IpAlks0Q__";

  return (
    <section id="hero" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.5fr] lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Profile Image */}
          <div className="flex justify-center lg:justify-start">
             <Avatar className="h-52 w-52 sm:h-64 sm:w-64 lg:h-80 lg:w-80 border-4 border-primary shadow-xl">
                {/* Placeholder image, replace with actual profile picture URL if available */}
                <AvatarImage src={profileImageUrl} alt="Shaik Rahil Basha" />
                <AvatarFallback>SRB</AvatarFallback>
             </Avatar>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left items-center lg:items-start">
            <div className="space-y-2">
                 <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Shaik Rahil Basha
                 </h1>
              <p className="text-primary text-xl md:text-2xl font-semibold">
                CSE(AI/ML) Student
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Enthusiastic Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. Proficient in Python and full-stack development, seeking opportunities to apply skills and learn new technologies.
              </p>
            </div>
             {/* Social Icons Only */}
             <div className="flex items-center justify-center lg:justify-start space-x-3 pt-2">
                {/* Removed Email and Phone */}
                <Link href="https://www.linkedin.com/in/rahilbasha/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://github.com/rahil786251" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                </Link>
             </div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button asChild size="lg" className="rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <Link href="#projects">
                  View My Projects
                </Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <Link href="#get-in-touch">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
