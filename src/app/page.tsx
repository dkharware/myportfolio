
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Skills />
        
        {/* Featured Works Section */}
        <section id="projects-preview" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight">Featured <span className="text-primary">Works</span></h2>
                <p className="text-muted-foreground max-w-2xl text-lg md:text-xl font-medium leading-relaxed">
                  Strategic eCommerce solutions and high-performance applications architected for global scale. Swipe through the highlights.
                </p>
              </div>
            </div>
            
            <Projects isSlider={true} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
