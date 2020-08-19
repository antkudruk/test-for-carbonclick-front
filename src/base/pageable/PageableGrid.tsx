import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";

import { TablePagination } from '@material-ui/core';
import DataGridView from "../datagrid/DataGridView";
import { DefaultPageResponse } from "../DefaultPageResponse";
import { PageableGridProperties } from "./PageableGridProperties";

import { AxiosResponse } from "axios";
import { addRequestParam } from "base/addRequestParams";

import axios from "../../axios/BaseAxios";

export const PageableGrid = (props: PageableGridProperties<any>) => {

    const pageSize = 10;
    const [list, setList] = useState<any>();
    const [pageNumber, setPageNumber] = useState(0);
    const [total, setTotal] = useState(0);
    const [error, setError] = useState<string>();


    useEffect(() => {
        requestData(pageNumber);
    }, []);

    const requestData = (pageNumber: number) => {
          const pageableUrl = addRequestParam(props.url, {pageNumber, pageSize});
          axios.get(pageableUrl)
            .then(
              ({data}: AxiosResponse<DefaultPageResponse<any>>) => {
                setList(data.content);
                setTotal(data.total);
                setPageNumber(data.pageNumber);
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

    return <Paper elevation={5}>
        {error}
        {list && <>
          <DataGridView 
          list={list}
          columns={props.columns}
          />
        <TablePagination 
            page={pageNumber}
            onChangePage={onChangePage}
            rowsPerPage={pageSize}
            count={total}
        />
        </>}
        
    </Paper>;
};

export default PageableGrid;