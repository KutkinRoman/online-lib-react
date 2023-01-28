import axios from "axios";

export const API = axios.create({
    baseURL: process.env.REACT_APP_API_URI,
})

export const API_HTTP_TEST = axios.create({
    baseURL: 'http://95.163.236.150:5000/api/v1'
})