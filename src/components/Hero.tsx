"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';

export function Hero() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'profile-pic');

  return (
    <section id="about" className="relative min-h-[90vh] flex items-center pt-24 pb-12 md:pt-32 md:pb-20 px-6 overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8 fade-in text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-bold tracking-wide uppercase border border-primary/20 shadow-sm">
                <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
                Senior Software Engineer (Frontend)
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground font-medium">
                <MapPin className="h-4 w-4 text-primary" />
                Indore, India
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[1.1] tracking-tighter text-foreground">
              Deepak Singh <span className="text-primary">Kharware</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Architecting high-performance web ecosystems. <span className="text-foreground font-bold">6+ years</span> of expertise in Shopify, React, and Next.js, leading teams to deliver mission-critical eCommerce solutions.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-6">
              <Button size="lg" asChild className="h-14 px-8 text-lg gap-2 shadow-2xl shadow-primary/30 rounded-full hover:scale-105 transition-transform">
                <a href="#projects">View Case Studies <ArrowRight className="h-5 w-5" /></a>
              </Button>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" asChild className="h-12 w-12 rounded-full hover:bg-primary hover:text-white transition-all border-2">
                  <a href="https://github.com/dkharware" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="h-5 w-5" /></a>
                </Button>
                <Button variant="outline" size="icon" asChild className="h-12 w-12 rounded-full hover:bg-primary hover:text-white transition-all border-2">
                  <a href="https://www.linkedin.com/in/deepak-singh-kharware/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                </Button>
                <Button variant="outline" size="icon" asChild className="h-12 w-12 rounded-full hover:bg-primary hover:text-white transition-all border-2">
                  <a href="mailto:dkharware@gmail.com" aria-label="Email"><Mail className="h-5 w-5" /></a>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none bg-white p-4 rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] overflow-hidden border border-white/80">
              {profileImg && (
                <Image
                  src={profileImg.imageUrl}
                  alt="Deepak Singh Kharware - Senior Frontend Lead"
                  width={800}
                  height={800}
                  className="rounded-[1.5rem] object-cover hover:scale-[1.03] transition-all duration-1000 ease-out"
                  data-ai-hint={profileImg.imageHint}
                  priority
                />
              )}
              <div className="absolute bottom-10 left-10 right-10 p-6 glass-card rounded-2xl border border-white/40 shadow-2xl">
                <div className="flex items-center gap-5">
                  <div className="h-14 w-14 rounded-2xl bg-primary flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-primary/40 shrink-0">
                    6+
                  </div>
                  <div>
                    <h3 className="font-black text-foreground text-lg leading-tight">Years Leadership</h3>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Frontend Engineering</p>
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