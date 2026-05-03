"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';

export function Hero() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'profile-pic');

  return (
    <section id="about" className="pt-24 pb-12 md:pt-32 md:pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 fade-in text-center lg:text-left order-2 lg:order-1">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="inline-block w-fit px-4 py-1.5 rounded-full bg-secondary/20 text-primary text-xs md:text-sm font-semibold tracking-wide uppercase">
                Senior Software Engineer (Frontend)
              </div>
              <div className="flex items-center gap-2 text-muted-foreground font-medium">
                <MapPin className="h-4 w-4 text-primary" />
                Indore, India
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight text-foreground">
              Hi, I'm <span className="text-primary">Deepak Singh Kharware</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Frontend-focused Senior Software Engineer with 5+ years of experience building scalable, high-performance web applications. Expertise in Shopify, React.js, and Next.js. Leading teams to deliver user-centric solutions.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Button size="lg" asChild className="gap-2 shadow-lg shadow-primary/20 w-full sm:w-auto">
                <a href="#projects">Explore Projects <ArrowRight className="h-4 w-4" /></a>
              </Button>
              <div className="flex items-center gap-2 px-2">
                <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                  <a href="https://github.com/dkharware" target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5" /></a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                  <a href="https://www.linkedin.com/in/deepak-singh-kharware/" target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5" /></a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                  <a href="mailto:dkharware@gmail.com"><Mail className="h-5 w-5" /></a>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-4 bg-secondary/30 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
            <div className="relative aspect-square max-w-[280px] sm:max-w-md mx-auto lg:max-w-none bg-white p-3 md:p-4 rounded-2xl shadow-2xl overflow-hidden border border-white/50">
              {profileImg && (
                <Image
                  src={profileImg.imageUrl}
                  alt="Deepak Singh Kharware - Professional Headshot"
                  width={600}
                  height={600}
                  className="rounded-xl object-cover hover:scale-[1.02] transition-all duration-700"
                  data-ai-hint={profileImg.imageHint}
                />
              )}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-10 p-4 md:p-6 bg-white/90 backdrop-blur-md rounded-xl border border-white/50 shadow-lg">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary flex items-center justify-center text-white text-lg md:text-xl font-bold shrink-0">
                    5+
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm md:text-lg leading-tight">Years Excellence</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Frontend Engineering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}