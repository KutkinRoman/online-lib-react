import axios from 'axios';
import {authStore} from "../App";

export const API = axios.create({
    baseURL: process.env.REACT_APP_API_URI
})

export const AUTH_API = axios.create({
    baseURL: process.env.REACT_APP_API_URI
})

AUTH_API.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${authStore.getAccessToken()}`
    return config
})

AUTH_API.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest.isRetry) {
        originalRequest.isRetry = true
        try {
            await authStore.refresh()
            return AUTH_API.request(originalRequest)
        } catch (e) {
            throw error
        }
    } else {
        throw error
    }
})