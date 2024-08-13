import LazyLoad from 'react-lazyload';
import { useNavigate, useParams } from 'react-router-dom';

import * as React from 'react';
import { useState } from 'react';

import { usePhotos } from '@/hooks/usePhotos';
import {
  CardContainerStyled,
  CardStyled,
  CardTitleStyled,
  CenteredContainerStyled,
  TitleStyled,
} from '@/styled/PhotosPage.styled';

const Container = React.lazy(() => import('components/Container'));
const Return = React.lazy(() => import('components/Return'));
const Button = React.lazy(() => import('components/Button'));

export default function PhotoPage() {
  const navigate = useNavigate();
  const { userId, albumId } = useParams();
  const [page, setPage] = useState(1);

  if (!albumId) throw new Error('No albumId provided');

  const { photos, isLoading, hideSeeMore } = usePhotos(parseInt(albumId), page);

  const TextBtn = isLoading ? 'Se estan cargando las fotos' : 'Ver más';

  if (!photos || photos.length === 0)
    return <TitleStyled>No photos found</TitleStyled>;

  return (
    <Container>
      <CenteredContainerStyled>
        <Return onClick={() => navigate(`/users/${userId}`)} />
        <TitleStyled>
          Página renderizada por microfrontend - Photos, Components
        </TitleStyled>
        <CardContainerStyled>
          {photos.map(({ id, title, thumbnailUrl }) => (
            <CardStyled key={id}>
              <LazyLoad height={200} offset={100}>
                <img src={thumbnailUrl} alt={title} />
              </LazyLoad>
              <CardTitleStyled>{title}</CardTitleStyled>
            </CardStyled>
          ))}
        </CardContainerStyled>

        {!hideSeeMore && (
          <Button onClick={() => setPage((val) => val + 1)}>{TextBtn}</Button>
        )}
      </CenteredContainerStyled>
    </Container>
  );
}
