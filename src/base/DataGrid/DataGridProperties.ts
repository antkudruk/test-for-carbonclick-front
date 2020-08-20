import { ColumnDescription } from "./ColumnDescription";

export interface DataGridProperties<D> {
    list: D[];
    columns: ColumnDescription<D>[];
}