import { HeadContent, Scripts } from '@tanstack/react-router';
import type React from 'react';

export const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
};
