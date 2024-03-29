import {API} from "../APICofig";
import {InterfaceBookCategory} from "../entities/BookCategory";

export class BookCategoryService {

    static async getById(id: any) {
        return await API.get<InterfaceBookCategory>(`/book-categories/${id}`)
    }

    static async getAll() {
        return await API.get<InterfaceBookCategory[]>('/book-categories/getAll')
    }

    static async save(data: any) {
        return await API.post<InterfaceBookCategory>('/book-categories/save', data)
    }

}