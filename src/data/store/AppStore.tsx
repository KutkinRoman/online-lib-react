import {AuthStore} from "./AuthStore";
import {makeAutoObservable} from "mobx";

export class AppStore {

    authStore: AuthStore;

    constructor(authStore: AuthStore) {
        this.authStore = authStore;
        makeAutoObservable(this)
    }
}