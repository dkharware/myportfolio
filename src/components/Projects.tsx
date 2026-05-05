
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
  Zap,
  Monitor,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const CATEGORIES = [
  "All",
  "Appliance Parts",
  "Automotive / B2B",
  "Electronics",
  "Gifting / Bundling",
  "Logistics",
  "Fashion",
  "Jewelry"
];

const OEM_DESCRIPTION = "I’ve been working as a Front-End Lead, building scalable Shopify-based eCommerce platforms for US OEM brands. My work involved developing custom themes, integrating Shopify APIs for product and collection management, and implementing an exploded view feature that allows users to interact with product components visually. I mainly work with JavaScript, and I focus heavily on performance optimization and user experience. I also handle team coordination and ensure smooth delivery of features.";

const OEM_ACHIEVEMENTS = [
  "Architected scalable Shopify-based platforms for major US OEM brands",
  "Developed custom themes and integrated Shopify APIs for complex product management",
  "Implemented interactive 'Exploded View' features for visual parts discovery",
  "Focused heavily on performance optimization, accessibility, and Core Web Vitals",
  "Managed team coordination to ensure smooth feature delivery and engineering standards"
];

const PROJECTS = [
  {
    title: 'Samsung Parts',
    category: 'Appliance Parts',
    description: OEM_DESCRIPTION,
    role: 'Senior Front-End Lead',
    url: 'https://samsungparts.com',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fsamsungparts.com?w=800&h=600`,
    tags: ['Shopify API', 'Liquid', 'JavaScript'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: OEM_ACHIEVEMENTS
  },
  {
    title: 'LG Parts',
    category: 'Appliance Parts',
    description: OEM_DESCRIPTION,
    role: 'Senior Front-End Lead',
    url: 'https://lgparts.com',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Flgparts.com?w=800&h=600`,
    tags: ['Shopify API', 'Liquid', 'JavaScript'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: OEM_ACHIEVEMENTS
  },
  {
    title: 'Sony Parts',
    category: 'Electronics',
    description: OEM_DESCRIPTION,
    role: 'Senior Front-End Lead',
    url: 'https://sonyparts.com',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fsonyparts.com?w=800&h=600`,
    tags: ['Shopify API', 'Liquid', 'JavaScript'],
    icon: <Tv className="h-6 w-6" />,
    achievements: OEM_ACHIEVEMENTS
  },
  {
    title: 'Bertazzoni Part Store',
    category: 'Appliance Parts',
    description: OEM_DESCRIPTION,
    role: 'Front-End Lead',
    url: 'https://bertazzonipartstore.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fbertazzonipartstore.com?w=800&h=600`,
    tags: ['Shopify', 'Liquid', 'JavaScript'],
    icon: <Zap className="h-6 w-6" />,
    achievements: OEM_ACHIEVEMENTS
  },
  {
    title: 'Genuine Replacement Parts',
    category: 'Appliance Parts',
    description: OEM_DESCRIPTION,
    role: 'Front-End Lead',
    url: 'https://genuinereplacementparts.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fgenuinereplacementparts.com?w=800&h=600`,
    tags: ['Shopify', 'Liquid', 'JavaScript'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: OEM_ACHIEVEMENTS
  },
  {
    title: 'Liebherr Parts Store',
    category: 'Appliance Parts',
    description: OEM_DESCRIPTION,
    role: 'Front-End Lead',
    url: 'https://liebherrpartsstore.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fliebherrpartsstore.com?w=800&h=600`,
    tags: ['Shopify', 'Liquid', 'JavaScript'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: OEM_ACHIEVEMENTS
  },
  {
    title: 'Liebherr Pro Appliances',
    category: 'Appliance Parts',
    description: OEM_DESCRIPTION,
    role: 'Front-End Lead',
    url: 'https://liebherrproappliances.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fliebherrproappliances.com?w=800&h=600`,
    tags: ['Shopify API', 'Liquid', 'JavaScript'],
    icon: <Zap className="h-6 w-6" />,
    achievements: OEM_ACHIEVEMENTS
  },
  {
    title: 'Beko Part Store',
    category: 'Appliance Parts',
    description: OEM_DESCRIPTION,
    role: 'Front-End Lead',
    url: 'https://bekopartstore.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fbekopartstore.com?w=800&h=600`,
    tags: ['Shopify', 'Liquid', 'JavaScript'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: OEM_ACHIEVEMENTS
  },
  {
    title: 'Smeg Spare Parts',
    category: 'Appliance Parts',
    description: OEM_DESCRIPTION,
    role: 'Front-End Lead',
    url: 'https://smegspareparts.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fsmegspareparts.com?w=800&h=600`,
    tags: ['Shopify', 'Liquid', 'JavaScript'],
    icon: <Zap className="h-6 w-6" />,
    achievements: OEM_ACHIEVEMENTS
  },
  {
    title: 'Original Repair Parts',
    category: 'Appliance Parts',
    description: OEM_DESCRIPTION,
    role: 'Front-End Lead',
    url: 'https://originalrepairparts.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Foriginalrepairparts.com?w=800&h=600`,
    tags: ['Shopify', 'Liquid', 'JavaScript'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: OEM_ACHIEVEMENTS
  },
  {
    title: 'Lenovo Parts Store',
    category: 'Electronics',
    description: OEM_DESCRIPTION,
    role: 'Front-End Lead',
    url: 'https://lenovopartsstore.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Flenovopartsstore.com?w=800&h=600`,
    tags: ['Shopify API', 'Liquid', 'JavaScript'],
    icon: <Monitor className="h-6 w-6" />,
    achievements: OEM_ACHIEVEMENTS
  },
  {
    title: 'Samsung Parts USA',
    category: 'Appliance Parts',
    description: OEM_DESCRIPTION,
    role: 'Front-End Lead',
    url: 'https://samsungpartsusa.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fsamsungpartsusa.com?w=800&h=600`,
    tags: ['Shopify', 'Liquid', 'JavaScript'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: OEM_ACHIEVEMENTS
  },
  {
    title: 'Dacor Part Store',
    category: 'Appliance Parts',
    description: OEM_DESCRIPTION,
    role: 'Front-End Lead',
    url: 'https://dacorpartstore.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fdacorpartstore.com?w=800&h=600`,
    tags: ['Shopify', 'Liquid', 'JavaScript'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: OEM_ACHIEVEMENTS
  },
  {
    title: 'PartStore',
    category: 'Appliance Parts',
    description: OEM_DESCRIPTION,
    role: 'Front-End Lead',
    url: 'https://partstore.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fpartstore.com?w=800&h=600`,
    tags: ['Shopify', 'Liquid', 'JavaScript'],
    icon: <Wrench className="h-6 w-6" />,
    achievements: OEM_ACHIEVEMENTS
  },
  {
    title: 'Jewelebrate',
    category: 'Jewelry',
    description: 'Premium fine jewelry eCommerce platform. Focused on luxury UI/UX, complex product attributes, and secure checkout integration for high-value transactions.',
    role: 'Senior Frontend Developer',
    url: 'https://jewelebrate.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fjewelebrate.com?w=800&h=600`,
    tags: ['Shopify', 'Liquid', 'JavaScript', 'Luxury UX'],
    icon: <Sparkles className="h-6 w-6" />,
    achievements: [
      'Developed high-fidelity Shopify templates for premium jewelry collections',
      'Implemented custom product filters for metal type, purity, and gemstone attributes',
      'Optimized image delivery for high-resolution jewelry photography',
      'Engineered responsive layouts ensuring a premium experience on mobile devices'
    ]
  },
  {
    title: 'Giftmix',
    category: 'Gifting / Bundling',
    description: 'Engineered a custom advanced bundle system using Shopify Cart API and Vanilla JS to bypass native bundling limitations.',
    role: 'Senior Frontend Architect',
    url: 'https://shopgiftmix.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fshopgiftmix.com?w=800&h=600`,
    tags: ['Shopify Cart API', 'Vanilla JS', 'Bundling Logic'],
    icon: <Gift className="h-6 w-6" />,
    achievements: [
      'Implemented custom bundle system allowing multi-product selection as a single cart entity',
      'Handled complex product selection, variant mapping, and API integration for bulk requests',
      'Architected high-performance validation logic using vanilla JS and Shopify Cart API',
      'Optimized checkout flows for seamless handling of advanced bundle items'
    ]
  },
  {
    title: 'Simco Auto',
    category: 'Automotive / B2B',
    description: 'Full-stack B2B automotive distribution platform. Engineered secure procurement workflows and high-performance inventory management.',
    role: 'Senior Full Stack Developer',
    url: 'https://www.simcoauto.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.simcoauto.com?w=800&h=600`,
    tags: ['PHP', 'CodeIgniter 3', 'MySQL', 'B2B'],
    icon: <Car className="h-6 w-6" />,
    achievements: [
      'Architected robust MVC structure using CodeIgniter 3 for enterprise distribution',
      'Developed secure B2B procurement modules for authorized dealer networks',
      'Implemented real-time MySQL database optimization for high-scale inventory'
    ]
  },
  {
    title: 'Intercity Packers Movers',
    category: 'Logistics',
    description: 'High-conversion WordPress platform for relocation services. Optimized for local SEO and strategic lead generation.',
    role: 'Frontend Developer',
    url: 'https://www.intercitypackersmoversindore.com/',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.intercitypackersmoversindore.com%2F?w=800&h=600`,
    tags: ['WordPress', 'SEO', 'Lead Gen'],
    icon: <Truck className="h-6 w-6" />,
    achievements: [
      'Architected custom theme optimized for logistics sector performance',
      'Implemented local SEO strategies achieving high-ranking search visibility',
      'Engineered strategic lead capture workflows for relocation inquiries'
    ]
  },
  {
    title: 'Marimekko Global',
    category: 'Fashion',
    description: 'High-fidelity eCommerce implementation for Finnish design house. Focused on premium UI motion and design system fidelity.',
    role: 'UI Lead / Shopify Developer',
    url: 'https://marimekko.com',
    image: `https://s0.wp.com/mshots/v1/https%3A%2F%2Fmarimekko.com?w=800&h=600`,
    tags: ['Liquid', 'Design System', 'Luxury UX'],
    icon: <Shirt className="h-6 w-6" />,
    achievements: [
      'Translated complex design fidelity into pixel-perfect Liquid templates',
      'Implemented advanced animation patterns for luxury brand storytelling',
      'Architected modular component systems for scalable regional eCommerce launches'
    ]
  }
];

export function Projects({ isSlider = false }: { isSlider?: boolean }) {
  const [activeTab, setActiveTab] = React.useState("All");

  const filteredProjects = activeTab === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  const ProjectCard = ({ project }: { project: typeof PROJECTS[0] }) => (
    <Card className="group overflow-hidden border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-700 rounded-[2.5rem] bg-white flex flex-col h-full">
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
          <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
        </div>
        <p className="text-muted-foreground text-sm font-medium leading-relaxed line-clamp-2">
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
              View Details
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
                <h4 className="text-xl font-black">Project Scope</h4>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-black">Engineering Achievements</h4>
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
                    Visit Live Site <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="All" className="space-y-12" onValueChange={setActiveTab}>
          <div className="w-full">
            <div className="flex justify-start overflow-x-auto pb-6 scrollbar-hide touch-pan-x">
              <TabsList className="flex items-center gap-2 bg-secondary/30 p-2 rounded-[2rem] h-auto border-2 border-primary/5">
                {CATEGORIES.map((cat) => (
                  <TabsTrigger 
                    key={cat} 
                    value={cat}
                    className="rounded-2xl px-6 py-3 text-sm font-bold data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-primary/20 transition-all whitespace-nowrap border-none"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          <div className="relative px-6">
            {isSlider ? (
              <Carousel className="w-full" opts={{ align: "start", loop: true }}>
                <CarouselContent className="-ml-6">
                  {filteredProjects.map((project, idx) => (
                    <CarouselItem key={`${activeTab}-${idx}`} className="pl-6 md:basis-1/2 lg:basis-1/3">
                      <ProjectCard project={project} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden md:block">
                  <CarouselPrevious className="-left-12 h-12 w-12 border-2" />
                  <CarouselNext className="-right-12 h-12 w-12 border-2" />
                </div>
              </Carousel>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                {filteredProjects.map((project, idx) => (
                  <div key={`${activeTab}-${idx}`} className="animate-in fade-in slide-in-from-bottom-8">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {activeTab === "All" && (
            <div className="flex justify-center pt-12">
              <Button asChild variant="outline" size="lg" className="rounded-2xl h-14 px-10 text-lg font-black border-2 gap-3 hover:bg-primary hover:text-white transition-all shadow-xl shadow-primary/5">
                <Link href="/projects">
                  Explore Full Portfolio <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          )}
        </Tabs>
      </div>
    </section>
  );
}
