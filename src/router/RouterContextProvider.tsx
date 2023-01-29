import React from 'react';
import LandingPage from "../pages/LandingPage";
import {Route, Routes} from 'react-router-dom'
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import UserVerificationPage from "../pages/UserVerificationPage";

const RouterContextProvider = () => {
    return (
        <Routes>
            <Route path={'/'} element={<LandingPage/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'/sign-up'} element={<SignUpPage/>}/>
            <Route path={'/landing-page'} element={<LandingPage/>}/>
            <Route path={'/user-verification'} element={<UserVerificationPage/>} />
        </Routes>
    );
};

export default RouterContextProvider;