import { createColumnHelper } from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';

import { useCallback, useMemo } from 'react';
import React from 'react';

import { useGetAlbums } from '@/api/getAlbums';
import { Albums } from '@/types/albums';
import { TableColumns } from '@/types/table';
import { User } from '@/types/users';

const Button = React.lazy(() => import('components/Button'));

const columnHelper = createColumnHelper<Albums>();

const EMPTY_USER: User = {
  id: 0,
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
  address: undefined,
  company: undefined,
};

export const useAlbums = (userId: number) => {
  const { data, isLoading } = useGetAlbums(userId);
  const navigate = useNavigate();

  const columns: TableColumns<Albums> = useMemo(
    () => [
      columnHelper.accessor('title', {
        header: 'Album',
        cell: (info) => info.getValue(),
      }),
      columnHelper.display({
        id: 'photo',
        header: 'Photos',
        size: 40,
        cell: ({ row: { original } }) => (
          <Button
            onClick={() => navigate(`/users/${userId}/albums/${original.id}`)}
          >
            See
          </Button>
        ),
      }),
    ],
    [],
  );

  const getCurrentUser = useCallback(() => {
    const users = localStorage.getItem('users');
    if (!users) return EMPTY_USER;

    const parsedUsers = JSON.parse(users);
    return parsedUsers.find(({ id }: User) => id === userId);
  }, []);

  return {
    albums: data,
    currentUser: getCurrentUser(),
    columns,
    isLoading,
  };
};
