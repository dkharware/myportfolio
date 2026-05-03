'use server';
/**
 * @fileOverview An AI-powered cover letter assistant tool.
 *
 * - aiCoverLetterAssistant - A function that generates tailored cover letter snippets.
 * - AICoverLetterAssistantInput - The input type for the aiCoverLetterAssistant function.
 * - AICoverLetterAssistantOutput - The return type for the aiCoverLetterAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AICoverLetterAssistantInputSchema = z.object({
  jobDescription: z.string().describe('The job description for which to tailor the cover letter.'),
  developerSkills: z.array(z.string()).describe('A list of the developer\'s key technical skills.'),
  developerExperience: z.string().describe('A summary of the developer\'s professional experience.'),
  developerProjects: z.array(
    z.object({
      name: z.string().describe('The name of the project.'),
      description: z.string().describe('A brief description of the project.'),
    })
  ).describe('A list of the developer\'s relevant projects with names and descriptions.'),
  developerBio: z.string().describe('A short professional biography of the developer.'),
});
export type AICoverLetterAssistantInput = z.infer<typeof AICoverLetterAssistantInputSchema>;

const AICoverLetterAssistantOutputSchema = z.object({
  coverLetterSnippets: z.array(z.string()).describe('An array of tailored cover letter snippets.'),
});
export type AICoverLetterAssistantOutput = z.infer<typeof AICoverLetterAssistantOutputSchema>;

export async function aiCoverLetterAssistant(input: AICoverLetterAssistantInput): Promise<AICoverLetterAssistantOutput> {
  return aiCoverLetterAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiCoverLetterAssistantPrompt',
  input: { schema: AICoverLetterAssistantInputSchema },
  output: { schema: AICoverLetterAssistantOutputSchema },
  prompt: `You are an AI-powered career assistant specializing in crafting tailored cover letter snippets for frontend developers. Your goal is to help a frontend developer quickly generate compelling and relevant content for their job applications.

Given the following job description and the developer's profile data, generate several distinct cover letter snippets. Each snippet should highlight how the developer's skills, experience, and projects align with the requirements of the job description.

Focus on creating short, impactful paragraphs or sentences that can be easily integrated into a full cover letter.

---
Job Description:
{{{jobDescription}}}

---
Developer Profile:
Bio: {{{developerBio}}}
Experience: {{{developerExperience}}}
Skills: {{#each developerSkills}}
- {{{this}}}
{{/each}}
Projects:
{{#each developerProjects}}
  - Project Name: {{{name}}}
    Description: {{{description}}}
{{/each}}

---
Based on the above information, generate tailored cover letter snippets that match the developer's profile to the job description.`,
});

const aiCoverLetterAssistantFlow = ai.defineFlow(
  {
    name: 'aiCoverLetterAssistantFlow',
    inputSchema: AICoverLetterAssistantInputSchema,
    outputSchema: AICoverLetterAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
