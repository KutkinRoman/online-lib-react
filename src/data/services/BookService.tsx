import {API, AUTH_API} from "../APICofig";
import {InterfaceBookForm} from "../entities/BookForm";

export class BookService {

    static async getPageByParams(params?: any) {
        return await API.get<any>('/books/pages', {params})
    }

    static async getFormByBookId(bookId: string) {
        return await AUTH_API.get<InterfaceBookForm>(`/books/form/${bookId}`)
    }

    static async saveForm(data: any) {
        return await AUTH_API.post<InterfaceBookForm>('/books/form', data)
    }
}