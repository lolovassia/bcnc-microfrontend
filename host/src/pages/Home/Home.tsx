import { CenteredContainerStyled } from '@pages/Home/Home.styled';
import { useNavigate } from 'react-router-dom';

import * as React from 'react';

const Container = React.lazy(() => import('components/Container'));
const Card = React.lazy(() => import('components/Card'));

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <CenteredContainerStyled>
        <Card onClick={() => navigate('users')}>Usuarios</Card>
        <Card onClick={() => navigate('albums')}>Álbumes</Card>
        <Card onClick={() => navigate('photos')}>Fotos</Card>
      </CenteredContainerStyled>
    </Container>
  );
}
