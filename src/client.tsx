import { scan } from 'react-scan';

import { StartClient } from '@tanstack/react-start';
import { hydrateRoot } from 'react-dom/client';

import { createRouter } from './router';

if (import.meta.dev) {
  scan({
    enabled: true,
  });
}

const router = createRouter();

hydrateRoot(document, <StartClient router={router} />);
