import type { ColumnDef } from '@tanstack/react-table';

export interface TableProps<T> {
  data: Array<T>;
  columns: ColumnDef<T>[];
  loading?: boolean;
}
