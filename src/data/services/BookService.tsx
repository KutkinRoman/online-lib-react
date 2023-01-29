import {API} from "../APICofig";

export class BookService {

    static async getPageByParams(params?: any) {
        return await API.get<any>('/books/pages', {params})
    }
}