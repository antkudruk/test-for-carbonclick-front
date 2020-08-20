
import {FieldViolationResponse} from './FieldViolationResponse';

export interface ErrorResponse {
    error: string;
    fieldViolations: FieldViolationResponse[];
}