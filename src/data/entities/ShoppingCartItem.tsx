import {InterfaceBook} from "./Book";

export interface ShoppingCartItem {
    id: string;
    createdTs: string;
    book: InterfaceBook
}