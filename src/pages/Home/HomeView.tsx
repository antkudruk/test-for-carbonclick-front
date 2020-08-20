import React from 'react';
import { useHistory } from 'react-router-dom';
import DefaultButton from "../../base/buttons/DefaultButton";
import Years from "./Years";
import {DefaultPaper} from '../../base/papers/DefaultPaper';

export const HomeView = () => {

    const history = useHistory();

    return <DefaultPaper>
        <h1>Secret Santa</h1>
        <DefaultButton onClick={() => history.push("/selectParticipants")}>Assign gifts randomly</DefaultButton>
        <Years />
    </DefaultPaper>;
}