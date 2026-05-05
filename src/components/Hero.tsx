"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';

export function Hero() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'profile-pic');

  return (
    <section id="about" className="relative min-h-[85vh] flex items-center pt-24 pb-12 md:pt-32 md:pb-20 px-8 md:px-12 overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          <div className="space-y-6 fade-in text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide uppercase border border-primary/20 shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Senior Software Engineer (Frontend)
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground font-medium text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                Indore, India
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter text-foreground">
              Deepak Singh <br />
              <span className="text-primary">Kharware</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Architecting high-performance web ecosystems. <span className="text-foreground font-bold">6+ years</span> of expertise in Shopify, React, and Next.js, leading teams to deliver mission-critical eCommerce solutions.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Button size="lg" asChild className="h-12 px-8 text-base gap-2 shadow-2xl shadow-primary/30 rounded-full hover:scale-105 transition-transform">
                <a href="#projects">View Case Studies <ArrowRight className="h-4 w-4" /></a>
              </Button>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" asChild className="h-10 w-10 rounded-full hover:bg-primary hover:text-white transition-all border-2">
                  <a href="https://github.com/dkharware" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="h-4 w-4" /></a>
                </Button>
                <Button variant="outline" size="icon" asChild className="h-10 w-10 rounded-full hover:bg-primary hover:text-white transition-all border-2">
                  <a href="https://www.linkedin.com/in/deepak-singh-kharware/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
                </Button>
                <Button variant="outline" size="icon" asChild className="h-10 w-10 rounded-full hover:bg-primary hover:text-white transition-all border-2">
                  <a href="mailto:dkharware@gmail.com" aria-label="Email"><Mail className="h-4 w-4" /></a>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative fade-in order-1 lg:order-2 flex justify-center lg:justify-end" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
            <div className="relative aspect-[4/5] w-full max-w-[320px] md:max-w-[380px] bg-white p-3 rounded-[2rem] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] overflow-hidden border border-white/80">
              {profileImg && (
                <Image
                  src={profileImg.imageUrl}
                  alt="Deepak Singh Kharware - Senior Frontend Lead"
                  width={600}
                  height={750}
                  className="rounded-[1.5rem] h-full w-full object-cover object-top hover:scale-[1.03] transition-all duration-1000 ease-out"
                  data-ai-hint={profileImg.imageHint}
                  priority
                />
              )}
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-2xl border border-white/40 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-white text-lg font-black shadow-lg shadow-primary/40 shrink-0">
                    6+
                  </div>
                  <div>
                    <h3 className="font-black text-foreground text-sm leading-tight">Years Leadership</h3>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Frontend Engineering</p>
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
