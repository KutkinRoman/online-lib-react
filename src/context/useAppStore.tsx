import React, {createContext, useContext, useEffect} from "react";
import {AppStore} from "../data/store/AppStore";
import {AuthStore} from "../data/store/AuthStore";

const AppStoreContext = createContext<AppStore | null>(null);

interface AppStoreContextProvider {
    authStore: AuthStore,
    children: React.ReactNode
}

export const AppStoreContextProvider = ({authStore, children}: AppStoreContextProvider) => {
    return (
        <AppStoreContext.Provider value={new AppStore(authStore)} children={children}/>
    )
}

export const useAppStore = () => {
    const appStore = useContext(AppStoreContext)
    if (appStore === null) {
        throw new Error('AppStore is null')
    }
    return appStore;
}
