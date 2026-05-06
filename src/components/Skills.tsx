import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Monitor, Terminal, Zap, Palette, ShoppingBag, Sparkles, Cpu } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Master Tech Stack',
    icon: <Code2 className="h-6 w-6 text-primary" />,
    skills: ['Next.js', 'React.js', 'TypeScript', 'GraphQL', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    title: 'eCommerce Architecture',
    icon: <ShoppingBag className="h-6 w-6 text-primary" />,
    skills: ['Liquid', 'Headless Shopify', 'Storefront API', 'Cart API', 'Theme Architecture'],
  },
  {
    title: 'AI & Next-Gen Workflow',
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    skills: ['GitHub Copilot', 'Cursor', 'Claude', 'AI Prompt Engineering'],
  },
  {
    title: 'Strategic Tools',
    icon: <Terminal className="h-6 w-6 text-primary" />,
    skills: ['Git', 'GitHub', 'Monday.com', 'Agile', 'VSCode', 'Figma'],
  },
  {
    title: 'Engineering Leadership',
    icon: <Monitor className="h-6 w-6 text-primary" />,
    skills: ['Technical Mentoring', 'Code Reviews', 'Team Management'],
  },
  {
    title: 'Performance & UX',
    icon: <Zap className="h-6 w-6 text-primary" />,
    skills: ['Core Web Vitals', 'SSR / ISR', 'SEO Strategy'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">Technical <span className="text-primary">Mastery</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-medium">
            A precision-tuned toolkit for architecting high-performance digital ecosystems and leading high-velocity engineering teams.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {SKILL_CATEGORIES.map((category, idx) => (
            <Card key={idx} className="bg-white border-2 border-transparent hover:border-primary/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 rounded-[2rem] group overflow-hidden">
              <CardContent className="p-8 md:p-10 space-y-8">
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-primary/5 rounded-[1.25rem] group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-4 py-2 text-xs md:text-sm font-bold bg-secondary/50 text-foreground/80 hover:bg-primary hover:text-white transition-all duration-300 rounded-xl cursor-default border-none">
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
