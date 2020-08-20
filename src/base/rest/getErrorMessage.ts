import {ErrorResponse} from "./ErrorResponse";

const getErrorMessage = (error: ErrorResponse | null, fieldName: string): string => 
    error?.fieldViolations?.filter(e => e.fieldName === fieldName).map(e => e.message).join(", ") || "";

export default getErrorMessage;
