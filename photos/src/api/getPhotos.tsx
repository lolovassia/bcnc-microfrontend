import { get } from '@axios/http-client';
import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { Photos } from '@/types/photos';

const QUERY_KEY = 'getPhotos';

export const getPhotosQueryKey = (albumId: number, page: number) => [
  QUERY_KEY,
  `albumId:${albumId}`,
  `page:${page}`,
];

export const getPhotos = async (albumId: number, page: number) => {
  return await get<Photos>('https://jsonplaceholder.typicode.com/photos', {
    params: {
      _limit: 10,
      _page: page,
      albumId: albumId,
    },
  });
};

export const useGetPhotos = (
  albumId: number,
  page = 1,
  options?: UseQueryOptions<Array<Photos>>,
) =>
  useQuery({
    queryKey: getPhotosQueryKey(albumId, page),
    queryFn: () => getPhotos(albumId, page),
    staleTime: Infinity,
    ...options,
  });
