import React, {createContext, useContext, useEffect, useState} from "react";
import {AppStore} from "../data/store/AppStore";
import {AuthStore} from "../data/store/AuthStore";
import {observer} from "mobx-react-lite";
import {ShoppingCartService} from "../data/services/ShoppingCartService";

const AppStoreContext = createContext<AppStore | null>(null);

interface AppStoreContextProvider {
    authStore: AuthStore,
    children: React.ReactNode
}

export const AppStoreContextProvider = observer(
    ({authStore, children}: AppStoreContextProvider) => {
        const [appStore] = useState(new AppStore(authStore));

        useEffect(() => {
            const updateShoppingCart = async () => {
                const response = await ShoppingCartService.getCurrent();
                appStore.setShoppingCartStore(response.data);
            }
            if (appStore.authStore.isAuth()) {
                updateShoppingCart();
            }
        }, [appStore.authStore.isAuth()])

        return (
            <AppStoreContext.Provider value={appStore} children={children}/>
        )
    }
)

export const useAppStore = () => {
    const appStore = useContext(AppStoreContext)
    if (appStore === null) {
        throw new Error('AppStore is null')
    }
    return appStore;
}
