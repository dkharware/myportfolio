import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Calendar, Award, CheckCircle2 } from 'lucide-react';

const EXPERIENCES = [
  {
    company: 'Techinfini Solutions Pvt. Ltd',
    role: 'Senior Software Engineer',
    period: 'Aug 2025 – Oct 2025',
    achievements: [
      'Architected scalable Shopify & React platforms for major OEM brands',
      'Optimized core web vitals resulting in a 30% improvement in SEO ranking',
      'Implemented advanced headless commerce patterns using Next.js 15'
    ],
  },
  {
    company: 'Techinfini Solutions Pvt. Ltd',
    role: 'Team Lead – Frontend',
    period: 'May 2022 – Jul 2025',
    achievements: [
      'Led development for 20+ high-traffic eCommerce sites (Encompass Project)',
      'Mentored a team of 10+ frontend developers, establishing modern standards',
      'Reduced initial page load time by 45% through aggressive asset optimization'
    ],
  },
  {
    company: 'Shrinkcom Software',
    role: 'Team Lead – Frontend',
    period: 'Sep 2021 – May 2022',
    achievements: [
      'Orchestrated UI/UX delivery for enterprise-grade web applications',
      'Introduced automated testing and CI/CD pipelines for frontend projects',
      'Managed cross-functional coordination between design and backend teams'
    ],
  },
  {
    company: 'Shrinkcom Software',
    role: 'Frontend Developer',
    period: 'Sep 2020 – Aug 2021',
    achievements: [
      'Developed responsive, pixel-perfect interfaces for global clients',
      'Awarded "Unmatched Dedication 2021" for exceptional project delivery',
      'Integrated complex third-party APIs for advanced site functionality'
    ],
  },
  {
    company: 'Cheshta Infotech Pvt. Ltd',
    role: 'Web Designer',
    period: 'Jul 2019 – Sep 2020',
    achievements: [
      'Designed and developed 50+ responsive websites with HTML/CSS/JS',
      'Ensured 100% cross-browser compatibility and accessibility compliance',
      'Collaborated directly with clients to translate business needs into UI'
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Professional <span className="text-primary">Trajectory</span></h2>
            <p className="text-muted-foreground max-w-2xl text-lg md:text-xl font-medium leading-relaxed">
              A timeline of engineering leadership and technical excellence across diverse industries.
            </p>
          </div>
          <div className="bg-primary/5 border-2 border-primary/10 p-6 rounded-[2rem] flex items-center gap-5 w-full lg:w-auto shadow-sm">
             <div className="p-3 bg-primary rounded-2xl shadow-lg shadow-primary/30">
                <Award className="h-10 w-10 text-white" />
             </div>
             <div>
                <h4 className="font-black text-lg">Excellence Awarded</h4>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Unmatched Dedication 2021</p>
             </div>
          </div>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="group relative grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 items-start">
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-secondary text-primary font-bold text-sm border border-primary/10 shadow-sm">
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </div>
              </div>
              
              <Card className="border-none shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 rounded-[2.5rem] bg-secondary/30 group-hover:bg-white border-2 border-transparent group-hover:border-primary/5">
                <CardContent className="p-8 md:p-12 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-black text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                    <h4 className="text-lg font-bold text-muted-foreground">{exp.company}</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <p className="text-lg text-muted-foreground font-medium leading-tight">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}