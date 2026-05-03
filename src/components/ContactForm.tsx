"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, MapPin, Phone, Mail, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/dkharware" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/deepak-singh-kharware/" },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Let's <span className="text-primary">Connect</span></h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed">
                Have a project in mind or just want to chat? Feel free to reach out. I'm always open to new opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 md:p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <Mail className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-lg">Email</h4>
                  <p className="text-xs md:text-sm text-muted-foreground break-all">dkharware@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 md:p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <Phone className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-lg">Phone</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">+91 9644041429</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 md:p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-lg">Location</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Indore, MP, India</p>
                </div>
              </div>
            </div>

            <div className="pt-4 text-center lg:text-left">
              <h4 className="font-bold text-base md:text-lg mb-4">Follow Me</h4>
              <div className="flex justify-center lg:justify-start gap-4">
                {socialLinks.map((social, idx) => (
                  <Button key={idx} variant="outline" size="icon" asChild className="h-10 w-10 md:h-12 md:w-12 rounded-xl hover:bg-primary hover:text-white transition-all">
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <Card className="border-none shadow-2xl p-1 md:p-2 bg-white rounded-3xl">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" required className="h-11 md:h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required className="h-11 md:h-12 rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project Inquiry" required className="h-11 md:h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" placeholder="Tell me about your project..." required className="min-h-[120px] md:min-h-[150px] rounded-xl pt-4" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full h-12 md:h-14 text-base md:text-lg font-bold rounded-xl gap-2 shadow-xl shadow-primary/20">
                  {isSubmitting ? "Sending..." : "Send Message"} <Send className="h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}