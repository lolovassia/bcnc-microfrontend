import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { get } from '@/axios/http-client';
import { Photos } from '@/types/photos';

const QUERY_KEY = 'getPhotos';

export const getPhotosQueryKey = (page: number) => [QUERY_KEY, `page:${page}`];

export const getPhotos = async (albumId: number, page: number) => {
  console.log('getPhotos', albumId, page);
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
    queryKey: getPhotosQueryKey(page),
    queryFn: () => getPhotos(albumId, page),
    staleTime: Infinity,
    ...options,
  });
