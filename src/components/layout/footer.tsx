import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react'; // Removed Twitter, Instagram, Phone
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40 py-6 mt-auto">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Shaik Rahil Basha. All rights reserved.
        </p>
        <div className="flex items-center space-x-1 sm:space-x-2">
           <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:rahilbashashaik3@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
          {/* Removed Phone Link - Included in Get In Touch */}
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/rahil786251" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/rahilbasha/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
           {/* Removed Twitter and Instagram for brevity */}
        </div>
      </div>
    </footer>
  );
}
