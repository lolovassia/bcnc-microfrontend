import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { get } from '@/axios/http-client';
import { Users } from '@/types/users';

const QUERY_KEY = 'getUsers';

export const getUsersQueryKey = () => [QUERY_KEY];

export const getUsers = async () => {
  return await get<Users>('https://jsonplaceholder.typicode.com/users');
};

export const useGetUsers = (options?: UseQueryOptions<Users>) =>
  useQuery({
    queryKey: getUsersQueryKey(),
    queryFn: () => getUsers(),
    staleTime: Infinity,
    ...options,
  });
