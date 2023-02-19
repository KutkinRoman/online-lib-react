import {API, AUTH_API} from "../APICofig";
import {InterfaceBookForm} from "../entities/BookForm";
import {InterfaceFile} from "../entities/File";

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

    static async getCover(bookId: string) {
        return await AUTH_API.get<InterfaceFile | null>(`/books/cover/${bookId}`)
    }

    static async uploadCover(bookId: string, formData: any) {
        return await AUTH_API.post<InterfaceFile>(`/books/cover/${bookId}`, formData)
    }

    static async getEBook(bookId: string) {
        return await AUTH_API.get<InterfaceFile | null>(`/books/ebook/${bookId}`)
    }

    static async uploadEBook(bookId: string, formData: any) {
        return await AUTH_API.post<InterfaceFile>(`/books/ebook/${bookId}`, formData)
    }
}