import LazyLoad from 'react-lazyload';
import { useNavigate, useParams } from 'react-router-dom';

import * as React from 'react';
import { useMemo, useState } from 'react';

import { usePhotos } from '@/hooks/usePhotos';
import {
  CardContainerStyled,
  CardStyled,
  CardTitleStyled,
  CenteredContainerStyled,
} from '@/styled/PhotosPage.styled';

const Container = React.lazy(() => import('components/Container'));
const Return = React.lazy(() => import('components/Return'));
const Button = React.lazy(() => import('components/Button'));
const Title = React.lazy(() => import('components/Title'));

export default function PhotoPage() {
  const navigate = useNavigate();
  const { userId, albumId } = useParams();
  const [page, setPage] = useState(1);

  if (!albumId) throw new Error('No albumId provided');

  const { photos, isLoading, hideSeeMore, currentAlbum } = usePhotos(
    parseInt(albumId),
    page,
  );

  const TextBtn = useMemo(
    () => (isLoading ? 'Photos are loading...' : 'See more'),
    [isLoading],
  );

  const TitleAlbum = useMemo(
    () => currentAlbum?.[0]?.title ?? '',
    [currentAlbum],
  );

  return (
    <Container>
      <CenteredContainerStyled>
        <Return onClick={() => navigate(`/users/${userId}`)} />

        {photos && photos.length > 0 ? (
          <CardContainerStyled>
            <Title>Photos by album: {TitleAlbum}</Title>

            {photos.map(({ id, title, thumbnailUrl }) => (
              <CardStyled key={id}>
                <LazyLoad height={200} offset={100}>
                  <img src={thumbnailUrl} alt={title} />
                </LazyLoad>
                <CardTitleStyled>{title}</CardTitleStyled>
              </CardStyled>
            ))}
          </CardContainerStyled>
        ) : (
          <Title>No photos found</Title>
        )}

        {!hideSeeMore && (
          <Button onClick={() => setPage((val) => val + 1)}>{TextBtn}</Button>
        )}
      </CenteredContainerStyled>
    </Container>
  );
}
