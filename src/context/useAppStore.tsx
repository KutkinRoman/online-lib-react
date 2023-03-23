import React, {createContext, useContext, useEffect} from "react";
import {AppStore} from "../data/store/AppStore";
import {AuthStore} from "../data/store/AuthStore";
import {useAlert} from "../hooks/useAlert";
import {observer} from "mobx-react-lite";

const AppStoreContext = createContext<AppStore | null>(null);

interface AppStoreContextProvider {
    authStore: AuthStore,
    children: React.ReactNode
}

export const AppStoreContextProvider = observer(({authStore, children}: AppStoreContextProvider) => {

    const {enqueueSnackbar} = useAlert()

    useEffect(() => {
        if (authStore.isNotVerification()){
            enqueueSnackbar('Необходимо подтвердить адрес электроной почты', {variant: 'info'})
        }
    }, [authStore.isNotVerification()])

    return (
        <AppStoreContext.Provider value={new AppStore(authStore)} children={children}/>
    )
})

export const useAppStore = () => {
    const appStore = useContext(AppStoreContext)
    if (appStore === null) {
        throw new Error('AppStore is null')
    }
    return appStore;
}
