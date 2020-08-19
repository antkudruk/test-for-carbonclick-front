import React from "react";
import {Button} from "@material-ui/core";

export const DefaultButton = (props: any) => {
    return <Button variant="contained" color="primary" {...props}/>;
};

export default DefaultButton;