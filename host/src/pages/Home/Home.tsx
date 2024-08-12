import { CenteredContainerStyled } from '@pages/Home/Home.styled';
import Card from 'components/Card';
import Container from 'components/Container';
import { useNavigate } from 'react-router-dom';

import * as React from 'react';

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
