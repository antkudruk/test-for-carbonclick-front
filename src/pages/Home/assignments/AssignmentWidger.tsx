import React from 'react';
import { useParams } from 'react-router-dom';
import PageableGrid from "../../../base/pageable/PageableGrid";
import {baseUrl} from "../../../settings";
import {DefaultPaper} from '../../../base/papers/DefaultPaper';

export const AssignmentWidget = () => {

    const {yearId} = useParams();

    return <DefaultPaper>
        <h1>Assignments</h1>
        <PageableGrid url={`${baseUrl}/year/${yearId}/assignment`} columns={[
            {title: "Giver", render: row => row.giver.firstName + " " + row.giver.lastName},
            {title: "Taker", render: row => row.taker.firstName + " " + row.taker.lastName}
        ]}/>
    </DefaultPaper>;
}