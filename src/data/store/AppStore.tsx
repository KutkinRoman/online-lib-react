import {AuthStore} from "./AuthStore";
import {makeAutoObservable} from "mobx";
import {NavigationStore} from "./NavigationStore";
import {BookStore} from "./BookStore";

export class AppStore {

    authStore: AuthStore;

    navigationStore = new NavigationStore()

    bookStore = new BookStore()

    constructor(authStore: AuthStore) {
        this.authStore = authStore;
        makeAutoObservable(this)
    }
}