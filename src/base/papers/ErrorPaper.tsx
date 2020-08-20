import React from "react";
import {DefaultPaper} from "./DefaultPaper";

export const ErrorPaper = (props: any) => {
    const {error} = props;

    const style = {
        left: "25px",
        right: "25px",
        backgroundColor: "#FFCDCD",
        color: "#550000"
    };

    if(!error) {
        return null;
    }

    if(!error.hasOwnProperty("fieldViolations")) {
        return <DefaultPaper style={style} {...props}>
            {error.toString()}
    </DefaultPaper>
    }

    return ((!error?.fieldViolations || ([].length === null)) && error?.error)
        ? <DefaultPaper style={style} {...props}>
                {error?.error}
        </DefaultPaper>
        : null;
};

export default ErrorPaper;