import React from 'react';
import LandingPage from "../pages/LandingPage";
import {Route, Routes} from 'react-router-dom'
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import UserVerificationPage from "../pages/UserVerificationPage";
import BooksPage from "../pages/BooksPage";
import BookEditPage from "../pages/BookEditPage";
import {useAppStore} from "../context/useAppStore";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import {observer} from "mobx-react-lite";

const RouterContextProvider = () => {
    const authStore = useAppStore().authStore

    return (
        <Routes>
            <Route path={'/'} element={<LandingPage/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'/sign-up'} element={<SignUpPage/>}/>
            <Route path={'/landing-page'} element={<LandingPage/>}/>
            <Route path={'/user-verification'} element={<UserVerificationPage/>}/>
            <Route path={'/books'} element={<BooksPage/>}/>
            <Route path={'/shopping-cart'} element={authStore.isAuth() ? <ShoppingCartPage/> : <LoginPage/>}/>
            {authStore.isAdmin() &&
                <Route path={'book-edit'}>
                    <Route path={':bookId'} element={<BookEditPage/>}/>
                </Route>
            }
        </Routes>
    );
};

export default observer(RouterContextProvider);