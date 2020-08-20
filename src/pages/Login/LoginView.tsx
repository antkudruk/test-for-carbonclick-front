import React, {useState} from 'react';
import { Paper, Grid } from '@material-ui/core';

import {DefaultButton} from '../../base/buttons/DefaultButton';
import {DefaultTextField} from '../../base/textfields/DefaultTextfield';
import {DefaultPaper} from '../../base/papers/DefaultPaper';
import ErrorPaper from 'base/papers/ErrorPaper';

interface LoginViewProperties {
    error: boolean;
    loginCallback: (username: string, password: string) => any;
}

export const LoginView = (props: LoginViewProperties) => {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return <DefaultPaper style={{
        position: 'absolute', 
        left: "50px",
        right: "50px",
        maxWidth: '450px', 
        minWidth: '150px'}}>
        <h1>Login</h1>
        <ErrorPaper error={props.error && "Please make sure you entered your credentials right."}/>
        <Grid container direction='column'>
            <DefaultTextField 
                label='Username' 
                value={username} 
                onTextChange={setUsername}/>
            <DefaultTextField 
                label='Password' 
                value={password} 
                onTextChange={setPassword} 
                type="password"
                autoComplete="current-password"/>
        </Grid>
        <DefaultButton onClick={() => props.loginCallback(username, password)}>Login</DefaultButton>
    </DefaultPaper>;
} 