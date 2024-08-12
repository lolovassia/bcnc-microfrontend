import { useGetUsers } from '@/api/getUsers';

export const useUsers = () => {
  const { data, isInitialLoading } = useGetUsers();

  return {
    users: data,
    isInitialLoading,
  };
};
