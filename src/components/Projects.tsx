"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  ExternalLink, 
  Globe, 
  Stethoscope, 
  ShoppingBag, 
  Shirt, 
  Wrench, 
  Code, 
  CheckCircle2, 
  Briefcase, 
  Layers 
} from 'lucide-react';

const CATEGORIES = [
  "All",
  "Appliance Parts",
  "Medical",
  "Blog",
  "Travel",
  "Fashion"
];

const PROJECTS = [
  {
    title: 'Jewelebrate',
    category: 'Fashion',
    description: 'Developed custom interactive features and a high-performance UI for a premium jewelry marketplace. Focused on luxury user experience and complex attribute management.',
    role: 'Senior Frontend Developer',
    url: 'https://jewelebrate.com',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fjewelebrate.com?w=800&h=600`,
    tags: ['React', 'Custom Features', 'Luxury UI'],
    icon: <ShoppingBag className="h-6 w-6" />,
    achievements: [
      'Engineered custom product customization engines for luxury jewelry',
      'Designed and implemented a mobile-first, high-fidelity UI layout',
      'Integrated advanced filtering systems for complex jewelry attributes',
      'Optimized site speed and conversion rates for high-ticket item checkout'
    ]
  },
  {
    title: 'Encompass eCommerce',
    category: 'Appliance Parts',
    description: 'Lead engineer for 20+ flagship eCommerce sites including samsungparts.com. Architected custom interactive exploded view components.',
    role: 'Senior Frontend Lead',
    url: 'https://samsungparts.com',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fsamsungparts.com?w=800&h=600`,
    tags: ['Next.js', 'Shopify Storefront API', 'Performance'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: [
      'Architected interactive "Exploded View" components for parts identification',
      'Integrated complex Shopify APIs for global product management',
      'Led the migration of 20+ OEM sites to a modern headless architecture',
      'Optimized load times by 40% using advanced Next.js caching strategies'
    ]
  },
  {
    title: 'StoreDevGuide',
    category: 'Blog',
    description: 'Dev-centric blogging platform built with Headless Shopify. Features server-side rendering for optimal SEO and performance.',
    role: 'Full Stack Architect',
    url: 'https://storedevguide.com',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fstoredevguide.com?w=800&h=600`,
    tags: ['Headless', 'SSR', 'Vercel'],
    icon: <Code className="h-6 w-6" />,
    achievements: [
      'Built a custom Headless CMS layer over Shopify Storefront API',
      'Implemented SSR/SSG patterns for perfect Lighthouse SEO scores',
      'Developed interactive coding quizzes and skill assessment tools',
      'Established automated CI/CD pipelines on Vercel'
    ]
  },
  {
    title: 'Al Khaleej Tours',
    category: 'Travel',
    description: 'High-performance booking engine for premium travel tours. Real-time data integration with asynchronous state management.',
    role: 'Senior Frontend Developer',
    url: 'https://alkhaleejtours.org',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Falkhaleejtours.org?w=800&h=600`,
    tags: ['JS ES6+', 'UX Design', 'API-First'],
    icon: <Globe className="h-6 w-6" />,
    achievements: [
      'Engineered a dynamic tour listing engine with real-time filtering',
      'Reduced booking friction by 25% through UX-focused form design',
      'Implemented robust client-side validation and error handling systems',
      'Optimized asset delivery for high-performance in low-bandwidth regions'
    ]
  },
  {
    title: 'Marimekko Global',
    category: 'Fashion',
    description: 'Global fashion marketplace for a Finnish premium brand. Focus on high-fidelity design implementation and fluid motion.',
    role: 'Shopify Developer / UI Lead',
    url: 'https://marimekko.com',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fmarimekko.com?w=800&h=600`,
    tags: ['Liquid', 'Motion', 'Global Scale'],
    icon: <Shirt className="h-6 w-6" />,
    achievements: [
      'Translated high-fidelity Figma designs into pixel-perfect Liquid templates',
      'Integrated complex third-party apps for localized global commerce',
      'Implemented advanced animation patterns for a luxury brand feel',
      'Maintained 99.9% uptime during high-traffic global launch events'
    ]
  },
  {
    title: 'Med-Tech Supply',
    category: 'Medical',
    description: 'B2B healthcare equipment platform. Engineered for strict procurement compliance and robust inventory handling.',
    role: 'Frontend Architect',
    url: '#',
    image: PlaceHolderImages.find(img => img.id === 'project-medical')?.imageUrl || 'https://picsum.photos/seed/medical/800/600',
    tags: ['B2B', 'Security', 'Enterprise'],
    icon: <Stethoscope className="h-6 w-6" />,
    achievements: [
      'Architected a HIPAA-compliant frontend interface for medical orders',
      'Built a robust bulk-order inventory management dashboard',
      'Implemented role-based access control for procurement officers',
      'Ensured 100% WCAG accessibility compliance across the platform'
    ]
  },
];

export function Projects({ limit }: { limit?: number }) {
  const [activeTab, setActiveTab] = React.useState("All");

  const filteredProjects = activeTab === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
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
            {displayedProjects.map((project, idx) => (
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
                      <a href={project.url} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-5 w-5 mr-2" /> Live Demo</a>
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
                  <p className="text-muted-foreground text-base font-medium leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </CardContent>

                <CardFooter className="px-8 pb-10 pt-0 flex flex-col gap-6 items-start">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="secondary" className="px-3 py-1 text-[9px] font-black tracking-widest uppercase bg-secondary/80 text-foreground/70 rounded-full border-none">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full rounded-2xl h-12 font-bold group-hover:bg-primary group-hover:text-white transition-all border-2">
                        View Project Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] p-0 border-none shadow-2xl">
                      <div className="relative h-48 w-full">
                         <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-end p-8">
                           <h2 className="text-3xl font-black text-white">{project.title}</h2>
                        </div>
                      </div>
                      
                      <div className="p-8 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                                <Briefcase className="h-4 w-4" /> Professional Role
                              </div>
                              <p className="text-lg font-bold text-foreground">{project.role}</p>
                           </div>
                           <div className="space-y-2">
                              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                                <Layers className="h-4 w-4" /> Core Tech Stack
                              </div>
                              <div className="flex flex-wrap gap-2">
                                 {project.tags.map(tag => (
                                   <Badge key={tag} className="rounded-lg">{tag}</Badge>
                                 ))}
                              </div>
                           </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-xl font-black">Summary</h4>
                          <p className="text-muted-foreground text-lg leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-xl font-black">Key Engineering Achievements</h4>
                          <div className="space-y-3">
                             {project.achievements.map((item, i) => (
                               <div key={i} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-2xl border border-primary/5">
                                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                  <p className="text-sm md:text-base font-semibold text-muted-foreground">{item}</p>
                               </div>
                             ))}
                          </div>
                        </div>

                        <div className="flex justify-end pt-4">
                          <Button asChild className="rounded-xl px-8 h-12 font-bold">
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                              Visit Project <ExternalLink className="h-4 w-4 ml-2" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}