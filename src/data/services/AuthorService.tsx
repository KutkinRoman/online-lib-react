import {API} from "../APICofig";
import {InterfaceAuthor} from "../entities/Author";

export class AuthorService {

    static async getAll() {
        return await API.get<InterfaceAuthor[]>('/authors/getAll')
    }

    static async save(data: any) {
        return await API.post<InterfaceAuthor>('/authors/save', data)
    }
}