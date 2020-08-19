import { ColumnDescription } from "../datagrid/ColumnDescription";

export interface PageableGridProperties<D> {
    url: string;
    columns: ColumnDescription<D>[];
}