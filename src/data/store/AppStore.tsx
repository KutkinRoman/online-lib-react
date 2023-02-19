import {AuthStore} from "./AuthStore";
import {makeAutoObservable} from "mobx";
import {NavigationStore} from "./NavigationStore";
import {BookStore} from "./BookStore";
import {AuthorStore} from "./AuthorStore";
import {OrderFeedbacksStore} from "./OrderFeedbacksStore";
import {BlogsStore} from "./BlogsStore";
import {ShoppingCartStore} from "./ShoppingCartStore";

export class AppStore {

    authStore: AuthStore;

    navigationStore = new NavigationStore()

    bookStore = new BookStore()

    authorStore = new AuthorStore()

    orderFeedbacksStore = new OrderFeedbacksStore()

    blogsStore = new BlogsStore()

    shoppingCartStore: ShoppingCartStore | null = null

    constructor(authStore: AuthStore) {
        this.authStore = authStore;
        makeAutoObservable(this)
    }

    setShoppingCartStore(shoppingCartStore: ShoppingCartStore) {
        this.shoppingCartStore = shoppingCartStore;
    }

}