
export interface DefaultPageResponse<D> {
    content: D[];
    pageSize: number;
    pageNumber: number;
    total: number;
}