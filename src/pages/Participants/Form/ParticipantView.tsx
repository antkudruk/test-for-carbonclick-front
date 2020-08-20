import React, {useEffect, useState} from 'react';
import { Paper, Grid } from '@material-ui/core';
import DefaultButton from "../../../base/buttons/DefaultButton";
import DefaultTextField from "../../../base/textfields/DefaultTextfield";
import { ErrorResponse } from 'base/rest/ErrorResponse';
import { ParticipantData } from './ParticipantData';
import {ErrorPaper} from "../../../base/papers/ErrorPaper";
import hasErrorMessage from 'base/rest/hasErrorMessage';
import getErrorMessage from 'base/rest/getErrorMessage';

interface BaseViewProperties<T> {
    error: ErrorResponse | null;
    data: T | null;
    onSave: (data: T) => any;
    onCancel: () => any;
};

export const ParticipantView = (props: BaseViewProperties<ParticipantData>) => {

    const {error, data, onSave, onCancel} = props;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        setFirstName(data?.firstName || "");
        setLastName(data?.lastName || "");
        setEmail(data?.email || "");
    }, [data]);

    return <Paper>
        <ErrorPaper error={error}/>
        <Grid container direction='column'>
            <Grid container item direction='row'>
                <Grid item xs={3}>
                    <DefaultTextField 
                        onTextChange={setFirstName} 
                        label="First Name" 
                        value={firstName} 
                        error={hasErrorMessage(error, 'firstName')}
                        helperText={getErrorMessage(error, 'firstName')} />
                </Grid>
                <Grid item xs={3}>
                    <DefaultTextField 
                        onTextChange={setLastName} 
                        label="Last Name" 
                        value={lastName}
                        error={hasErrorMessage(error, 'lastName')}
                        helperText={getErrorMessage(error, 'lastName')} />
                </Grid>
                <Grid item xs={3}>
                    <DefaultTextField 
                        onTextChange={setEmail} 
                        label="Email" 
                        value={email}
                        error={hasErrorMessage(error, 'email')}
                        helperText={getErrorMessage(error, 'email')} />
                </Grid>
            </Grid>
            <Grid container item direction='row'>
                <DefaultButton onClick={() => onSave({firstName, lastName, email})}>Apply</DefaultButton>
                <DefaultButton onClick={onCancel}>Cancel</DefaultButton>
            </Grid>
        </Grid>
    </Paper>
};

export default ParticipantView;
