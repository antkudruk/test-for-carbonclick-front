import React from 'react';
import { useHistory } from 'react-router-dom';
import PageableGrid from "../../../base/pageable/PageableGrid";
import {baseUrl} from "../../../settings";
import DefaultButton from "../../../base/buttons/DefaultButton";

export const YearsWidget = () => {

    const history = useHistory();

    const showYearAssignments = (yearId: number) => {
        history.push(`/years/${yearId}`)
    };

    return <>
        <h1>Existing Assignments</h1>
        <PageableGrid url={`${baseUrl}/year`} columns={[
            {title: "Title", render: row => row.title},
            {title: "View", render: row => <DefaultButton onClick={() => showYearAssignments(row.id)}>View</DefaultButton>},
        ]}/>
    </>;
};