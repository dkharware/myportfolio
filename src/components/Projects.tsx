
"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink, ShoppingCart, Layout, Globe, Stethoscope, Utensils, Shirt, Wrench } from 'lucide-react';

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
    description: 'Lead for 20+ Sites including samsungparts.com. Custom themes with interactive exploded view components.',
    image: PlaceHolderImages.find(img => img.id === 'project-encompass'),
    tags: ['Next.js', 'React', 'Shopify API'],
    liveUrl: 'https://samsungparts.com',
    icon: <Wrench className="h-5 w-5" />,
  },
  {
    title: 'Med-Tech Supply',
    category: 'Medical',
    description: 'Specialized healthcare equipment marketplace. Optimized for B2B procurement and medical standard compliance.',
    image: PlaceHolderImages.find(img => img.id === 'project-medical'),
    tags: ['React', 'Next.js', 'Tailwind'],
    liveUrl: '#',
    icon: <Stethoscope className="h-5 w-5" />,
  },
  {
    title: 'StoreDevGuide',
    category: 'Blog',
    description: 'Developer blogging platform using Headless architecture. Decoupled frontend for high performance.',
    image: PlaceHolderImages.find(img => img.id === 'project-storedev'),
    tags: ['Next.js', 'Headless Shopify', 'SSR'],
    liveUrl: 'https://storedevguide.com',
    icon: <Layout className="h-5 w-5" />,
  },
  {
    title: 'Al Khaleej Tours',
    category: 'Travel',
    description: 'Responsive booking platform with dynamic UI for tour listings. Integrated real-time data fetching.',
    image: PlaceHolderImages.find(img => img.id === 'project-alkhaleej'),
    tags: ['JS ES6', 'AJAX', 'UX Design'],
    liveUrl: 'https://alkhaleejtours.org',
    icon: <Globe className="h-5 w-5" />,
  },
  {
    title: 'Protein Country Bundle',
    category: 'Food',
    description: 'Custom bundle add-to-cart engine using Shopify Cart API. Simplifies complex nutrition product selections.',
    image: PlaceHolderImages.find(img => img.id === 'project-bundle'),
    tags: ['JavaScript', 'Cart API', 'Food Tech'],
    liveUrl: 'https://proteincountry.com',
    icon: <Utensils className="h-5 w-5" />,
  },
  {
    title: 'Marimekko Global',
    category: 'Fashion',
    description: 'Global fashion eCommerce for premium Finnish brand. Focused on high-fidelity UI and seamless checkout.',
    image: PlaceHolderImages.find(img => img.id === 'project-marimekko'),
    tags: ['Shopify', 'Liquid', 'eCommerce'],
    liveUrl: 'https://marimekko.com',
    icon: <Shirt className="h-5 w-5" />,
  },
];

export function Projects() {
  const [activeTab, setActiveTab] = React.useState("All");

  const filteredProjects = activeTab === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Featured <span className="text-primary">Impact</span></h2>
            <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
              Scalable ecosystems built across diverse industries, from high-performance appliance parts to global fashion stores.
            </p>
          </div>
        </div>

        <Tabs defaultValue="All" className="space-y-10" onValueChange={setActiveTab}>
          <div className="flex justify-start md:justify-center overflow-x-auto pb-4 -mx-6 px-6">
            <TabsList className="bg-muted/50 p-1 rounded-2xl h-auto">
              {CATEGORIES.map((cat) => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="rounded-xl px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white transition-all whitespace-nowrap"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {filteredProjects.map((project, idx) => (
              <Card key={`${activeTab}-${idx}`} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col h-full bg-white animate-in fade-in slide-in-from-bottom-4">
                <div className="relative aspect-video overflow-hidden">
                  {project.image && (
                    <Image
                      src={project.image.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      data-ai-hint={project.image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 md:p-6">
                    <Button variant="secondary" size="sm" asChild className="rounded-full shadow-lg">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4 mr-2" /> Visit Site</a>
                    </Button>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary border-none shadow-sm">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-5 md:p-6 space-y-4 flex-grow">
                  <div className="flex items-center gap-3 text-primary">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {project.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="px-5 md:px-6 pb-6 md:pb-8 pt-0 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-[9px] md:text-[10px] tracking-wider uppercase font-bold py-1 bg-muted/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-muted/20 rounded-3xl border-2 border-dashed">
              <p className="text-muted-foreground">No projects found in this category yet.</p>
            </div>
          )}
        </Tabs>
      </div>
    </section>
  );
}
