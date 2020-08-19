import React from 'react';

import {useHistory} from 'react-router-dom';

import {PageableGrid} from '../../base/pageable/PageableGrid';

import {baseUrl} from '../../settings';

import { Paper, Button } from '@material-ui/core';

export const ParticipantsView = () => {

    const history = useHistory();

    const editParticipant = (id) => {
        //history.push('/participant/edit/:participantId');
    }

    const deleteParticipant = (id) => {
        // TODO: Implement
    }

    const addParticipant = () => {
        history.push('/participants/add');
    }

    return <Paper>
                <h1>Participants</h1>
                <Button onClick={addParticipant}>Add participant</Button>
                <PageableGrid url={`${baseUrl}/participant`} columns={[
                    {title: "First Name", render: (row) => row.firstName},
                    {title: "Last Name", render: (row) => row.lastName},
                    {title: "Email", render: (row) => row.email},
                    {title: "Edit", render: (row) => <Button onClick={editParticipant(row.id)}>Edit</Button>},
                    {title: "Delete", render: (row) => <Button onClick={deleteParticipant(row.id)}>Delete</Button>}]} 
                    />
            </Paper>
};

export default ParticipantsView;