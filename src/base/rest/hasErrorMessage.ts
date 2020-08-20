import {ErrorResponse} from "./ErrorResponse";

const hasErrorMessage = (error: ErrorResponse | null, fieldName: string): boolean => 
!!(error?.fieldViolations?.some(e => e.fieldName === fieldName));

export default hasErrorMessage;