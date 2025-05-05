import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Award, CalendarCheck2 } from 'lucide-react'; // Example icons

export function Extracurricular() {
  const activities = [
    {
      title: 'First Place Winner, in Clue Less Coders event',
      event: "Tantraz'2k25 (200 participants)",
      date: 'March, 2025',
      icon: Trophy,
    },
    {
      title: 'Qualified GATE 2025 (Computer Science)',
      details: 'with AIR 20k',
      icon: Award,
      date: 'Result Date (e.g. Feb 2025)', // Assuming a date, adjust if needed
    },
    // Add more activities here if needed
  ];

  return (
    <section id="extracurricular" className="w-full bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 mb-8 md:mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Extra-Curricular Activities</h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Highlights of my involvement and achievements outside academics.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 justify-center">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon || Award; // Default icon
            return (
                <Card key={index} className="shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-lg mx-auto">
                    <CardHeader className="flex flex-row items-center gap-4 p-4 bg-card">
                        <IconComponent className="h-8 w-8 text-primary shrink-0" />
                        <div className="flex-1 space-y-1">
                            <CardTitle className="text-lg">{activity.title}</CardTitle>
                            {activity.event && <p className="text-sm text-muted-foreground font-medium">{activity.event}</p>}
                             {activity.details && <p className="text-sm text-muted-foreground">{activity.details}</p>}
                        </div>
                    </CardHeader>
                    {activity.date && (
                        <CardContent className="p-4 pt-0">
                            <div className="flex items-center text-xs text-muted-foreground gap-1.5">
                                <CalendarCheck2 className="h-3.5 w-3.5" />
                                <span>{activity.date}</span>
                            </div>
                        </CardContent>
                    )}
                </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
