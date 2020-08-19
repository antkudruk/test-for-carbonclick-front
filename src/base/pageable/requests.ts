import axios from "../../axios/BaseAxios";
import { AxiosResponse } from "axios";
import { DefaultPageResponse } from "base/DefaultPageResponse";

export default function getList<D>(url: string): Promise<AxiosResponse<DefaultPageResponse<D>>> {
    return axios.get(url);
}