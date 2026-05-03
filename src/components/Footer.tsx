import React from 'react';
import { Code2, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-md">
            <Code2 className="text-primary-foreground h-5 w-5" />
          </div>
          <span className="font-bold text-xl tracking-tight">PixelCanvas</span>
        </div>
        
        <p className="text-sm text-muted-foreground flex items-center gap-1.5 order-last md:order-none">
          © {new Date().getFullYear()} PixelCanvas. Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using Next.js & Tailwind.
        </p>

        <div className="flex gap-8">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}