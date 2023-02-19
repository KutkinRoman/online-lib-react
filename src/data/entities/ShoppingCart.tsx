import {ShoppingCartItem} from "./ShoppingCartItem";

export interface ShoppingCart {
    id: string;
    createdTs: string;
    state: string;
    totalOrders: number;
    totalPrice: number;
    orders: ShoppingCartItem[]
}