
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {firebase} from '@genkit-ai/firebase';

// Import flows to be discoverable by the dev UI
import './flows/virtual-consultation';

export default genkit({
  plugins: [googleAI(), firebase()],
  logSinks: [],
  enableTracingAndMetrics: true,
  flowStateStore: 'firebase',
  traceStore: 'firebase',
});
