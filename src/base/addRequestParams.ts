import { request } from "http";

export const addRequestParam = (url: string, requestParams: any) => {
    var result = url + (url.indexOf('?') < 0 ? '?' : '&');
    for (var prop in requestParams) {
        if (Object.prototype.hasOwnProperty.call(requestParams, prop)) {
            const value = requestParams[prop];
            result = result + `${prop}=${value}&`;
        }
    }
    return result;
}