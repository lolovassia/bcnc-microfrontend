import { ColumnDef } from '@tanstack/react-table';

export type TableColumn<T extends any> = ColumnDef<T, any>;
export type TableColumns<T extends any> = Array<TableColumn<T>>;
