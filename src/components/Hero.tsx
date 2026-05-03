import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'profile-pic');

  return (
    <section id="about" className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 fade-in">
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-primary text-sm font-semibold tracking-wide uppercase">
              Available for New Projects
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-foreground">
              Building <span className="text-primary">Pixel-Perfect</span> Web Experiences
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-xl">
              I'm a Frontend Developer with 5 years of experience delivering responsive and high-performance web interfaces. Focused on clean code, UI consistency, and building user-centric applications.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2 shadow-lg shadow-primary/20">
                View My Work <ArrowRight className="h-4 w-4" />
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

          <div className="relative fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-4 bg-secondary/30 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none bg-white p-4 rounded-2xl shadow-2xl overflow-hidden border border-white/50">
              {profileImg && (
                <Image
                  src={profileImg.imageUrl}
                  alt={profileImg.description}
                  width={600}
                  height={600}
                  className="rounded-xl object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
                  data-ai-hint={profileImg.imageHint}
                />
              )}
              <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/90 backdrop-blur-md rounded-xl border border-white/50 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
                    5+
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Years Experience</h3>
                    <p className="text-sm text-muted-foreground">in Frontend Development</p>
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
