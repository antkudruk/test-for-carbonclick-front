import React from 'react';

import {PageableGrid} from '../../../base/pageable/PageableGrid';
import {baseUrl} from '../../../settings';
import { Paper } from '@material-ui/core';
import DefaultButton from "../../../base/buttons/DefaultButton";
import {DefaultPaper} from '../../../base/papers/DefaultPaper';

interface ParticipantsViewProperties {
    editParticipant: (participantId: number) => any;
    addParticipant: () => any;
}

export const ParticipantsView = ({addParticipant, editParticipant}: ParticipantsViewProperties) => {
    return <DefaultPaper>
                <h1>Participants</h1>
                <DefaultButton onClick={addParticipant}>Add participant</DefaultButton>
                <PageableGrid url={`${baseUrl}/participant`} columns={[
                    {title: "First Name", render: (row: any) => row.firstName},
                    {title: "Last Name", render: (row: any) => row.lastName},
                    {title: "Email", render: (row: any) => row.email},
                    {title: "Edit", render: (row: any) => <DefaultButton onClick={() => editParticipant(row.id)}>Edit</DefaultButton>}
                  ]}
                />
            </DefaultPaper>
};

export default ParticipantsView;