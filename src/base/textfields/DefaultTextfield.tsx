import React from "react";
import {TextField} from "@material-ui/core";

// @ts-ignore
export const DefaultTextField = ({onTextChange, ...props}) => {
    return <TextField
        onChange={(ev) => onTextChange(ev.target.value)}
        {...props}/>;
};

export default DefaultTextField;