import React from 'react';

import {useHistory} from 'react-router-dom';

import {PageableGrid} from '../../base/pageable/PageableGrid';

import {baseUrl} from '../../settings';

import { Paper, Button } from '@material-ui/core';

import DefaultButton from "../../base/buttons/DefaultButton";

export const ParticipantsView = () => {

    const history = useHistory();

    const editParticipant = (participantId: number) => {
        history.push(`/participants/edit/${participantId}`);
    };

    const deleteParticipant = (id: number) => {
        // TODO: Implement
    };

    const addParticipant = () => {
        history.push('/participants/add');
    };

    return <Paper>
                <h1>Participants</h1>
                <DefaultButton onClick={addParticipant}>Add participant</DefaultButton>
                <PageableGrid url={`${baseUrl}/participant`} columns={[
                    {title: "First Name", render: (row) => row.firstName},
                    {title: "Last Name", render: (row) => row.lastName},
                    {title: "Email", render: (row) => row.email},
                    {title: "Edit", render: (row) => <DefaultButton onClick={() => editParticipant(row.id)}>Edit</DefaultButton>}
                  ]}
                />
            </Paper>
};

export default ParticipantsView;