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
import AdminPanelPage from "../pages/admin";
import NotFoundPage from "../pages/NotFoundPage";
import {Alert, Stack} from "@mui/material";

const RouterContextProvider = () => {
    const authStore = useAppStore().authStore

    return (
        <React.Fragment>
            {authStore.isNotVerification() &&
                <Alert severity="warning" variant={'filled'}>
                    Необходимо подтвердить адрес электроной почты!
                </Alert>
            }
            <Routes>
                <Route path={'/'} element={<LandingPage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/sign-up'} element={<SignUpPage/>}/>
                <Route path={'/landing-page'} element={<LandingPage/>}/>
                <Route path={'/user-verification'}
                       element={authStore.isNotVerification() ? <UserVerificationPage/> : <NotFoundPage/>}/>
                <Route path={'/books'} element={<BooksPage/>}/>
                <Route path={'/shopping-cart'}
                       element={authStore.isAuth() ? <ShoppingCartPage/> : <LoginPage/>}/>
                <Route path={'/admin-panel'}
                       element={authStore.isAuth() ? <AdminPanelPage/> : <LoginPage/>}/>
                <Route path={'/book-edit'}>
                    <Route path={':bookId'}
                           element={authStore.isAuth() ? <BookEditPage/> : <LoginPage/>}/>
                </Route>
                <Route path={'/*'} element={<NotFoundPage/>}/>
            </Routes>
        </React.Fragment>
    );
};

export default observer(RouterContextProvider);