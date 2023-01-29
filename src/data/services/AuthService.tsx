import {API} from "../APICofig";
import {InterfaceAuthResponse} from "../entities/AuthResponse";

export class AuthService {

    public static async login(data: any) {
        return await API.post<InterfaceAuthResponse>('/auth/login', data)
    }

    public static async refresh(refreshToken: string) {
        return await API.post<InterfaceAuthResponse>('/auth/refresh', {
            refreshToken
        })
    }

}