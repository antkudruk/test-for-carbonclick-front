import React, { useState, useEffect } from "react";

import { TablePagination } from '@material-ui/core';
import DataGrid from "../DataGrid";
import { DefaultPageResponse } from "../rest/DefaultPageResponse";
import { PageableGridProperties } from "./PageableGridProperties";

import { AxiosResponse } from "axios";
import { addRequestParam } from "base/rest/addRequestParams";

import axios from "../../axios/BaseAxios";

import {DefaultPaper} from '../papers/DefaultPaper';

export const PageableGrid = (props: PageableGridProperties<any>) => {

    const [pageSize, setPageSize] = useState<any>(10);
    const [list, setList] = useState<any>();
    const [pageNumber, setPageNumber] = useState(0);
    const [total, setTotal] = useState(0);
    const [error, setError] = useState<string>();

    useEffect(() => {
        requestData(pageNumber);
    }, []);

    const requestData = (pageNumber: number) => {
          const pageableUrl = addRequestParam(props.url, {pageNumber: pageNumber, pageSize});
          axios.get(pageableUrl)
            .then(
              ({data}: AxiosResponse<DefaultPageResponse<any>>) => {
                setList(data.content);
                setTotal(data.total);
                setPageNumber(pageNumber);
                setError("");
              },
              (error) => {
                setError(error.message || error.toString());
              }
            )
    };

    const onChangePage = (ev: any, newPage: number) => {
      requestData(newPage);
    };

    const onChangeRowsPerPage = (ev: any) => {
        const newPageSize = ev.target.value;
        setPageSize(newPageSize);
    };

    useEffect(() => requestData(0), [pageSize]);

    return <DefaultPaper>
        {error}
        {list && <>
          <DataGrid
              list={list}
              columns={props.columns}
          />
          <TablePagination 
              page={pageNumber}
              onChangePage={onChangePage}
              rowsPerPage={pageSize}
              count={total}
              rowsPerPageOptions={[5, 10, 15, 20]}
              onChangeRowsPerPage={onChangeRowsPerPage}
          />
        </>}
        
    </DefaultPaper>;
};

export default PageableGrid;