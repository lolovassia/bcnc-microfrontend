import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { get } from '@/axios/http-client';
import { Albums } from '@/types/albums';

const QUERY_KEY = 'getAlbums';

export const getAlbumsQueryKey = () => [QUERY_KEY];

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
    queryKey: getAlbumsQueryKey(),
    queryFn: () => getAlbums(userId),
    staleTime: Infinity,
    ...options,
  });
