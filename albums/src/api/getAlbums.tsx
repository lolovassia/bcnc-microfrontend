import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { get } from '@/axios/http-client';
import { Albums } from '@/types/albums';

const QUERY_KEY = 'getAlbums';

export const getAlbumsQueryKey = () => [QUERY_KEY];

export const getAlbums = async () => {
  return await get<Albums>('https://jsonplaceholder.typicode.com/albums');
};

export const useGetAlbums = (options?: UseQueryOptions<Albums>) =>
  useQuery({
    queryKey: getAlbumsQueryKey(),
    queryFn: () => getAlbums(),
    staleTime: Infinity,
    ...options,
  });
