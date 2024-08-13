import { useNavigate, useParams } from 'react-router-dom';

import * as React from 'react';

import { useAlbums } from '@/hooks/useAlbums';
import {
  CenteredContainerStyled,
  TitleStyled,
} from '@/styled/AlbumPage.styled';

const Container = React.lazy(() => import('components/Container'));
const Table = React.lazy(() => import('components/Table'));
const Return = React.lazy(() => import('components/Return'));
const Loading = React.lazy(() => import('components/Loading'));

export default function AlbumPage() {
  const navigate = useNavigate();
  const { userId } = useParams();

  if (!userId) throw new Error('No userId provided');

  const { albums, columns, isLoading } = useAlbums(parseInt(userId));

  if (isLoading) return <Loading>Se estan cargando los albums</Loading>;

  if (!albums || albums.length === 0)
    return <TitleStyled>No albums found</TitleStyled>;

  return (
    <Container>
      <CenteredContainerStyled>
        <Return onClick={() => navigate('/')} />
        <TitleStyled>
          Página renderizada por microfrontend - Albums y Components
        </TitleStyled>
        <Table data={albums} columns={columns} loading={isLoading} />
      </CenteredContainerStyled>
    </Container>
  );
}
