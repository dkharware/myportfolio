
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
import { 
  ExternalLink, 
  Globe, 
  ShoppingBag, 
  Shirt, 
  Wrench, 
  Code, 
  CheckCircle2, 
  Briefcase, 
  Layers,
  Cpu,
  Tv,
  Car,
  Truck,
  Gift,
  Zap
} from 'lucide-react';

const CATEGORIES = [
  "All",
  "Appliance Parts",
  "Automotive / B2B",
  "Electronics",
  "Gifting / Bundling",
  "Blog",
  "Logistics",
  "Fashion"
];

const PROJECTS = [
  {
    title: 'Samsung Parts',
    category: 'Appliance Parts',
    description: 'Front-End Lead building scalable Shopify-based platforms for US OEM brands. Developed custom themes and integrated Shopify APIs for parts management.',
    role: 'Senior Front-End Lead',
    url: 'https://samsungparts.com',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fsamsungparts.com?w=800&h=600`,
    tags: ['Next.js', 'Shopify Storefront API', 'Exploded Views'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: [
      'Architected interactive SVG-based "Exploded View" components for visual parts identification',
      'Integrated Shopify APIs for complex product and collection management',
      'Focused heavily on performance optimization and core web vitals',
      'Led the frontend transition to a headless architecture using Next.js 15'
    ]
  },
  {
    title: 'Giftmix',
    category: 'Gifting / Bundling',
    description: 'Engineered a custom advanced bundle system allowing users to select multiple products and add them as a single order using Shopify Cart API.',
    role: 'Senior Frontend Architect',
    url: 'https://shopgiftmix.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fshopgiftmix.com?w=800&h=600`,
    tags: ['Shopify Cart API', 'Vanilla JS', 'Bundling Logic'],
    icon: <Gift className="h-6 w-6" />,
    achievements: [
      'Implemented a custom bundle system bypassing native Shopify limitations via Cart API',
      'Handled complex product selection and variant mapping for multi-item requests',
      'Architected high-performance validation logic to ensure bundle integrity',
      'Optimized the checkout journey for bulk product additions'
    ]
  },
  {
    title: 'Samsung Parts USA',
    category: 'Appliance Parts',
    description: 'Strategic OEM platform for Samsung replacement parts. Focused on technical precision, interactive components, and team coordination.',
    role: 'Front-End Lead',
    url: 'https://samsungpartsusa.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fsamsungpartsusa.com?w=800&h=600`,
    tags: ['Shopify', 'React', 'OEM'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: [
      'Managed team coordination and ensured smooth delivery of critical features',
      'Developed high-performance custom themes tailored for OEM specifications',
      'Implemented interactive exploded views for visual component interaction'
    ]
  },
  {
    title: 'Simco Auto',
    category: 'Automotive / B2B',
    description: 'Full-stack B2B automotive parts distribution platform. Engineered secure procurement workflows and high-performance inventory management.',
    role: 'Senior Full Stack Developer',
    url: 'https://www.simcoauto.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.simcoauto.com?w=800&h=600`,
    tags: ['PHP', 'CodeIgniter 3', 'MySQL', 'B2B'],
    icon: <Car className="h-6 w-6" />,
    achievements: [
      'Architected a robust MVC structure using CodeIgniter 3 for enterprise distribution',
      'Developed secure B2B procurement modules for authorized dealership networks',
      'Implemented real-time MySQL database optimization for inventory queries'
    ]
  },
  {
    title: 'Liebherr Pro Appliances',
    category: 'Appliance Parts',
    description: 'Premium OEM store for Liebherr professional series. High-fidelity implementation of parts discovery and technical diagrams.',
    role: 'Front-End Lead',
    url: 'https://liebherrproappliances.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fliebherrproappliances.com?w=800&h=600`,
    tags: ['Shopify API', 'Interactive UI', 'Lead'],
    icon: <Zap className="h-6 w-6" />,
    achievements: [
      'Architected scalable Shopify-based platforms for major OEM brands',
      'Developed custom themes with integrated exploded view functionality',
      'Coordinated technical feature delivery across frontend and backend'
    ]
  },
  {
    title: 'LG Parts',
    category: 'Appliance Parts',
    description: 'Front-End Lead building scalable Shopify platforms for official LG parts. Developed custom themes and interactive exploded views.',
    role: 'Lead Frontend Architect',
    url: 'https://lgparts.com',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Flgparts.com?w=800&h=600`,
    tags: ['React', 'API Integration', 'Scalable UI'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: [
      'Developed SVG-based exploded views for visual parts identification',
      'Optimized Core Web Vitals resulting in 30% faster load times',
      'Established a unified component library for OEM scaling'
    ]
  },
  {
    title: 'Sony Parts',
    category: 'Electronics',
    description: 'Comprehensive parts store for Sony. Focused on high-fidelity UI, performance, and visual interaction via exploded diagrams.',
    role: 'Senior Front-End Lead',
    url: 'https://sonyparts.com',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fsonyparts.com?w=800&h=600`,
    tags: ['TypeScript', 'Tailwind', 'Next.js'],
    icon: <Tv className="h-6 w-6" />,
    achievements: [
      'Architected the design system adhering to Sony brand guidelines',
      'Implemented interactive product components for part identification',
      'Managed team workflows to ensure smooth delivery of headless features'
    ]
  },
  {
    title: 'Dacor Part Store',
    category: 'Appliance Parts',
    description: 'OEM platform for Dacor luxury appliances. Engineered for technical precision and high-performance part lookup.',
    role: 'Front-End Lead',
    url: 'https://dacorpartstore.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fdacorpartstore.com?w=800&h=600`,
    tags: ['Luxury OEM', 'Shopify', 'Next.js'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: [
      'Built a scalable Shopify Storefront architecture for luxury appliance owners',
      'Integrated exploded view features for visual component interaction',
      'Led performance tuning and mobile UX optimization'
    ]
  },
  {
    title: 'Original Repair Parts',
    category: 'Appliance Parts',
    description: 'High-scale OEM part store focused on user experience and technical precision in parts distribution.',
    role: 'Front-End Lead',
    url: 'https://originalrepairparts.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Foriginalrepairparts.com?w=800&h=600`,
    tags: ['eCommerce', 'Performance', 'Shopify'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: [
      'Architected custom themes for high-volume parts distribution',
      'Integrated Shopify APIs for seamless collection and part management',
      'Optimized frontend performance for large-scale SKU discovery'
    ]
  },
  {
    title: 'DeLonghi Spare Parts',
    category: 'Appliance Parts',
    description: 'Official DeLonghi parts platform. Engineered for precise component discovery and visual part interaction.',
    role: 'Senior Frontend Developer',
    url: 'https://www.delonghispareparts.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.delonghispareparts.com?w=800&h=600`,
    tags: ['Headless', 'Performance', 'Next.js'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: [
      'Developed high-performance filtering for complex coffee machine parts',
      'Optimized site speed and SEO for global spare parts markets',
      'Architected a modular component system for easier brand scaling'
    ]
  },
  {
    title: 'Elica Parts',
    category: 'Appliance Parts',
    description: 'Official store for Elica kitchen hoods. Focus on technical precision, interactive diagrams, and installer support.',
    role: 'Senior Frontend Developer',
    url: 'https://elicaparts.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Felicaparts.com?w=800&h=600`,
    tags: ['Headless', 'Performance', 'eCommerce'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: [
      'Developed streamlined part discovery interfaces for ventilation components',
      'Integrated high-performance search across thousands of manuals',
      'Optimized mobile checkout for professional technical installers'
    ]
  },
  {
    title: 'Jewelebrate',
    category: 'Fashion',
    description: 'Premium jewelry marketplace. Developed custom product customizers and high-end interactive UI features.',
    role: 'Senior Frontend Developer',
    url: 'https://jewelebrate.com',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fjewelebrate.com?w=800&h=600`,
    tags: ['React', 'Custom UI', 'Luxury UX'],
    icon: <ShoppingBag className="h-6 w-6" />,
    achievements: [
      'Engineered a dynamic jewelry customizer for rings and necklaces',
      'Implemented advanced attribute filtering for diamond specifications',
      'Optimized image loading for high-resolution luxury photography'
    ]
  },
  {
    title: 'Intercity Packers Movers',
    category: 'Logistics',
    description: 'High-conversion WordPress platform for intercity relocation. Optimized for local SEO and lead generation.',
    role: 'Frontend Developer',
    url: 'https://www.intercitypackersmoversindore.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.intercitypackersmoversindore.com%2F?w=800&h=600`,
    tags: ['WordPress', 'Local SEO', 'Performance'],
    icon: <Truck className="h-6 w-6" />,
    achievements: [
      'Architected custom theme optimized for logistics performance',
      'Implemented local SEO strategies achieving first-page rankings',
      'Engineered lead capture workflows for relocation inquiries'
    ]
  },
  {
    title: 'Marimekko Global',
    category: 'Fashion',
    description: 'Finnish design house global eCommerce. High-fidelity motion and premium design implementation.',
    role: 'UI Lead / Shopify Developer',
    url: 'https://marimekko.com',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fmarimekko.com?w=800&h=600`,
    tags: ['Design System', 'Liquid', 'Premium UX'],
    icon: <Shirt className="h-6 w-6" />,
    achievements: [
      'Translated complex Figma designs into pixel-perfect Liquid templates',
      'Implemented advanced animation patterns for luxury branding',
      'Architected modular component systems for regional launches'
    ]
  }
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
          <div className="flex justify-start md:justify-center overflow-x-auto pb-4 scrollbar-hide">
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
