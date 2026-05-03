
"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink, ShoppingCart, Layout, Globe } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Encompass eCommerce',
    description: 'Front-End Lead for 20+ Sites including samsungparts.com and sonyparts.com. Custom Shopify themes with exploded view interactive components.',
    image: PlaceHolderImages.find(img => img.id === 'project-encompass'),
    tags: ['Next.js', 'React', 'Shopify API', 'Liquid'],
    liveUrl: 'https://samsungparts.com',
    icon: <ShoppingCart className="h-5 w-5" />,
  },
  {
    title: 'StoreDevGuide',
    description: 'Developer-focused blogging platform built with Headless Architecture. Decoupled frontend from Shopify for extreme performance.',
    image: PlaceHolderImages.find(img => img.id === 'project-storedev'),
    tags: ['Next.js', 'Headless Shopify', 'SSR', 'Vercel'],
    liveUrl: 'https://storedevguide.com',
    icon: <Layout className="h-5 w-5" />,
  },
  {
    title: 'Bundle Add-to-Cart',
    description: 'Custom bundling engine using Shopify Cart API. Bypassed native limitations to allow multi-product order selections in a single request.',
    image: PlaceHolderImages.find(img => img.id === 'project-bundle'),
    tags: ['JavaScript', 'Shopify Cart API', 'UI Logic'],
    liveUrl: 'https://shopgiftmix.com',
    icon: <ShoppingCart className="h-5 w-5" />,
  },
  {
    title: 'Al Khaleej Tours',
    description: 'Booking platform with real-time data fetching. Optimized for mobile-first experience and complex tour listing logic.',
    image: PlaceHolderImages.find(img => img.id === 'project-alkhaleej'),
    tags: ['JavaScript ES6', 'AJAX', 'UX Design'],
    liveUrl: 'https://alkhaleejtours.org',
    icon: <Globe className="h-5 w-5" />,
  },
  {
    title: 'Marimekko Store',
    description: 'Global fashion brand eCommerce development. Focused on high-fidelity UI components for collections and checkout flow.',
    image: PlaceHolderImages.find(img => img.id === 'project-marimekko'),
    tags: ['Shopify', 'Liquid', 'eCommerce'],
    liveUrl: 'https://marimekko.com',
    icon: <ShoppingCart className="h-5 w-5" />,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Featured <span className="text-primary">Impact</span></h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Strategic projects demonstrating technical leadership in building high-conversion, scalable web ecosystems for global brands.
            </p>
          </div>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white transition-all shadow-md">
            View All Work
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, idx) => (
            <Card key={idx} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col h-full bg-white">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <Button variant="secondary" size="sm" asChild className="rounded-full shadow-lg">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4 mr-2" /> Visit Site</a>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6 space-y-4 flex-grow">
                <div className="flex items-center gap-3 text-primary">
                  {project.icon}
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-8 pt-0 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-[10px] tracking-wider uppercase font-bold py-1 bg-muted/20">
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
