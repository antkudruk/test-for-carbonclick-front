import React from 'react';
import { useHistory } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import DefaultButton from "../../base/buttons/DefaultButton";

export const HomeView = () => {

    const history = useHistory();

    return <Paper>
        <h1>Secret Santa</h1>
        <DefaultButton onClick={() => history.push("/selectParticipants")}>Assign gifts randomly</DefaultButton>
    </Paper>;
} 