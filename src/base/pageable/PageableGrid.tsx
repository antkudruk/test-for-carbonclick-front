import React, { useState, useEffect } from "react";

import { TablePagination } from '@material-ui/core';
import DataGridView from "../datagrid/DataGridView";
import { DefaultPageResponse } from "../rest/DefaultPageResponse";
import { PageableGridProperties } from "./PageableGridProperties";

import { AxiosResponse } from "axios";
import { addRequestParam } from "base/rest/addRequestParams";

import axios from "../../axios/BaseAxios";

import {DefaultPaper} from '../../base/papers/DefaultPaper';

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

    return <DefaultPaper>
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
        
    </DefaultPaper>;
};

export default PageableGrid;