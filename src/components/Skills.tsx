import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Monitor, Server, Smartphone, Zap, Palette } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend Fundamentals',
    icon: <Code2 className="h-6 w-6 text-primary" />,
    skills: ['React', 'Next.js', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript (ES6+)'],
  },
  {
    title: 'Styling & UI',
    icon: <Palette className="h-6 w-6 text-primary" />,
    skills: ['Tailwind CSS', 'Sass/SCSS', 'Styled Components', 'Framer Motion', 'Radix UI', 'Shadcn UI'],
  },
  {
    title: 'State & Performance',
    icon: <Zap className="h-6 w-6 text-primary" />,
    skills: ['Redux', 'Zustand', 'React Query', 'Performance Optimization', 'Web Vitals'],
  },
  {
    title: 'Responsive & Platform',
    icon: <Smartphone className="h-6 w-6 text-primary" />,
    skills: ['Mobile-First Design', 'Progressive Web Apps', 'Cross-Browser Compatibility', 'Accessibility (a11y)'],
  },
  {
    title: 'Backend & Tools',
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: ['Node.js', 'GraphQL', 'Firebase', 'Git/GitHub', 'CI/CD Pipelines', 'Docker'],
  },
  {
    title: 'Professional Workflow',
    icon: <Monitor className="h-6 w-6 text-primary" />,
    skills: ['Agile/Scrum', 'Code Review', 'Pair Programming', 'Technical Documentation', 'System Design'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Technical <span className="text-primary">Mastery</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit built over 5 years, focused on creating scalable, efficient, and accessible web solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <Card key={idx} className="bg-white hover:shadow-xl transition-shadow border-none group">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/5 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 font-medium bg-muted/50 hover:bg-primary hover:text-white transition-all cursor-default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}