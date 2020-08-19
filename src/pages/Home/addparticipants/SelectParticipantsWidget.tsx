import React, { useState } from 'react';
import { Paper, Grid, Button, TextField } from '@material-ui/core';
import DataGridView from 'base/datagrid/DataGridView';
import PageableGrid from 'base/pageable/PageableGrid';

import {baseUrl} from '../../../settings';
import { useHistory } from 'react-router-dom';
import DefaultButton from "../../../base/buttons/DefaultButton";

import axios from "../../../axios/BaseAxios";
import DefaultTextField from "../../../base/textfields/DefaultTextfield";

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
    };

    const deleteFromSelected = (row: any) => {
        const index = selected.map(t => t.id).indexOf(row.id);
        if (index > -1) {
            selected.splice(index, 1);
            setSelected(selected.slice(0));
        }
    };

    const renderAddButton = (row: any) => {
        if (selected.indexOf(row) < 0) {
            return <DefaultButton onClick={() => addToSelected(row)}>Add</DefaultButton>;
        } else {
            return null;
        } 
    };

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
    };

    return <Paper elevation={5}>
        {error}
        <Grid xs={12} container direction="row" spacing={5}>
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
                    <DefaultTextField onTextChange={setTitle} label='Title' value={title} />
                    <DataGridView list={selected} columns={[
                        {title: "First", render: row => row.firstName},
                        {title: "Last", render: row => row.lastName},
                        {title: "Delete", render: row => <DefaultButton onClick={() => deleteFromSelected(row)}>Delete</DefaultButton>},
                    ]}/>
                    <DefaultButton onClick={assignGifts} disabled={selected.length < 2}>ASSIGN GIFTS</DefaultButton>
                </Grid>
            </Grid>
        </Grid>
        
    </Paper>
};

export default SelectParticipantWidget;