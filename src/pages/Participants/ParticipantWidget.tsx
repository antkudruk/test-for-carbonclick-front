import React, {useEffect, useState} from 'react';
import { Paper, Grid } from '@material-ui/core';
import { useHistory, useParams} from 'react-router-dom';
import DefaultButton from "../../base/buttons/DefaultButton";
import axios from "../../axios/BaseAxios";
import {AxiosResponse} from "axios";
import {baseUrl} from "../../settings";
import DefaultTextField from "../../base/textfields/DefaultTextfield";

interface ParticipantData {
    firstName: string;
    lastName: string;
    email: string;
}

export const ParticipantWidget = () => {

    const {participantId} = useParams();

    const history = useHistory();

    const [error, setError] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const onApply = () => {
        // TODO: Save
        save().then(
            ({data}: AxiosResponse<ParticipantData>) => {
                history.push("/participants");
            },
            (error) => {
                setError(error.message || error.toString());
            }
        );
    };

    const onCancel = () => {
        history.push("/participants")
    };

    const save = () => {
        const req: ParticipantData = {firstName, lastName, email};
        if (participantId) {
            return axios.put(`${baseUrl}/participant/${participantId}`, req)
        } else {
            return axios.post(`${baseUrl}/participant`, req)
        }
    };


    useEffect(() => {
        if (participantId) {
            requestFormData(participantId);
        }
    }, []);

    const requestFormData = (id: number) => {
        axios.get(`${baseUrl}/participant/${id}`)
            .then(
                ({data}: AxiosResponse<ParticipantData>) => {
                    setFirstName(data.firstName);
                    setLastName(data.lastName);
                    setEmail(data.email);
                },
                (error) => {
                    setError(error.message || error.toString());
                }
            )
    };

    return <Paper>
        {error}
        <Grid container direction='column'>
            <Grid container item direction='row'>
                <Grid item xs={3}>
                    <DefaultTextField onTextChange={setFirstName} label="First Name" value={firstName} />
                </Grid>
                <Grid item xs={3}>
                    <DefaultTextField onTextChange={setLastName} label="Last Name" value={lastName} />
                </Grid>
                <Grid item xs={3}>
                    <DefaultTextField onTextChange={setEmail} label="Email" value={email} />
                </Grid>
            </Grid>
            <Grid container item direction='row'>
                <DefaultButton onClick={onApply}>Apply</DefaultButton>
                <DefaultButton onClick={onCancel}>Cancel</DefaultButton>
            </Grid>
        </Grid>
    </Paper>
};

export default ParticipantWidget;
