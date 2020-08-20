import React from 'react';

import {useHistory} from 'react-router-dom';

import ParticipantsView from './ParticipantsView';


export const ParticipantsController = () => {

    const history = useHistory();

    const editParticipant = (participantId: number) => {
        history.push(`/participants/edit/${participantId}`);
    };

    const addParticipant = () => {
        history.push('/participants/add');
    };

    return <ParticipantsView addParticipant={addParticipant} editParticipant={editParticipant} />
};

export default ParticipantsController;