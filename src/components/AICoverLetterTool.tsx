"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Loader2, Copy, CheckCircle2 } from 'lucide-react';
import { aiCoverLetterAssistant, type AICoverLetterAssistantOutput } from '@/ai/flows/ai-cover-letter-assistant';
import { useToast } from '@/hooks/use-toast';

export function AICoverLetterTool() {
  const [jobDescription, setJobDescription] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [results, setResults] = React.useState<AICoverLetterAssistantOutput | null>(null);
  const [copiedIdx, setCopiedIdx] = React.useState<number | null>(null);
  const { toast } = useToast();

  const developerData = {
    developerBio: "Frontend Developer with 5 years of experience delivering responsive and high-performance web interfaces.",
    developerExperience: "Proven track record of collaborating with cross-functional teams to build scalable applications focused on clean code and UI consistency.",
    developerSkills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX Design"],
    developerProjects: [
      { name: "Quantum Analytics", description: "Real-time enterprise dashboard" },
      { name: "EcoFlow", description: "Sustainable e-commerce marketplace" }
    ]
  };

  const generateSnippets = async () => {
    if (!jobDescription.trim()) {
      toast({
        title: "Missing input",
        description: "Please enter a job description to get started.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const output = await aiCoverLetterAssistant({
        jobDescription,
        ...developerData
      });
      setResults(output);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate snippets. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    toast({
      title: "Copied!",
      description: "Snippet copied to clipboard.",
    });
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section id="ai-tool" className="py-24 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold">
            <Sparkles className="h-4 w-4" />
            AI-Powered Feature
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">Cover Letter <span className="text-primary">Assistant</span></h2>
          <p className="text-muted-foreground">
            Paste a job description below, and my AI tool will suggest tailored snippets based on my portfolio data.
          </p>
        </div>

        <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Job Details</CardTitle>
            <CardDescription>Enter the job description for the role you're applying for.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Textarea
              placeholder="Paste job description here..."
              className="min-h-[200px] bg-white border-muted"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
            <Button 
              onClick={generateSnippets} 
              disabled={isLoading}
              className="w-full h-12 text-lg font-bold gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Analyzing Skills...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5" />
                  Generate Tailored Snippets
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {results && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              Generated Suggestions
            </h3>
            <div className="grid gap-6">
              {results.coverLetterSnippets.map((snippet, idx) => (
                <Card key={idx} className="border-none shadow-md bg-white hover:ring-2 hover:ring-primary/20 transition-all group">
                  <CardContent className="p-6 relative">
                    <p className="text-muted-foreground leading-relaxed pr-10 italic">
                      "{snippet}"
                    </p>
                    <button
                      onClick={() => copyToClipboard(snippet, idx)}
                      className="absolute top-6 right-6 p-2 rounded-md hover:bg-muted text-muted-foreground transition-colors"
                    >
                      {copiedIdx === idx ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}