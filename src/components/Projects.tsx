"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink, Globe, Stethoscope, Utensils, Shirt, Wrench, Code } from 'lucide-react';

const CATEGORIES = [
  "All",
  "Appliance Parts",
  "Medical",
  "Blog",
  "Travel",
  "Food",
  "Fashion"
];

const PROJECTS = [
  {
    title: 'Encompass eCommerce',
    category: 'Appliance Parts',
    description: 'Lead engineer for 20+ flagship eCommerce sites including samsungparts.com. Architected custom interactive exploded view components.',
    url: 'https://samsungparts.com',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fsamsungparts.com?w=800&h=600`,
    tags: ['Next.js', 'Shopify Storefront API', 'Performance'],
    icon: <Wrench className="h-6 w-6" />,
  },
  {
    title: 'StoreDevGuide',
    category: 'Blog',
    description: 'Dev-centric blogging platform built with Headless Shopify. Features server-side rendering for optimal SEO and performance.',
    url: 'https://storedevguide.com',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fstoredevguide.com?w=800&h=600`,
    tags: ['Headless', 'SSR', 'Vercel'],
    icon: <Code className="h-6 w-6" />,
  },
  {
    title: 'Al Khaleej Tours',
    category: 'Travel',
    description: 'High-performance booking engine for premium travel tours. Real-time data integration with asynchronous state management.',
    url: 'https://alkhaleejtours.org',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Falkhaleejtours.org?w=800&h=600`,
    tags: ['JS ES6+', 'UX Design', 'API-First'],
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: 'Protein Country Bundle',
    category: 'Food',
    description: 'Custom complex bundling engine utilizing Shopify Cart API. Streamlines the purchasing flow for nutrition products.',
    url: 'https://proteincountry.com',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fproteincountry.com?w=800&h=600`,
    tags: ['Cart API', 'Complex Logic', 'React'],
    icon: <Utensils className="h-6 w-6" />,
  },
  {
    title: 'Marimekko Global',
    category: 'Fashion',
    description: 'Global fashion marketplace for a Finnish premium brand. Focus on high-fidelity design implementation and fluid motion.',
    url: 'https://marimekko.com',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fmarimekko.com?w=800&h=600`,
    tags: ['Liquid', 'Motion', 'Global Scale'],
    icon: <Shirt className="h-6 w-6" />,
  },
  {
    title: 'Med-Tech Supply',
    category: 'Medical',
    description: 'B2B healthcare equipment platform. Engineered for strict procurement compliance and robust inventory handling.',
    url: '#',
    image: PlaceHolderImages.find(img => img.id === 'project-medical')?.imageUrl || '',
    tags: ['B2B', 'Security', 'Enterprise'],
    icon: <Stethoscope className="h-6 w-6" />,
  },
];

export function Projects() {
  const [activeTab, setActiveTab] = React.useState("All");

  const filteredProjects = activeTab === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Case <span className="text-primary">Studies</span></h2>
            <p className="text-muted-foreground max-w-2xl text-lg md:text-xl font-medium leading-relaxed">
              Engineered solutions across specialized industries, focused on scalability and conversion.
            </p>
          </div>
        </div>

        <Tabs defaultValue="All" className="space-y-12" onValueChange={setActiveTab}>
          <div className="flex justify-start md:justify-center overflow-x-auto pb-4">
            <TabsList className="bg-secondary p-1.5 rounded-[1.5rem] h-auto border-2 border-primary/5">
              {CATEGORIES.map((cat) => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="rounded-2xl px-6 py-3 text-sm font-bold data-[state=active]:bg-primary data-[state=active]:text-white transition-all whitespace-nowrap shadow-none border-none"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {filteredProjects.map((project, idx) => (
              <Card key={`${activeTab}-${idx}`} className="group overflow-hidden border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-700 rounded-[2.5rem] bg-white flex flex-col h-full animate-in fade-in slide-in-from-bottom-8">
                <div className="relative aspect-[16/10] overflow-hidden m-4 rounded-[1.75rem]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    data-ai-hint="website screenshot"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <Button variant="secondary" size="lg" asChild className="rounded-full shadow-2xl scale-90 group-hover:scale-100 transition-transform font-bold">
                      <a href={project.url} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-5 w-5 mr-2" /> Explore Solution</a>
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-8 space-y-5 flex-grow">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/5 rounded-[1.25rem] group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-sm">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-black text-foreground">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-base font-medium leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>

                <CardFooter className="px-8 pb-10 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="px-4 py-1.5 text-[10px] font-black tracking-widest uppercase bg-secondary/80 text-foreground/70 rounded-full border-none">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}