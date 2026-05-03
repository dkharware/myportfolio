
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Monitor, Server, Smartphone, Zap, Palette, ShoppingBag, Terminal } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Tech Stack',
    icon: <Code2 className="h-6 w-6 text-primary" />,
    skills: ['Next.js', 'React.js', 'TypeScript', 'GraphQL', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Shopify Ecosystem',
    icon: <ShoppingBag className="h-6 w-6 text-primary" />,
    skills: ['Liquid', 'Headless Shopify', 'Storefront API', 'Custom Theme Dev', 'Shopify Cart API'],
  },
  {
    title: 'Tools & AI',
    icon: <Terminal className="h-6 w-6 text-primary" />,
    skills: ['Git', 'GitHub', 'GitHub Copilot', 'Cursor', 'Claude', 'VSCode', 'Framer Motion'],
  },
  {
    title: 'Leadership',
    icon: <Monitor className="h-6 w-6 text-primary" />,
    skills: ['Team Leading', 'Code Reviews', 'Agile/Scrum', 'Mentoring', 'Performance Optimization'],
  },
  {
    title: 'Optimization',
    icon: <Zap className="h-6 w-6 text-primary" />,
    skills: ['SSR & SSG', 'SEO Optimization', 'Web Vitals', 'Lazy Loading', 'Asset Delivery'],
  },
  {
    title: 'Design & Workflow',
    icon: <Palette className="h-6 w-6 text-primary" />,
    skills: ['Figma', 'UI/UX Implementation', 'Monday.com', 'Cross-Browser Compatibility'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Technical <span className="text-primary">Mastery</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit focused on creating scalable, high-performance eCommerce and web solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <Card key={idx} className="bg-white hover:shadow-xl transition-all border-none group">
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
