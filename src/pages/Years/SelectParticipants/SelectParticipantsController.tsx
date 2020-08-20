import React, { useState } from 'react';

import {baseUrl} from '../../../settings';
import { useHistory } from 'react-router-dom';

import axios from "../../../axios/BaseAxios";
import SelectParticipantView from './SelectParticipantView';
import { ErrorResponse } from 'base/rest/ErrorResponse';
import { SelectParticipantData } from './SelectParticipantData';

export const SelectParticipantsController = () => {

    const [error, setError] = useState<ErrorResponse | null>(null);
    const history = useHistory();

    const assignGifts = (data: SelectParticipantData ) => {
        axios.post(`${baseUrl}/year/generate`, {
              title: data.title,
              participants: data.selected.map(t => t.id)
            })
            .then(
              () => {
                history.push("/");
              },
              (error) => {
                setError(error?.response?.data);
              }
            )
    };

    return <SelectParticipantView assignGifts={assignGifts} error={error}/>
};

export default SelectParticipantsController;