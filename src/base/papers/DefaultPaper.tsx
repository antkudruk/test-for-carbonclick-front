import React from "react";
import {Paper} from "@material-ui/core";

export const DefaultPaper = (props: any) => {
    return <Paper 
        elevation={5} 
        {...props}
        style={{
            margin: 10,
            padding: 15,
            left: "10px",
            right: "10px",
            ...props.style
        }} />;
};

export default DefaultPaper;