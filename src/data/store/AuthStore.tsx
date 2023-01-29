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
        this.checkTokenAndInitUser();
        makeAutoObservable(this)
    }

    setUser(user?: UserStore) {
        this.user = user;
    }

    isAuth() {
        return (this.user !== undefined)
    }

    async login(data: any) {
        const response = await AuthService.login(data)
        this.updateLocalStorage(response.data)
        this.initUser(response.data.accessToken)
    }

    async registration(data: any) {
        const response = await AuthService.registration(data)
        this.updateLocalStorage(response.data)
        this.initUser(response.data.accessToken)
    }

    async verification(secret: string) {
        const response = await AuthService.verification(secret)
        this.updateLocalStorage(response.data)
        this.initUser(response.data.accessToken)
    }

    logout(){
        this.clear();
    }

    async refresh() {
        const token = this.getRefreshToken();
        if (token) {
            try {
                const response = await AuthService.refresh(token)
                this.updateLocalStorage(response.data)
                this.initUser(response.data.accessToken)
            } catch (e) {
                console.error(e)
            }
        }
    }

    clear() {
        this.user = undefined
        localStorage.removeItem(AuthStore.REFRESH_TOKEN_KEY)
        localStorage.removeItem(AuthStore.ACCESS_TOKEN_KEY)
    }

    updateLocalStorage(response: InterfaceAuthResponse) {
        localStorage.setItem(AuthStore.REFRESH_TOKEN_KEY, response.refreshToken)
        localStorage.setItem(AuthStore.ACCESS_TOKEN_KEY, response.accessToken)
    }

    checkTokenAndInitUser() {
        const token = this.getAccessToken();
        if (token) {
            this.initUser(token)
        }
    }

    initUser(accessToken: string) {
        try {
            const jwtDecode = jwt_decode<InterfaceAccessTokenDecode>(accessToken)
            this.user = new UserStore(jwtDecode.sub, jwtDecode.roles)
        } catch (e) {
            this.clear()
            console.error(e)
        }
    }

    getAccessToken() {
        return localStorage.getItem(AuthStore.ACCESS_TOKEN_KEY)
    }

    getRefreshToken() {
        return localStorage.getItem(AuthStore.REFRESH_TOKEN_KEY)
    }



}