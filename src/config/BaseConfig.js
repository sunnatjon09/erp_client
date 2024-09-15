import axios from "axios";
import {BASE_URL} from "./Utils";

const config = {
    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
}

export const BASE_CONFIG = {
    doGet: (url) => axios.get(
        `${BASE_URL}${url}`,
    ), doPost: (url, data) => axios.post(
        `${BASE_URL}${url}`, data
    ), doPut: (url, data, id) => axios.put(
        `${BASE_URL}${url}/${id}`, data
    ), doDelete: (url, id) => axios.delete(
        `${BASE_URL}${url}/${id}`
    )
}


export const BASE_CONFIG_AUTH = {
    doGet: (url) => axios.get(
        `${BASE_URL}${url}`
    ), doPost: (url, data) => axios.post(
        `${BASE_URL}${url}`, data
    )
}