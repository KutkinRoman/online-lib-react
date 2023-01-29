import {InterfaceAccessTokenDecode, UserStore} from "./UserStore";
import {makeAutoObservable} from "mobx";
import {AuthService} from "../services/AuthService";
import {InterfaceAuthResponse} from "../entities/AuthResponse";
import jwt_decode from "jwt-decode";

export class AuthStore {

    static ACCESS_TOKEN_KEY = 'ACCESS_TOKEN'

    static REFRESH_TOKEN_KEY = 'REFRESH_TOKEN'

    user?: UserStore = undefined

    constructor() {
        makeAutoObservable(this)
    }

    setUser(user?: UserStore) {
        this.user = user;
    }

    isAuth() {
        return (this.user !== undefined)
    }

    async login(data: any) {
        try {
            const response = await AuthService.login(data)
            this.updateLocalStorage(response.data)
            this.initUser(response.data)
        } catch (e) {
            console.error(e)
        }
    }

    async refresh() {
        const refreshToken = localStorage.getItem(AuthStore.REFRESH_TOKEN_KEY)
        if (refreshToken) {
            try {
                const response = await AuthService.refresh(refreshToken)
                this.updateLocalStorage(response.data)
                this.initUser(response.data)
            } catch (e) {
                console.error(e)
            }
        }
    }

    updateLocalStorage(response: InterfaceAuthResponse) {
        localStorage.setItem(AuthStore.REFRESH_TOKEN_KEY, response.refreshToken)
        localStorage.setItem(AuthStore.ACCESS_TOKEN_KEY, response.accessToken)
    }

    initUser(response: InterfaceAuthResponse) {
        const jwtDecode = jwt_decode<InterfaceAccessTokenDecode>(response.accessToken)
        this.user = new UserStore(jwtDecode.sub, jwtDecode.roles)
    }

    getAccessToken() {
        localStorage.getItem(AuthStore.ACCESS_TOKEN_KEY)
    }
}