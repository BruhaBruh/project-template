import { Container, ContainerContent } from '@/shared/bruhabruh-ui';
import type React from 'react';

export const HomePageTitle: React.FC = () => {
  return (
    <Container color="primary-container" className="min-h-screen scroll-m-20">
      <ContainerContent
        padding="both"
        variant="flex"
        className="items-center justify-center"
      >
        <h1 className="typography-display-large">Project Template</h1>
      </ContainerContent>
    </Container>
  );
};
