import {AUTH_API} from "../APICofig";
import {ShoppingCart} from "../entities/ShoppingCart";
import {BookStatusEnum} from "../entities/BookStatusEnum";

export class ShoppingCartService {

    public static getCurrent(){
        return AUTH_API.get<ShoppingCart>('/shopping-cart/getCurrent')
    }

    public static addBook(bookId: string){
        return AUTH_API.post<ShoppingCart>(`/shopping-cart/addBook/${bookId}`)
    }

    public static removeBook(bookId: string){
        return AUTH_API.delete<ShoppingCart>(`/shopping-cart/removeBook/${bookId}`)
    }

    public static removeOrder(orderId: string){
        return AUTH_API.delete<ShoppingCart>(`/shopping-cart/removeOrder/${orderId}`)
    }

    public static getBookStatus(bookId: string){
        return AUTH_API.get<BookStatusEnum>(`/shopping-cart/book-status/${bookId}`)
    }

}