import React from 'react';
import LandingPage from "../pages/LandingPage";
import {Route, Routes} from 'react-router-dom'
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

const RouterContextProvider = () => {
    return (
        <Routes>
            <Route path={'/'} element={<LandingPage/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'/sign-up'} element={<SignUpPage/>}/>
            <Route path={'/landing-page'} element={<LandingPage/>}/>
        </Routes>
    );
};

export default RouterContextProvider;