import {AUTH_API} from "../APICofig";

export class OrderService {

    public static async getEpubConfigByBookId(bookId: string) {
        return await AUTH_API.get<string | null>(`/orders/epub/book/${bookId}`)
    }

    public static async saveEpubConfigByBookId(bookId: string, epubcfi: string) {
        return await AUTH_API.post<any>(`/orders/epub/save-page`, {
            bookId,
            epubcfi
        })
    }

}