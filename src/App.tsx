import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import RouterContextProvider from "./router/RouterContextProvider";
import {AuthStore} from "./data/store/AuthStore";
import {AppStoreContextProvider} from "./context/useAppStore";
import {SnackbarProvider} from 'notistack';

export const authStore = new AuthStore()

function App() {
    return (
        <SnackbarProvider maxSnack={3}>
            <AppStoreContextProvider authStore={authStore}>
                <BrowserRouter>
                    <RouterContextProvider/>
                </BrowserRouter>
            </AppStoreContextProvider>
        </SnackbarProvider>
    );
}

export default App;
