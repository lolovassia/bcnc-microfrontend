import { ColumnDef } from '@tanstack/react-table';

// eslint-disable-next-line
export type TableColumn<T extends any> = ColumnDef<T, any>;
// eslint-disable-next-line
export type TableColumns<T extends any> = Array<TableColumn<T>>;
