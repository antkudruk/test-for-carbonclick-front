import React from "react";
import {DefaultPaper} from "./DefaultPaper";

export const ErrorPaper = (props: any) => {
    const {error} = props;

    const style = {
        height: "100%",
        width: "100%",
        backgroundColor: "#FFCDCD",
        color: "#550000"
    };

    if(!error) {
        return null;
    }

    if(!error.hasOwnProperty("fieldViolations")) {
        return <DefaultPaper {...props}>
        <div style={style}>
            {error.toString()}
        </div>
    </DefaultPaper>
    }

    return ((!error?.fieldViolations || ([].length === null)) && error?.error)
        ? <DefaultPaper {...props}>
            <div style={style}>
                {error?.error}
            </div>
        </DefaultPaper>
        : null;
};

export default ErrorPaper;