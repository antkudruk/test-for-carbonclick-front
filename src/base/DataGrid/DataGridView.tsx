import React from "react";

import { DataGridProperties } from "./DataGridProperties";
import { TableCell, TableRow, TableHead, Table, TableBody, TableContainer, Paper } from "@material-ui/core";

export const DataGridView = ({list, columns}: DataGridProperties<any>) => {
    return (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {columns.map(e =>  <TableCell>{e.title}</TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row) => (
                <TableRow key={row.name}>
                   {columns.map(c => <TableCell>{c.render(row)}</TableCell>)}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default DataGridView;