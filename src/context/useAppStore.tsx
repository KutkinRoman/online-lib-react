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

    // useEffect(() => {
    //     const showVerificationMessage = () => {
    //         const message = 'Необходимо подтвердить адрес электроной почты'
    //         enqueueSnackbar(message, {variant: 'warning'})
    //         setTimeout(() => {
    //             if (authStore.isNotVerification()) showVerificationMessage();
    //         }, 15_000)
    //     }
    //
    //     if (authStore.isNotVerification()) showVerificationMessage();
    // }, [authStore.isNotVerification()])

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
