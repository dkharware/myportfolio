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
  Layers,
  Cpu,
  Tv,
  Car,
  Settings
} from 'lucide-react';

const CATEGORIES = [
  "All",
  "Appliance Parts",
  "Automotive / B2B",
  "Electronics",
  "Medical",
  "Blog",
  "Travel",
  "Fashion"
];

const PROJECTS = [
  {
    title: 'Samsung Parts',
    category: 'Appliance Parts',
    description: 'Flagship eCommerce platform for official Samsung replacement parts. Engineered high-performance part search and interactive exploded views.',
    role: 'Senior Frontend Lead',
    url: 'https://samsungparts.com',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fsamsungparts.com?w=800&h=600`,
    tags: ['Next.js', 'Shopify Storefront API', 'Exploded Views'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: [
      'Architected interactive SVG-based "Exploded View" components for parts identification',
      'Optimized search indexing for over 500,000 unique SKU combinations',
      'Led the frontend transition to a headless architecture using Next.js 15',
      'Improved mobile conversion rate by 35% through streamlined checkout UX'
    ]
  },
  {
    title: 'Simco Auto',
    category: 'Automotive / B2B',
    description: 'Full-stack B2B automotive parts distribution platform. Engineered secure procurement workflows and high-performance inventory management.',
    role: 'Senior Full Stack Developer',
    url: 'https://www.simcoauto.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.simcoauto.com?w=800&h=600`,
    tags: ['PHP', 'CodeIgniter 3', 'MySQL', 'MVC', 'B2B'],
    icon: <Car className="h-6 w-6" />,
    achievements: [
      'Architected a robust MVC structure using CodeIgniter 3 for enterprise-scale auto parts distribution',
      'Developed secure B2B procurement modules for authorized dealership networks',
      'Implemented real-time MySQL database optimization for high-density inventory queries',
      'Engineered custom API endpoints for seamless third-party ERP integrations'
    ]
  },
  {
    title: 'LG Parts',
    category: 'Appliance Parts',
    description: 'Official LG parts distribution platform. Implemented robust filtering and real-time inventory synchronization.',
    role: 'Lead Frontend Architect',
    url: 'https://lgparts.com',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Flgparts.com?w=800&h=600`,
    tags: ['React', 'API Integration', 'Scalable UI'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: [
      'Developed a high-performance filtering engine for complex appliance models',
      'Integrated real-time inventory tracking across multiple warehouses',
      'Established a unified component library used across all OEM part stores',
      'Achieved sub-second page loads for critical product detail pages'
    ]
  },
  {
    title: 'Sony Parts',
    category: 'Electronics',
    description: 'Comprehensive parts store for Sony consumer electronics. Focused on high-fidelity UI and seamless user journeys.',
    role: 'Senior Frontend Developer',
    url: 'https://sonyparts.com',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fsonyparts.com?w=800&h=600`,
    tags: ['TypeScript', 'Tailwind', 'Next.js'],
    icon: <Tv className="h-6 w-6" />,
    achievements: [
      'Implemented a pixel-perfect design system adhering to Sony brand guidelines',
      'Optimized asset delivery for media-heavy parts catalogs',
      'Developed custom data visualization tools for tech-support documentation',
      'Integrated secure payment gateways with enterprise-level encryption'
    ]
  },
  {
    title: 'DeLonghi Spare Parts',
    category: 'Appliance Parts',
    description: 'Official DeLonghi spare parts and accessories platform. Engineered for precise component discovery and seamless purchasing workflows.',
    role: 'Senior Frontend Developer',
    url: 'https://www.delonghispareparts.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.delonghispareparts.com?w=800&h=600`,
    tags: ['Headless', 'Performance', 'Next.js'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: [
      'Developed a high-performance filtering system for complex coffee machine components',
      'Integrated real-time stock availability across international warehouses',
      'Optimized site speed and SEO for the global spare parts market',
      'Architected a modular component system for easier brand scaling'
    ]
  },
  {
    title: 'Elica Parts',
    category: 'Appliance Parts',
    description: 'Official parts and accessories store for Elica kitchen hoods and appliances. Focus on technical precision and installer support.',
    role: 'Senior Frontend Developer',
    url: 'https://elicaparts.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Felicaparts.com?w=800&h=600`,
    tags: ['Headless', 'Performance', 'eCommerce'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: [
      'Developed a streamlined parts discovery interface for specialized ventilation components',
      'Integrated high-performance search across thousands of product manuals',
      'Optimized mobile checkout experience for professional installers'
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
      'Engineered a dynamic 3D-style jewelry customizer for rings and necklaces',
      'Implemented advanced attribute filtering for diamond and metal specifications',
      'Developed a mobile-first, high-fidelity responsive layout for global reach',
      'Optimized image loading for high-resolution jewelry photography'
    ]
  },
  {
    title: 'Bertazzoni Part Store',
    category: 'Appliance Parts',
    description: 'Specialized parts engine for luxury Italian appliance brand Bertazzoni. Focus on high-end UX.',
    role: 'Senior Frontend Developer',
    url: 'https://bertazzonipartstore.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fbertazzonipartstore.com?w=800&h=600`,
    tags: ['Headless', 'Luxury Brand', 'Vercel'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: [
      'Created a sophisticated, brand-aligned UI for elite appliance owners',
      'Developed localized search features for the North American market',
      'Integrated complex warranty tracking systems for premium products'
    ]
  },
  {
    title: 'Genuine Replacement Parts',
    category: 'Appliance Parts',
    description: 'Multi-brand appliance parts aggregator. Built for maximum performance and broad model compatibility.',
    role: 'Frontend Architect',
    url: 'https://genuinereplacementparts.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fgenuinereplacementparts.com?w=800&h=600`,
    tags: ['Performance', 'SEO', 'React'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: [
      'Optimized large-scale product catalogs for organic search performance',
      'Implemented advanced caching layers to handle high-traffic search volume',
      'Developed a cross-brand part compatibility checker tool'
    ]
  },
  {
    title: 'Liebherr Parts Store',
    category: 'Appliance Parts',
    description: 'Dedicated part ecosystem for Liebherr refrigeration solutions. Emphasis on technical accuracy.',
    role: 'Senior Developer',
    url: 'https://liebherrpartsstore.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fliebherrpartsstore.com?w=800&h=600`,
    tags: ['Technical UI', 'Next.js', 'B2B'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: [
      'Engineered a hierarchical part navigation system for industrial refrigeration',
      'Developed interactive parts diagrams for onsite technician use',
      'Integrated B2B procurement portals for authorized service centers'
    ]
  },
  {
    title: 'Lenovo Parts Store',
    category: 'Electronics',
    description: 'Official distribution channel for Lenovo laptop and desktop components. High SKU density management.',
    role: 'Frontend Lead',
    url: 'https://lenovopartsstore.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Flenovopartsstore.com?w=800&h=600`,
    tags: ['Electronics', 'Complex Filters', 'Scale'],
    icon: <Cpu className="h-6 w-6" />,
    achievements: [
      'Architected a serial-number based part identification engine',
      'Managed high-density technical data displays for computer hardware',
      'Implemented ultra-fast fuzzy search for quick part discovery'
    ]
  },
  {
    title: 'Beko Part Store',
    category: 'Appliance Parts',
    description: 'European market leader parts platform. Optimized for global expansion and multi-lingual support.',
    role: 'Senior Frontend Developer',
    url: 'https://bekopartstore.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fbekopartstore.com?w=800&h=600`,
    tags: ['Global Scale', 'Liquid', 'Theme Design'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: [
      'Developed a scalable multi-region frontend architecture',
      'Integrated localized currency and tax calculation engines',
      'Ensured 100% WCAG accessibility compliance'
    ]
  },
  {
    title: 'Smeg Spare Parts',
    category: 'Appliance Parts',
    description: 'Design-centric parts store for Smeg appliances. Balancing aesthetic appeal with technical utility.',
    role: 'Frontend UI Specialist',
    url: 'https://smegspareparts.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fsmegspareparts.com?w=800&h=600`,
    tags: ['Aesthetic UI', 'Motion', 'React'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: [
      'Implemented brand-accurate animations for a luxury Italian feel',
      'Created custom iconography for technical appliance components',
      'Optimized the mobile checkout flow for non-technical users'
    ]
  },
  {
    title: 'StoreDevGuide',
    category: 'Blog',
    description: 'Technical blogging platform for Headless Shopify developers. Perfect Lighthouse scores.',
    role: 'Full Stack Architect',
    url: 'https://storedevguide.com',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fstoredevguide.com?w=800&h=600`,
    tags: ['Next.js', 'Headless', 'Vercel'],
    icon: <Code className="h-6 w-6" />,
    achievements: [
      'Built a headless CMS layer on top of Shopify Storefront API',
      'Achieved 100/100 Lighthouse performance and SEO scores',
      'Implemented interactive code playgrounds and syntax highlighting'
    ]
  },
  {
    title: 'Al Khaleej Tours',
    category: 'Travel',
    description: 'Luxury travel booking platform for the MENA region. Real-time availability engine.',
    role: 'Lead Frontend Developer',
    url: 'https://alkhaleejtours.org',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Falkhaleejtours.org?w=800&h=600`,
    tags: ['Booking Engine', 'API-First', 'React'],
    icon: <Globe className="h-6 w-6" />,
    achievements: [
      'Engineered an asynchronous tour availability and pricing engine',
      'Developed a custom date-picker for multi-day tour packages',
      'Integrated Arabic RTL (Right-to-Left) layout support'
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
      'Translated complex high-fidelity Figma designs into pixel-perfect Liquid templates',
      'Implemented advanced animation patterns for a luxury brand experience',
      'Architected a modular component system for global regional launches'
    ]
  },
  {
    title: 'Med-Tech Supply',
    category: 'Medical',
    description: 'B2B healthcare equipment platform. Engineered for strict procurement workflows.',
    role: 'Senior Architect',
    url: '#',
    image: PlaceHolderImages.find(img => img.id === 'project-medical')?.imageUrl || 'https://picsum.photos/seed/medical/800/600',
    tags: ['B2B', 'Enterprise', 'HIPAA'],
    icon: <Stethoscope className="h-6 w-6" />,
    achievements: [
      'Designed a secure procurement portal for institutional healthcare orders',
      'Implemented complex role-based access for buyer approval workflows',
      'Optimized bulk-ordering tools for enterprise inventory management'
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
