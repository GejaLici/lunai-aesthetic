
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Import flows to be discoverable by the dev UI.
import './flows/virtual-consultation';

export const ai = genkit({
  plugins: [googleAI()],
  logSinks: [],
  enableTracingAndMetrics: false,
});
