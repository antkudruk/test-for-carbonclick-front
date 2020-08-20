import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {LoginView} from "./LoginView";
import axios from "../../axios/BaseAxios";
import { useToken } from './TokenState';

interface LoginResponse {
    token: string;
}

export const LoginController = () => {
    const history = useHistory();

    const [error, setError] = useState(false);

    const [jwtToken, setJwtToken] = useToken();

    const setToken = (newToken: string) => {
        setJwtToken(newToken);
        axios.defaults.headers.common.Authorization = `Bearer ${newToken}`;
        history.push("/");
    };

    const login = (username: string, password: string) => {
        return axios
            .post<LoginResponse>(`/login`, {username, password})
            .then(({data}) => {
                setToken(data.token);
            }, () => {
                setError(true);
            });
    };

    return <LoginView error={error} loginCallback={login} />
} 
