export interface ColumnDescription<D> {
    title: string;
    render: (row: D) => any;
}