import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Phone } from 'lucide-react'; // Added Phone
import Link from "next/link";

// Simple inline SVG for WhatsApp icon
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.627a9.9 9.9 0 1 1 6.99-2.931 9.9 9.9 0 0 1-6.99 2.931z" />
    </svg>
);


export function GetInTouch() {
  return (
    <section id="get-in-touch" className="w-full py-16 md:py-24 lg:py-32 bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-4 text-primary">
          Get In Touch
        </h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
          I'm always open to new opportunities and collaborations. Feel free to reach out through any of the channels below!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 flex-wrap">
           {/* Email Button */}
           <Button asChild size="lg" className="rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-2">
              <Link href="mailto:rahilbashashaik3@gmail.com">
                 <Mail className="h-5 w-5" />
                 rahilbashashaik3@gmail.com
              </Link>
           </Button>

            {/* WhatsApp Button */}
            <Button asChild size="lg" variant="outline" className="rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 border-primary text-primary hover:bg-primary/10 flex items-center gap-2">
                <Link href="https://wa.me/916281829752" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="h-5 w-5" />
                    +91 6281829752
                </Link>
            </Button>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex items-center justify-center space-x-4">
            <Link href="https://github.com/rahil786251" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-7 w-7" />
            </Link>
            <Link href="https://www.linkedin.com/in/rahilbasha/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-7 w-7" />
            </Link>
        </div>
      </div>
    </section>
  );
}
