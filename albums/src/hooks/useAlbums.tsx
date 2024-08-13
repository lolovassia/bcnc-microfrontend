import { createColumnHelper } from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';

import { useCallback, useMemo } from 'react';
import React from 'react';

import { useGetAlbums } from '@/api/getAlbums';
import { Albums } from '@/types/albums';
import { TableColumns } from '@/types/table';

const Button = React.lazy(() => import('components/Button'));

const columnHelper = createColumnHelper<Albums>();

export const useAlbums = (id?: string) => {
  const { data, isLoading } = useGetAlbums();
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
          <Button onClick={() => navigate(`/albums/${original.id}`)}>
            Ver
          </Button>
        ),
      }),
    ],
    [],
  );

  const getAlbums = useCallback(() => {
    if (!data || !id) return [];
    return data.filter((album) => album.userId === parseInt(id));
  }, [data, id]);

  return {
    albums: getAlbums(),
    columns,
    isLoading,
  };
};
