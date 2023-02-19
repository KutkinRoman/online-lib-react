import {ShoppingCart} from "../entities/ShoppingCart";
import {ShoppingCartItem} from "../entities/ShoppingCartItem";
import {makeAutoObservable} from "mobx";

export class ShoppingCartStore implements ShoppingCart {

    id: string;
    createdTs: string;
    state: string;
    totalOrders: number;
    totalPrice: number;
    orders: ShoppingCartItem[];

    constructor(c: ShoppingCart) {
        this.id = c.id;
        this.createdTs = c.createdTs;
        this.state = c.state;
        this.totalOrders = c.totalOrders;
        this.totalPrice = c.totalPrice;
        this.orders = c.orders;
        makeAutoObservable(this, {})
    }

}