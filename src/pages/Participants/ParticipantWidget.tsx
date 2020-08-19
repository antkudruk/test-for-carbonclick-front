import React from 'react';
import { Paper, Grid, TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const ParticipantWidget = () => {

    const history = useHistory();

    const onApply = () => {
        // TODO: Save
        history.push("/participants");
    };
    const onCancel = () => {history.push("/participants")};

    return <Paper>
        <Grid container direction='column'>
            <Grid container item direction='row'>
                <Grid item xs={3}>First Name:</Grid>
                <Grid item xs={3}><TextField/></Grid>
            </Grid>
            <Grid container item direction='row'>
                <Grid item xs={3}>Last Name:</Grid>
                <Grid item xs={3}><TextField/></Grid>
            </Grid>
            <Grid container item direction='row'>
                <Grid item xs={3}>Email:</Grid>
                <Grid item xs={3}><TextField/></Grid>
            </Grid>
        </Grid>
        <Button onClick={onApply}>Apply</Button>
        <Button onClick={onCancel}>Cancel</Button>
    </Paper>
};

export default ParticipantWidget;
