
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {firebasePlugin} from '@genkit-ai/firebase';

// Import flows to be discoverable by the dev UI
import './flows/virtual-consultation';

export default genkit({
  plugins: [googleAI(), firebasePlugin()],
  logSinks: [],
  enableTracingAndMetrics: true,
  flowStateStore: 'firebase',
  traceStore: 'firebase',
});
