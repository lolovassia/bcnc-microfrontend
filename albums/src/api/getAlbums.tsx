import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { get } from '@/axios/http-client';
import { Albums } from '@/types/albums';

const QUERY_KEY = 'getAlbums';

export const getAlbumsQueryKey = (userId: number) => [
  QUERY_KEY,
  `userId:${userId}`,
];

export const getAlbums = async (userId: number) => {
  return await get<Albums>('https://jsonplaceholder.typicode.com/albums', {
    params: {
      userId: userId,
    },
  });
};

export const useGetAlbums = (
  userId: number,
  options?: UseQueryOptions<Array<Albums>>,
) =>
  useQuery({
    queryKey: getAlbumsQueryKey(userId),
    queryFn: () => getAlbums(userId),
    staleTime: Infinity,
    ...options,
  });
