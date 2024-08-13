import { useNavigate } from 'react-router-dom';

import * as React from 'react';

import { useAlbums } from '@/hooks/useAlbums';
import { CenteredContainerStyled, TitleStyled } from '@/styled/UserPage.styled';

const Container = React.lazy(() => import('components/Container'));
const Table = React.lazy(() => import('components/Table'));
const Return = React.lazy(() => import('components/Return'));

export default function AlbumPage() {
  const navigate = useNavigate();

  const { albums, columns, isLoading } = useAlbums();

  console.log('Albums:', albums);

  return (
    <Container>
      <CenteredContainerStyled>
        <Return onClick={() => navigate('/')} />
        <TitleStyled>Página renderizada por microservicio - Albums</TitleStyled>
        <TitleStyled>
          Listado renderizado por microservicio - Components
        </TitleStyled>
        <Table data={albums} columns={columns} loading={isLoading} />
      </CenteredContainerStyled>
    </Container>
  );
}
