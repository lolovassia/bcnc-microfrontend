import { useGetAlbums } from '@api/getAlbums';
import { useGetPhotos } from '@api/getPhotos';

import { useEffect, useState } from 'react';

import { Photos } from '@/types/photos';

export const usePhotos = (albumId: number, page: number) => {
  const [photos, setPhotos] = useState<Array<Photos>>([]);
  const [hideSeeMore, setHideSeeMore] = useState(false);

  const { data, isLoading } = useGetPhotos(albumId, page);
  const { data: album } = useGetAlbums(albumId);

  useEffect(() => {
    if (data && data.length === 0) setHideSeeMore(true);
    if (data) setPhotos((prev) => [...prev, ...data]);
  }, [data]);

  return {
    photos,
    currentAlbum: album,
    isLoading,
    hideSeeMore,
  };
};
