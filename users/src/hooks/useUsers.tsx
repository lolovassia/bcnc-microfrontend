import { createColumnHelper } from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';

import { useEffect, useMemo } from 'react';
import React from 'react';

import { useGetUsers } from '@/api/getUsers';
import { TableColumns } from '@/types/table';
import { Users } from '@/types/users';

const Button = React.lazy(() => import('components/Button'));

const columnHelper = createColumnHelper<Users>();

export const useUsers = () => {
  const { data, isLoading } = useGetUsers();
  const navigate = useNavigate();

  const columns: TableColumns<Users> = useMemo(
    () => [
      columnHelper.accessor('name', {
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('username', {
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('email', {
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('phone', {
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('website', {
        cell: (info) => info.getValue(),
      }),
      columnHelper.display({
        id: 'album',
        header: 'Albums',
        size: 40,
        cell: ({ row: { original } }) => (
          <Button onClick={() => navigate(`/users/${original.id}`)}>See</Button>
        ),
      }),
    ],
    [],
  );

  useEffect(() => {
    if (data) localStorage.setItem('users', JSON.stringify(data));
  }, [data]);

  return {
    users: data,
    columns,
    isLoading,
  };
};
