import { createColumnHelper } from '@tanstack/react-table';

import { useMemo } from 'react';

import { useGetAlbums } from '@/api/getAlbums';
import { Albums } from '@/types/albums';
import { TableColumns } from '@/types/table';

const columnHelper = createColumnHelper<Albums>();

export const useAlbums = () => {
  const { data, isLoading } = useGetAlbums();

  const columns: TableColumns<Albums> = useMemo(
    () => [
      columnHelper.accessor('title', {
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
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
