import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import RouterContextProvider from "./router/RouterContextProvider";

function App() {
    return (
        <BrowserRouter>
            <RouterContextProvider/>
        </BrowserRouter>
    );
}

export default App;
