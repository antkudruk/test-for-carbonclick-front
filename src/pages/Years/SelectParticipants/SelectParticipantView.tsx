import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import DataGrid from 'base/DataGrid';
import PageableGrid from 'base/PageableGrid';

import {baseUrl} from '../../../settings';
import DefaultButton from "../../../base/buttons/DefaultButton";

import DefaultTextField from "../../../base/textfields/DefaultTextfield";
import DefaultPaper from 'base/papers/DefaultPaper';
import { ErrorResponse } from 'base/rest/ErrorResponse';
import { SelectParticipantData } from './SelectParticipantData';
import ErrorPaper from 'base/papers/ErrorPaper';
import hasErrorMessage from 'base/rest/hasErrorMessage';
import getErrorMessage from 'base/rest/getErrorMessage';

interface SelectParticipantViewProperties {
    assignGifts: (data: SelectParticipantData) => any;
    error: ErrorResponse | null;
}

export const SelectParticipantView = (props: SelectParticipantViewProperties) => {

    const {assignGifts, error} = props;
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

    return <DefaultPaper>
        <ErrorPaper error = {error} />
        <Grid xs={12} container direction="row" spacing={5}>
            <Grid xs={6} item>
                <h1>Participants to select</h1>
                <PageableGrid url={`${baseUrl}/participant`} columns={[
                    {title: "First Name", render: (row) => row.firstName},
                    {title: "Last Name", render: (row) => row.lastName},
                    {title: "Add", render: renderAddButton}
                ]} 
                />
            </Grid>
            <Grid xs={5} item container>
                <Grid xs={12} container direction="column">
                    <h1>Selected Participants</h1>
                    <DefaultPaper>    
                        <DefaultTextField onTextChange={setTitle} label='Year Title' value={title} error={hasErrorMessage(error, 'title')} helperText={getErrorMessage(error, 'title')}/>
                        <DefaultPaper>
                            <DataGrid list={selected} columns={[
                                {title: "First", render: row => row.firstName},
                                {title: "Last", render: row => row.lastName},
                                {title: "Delete", render: row => <DefaultButton onClick={() => deleteFromSelected(row)}>Delete</DefaultButton>},
                            ]}/>
                        </DefaultPaper>
                        <DefaultButton onClick={() => assignGifts({title, selected})} disabled={selected.length < 2}>ASSIGN GIFTS</DefaultButton>
                    </DefaultPaper>
                </Grid>
            </Grid>
        </Grid>
        
    </DefaultPaper>
};

export default SelectParticipantView;