import React, {useState} from 'react';
import { Paper, Grid } from '@material-ui/core';

import {DefaultButton} from '../../base/buttons/DefaultButton';
import {DefaultTextField} from '../../base/textfields/DefaultTextfield';

interface LoginViewProperties {
    error: boolean;
    loginCallback: (username: string, password: string) => any;
}

export const LoginView = (props: LoginViewProperties) => {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return <Paper>
        <h1>Login</h1>
        {props.error && "Please make sure you entered your credentials right."}
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
    </Paper>;
} 