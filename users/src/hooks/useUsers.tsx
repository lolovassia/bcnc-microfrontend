import { createColumnHelper } from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';

import { useMemo } from 'react';
import React from 'react';

import { useGetUsers } from '@/api/getUsers';
import { SeeButtonStyled } from '@/styled/UserPage.styled';
import { TableColumns } from '@/types/table';
import { Users } from '@/types/users';

const columnHelper = createColumnHelper<Users>();

export const useUsers = () => {
  const { data, isLoading } = useGetUsers();
  const navigate = useNavigate();

  const columns: TableColumns<Users> = useMemo(
    () => [
      columnHelper.accessor('name', {
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor('username', {
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor('email', {
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor('phone', {
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor('website', {
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.display({
        id: 'album',
        header: 'Albums',
        size: 40,
        cell: ({ row: { original } }) => (
          <SeeButtonStyled onClick={() => navigate(`/users/${original.id}`)}>
            Ver
          </SeeButtonStyled>
        ),
      }),
    ],
    [],
  );

  return {
    users: data,
    columns,
    isLoading,
  };
};
