import { get } from '@axios/http-client';
import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { Album } from '@/types/albums';

const QUERY_KEY = 'getAlbums';

export const getAlbumsQueryKey = (albumId: number) => [
  QUERY_KEY,
  `albumId:${albumId}`,
];

export const getAlbums = async (albumId: number) => {
  return await get<Album>('https://jsonplaceholder.typicode.com/albums', {
    params: {
      id: albumId,
    },
  });
};

export const useGetAlbums = (
  albumId: number,
  options?: UseQueryOptions<Array<Album>>,
) =>
  useQuery({
    queryKey: getAlbumsQueryKey(albumId),
    queryFn: () => getAlbums(albumId),
    staleTime: Infinity,
    ...options,
  });
