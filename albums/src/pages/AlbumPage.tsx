import { useNavigate, useParams } from 'react-router-dom';

import * as React from 'react';

import { useAlbums } from '@/hooks/useAlbums';
import { CenteredContainerStyled } from '@/styled/AlbumPage.styled';

const Container = React.lazy(() => import('components/Container'));
const Table = React.lazy(() => import('components/Table'));
const Return = React.lazy(() => import('components/Return'));
const Loading = React.lazy(() => import('components/Loading'));
const Title = React.lazy(() => import('components/Title'));

export default function AlbumPage() {
  const navigate = useNavigate();
  const { userId } = useParams();

  if (!userId) throw new Error('No userId provided');

  const { albums, columns, isLoading, currentUser } = useAlbums(
    parseInt(userId),
  );

  if (isLoading) return <Loading>Albums are loading...</Loading>;

  return (
    <Container>
      <CenteredContainerStyled>
        <Return onClick={() => navigate('/')} />

        {albums && albums.length > 0 ? (
          <React.Fragment>
            <Title>
              Albums by user: {`${currentUser?.name} ${currentUser?.username}`}
            </Title>
            <Table data={albums} columns={columns} loading={isLoading} />
          </React.Fragment>
        ) : (
          <Title>No albums found</Title>
        )}
      </CenteredContainerStyled>
    </Container>
  );
}
