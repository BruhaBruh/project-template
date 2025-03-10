import { scan } from 'react-scan';

import { StartClient } from '@tanstack/react-start';
import { hydrateRoot } from 'react-dom/client';

import { createRouter } from './router';

scan({
  enabled: import.meta.dev,
});

const router = createRouter();

hydrateRoot(document, <StartClient router={router} />);
