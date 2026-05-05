import { Navigation } from '@/components/Navigation';
import { Projects } from '@/components/Projects';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Portfolio | Deepak Kharware',
  description: 'A deep dive into the technical solutions and high-performance applications built by Deepak Kharware.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="space-y-6 text-center">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">Technical <span className="text-primary">Portfolio</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
              Strategic eCommerce solutions and high-performance applications architected for global scale. Explore the engineering behind each project.
            </p>
          </div>
        </div>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
