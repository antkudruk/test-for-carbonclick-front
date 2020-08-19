import React from 'react';
import { useParams } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import PageableGrid from "../../../base/pageable/PageableGrid";
import {baseUrl} from "../../../settings";

export const AssignmentWidget = () => {

    const {yearId} = useParams();

    return <Paper>
        <h1>Existing Assignments</h1>
        <PageableGrid url={`${baseUrl}/year/${yearId}/assignment`} columns={[
            {title: "Giver", render: row => row.giver.firstName + row.giver.lastName},
            {title: "Taker", render: row => row.taker.firstName + row.taker.lastName}
        ]}/>
    </Paper>;
}