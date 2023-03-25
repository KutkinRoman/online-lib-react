import React from 'react';
import LandingPage from "../pages/LandingPage";
import {Route, Routes} from 'react-router-dom'
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import UserVerificationPage from "../pages/UserVerificationPage";
import BooksPage from "../pages/BooksPage";
import {useAppStore} from "../context/useAppStore";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import {observer} from "mobx-react-lite";
import AdminPanelPage from "../pages/admin";
import NotFoundPage from "../pages/NotFoundPage";
import {Alert} from "@mui/material";
import BooksPageAdmin from "../pages/admin/BooksPageAdmin";
import BookEditPage from "../pages/admin/BookEditPage";
import AuthorsEditPage from "../pages/admin/AuthorsEditPage";
import AuthorsPage from "../pages/admin/AuthorsPage";
import BookCategoriesPage from "../pages/admin/BookCategoriesPage";
import BookCategoryEditPage from "../pages/admin/BookCategoryEditPage";
import BlogEditPage from "../pages/admin/BlogEditPage";
import BlogsPage from "../pages/admin/BlogsPage";
import EBookReaderPage from "../pages/EBookReaderPage";
import BookPage from "../pages/BookPage";

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
                <Route
                    path={'/user-verification'}
                    element={authStore.isNotVerification() ? <UserVerificationPage/> : <NotFoundPage/>}
                />
                <Route
                    path={'/books'}
                    element={<BooksPage/>}
                />
                    <Route
                        path={'/book'}
                        element={<BookPage/>}
                    >
                        <Route
                            path={':bookId'}
                            element={<BookPage/>}
                        />
                    </Route>
                <Route
                    path={'/shopping-cart'}
                    element={authStore.isUser() ? <ShoppingCartPage/> : <LoginPage/>}
                />
                {authStore.isAuth() &&
                    <Route path={'/ebook-read'}>
                        <Route
                            path={':bookId'}
                            element={<EBookReaderPage/>}
                        />
                    </Route>
                }
                {authStore.isAdmin() &&
                    <React.Fragment>
                        <Route
                            path={'/admin-panel'}
                            element={<AdminPanelPage/>}
                        />
                        <Route
                            path={'/admin-panel/books'}
                            element={<BooksPageAdmin/>}
                        />
                        <Route path={'/admin-panel/book-edit'}>
                            <Route path={':bookId'} element={<BookEditPage/>}/>
                        </Route>
                        <Route
                            path={'/admin-panel/authors'}
                            element={<AuthorsPage/>}
                        />
                        <Route path={'/admin-panel/author-edit'}>
                            <Route path={':authorId'} element={<AuthorsEditPage/>}/>
                        </Route>
                        <Route
                            path={'/admin-panel/categories'}
                            element={<BookCategoriesPage/>}
                        />
                        <Route path={'/admin-panel/book-category-edit'}>
                            <Route path={':categoryId'} element={<BookCategoryEditPage/>}/>
                        </Route>
                        <Route
                            path={'/admin-panel/blogs'}
                            element={<BlogsPage/>}
                        />
                        <Route path={'/admin-panel/blog-edit'}>
                            <Route path={':blogId'} element={<BlogEditPage/>}/>
                        </Route>
                    </React.Fragment>
                }
                <Route path={'/*'} element={<NotFoundPage/>}/>
            </Routes>
        </React.Fragment>
    );
};

export default observer(RouterContextProvider);