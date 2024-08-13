import { createColumnHelper } from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';

import { useMemo } from 'react';
import React from 'react';

import { useGetAlbums } from '@/api/getAlbums';
import { Albums } from '@/types/albums';
import { TableColumns } from '@/types/table';

const Button = React.lazy(() => import('components/Button'));

const columnHelper = createColumnHelper<Albums>();

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
            Ver
          </Button>
        ),
      }),
    ],
    [],
  );

  return {
    albums: data,
    columns,
    isLoading,
  };
};
