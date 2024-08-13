import Loading from '@components/Loading/Loading';
import {
  TBodyStyled,
  TDStyled,
  THStyled,
  THeadStyled,
  TRStyled,
  TableContainerStyled,
  TableStyled,
} from '@components/Table/Table.styled';
import { TableProps } from '@components/Table/Table.types';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import * as React from 'react';

export const Table = <T extends any>({
  data,
  columns,
  loading,
}: TableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) return <Loading>Loading table...</Loading>;

  return (
    <TableContainerStyled>
      <TableStyled>
        <THeadStyled>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <THStyled key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </THStyled>
              ))}
            </tr>
          ))}
        </THeadStyled>
        <TBodyStyled>
          {table.getRowModel().rows.map((row) => (
            <TRStyled key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TDStyled key={cell.id} data-label={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TDStyled>
              ))}
            </TRStyled>
          ))}
        </TBodyStyled>
      </TableStyled>
    </TableContainerStyled>
  );
};

export default Table;
