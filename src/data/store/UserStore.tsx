import {makeAutoObservable} from "mobx";

export interface InterfaceAccessTokenDecode {
    sub: string
    roles: UserRole[]
}

export enum UserRole {
    ROLE_ADMIN = "ROLE_ADMIN",
    ROLE_MODERATOR = "ROLE_MODERATOR",
    ROLE_NOT_VERIFICATION = "ROLE_NOT_VERIFICATION",
    ROLE_USER = "ROLE_USER"
}

export class UserStore {

    readonly username: string

    readonly roles: UserRole[]

    constructor(username: string, roles: UserRole[]) {
        this.username = username;
        this.roles = roles;
        makeAutoObservable(this)
    }

}