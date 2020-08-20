import React, {useEffect, useState} from 'react';
import { useHistory, useParams} from 'react-router-dom';
import axios from "../../../axios/BaseAxios";
import {AxiosResponse} from "axios";
import {baseUrl} from "../../../settings";
import { ErrorResponse } from 'base/rest/ErrorResponse';
import ParticipantView from './ParticipantView';
import { ParticipantData } from './ParticipantData';

export const ParticipantController = () => {

    const {participantId} = useParams();

    const history = useHistory();

    const [error, setError] = useState<ErrorResponse | null>(null);
    const [data, setData] = useState<ParticipantData | null>(null);

    const onApply = (data: ParticipantData) => {
        save(data).then(
            () => {
                history.push("/participants")
            },
            (error: any) => {
                setError(error?.response?.data);
            }
        );
    };

    const onCancel = () => {
        history.push("/participants")
    };

    const save = (data: ParticipantData) => {
        if (participantId) {
            return axios.put(`${baseUrl}/participant/${participantId}`, data)
        } else {
            return axios.post(`${baseUrl}/participant`, data)
        }
    };

    const requestFormData = (id: number) => {
        axios.get(`${baseUrl}/participant/${id}`)
            .then(
                ({data}: AxiosResponse<ParticipantData>) => {
                    setData(data);
                },
                (error) => {
                    setError(error.message || error.toString());
                }
            )
    };

    useEffect(() => {
        if (participantId) {
            requestFormData(participantId);
        }
    }, []);

    return <ParticipantView error={error} data={data} onSave={onApply} onCancel={onCancel}/>
};

export default ParticipantController;
