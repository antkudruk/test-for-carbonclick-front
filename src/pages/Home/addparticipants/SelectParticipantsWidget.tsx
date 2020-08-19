import React, { useState } from 'react';
import { Paper, Grid, Button, TextField } from '@material-ui/core';
import DataGridView from 'base/datagrid/DataGridView';
import PageableGrid from 'base/pageable/PageableGrid';

import {baseUrl} from '../../../settings';
import { useHistory } from 'react-router-dom';
import { addRequestParam } from 'base/addRequestParams';

import axios from "../../../axios/BaseAxios";

export const SelectParticipantWidget = () => {

    const [error, setError] = useState<string>();
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [selected, setSelected] = useState<any[]>([]);

    const addToSelected = (row: any) => {
        const index = selected.map(t => t.id).indexOf(row.id);
        if (index < 0) {
            selected.push(row);
            setSelected(selected.slice(0));
        }
    }

    const deleteFromSelected = (row: any) => {
        const index = selected.map(t => t.id).indexOf(row.id);
        if (index > -1) {
            selected.splice(index, 1);
            setSelected(selected.slice(0));
        }
    }

    const renderAddButton = (row: any) => {
        if (selected.indexOf(row) < 0) {
            return <Button onClick={() => addToSelected(row)}>Add</Button>;
        } else {
            return null;
        } 
    }

    const assignGifts = ( ) => {
        axios.post(`${baseUrl}/year/generate`, {
              title: title,
              participants: selected.map(t => t.id)
            })
            .then(
              () => {
                history.push("/");
              },
              (error) => {
                setError(error.message || error.toString());
              }
            )

        
    }

    return <Paper elevation={5}>
        {error}
        <Grid xs={12} container direction="row">
            <Grid xs={6} item>
                <PageableGrid url={`${baseUrl}/participant`} columns={[
                    {title: "First Name", render: (row) => row.firstName},
                    {title: "Last Name", render: (row) => row.lastName},
                    {title: "Add", render: renderAddButton}
                ]} 
                />
            </Grid>
            <Grid xs={5} item container>
                <Grid xs={12} container direction="column">
                    <TextField label='Title' value={title} onChange={(event) => setTitle(event.target.value)}/>
                    <DataGridView list={selected} columns={[
                        {title: "First", render: row => row.firstName},
                        {title: "Last", render: row => row.lastName},
                        {title: "Delete", render: row => <Button onClick={() => deleteFromSelected(row)}>Delete</Button>},
                    ]}/>
                    <Button onClick={assignGifts}>ASSIGN GIFTS</Button>
                </Grid>
            </Grid>
        </Grid>
        
    </Paper>
}

export default SelectParticipantWidget;