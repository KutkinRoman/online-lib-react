import {API} from "../APICofig";
import {InterfaceAuthResponse} from "../entities/AuthResponse";

export class BookCategoryService {

    static async getAll() {
        return await API.get<InterfaceAuthResponse>('/book-categories/getAll')
    }

    static async save(data: any) {
        return await API.post<InterfaceAuthResponse>('/book-categories/save', data)
    }
}