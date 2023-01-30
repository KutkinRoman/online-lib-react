import {AuthStore} from "./AuthStore";
import {makeAutoObservable} from "mobx";
import {NavigationStore} from "./NavigationStore";
import {BookStore} from "./BookStore";
import {AuthorStore} from "./AuthorStore";
import {OrderFeedbacksStore} from "./OrderFeedbacksStore";

export class AppStore {

    authStore: AuthStore;

    navigationStore = new NavigationStore()

    bookStore = new BookStore()

    authorStore = new AuthorStore()

    orderFeedbacksStore = new OrderFeedbacksStore()

    constructor(authStore: AuthStore) {
        this.authStore = authStore;
        makeAutoObservable(this)
    }
}