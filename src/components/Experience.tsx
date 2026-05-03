import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Calendar, Award } from 'lucide-react';

const EXPERIENCES = [
  {
    company: 'Techinfini Solutions Pvt. Ltd, Indore',
    role: 'Senior Software Engineer',
    period: 'Aug 2025 – Oct 2025',
    description: 'Promoted for strong technical leadership and project delivery. Built scalable Shopify & React-based eCommerce platforms. Improved performance, SEO, and overall user experience.',
  },
  {
    company: 'Techinfini Solutions Pvt. Ltd, Indore',
    role: 'Team Lead – Frontend',
    period: 'May 2022 – Jul 2025',
    description: 'Led frontend for 20+ eCommerce websites (Encompass project). Delivered responsive platforms using Shopify, React, and modern stack. Mentored developers and enforced coding standards.',
  },
  {
    company: 'Shrinkcom Software, Indore',
    role: 'Team Lead – Frontend',
    period: 'Sep 2021 – May 2022',
    description: 'Managed team tasks and ensured timely delivery. Improved UI/UX and performance across multiple high-traffic projects.',
  },
  {
    company: 'Shrinkcom Software, Indore',
    role: 'Frontend Developer',
    period: 'Sep 2020 – Aug 2021',
    description: 'Built responsive websites and optimized SEO & performance. Received the "Unmatched Dedication 2021" award for exceptional contributions.',
  },
  {
    company: 'Cheshta Infotech Pvt. Ltd, Indore',
    role: 'Web Designer',
    period: 'Jul 2019 – Sep 2020',
    description: 'Developed responsive websites using HTML, CSS, JavaScript. Ensured cross-browser compatibility and design fidelity.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Career <span className="text-primary">Journey</span></h2>
            <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
              Leading teams and delivering high-performance digital experiences since 2019.
            </p>
          </div>
          <div className="bg-primary/10 border border-primary/20 p-4 md:p-6 rounded-2xl flex items-center gap-4 w-full lg:w-auto">
             <Award className="h-8 w-8 md:h-10 md:w-10 text-primary shrink-0" />
             <div>
                <h4 className="font-bold text-sm md:text-base">Unmatched Dedication Award</h4>
                <p className="text-xs md:text-sm text-muted-foreground">Received in 2021 for Frontend Excellence</p>
             </div>
          </div>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="h-5 w-5" />
              </div>
              {/* Content */}
              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 md:p-6 shadow-md hover:shadow-xl transition-shadow border-none bg-white rounded-2xl">
                <CardContent className="p-0 space-y-3">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs md:text-sm">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">{exp.role}</h3>
                  <h4 className="font-semibold text-primary/80 text-sm md:text-base">{exp.company}</h4>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}