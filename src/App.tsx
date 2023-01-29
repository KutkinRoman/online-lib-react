import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import RouterContextProvider from "./router/RouterContextProvider";
import {AuthStore} from "./data/store/AuthStore";
import {AppStoreContextProvider} from "./context/useAppStore";

export const authStore = new AuthStore()

function App() {
    return (
        <AppStoreContextProvider authStore={authStore}>
            <BrowserRouter>
                <RouterContextProvider/>
            </BrowserRouter>
        </AppStoreContextProvider>
    );
}

export default App;
