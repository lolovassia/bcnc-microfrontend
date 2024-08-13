import { useEffect, useState } from 'react';

import { useGetPhotos } from '@/api/getPhotos';
import { Photos } from '@/types/photos';

export const usePhotos = (albumId: number, page: number) => {
  const [photos, setPhotos] = useState<Array<Photos>>([]);
  const [hideSeeMore, setHideSeeMore] = useState(false);

  const { data, isLoading } = useGetPhotos(albumId, page);

  useEffect(() => {
    if (data && data.length === 0) setHideSeeMore(true);
    if (data) setPhotos((prev) => [...prev, ...data]);
  }, [data]);

  return {
    photos,
    isLoading,
    hideSeeMore,
  };
};
