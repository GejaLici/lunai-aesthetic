
'use server';
/**
 * @fileOverview A virtual consultation AI agent.
 *
 * - virtualConsultation - A function that handles the virtual consultation process.
 * - VirtualConsultationInput - The input type for the virtualConsultation function.
 * - VirtualConsultationOutput - The return type for the virtualConsultation function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { serviceData } from '@/lib/services';

// Define Zod schemas for input and output
const VirtualConsultationInputSchema = z.object({
  concerns: z.string().describe("The user's description of their aesthetic or dental concerns."),
});
export type VirtualConsultationInput = z.infer<typeof VirtualConsultationInputSchema>;

const VirtualConsultationOutputSchema = z.object({
  suggestions: z.string().describe('A paragraph of personalized suggestions for aesthetic or dental treatments based on the user\'s concerns. Provide a helpful, empathetic response, suggesting potential treatments from LUNAI that could address their goals. Frame it as initial guidance and always recommend a full, in-person consultation with a specialist for a definitive diagnosis and treatment plan.'),
});
export type VirtualConsultationOutput = z.infer<typeof VirtualConsultationOutputSchema>;


// Exported wrapper function that calls the flow
export async function virtualConsultation(input: VirtualConsultationInput): Promise<VirtualConsultationOutput> {
  return virtualConsultationFlow(input);
}

// Define the Genkit prompt
const consultationPrompt = ai.definePrompt({
  name: 'virtualConsultationPrompt',
  input: { schema: z.object({
    concerns: z.string().describe("The user's description of their aesthetic or dental concerns."),
    serviceList: z.string().describe("A comma-separated list of available services."),
  }) },
  output: { schema: VirtualConsultationOutputSchema },
  prompt: `You are a helpful and empathetic AI assistant for LUNAI, a premier aesthetic and dental clinic.
Your role is to provide initial suggestions based on a user's described concerns.
You are not a doctor and must not provide a medical diagnosis.

Analyze the user's concerns below and provide a thoughtful paragraph with potential treatment ideas.
When relevant, you should mention specific services offered by LUNAI. Here is a list of available services to choose from: {{{serviceList}}}.
Always conclude by strongly recommending that the user book a full, in-person consultation with one of LUNAI's specialists for a proper medical evaluation and personalized treatment plan.

User's Concerns: {{{concerns}}}
`,
});

// Define the Genkit flow
const virtualConsultationFlow = ai.defineFlow(
  {
    name: 'virtualConsultationFlow',
    inputSchema: VirtualConsultationInputSchema,
    outputSchema: VirtualConsultationOutputSchema,
  },
  async (input) => {
    // Generate a comma-separated list of service names from the serviceData object.
    const getServiceNames = (): string[] => {
      // Capitalize first letter of each word in a string
      const capitalize = (s: string) => s.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
      
      return serviceData.flatMap(category => 
        category.services.map(service => capitalize(service.id))
      );
    }

    const serviceList = getServiceNames().join(', ');

    const { output } = await consultationPrompt({
        concerns: input.concerns,
        serviceList: serviceList,
    });
    if (!output) {
      throw new Error('The AI model did not return a valid response.');
    }
    return output;
  }
);
