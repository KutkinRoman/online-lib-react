import {API} from "../APICofig";
import {InterfaceAuthResponse} from "../entities/AuthResponse";

export class AuthorService {

    static async getAll() {
        return await API.get<InterfaceAuthResponse>('/authors/getAll')
    }

     static async save(data: any) {
        return await API.post<InterfaceAuthResponse>('/authors/save', data)
    }
}