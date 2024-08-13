import { useNavigate, useParams } from 'react-router-dom';

import * as React from 'react';

import { useAlbums } from '@/hooks/useAlbums';
import { CenteredContainerStyled, TitleStyled } from '@/styled/UserPage.styled';

const Container = React.lazy(() => import('components/Container'));
const Table = React.lazy(() => import('components/Table'));
const Return = React.lazy(() => import('components/Return'));

export default function AlbumPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { albums, columns, isLoading } = useAlbums(id);

  return (
    <Container>
      <CenteredContainerStyled>
        <Return onClick={() => navigate('/')} />
        <TitleStyled>
          Página renderizada por microfrontend - Albums, Components
        </TitleStyled>
        {albums.length === 0 ? (
          <TitleStyled>No albums found</TitleStyled>
        ) : (
          <Table data={albums} columns={columns} loading={isLoading} />
        )}
      </CenteredContainerStyled>
    </Container>
  );
}
