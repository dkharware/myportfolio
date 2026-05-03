import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Quantum Analytics Dashboard',
    description: 'A high-performance real-time analytics dashboard built for enterprise data visualization. Features complex charting and customizable widgets.',
    image: PlaceHolderImages.find(img => img.id === 'project-1'),
    tags: ['Next.js', 'TypeScript', 'Recharts', 'Zustand'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'EcoFlow E-commerce',
    description: 'A fully responsive sustainable fashion marketplace with a mobile-first approach and lightning-fast product filtering.',
    image: PlaceHolderImages.find(img => img.id === 'project-2'),
    tags: ['React', 'Tailwind CSS', 'GraphQL', 'Shopify'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'FinTrack Pro',
    description: 'A personal finance management platform focusing on accessibility and seamless user experience across all devices.',
    image: PlaceHolderImages.find(img => img.id === 'project-3'),
    tags: ['React Native', 'Firebase', 'Chart.js', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Featured <span className="text-primary">Projects</span></h2>
            <p className="text-muted-foreground max-w-xl">
              Selected works that showcase my expertise in building complex, user-centric web applications with modern tech stacks.
            </p>
          </div>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white transition-all">
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, idx) => (
            <Card key={idx} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <div className="relative aspect-video overflow-hidden">
                {project.image && (
                  <Image
                    src={project.image.imageUrl}
                    alt={project.image.description}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    data-ai-hint={project.image.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-4">
                    <Button variant="secondary" size="sm" asChild className="rounded-full">
                      <a href={project.liveUrl}><ExternalLink className="h-4 w-4 mr-2" /> Live Demo</a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="rounded-full bg-white/20 backdrop-blur-sm border-white/50 text-white hover:bg-white hover:text-black">
                      <a href={project.githubUrl}><Github className="h-4 w-4" /></a>
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-[10px] tracking-widest uppercase font-bold py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}