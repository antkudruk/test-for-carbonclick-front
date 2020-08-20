import { ColumnDescription } from "../DataGrid/ColumnDescription";

export interface PageableGridProperties<D> {
    url: string;
    columns: ColumnDescription<D>[];
}