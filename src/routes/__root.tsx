import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { RootLayout } from '@/app/root-layout';
import indexCss from '../app/styles/index.css?url';
import themeCss from '../app/styles/theme.generated.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Project Template',
      },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap',
      },
      {
        rel: 'icon',
        href: 'https://placehold.co/128',
      },
      {
        rel: 'stylesheet',
        href: indexCss,
      },
      {
        rel: 'stylesheet',
        href: themeCss,
      },
    ],
  }),
  notFoundComponent: () => <div>Not Found</div>,
  component: () => (
    <RootLayout>
      <Outlet />
      <TanStackRouterDevtools />
    </RootLayout>
  ),
});
