import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Paper } from '@material-ui/core';

export const HomeView = () => {

    const history = useHistory();

    return <Paper>
        <h1>Secret Santa</h1>
        <Button onClick={() => history.push("/selectParticipants")}>Assign gifts randomly</Button>
    </Paper>;
} 